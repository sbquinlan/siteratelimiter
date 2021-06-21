import browser from "webextension-polyfill"
import {IDLE_SECONDS, PERIODIC_UPDATE_MINS} from './lib/constants'
import {updateState} from './lib/state'

// todo: handle tabs going over
const updateActiveTabs = () => {
  const now = Date.now()
  return Promise.all([
    browser.storage.local.get("active"),
    browser.storage.sync.get({"sites":{}, "buckets":{}}),
    browser.tabs.query({"active": true}),
    browser.idle.queryState(IDLE_SECONDS),
  ]).then(updateState)
    .then(
      ([active, buckets]) => {
        console.log(active, buckets)
        return Promise.all([
          browser.storage.local.set({active}),
          browser.storage.sync.set({buckets})
        ])
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
