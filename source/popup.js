import { h, Component, render } from 'preact';
import { useState, useEffect } from  'preact/hooks';
import browser from 'webextension-polyfill';

const Popup = () => {
  const [sites, setSites] = useState({})
  useEffect(() => {
    browser.storage.sync.get('sites')
      .then(({sites}) => setSites(sites))
  });

  return (
    <ul>
      {
        Object.entries(sites)
          .map(([key, value]) => {
            if (key == '_today') {
              return null
            }
            return <li>{key}: {value}</li>
          })
      }
    </ul>
  );
}

render(<Popup />, document.body)
