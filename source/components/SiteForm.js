import { h } from 'preact';
import { useState } from  'preact/hooks';

import {DAY_IN_SECS} from '../lib/constants'

// sites: { [regex]: {rate: #secs}} 

const SiteForm = (props) => {
  const [regex, setRegex] = useState("")
  const [rate, setRate] = useState("")

  // try {
  //   new RegExp(add)
  // } catch (err) {
  //   rej(err)
  // }

  // rate = parseInt(rate)
  // if (!rate || rate < 60 || rate >= DAY_IN_SECS) {
  //   rej(new Error('Invalid rate'))
  // }

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

export default SiteForm
