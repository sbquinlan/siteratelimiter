import { h } from 'preact';
import { memo } from 'preact/compat';

const SiteListRow = memo((props) => {
  return (
    <li>
      <span>{props.regex}</span>
      <span> {props.total} / {props.rate} </span>
      <span onClick={() => props.deleteSite(props.regex)}>❌</span>
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
