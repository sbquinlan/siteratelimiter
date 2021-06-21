import {DAY_IN_SECS, IDLE_SECONDS, PERIODIC_UPDATE_MINS} from "./constants.js"
import now from './now.js'

const findMatch = (url, sites) =>  {
  for (const [regex, site] of Object.entries(sites)) {
    if (!site.disabled && new RegExp(regex).test(url)) {
      return regex
    }
  }
  return null
}

const updateSingleBucket = (timestamp_ms, info, site, bucket) => {
  const elapsed = Math.floor((timestamp_ms - info.start) / 1000)
  bucket = bucket ? { ... bucket } : { "total": 0, "last": timestamp_ms };

  if (bucket.total > 0) {
    const leak_elapsed = Math.floor((timestamp_ms - bucket.last) / 1000)
    const leak = Math.floor((site.rate * leak_elapsed) / DAY_IN_SECS);
    bucket.total = Math.max(0, bucket.total - leak)
  }
  
  bucket.total += elapsed;
  bucket.last = timestamp_ms;
  return bucket;
}

const updateBuckets = (timestamp_ms, records, sites, buckets) => {
  // filter out dead buckets
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
          updateSingleBucket(timestamp_ms, info, sites[regex], buckets[regex])
        ]
      )
  );

  return { ... buckets, ... overrides }
}

export function updateState([storage_state, {sites, buckets}, browser_state, idle]) {
  const timestamp_ms = now();
  const active = {};

  // close all tabs if idle
  if (idle != "active") {
    return [active, updateBuckets(timestamp_ms, storage_state, sites, buckets)]
  }

  // translate active tabs into regex
  for (const tab of browser_state) {
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
          : timestamp_ms,
      }
    }
  }

  // find closed regexs
  const old = Object.fromEntries(
    Object.entries(storage_state)
      .filter(([regex, _]) => !(regex in active))
  );
  return [active, updateBuckets(timestamp_ms, old, sites, buckets)]
}
