import { h } from 'preact';
import { useState } from  'preact/hooks';

import {DAY_IN_SECS} from '../lib/constants'

// sites: { [regex]: {rate: #secs}} 

const SiteForm = (props) => {
  const [regex, setRegex] = useState("")
  const [rate, setRate] = useState("")
  let disabled = rate == null || rate < 0 || rate > DAY_IN_SECS
  try {
    new RegExp(regex)
  } catch (err) {
    disabled = true
  }

  return (
    <div class="flex flex-row space-x-1">
      <div class="pt-0">
        <input class="px-2 py-1 placeholder-gray-300 text-gray-700 relative bg-white rounded text-xs border border-gray-700 outline-none focus:outline-none focus:ring w-full"
          type="text" 
          placeholder="Regex"
          value={regex}
          onChange={(e) => setRegex(e.target.value)}
        />
      </div>
      <div class="pt-0">
        <input class="px-2 py-1 placeholder-gray-300 text-gray-700 relative bg-white rounded text-xs border border-gray-700 outline-none focus:outline-none focus:ring w-full"
          type="number"
          min={0}
          max={DAY_IN_SECS}
          placeholder="Rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <button class="bg-gray-700 text-white disabled:opacity-50 active:bg-gray-900 font-bold text-xs px-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150" 
        type="button"
        disabled={disabled}
        onClick={(e) => { 
          props.addSite(regex, rate);
          setRegex("")
          setRate("")
        }}
        type="button">
        ＋
      </button>
    </div>
  );
}

export default SiteForm
