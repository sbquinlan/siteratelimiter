import { h } from 'preact';
import { memo } from 'preact/compat';

const SiteListRow = memo((props) => {
  return (
    <li>
      <span>{props.regex}</span>
      <span>{props.info.rate}</span>
      <span>{props.active?.total ?? 0}</span>
      <span onClick={() => props.deleteSite(props.regex)}>X</span>
    </li>
  );
})

const SiteList = memo((props) => {
  return (
    <ul>
      {
        Object.entries(props.sites)
          .map(
            ([key, value]) => <SiteListRow 
              key={key} 
              regex={key}
              info={value} 
              active={props.active[key]}
              deleteSite={props.deleteSite}
            />
          )
      }
    </ul>
  )
})

module.exports = SiteList
