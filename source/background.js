import browser from "webextension-polyfill"

const DAY_IN_SECS = 86400;
const IDLE_SECONDS = 1800;
const PERIODIC_UPDATE_MINS = 1;

const findMatch = (url, sites) =>  {
  for (const [regex, site] of Object.entries(sites)) {
    const {disabled} = site
    if (!disabled && new RegExp(regex).test(url)) {
      return regex
    }
  }
  return null
}

const getUpdatedBucket = (now, info, site, bucket) => {
  // idk if this could happen but maybe
  if (!site) {
    return undefined
  }

  const elapsed = Math.floor((now - info.start) / 1000)
  bucket = bucket ? { ... bucket } : { "total": 0, "last": now };

  if (bucket.total > 0) {
    const leak_elapsed = Math.floor((now - bucket.last) / 1000)
    const leak = Math.floor(
      (site.rate * leak_elapsed) / DAY_IN_SECS
    );
    bucket.total = Math.max(0, bucket.total - leak);
  }
  
  bucket.total += elapsed;
  return bucket;
}

const updateBuckets = (now, records, sites, buckets) => {
  buckets = Object.fromEntries(
    Object.entries(buckets)
      .filter(([regex, _]) => regex in sites)
  );
  const overrides = Object.fromEntries(
    Object.entries(records)
      .filter(([regex, _]) => regex in sites)
      .map(
        ([regex, info]) => [
          regex, 
          getUpdatedBucket(now, info, sites[regex], buckets[regex])
        ]
      )
  );
  return { ... buckets, ... overrides }
}

// todo: handle going over
const updateActiveTabs = () => {
  const now = Date.now()
  return Promise.all([
    browser.storage.local.get("active"),
    browser.storage.sync.get({"sites":null, "buckets":null}),
    browser.tabs.query({"active": true}),
    browser.idle.queryState(IDLE_SECONDS),
  ]).then(
    ([storage_state, {sites, buckets}, browser_state, idle]) => {
      const active = {};

      if (idle != "active") {
        buckets = updateBuckets(now, storage_state, sites, buckets)
        return Promise.all([
          browser.storage.local.set({active}),
          browser.storage.sync.set({buckets})
        ])
      }

      // translate active tabs into regex
      for (const tab in browser_state) {
        const regex = findMatch(tab.url, sites)
        if (!regex) {
          continue;
        } else if (regex in active) {
          active[regex].tabs = active[regex].tabs.concat([tab.tabId])
        } else {
          active[regex] = {
            tabs: [tab.tabId],
            start: regex in storage_state 
              ? storage_state[regex].start 
              : now,
          }
        }
      }

      // find closed regexs
      const old = Object.fromEntries(
        Object.entries(storage_state)
          .filter(([regex, _]) => !(regex in active))
      );

      buckets = updateBuckets(now, old, sites, buckets)
      return Promise.all([
        browser.storage.local.set({active}),
        browser.storage.sync.set({buckets})
      ])
    }
  )
}

browser.tabs.onUpdated.addListener(
  (_, changeInfo, tab) => {
    if (changeInfo.url && tab.active) {
      updateActiveTabs()
    }
  }
);
browser.tabs.onActivated.addListener(updateActiveTabs);
browser.idle.onStateChanged.addListener(updateActiveTabs);
browser.alarms.onAlarm.addListener(updateActiveTabs);
browser.alarms.create(
  "",
  {"periodInMinutes": PERIODIC_UPDATE_MINS}
)
