import { h, render } from 'preact';
import { useState, useEffect, useCallback } from  'preact/hooks';
import browser from 'webextension-polyfill';

import SiteForm from './components/SiteForm';
import SiteList from './components/SiteList';

const Popup = () => {
  const [error, setError] = useState(null)
  const [active, setActive] = useState({})
  const [sites, setSites] = useState({})
  const [buckets, setBuckets] = useState({})

  const refresh = () => {
    browser.storage.local.get('active')
      .then(({active}) => setActive(active))
    browser.storage.sync.get(['sites', 'buckets'])
      .then(({buckets, sites}) => {setBuckets(buckets); setSites(sites);})
  }
  useEffect(() => {
    browser.storage.onChanged.addListener(refresh)
    refresh()
  }, [])

  const deleteSite = useCallback(
    (remove) => {
      const {[remove]: _, ... newSites} = sites;
      setSites(newSites)
      browser.storage.sync.set({'sites': newSites})
        .then(() => setError(null))
        .catch(err => {setError(err); setSites(sites);})
    },
    [sites]
  );

  const addSite = useCallback(
    (add, rate) => {
      Promise.resolve({
        ... sites,
        [add]: { rate: parseInt(rate) }
      }).then(
        newSites => {
          setSites(newSites)
          return browser.storage.sync.set({'sites': newSites})
        }
      ) .then(() => setError(null))
        .catch(err => {setError(err); setSites(sites);})
    },
    [sites]
  )
  return (
    <div class="container w-60 p-4 mx-auto">
      <p class="text-center w-full">{error?.toString()}</p>
      <SiteList 
        deleteSite={deleteSite} 
        sites={sites} 
        buckets={buckets}
        active={active} 
      />
      <SiteForm addSite={addSite} />
    </div>
  );
}

render(<Popup />, document.body)
