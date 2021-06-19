import browser from "webextension-polyfill"

// we want to write to storage when we stop looking at a site.
// this happens when we: 
// - navigate to a new page
// - tab to a new tab
// - close a tab (switch to a new tab?)
// in order to know length of time, we need to track when a page starts being active
// this happens when we actively nagivate to a new page or a tab starts being active

const DAY_IN_SECS = 86400;

const findMatch = (url, sites) =>  {
  for (const site of sites) {
    const {regex} = site
    if (new RegExp(regex).test(url)) {
      return site
    }
  }
  return null
}

const updateActiveTab = (tab) => {
  browser.storage.local.get("active")
    .then(
      ({active}) => {
        if (!active) return Promise.resolve(null)
        const {url, start} = active;
        const new_url = tab.url;
        
        // there's no lock so hopefully this could have 
        // write races but whatever fuck it
        return browser.storage.sync.get({"sites":null, "buckets":null})
          .then(
            ({sites, buckets}) => {
              const site = findMatch(url, sites);
              // do we still care?
              if (site == null) {
                return Promise.resolve(null)
              }

              // are we over the limit?
              const now = Date.now()
              const elapsed = Math.floor((now - start) / 1000)
              const bucket = buckets[site.regex] ?? {
                total: 0,
                last: now
              };

              if (bucket.total > 0) {
                // secs per 24 hours
                const leak_elapsed = Math.floor((now - bucket.last) / 1000)
                const leak = Math.floor(
                  (site.rate * leak_elapsed) / DAY_IN_SECS
                );
                bucket.total = Math.max(0, bucket.total - leak);
              }
              
              bucket.total += elapsed;
              if (bucket.total >= site.rate) {
                // TODO: over the limit, do something?
              }

              const new_site = findMatch(new_url, sites);
              // did the active site actually change?
              if (new_site.regex == site.regex) {
                return Promise.resolve(null)
              }

              // update that bucket
              buckets[site.regex] = bucket;

              return Promise.all([
                browser.storage.sync.set({buckets}),
                browser.storage.local.set({
                  "active": {
                    "url": new_url,
                    "start": now,
                  }
                })
              ])
            }
          );
      }
    )
}

browser.tabs.onUpdated.addListener(
  (tabId, changeInfo, tab) => {
    if (changeInfo.url && tab.active) {
      updateActiveTab(tab)
    }
  }
);

browser.tabs.onActivated.addListener(
  ({prev, tabId, windowId}) => {
    browser.tabs.get(tabId).then(updateActiveTab)
  }
);
