import {jest, beforeAll, describe, expect, test} from '@jest/globals'

import {updateState} from '../source/lib/state.js'

describe('updateState', () => {

  test('should add new tabs that are tracked', function() {
    const {active, buckets} = updateState(
      100,
      { 'active': {} }, // storage {tabs, start}
      {
        'sites': {'reddit.com': {'rate': 3600}}, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [{'url': 'http://reddit.com/r/all', 'id': 1}], // {url, id}
      'active'
    )
    
    expect(active).toStrictEqual(
      {'reddit.com': {'tabs': [1], 'start': 100}}
    )
    expect(buckets).toStrictEqual({});
  });

  test('should ignore active tabs that are removed from sites', function() {
    const {active, buckets} = updateState(
      100,
      {
        'active': {
          'reddit.com': {'tabs': [1], 'start': 100},
        }
      }, // storage {tabs, start}
      {
        'sites': {}, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [{'url': 'http://reddit.com/r/all', 'id': 1}], // {url, id}
      'active'
    )
    
    expect(active).toStrictEqual({})
    expect(buckets).toStrictEqual({});
  });

  test('should continue tracking tabs that are active and tracked', function() {
    const {active, buckets} = updateState(
      100,
      {
        'active': {
          'reddit.com': {'tabs': [1], 'start': 50}
        }
      }, // storage {tabs, start}
      {
        'sites': {'reddit.com': {'rate': 3600}}, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [{'url': 'http://reddit.com/r/all', 'id': 1}], // {url, id}
      'active'
    )
    
    expect(active).toStrictEqual({'reddit.com': {'tabs': [1], 'start': 50}})
    expect(buckets).toStrictEqual({
      'reddit.com': {
        'last': 100,
        'total': 0
      }
    });
  });

  test('should continue tracking tabs that are active and tracked using the existing start', function() {
    const {active, buckets} = updateState(
      200,
      {
        'active': {
          'reddit.com': {'tabs': [1], 'start': 150}
        }
      }, // storage {tabs, start}
      {
        'sites': {'reddit.com': {'rate': 3600}}, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [{'url': 'http://reddit.com/r/all', 'id': 1}], // {url, id}
      'active'
    )
    
    expect(active).toStrictEqual({'reddit.com': {'tabs': [1], 'start': 150}})
    expect(buckets).toStrictEqual({
      'reddit.com': {
        'last': 200,
        'total': 0
      }
    });
  });

  test('should aggregate tracking tabs that are active', function() {
    const {active, buckets} = updateState(
      100,
      {
        'active': {
          'reddit.com': {'tabs': [1], 'start': 50}
        }
      }, // storage {tabs, start}
      {
        'sites': {'reddit.com': {'rate': 3600}}, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [
        {'url': 'http://reddit.com/r/all', 'id': 1}, 
        {'url': 'http://reddit.com/r/pics', 'id': 3}
      ], // {url, id}
      'active'
    )
    
    expect(active).toStrictEqual({'reddit.com': {'tabs': [1, 3], 'start': 50}})
    expect(buckets).toStrictEqual({
      'reddit.com': {
        'last': 100,
        'total': 0
      }
    });
  });

  test('should (de)aggregate tracking tabs that are active', function() {
    const {active, buckets} = updateState(
      100,
      {
        'active': {
          'reddit.com': {'tabs': [1, 3], 'start': 50}
        }
      }, // storage {tabs, start}
      {
        'sites': {'reddit.com': {'rate': 3600}}, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [{'url': 'http://reddit.com/r/all', 'id': 1}], // {url, id}
      'active'
    )
    
    expect(active).toStrictEqual({'reddit.com': {'tabs': [1], 'start': 50}})
    expect(buckets).toStrictEqual({
      'reddit.com': {
        'last': 100,
        'total': 0
      }
    });
  });

  test('should aggregate multiple active tabs', function() {
    const {active, buckets} = updateState(
      100,
      { 
        'active': {
          'reddit.com': {'tabs': [1], 'start': 50}
        }
      }, // storage {tabs, start}
      {
        'sites': {
          'reddit.com': {'rate': 3600},
          'twitch.tv': {'rate': 0}
        }, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [
        {'url': 'http://reddit.com/r/all', 'id': 1}, 
        {'url': 'http://reddit.com/r/pics', 'id': 3},
        {'url': 'http://twitch.tv/shroud', 'id': 2}, 
        {'url': 'http://twitch.tv/', 'id': 4}
      ], // {url, id}
      'active'
    )
    
    expect(active).toStrictEqual({
      'reddit.com': {'tabs': [1, 3], 'start': 50},
      'twitch.tv': {'tabs': [2, 4], 'start': 100}
    })
    expect(buckets).toStrictEqual({
      'reddit.com': {
        'last': 100,
        'total': 0
      }
    });
  });

  test('should ignore active tabs on idle', function() {
    const {active, buckets} = updateState(
      100,
      { 'active': {} }, // storage {tabs, start}
      {
        'sites': {
          'reddit.com': {'rate': 3600},
          'twitch.tv': {'rate': 0}
        }, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [{'url': 'http://reddit.com/r/all', 'id': 1}], // {url, id}
      'idle'
    )
    
    expect(active).toStrictEqual({});
    expect(buckets).toStrictEqual({});
  });

  test('should update buckets when idle', function() {
    const {active, buckets} = updateState(
      100,
      { 
        'active': {
          'reddit.com': {'tabs': [1], 'start': 50}
        }
      }, // storage {tabs, start}
      {
        'sites': {
          'reddit.com': {'rate': 3600},
        }, // {rate, disabled}
        'buckets': {} // {total, last}
      }, 
      [{'url': 'http://reddit.com/r/all', 'id': 1}], // {url, id}
      'idle'
    )
    
    expect(active).toStrictEqual({});
    expect(buckets).toStrictEqual({'reddit.com': {'total': 0,'last': 100}});
  });

  test('should update buckets when tabs close', function() {
    const {active, buckets} = updateState(
      100,
      {
        'active': {
          'reddit.com': {'tabs': [1], 'start': 50}
        } // storage {tabs, start}
      },
      {
        'sites': {
          'reddit.com': {'rate': 3600},
        }, // {rate, disabled}
        'buckets': {
          'twitch.tv': {'total': 0,'last': 100}
        } // {total, last}
      }, 
      [], // {url, id}
      'active'
    );
    
    expect(active).toStrictEqual({});
    expect(buckets).toStrictEqual({'reddit.com': {'total': 0,'last': 100}});
  });

  test('should leak the buckets', function() {
    const SECS_IN_DAY = 24 * 60 * 60 * 1000;

    const {active, buckets} = updateState(
      SECS_IN_DAY + 4000,
      // storage {tabs, start}
      {
        'active': {
          'reddit.com': {'tabs': [1], 'start': SECS_IN_DAY + 2000}
        }
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
      // {url, id}
      [], 
      'active'
    )
    
    expect(active).toStrictEqual({});
    expect(buckets).toStrictEqual({
      'reddit.com': {'total': 2,'last': SECS_IN_DAY + 4000}
    });
  });

  test('should work like a real call', function() {
    const {active, buckets} = updateState(
      1625697079712,
      // storage {tabs, start}
      {
          "active": {
              "twitch.tv": {
                  "start": 1625697067494,
                  "tabs": [
                      73
                  ]
              }
          }
      },
      // {rate, disabled}
      {
          "buckets": {},
          "sites": {
              "twitch.tv": {
                  "rate": 3600
              }
          }
      },
      // {url, id}
      [
        {
            "active": true,
            "id": 74,
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
        }
      ], 
      'active'
    );
    
    expect(active).toStrictEqual({});
    expect(buckets).toStrictEqual({
      'twitch.tv': {
        'total': Math.floor((1625697079712 - 1625697067494) / 1000),
        'last': 1625697079712
      }
    });
  });
})
