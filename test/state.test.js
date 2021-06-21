import {jest, beforeAll, describe, expect, test} from '@jest/globals'

import now from '../source/lib/now.js'
import {updateState} from '../source/lib/state.js'

jest.mock('../source/lib/now.js')

describe('updateState', () => {
  beforeAll(() => {
    now.mockImplementation(() => 100)
  })

  test('should add new tabs that are tracked', function() {
    const [active, buckets] = updateState([
      {}, // storage {tabs, start}
      {
        'sites': {'reddit.com': {'rate': 3600}}, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [{'url': 'http://reddit.com/r/all', 'tabId': 1}], // {url, tabId}
      'active'
    ])
    
    expect(active).toStrictEqual(
      {'reddit.com': {'tabs': [1], 'start': 100}}
    )
    expect(buckets).toStrictEqual({});
  });

  test('should ignore active tabs that are removed from sites', function() {
    const [active, buckets] = updateState([
      {'reddit.com': {'tabs': [1], 'start': 100}}, // storage {tabs, start}
      {
        'sites': {}, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [{'url': 'http://reddit.com/r/all', 'tabId': 1}], // {url, tabId}
      'active'
    ])
    
    expect(active).toStrictEqual({})
    expect(buckets).toStrictEqual({});
  });

  test('should continue tracking tabs that are active and tracked', function() {
    const [active, buckets] = updateState([
      {'reddit.com': {'tabs': [1], 'start': 50}}, // storage {tabs, start}
      {
        'sites': {'reddit.com': {'rate': 3600}}, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [{'url': 'http://reddit.com/r/all', 'tabId': 1}], // {url, tabId}
      'active'
    ])
    
    expect(active).toStrictEqual({'reddit.com': {'tabs': [1], 'start': 50}})
    expect(buckets).toStrictEqual({});
  });

  test('should continue tracking tabs that are active and tracked using the existing start', function() {
    const [active, buckets] = updateState([
      {'reddit.com': {'tabs': [1], 'start': 150}}, // storage {tabs, start}
      {
        'sites': {'reddit.com': {'rate': 3600}}, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [{'url': 'http://reddit.com/r/all', 'tabId': 1}], // {url, tabId}
      'active'
    ])
    
    expect(active).toStrictEqual({'reddit.com': {'tabs': [1], 'start': 150}})
    expect(buckets).toStrictEqual({});
  });

  test('should aggregate tracking tabs that are active', function() {
    const [active, buckets] = updateState([
      {'reddit.com': {'tabs': [1], 'start': 50}}, // storage {tabs, start}
      {
        'sites': {'reddit.com': {'rate': 3600}}, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [
        {'url': 'http://reddit.com/r/all', 'tabId': 1}, 
        {'url': 'http://reddit.com/r/pics', 'tabId': 3}
      ], // {url, tabId}
      'active'
    ])
    
    expect(active).toStrictEqual({'reddit.com': {'tabs': [1, 3], 'start': 50}})
    expect(buckets).toStrictEqual({});
  });

  test('should (de)aggregate tracking tabs that are active', function() {
    const [active, buckets] = updateState([
      {'reddit.com': {'tabs': [1, 3], 'start': 50}}, // storage {tabs, start}
      {
        'sites': {'reddit.com': {'rate': 3600}}, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [{'url': 'http://reddit.com/r/all', 'tabId': 1}], // {url, tabId}
      'active'
    ])
    
    expect(active).toStrictEqual({'reddit.com': {'tabs': [1], 'start': 50}})
    expect(buckets).toStrictEqual({});
  });

  test('should aggregate multiple active tabs', function() {
    const [active, buckets] = updateState([
      {'reddit.com': {'tabs': [1], 'start': 50}}, // storage {tabs, start}
      {
        'sites': {
          'reddit.com': {'rate': 3600},
          'twitch.tv': {'rate': 0}
        }, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [
        {'url': 'http://reddit.com/r/all', 'tabId': 1}, 
        {'url': 'http://reddit.com/r/pics', 'tabId': 3},
        {'url': 'http://twitch.tv/shroud', 'tabId': 2}, 
        {'url': 'http://twitch.tv/', 'tabId': 4}
      ], // {url, tabId}
      'active'
    ])
    
    expect(active).toStrictEqual({
      'reddit.com': {'tabs': [1, 3], 'start': 50},
      'twitch.tv': {'tabs': [2, 4], 'start': 100}
    })
    expect(buckets).toStrictEqual({});
  });

  test('should ignore active tabs on idle', function() {
    const [active, buckets] = updateState([
      {}, // storage {tabs, start}
      {
        'sites': {
          'reddit.com': {'rate': 3600},
          'twitch.tv': {'rate': 0}
        }, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [{'url': 'http://reddit.com/r/all', 'tabId': 1}], // {url, tabId}
      'idle'
    ])
    
    expect(active).toStrictEqual({});
    expect(buckets).toStrictEqual({});
  });

  test('should update buckets tabs on idle', function() {
    const [active, buckets] = updateState([
      {'reddit.com': {'tabs': [1], 'start': 50}}, // storage {tabs, start}
      {
        'sites': {
          'reddit.com': {'rate': 3600},
        }, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [{'url': 'http://reddit.com/r/all', 'tabId': 1}], // {url, tabId}
      'idle'
    ])
    
    expect(active).toStrictEqual({});
    expect(buckets).toStrictEqual({'reddit.com': {'total': 0,'last': 100}});
  });

  test('should update buckets tabs on close', function() {
    const [active, buckets] = updateState([
      {'reddit.com': {'tabs': [1], 'start': 50}}, // storage {tabs, start}
      {
        'sites': {
          'reddit.com': {'rate': 3600},
        }, // {rate, disabled}
        'buckets': {
          'twitch.tv': {'total': 0,'last': 100}
        } // {total, last}
      }, 
      [], // {url, tabId}
      'active'
    ])
    
    expect(active).toStrictEqual({});
    expect(buckets).toStrictEqual({'reddit.com': {'total': 0,'last': 100}});
  });

  test('should leak the buckets', function() {
    const SECS_IN_DAY = 24 * 60 * 60 * 1000;
    now.mockImplementation(() => SECS_IN_DAY + 4000)

    const [active, buckets] = updateState([
      // storage {tabs, start}
      {
        'reddit.com': {'tabs': [1], 'start': SECS_IN_DAY + 2000}
      },
      {
        // {rate, disabled}
        'sites': {
          'reddit.com': {'rate': 3600},
        },
        // {total, last}
        'buckets': {
          'reddit.com': {'total': 3600,'last': 2000}
        }
      },
      // {url, tabId}
      [], 
      'active'
    ])
    
    expect(active).toStrictEqual({});
    expect(buckets).toStrictEqual({
      'reddit.com': {'total': 2,'last': SECS_IN_DAY + 4000}
    });
  });
})

