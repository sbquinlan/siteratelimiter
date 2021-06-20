import { h, Component, render } from 'preact';
import { useState, useEffect, useCallback } from  'preact/hooks';
import { memo } from 'preact/compat';
import browser from 'webextension-polyfill';

const DAY_IN_SECS = 86400;

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

const SiteForm = (props) => {
  const [regex, setRegex] = useState("")
  const [rate, setRate] = useState("")

  return (
    <form onSubmit={(e) => { 
      e.preventDefault(); 
      props.addSite(regex, rate);
      setRegex("")
      setRate("")
    }}>
      <input type="text" 
        placeholder="Regex"
        value={regex}
        onChange={(e) => setRegex(e.target.value)}
      />
      <input type="text"
        placeholder="Rate"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

const Popup = () => {
  const [error, setError] = useState(null)
  const [active, setActive] = useState({})
  const [sites, setSites] = useState({})

  const refresh = () => {
    browser.storage.local.get('active')
      .then(({active}) => setActive(active))
    browser.storage.sync.get('sites')
      .then(({sites}) => setSites(sites))
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
      new Promise((res, rej) => {
        try {
          new RegExp(add)
        } catch (err) {
          rej(err)
        }

        rate = parseInt(rate)
        if (!rate || rate >= DAY_IN_SECS) {
          rej(new Error('Invalid rate'))
        }

        res({
          ... sites,
          [add]: { rate }
        })
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

  console.log(`render()`, sites)
  return (
    <div>
      <p>{error?.toString()}</p>
      <SiteList deleteSite={deleteSite} sites={sites} active={active} />
      <SiteForm addSite={addSite} />
    </div>
  );
}

render(<Popup />, document.body)
