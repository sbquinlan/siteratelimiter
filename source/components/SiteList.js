import { h } from 'preact';
import { memo } from 'preact/compat';

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
    <li class="relative rounded mb-1 px-2 py-1 flex flex-row items-baseline bg-gray-700 text-gray-50">
      <span class="z-10 truncate flex-grow max-w-lg text-sm">{props.regex}</span>
      <span class="ml-1 z-10 flex-shrink-0 text-xs"> {format_time(props.total)} / {format_time(props.rate)} </span>
      <span class="ml-1 z-10 flex-shrink-0 text-sm cursor-pointer" onClick={() => props.deleteSite(props.regex)}>⤬</span>
      <div style={`width: ${progress}%`} class={`left-0 top-0 rounded z-0 absolute h-full ${progress > 70 ? 'bg-red-800' : 'bg-green-800'}`}></div> 
    </li>
  );
})

const SiteList = memo((props) => {
  return (
    <ul>
      {
        Object.entries(props.sites)
          .map(
            ([key, {rate}]) => <SiteListRow 
              key={key} 
              regex={key}
              total={props.buckets[key]?.total ?? 0}
              last={props.active[key]?.last}
              rate={rate}
              deleteSite={props.deleteSite}
            />
          )
      }
    </ul>
  )
})

export default SiteList
