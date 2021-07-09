import { h } from 'preact';
import { memo } from 'preact/compat';
import { updateSingleBucket } from '../lib/state';

const SECS_IN_HOUR = 3600;
const SECS_IN_MIN = 60;
const format_time = (seconds) => {
  const hours = Math.floor(seconds/SECS_IN_HOUR)
  const mins = Math.floor((seconds%SECS_IN_HOUR)/SECS_IN_MIN)
  return `${hours}:${mins < 10 ? '0' + mins : mins}`
}

const SiteListRow = memo((props) => {
  const progress = Math.min(
    Math.floor(props.total * 100 / props.rate),
    100
  )
  return (
    <li class={`relative rounded mb-1 px-2 py-1 flex flex-row items-baseline bg-gray-700 text-gray-50`}>
      <span class="z-10 truncate flex-grow max-w-lg text-sm">{props.regex}</span>
      <span class="ml-1 z-10 flex-shrink-0 text-xs"> {format_time(props.total)} / {format_time(props.rate)} </span>
      <span class="ml-1 z-10 flex-shrink-0 text-sm cursor-pointer" onClick={() => props.deleteSite(props.regex)}>⤬</span>
      <div style={`width: ${progress}%`} class={`${props.active ? 'animate-pulse' : ''} left-0 top-0 rounded z-0 absolute h-full ${progress > 70 ? 'bg-red-800' : 'bg-green-800'}`}></div> 
    </li>
  );
})

const SiteList = memo((props) => {
  const now = Date.now()
  
  return (
    <ul>
      {
        Object.entries(props.sites)
          .map(
            ([key, {rate}]) => {
              // even though buckets are updated frequently
              // we still only update buckets if they are active
              // so this will update inactive buckets for display
              const updated = updateSingleBucket(
                now, 
                props.active[key]?.start ?? now, 
                rate, 
                props.buckets[key]
              )
              return (
                <SiteListRow 
                  key={key} 
                  regex={key}
                  total={updated.total}
                  active={key in props.active}
                  rate={rate}
                  deleteSite={props.deleteSite}
                />
              );
            }
          )
      }
    </ul>
  )
})

export default SiteList
