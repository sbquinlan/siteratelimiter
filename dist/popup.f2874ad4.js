// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3i9CW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _webextensionPolyfill = require("webextension-polyfill");
var _webextensionPolyfillDefault = parcelHelpers.interopDefault(_webextensionPolyfill);
const Popup = ()=>{
    const [error, setError] = _hooks.useState(null);
    const [tab, setTab] = _hooks.useState(null);
    _hooks.useEffect(()=>{
        _webextensionPolyfillDefault.default.tabs.query({
            active: true,
            currentWindow: true
        }).then((tab1, error1)=>{
            setTab(tab1);
            setError(error1);
        });
    });
    return(/*#__PURE__*/ _preact.h("div", {
        __source: {
            fileName: "/Users/squinlan/Documents/sitetimer/source/popup.js",
            lineNumber: 17
        },
        __self: undefined
    }, /*#__PURE__*/ _preact.h("h1", {
        __source: {
            fileName: "/Users/squinlan/Documents/sitetimer/source/popup.js",
            lineNumber: 18
        },
        __self: undefined
    }, "Hello World"), /*#__PURE__*/ _preact.h("h3", {
        __source: {
            fileName: "/Users/squinlan/Documents/sitetimer/source/popup.js",
            lineNumber: 19
        },
        __self: undefined
    }, "Current tab:"), /*#__PURE__*/ _preact.h("h3", {
        __source: {
            fileName: "/Users/squinlan/Documents/sitetimer/source/popup.js",
            lineNumber: 20
        },
        __self: undefined
    }, tab && tab.title)));
};
_preact.render(/*#__PURE__*/ _preact.h(Popup, {
    __source: {
        fileName: "/Users/squinlan/Documents/sitetimer/source/popup.js",
        lineNumber: 25
    },
    __self: undefined
}), document.body);

},{"preact":"1xW1m","webextension-polyfill":"59onB","@parcel/transformer-js/src/esmodule-helpers.js":"omrdF","preact/hooks":"ZVgFz"}],"1xW1m":[function(require,module,exports) {
var n, l, u, t, i, o, r = {
}, f = [], e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function c(n1, l1) {
    for(var u1 in l1)n1[u1] = l1[u1];
    return n1;
}
function s(n1) {
    var l1 = n1.parentNode;
    l1 && l1.removeChild(n1);
}
function a(n1, l1, u1) {
    var t1, i1, o1, r1 = arguments, f1 = {
    };
    for(o1 in l1)"key" == o1 ? t1 = l1[o1] : "ref" == o1 ? i1 = l1[o1] : f1[o1] = l1[o1];
    if (arguments.length > 3) for(u1 = [
        u1
    ], o1 = 3; o1 < arguments.length; o1++)u1.push(r1[o1]);
    if (null != u1 && (f1.children = u1), "function" == typeof n1 && null != n1.defaultProps) for(o1 in n1.defaultProps)(void 0) === f1[o1] && (f1[o1] = n1.defaultProps[o1]);
    return v(n1, f1, t1, i1, null);
}
function v(l1, u1, t1, i1, o1) {
    var r1 = {
        type: l1,
        props: u1,
        key: t1,
        ref: i1,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o1 ? ++n.__v : o1
    };
    return null != n.vnode && n.vnode(r1), r1;
}
function p(n1) {
    return n1.children;
}
function h(n1, l1) {
    this.props = n1, this.context = l1;
}
function y(n1, l1) {
    if (null == l1) return n1.__ ? y(n1.__, n1.__.__k.indexOf(n1) + 1) : null;
    for(var u1; l1 < n1.__k.length; l1++)if (null != (u1 = n1.__k[l1]) && null != u1.__e) return u1.__e;
    return "function" == typeof n1.type ? y(n1) : null;
}
function d(n1) {
    var l1, u1;
    if (null != (n1 = n1.__) && null != n1.__c) {
        for(n1.__e = n1.__c.base = null, l1 = 0; l1 < n1.__k.length; l1++)if (null != (u1 = n1.__k[l1]) && null != u1.__e) {
            n1.__e = n1.__c.base = u1.__e;
            break;
        }
        return d(n1);
    }
}
function _(l1) {
    (!l1.__d && (l1.__d = true) && u.push(l1) && !k.__r++ || i !== n.debounceRendering) && ((i = n.debounceRendering) || t)(k);
}
function k() {
    for(var n1; k.__r = u.length;)n1 = u.sort(function(n2, l1) {
        return n2.__v.__b - l1.__v.__b;
    }), u = [], n1.some(function(n2) {
        var l1, u1, t1, i1, o1, r1;
        n2.__d && (o1 = (i1 = (l1 = n2).__v).__e, (r1 = l1.__P) && (u1 = [], (t1 = c({
        }, i1)).__v = i1.__v + 1, $(r1, i1, t1, l1.__n, (void 0) !== r1.ownerSVGElement, null != i1.__h ? [
            o1
        ] : null, u1, null == o1 ? y(i1) : o1, i1.__h), H(u1, i1), i1.__e != o1 && d(i1)));
    });
}
function x(n1, l1, u1, t1, i1, o1, e1, c1, s1, a1) {
    var h1, d1, _1, k1, x1, g, w, A = t1 && t1.__k || f, P = A.length;
    for(u1.__k = [], h1 = 0; h1 < l1.length; h1++)if (null != (k1 = u1.__k[h1] = null == (k1 = l1[h1]) || "boolean" == typeof k1 ? null : "string" == typeof k1 || "number" == typeof k1 || "bigint" == typeof k1 ? v(null, k1, null, null, k1) : Array.isArray(k1) ? v(p, {
        children: k1
    }, null, null, null) : k1.__b > 0 ? v(k1.type, k1.props, k1.key, null, k1.__v) : k1)) {
        if (k1.__ = u1, k1.__b = u1.__b + 1, null === (_1 = A[h1]) || _1 && k1.key == _1.key && k1.type === _1.type) A[h1] = void 0;
        else for(d1 = 0; d1 < P; d1++){
            if ((_1 = A[d1]) && k1.key == _1.key && k1.type === _1.type) {
                A[d1] = void 0;
                break;
            }
            _1 = null;
        }
        $(n1, k1, _1 = _1 || r, i1, o1, e1, c1, s1, a1), x1 = k1.__e, (d1 = k1.ref) && _1.ref != d1 && (w || (w = []), _1.ref && w.push(_1.ref, null, k1), w.push(d1, k1.__c || x1, k1)), null != x1 ? (null == g && (g = x1), "function" == typeof k1.type && null != k1.__k && k1.__k === _1.__k ? k1.__d = s1 = b(k1, s1, n1) : s1 = m(n1, k1, _1, A, x1, s1), a1 || "option" !== u1.type ? "function" == typeof u1.type && (u1.__d = s1) : n1.value = "") : s1 && _1.__e == s1 && s1.parentNode != n1 && (s1 = y(_1));
    }
    for(u1.__e = g, h1 = P; h1--;)null != A[h1] && ("function" == typeof u1.type && null != A[h1].__e && A[h1].__e == u1.__d && (u1.__d = y(t1, h1 + 1)), j(A[h1], A[h1]));
    if (w) for(h1 = 0; h1 < w.length; h1++)T(w[h1], w[++h1], w[++h1]);
}
function b(n1, l1, u1) {
    var t1, i1;
    for(t1 = 0; t1 < n1.__k.length; t1++)(i1 = n1.__k[t1]) && (i1.__ = n1, l1 = "function" == typeof i1.type ? b(i1, l1, u1) : m(u1, i1, i1, n1.__k, i1.__e, l1));
    return l1;
}
function m(n1, l1, u1, t1, i1, o1) {
    var r1, f1, e1;
    if ((void 0) !== l1.__d) r1 = l1.__d, l1.__d = void 0;
    else if (null == u1 || i1 != o1 || null == i1.parentNode) n: if (null == o1 || o1.parentNode !== n1) n1.appendChild(i1), r1 = null;
    else {
        for(f1 = o1, e1 = 0; (f1 = f1.nextSibling) && e1 < t1.length; e1 += 2)if (f1 == i1) break n;
        n1.insertBefore(i1, o1), r1 = o1;
    }
    return (void 0) !== r1 ? r1 : i1.nextSibling;
}
function g(n1, l1, u1, t1, i1) {
    var o1;
    for(o1 in u1)"children" === o1 || "key" === o1 || o1 in l1 || A(n1, o1, null, u1[o1], t1);
    for(o1 in l1)i1 && "function" != typeof l1[o1] || "children" === o1 || "key" === o1 || "value" === o1 || "checked" === o1 || u1[o1] === l1[o1] || A(n1, o1, l1[o1], u1[o1], t1);
}
function w(n1, l1, u1) {
    "-" === l1[0] ? n1.setProperty(l1, u1) : n1[l1] = null == u1 ? "" : "number" != typeof u1 || e.test(l1) ? u1 : u1 + "px";
}
function A(n1, l1, u1, t1, i1) {
    var o1;
    n: if ("style" === l1) {
        if ("string" == typeof u1) n1.style.cssText = u1;
        else {
            if ("string" == typeof t1 && (n1.style.cssText = t1 = ""), t1) for(l1 in t1)u1 && l1 in u1 || w(n1.style, l1, "");
            if (u1) for(l1 in u1)t1 && u1[l1] === t1[l1] || w(n1.style, l1, u1[l1]);
        }
    } else if ("o" === l1[0] && "n" === l1[1]) o1 = l1 !== (l1 = l1.replace(/Capture$/, "")), l1 = l1.toLowerCase() in n1 ? l1.toLowerCase().slice(2) : l1.slice(2), n1.l || (n1.l = {
    }), n1.l[l1 + o1] = u1, u1 ? t1 || n1.addEventListener(l1, o1 ? C : P, o1) : n1.removeEventListener(l1, o1 ? C : P, o1);
    else if ("dangerouslySetInnerHTML" !== l1) {
        if (i1) l1 = l1.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== l1 && "list" !== l1 && "form" !== l1 && "tabIndex" !== l1 && "download" !== l1 && l1 in n1) try {
            n1[l1] = null == u1 ? "" : u1;
            break n;
        } catch (n2) {
        }
        "function" == typeof u1 || (null != u1 && (false !== u1 || "a" === l1[0] && "r" === l1[1]) ? n1.setAttribute(l1, u1) : n1.removeAttribute(l1));
    }
}
function P(l1) {
    this.l[l1.type + false](n.event ? n.event(l1) : l1);
}
function C(l1) {
    this.l[l1.type + true](n.event ? n.event(l1) : l1);
}
function $(l1, u1, t1, i1, o1, r1, f1, e1, s1) {
    var a1, v1, y1, d1, _1, k1, b1, m1, g1, w1, A1, P1 = u1.type;
    if ((void 0) !== u1.constructor) return null;
    null != t1.__h && (s1 = t1.__h, e1 = u1.__e = t1.__e, u1.__h = null, r1 = [
        e1
    ]), (a1 = n.__b) && a1(u1);
    try {
        n: if ("function" == typeof P1) {
            if (m1 = u1.props, g1 = (a1 = P1.contextType) && i1[a1.__c], w1 = a1 ? g1 ? g1.props.value : a1.__ : i1, t1.__c ? b1 = (v1 = u1.__c = t1.__c).__ = v1.__E : ("prototype" in P1 && P1.prototype.render ? u1.__c = v1 = new P1(m1, w1) : (u1.__c = v1 = new h(m1, w1), v1.constructor = P1, v1.render = z), g1 && g1.sub(v1), v1.props = m1, v1.state || (v1.state = {
            }), v1.context = w1, v1.__n = i1, y1 = v1.__d = true, v1.__h = []), null == v1.__s && (v1.__s = v1.state), null != P1.getDerivedStateFromProps && (v1.__s == v1.state && (v1.__s = c({
            }, v1.__s)), c(v1.__s, P1.getDerivedStateFromProps(m1, v1.__s))), d1 = v1.props, _1 = v1.state, y1) null == P1.getDerivedStateFromProps && null != v1.componentWillMount && v1.componentWillMount(), null != v1.componentDidMount && v1.__h.push(v1.componentDidMount);
            else {
                if (null == P1.getDerivedStateFromProps && m1 !== d1 && null != v1.componentWillReceiveProps && v1.componentWillReceiveProps(m1, w1), !v1.__e && null != v1.shouldComponentUpdate && false === v1.shouldComponentUpdate(m1, v1.__s, w1) || u1.__v === t1.__v) {
                    v1.props = m1, v1.state = v1.__s, u1.__v !== t1.__v && (v1.__d = false), v1.__v = u1, u1.__e = t1.__e, u1.__k = t1.__k, u1.__k.forEach(function(n1) {
                        n1 && (n1.__ = u1);
                    }), v1.__h.length && f1.push(v1);
                    break n;
                }
                null != v1.componentWillUpdate && v1.componentWillUpdate(m1, v1.__s, w1), null != v1.componentDidUpdate && v1.__h.push(function() {
                    v1.componentDidUpdate(d1, _1, k1);
                });
            }
            v1.context = w1, v1.props = m1, v1.state = v1.__s, (a1 = n.__r) && a1(u1), v1.__d = false, v1.__v = u1, v1.__P = l1, a1 = v1.render(v1.props, v1.state, v1.context), v1.state = v1.__s, null != v1.getChildContext && (i1 = c(c({
            }, i1), v1.getChildContext())), y1 || null == v1.getSnapshotBeforeUpdate || (k1 = v1.getSnapshotBeforeUpdate(d1, _1)), A1 = null != a1 && a1.type === p && null == a1.key ? a1.props.children : a1, x(l1, Array.isArray(A1) ? A1 : [
                A1
            ], u1, t1, i1, o1, r1, f1, e1, s1), v1.base = u1.__e, u1.__h = null, v1.__h.length && f1.push(v1), b1 && (v1.__E = v1.__ = null), v1.__e = false;
        } else null == r1 && u1.__v === t1.__v ? (u1.__k = t1.__k, u1.__e = t1.__e) : u1.__e = I(t1.__e, u1, t1, i1, o1, r1, f1, s1);
        (a1 = n.diffed) && a1(u1);
    } catch (l2) {
        u1.__v = null, (s1 || null != r1) && (u1.__e = e1, u1.__h = !!s1, r1[r1.indexOf(e1)] = null), n.__e(l2, u1, t1);
    }
}
function H(l1, u1) {
    n.__c && n.__c(u1, l1), l1.some(function(u2) {
        try {
            l1 = u2.__h, u2.__h = [], l1.some(function(n1) {
                n1.call(u2);
            });
        } catch (l2) {
            n.__e(l2, u2.__v);
        }
    });
}
function I(n1, l1, u1, t1, i1, o1, e1, c1) {
    var a1, v1, p1, h1, y1 = u1.props, d1 = l1.props, _1 = l1.type, k1 = 0;
    if ("svg" === _1 && (i1 = true), null != o1) for(; k1 < o1.length; k1++)if ((a1 = o1[k1]) && (a1 === n1 || (_1 ? a1.localName == _1 : 3 == a1.nodeType))) {
        n1 = a1, o1[k1] = null;
        break;
    }
    if (null == n1) {
        if (null === _1) return document.createTextNode(d1);
        n1 = i1 ? document.createElementNS("http://www.w3.org/2000/svg", _1) : document.createElement(_1, d1.is && d1), o1 = null, c1 = false;
    }
    if (null === _1) y1 === d1 || c1 && n1.data === d1 || (n1.data = d1);
    else {
        if (o1 = o1 && f.slice.call(n1.childNodes), v1 = (y1 = u1.props || r).dangerouslySetInnerHTML, p1 = d1.dangerouslySetInnerHTML, !c1) {
            if (null != o1) for(y1 = {
            }, h1 = 0; h1 < n1.attributes.length; h1++)y1[n1.attributes[h1].name] = n1.attributes[h1].value;
            (p1 || v1) && (p1 && (v1 && p1.__html == v1.__html || p1.__html === n1.innerHTML) || (n1.innerHTML = p1 && p1.__html || ""));
        }
        if (g(n1, d1, y1, i1, c1), p1) l1.__k = [];
        else if (k1 = l1.props.children, x(n1, Array.isArray(k1) ? k1 : [
            k1
        ], l1, u1, t1, i1 && "foreignObject" !== _1, o1, e1, n1.firstChild, c1), null != o1) for(k1 = o1.length; k1--;)null != o1[k1] && s(o1[k1]);
        c1 || ("value" in d1 && (void 0) !== (k1 = d1.value) && (k1 !== n1.value || "progress" === _1 && !k1) && A(n1, "value", k1, y1.value, false), "checked" in d1 && (void 0) !== (k1 = d1.checked) && k1 !== n1.checked && A(n1, "checked", k1, y1.checked, false));
    }
    return n1;
}
function T(l1, u1, t1) {
    try {
        "function" == typeof l1 ? l1(u1) : l1.current = u1;
    } catch (l2) {
        n.__e(l2, t1);
    }
}
function j(l1, u1, t1) {
    var i1, o1, r1;
    if (n.unmount && n.unmount(l1), (i1 = l1.ref) && (i1.current && i1.current !== l1.__e || T(i1, null, u1)), t1 || "function" == typeof l1.type || (t1 = null != (o1 = l1.__e)), l1.__e = l1.__d = void 0, null != (i1 = l1.__c)) {
        if (i1.componentWillUnmount) try {
            i1.componentWillUnmount();
        } catch (l2) {
            n.__e(l2, u1);
        }
        i1.base = i1.__P = null;
    }
    if (i1 = l1.__k) for(r1 = 0; r1 < i1.length; r1++)i1[r1] && j(i1[r1], u1, t1);
    null != o1 && s(o1);
}
function z(n1, l1, u1) {
    return this.constructor(n1, u1);
}
function L(l1, u1, t1) {
    var i1, o1, e1;
    n.__ && n.__(l1, u1), o1 = (i1 = "function" == typeof t1) ? null : t1 && t1.__k || u1.__k, e1 = [], $(u1, l1 = (!i1 && t1 || u1).__k = a(p, null, [
        l1
    ]), o1 || r, r, (void 0) !== u1.ownerSVGElement, !i1 && t1 ? [
        t1
    ] : o1 ? null : u1.firstChild ? f.slice.call(u1.childNodes) : null, e1, !i1 && t1 ? t1 : o1 ? o1.__e : u1.firstChild, i1), H(e1, l1);
}
n = {
    __e: function(n1, l1) {
        for(var u1, t1, i1; l1 = l1.__;)if ((u1 = l1.__c) && !u1.__) try {
            if ((t1 = u1.constructor) && null != t1.getDerivedStateFromError && (u1.setState(t1.getDerivedStateFromError(n1)), i1 = u1.__d), null != u1.componentDidCatch && (u1.componentDidCatch(n1), i1 = u1.__d), i1) return u1.__E = u1;
        } catch (l2) {
            n1 = l2;
        }
        throw n1;
    },
    __v: 0
}, l = function(n1) {
    return null != n1 && (void 0) === n1.constructor;
}, h.prototype.setState = function(n1, l1) {
    var u1;
    u1 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = c({
    }, this.state), "function" == typeof n1 && (n1 = n1(c({
    }, u1), this.props)), n1 && c(u1, n1), null != n1 && this.__v && (l1 && this.__h.push(l1), _(this));
}, h.prototype.forceUpdate = function(n1) {
    this.__v && (this.__e = true, n1 && this.__h.push(n1), _(this));
}, h.prototype.render = p, u = [], t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, k.__r = 0, o = 0, exports.render = L, exports.hydrate = function n1(l1, u1) {
    L(l1, u1, n1);
}, exports.createElement = a, exports.h = a, exports.Fragment = p, exports.createRef = function() {
    return {
        current: null
    };
}, exports.isValidElement = l, exports.Component = h, exports.cloneElement = function(n2, l1, u1) {
    var t1, i1, o1, r1 = arguments, f1 = c({
    }, n2.props);
    for(o1 in l1)"key" == o1 ? t1 = l1[o1] : "ref" == o1 ? i1 = l1[o1] : f1[o1] = l1[o1];
    if (arguments.length > 3) for(u1 = [
        u1
    ], o1 = 3; o1 < arguments.length; o1++)u1.push(r1[o1]);
    return null != u1 && (f1.children = u1), v(n2.type, f1, t1 || n2.key, i1 || n2.ref, null);
}, exports.createContext = function(n2, l1) {
    var u1 = {
        __c: l1 = "__cC" + o++,
        __: n2,
        Consumer: function(n3, l2) {
            return n3.children(l2);
        },
        Provider: function(n3) {
            var u2, t1;
            return this.getChildContext || (u2 = [], (t1 = {
            })[l1] = this, this.getChildContext = function() {
                return t1;
            }, this.shouldComponentUpdate = function(n4) {
                this.props.value !== n4.value && u2.some(_);
            }, this.sub = function(n4) {
                u2.push(n4);
                var l2 = n4.componentWillUnmount;
                n4.componentWillUnmount = function() {
                    u2.splice(u2.indexOf(n4), 1), l2 && l2.call(n4);
                };
            }), n3.children;
        }
    };
    return u1.Provider.__ = u1.Consumer.contextType = u1;
}, exports.toChildArray = function n2(l1, u1) {
    return u1 = u1 || [], null == l1 || "boolean" == typeof l1 || (Array.isArray(l1) ? l1.some(function(l2) {
        n2(l2, u1);
    }) : u1.push(l1)), u1;
}, exports.options = n;

},{}],"59onB":[function(require,module,exports) {
(function(global, factory) {
    if (typeof define === "function" && define.amd) define("webextension-polyfill", [
        "module"
    ], factory);
    else if (typeof exports !== "undefined") factory(module);
    else {
        var mod = {
            exports: {
            }
        };
        factory(mod);
        global.browser = mod.exports;
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function(module) {
    /* webextension-polyfill - v0.8.0 - Tue Apr 20 2021 11:27:38 */ /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */ /* vim: set sts=2 sw=2 et tw=80: */ /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */ "use strict";
    if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
        const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
        const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
        // optimization for Firefox. Since Spidermonkey does not fully parse the
        // contents of a function until the first time it's called, and since it will
        // never actually need to be called, this allows the polyfill to be included
        // in Firefox nearly for free.
        const wrapAPIs = (extensionAPIs)=>{
            // NOTE: apiMetadata is associated to the content of the api-metadata.json file
            // at build time by replacing the following "include" with the content of the
            // JSON file.
            const apiMetadata = {
                "alarms": {
                    "clear": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "clearAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "get": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "bookmarks": {
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getChildren": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getRecent": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getSubTree": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTree": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "move": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeTree": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "browserAction": {
                    "disable": {
                        "minArgs": 0,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "enable": {
                        "minArgs": 0,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "getBadgeBackgroundColor": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getBadgeText": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getPopup": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTitle": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "openPopup": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "setBadgeBackgroundColor": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setBadgeText": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setIcon": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "setPopup": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setTitle": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "browsingData": {
                    "remove": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "removeCache": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeCookies": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeDownloads": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeFormData": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeHistory": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeLocalStorage": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removePasswords": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removePluginData": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "settings": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "commands": {
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "contextMenus": {
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "cookies": {
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAllCookieStores": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "set": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "devtools": {
                    "inspectedWindow": {
                        "eval": {
                            "minArgs": 1,
                            "maxArgs": 2,
                            "singleCallbackArg": false
                        }
                    },
                    "panels": {
                        "create": {
                            "minArgs": 3,
                            "maxArgs": 3,
                            "singleCallbackArg": true
                        },
                        "elements": {
                            "createSidebarPane": {
                                "minArgs": 1,
                                "maxArgs": 1
                            }
                        }
                    }
                },
                "downloads": {
                    "cancel": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "download": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "erase": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getFileIcon": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "open": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "pause": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeFile": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "resume": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "show": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "extension": {
                    "isAllowedFileSchemeAccess": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "isAllowedIncognitoAccess": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "history": {
                    "addUrl": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "deleteAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "deleteRange": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "deleteUrl": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getVisits": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "i18n": {
                    "detectLanguage": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAcceptLanguages": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "identity": {
                    "launchWebAuthFlow": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "idle": {
                    "queryState": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "management": {
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getSelf": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "setEnabled": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "uninstallSelf": {
                        "minArgs": 0,
                        "maxArgs": 1
                    }
                },
                "notifications": {
                    "clear": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getPermissionLevel": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "pageAction": {
                    "getPopup": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTitle": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "hide": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setIcon": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "setPopup": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setTitle": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "show": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "permissions": {
                    "contains": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "request": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "runtime": {
                    "getBackgroundPage": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getPlatformInfo": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "openOptionsPage": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "requestUpdateCheck": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "sendMessage": {
                        "minArgs": 1,
                        "maxArgs": 3
                    },
                    "sendNativeMessage": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "setUninstallURL": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "sessions": {
                    "getDevices": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getRecentlyClosed": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "restore": {
                        "minArgs": 0,
                        "maxArgs": 1
                    }
                },
                "storage": {
                    "local": {
                        "clear": {
                            "minArgs": 0,
                            "maxArgs": 0
                        },
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "remove": {
                            "minArgs": 1,
                            "maxArgs": 1
                        },
                        "set": {
                            "minArgs": 1,
                            "maxArgs": 1
                        }
                    },
                    "managed": {
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        }
                    },
                    "sync": {
                        "clear": {
                            "minArgs": 0,
                            "maxArgs": 0
                        },
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "remove": {
                            "minArgs": 1,
                            "maxArgs": 1
                        },
                        "set": {
                            "minArgs": 1,
                            "maxArgs": 1
                        }
                    }
                },
                "tabs": {
                    "captureVisibleTab": {
                        "minArgs": 0,
                        "maxArgs": 2
                    },
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "detectLanguage": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "discard": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "duplicate": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "executeScript": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getCurrent": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getZoom": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getZoomSettings": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "goBack": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "goForward": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "highlight": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "insertCSS": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "move": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "query": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "reload": {
                        "minArgs": 0,
                        "maxArgs": 2
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeCSS": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "sendMessage": {
                        "minArgs": 2,
                        "maxArgs": 3
                    },
                    "setZoom": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "setZoomSettings": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "update": {
                        "minArgs": 1,
                        "maxArgs": 2
                    }
                },
                "topSites": {
                    "get": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "webNavigation": {
                    "getAllFrames": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getFrame": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "webRequest": {
                    "handlerBehaviorChanged": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "windows": {
                    "create": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getCurrent": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getLastFocused": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                }
            };
            if (Object.keys(apiMetadata).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
            /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */ class DefaultWeakMap extends WeakMap {
                constructor(createItem, items){
                    super(items);
                    this.createItem = createItem;
                }
                get(key) {
                    if (!this.has(key)) this.set(key, this.createItem(key));
                    return super.get(key);
                }
            }
            /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */ const isThenable = (value)=>{
                return value && typeof value === "object" && typeof value.then === "function";
            };
            /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */ const makeCallback = (promise, metadata)=>{
                return (...callbackArgs)=>{
                    if (extensionAPIs.runtime.lastError) promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                    else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) promise.resolve(callbackArgs[0]);
                    else promise.resolve(callbackArgs);
                };
            };
            const pluralizeArguments = (numArgs)=>numArgs == 1 ? "argument" : "arguments"
            ;
            /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */ const wrapAsyncFunction = (name, metadata)=>{
                return function asyncFunctionWrapper(target, ...args) {
                    if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                    if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                    return new Promise((resolve, reject)=>{
                        if (metadata.fallbackToNoCallback) // This API method has currently no callback on Chrome, but it return a promise on Firefox,
                        // and so the polyfill will try to call it with a callback first, and it will fallback
                        // to not passing the callback if the first call fails.
                        try {
                            target[name](...args, makeCallback({
                                resolve,
                                reject
                            }, metadata));
                        } catch (cbError) {
                            console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                            target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                            // use the unsupported callback anymore.
                            metadata.fallbackToNoCallback = false;
                            metadata.noCallback = true;
                            resolve();
                        }
                        else if (metadata.noCallback) {
                            target[name](...args);
                            resolve();
                        } else target[name](...args, makeCallback({
                            resolve,
                            reject
                        }, metadata));
                    });
                };
            };
            /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */ const wrapMethod = (target, method, wrapper)=>{
                return new Proxy(method, {
                    apply (targetMethod, thisObj, args) {
                        return wrapper.call(thisObj, target, ...args);
                    }
                });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */ const wrapObject = (target, wrappers = {
            }, metadata = {
            })=>{
                let cache = Object.create(null);
                let handlers = {
                    has (proxyTarget, prop) {
                        return prop in target || prop in cache;
                    },
                    get (proxyTarget, prop, receiver) {
                        if (prop in cache) return cache[prop];
                        if (!(prop in target)) return undefined;
                        let value1 = target[prop];
                        if (typeof value1 === "function") {
                            // This is a method on the underlying object. Check if we need to do
                            // any wrapping.
                            if (typeof wrappers[prop] === "function") // We have a special-case wrapper for this method.
                            value1 = wrapMethod(target, target[prop], wrappers[prop]);
                            else if (hasOwnProperty(metadata, prop)) {
                                // This is an async method that we have metadata for. Create a
                                // Promise wrapper for it.
                                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                                value1 = wrapMethod(target, target[prop], wrapper);
                            } else // This is a method that we don't know or care about. Return the
                            // original method, bound to the underlying object.
                            value1 = value1.bind(target);
                        } else if (typeof value1 === "object" && value1 !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) // This is an object that we need to do some wrapping for the children
                        // of. Create a sub-object wrapper for it with the appropriate child
                        // metadata.
                        value1 = wrapObject(value1, wrappers[prop], metadata[prop]);
                        else if (hasOwnProperty(metadata, "*")) // Wrap all properties in * namespace.
                        value1 = wrapObject(value1, wrappers[prop], metadata["*"]);
                        else {
                            // We don't need to do any wrapping for this property,
                            // so just forward all access to the underlying object.
                            Object.defineProperty(cache, prop, {
                                configurable: true,
                                enumerable: true,
                                get () {
                                    return target[prop];
                                },
                                set (value) {
                                    target[prop] = value;
                                }
                            });
                            return value1;
                        }
                        cache[prop] = value1;
                        return value1;
                    },
                    set (proxyTarget, prop, value, receiver) {
                        if (prop in cache) cache[prop] = value;
                        else target[prop] = value;
                        return true;
                    },
                    defineProperty (proxyTarget, prop, desc) {
                        return Reflect.defineProperty(cache, prop, desc);
                    },
                    deleteProperty (proxyTarget, prop) {
                        return Reflect.deleteProperty(cache, prop);
                    }
                }; // Per contract of the Proxy API, the "get" proxy handler must return the
                // original value of the target if that value is declared read-only and
                // non-configurable. For this reason, we create an object with the
                // prototype set to `target` instead of using `target` directly.
                // Otherwise we cannot return a custom object for APIs that
                // are declared read-only and non-configurable, such as `chrome.devtools`.
                //
                // The proxy handlers themselves will still use the original `target`
                // instead of the `proxyTarget`, so that the methods and properties are
                // dereferenced via the original targets.
                let proxyTarget = Object.create(target);
                return new Proxy(proxyTarget, handlers);
            };
            /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */ const wrapEvent = (wrapperMap)=>({
                    addListener (target, listener, ...args) {
                        target.addListener(wrapperMap.get(listener), ...args);
                    },
                    hasListener (target, listener) {
                        return target.hasListener(wrapperMap.get(listener));
                    },
                    removeListener (target, listener) {
                        target.removeListener(wrapperMap.get(listener));
                    }
                })
            ;
            const onRequestFinishedWrappers = new DefaultWeakMap((listener)=>{
                if (typeof listener !== "function") return listener;
                /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */ return function onRequestFinished(req) {
                    const wrappedReq = wrapObject(req, {
                    }, {
                        getContent: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    });
                    listener(wrappedReq);
                };
            }); // Keep track if the deprecation warning has been logged at least once.
            let loggedSendResponseDeprecationWarning = false;
            const onMessageWrappers = new DefaultWeakMap((listener)=>{
                if (typeof listener !== "function") return listener;
                /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */ return function onMessage(message, sender, sendResponse) {
                    let didCallSendResponse = false;
                    let wrappedSendResponse;
                    let sendResponsePromise = new Promise((resolve)=>{
                        wrappedSendResponse = function(response) {
                            if (!loggedSendResponseDeprecationWarning) {
                                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                                loggedSendResponseDeprecationWarning = true;
                            }
                            didCallSendResponse = true;
                            resolve(response);
                        };
                    });
                    let result;
                    try {
                        result = listener(message, sender, wrappedSendResponse);
                    } catch (err) {
                        result = Promise.reject(err);
                    }
                    const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
                    // wrappedSendResponse synchronously, we can exit earlier
                    // because there will be no response sent from this listener.
                    if (result !== true && !isResultThenable && !didCallSendResponse) return false;
                     // A small helper to send the message if the promise resolves
                    // and an error if the promise rejects (a wrapped sendMessage has
                    // to translate the message into a resolved promise or a rejected
                    // promise).
                    const sendPromisedResult = (promise)=>{
                        promise.then((msg)=>{
                            // send the message value.
                            sendResponse(msg);
                        }, (error)=>{
                            // Send a JSON representation of the error if the rejected value
                            // is an instance of error, or the object itself otherwise.
                            let message1;
                            if (error && (error instanceof Error || typeof error.message === "string")) message1 = error.message;
                            else message1 = "An unexpected error occurred";
                            sendResponse({
                                __mozWebExtensionPolyfillReject__: true,
                                message: message1
                            });
                        }).catch((err)=>{
                            // Print an error on the console if unable to send the response.
                            console.error("Failed to send onMessage rejected reply", err);
                        });
                    }; // If the listener returned a Promise, send the resolved value as a
                    // result, otherwise wait the promise related to the wrappedSendResponse
                    // callback to resolve and send it as a response.
                    if (isResultThenable) sendPromisedResult(result);
                    else sendPromisedResult(sendResponsePromise);
                     // Let Chrome know that the listener is replying.
                    return true;
                };
            });
            const wrappedSendMessageCallback = ({ reject , resolve  }, reply)=>{
                if (extensionAPIs.runtime.lastError) {
                    // Detect when none of the listeners replied to the sendMessage call and resolve
                    // the promise to undefined as in Firefox.
                    // See https://github.com/mozilla/webextension-polyfill/issues/130
                    if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) resolve();
                    else reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (reply && reply.__mozWebExtensionPolyfillReject__) // Convert back the JSON representation of the error into
                // an Error instance.
                reject(new Error(reply.message));
                else resolve(reply);
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args)=>{
                if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                return new Promise((resolve, reject)=>{
                    const wrappedCb = wrappedSendMessageCallback.bind(null, {
                        resolve,
                        reject
                    });
                    args.push(wrappedCb);
                    apiNamespaceObj.sendMessage(...args);
                });
            };
            const staticWrappers = {
                devtools: {
                    network: {
                        onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                    }
                },
                runtime: {
                    onMessage: wrapEvent(onMessageWrappers),
                    onMessageExternal: wrapEvent(onMessageWrappers),
                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                        minArgs: 1,
                        maxArgs: 3
                    })
                },
                tabs: {
                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                        minArgs: 2,
                        maxArgs: 3
                    })
                }
            };
            const settingMetadata = {
                clear: {
                    minArgs: 1,
                    maxArgs: 1
                },
                get: {
                    minArgs: 1,
                    maxArgs: 1
                },
                set: {
                    minArgs: 1,
                    maxArgs: 1
                }
            };
            apiMetadata.privacy = {
                network: {
                    "*": settingMetadata
                },
                services: {
                    "*": settingMetadata
                },
                websites: {
                    "*": settingMetadata
                }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
        };
        if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
         // The build process adds a UMD wrapper around this file, which makes the
        // `module` variable available.
        module.exports = wrapAPIs(chrome);
    } else module.exports = browser;
});

},{}],"omrdF":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ZVgFz":[function(require,module,exports) {
var n, t, r, o1 = require("preact"), u = 0, i = [], c = o1.options.__b, e = o1.options.__r, f = o1.options.diffed, a = o1.options.__c, v = o1.options.unmount;
function p(n1, r1) {
    o1.options.__h && o1.options.__h(t, n1, u || r1), u = 0;
    var i1 = t.__H || (t.__H = {
        __: [],
        __h: []
    });
    return n1 >= i1.__.length && i1.__.push({
    }), i1.__[n1];
}
function s(n1) {
    return u = 1, x(A, n1);
}
function x(r1, o1, u1) {
    var i1 = p(n++, 2);
    return i1.t = r1, i1.__c || (i1.__ = [
        u1 ? u1(o1) : A(void 0, o1),
        function(n1) {
            var t1 = i1.t(i1.__[0], n1);
            i1.__[0] !== t1 && (i1.__ = [
                t1,
                i1.__[1]
            ], i1.__c.setState({
            }));
        }
    ], i1.__c = t), i1.__;
}
function m(r1, u1) {
    var i1 = p(n++, 4);
    !o1.options.__s && q(i1.__H, u1) && (i1.__ = r1, i1.__H = u1, t.__h.push(i1));
}
function l(t1, r1) {
    var o1 = p(n++, 7);
    return q(o1.__H, r1) && (o1.__ = t1(), o1.__H = r1, o1.__h = t1), o1.__;
}
function y() {
    i.forEach(function(n1) {
        if (n1.__P) try {
            n1.__H.__h.forEach(_), n1.__H.__h.forEach(d), n1.__H.__h = [];
        } catch (t1) {
            n1.__H.__h = [], o1.options.__e(t1, n1.__v);
        }
    }), i = [];
}
o1.options.__b = function(n1) {
    t = null, c && c(n1);
}, o1.options.__r = function(r1) {
    e && e(r1), n = 0;
    var o1 = (t = r1.__c).__H;
    o1 && (o1.__h.forEach(_), o1.__h.forEach(d), o1.__h = []);
}, o1.options.diffed = function(n1) {
    f && f(n1);
    var u1 = n1.__c;
    u1 && u1.__H && u1.__H.__h.length && (1 !== i.push(u1) && r === o1.options.requestAnimationFrame || ((r = o1.options.requestAnimationFrame) || function(n2) {
        var t1, r1 = function() {
            clearTimeout(o2), h && cancelAnimationFrame(t1), setTimeout(n2);
        }, o2 = setTimeout(r1, 100);
        h && (t1 = requestAnimationFrame(r1));
    })(y)), t = void 0;
}, o1.options.__c = function(n1, t1) {
    t1.some(function(n2) {
        try {
            n2.__h.forEach(_), n2.__h = n2.__h.filter(function(n3) {
                return !n3.__ || d(n3);
            });
        } catch (r1) {
            t1.some(function(n3) {
                n3.__h && (n3.__h = []);
            }), t1 = [], o1.options.__e(r1, n2.__v);
        }
    }), a && a(n1, t1);
}, o1.options.unmount = function(n1) {
    v && v(n1);
    var t1 = n1.__c;
    if (t1 && t1.__H) try {
        t1.__H.__.forEach(_);
    } catch (n2) {
        o1.options.__e(n2, t1.__v);
    }
};
var h = "function" == typeof requestAnimationFrame;
function _(n1) {
    var r1 = t;
    "function" == typeof n1.__c && n1.__c(), t = r1;
}
function d(n1) {
    var r1 = t;
    n1.__c = n1.__(), t = r1;
}
function q(n1, t1) {
    return !n1 || n1.length !== t1.length || t1.some(function(t2, r1) {
        return t2 !== n1[r1];
    });
}
function A(n1, t1) {
    return "function" == typeof t1 ? t1(n1) : t1;
}
exports.useState = s, exports.useReducer = x, exports.useEffect = function(r1, u1) {
    var i1 = p(n++, 3);
    !o1.options.__s && q(i1.__H, u1) && (i1.__ = r1, i1.__H = u1, t.__H.__h.push(i1));
}, exports.useLayoutEffect = m, exports.useRef = function(n1) {
    return u = 5, l(function() {
        return {
            current: n1
        };
    }, []);
}, exports.useImperativeHandle = function(n1, t1, r1) {
    u = 6, m(function() {
        "function" == typeof n1 ? n1(t1()) : n1 && (n1.current = t1());
    }, null == r1 ? r1 : r1.concat(n1));
}, exports.useMemo = l, exports.useCallback = function(n1, t1) {
    return u = 8, l(function() {
        return n1;
    }, t1);
}, exports.useContext = function(r1) {
    var o2 = t.context[r1.__c], u1 = p(n++, 9);
    return u1.__c = r1, o2 ? (null == u1.__ && (u1.__ = true, o2.sub(t)), o2.props.value) : r1.__;
}, exports.useDebugValue = function(n1, t1) {
    o1.options.useDebugValue && o1.options.useDebugValue(t1 ? t1(n1) : n1);
}, exports.useErrorBoundary = function(r1) {
    var o2 = p(n++, 10), u1 = s();
    return o2.__ = r1, t.componentDidCatch || (t.componentDidCatch = function(n1) {
        o2.__ && o2.__(n1), u1[1](n1);
    }), [
        u1[0],
        function() {
            u1[1](void 0);
        }
    ];
};

},{"preact":"1xW1m"}]},["3i9CW"], "3i9CW", "parcelRequire0dca")

//# sourceMappingURL=popup.f2874ad4.js.map
