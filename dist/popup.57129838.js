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
var _preact = require("preact");
class Popup extends _preact.Component {
    render() {
        return(/*#__PURE__*/ _preact.h("h1", {
            __source: {
                fileName: "/Users/squinlan/Documents/sitetimer/source/popup.js",
                lineNumber: 5
            },
            __self: this
        }, "Hello World"));
    }
}
_preact.render(/*#__PURE__*/ _preact.h(Popup, {
    __source: {
        fileName: "/Users/squinlan/Documents/sitetimer/source/popup.js",
        lineNumber: 9
    },
    __self: undefined
}), document.body);

},{"preact":"1xW1m"}],"1xW1m":[function(require,module,exports) {
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

},{}]},["3i9CW"], "3i9CW", "parcelRequire0dca")

//# sourceMappingURL=popup.57129838.js.map
