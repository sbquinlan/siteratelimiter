import browser from "webextension-polyfill"
import {IDLE_SECONDS, PERIODIC_UPDATE_MINS} from './lib/constants'
import {updateState} from './lib/state'

const updateActiveTabs = () => {
  const now = Date.now()
  return Promise.all([
    browser.storage.local.get("active"),
    browser.storage.sync.get({"sites":{}, "buckets":{}}),
    browser.tabs.query({"active": true}),
    browser.idle.queryState(IDLE_SECONDS),
  ])
    .then(data => {
      const [_, {sites}] = data
      const {active, buckets} = updateState(now, ... data)
      return {active, buckets, sites}
    })
    .then(
      ({active, buckets, sites}) => {
        const active_over = Object.entries(buckets)
          .filter(([k, bucket]) => k in active && bucket.total > sites[k].rate)
        browser.browserAction.setBadgeText({'text': `${active_over.length > 0 ? active_over.length : ''}`})
        browser.browserAction.setBadgeBackgroundColor({color: "red"});
        
        return Promise.all([
          browser.storage.local.set({active}),
          browser.storage.sync.set({buckets})
        ]);
      }
    )
    .catch(console.error)
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
