import { h, Component, render } from 'preact';
import { useState, useEffect } from  'preact/hooks';
import browser from 'webextension-polyfill';

const Popup = () => {
  const [active, setActive] = useState({})
  const [sites, setSites] = useState({})
  useEffect(() => {
    browser.storage.sync.get("sites")
      .then(({sites}) => setSites(sites))
    browser.storage.local.get("active")
      .then(({active}) => setActive(active))
  });

  return (
    <ul>
      {
        Object.entries(sites)
          .map(([key, value]) => {
            return <li>{key}: {value}</li>
          })
      }
      {
        Object.entries(active)
          .map(([key, value]) => {
            return <li>{key}: {value}</li>
          })
      }
    </ul>
  );
}

render(<Popup />, document.body)
