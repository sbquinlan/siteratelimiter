![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

# Site Ratelimiter

An open source browser extension that allows tracking time spent per 24 hours using a [leaky bucket](https://en.wikipedia.org/wiki/Leaky_bucket). The main purpose of this extension over similar offerings is simply to be transparent and **not** sell user data. 

The buckets match against URIs using RegExps. The "limit" is specified in seconds per 24 hours currently. When a limiter reaches the limit it doesn't prevent browsing to the site it just warns the user that the limit has been reached.
