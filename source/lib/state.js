import {DAY_IN_SECS} from "./constants.js"

// buckets = { [regex] : {total: #secs, last: #timestamp_ms}}
// active = { [regex] : {tags: [], start: #timestamp_ms}}

const findMatch = (url, sites) =>  {
  for (const [regex, site] of Object.entries(sites)) {
    if (!site.disabled && new RegExp(regex).test(url)) {
      return regex
    }
  }
  return null
}

const updateSingleBucket = (timestamp_ms, start, rate, bucket) => {
  // If you have two overlapping tabs open between machines and close them 
  // both. it'll probably double count the time when it should only count it once. Thats kind of
  // strange. I think limiting time additions to only be since the last bucket update
  // will limit the impact of that sort of situation, but it could also create bugs
  // if a bucket is updated for some reason other than a time addition
  const elapsed = Math.floor((timestamp_ms - Math.max(start, bucket?.last ?? 0)) / 1000)
  bucket = bucket ? { ... bucket } : { "total": 0, "last": timestamp_ms };

  if (bucket.total > 0) {
    const leak_elapsed = Math.floor((timestamp_ms - bucket.last) / 1000)
    const leak = Math.floor((rate * leak_elapsed) / DAY_IN_SECS);
    bucket.total = Math.max(0, bucket.total - leak)
  }
  
  bucket.total += elapsed;
  bucket.last = timestamp_ms;
  return bucket;
}

const updateBuckets = (timestamp_ms, old_active, sites, buckets) => {
  // filter out dead buckets
  buckets = Object.fromEntries(
    Object.entries(buckets)
      .filter(([regex, _]) => regex in sites)
  );
  const overrides = Object.fromEntries(
    Object.entries(old_active)
      .filter(([regex, _]) => regex in sites)
      .map(
        ([regex, {start}]) => [
          regex, 
          updateSingleBucket(timestamp_ms, start, sites[regex].rate, buckets[regex])
        ]
      )
  );

  return { ... buckets, ... overrides }
}

export function updateState(timestamp_ms, {active}, {sites, buckets}, browser_state, idle) {
  const new_active = {};

  // close all tabs if idle
  if (idle != "active") {
    return {
      'active': new_active, 
      'buckets': updateBuckets(timestamp_ms, active, sites, buckets)
    };
  }

  // translate active tabs into regex
  for (const tab of browser_state) {
    const regex = findMatch(tab.url, sites)
    if (!regex) {
      continue;
    } else if (regex in new_active) {
      // this should keep the existing start time, such
      // that opening new tabs for the same regex won't 
      // reset the the start time of the active tab tracking
      new_active[regex].tabs = new_active[regex].tabs.concat([tab.id])
    } else {
      new_active[regex] = {
        tabs: [tab.id],
        start: regex in active 
          ? active[regex].start 
          : timestamp_ms,
      }
    }
  }

  // find closed regexs, only update closed buckets
  // This isn't really necessary and in fact it might be bad. I think
  // initially I thought less updates to the buckets would help with 
  // race conditions but I think it might make this less robust.
  const old = Object.fromEntries(
    Object.entries(active)
      .filter(([regex, _]) => !(regex in new_active))
  );
  return {
    'active': new_active, 
    'buckets': updateBuckets(timestamp_ms, old, sites, buckets)
  };
}
