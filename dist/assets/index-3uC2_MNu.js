function lp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function op(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Za = { exports: {} },
  uo = {},
  ec = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ur = Symbol.for("react.element"),
  ip = Symbol.for("react.portal"),
  sp = Symbol.for("react.fragment"),
  up = Symbol.for("react.strict_mode"),
  ap = Symbol.for("react.profiler"),
  cp = Symbol.for("react.provider"),
  dp = Symbol.for("react.context"),
  fp = Symbol.for("react.forward_ref"),
  pp = Symbol.for("react.suspense"),
  mp = Symbol.for("react.memo"),
  hp = Symbol.for("react.lazy"),
  Tu = Symbol.iterator;
function gp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Tu && e[Tu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var tc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nc = Object.assign,
  rc = {};
function Wn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc);
}
Wn.prototype.isReactComponent = {};
Wn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lc() {}
lc.prototype = Wn.prototype;
function Ss(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rc),
    (this.updater = n || tc);
}
var Es = (Ss.prototype = new lc());
Es.constructor = Ss;
nc(Es, Wn.prototype);
Es.isPureReactComponent = !0;
var Pu = Array.isArray,
  oc = Object.prototype.hasOwnProperty,
  ks = { current: null },
  ic = { key: !0, ref: !0, __self: !0, __source: !0 };
function sc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      oc.call(t, r) && !ic.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Ur,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ks.current,
  };
}
function vp(e, t) {
  return {
    $$typeof: Ur,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ns(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ur;
}
function yp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ru = /\/+/g;
function $o(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? yp("" + e.key)
    : t.toString(36);
}
function vl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ur:
          case ip:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + $o(i, 0) : r),
      Pu(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ru, "$&/") + "/"),
          vl(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (Ns(l) &&
            (l = vp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ru, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Pu(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + $o(o, s);
      i += vl(o, t, n, u, l);
    }
  else if (((u = gp(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + $o(o, s++)), (i += vl(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function qr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    vl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function wp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ve = { current: null },
  yl = { transition: null },
  xp = {
    ReactCurrentDispatcher: ve,
    ReactCurrentBatchConfig: yl,
    ReactCurrentOwner: ks,
  };
A.Children = {
  map: qr,
  forEach: function (e, t, n) {
    qr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      qr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      qr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ns(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
A.Component = Wn;
A.Fragment = sp;
A.Profiler = ap;
A.PureComponent = Ss;
A.StrictMode = up;
A.Suspense = pp;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xp;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = nc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ks.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      oc.call(t, u) &&
        !ic.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: Ur, type: e.type, key: l, ref: o, props: r, _owner: i };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: dp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: cp, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = sc;
A.createFactory = function (e) {
  var t = sc.bind(null, e);
  return (t.type = e), t;
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: fp, render: e };
};
A.isValidElement = Ns;
A.lazy = function (e) {
  return { $$typeof: hp, _payload: { _status: -1, _result: e }, _init: wp };
};
A.memo = function (e, t) {
  return { $$typeof: mp, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = yl.transition;
  yl.transition = {};
  try {
    e();
  } finally {
    yl.transition = t;
  }
};
A.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
A.useCallback = function (e, t) {
  return ve.current.useCallback(e, t);
};
A.useContext = function (e) {
  return ve.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return ve.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return ve.current.useEffect(e, t);
};
A.useId = function () {
  return ve.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return ve.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return ve.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return ve.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return ve.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return ve.current.useRef(e);
};
A.useState = function (e) {
  return ve.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return ve.current.useTransition();
};
A.version = "18.2.0";
ec.exports = A;
var y = ec.exports;
const $ = op(y),
  Sr = lp({ __proto__: null, default: $ }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sp = y,
  Ep = Symbol.for("react.element"),
  kp = Symbol.for("react.fragment"),
  Np = Object.prototype.hasOwnProperty,
  Cp = Sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jp = { key: !0, ref: !0, __self: !0, __source: !0 };
function uc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Np.call(t, r) && !jp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Ep,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Cp.current,
  };
}
uo.Fragment = kp;
uo.jsx = uc;
uo.jsxs = uc;
Za.exports = uo;
var d = Za.exports,
  gi = {},
  ac = { exports: {} },
  Re = {},
  cc = { exports: {} },
  dc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, O) {
    var L = T.length;
    T.push(O);
    e: for (; 0 < L; ) {
      var U = (L - 1) >>> 1,
        B = T[U];
      if (0 < l(B, O)) (T[U] = O), (T[L] = B), (L = U);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var O = T[0],
      L = T.pop();
    if (L !== O) {
      T[0] = L;
      e: for (var U = 0, B = T.length, Xt = B >>> 1; U < Xt; ) {
        var re = 2 * (U + 1) - 1,
          Xr = T[re],
          ut = re + 1,
          gn = T[ut];
        if (0 > l(Xr, L))
          ut < B && 0 > l(gn, Xr)
            ? ((T[U] = gn), (T[ut] = L), (U = ut))
            : ((T[U] = Xr), (T[re] = L), (U = re));
        else if (ut < B && 0 > l(gn, L)) (T[U] = gn), (T[ut] = L), (U = ut);
        else break e;
      }
    }
    return O;
  }
  function l(T, O) {
    var L = T.sortIndex - O.sortIndex;
    return L !== 0 ? L : T.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    a = [],
    f = 1,
    c = null,
    v = 3,
    x = !1,
    w = !1,
    g = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(T) {
    for (var O = n(a); O !== null; ) {
      if (O.callback === null) r(a);
      else if (O.startTime <= T)
        r(a), (O.sortIndex = O.expirationTime), t(u, O);
      else break;
      O = n(a);
    }
  }
  function E(T) {
    if (((g = !1), h(T), !w))
      if (n(u) !== null) (w = !0), bt(j);
      else {
        var O = n(a);
        O !== null && We(E, O.startTime - T);
      }
  }
  function j(T, O) {
    (w = !1), g && ((g = !1), m(_), (_ = -1)), (x = !0);
    var L = v;
    try {
      for (
        h(O), c = n(u);
        c !== null && (!(c.expirationTime > O) || (T && !ie()));

      ) {
        var U = c.callback;
        if (typeof U == "function") {
          (c.callback = null), (v = c.priorityLevel);
          var B = U(c.expirationTime <= O);
          (O = e.unstable_now()),
            typeof B == "function" ? (c.callback = B) : c === n(u) && r(u),
            h(O);
        } else r(u);
        c = n(u);
      }
      if (c !== null) var Xt = !0;
      else {
        var re = n(a);
        re !== null && We(E, re.startTime - O), (Xt = !1);
      }
      return Xt;
    } finally {
      (c = null), (v = L), (x = !1);
    }
  }
  var C = !1,
    R = null,
    _ = -1,
    z = 5,
    F = -1;
  function ie() {
    return !(e.unstable_now() - F < z);
  }
  function Le() {
    if (R !== null) {
      var T = e.unstable_now();
      F = T;
      var O = !0;
      try {
        O = R(!0, T);
      } finally {
        O ? Ve() : ((C = !1), (R = null));
      }
    } else C = !1;
  }
  var Ve;
  if (typeof p == "function")
    Ve = function () {
      p(Le);
    };
  else if (typeof MessageChannel < "u") {
    var kt = new MessageChannel(),
      st = kt.port2;
    (kt.port1.onmessage = Le),
      (Ve = function () {
        st.postMessage(null);
      });
  } else
    Ve = function () {
      k(Le, 0);
    };
  function bt(T) {
    (R = T), C || ((C = !0), Ve());
  }
  function We(T, O) {
    _ = k(function () {
      T(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), bt(j));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (z = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = v;
      }
      var L = v;
      v = O;
      try {
        return T();
      } finally {
        v = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, O) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var L = v;
      v = T;
      try {
        return O();
      } finally {
        v = L;
      }
    }),
    (e.unstable_scheduleCallback = function (T, O, L) {
      var U = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? U + L : U))
          : (L = U),
        T)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = L + B),
        (T = {
          id: f++,
          callback: O,
          priorityLevel: T,
          startTime: L,
          expirationTime: B,
          sortIndex: -1,
        }),
        L > U
          ? ((T.sortIndex = L),
            t(a, T),
            n(u) === null &&
              T === n(a) &&
              (g ? (m(_), (_ = -1)) : (g = !0), We(E, L - U)))
          : ((T.sortIndex = B), t(u, T), w || x || ((w = !0), bt(j))),
        T
      );
    }),
    (e.unstable_shouldYield = ie),
    (e.unstable_wrapCallback = function (T) {
      var O = v;
      return function () {
        var L = v;
        v = O;
        try {
          return T.apply(this, arguments);
        } finally {
          v = L;
        }
      };
    });
})(dc);
cc.exports = dc;
var Tp = cc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fc = y,
  Pe = Tp;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pc = new Set(),
  Er = {};
function pn(e, t) {
  Dn(e, t), Dn(e + "Capture", t);
}
function Dn(e, t) {
  for (Er[e] = t, e = 0; e < t.length; e++) pc.add(t[e]);
}
var yt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  vi = Object.prototype.hasOwnProperty,
  Pp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _u = {},
  Ou = {};
function Rp(e) {
  return vi.call(Ou, e)
    ? !0
    : vi.call(_u, e)
      ? !1
      : Pp.test(e)
        ? (Ou[e] = !0)
        : ((_u[e] = !0), !1);
}
function _p(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Op(e, t, n, r) {
  if (t === null || typeof t > "u" || _p(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ye(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ae[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cs = /[\-:]([a-z])/g;
function js(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cs, js);
    ae[t] = new ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cs, js);
    ae[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cs, js);
  ae[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ts(e, t, n, r) {
  var l = ae.hasOwnProperty(t) ? ae[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Op(t, n, l, r) && (n = null),
    r || l === null
      ? Rp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Zr = Symbol.for("react.element"),
  yn = Symbol.for("react.portal"),
  wn = Symbol.for("react.fragment"),
  Ps = Symbol.for("react.strict_mode"),
  yi = Symbol.for("react.profiler"),
  mc = Symbol.for("react.provider"),
  hc = Symbol.for("react.context"),
  Rs = Symbol.for("react.forward_ref"),
  wi = Symbol.for("react.suspense"),
  xi = Symbol.for("react.suspense_list"),
  _s = Symbol.for("react.memo"),
  Tt = Symbol.for("react.lazy"),
  gc = Symbol.for("react.offscreen"),
  Lu = Symbol.iterator;
function Xn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lu && e[Lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  Ao;
function sr(e) {
  if (Ao === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ao = (t && t[1]) || "";
    }
  return (
    `
` +
    Ao +
    e
  );
}
var Do = !1;
function Mo(e, t) {
  if (!e || Do) return "";
  Do = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (Do = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? sr(e) : "";
}
function Lp(e) {
  switch (e.tag) {
    case 5:
      return sr(e.type);
    case 16:
      return sr("Lazy");
    case 13:
      return sr("Suspense");
    case 19:
      return sr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Mo(e.type, !1)), e;
    case 11:
      return (e = Mo(e.type.render, !1)), e;
    case 1:
      return (e = Mo(e.type, !0)), e;
    default:
      return "";
  }
}
function Si(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wn:
      return "Fragment";
    case yn:
      return "Portal";
    case yi:
      return "Profiler";
    case Ps:
      return "StrictMode";
    case wi:
      return "Suspense";
    case xi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hc:
        return (e.displayName || "Context") + ".Consumer";
      case mc:
        return (e._context.displayName || "Context") + ".Provider";
      case Rs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case _s:
        return (
          (t = e.displayName || null), t !== null ? t : Si(e.type) || "Memo"
        );
      case Tt:
        (t = e._payload), (e = e._init);
        try {
          return Si(e(t));
        } catch {}
    }
  return null;
}
function Fp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Si(t);
    case 8:
      return t === Ps ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Wt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function $p(e) {
  var t = vc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function el(e) {
  e._valueTracker || (e._valueTracker = $p(e));
}
function yc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = vc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Fl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ei(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Fu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Wt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function wc(e, t) {
  (t = t.checked), t != null && Ts(e, "checked", t, !1);
}
function ki(e, t) {
  wc(e, t);
  var n = Wt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ni(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ni(e, t.type, Wt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function $u(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ni(e, t, n) {
  (t !== "number" || Fl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ur = Array.isArray;
function _n(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Wt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ci(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Au(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (ur(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Wt(n) };
}
function xc(e, t) {
  var n = Wt(t.value),
    r = Wt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Du(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ji(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Sc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var tl,
  Ec = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        tl = tl || document.createElement("div"),
          tl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = tl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function kr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ap = ["Webkit", "ms", "Moz", "O"];
Object.keys(fr).forEach(function (e) {
  Ap.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fr[t] = fr[e]);
  });
});
function kc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (fr.hasOwnProperty(e) && fr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Nc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = kc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Dp = X(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Ti(e, t) {
  if (t) {
    if (Dp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Pi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ri = null;
function Os(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var _i = null,
  On = null,
  Ln = null;
function Mu(e) {
  if ((e = Vr(e))) {
    if (typeof _i != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = mo(t)), _i(e.stateNode, e.type, t));
  }
}
function Cc(e) {
  On ? (Ln ? Ln.push(e) : (Ln = [e])) : (On = e);
}
function jc() {
  if (On) {
    var e = On,
      t = Ln;
    if (((Ln = On = null), Mu(e), t)) for (e = 0; e < t.length; e++) Mu(t[e]);
  }
}
function Tc(e, t) {
  return e(t);
}
function Pc() {}
var zo = !1;
function Rc(e, t, n) {
  if (zo) return e(t, n);
  zo = !0;
  try {
    return Tc(e, t, n);
  } finally {
    (zo = !1), (On !== null || Ln !== null) && (Pc(), jc());
  }
}
function Nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = mo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Oi = !1;
if (yt)
  try {
    var Jn = {};
    Object.defineProperty(Jn, "passive", {
      get: function () {
        Oi = !0;
      },
    }),
      window.addEventListener("test", Jn, Jn),
      window.removeEventListener("test", Jn, Jn);
  } catch {
    Oi = !1;
  }
function Mp(e, t, n, r, l, o, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (f) {
    this.onError(f);
  }
}
var pr = !1,
  $l = null,
  Al = !1,
  Li = null,
  zp = {
    onError: function (e) {
      (pr = !0), ($l = e);
    },
  };
function Ip(e, t, n, r, l, o, i, s, u) {
  (pr = !1), ($l = null), Mp.apply(zp, arguments);
}
function Up(e, t, n, r, l, o, i, s, u) {
  if ((Ip.apply(this, arguments), pr)) {
    if (pr) {
      var a = $l;
      (pr = !1), ($l = null);
    } else throw Error(N(198));
    Al || ((Al = !0), (Li = a));
  }
}
function mn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _c(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function zu(e) {
  if (mn(e) !== e) throw Error(N(188));
}
function Bp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = mn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return zu(l), e;
        if (o === r) return zu(l), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Oc(e) {
  return (e = Bp(e)), e !== null ? Lc(e) : null;
}
function Lc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Lc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Fc = Pe.unstable_scheduleCallback,
  Iu = Pe.unstable_cancelCallback,
  Hp = Pe.unstable_shouldYield,
  Vp = Pe.unstable_requestPaint,
  q = Pe.unstable_now,
  Wp = Pe.unstable_getCurrentPriorityLevel,
  Ls = Pe.unstable_ImmediatePriority,
  $c = Pe.unstable_UserBlockingPriority,
  Dl = Pe.unstable_NormalPriority,
  Qp = Pe.unstable_LowPriority,
  Ac = Pe.unstable_IdlePriority,
  ao = null,
  lt = null;
function Kp(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
      lt.onCommitFiberRoot(ao, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var be = Math.clz32 ? Math.clz32 : bp,
  Yp = Math.log,
  Gp = Math.LN2;
function bp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Yp(e) / Gp) | 0)) | 0;
}
var nl = 64,
  rl = 4194304;
function ar(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ml(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = ar(s)) : ((o &= i), o !== 0 && (r = ar(o)));
  } else (i = n & ~l), i !== 0 ? (r = ar(i)) : o !== 0 && (r = ar(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - be(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Xp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Jp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - be(o),
      s = 1 << i,
      u = l[i];
    u === -1
      ? (!(s & n) || s & r) && (l[i] = Xp(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Fi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Dc() {
  var e = nl;
  return (nl <<= 1), !(nl & 4194240) && (nl = 64), e;
}
function Io(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Br(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - be(t)),
    (e[t] = n);
}
function qp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - be(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Fs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - be(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var I = 0;
function Mc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zc,
  $s,
  Ic,
  Uc,
  Bc,
  $i = !1,
  ll = [],
  At = null,
  Dt = null,
  Mt = null,
  Cr = new Map(),
  jr = new Map(),
  Rt = [],
  Zp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Uu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      At = null;
      break;
    case "dragenter":
    case "dragleave":
      Dt = null;
      break;
    case "mouseover":
    case "mouseout":
      Mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Cr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jr.delete(t.pointerId);
  }
}
function qn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Vr(t)), t !== null && $s(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function em(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (At = qn(At, e, t, n, r, l)), !0;
    case "dragenter":
      return (Dt = qn(Dt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Mt = qn(Mt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Cr.set(o, qn(Cr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), jr.set(o, qn(jr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Hc(e) {
  var t = en(e.target);
  if (t !== null) {
    var n = mn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _c(n)), t !== null)) {
          (e.blockedOn = t),
            Bc(e.priority, function () {
              Ic(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function wl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ai(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ri = r), n.target.dispatchEvent(r), (Ri = null);
    } else return (t = Vr(n)), t !== null && $s(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Bu(e, t, n) {
  wl(e) && n.delete(t);
}
function tm() {
  ($i = !1),
    At !== null && wl(At) && (At = null),
    Dt !== null && wl(Dt) && (Dt = null),
    Mt !== null && wl(Mt) && (Mt = null),
    Cr.forEach(Bu),
    jr.forEach(Bu);
}
function Zn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $i ||
      (($i = !0),
      Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, tm)));
}
function Tr(e) {
  function t(l) {
    return Zn(l, e);
  }
  if (0 < ll.length) {
    Zn(ll[0], e);
    for (var n = 1; n < ll.length; n++) {
      var r = ll[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    At !== null && Zn(At, e),
      Dt !== null && Zn(Dt, e),
      Mt !== null && Zn(Mt, e),
      Cr.forEach(t),
      jr.forEach(t),
      n = 0;
    n < Rt.length;
    n++
  )
    (r = Rt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null); )
    Hc(n), n.blockedOn === null && Rt.shift();
}
var Fn = Et.ReactCurrentBatchConfig,
  zl = !0;
function nm(e, t, n, r) {
  var l = I,
    o = Fn.transition;
  Fn.transition = null;
  try {
    (I = 1), As(e, t, n, r);
  } finally {
    (I = l), (Fn.transition = o);
  }
}
function rm(e, t, n, r) {
  var l = I,
    o = Fn.transition;
  Fn.transition = null;
  try {
    (I = 4), As(e, t, n, r);
  } finally {
    (I = l), (Fn.transition = o);
  }
}
function As(e, t, n, r) {
  if (zl) {
    var l = Ai(e, t, n, r);
    if (l === null) bo(e, t, r, Il, n), Uu(e, r);
    else if (em(l, e, t, n, r)) r.stopPropagation();
    else if ((Uu(e, r), t & 4 && -1 < Zp.indexOf(e))) {
      for (; l !== null; ) {
        var o = Vr(l);
        if (
          (o !== null && zc(o),
          (o = Ai(e, t, n, r)),
          o === null && bo(e, t, r, Il, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else bo(e, t, r, null, n);
  }
}
var Il = null;
function Ai(e, t, n, r) {
  if (((Il = null), (e = Os(r)), (e = en(e)), e !== null))
    if (((t = mn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _c(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Il = e), null;
}
function Vc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Wp()) {
        case Ls:
          return 1;
        case $c:
          return 4;
        case Dl:
        case Qp:
          return 16;
        case Ac:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lt = null,
  Ds = null,
  xl = null;
function Wc() {
  if (xl) return xl;
  var e,
    t = Ds,
    n = t.length,
    r,
    l = "value" in Lt ? Lt.value : Lt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (xl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Sl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ol() {
  return !0;
}
function Hu() {
  return !1;
}
function _e(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ol
        : Hu),
      (this.isPropagationStopped = Hu),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ol));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ol));
      },
      persist: function () {},
      isPersistent: ol,
    }),
    t
  );
}
var Qn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ms = _e(Qn),
  Hr = X({}, Qn, { view: 0, detail: 0 }),
  lm = _e(Hr),
  Uo,
  Bo,
  er,
  co = X({}, Hr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== er &&
            (er && e.type === "mousemove"
              ? ((Uo = e.screenX - er.screenX), (Bo = e.screenY - er.screenY))
              : (Bo = Uo = 0),
            (er = e)),
          Uo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Bo;
    },
  }),
  Vu = _e(co),
  om = X({}, co, { dataTransfer: 0 }),
  im = _e(om),
  sm = X({}, Hr, { relatedTarget: 0 }),
  Ho = _e(sm),
  um = X({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  am = _e(um),
  cm = X({}, Qn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  dm = _e(cm),
  fm = X({}, Qn, { data: 0 }),
  Wu = _e(fm),
  pm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  mm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  hm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hm[e]) ? !!t[e] : !1;
}
function zs() {
  return gm;
}
var vm = X({}, Hr, {
    key: function (e) {
      if (e.key) {
        var t = pm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Sl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? mm[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zs,
    charCode: function (e) {
      return e.type === "keypress" ? Sl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Sl(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  ym = _e(vm),
  wm = X({}, co, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Qu = _e(wm),
  xm = X({}, Hr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zs,
  }),
  Sm = _e(xm),
  Em = X({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  km = _e(Em),
  Nm = X({}, co, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Cm = _e(Nm),
  jm = [9, 13, 27, 32],
  Is = yt && "CompositionEvent" in window,
  mr = null;
yt && "documentMode" in document && (mr = document.documentMode);
var Tm = yt && "TextEvent" in window && !mr,
  Qc = yt && (!Is || (mr && 8 < mr && 11 >= mr)),
  Ku = " ",
  Yu = !1;
function Kc(e, t) {
  switch (e) {
    case "keyup":
      return jm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Yc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var xn = !1;
function Pm(e, t) {
  switch (e) {
    case "compositionend":
      return Yc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Yu = !0), Ku);
    case "textInput":
      return (e = t.data), e === Ku && Yu ? null : e;
    default:
      return null;
  }
}
function Rm(e, t) {
  if (xn)
    return e === "compositionend" || (!Is && Kc(e, t))
      ? ((e = Wc()), (xl = Ds = Lt = null), (xn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _m = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Gu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_m[e.type] : t === "textarea";
}
function Gc(e, t, n, r) {
  Cc(r),
    (t = Ul(t, "onChange")),
    0 < t.length &&
      ((n = new Ms("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var hr = null,
  Pr = null;
function Om(e) {
  od(e, 0);
}
function fo(e) {
  var t = kn(e);
  if (yc(t)) return e;
}
function Lm(e, t) {
  if (e === "change") return t;
}
var bc = !1;
if (yt) {
  var Vo;
  if (yt) {
    var Wo = "oninput" in document;
    if (!Wo) {
      var bu = document.createElement("div");
      bu.setAttribute("oninput", "return;"),
        (Wo = typeof bu.oninput == "function");
    }
    Vo = Wo;
  } else Vo = !1;
  bc = Vo && (!document.documentMode || 9 < document.documentMode);
}
function Xu() {
  hr && (hr.detachEvent("onpropertychange", Xc), (Pr = hr = null));
}
function Xc(e) {
  if (e.propertyName === "value" && fo(Pr)) {
    var t = [];
    Gc(t, Pr, e, Os(e)), Rc(Om, t);
  }
}
function Fm(e, t, n) {
  e === "focusin"
    ? (Xu(), (hr = t), (Pr = n), hr.attachEvent("onpropertychange", Xc))
    : e === "focusout" && Xu();
}
function $m(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fo(Pr);
}
function Am(e, t) {
  if (e === "click") return fo(t);
}
function Dm(e, t) {
  if (e === "input" || e === "change") return fo(t);
}
function Mm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Je = typeof Object.is == "function" ? Object.is : Mm;
function Rr(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!vi.call(t, l) || !Je(e[l], t[l])) return !1;
  }
  return !0;
}
function Ju(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qu(e, t) {
  var n = Ju(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ju(n);
  }
}
function Jc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Jc(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function qc() {
  for (var e = window, t = Fl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fl(e.document);
  }
  return t;
}
function Us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function zm(e) {
  var t = qc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Jc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Us(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = qu(n, o));
        var i = qu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Im = yt && "documentMode" in document && 11 >= document.documentMode,
  Sn = null,
  Di = null,
  gr = null,
  Mi = !1;
function Zu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Mi ||
    Sn == null ||
    Sn !== Fl(r) ||
    ((r = Sn),
    "selectionStart" in r && Us(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (gr && Rr(gr, r)) ||
      ((gr = r),
      (r = Ul(Di, "onSelect")),
      0 < r.length &&
        ((t = new Ms("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Sn))));
}
function il(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var En = {
    animationend: il("Animation", "AnimationEnd"),
    animationiteration: il("Animation", "AnimationIteration"),
    animationstart: il("Animation", "AnimationStart"),
    transitionend: il("Transition", "TransitionEnd"),
  },
  Qo = {},
  Zc = {};
yt &&
  ((Zc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete En.animationend.animation,
    delete En.animationiteration.animation,
    delete En.animationstart.animation),
  "TransitionEvent" in window || delete En.transitionend.transition);
function po(e) {
  if (Qo[e]) return Qo[e];
  if (!En[e]) return e;
  var t = En[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zc) return (Qo[e] = t[n]);
  return e;
}
var ed = po("animationend"),
  td = po("animationiteration"),
  nd = po("animationstart"),
  rd = po("transitionend"),
  ld = new Map(),
  ea =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Kt(e, t) {
  ld.set(e, t), pn(t, [e]);
}
for (var Ko = 0; Ko < ea.length; Ko++) {
  var Yo = ea[Ko],
    Um = Yo.toLowerCase(),
    Bm = Yo[0].toUpperCase() + Yo.slice(1);
  Kt(Um, "on" + Bm);
}
Kt(ed, "onAnimationEnd");
Kt(td, "onAnimationIteration");
Kt(nd, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(rd, "onTransitionEnd");
Dn("onMouseEnter", ["mouseout", "mouseover"]);
Dn("onMouseLeave", ["mouseout", "mouseover"]);
Dn("onPointerEnter", ["pointerout", "pointerover"]);
Dn("onPointerLeave", ["pointerout", "pointerover"]);
pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var cr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Hm = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));
function ta(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Up(r, t, void 0, e), (e.currentTarget = null);
}
function od(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== o && l.isPropagationStopped())) break e;
          ta(l, s, a), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          ta(l, s, a), (o = u);
        }
    }
  }
  if (Al) throw ((e = Li), (Al = !1), (Li = null), e);
}
function V(e, t) {
  var n = t[Hi];
  n === void 0 && (n = t[Hi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (id(t, e, 2, !1), n.add(r));
}
function Go(e, t, n) {
  var r = 0;
  t && (r |= 4), id(n, e, r, t);
}
var sl = "_reactListening" + Math.random().toString(36).slice(2);
function _r(e) {
  if (!e[sl]) {
    (e[sl] = !0),
      pc.forEach(function (n) {
        n !== "selectionchange" && (Hm.has(n) || Go(n, !1, e), Go(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[sl] || ((t[sl] = !0), Go("selectionchange", !1, t));
  }
}
function id(e, t, n, r) {
  switch (Vc(t)) {
    case 1:
      var l = nm;
      break;
    case 4:
      l = rm;
      break;
    default:
      l = As;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Oi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function bo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = en(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Rc(function () {
    var a = o,
      f = Os(n),
      c = [];
    e: {
      var v = ld.get(e);
      if (v !== void 0) {
        var x = Ms,
          w = e;
        switch (e) {
          case "keypress":
            if (Sl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = ym;
            break;
          case "focusin":
            (w = "focus"), (x = Ho);
            break;
          case "focusout":
            (w = "blur"), (x = Ho);
            break;
          case "beforeblur":
          case "afterblur":
            x = Ho;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Vu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = im;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Sm;
            break;
          case ed:
          case td:
          case nd:
            x = am;
            break;
          case rd:
            x = km;
            break;
          case "scroll":
            x = lm;
            break;
          case "wheel":
            x = Cm;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = dm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Qu;
        }
        var g = (t & 4) !== 0,
          k = !g && e === "scroll",
          m = g ? (v !== null ? v + "Capture" : null) : v;
        g = [];
        for (var p = a, h; p !== null; ) {
          h = p;
          var E = h.stateNode;
          if (
            (h.tag === 5 &&
              E !== null &&
              ((h = E),
              m !== null && ((E = Nr(p, m)), E != null && g.push(Or(p, E, h)))),
            k)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((v = new x(v, w, null, n, f)), c.push({ event: v, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          v &&
            n !== Ri &&
            (w = n.relatedTarget || n.fromElement) &&
            (en(w) || w[wt]))
        )
          break e;
        if (
          (x || v) &&
          ((v =
            f.window === f
              ? f
              : (v = f.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = a),
              (w = w ? en(w) : null),
              w !== null &&
                ((k = mn(w)), w !== k || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = a)),
          x !== w)
        ) {
          if (
            ((g = Vu),
            (E = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Qu),
              (E = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (k = x == null ? v : kn(x)),
            (h = w == null ? v : kn(w)),
            (v = new g(E, p + "leave", x, n, f)),
            (v.target = k),
            (v.relatedTarget = h),
            (E = null),
            en(f) === a &&
              ((g = new g(m, p + "enter", w, n, f)),
              (g.target = h),
              (g.relatedTarget = k),
              (E = g)),
            (k = E),
            x && w)
          )
            t: {
              for (g = x, m = w, p = 0, h = g; h; h = vn(h)) p++;
              for (h = 0, E = m; E; E = vn(E)) h++;
              for (; 0 < p - h; ) (g = vn(g)), p--;
              for (; 0 < h - p; ) (m = vn(m)), h--;
              for (; p--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                (g = vn(g)), (m = vn(m));
              }
              g = null;
            }
          else g = null;
          x !== null && na(c, v, x, g, !1),
            w !== null && k !== null && na(c, k, w, g, !0);
        }
      }
      e: {
        if (
          ((v = a ? kn(a) : window),
          (x = v.nodeName && v.nodeName.toLowerCase()),
          x === "select" || (x === "input" && v.type === "file"))
        )
          var j = Lm;
        else if (Gu(v))
          if (bc) j = Dm;
          else {
            j = $m;
            var C = Fm;
          }
        else
          (x = v.nodeName) &&
            x.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (j = Am);
        if (j && (j = j(e, a))) {
          Gc(c, j, n, f);
          break e;
        }
        C && C(e, v, a),
          e === "focusout" &&
            (C = v._wrapperState) &&
            C.controlled &&
            v.type === "number" &&
            Ni(v, "number", v.value);
      }
      switch (((C = a ? kn(a) : window), e)) {
        case "focusin":
          (Gu(C) || C.contentEditable === "true") &&
            ((Sn = C), (Di = a), (gr = null));
          break;
        case "focusout":
          gr = Di = Sn = null;
          break;
        case "mousedown":
          Mi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Mi = !1), Zu(c, n, f);
          break;
        case "selectionchange":
          if (Im) break;
        case "keydown":
        case "keyup":
          Zu(c, n, f);
      }
      var R;
      if (Is)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        xn
          ? Kc(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Qc &&
          n.locale !== "ko" &&
          (xn || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && xn && (R = Wc())
            : ((Lt = f),
              (Ds = "value" in Lt ? Lt.value : Lt.textContent),
              (xn = !0))),
        (C = Ul(a, _)),
        0 < C.length &&
          ((_ = new Wu(_, e, null, n, f)),
          c.push({ event: _, listeners: C }),
          R ? (_.data = R) : ((R = Yc(n)), R !== null && (_.data = R)))),
        (R = Tm ? Pm(e, n) : Rm(e, n)) &&
          ((a = Ul(a, "onBeforeInput")),
          0 < a.length &&
            ((f = new Wu("onBeforeInput", "beforeinput", null, n, f)),
            c.push({ event: f, listeners: a }),
            (f.data = R)));
    }
    od(c, t);
  });
}
function Or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ul(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Nr(e, n)),
      o != null && r.unshift(Or(e, o, l)),
      (o = Nr(e, t)),
      o != null && r.push(Or(e, o, l))),
      (e = e.return);
  }
  return r;
}
function vn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function na(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      l
        ? ((u = Nr(n, o)), u != null && i.unshift(Or(n, u, s)))
        : l || ((u = Nr(n, o)), u != null && i.push(Or(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Vm = /\r\n?/g,
  Wm = /\u0000|\uFFFD/g;
function ra(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vm,
      `
`,
    )
    .replace(Wm, "");
}
function ul(e, t, n) {
  if (((t = ra(t)), ra(e) !== t && n)) throw Error(N(425));
}
function Bl() {}
var zi = null,
  Ii = null;
function Ui(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bi = typeof setTimeout == "function" ? setTimeout : void 0,
  Qm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  la = typeof Promise == "function" ? Promise : void 0,
  Km =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof la < "u"
        ? function (e) {
            return la.resolve(null).then(e).catch(Ym);
          }
        : Bi;
function Ym(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Tr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Tr(t);
}
function zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function oa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Kn = Math.random().toString(36).slice(2),
  tt = "__reactFiber$" + Kn,
  Lr = "__reactProps$" + Kn,
  wt = "__reactContainer$" + Kn,
  Hi = "__reactEvents$" + Kn,
  Gm = "__reactListeners$" + Kn,
  bm = "__reactHandles$" + Kn;
function en(e) {
  var t = e[tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[wt] || n[tt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = oa(e); e !== null; ) {
          if ((n = e[tt])) return n;
          e = oa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Vr(e) {
  return (
    (e = e[tt] || e[wt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function mo(e) {
  return e[Lr] || null;
}
var Vi = [],
  Nn = -1;
function Yt(e) {
  return { current: e };
}
function W(e) {
  0 > Nn || ((e.current = Vi[Nn]), (Vi[Nn] = null), Nn--);
}
function H(e, t) {
  Nn++, (Vi[Nn] = e.current), (e.current = t);
}
var Qt = {},
  me = Yt(Qt),
  Se = Yt(!1),
  un = Qt;
function Mn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Qt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ee(e) {
  return (e = e.childContextTypes), e != null;
}
function Hl() {
  W(Se), W(me);
}
function ia(e, t, n) {
  if (me.current !== Qt) throw Error(N(168));
  H(me, t), H(Se, n);
}
function sd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, Fp(e) || "Unknown", l));
  return X({}, n, r);
}
function Vl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qt),
    (un = me.current),
    H(me, e),
    H(Se, Se.current),
    !0
  );
}
function sa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = sd(e, t, un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Se),
      W(me),
      H(me, e))
    : W(Se),
    H(Se, n);
}
var dt = null,
  ho = !1,
  Jo = !1;
function ud(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
function Xm(e) {
  (ho = !0), ud(e);
}
function Gt() {
  if (!Jo && dt !== null) {
    Jo = !0;
    var e = 0,
      t = I;
    try {
      var n = dt;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (dt = null), (ho = !1);
    } catch (l) {
      throw (dt !== null && (dt = dt.slice(e + 1)), Fc(Ls, Gt), l);
    } finally {
      (I = t), (Jo = !1);
    }
  }
  return null;
}
var Cn = [],
  jn = 0,
  Wl = null,
  Ql = 0,
  $e = [],
  Ae = 0,
  an = null,
  ft = 1,
  pt = "";
function Jt(e, t) {
  (Cn[jn++] = Ql), (Cn[jn++] = Wl), (Wl = e), (Ql = t);
}
function ad(e, t, n) {
  ($e[Ae++] = ft), ($e[Ae++] = pt), ($e[Ae++] = an), (an = e);
  var r = ft;
  e = pt;
  var l = 32 - be(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - be(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (ft = (1 << (32 - be(t) + l)) | (n << l) | r),
      (pt = o + e);
  } else (ft = (1 << o) | (n << l) | r), (pt = e);
}
function Bs(e) {
  e.return !== null && (Jt(e, 1), ad(e, 1, 0));
}
function Hs(e) {
  for (; e === Wl; )
    (Wl = Cn[--jn]), (Cn[jn] = null), (Ql = Cn[--jn]), (Cn[jn] = null);
  for (; e === an; )
    (an = $e[--Ae]),
      ($e[Ae] = null),
      (pt = $e[--Ae]),
      ($e[Ae] = null),
      (ft = $e[--Ae]),
      ($e[Ae] = null);
}
var Te = null,
  je = null,
  K = !1,
  Ge = null;
function cd(e, t) {
  var n = De(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ua(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Te = e), (je = zt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Te = e), (je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = an !== null ? { id: ft, overflow: pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = De(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Te = e),
            (je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qi(e) {
  if (K) {
    var t = je;
    if (t) {
      var n = t;
      if (!ua(e, t)) {
        if (Wi(e)) throw Error(N(418));
        t = zt(n.nextSibling);
        var r = Te;
        t && ua(e, t)
          ? cd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (Te = e));
      }
    } else {
      if (Wi(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (K = !1), (Te = e);
    }
  }
}
function aa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Te = e;
}
function al(e) {
  if (e !== Te) return !1;
  if (!K) return aa(e), (K = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ui(e.type, e.memoizedProps))),
    t && (t = je))
  ) {
    if (Wi(e)) throw (dd(), Error(N(418)));
    for (; t; ) cd(e, t), (t = zt(t.nextSibling));
  }
  if ((aa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              je = zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = Te ? zt(e.stateNode.nextSibling) : null;
  return !0;
}
function dd() {
  for (var e = je; e; ) e = zt(e.nextSibling);
}
function zn() {
  (je = Te = null), (K = !1);
}
function Vs(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
var Jm = Et.ReactCurrentBatchConfig;
function Ke(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Kl = Yt(null),
  Yl = null,
  Tn = null,
  Ws = null;
function Qs() {
  Ws = Tn = Yl = null;
}
function Ks(e) {
  var t = Kl.current;
  W(Kl), (e._currentValue = t);
}
function Ki(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $n(e, t) {
  (Yl = e),
    (Ws = Tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (xe = !0), (e.firstContext = null));
}
function Ie(e) {
  var t = e._currentValue;
  if (Ws !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
      if (Yl === null) throw Error(N(308));
      (Tn = e), (Yl.dependencies = { lanes: 0, firstContext: e });
    } else Tn = Tn.next = e;
  return t;
}
var tn = null;
function Ys(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
function fd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ys(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    xt(e, r)
  );
}
function xt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Pt = !1;
function Gs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function pd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function mt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function It(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      xt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ys(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    xt(e, n)
  );
}
function El(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fs(e, n);
  }
}
function ca(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Gl(e, t, n, r) {
  var l = e.updateQueue;
  Pt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), i === null ? (o = a) : (i.next = a), (i = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (s = f.lastBaseUpdate),
      s !== i &&
        (s === null ? (f.firstBaseUpdate = a) : (s.next = a),
        (f.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var c = l.baseState;
    (i = 0), (f = a = u = null), (s = o);
    do {
      var v = s.lane,
        x = s.eventTime;
      if ((r & v) === v) {
        f !== null &&
          (f = f.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            g = s;
          switch (((v = t), (x = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == "function")) {
                c = w.call(x, c, v);
                break e;
              }
              c = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = g.payload),
                (v = typeof w == "function" ? w.call(x, c, v) : w),
                v == null)
              )
                break e;
              c = X({}, c, v);
              break e;
            case 2:
              Pt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [s]) : v.push(s));
      } else
        (x = {
          eventTime: x,
          lane: v,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          f === null ? ((a = f = x), (u = c)) : (f = f.next = x),
          (i |= v);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (v = s),
          (s = v.next),
          (v.next = null),
          (l.lastBaseUpdate = v),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = c),
      (l.baseState = u),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (dn |= i), (e.lanes = i), (e.memoizedState = c);
  }
}
function da(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var md = new fc.Component().refs;
function Yi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var go = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? mn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ge(),
      l = Bt(e),
      o = mt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = It(e, o, l)),
      t !== null && (Xe(t, e, l, r), El(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ge(),
      l = Bt(e),
      o = mt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = It(e, o, l)),
      t !== null && (Xe(t, e, l, r), El(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ge(),
      r = Bt(e),
      l = mt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = It(e, l, r)),
      t !== null && (Xe(t, e, r, n), El(t, e, r));
  },
};
function fa(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Rr(n, r) || !Rr(l, o)
        : !0
  );
}
function hd(e, t, n) {
  var r = !1,
    l = Qt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ie(o))
      : ((l = Ee(t) ? un : me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Mn(e, l) : Qt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = go),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function pa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && go.enqueueReplaceState(t, t.state, null);
}
function Gi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = md), Gs(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ie(o))
    : ((o = Ee(t) ? un : me.current), (l.context = Mn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Yi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && go.enqueueReplaceState(l, l.state, null),
      Gl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function tr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            s === md && (s = l.refs = {}),
              i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function cl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function ma(e) {
  var t = e._init;
  return t(e._payload);
}
function gd(e) {
  function t(m, p) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [p]), (m.flags |= 16)) : h.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function l(m, p) {
    return (m = Ht(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, p, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((m.flags |= 2), p) : h)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, p, h, E) {
    return p === null || p.tag !== 6
      ? ((p = li(h, m.mode, E)), (p.return = m), p)
      : ((p = l(p, h)), (p.return = m), p);
  }
  function u(m, p, h, E) {
    var j = h.type;
    return j === wn
      ? f(m, p, h.props.children, E, h.key)
      : p !== null &&
          (p.elementType === j ||
            (typeof j == "object" &&
              j !== null &&
              j.$$typeof === Tt &&
              ma(j) === p.type))
        ? ((E = l(p, h.props)), (E.ref = tr(m, p, h)), (E.return = m), E)
        : ((E = Pl(h.type, h.key, h.props, null, m.mode, E)),
          (E.ref = tr(m, p, h)),
          (E.return = m),
          E);
  }
  function a(m, p, h, E) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = oi(h, m.mode, E)), (p.return = m), p)
      : ((p = l(p, h.children || [])), (p.return = m), p);
  }
  function f(m, p, h, E, j) {
    return p === null || p.tag !== 7
      ? ((p = on(h, m.mode, E, j)), (p.return = m), p)
      : ((p = l(p, h)), (p.return = m), p);
  }
  function c(m, p, h) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = li("" + p, m.mode, h)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Zr:
          return (
            (h = Pl(p.type, p.key, p.props, null, m.mode, h)),
            (h.ref = tr(m, null, p)),
            (h.return = m),
            h
          );
        case yn:
          return (p = oi(p, m.mode, h)), (p.return = m), p;
        case Tt:
          var E = p._init;
          return c(m, E(p._payload), h);
      }
      if (ur(p) || Xn(p))
        return (p = on(p, m.mode, h, null)), (p.return = m), p;
      cl(m, p);
    }
    return null;
  }
  function v(m, p, h, E) {
    var j = p !== null ? p.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return j !== null ? null : s(m, p, "" + h, E);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Zr:
          return h.key === j ? u(m, p, h, E) : null;
        case yn:
          return h.key === j ? a(m, p, h, E) : null;
        case Tt:
          return (j = h._init), v(m, p, j(h._payload), E);
      }
      if (ur(h) || Xn(h)) return j !== null ? null : f(m, p, h, E, null);
      cl(m, h);
    }
    return null;
  }
  function x(m, p, h, E, j) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (m = m.get(h) || null), s(p, m, "" + E, j);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Zr:
          return (m = m.get(E.key === null ? h : E.key) || null), u(p, m, E, j);
        case yn:
          return (m = m.get(E.key === null ? h : E.key) || null), a(p, m, E, j);
        case Tt:
          var C = E._init;
          return x(m, p, h, C(E._payload), j);
      }
      if (ur(E) || Xn(E)) return (m = m.get(h) || null), f(p, m, E, j, null);
      cl(p, E);
    }
    return null;
  }
  function w(m, p, h, E) {
    for (
      var j = null, C = null, R = p, _ = (p = 0), z = null;
      R !== null && _ < h.length;
      _++
    ) {
      R.index > _ ? ((z = R), (R = null)) : (z = R.sibling);
      var F = v(m, R, h[_], E);
      if (F === null) {
        R === null && (R = z);
        break;
      }
      e && R && F.alternate === null && t(m, R),
        (p = o(F, p, _)),
        C === null ? (j = F) : (C.sibling = F),
        (C = F),
        (R = z);
    }
    if (_ === h.length) return n(m, R), K && Jt(m, _), j;
    if (R === null) {
      for (; _ < h.length; _++)
        (R = c(m, h[_], E)),
          R !== null &&
            ((p = o(R, p, _)), C === null ? (j = R) : (C.sibling = R), (C = R));
      return K && Jt(m, _), j;
    }
    for (R = r(m, R); _ < h.length; _++)
      (z = x(R, m, _, h[_], E)),
        z !== null &&
          (e && z.alternate !== null && R.delete(z.key === null ? _ : z.key),
          (p = o(z, p, _)),
          C === null ? (j = z) : (C.sibling = z),
          (C = z));
    return (
      e &&
        R.forEach(function (ie) {
          return t(m, ie);
        }),
      K && Jt(m, _),
      j
    );
  }
  function g(m, p, h, E) {
    var j = Xn(h);
    if (typeof j != "function") throw Error(N(150));
    if (((h = j.call(h)), h == null)) throw Error(N(151));
    for (
      var C = (j = null), R = p, _ = (p = 0), z = null, F = h.next();
      R !== null && !F.done;
      _++, F = h.next()
    ) {
      R.index > _ ? ((z = R), (R = null)) : (z = R.sibling);
      var ie = v(m, R, F.value, E);
      if (ie === null) {
        R === null && (R = z);
        break;
      }
      e && R && ie.alternate === null && t(m, R),
        (p = o(ie, p, _)),
        C === null ? (j = ie) : (C.sibling = ie),
        (C = ie),
        (R = z);
    }
    if (F.done) return n(m, R), K && Jt(m, _), j;
    if (R === null) {
      for (; !F.done; _++, F = h.next())
        (F = c(m, F.value, E)),
          F !== null &&
            ((p = o(F, p, _)), C === null ? (j = F) : (C.sibling = F), (C = F));
      return K && Jt(m, _), j;
    }
    for (R = r(m, R); !F.done; _++, F = h.next())
      (F = x(R, m, _, F.value, E)),
        F !== null &&
          (e && F.alternate !== null && R.delete(F.key === null ? _ : F.key),
          (p = o(F, p, _)),
          C === null ? (j = F) : (C.sibling = F),
          (C = F));
    return (
      e &&
        R.forEach(function (Le) {
          return t(m, Le);
        }),
      K && Jt(m, _),
      j
    );
  }
  function k(m, p, h, E) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === wn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Zr:
          e: {
            for (var j = h.key, C = p; C !== null; ) {
              if (C.key === j) {
                if (((j = h.type), j === wn)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (p = l(C, h.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  C.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === Tt &&
                    ma(j) === C.type)
                ) {
                  n(m, C.sibling),
                    (p = l(C, h.props)),
                    (p.ref = tr(m, C, h)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            h.type === wn
              ? ((p = on(h.props.children, m.mode, E, h.key)),
                (p.return = m),
                (m = p))
              : ((E = Pl(h.type, h.key, h.props, null, m.mode, E)),
                (E.ref = tr(m, p, h)),
                (E.return = m),
                (m = E));
          }
          return i(m);
        case yn:
          e: {
            for (C = h.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  n(m, p.sibling),
                    (p = l(p, h.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = oi(h, m.mode, E)), (p.return = m), (m = p);
          }
          return i(m);
        case Tt:
          return (C = h._init), k(m, p, C(h._payload), E);
      }
      if (ur(h)) return w(m, p, h, E);
      if (Xn(h)) return g(m, p, h, E);
      cl(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = l(p, h)), (p.return = m), (m = p))
          : (n(m, p), (p = li(h, m.mode, E)), (p.return = m), (m = p)),
        i(m))
      : n(m, p);
  }
  return k;
}
var In = gd(!0),
  vd = gd(!1),
  Wr = {},
  ot = Yt(Wr),
  Fr = Yt(Wr),
  $r = Yt(Wr);
function nn(e) {
  if (e === Wr) throw Error(N(174));
  return e;
}
function bs(e, t) {
  switch ((H($r, t), H(Fr, e), H(ot, Wr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ji(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ji(t, e));
  }
  W(ot), H(ot, t);
}
function Un() {
  W(ot), W(Fr), W($r);
}
function yd(e) {
  nn($r.current);
  var t = nn(ot.current),
    n = ji(t, e.type);
  t !== n && (H(Fr, e), H(ot, n));
}
function Xs(e) {
  Fr.current === e && (W(ot), W(Fr));
}
var G = Yt(0);
function bl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var qo = [];
function Js() {
  for (var e = 0; e < qo.length; e++)
    qo[e]._workInProgressVersionPrimary = null;
  qo.length = 0;
}
var kl = Et.ReactCurrentDispatcher,
  Zo = Et.ReactCurrentBatchConfig,
  cn = 0,
  b = null,
  te = null,
  le = null,
  Xl = !1,
  vr = !1,
  Ar = 0,
  qm = 0;
function ce() {
  throw Error(N(321));
}
function qs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Je(e[n], t[n])) return !1;
  return !0;
}
function Zs(e, t, n, r, l, o) {
  if (
    ((cn = o),
    (b = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (kl.current = e === null || e.memoizedState === null ? nh : rh),
    (e = n(r, l)),
    vr)
  ) {
    o = 0;
    do {
      if (((vr = !1), (Ar = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (le = te = null),
        (t.updateQueue = null),
        (kl.current = lh),
        (e = n(r, l));
    } while (vr);
  }
  if (
    ((kl.current = Jl),
    (t = te !== null && te.next !== null),
    (cn = 0),
    (le = te = b = null),
    (Xl = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function eu() {
  var e = Ar !== 0;
  return (Ar = 0), e;
}
function et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (b.memoizedState = le = e) : (le = le.next = e), le;
}
function Ue() {
  if (te === null) {
    var e = b.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = le === null ? b.memoizedState : le.next;
  if (t !== null) (le = t), (te = e);
  else {
    if (e === null) throw Error(N(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      le === null ? (b.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function Dr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ei(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = te,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      a = o;
    do {
      var f = a.lane;
      if ((cn & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var c = {
          lane: f,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = c), (i = r)) : (u = u.next = c),
          (b.lanes |= f),
          (dn |= f);
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? (i = r) : (u.next = s),
      Je(r, t.memoizedState) || (xe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (b.lanes |= o), (dn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ti(e) {
  var t = Ue(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Je(o, t.memoizedState) || (xe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function wd() {}
function xd(e, t) {
  var n = b,
    r = Ue(),
    l = t(),
    o = !Je(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (xe = !0)),
    (r = r.queue),
    tu(kd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Mr(9, Ed.bind(null, n, r, l, t), void 0, null),
      oe === null)
    )
      throw Error(N(349));
    cn & 30 || Sd(n, t, l);
  }
  return l;
}
function Sd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = b.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (b.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ed(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Nd(t) && Cd(e);
}
function kd(e, t, n) {
  return n(function () {
    Nd(t) && Cd(e);
  });
}
function Nd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function Cd(e) {
  var t = xt(e, 1);
  t !== null && Xe(t, e, 1, -1);
}
function ha(e) {
  var t = et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Dr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = th.bind(null, b, e)),
    [t.memoizedState, e]
  );
}
function Mr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = b.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (b.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function jd() {
  return Ue().memoizedState;
}
function Nl(e, t, n, r) {
  var l = et();
  (b.flags |= e),
    (l.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r));
}
function vo(e, t, n, r) {
  var l = Ue();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (te !== null) {
    var i = te.memoizedState;
    if (((o = i.destroy), r !== null && qs(r, i.deps))) {
      l.memoizedState = Mr(t, n, o, r);
      return;
    }
  }
  (b.flags |= e), (l.memoizedState = Mr(1 | t, n, o, r));
}
function ga(e, t) {
  return Nl(8390656, 8, e, t);
}
function tu(e, t) {
  return vo(2048, 8, e, t);
}
function Td(e, t) {
  return vo(4, 2, e, t);
}
function Pd(e, t) {
  return vo(4, 4, e, t);
}
function Rd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function _d(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), vo(4, 4, Rd.bind(null, t, e), n)
  );
}
function nu() {}
function Od(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ld(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Fd(e, t, n) {
  return cn & 21
    ? (Je(n, t) || ((n = Dc()), (b.lanes |= n), (dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (xe = !0)), (e.memoizedState = n));
}
function Zm(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Zo.transition;
  Zo.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (Zo.transition = r);
  }
}
function $d() {
  return Ue().memoizedState;
}
function eh(e, t, n) {
  var r = Bt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ad(e))
  )
    Dd(t, n);
  else if (((n = fd(e, t, n, r)), n !== null)) {
    var l = ge();
    Xe(n, e, r, l), Md(n, t, r);
  }
}
function th(e, t, n) {
  var r = Bt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ad(e)) Dd(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), Je(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Ys(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = fd(e, t, l, r)),
      n !== null && ((l = ge()), Xe(n, e, r, l), Md(n, t, r));
  }
}
function Ad(e) {
  var t = e.alternate;
  return e === b || (t !== null && t === b);
}
function Dd(e, t) {
  vr = Xl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Md(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fs(e, n);
  }
}
var Jl = {
    readContext: Ie,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1,
  },
  nh = {
    readContext: Ie,
    useCallback: function (e, t) {
      return (et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ie,
    useEffect: ga,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Nl(4194308, 4, Rd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Nl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = et();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = eh.bind(null, b, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ha,
    useDebugValue: nu,
    useDeferredValue: function (e) {
      return (et().memoizedState = e);
    },
    useTransition: function () {
      var e = ha(!1),
        t = e[0];
      return (e = Zm.bind(null, e[1])), (et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = b,
        l = et();
      if (K) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), oe === null)) throw Error(N(349));
        cn & 30 || Sd(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ga(kd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Mr(9, Ed.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = et(),
        t = oe.identifierPrefix;
      if (K) {
        var n = pt,
          r = ft;
        (n = (r & ~(1 << (32 - be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ar++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  rh = {
    readContext: Ie,
    useCallback: Od,
    useContext: Ie,
    useEffect: tu,
    useImperativeHandle: _d,
    useInsertionEffect: Td,
    useLayoutEffect: Pd,
    useMemo: Ld,
    useReducer: ei,
    useRef: jd,
    useState: function () {
      return ei(Dr);
    },
    useDebugValue: nu,
    useDeferredValue: function (e) {
      var t = Ue();
      return Fd(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = ei(Dr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: wd,
    useSyncExternalStore: xd,
    useId: $d,
    unstable_isNewReconciler: !1,
  },
  lh = {
    readContext: Ie,
    useCallback: Od,
    useContext: Ie,
    useEffect: tu,
    useImperativeHandle: _d,
    useInsertionEffect: Td,
    useLayoutEffect: Pd,
    useMemo: Ld,
    useReducer: ti,
    useRef: jd,
    useState: function () {
      return ti(Dr);
    },
    useDebugValue: nu,
    useDeferredValue: function (e) {
      var t = Ue();
      return te === null ? (t.memoizedState = e) : Fd(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = ti(Dr)[0],
        t = Ue().memoizedState;
      return [e, t];
    },
    useMutableSource: wd,
    useSyncExternalStore: xd,
    useId: $d,
    unstable_isNewReconciler: !1,
  };
function Bn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Lp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ni(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var oh = typeof WeakMap == "function" ? WeakMap : Map;
function zd(e, t, n) {
  (n = mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Zl || ((Zl = !0), (os = r)), bi(e, t);
    }),
    n
  );
}
function Id(e, t, n) {
  (n = mt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        bi(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        bi(e, t),
          typeof r != "function" &&
            (Ut === null ? (Ut = new Set([this])) : Ut.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function va(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new oh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = wh.bind(null, e, t, n)), t.then(e, e));
}
function ya(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function wa(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = mt(-1, 1)), (t.tag = 2), It(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ih = Et.ReactCurrentOwner,
  xe = !1;
function he(e, t, n, r) {
  t.child = e === null ? vd(t, null, n, r) : In(t, e.child, n, r);
}
function xa(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    $n(t, l),
    (r = Zs(e, t, n, r, o, l)),
    (n = eu()),
    e !== null && !xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        St(e, t, l))
      : (K && n && Bs(t), (t.flags |= 1), he(e, t, r, l), t.child)
  );
}
function Sa(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !cu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ud(e, t, o, r, l))
      : ((e = Pl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Rr), n(i, r) && e.ref === t.ref)
    )
      return St(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Ht(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ud(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Rr(o, r) && e.ref === t.ref)
      if (((xe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (xe = !0);
      else return (t.lanes = e.lanes), St(e, t, l);
  }
  return Xi(e, t, n, r, l);
}
function Bd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        H(Rn, Ne),
        (Ne |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          H(Rn, Ne),
          (Ne |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        H(Rn, Ne),
        (Ne |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      H(Rn, Ne),
      (Ne |= r);
  return he(e, t, l, n), t.child;
}
function Hd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xi(e, t, n, r, l) {
  var o = Ee(n) ? un : me.current;
  return (
    (o = Mn(t, o)),
    $n(t, l),
    (n = Zs(e, t, n, r, o, l)),
    (r = eu()),
    e !== null && !xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        St(e, t, l))
      : (K && r && Bs(t), (t.flags |= 1), he(e, t, n, l), t.child)
  );
}
function Ea(e, t, n, r, l) {
  if (Ee(n)) {
    var o = !0;
    Vl(t);
  } else o = !1;
  if (($n(t, l), t.stateNode === null))
    Cl(e, t), hd(t, n, r), Gi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Ie(a))
      : ((a = Ee(n) ? un : me.current), (a = Mn(t, a)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && pa(t, i, r, a)),
      (Pt = !1);
    var v = t.memoizedState;
    (i.state = v),
      Gl(t, r, i, l),
      (u = t.memoizedState),
      s !== r || v !== u || Se.current || Pt
        ? (typeof f == "function" && (Yi(t, n, f, r), (u = t.memoizedState)),
          (s = Pt || fa(t, n, s, r, v, u, a))
            ? (c ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = a),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      pd(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : Ke(t.type, s)),
      (i.props = a),
      (c = t.pendingProps),
      (v = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ie(u))
        : ((u = Ee(n) ? un : me.current), (u = Mn(t, u)));
    var x = n.getDerivedStateFromProps;
    (f =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== c || v !== u) && pa(t, i, r, u)),
      (Pt = !1),
      (v = t.memoizedState),
      (i.state = v),
      Gl(t, r, i, l);
    var w = t.memoizedState;
    s !== c || v !== w || Se.current || Pt
      ? (typeof x == "function" && (Yi(t, n, x, r), (w = t.memoizedState)),
        (a = Pt || fa(t, n, a, r, v, w, u) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ji(e, t, n, r, o, l);
}
function Ji(e, t, n, r, l, o) {
  Hd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && sa(t, n, !1), St(e, t, o);
  (r = t.stateNode), (ih.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = In(t, e.child, null, o)), (t.child = In(t, null, s, o)))
      : he(e, t, s, o),
    (t.memoizedState = r.state),
    l && sa(t, n, !0),
    t.child
  );
}
function Vd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ia(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ia(e, t.context, !1),
    bs(e, t.containerInfo);
}
function ka(e, t, n, r, l) {
  return zn(), Vs(l), (t.flags |= 256), he(e, t, n, r), t.child;
}
var qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wd(e, t, n) {
  var r = t.pendingProps,
    l = G.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    H(G, l & 1),
    e === null)
  )
    return (
      Qi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = xo(i, r, 0, null)),
              (e = on(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Zi(n)),
              (t.memoizedState = qi),
              e)
            : ru(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return sh(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Ht(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = Ht(s, o)) : ((o = on(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Zi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = qi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ht(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ru(e, t) {
  return (
    (t = xo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function dl(e, t, n, r) {
  return (
    r !== null && Vs(r),
    In(t, e.child, null, n),
    (e = ru(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function sh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ni(Error(N(422)))), dl(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = xo({ mode: "visible", children: r.children }, l, 0, null)),
          (o = on(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && In(t, e.child, null, i),
          (t.child.memoizedState = Zi(i)),
          (t.memoizedState = qi),
          o);
  if (!(t.mode & 1)) return dl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(N(419))), (r = ni(o, r, void 0)), dl(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), xe || s)) {
    if (((r = oe), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), xt(e, l), Xe(r, e, l, -1));
    }
    return au(), (r = ni(Error(N(421)))), dl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = xh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (je = zt(l.nextSibling)),
      (Te = t),
      (K = !0),
      (Ge = null),
      e !== null &&
        (($e[Ae++] = ft),
        ($e[Ae++] = pt),
        ($e[Ae++] = an),
        (ft = e.id),
        (pt = e.overflow),
        (an = t)),
      (t = ru(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Na(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ki(e.return, t, n);
}
function ri(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Qd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((he(e, t, r.children, n), (r = G.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Na(e, n, t);
        else if (e.tag === 19) Na(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((H(G, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && bl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ri(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && bl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ri(t, !0, n, null, o);
        break;
      case "together":
        ri(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Cl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function St(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ht(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function uh(e, t, n) {
  switch (t.tag) {
    case 3:
      Vd(t), zn();
      break;
    case 5:
      yd(t);
      break;
    case 1:
      Ee(t.type) && Vl(t);
      break;
    case 4:
      bs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      H(Kl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (H(G, G.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Wd(e, t, n)
            : (H(G, G.current & 1),
              (e = St(e, t, n)),
              e !== null ? e.sibling : null);
      H(G, G.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Qd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        H(G, G.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Bd(e, t, n);
  }
  return St(e, t, n);
}
var Kd, es, Yd, Gd;
Kd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
es = function () {};
Yd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), nn(ot.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Ei(e, l)), (r = Ei(e, r)), (o = []);
        break;
      case "select":
        (l = X({}, l, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Ci(e, l)), (r = Ci(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Bl);
    }
    Ti(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var s = l[a];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Er.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(a, u))
            : a === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (o = o || []).push(a, "" + u)
              : a !== "suppressContentEditableWarning" &&
                a !== "suppressHydrationWarning" &&
                (Er.hasOwnProperty(a)
                  ? (u != null && a === "onScroll" && V("scroll", e),
                    o || s === u || (o = []))
                  : (o = o || []).push(a, u));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Gd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function nr(e, t) {
  if (!K)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ah(e, t, n) {
  var r = t.pendingProps;
  switch ((Hs(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return de(t), null;
    case 1:
      return Ee(t.type) && Hl(), de(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Un(),
        W(Se),
        W(me),
        Js(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (al(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ge !== null && (us(Ge), (Ge = null)))),
        es(e, t),
        de(t),
        null
      );
    case 5:
      Xs(t);
      var l = nn($r.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Yd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return de(t), null;
        }
        if (((e = nn(ot.current)), al(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[tt] = t), (r[Lr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < cr.length; l++) V(cr[l], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V("error", r), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              Fu(r, o), V("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                V("invalid", r);
              break;
            case "textarea":
              Au(r, o), V("invalid", r);
          }
          Ti(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      ul(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      ul(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Er.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  V("scroll", r);
            }
          switch (n) {
            case "input":
              el(r), $u(r, o, !0);
              break;
            case "textarea":
              el(r), Du(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Bl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Sc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[tt] = t),
            (e[Lr] = r),
            Kd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Pi(n, r)), n)) {
              case "dialog":
                V("cancel", e), V("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < cr.length; l++) V(cr[l], e);
                l = r;
                break;
              case "source":
                V("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                V("error", e), V("load", e), (l = r);
                break;
              case "details":
                V("toggle", e), (l = r);
                break;
              case "input":
                Fu(e, r), (l = Ei(e, r)), V("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = X({}, r, { value: void 0 })),
                  V("invalid", e);
                break;
              case "textarea":
                Au(e, r), (l = Ci(e, r)), V("invalid", e);
                break;
              default:
                l = r;
            }
            Ti(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? Nc(e, u)
                  : o === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Ec(e, u))
                    : o === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && kr(e, u)
                        : typeof u == "number" && kr(e, "" + u)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Er.hasOwnProperty(o)
                          ? u != null && o === "onScroll" && V("scroll", e)
                          : u != null && Ts(e, o, u, i));
              }
            switch (n) {
              case "input":
                el(e), $u(e, r, !1);
                break;
              case "textarea":
                el(e), Du(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? _n(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      _n(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Bl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) Gd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = nn($r.current)), nn(ot.current), al(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[tt] = t),
            (o = r.nodeValue !== n) && ((e = Te), e !== null))
          )
            switch (e.tag) {
              case 3:
                ul(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ul(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[tt] = t),
            (t.stateNode = r);
      }
      return de(t), null;
    case 13:
      if (
        (W(G),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && je !== null && t.mode & 1 && !(t.flags & 128))
          dd(), zn(), (t.flags |= 98560), (o = !1);
        else if (((o = al(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[tt] = t;
          } else
            zn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          de(t), (o = !1);
        } else Ge !== null && (us(Ge), (Ge = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? ne === 0 && (ne = 3) : au())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null);
    case 4:
      return (
        Un(), es(e, t), e === null && _r(t.stateNode.containerInfo), de(t), null
      );
    case 10:
      return Ks(t.type._context), de(t), null;
    case 17:
      return Ee(t.type) && Hl(), de(t), null;
    case 19:
      if ((W(G), (o = t.memoizedState), o === null)) return de(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) nr(o, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = bl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    nr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return H(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            q() > Hn &&
            ((t.flags |= 128), (r = !0), nr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = bl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              nr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !K)
            )
              return de(t), null;
          } else
            2 * q() - o.renderingStartTime > Hn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), nr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = q()),
          (t.sibling = null),
          (n = G.current),
          H(G, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null);
    case 22:
    case 23:
      return (
        uu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function ch(e, t) {
  switch ((Hs(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && Hl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Un(),
        W(Se),
        W(me),
        Js(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xs(t), null;
    case 13:
      if ((W(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        zn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(G), null;
    case 4:
      return Un(), null;
    case 10:
      return Ks(t.type._context), null;
    case 22:
    case 23:
      return uu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var fl = !1,
  fe = !1,
  dh = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function Pn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function ts(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Ca = !1;
function fh(e, t) {
  if (((zi = zl), (e = qc()), Us(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            a = 0,
            f = 0,
            c = e,
            v = null;
          t: for (;;) {
            for (
              var x;
              c !== n || (l !== 0 && c.nodeType !== 3) || (s = i + l),
                c !== o || (r !== 0 && c.nodeType !== 3) || (u = i + r),
                c.nodeType === 3 && (i += c.nodeValue.length),
                (x = c.firstChild) !== null;

            )
              (v = c), (c = x);
            for (;;) {
              if (c === e) break t;
              if (
                (v === n && ++a === l && (s = i),
                v === o && ++f === r && (u = i),
                (x = c.nextSibling) !== null)
              )
                break;
              (c = v), (v = c.parentNode);
            }
            c = x;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ii = { focusedElem: e, selectionRange: n }, zl = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var g = w.memoizedProps,
                    k = w.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Ke(t.type, g),
                      k,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (E) {
          J(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (w = Ca), (Ca = !1), w;
}
function yr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ts(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function yo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ns(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function bd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[tt], delete t[Lr], delete t[Hi], delete t[Gm], delete t[bm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Xd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ja(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function rs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Bl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (rs(e, t, n), e = e.sibling; e !== null; ) rs(e, t, n), (e = e.sibling);
}
function ls(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ls(e, t, n), e = e.sibling; e !== null; ) ls(e, t, n), (e = e.sibling);
}
var se = null,
  Ye = !1;
function Nt(e, t, n) {
  for (n = n.child; n !== null; ) Jd(e, t, n), (n = n.sibling);
}
function Jd(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
      lt.onCommitFiberUnmount(ao, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || Pn(n, t);
    case 6:
      var r = se,
        l = Ye;
      (se = null),
        Nt(e, t, n),
        (se = r),
        (Ye = l),
        se !== null &&
          (Ye
            ? ((e = se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null &&
        (Ye
          ? ((e = se),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xo(e.parentNode, n)
              : e.nodeType === 1 && Xo(e, n),
            Tr(e))
          : Xo(se, n.stateNode));
      break;
    case 4:
      (r = se),
        (l = Ye),
        (se = n.stateNode.containerInfo),
        (Ye = !0),
        Nt(e, t, n),
        (se = r),
        (Ye = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ts(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Nt(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (Pn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          J(n, t, s);
        }
      Nt(e, t, n);
      break;
    case 21:
      Nt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), Nt(e, t, n), (fe = r))
        : Nt(e, t, n);
      break;
    default:
      Nt(e, t, n);
  }
}
function Ta(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new dh()),
      t.forEach(function (r) {
        var l = Sh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (se = s.stateNode), (Ye = !1);
              break e;
            case 3:
              (se = s.stateNode.containerInfo), (Ye = !0);
              break e;
            case 4:
              (se = s.stateNode.containerInfo), (Ye = !0);
              break e;
          }
          s = s.return;
        }
        if (se === null) throw Error(N(160));
        Jd(o, i, l), (se = null), (Ye = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (a) {
        J(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) qd(t, e), (t = t.sibling);
}
function qd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), Ze(e), r & 4)) {
        try {
          yr(3, e, e.return), yo(3, e);
        } catch (g) {
          J(e, e.return, g);
        }
        try {
          yr(5, e, e.return);
        } catch (g) {
          J(e, e.return, g);
        }
      }
      break;
    case 1:
      Qe(t, e), Ze(e), r & 512 && n !== null && Pn(n, n.return);
      break;
    case 5:
      if (
        (Qe(t, e),
        Ze(e),
        r & 512 && n !== null && Pn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          kr(l, "");
        } catch (g) {
          J(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && wc(l, o),
              Pi(s, i);
            var a = Pi(s, o);
            for (i = 0; i < u.length; i += 2) {
              var f = u[i],
                c = u[i + 1];
              f === "style"
                ? Nc(l, c)
                : f === "dangerouslySetInnerHTML"
                  ? Ec(l, c)
                  : f === "children"
                    ? kr(l, c)
                    : Ts(l, f, c, a);
            }
            switch (s) {
              case "input":
                ki(l, o);
                break;
              case "textarea":
                xc(l, o);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? _n(l, !!o.multiple, x, !1)
                  : v !== !!o.multiple &&
                    (o.defaultValue != null
                      ? _n(l, !!o.multiple, o.defaultValue, !0)
                      : _n(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Lr] = o;
          } catch (g) {
            J(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), Ze(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          J(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Tr(t.containerInfo);
        } catch (g) {
          J(e, e.return, g);
        }
      break;
    case 4:
      Qe(t, e), Ze(e);
      break;
    case 13:
      Qe(t, e),
        Ze(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (iu = q())),
        r & 4 && Ta(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (a = fe) || f), Qe(t, e), (fe = a)) : Qe(t, e),
        Ze(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !f && e.mode & 1)
        )
          for (P = e, f = e.child; f !== null; ) {
            for (c = P = f; P !== null; ) {
              switch (((v = P), (x = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  yr(4, v, v.return);
                  break;
                case 1:
                  Pn(v, v.return);
                  var w = v.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (g) {
                      J(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Pn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Ra(c);
                    continue;
                  }
              }
              x !== null ? ((x.return = v), (P = x)) : Ra(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (l = c.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = c.stateNode),
                      (u = c.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = kc("display", i)));
              } catch (g) {
                J(e, e.return, g);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = a ? "" : c.memoizedProps;
              } catch (g) {
                J(e, e.return, g);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      Qe(t, e), Ze(e), r & 4 && Ta(e);
      break;
    case 21:
      break;
    default:
      Qe(t, e), Ze(e);
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (kr(l, ""), (r.flags &= -33));
          var o = ja(e);
          ls(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = ja(e);
          rs(e, s, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      J(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ph(e, t, n) {
  (P = e), Zd(e);
}
function Zd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || fl;
      if (!i) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || fe;
        s = fl;
        var a = fe;
        if (((fl = i), (fe = u) && !a))
          for (P = l; P !== null; )
            (i = P),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? _a(l)
                : u !== null
                  ? ((u.return = i), (P = u))
                  : _a(l);
        for (; o !== null; ) (P = o), Zd(o), (o = o.sibling);
        (P = l), (fl = s), (fe = a);
      }
      Pa(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (P = o)) : Pa(e);
  }
}
function Pa(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || yo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && da(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                da(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var f = a.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && Tr(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        fe || (t.flags & 512 && ns(t));
      } catch (v) {
        J(t, t.return, v);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function Ra(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function _a(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yo(4, t);
          } catch (u) {
            J(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              J(t, l, u);
            }
          }
          var o = t.return;
          try {
            ns(t);
          } catch (u) {
            J(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ns(t);
          } catch (u) {
            J(t, i, u);
          }
      }
    } catch (u) {
      J(t, t.return, u);
    }
    if (t === e) {
      P = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (P = s);
      break;
    }
    P = t.return;
  }
}
var mh = Math.ceil,
  ql = Et.ReactCurrentDispatcher,
  lu = Et.ReactCurrentOwner,
  Me = Et.ReactCurrentBatchConfig,
  M = 0,
  oe = null,
  ee = null,
  ue = 0,
  Ne = 0,
  Rn = Yt(0),
  ne = 0,
  zr = null,
  dn = 0,
  wo = 0,
  ou = 0,
  wr = null,
  we = null,
  iu = 0,
  Hn = 1 / 0,
  ct = null,
  Zl = !1,
  os = null,
  Ut = null,
  pl = !1,
  Ft = null,
  eo = 0,
  xr = 0,
  is = null,
  jl = -1,
  Tl = 0;
function ge() {
  return M & 6 ? q() : jl !== -1 ? jl : (jl = q());
}
function Bt(e) {
  return e.mode & 1
    ? M & 2 && ue !== 0
      ? ue & -ue
      : Jm.transition !== null
        ? (Tl === 0 && (Tl = Dc()), Tl)
        : ((e = I),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vc(e.type))),
          e)
    : 1;
}
function Xe(e, t, n, r) {
  if (50 < xr) throw ((xr = 0), (is = null), Error(N(185)));
  Br(e, n, r),
    (!(M & 2) || e !== oe) &&
      (e === oe && (!(M & 2) && (wo |= n), ne === 4 && _t(e, ue)),
      ke(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((Hn = q() + 500), ho && Gt()));
}
function ke(e, t) {
  var n = e.callbackNode;
  Jp(e, t);
  var r = Ml(e, e === oe ? ue : 0);
  if (r === 0)
    n !== null && Iu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Iu(n), t === 1))
      e.tag === 0 ? Xm(Oa.bind(null, e)) : ud(Oa.bind(null, e)),
        Km(function () {
          !(M & 6) && Gt();
        }),
        (n = null);
    else {
      switch (Mc(r)) {
        case 1:
          n = Ls;
          break;
        case 4:
          n = $c;
          break;
        case 16:
          n = Dl;
          break;
        case 536870912:
          n = Ac;
          break;
        default:
          n = Dl;
      }
      n = uf(n, ef.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ef(e, t) {
  if (((jl = -1), (Tl = 0), M & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (An() && e.callbackNode !== n) return null;
  var r = Ml(e, e === oe ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = to(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var o = nf();
    (oe !== e || ue !== t) && ((ct = null), (Hn = q() + 500), ln(e, t));
    do
      try {
        vh();
        break;
      } catch (s) {
        tf(e, s);
      }
    while (!0);
    Qs(),
      (ql.current = o),
      (M = l),
      ee !== null ? (t = 0) : ((oe = null), (ue = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Fi(e)), l !== 0 && ((r = l), (t = ss(e, l)))), t === 1)
    )
      throw ((n = zr), ln(e, 0), _t(e, r), ke(e, q()), n);
    if (t === 6) _t(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !hh(l) &&
          ((t = to(e, r)),
          t === 2 && ((o = Fi(e)), o !== 0 && ((r = o), (t = ss(e, o)))),
          t === 1))
      )
        throw ((n = zr), ln(e, 0), _t(e, r), ke(e, q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          qt(e, we, ct);
          break;
        case 3:
          if (
            (_t(e, r), (r & 130023424) === r && ((t = iu + 500 - q()), 10 < t))
          ) {
            if (Ml(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ge(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Bi(qt.bind(null, e, we, ct), t);
            break;
          }
          qt(e, we, ct);
          break;
        case 4:
          if ((_t(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - be(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * mh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bi(qt.bind(null, e, we, ct), r);
            break;
          }
          qt(e, we, ct);
          break;
        case 5:
          qt(e, we, ct);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return ke(e, q()), e.callbackNode === n ? ef.bind(null, e) : null;
}
function ss(e, t) {
  var n = wr;
  return (
    e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
    (e = to(e, t)),
    e !== 2 && ((t = we), (we = n), t !== null && us(t)),
    e
  );
}
function us(e) {
  we === null ? (we = e) : we.push.apply(we, e);
}
function hh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Je(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function _t(e, t) {
  for (
    t &= ~ou,
      t &= ~wo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - be(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Oa(e) {
  if (M & 6) throw Error(N(327));
  An();
  var t = Ml(e, 0);
  if (!(t & 1)) return ke(e, q()), null;
  var n = to(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fi(e);
    r !== 0 && ((t = r), (n = ss(e, r)));
  }
  if (n === 1) throw ((n = zr), ln(e, 0), _t(e, t), ke(e, q()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qt(e, we, ct),
    ke(e, q()),
    null
  );
}
function su(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((Hn = q() + 500), ho && Gt());
  }
}
function fn(e) {
  Ft !== null && Ft.tag === 0 && !(M & 6) && An();
  var t = M;
  M |= 1;
  var n = Me.transition,
    r = I;
  try {
    if (((Me.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Me.transition = n), (M = t), !(M & 6) && Gt();
  }
}
function uu() {
  (Ne = Rn.current), W(Rn);
}
function ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Qm(n)), ee !== null))
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ((Hs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Hl();
          break;
        case 3:
          Un(), W(Se), W(me), Js();
          break;
        case 5:
          Xs(r);
          break;
        case 4:
          Un();
          break;
        case 13:
          W(G);
          break;
        case 19:
          W(G);
          break;
        case 10:
          Ks(r.type._context);
          break;
        case 22:
        case 23:
          uu();
      }
      n = n.return;
    }
  if (
    ((oe = e),
    (ee = e = Ht(e.current, null)),
    (ue = Ne = t),
    (ne = 0),
    (zr = null),
    (ou = wo = dn = 0),
    (we = wr = null),
    tn !== null)
  ) {
    for (t = 0; t < tn.length; t++)
      if (((n = tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    tn = null;
  }
  return e;
}
function tf(e, t) {
  do {
    var n = ee;
    try {
      if ((Qs(), (kl.current = Jl), Xl)) {
        for (var r = b.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Xl = !1;
      }
      if (
        ((cn = 0),
        (le = te = b = null),
        (vr = !1),
        (Ar = 0),
        (lu.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (zr = t), (ee = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = ue),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            f = s,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var v = f.alternate;
            v
              ? ((f.updateQueue = v.updateQueue),
                (f.memoizedState = v.memoizedState),
                (f.lanes = v.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var x = ya(i);
          if (x !== null) {
            (x.flags &= -257),
              wa(x, i, s, o, t),
              x.mode & 1 && va(o, a, t),
              (t = x),
              (u = a);
            var w = t.updateQueue;
            if (w === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              va(o, a, t), au();
              break e;
            }
            u = Error(N(426));
          }
        } else if (K && s.mode & 1) {
          var k = ya(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              wa(k, i, s, o, t),
              Vs(Bn(u, s));
            break e;
          }
        }
        (o = u = Bn(u, s)),
          ne !== 4 && (ne = 2),
          wr === null ? (wr = [o]) : wr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = zd(o, u, t);
              ca(o, m);
              break e;
            case 1:
              s = u;
              var p = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Ut === null || !Ut.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = Id(o, s, t);
                ca(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      lf(n);
    } catch (j) {
      (t = j), ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function nf() {
  var e = ql.current;
  return (ql.current = Jl), e === null ? Jl : e;
}
function au() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    oe === null || (!(dn & 268435455) && !(wo & 268435455)) || _t(oe, ue);
}
function to(e, t) {
  var n = M;
  M |= 2;
  var r = nf();
  (oe !== e || ue !== t) && ((ct = null), ln(e, t));
  do
    try {
      gh();
      break;
    } catch (l) {
      tf(e, l);
    }
  while (!0);
  if ((Qs(), (M = n), (ql.current = r), ee !== null)) throw Error(N(261));
  return (oe = null), (ue = 0), ne;
}
function gh() {
  for (; ee !== null; ) rf(ee);
}
function vh() {
  for (; ee !== null && !Hp(); ) rf(ee);
}
function rf(e) {
  var t = sf(e.alternate, e, Ne);
  (e.memoizedProps = e.pendingProps),
    t === null ? lf(e) : (ee = t),
    (lu.current = null);
}
function lf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ch(n, t)), n !== null)) {
        (n.flags &= 32767), (ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (ee = null);
        return;
      }
    } else if (((n = ah(n, t, Ne)), n !== null)) {
      ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function qt(e, t, n) {
  var r = I,
    l = Me.transition;
  try {
    (Me.transition = null), (I = 1), yh(e, t, n, r);
  } finally {
    (Me.transition = l), (I = r);
  }
  return null;
}
function yh(e, t, n, r) {
  do An();
  while (Ft !== null);
  if (M & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (qp(e, o),
    e === oe && ((ee = oe = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      pl ||
      ((pl = !0),
      uf(Dl, function () {
        return An(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Me.transition), (Me.transition = null);
    var i = I;
    I = 1;
    var s = M;
    (M |= 4),
      (lu.current = null),
      fh(e, n),
      qd(n, e),
      zm(Ii),
      (zl = !!zi),
      (Ii = zi = null),
      (e.current = n),
      ph(n),
      Vp(),
      (M = s),
      (I = i),
      (Me.transition = o);
  } else e.current = n;
  if (
    (pl && ((pl = !1), (Ft = e), (eo = l)),
    (o = e.pendingLanes),
    o === 0 && (Ut = null),
    Kp(n.stateNode),
    ke(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Zl) throw ((Zl = !1), (e = os), (os = null), e);
  return (
    eo & 1 && e.tag !== 0 && An(),
    (o = e.pendingLanes),
    o & 1 ? (e === is ? xr++ : ((xr = 0), (is = e))) : (xr = 0),
    Gt(),
    null
  );
}
function An() {
  if (Ft !== null) {
    var e = Mc(eo),
      t = Me.transition,
      n = I;
    try {
      if (((Me.transition = null), (I = 16 > e ? 16 : e), Ft === null))
        var r = !1;
      else {
        if (((e = Ft), (Ft = null), (eo = 0), M & 6)) throw Error(N(331));
        var l = M;
        for (M |= 4, P = e.current; P !== null; ) {
          var o = P,
            i = o.child;
          if (P.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (P = a; P !== null; ) {
                  var f = P;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yr(8, f, o);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (P = c);
                  else
                    for (; P !== null; ) {
                      f = P;
                      var v = f.sibling,
                        x = f.return;
                      if ((bd(f), f === a)) {
                        P = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = x), (P = v);
                        break;
                      }
                      P = x;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var k = g.sibling;
                    (g.sibling = null), (g = k);
                  } while (g !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (P = i);
          else
            e: for (; P !== null; ) {
              if (((o = P), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yr(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (P = m);
                break e;
              }
              P = o.return;
            }
        }
        var p = e.current;
        for (P = p; P !== null; ) {
          i = P;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (P = h);
          else
            e: for (i = p; P !== null; ) {
              if (((s = P), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yo(9, s);
                  }
                } catch (j) {
                  J(s, s.return, j);
                }
              if (s === i) {
                P = null;
                break e;
              }
              var E = s.sibling;
              if (E !== null) {
                (E.return = s.return), (P = E);
                break e;
              }
              P = s.return;
            }
        }
        if (
          ((M = l), Gt(), lt && typeof lt.onPostCommitFiberRoot == "function")
        )
          try {
            lt.onPostCommitFiberRoot(ao, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (Me.transition = t);
    }
  }
  return !1;
}
function La(e, t, n) {
  (t = Bn(n, t)),
    (t = zd(e, t, 1)),
    (e = It(e, t, 1)),
    (t = ge()),
    e !== null && (Br(e, 1, t), ke(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) La(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        La(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ut === null || !Ut.has(r)))
        ) {
          (e = Bn(n, e)),
            (e = Id(t, e, 1)),
            (t = It(t, e, 1)),
            (e = ge()),
            t !== null && (Br(t, 1, e), ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function wh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ge()),
    (e.pingedLanes |= e.suspendedLanes & n),
    oe === e &&
      (ue & n) === n &&
      (ne === 4 || (ne === 3 && (ue & 130023424) === ue && 500 > q() - iu)
        ? ln(e, 0)
        : (ou |= n)),
    ke(e, t);
}
function of(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = rl), (rl <<= 1), !(rl & 130023424) && (rl = 4194304))
      : (t = 1));
  var n = ge();
  (e = xt(e, t)), e !== null && (Br(e, t, n), ke(e, n));
}
function xh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), of(e, n);
}
function Sh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), of(e, n);
}
var sf;
sf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (xe = !1), uh(e, t, n);
      xe = !!(e.flags & 131072);
    }
  else (xe = !1), K && t.flags & 1048576 && ad(t, Ql, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Cl(e, t), (e = t.pendingProps);
      var l = Mn(t, me.current);
      $n(t, n), (l = Zs(null, t, r, e, l, n));
      var o = eu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((o = !0), Vl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Gs(t),
            (l.updater = go),
            (t.stateNode = l),
            (l._reactInternals = t),
            Gi(t, r, e, n),
            (t = Ji(null, t, r, !0, o, n)))
          : ((t.tag = 0), K && o && Bs(t), he(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Cl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = kh(r)),
          (e = Ke(r, e)),
          l)
        ) {
          case 0:
            t = Xi(null, t, r, e, n);
            break e;
          case 1:
            t = Ea(null, t, r, e, n);
            break e;
          case 11:
            t = xa(null, t, r, e, n);
            break e;
          case 14:
            t = Sa(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ke(r, l)),
        Xi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ke(r, l)),
        Ea(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Vd(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          pd(e, t),
          Gl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Bn(Error(N(423)), t)), (t = ka(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Bn(Error(N(424)), t)), (t = ka(e, t, r, n, l));
            break e;
          } else
            for (
              je = zt(t.stateNode.containerInfo.firstChild),
                Te = t,
                K = !0,
                Ge = null,
                n = vd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((zn(), r === l)) {
            t = St(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        yd(t),
        e === null && Qi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ui(r, l) ? (i = null) : o !== null && Ui(r, o) && (t.flags |= 32),
        Hd(e, t),
        he(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Qi(t), null;
    case 13:
      return Wd(e, t, n);
    case 4:
      return (
        bs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = In(t, null, r, n)) : he(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ke(r, l)),
        xa(e, t, r, l, n)
      );
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          H(Kl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Je(o.value, i)) {
            if (o.children === l.children && !Se.current) {
              t = St(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = mt(-1, n & -n)), (u.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var f = a.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (a.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Ki(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(N(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Ki(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        he(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        $n(t, n),
        (l = Ie(l)),
        (r = r(l)),
        (t.flags |= 1),
        he(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ke(r, t.pendingProps)),
        (l = Ke(r.type, l)),
        Sa(e, t, r, l, n)
      );
    case 15:
      return Ud(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ke(r, l)),
        Cl(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), Vl(t)) : (e = !1),
        $n(t, n),
        hd(t, r, l),
        Gi(t, r, l, n),
        Ji(null, t, r, !0, e, n)
      );
    case 19:
      return Qd(e, t, n);
    case 22:
      return Bd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function uf(e, t) {
  return Fc(e, t);
}
function Eh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function De(e, t, n, r) {
  return new Eh(e, t, n, r);
}
function cu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function kh(e) {
  if (typeof e == "function") return cu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Rs)) return 11;
    if (e === _s) return 14;
  }
  return 2;
}
function Ht(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = De(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Pl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) cu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case wn:
        return on(n.children, l, o, t);
      case Ps:
        (i = 8), (l |= 8);
        break;
      case yi:
        return (
          (e = De(12, n, t, l | 2)), (e.elementType = yi), (e.lanes = o), e
        );
      case wi:
        return (e = De(13, n, t, l)), (e.elementType = wi), (e.lanes = o), e;
      case xi:
        return (e = De(19, n, t, l)), (e.elementType = xi), (e.lanes = o), e;
      case gc:
        return xo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mc:
              i = 10;
              break e;
            case hc:
              i = 9;
              break e;
            case Rs:
              i = 11;
              break e;
            case _s:
              i = 14;
              break e;
            case Tt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = De(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function on(e, t, n, r) {
  return (e = De(7, e, r, t)), (e.lanes = n), e;
}
function xo(e, t, n, r) {
  return (
    (e = De(22, e, r, t)),
    (e.elementType = gc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function li(e, t, n) {
  return (e = De(6, e, null, t)), (e.lanes = n), e;
}
function oi(e, t, n) {
  return (
    (t = De(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Nh(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Io(0)),
    (this.expirationTimes = Io(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Io(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function du(e, t, n, r, l, o, i, s, u) {
  return (
    (e = new Nh(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = De(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gs(o),
    e
  );
}
function Ch(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function af(e) {
  if (!e) return Qt;
  e = e._reactInternals;
  e: {
    if (mn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return sd(e, n, t);
  }
  return t;
}
function cf(e, t, n, r, l, o, i, s, u) {
  return (
    (e = du(n, r, !0, e, l, o, i, s, u)),
    (e.context = af(null)),
    (n = e.current),
    (r = ge()),
    (l = Bt(n)),
    (o = mt(r, l)),
    (o.callback = t ?? null),
    It(n, o, l),
    (e.current.lanes = l),
    Br(e, l, r),
    ke(e, r),
    e
  );
}
function So(e, t, n, r) {
  var l = t.current,
    o = ge(),
    i = Bt(l);
  return (
    (n = af(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = mt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = It(l, t, i)),
    e !== null && (Xe(e, l, i, o), El(e, l, i)),
    i
  );
}
function no(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Fa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fu(e, t) {
  Fa(e, t), (e = e.alternate) && Fa(e, t);
}
function jh() {
  return null;
}
var df =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function pu(e) {
  this._internalRoot = e;
}
Eo.prototype.render = pu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  So(e, t, null, null);
};
Eo.prototype.unmount = pu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fn(function () {
      So(null, e, null, null);
    }),
      (t[wt] = null);
  }
};
function Eo(e) {
  this._internalRoot = e;
}
Eo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Uc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
    Rt.splice(n, 0, e), n === 0 && Hc(e);
  }
};
function mu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ko(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function $a() {}
function Th(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = no(i);
        o.call(a);
      };
    }
    var i = cf(t, r, e, 0, null, !1, !1, "", $a);
    return (
      (e._reactRootContainer = i),
      (e[wt] = i.current),
      _r(e.nodeType === 8 ? e.parentNode : e),
      fn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = no(u);
      s.call(a);
    };
  }
  var u = du(e, 0, !1, null, null, !1, !1, "", $a);
  return (
    (e._reactRootContainer = u),
    (e[wt] = u.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    fn(function () {
      So(t, u, n, r);
    }),
    u
  );
}
function No(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = no(i);
        s.call(u);
      };
    }
    So(t, i, e, l);
  } else i = Th(n, t, e, l, r);
  return no(i);
}
zc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ar(t.pendingLanes);
        n !== 0 &&
          (Fs(t, n | 1), ke(t, q()), !(M & 6) && ((Hn = q() + 500), Gt()));
      }
      break;
    case 13:
      fn(function () {
        var r = xt(e, 1);
        if (r !== null) {
          var l = ge();
          Xe(r, e, 1, l);
        }
      }),
        fu(e, 1);
  }
};
$s = function (e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728);
    if (t !== null) {
      var n = ge();
      Xe(t, e, 134217728, n);
    }
    fu(e, 134217728);
  }
};
Ic = function (e) {
  if (e.tag === 13) {
    var t = Bt(e),
      n = xt(e, t);
    if (n !== null) {
      var r = ge();
      Xe(n, e, t, r);
    }
    fu(e, t);
  }
};
Uc = function () {
  return I;
};
Bc = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
_i = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ki(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = mo(r);
            if (!l) throw Error(N(90));
            yc(r), ki(r, l);
          }
        }
      }
      break;
    case "textarea":
      xc(e, n);
      break;
    case "select":
      (t = n.value), t != null && _n(e, !!n.multiple, t, !1);
  }
};
Tc = su;
Pc = fn;
var Ph = { usingClientEntryPoint: !1, Events: [Vr, kn, mo, Cc, jc, su] },
  rr = {
    findFiberByHostInstance: en,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Rh = {
    bundleType: rr.bundleType,
    version: rr.version,
    rendererPackageName: rr.rendererPackageName,
    rendererConfig: rr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Oc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: rr.findFiberByHostInstance || jh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ml = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ml.isDisabled && ml.supportsFiber)
    try {
      (ao = ml.inject(Rh)), (lt = ml);
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ph;
Re.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!mu(t)) throw Error(N(200));
  return Ch(e, t, null, n);
};
Re.createRoot = function (e, t) {
  if (!mu(e)) throw Error(N(299));
  var n = !1,
    r = "",
    l = df;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = du(e, 1, !1, null, null, n, !1, r, l)),
    (e[wt] = t.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    new pu(t)
  );
};
Re.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Oc(t)), (e = e === null ? null : e.stateNode), e;
};
Re.flushSync = function (e) {
  return fn(e);
};
Re.hydrate = function (e, t, n) {
  if (!ko(t)) throw Error(N(200));
  return No(null, e, t, !0, n);
};
Re.hydrateRoot = function (e, t, n) {
  if (!mu(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = df;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = cf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[wt] = t.current),
    _r(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Eo(t);
};
Re.render = function (e, t, n) {
  if (!ko(t)) throw Error(N(200));
  return No(null, e, t, !1, n);
};
Re.unmountComponentAtNode = function (e) {
  if (!ko(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (fn(function () {
        No(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[wt] = null);
        });
      }),
      !0)
    : !1;
};
Re.unstable_batchedUpdates = su;
Re.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ko(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return No(e, t, n, !1, r);
};
Re.version = "18.2.0-next-9e3b772b8-20220608";
function ff() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ff);
    } catch (e) {
      console.error(e);
    }
}
ff(), (ac.exports = Re);
var pf = ac.exports,
  Aa = pf;
(gi.createRoot = Aa.createRoot), (gi.hydrateRoot = Aa.hydrateRoot);
var _h = Object.defineProperty,
  Oh = (e, t, n) =>
    t in e
      ? _h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ii = (e, t, n) => (Oh(e, typeof t != "symbol" ? t + "" : t, n), n);
let Lh = class {
    constructor() {
      ii(this, "current", this.detect()),
        ii(this, "handoffState", "pending"),
        ii(this, "currentId", 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  ht = new Lh(),
  Be = (e, t) => {
    ht.isServer ? y.useEffect(e, t) : y.useLayoutEffect(e, t);
  };
function gt(e) {
  let t = y.useRef(e);
  return (
    Be(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let Y = function (e) {
  let t = gt(e);
  return $.useCallback((...n) => t.current(...n), [t]);
};
function Co(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          }),
        );
}
function hn() {
  let e = [],
    t = {
      addEventListener(n, r, l, o) {
        return (
          n.addEventListener(r, l, o),
          t.add(() => n.removeEventListener(r, l, o))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          Co(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let o = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: o });
          })
        );
      },
      group(n) {
        let r = hn();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let l of e.splice(r, 1)) l();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function hu() {
  let [e] = y.useState(hn);
  return y.useEffect(() => () => e.dispose(), [e]), e;
}
function Fh() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Sr
    ? ((t) => t.useSyncExternalStore)(Sr)(
        () => () => {},
        () => !1,
        () => !e,
      )
    : !1;
}
function Yn() {
  let e = Fh(),
    [t, n] = y.useState(ht.isHandoffComplete);
  return (
    t && ht.isHandoffComplete === !1 && n(!1),
    y.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    y.useEffect(() => ht.handoff(), []),
    e ? !1 : t
  );
}
var Da;
let Gn =
  (Da = $.useId) != null
    ? Da
    : function () {
        let e = Yn(),
          [t, n] = $.useState(e ? () => ht.nextId() : null);
        return (
          Be(() => {
            t === null && n(ht.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function pe(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t,
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`,
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, pe), r);
}
function mf(e) {
  return ht.isServer
    ? null
    : e instanceof Node
      ? e.ownerDocument
      : e != null && e.hasOwnProperty("current") && e.current instanceof Node
        ? e.current.ownerDocument
        : document;
}
let as = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var Zt = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(Zt || {}),
  hf = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(hf || {}),
  $h = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))($h || {});
function Ah(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(as)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      );
}
var gf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(gf || {});
function Dh(e, t = 0) {
  var n;
  return e === ((n = mf(e)) == null ? void 0 : n.body)
    ? !1
    : pe(t, {
        0() {
          return e.matches(as);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(as)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var Mh = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(Mh || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ));
function sn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let zh = ["textarea", "input"].join(",");
function Ih(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, zh)) !=
    null
    ? n
    : !1;
}
function Uh(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      o = t(r);
    if (l === null || o === null) return 0;
    let i = l.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
        ? 1
        : 0;
  });
}
function Rl(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {},
) {
  let o = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    i = Array.isArray(e) ? (n ? Uh(e) : e) : Ah(e);
  l.length > 0 && i.length > 1 && (i = i.filter((x) => !l.includes(x))),
    (r = r ?? o.activeElement);
  let s = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    u = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, i.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, i.indexOf(r)) + 1;
      if (t & 8) return i.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    a = t & 32 ? { preventScroll: !0 } : {},
    f = 0,
    c = i.length,
    v;
  do {
    if (f >= c || f + c <= 0) return 0;
    let x = u + f;
    if (t & 16) x = (x + c) % c;
    else {
      if (x < 0) return 3;
      if (x >= c) return 1;
    }
    (v = i[x]), v == null || v.focus(a), (f += s);
  } while (v !== o.activeElement);
  return t & 6 && Ih(v) && v.select(), 2;
}
function vf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function Bh() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Hh() {
  return vf() || Bh();
}
function hl(e, t, n) {
  let r = gt(t);
  y.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      document.addEventListener(e, l, n),
      () => document.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function yf(e, t, n) {
  let r = gt(t);
  y.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      window.addEventListener(e, l, n),
      () => window.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function Vh(e, t, n = !0) {
  let r = y.useRef(!1);
  y.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(i, s) {
    if (!r.current || i.defaultPrevented) return;
    let u = s(i);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let a = (function f(c) {
      return typeof c == "function"
        ? f(c())
        : Array.isArray(c) || c instanceof Set
          ? c
          : [c];
    })(e);
    for (let f of a) {
      if (f === null) continue;
      let c = f instanceof HTMLElement ? f : f.current;
      if (
        (c != null && c.contains(u)) ||
        (i.composed && i.composedPath().includes(c))
      )
        return;
    }
    return !Dh(u, gf.Loose) && u.tabIndex !== -1 && i.preventDefault(), t(i, u);
  }
  let o = y.useRef(null);
  hl(
    "pointerdown",
    (i) => {
      var s, u;
      r.current &&
        (o.current =
          ((u = (s = i.composedPath) == null ? void 0 : s.call(i)) == null
            ? void 0
            : u[0]) || i.target);
    },
    !0,
  ),
    hl(
      "mousedown",
      (i) => {
        var s, u;
        r.current &&
          (o.current =
            ((u = (s = i.composedPath) == null ? void 0 : s.call(i)) == null
              ? void 0
              : u[0]) || i.target);
      },
      !0,
    ),
    hl(
      "click",
      (i) => {
        Hh() || (o.current && (l(i, () => o.current), (o.current = null)));
      },
      !0,
    ),
    hl(
      "touchend",
      (i) => l(i, () => (i.target instanceof HTMLElement ? i.target : null)),
      !0,
    ),
    yf(
      "blur",
      (i) =>
        l(i, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    );
}
function Qr(...e) {
  return y.useMemo(() => mf(...e), [...e]);
}
let wf = Symbol();
function Wh(e, t = !0) {
  return Object.assign(e, { [wf]: t });
}
function qe(...e) {
  let t = y.useRef(e);
  y.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = Y((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[wf])) ? void 0 : n;
}
function gu(e, t) {
  let n = y.useRef([]),
    r = Y(e);
  y.useEffect(() => {
    let l = [...n.current];
    for (let [o, i] of t.entries())
      if (n.current[o] !== i) {
        let s = r(t, l);
        return (n.current = t), s;
      }
  }, [r, ...t]);
}
function ro(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : []))),
  )
    .filter(Boolean)
    .join(" ");
}
var lo = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(lo || {}),
  $t = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))($t || {});
function He({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: o = !0,
  name: i,
  mergeRefs: s,
}) {
  s = s ?? Qh;
  let u = xf(t, e);
  if (o) return gl(u, n, r, i, s);
  let a = l ?? 0;
  if (a & 2) {
    let { static: f = !1, ...c } = u;
    if (f) return gl(c, n, r, i, s);
  }
  if (a & 1) {
    let { unmount: f = !0, ...c } = u;
    return pe(f ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return gl({ ...c, hidden: !0, style: { display: "none" } }, n, r, i, s);
      },
    });
  }
  return gl(u, n, r, i, s);
}
function gl(e, t = {}, n, r, l) {
  let {
      as: o = n,
      children: i,
      refName: s = "ref",
      ...u
    } = si(e, ["unmount", "static"]),
    a = e.ref !== void 0 ? { [s]: e.ref } : {},
    f = typeof i == "function" ? i(t) : i;
  "className" in u &&
    u.className &&
    typeof u.className == "function" &&
    (u.className = u.className(t));
  let c = {};
  if (t) {
    let v = !1,
      x = [];
    for (let [w, g] of Object.entries(t))
      typeof g == "boolean" && (v = !0), g === !0 && x.push(w);
    v && (c["data-headlessui-state"] = x.join(" "));
  }
  if (o === y.Fragment && Object.keys(Ma(u)).length > 0) {
    if (!y.isValidElement(f) || (Array.isArray(f) && f.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(u).map((g) => `  - ${g}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((g) => `  - ${g}`).join(`
`),
        ].join(`
`),
      );
    let v = f.props,
      x =
        typeof (v == null ? void 0 : v.className) == "function"
          ? (...g) => ro(v == null ? void 0 : v.className(...g), u.className)
          : ro(v == null ? void 0 : v.className, u.className),
      w = x ? { className: x } : {};
    return y.cloneElement(
      f,
      Object.assign(
        {},
        xf(f.props, Ma(si(u, ["ref"]))),
        c,
        a,
        { ref: l(f.ref, a.ref) },
        w,
      ),
    );
  }
  return y.createElement(
    o,
    Object.assign(
      {},
      si(u, ["ref"]),
      o !== y.Fragment && a,
      o !== y.Fragment && c,
    ),
    f,
  );
}
function Qh(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function xf(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let l in r)
      l.startsWith("on") && typeof r[l] == "function"
        ? (n[l] != null || (n[l] = []), n[l].push(r[l]))
        : (t[l] = r[l]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0])),
    );
  for (let r in n)
    Object.assign(t, {
      [r](l, ...o) {
        let i = n[r];
        for (let s of i) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          s(l, ...o);
        }
      },
    });
  return t;
}
function Oe(e) {
  var t;
  return Object.assign(y.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Ma(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function si(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let Kh = "div";
var oo = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(oo || {});
function Yh(e, t) {
  var n;
  let { features: r = 1, ...l } = e,
    o = {
      ref: t,
      "aria-hidden":
        (r & 2) === 2 ? !0 : (n = l["aria-hidden"]) != null ? n : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...((r & 4) === 4 && (r & 2) !== 2 && { display: "none" }),
      },
    };
  return He({
    ourProps: o,
    theirProps: l,
    slot: {},
    defaultTag: Kh,
    name: "Hidden",
  });
}
let cs = Oe(Yh),
  vu = y.createContext(null);
vu.displayName = "OpenClosedContext";
var Ce = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Ce || {});
function yu() {
  return y.useContext(vu);
}
function Gh({ value: e, children: t }) {
  return $.createElement(vu.Provider, { value: e }, t);
}
function bh(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let Ot = [];
bh(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      Ot[0] !== t.target &&
      (Ot.unshift(t.target),
      (Ot = Ot.filter((n) => n != null && n.isConnected)),
      Ot.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function Xh(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Jh(n) ? !1 : r;
}
function Jh(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
var Sf = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(Sf || {});
function Ef(e, t, n, r) {
  let l = gt(n);
  y.useEffect(() => {
    e = e ?? window;
    function o(i) {
      l.current(i);
    }
    return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
  }, [e, t, r]);
}
function Kr() {
  let e = y.useRef(!1);
  return (
    Be(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function kf(e) {
  let t = Y(e),
    n = y.useRef(!1);
  y.useEffect(
    () => (
      (n.current = !1),
      () => {
        (n.current = !0),
          Co(() => {
            n.current && t();
          });
      }
    ),
    [t],
  );
}
var dr = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(dr || {});
function qh() {
  let e = y.useRef(0);
  return (
    yf(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0,
    ),
    e
  );
}
function Nf(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let Zh = "div";
var Cf = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(Cf || {});
function e0(e, t) {
  let n = y.useRef(null),
    r = qe(n, t),
    { initialFocus: l, containers: o, features: i = 30, ...s } = e;
  Yn() || (i = 1);
  let u = Qr(n);
  r0({ ownerDocument: u }, !!(i & 16));
  let a = l0({ ownerDocument: u, container: n, initialFocus: l }, !!(i & 2));
  o0(
    { ownerDocument: u, container: n, containers: o, previousActiveElement: a },
    !!(i & 8),
  );
  let f = qh(),
    c = Y((g) => {
      let k = n.current;
      k &&
        ((m) => m())(() => {
          pe(f.current, {
            [dr.Forwards]: () => {
              Rl(k, Zt.First, { skipElements: [g.relatedTarget] });
            },
            [dr.Backwards]: () => {
              Rl(k, Zt.Last, { skipElements: [g.relatedTarget] });
            },
          });
        });
    }),
    v = hu(),
    x = y.useRef(!1),
    w = {
      ref: r,
      onKeyDown(g) {
        g.key == "Tab" &&
          ((x.current = !0),
          v.requestAnimationFrame(() => {
            x.current = !1;
          }));
      },
      onBlur(g) {
        let k = Nf(o);
        n.current instanceof HTMLElement && k.add(n.current);
        let m = g.relatedTarget;
        m instanceof HTMLElement &&
          m.dataset.headlessuiFocusGuard !== "true" &&
          (jf(k, m) ||
            (x.current
              ? Rl(
                  n.current,
                  pe(f.current, {
                    [dr.Forwards]: () => Zt.Next,
                    [dr.Backwards]: () => Zt.Previous,
                  }) | Zt.WrapAround,
                  { relativeTo: g.target },
                )
              : g.target instanceof HTMLElement && sn(g.target)));
      },
    };
  return $.createElement(
    $.Fragment,
    null,
    !!(i & 4) &&
      $.createElement(cs, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: c,
        features: oo.Focusable,
      }),
    He({ ourProps: w, theirProps: s, defaultTag: Zh, name: "FocusTrap" }),
    !!(i & 4) &&
      $.createElement(cs, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: c,
        features: oo.Focusable,
      }),
  );
}
let t0 = Oe(e0),
  lr = Object.assign(t0, { features: Cf });
function n0(e = !0) {
  let t = y.useRef(Ot.slice());
  return (
    gu(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          Co(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = Ot.slice());
      },
      [e, Ot, t],
    ),
    Y(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function r0({ ownerDocument: e }, t) {
  let n = n0(t);
  gu(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        sn(n()));
  }, [t]),
    kf(() => {
      t && sn(n());
    });
}
function l0({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let l = y.useRef(null),
    o = Kr();
  return (
    gu(() => {
      if (!r) return;
      let i = t.current;
      i &&
        Co(() => {
          if (!o.current) return;
          let s = e == null ? void 0 : e.activeElement;
          if (n != null && n.current) {
            if ((n == null ? void 0 : n.current) === s) {
              l.current = s;
              return;
            }
          } else if (i.contains(s)) {
            l.current = s;
            return;
          }
          n != null && n.current
            ? sn(n.current)
            : Rl(i, Zt.First) === hf.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />",
              ),
            (l.current = e == null ? void 0 : e.activeElement);
        });
    }, [r]),
    l
  );
}
function o0(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  l,
) {
  let o = Kr();
  Ef(
    e == null ? void 0 : e.defaultView,
    "focus",
    (i) => {
      if (!l || !o.current) return;
      let s = Nf(n);
      t.current instanceof HTMLElement && s.add(t.current);
      let u = r.current;
      if (!u) return;
      let a = i.target;
      a && a instanceof HTMLElement
        ? jf(s, a)
          ? ((r.current = a), sn(a))
          : (i.preventDefault(), i.stopPropagation(), sn(u))
        : sn(r.current);
    },
    !0,
  );
}
function jf(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let Tf = y.createContext(!1);
function i0() {
  return y.useContext(Tf);
}
function ds(e) {
  return $.createElement(Tf.Provider, { value: e.force }, e.children);
}
function s0(e) {
  let t = i0(),
    n = y.useContext(Pf),
    r = Qr(e),
    [l, o] = y.useState(() => {
      if ((!t && n !== null) || ht.isServer) return null;
      let i = r == null ? void 0 : r.getElementById("headlessui-portal-root");
      if (i) return i;
      if (r === null) return null;
      let s = r.createElement("div");
      return (
        s.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(s)
      );
    });
  return (
    y.useEffect(() => {
      l !== null &&
        ((r != null && r.body.contains(l)) ||
          r == null ||
          r.body.appendChild(l));
    }, [l, r]),
    y.useEffect(() => {
      t || (n !== null && o(n.current));
    }, [n, o, t]),
    l
  );
}
let u0 = y.Fragment;
function a0(e, t) {
  let n = e,
    r = y.useRef(null),
    l = qe(
      Wh((f) => {
        r.current = f;
      }),
      t,
    ),
    o = Qr(r),
    i = s0(r),
    [s] = y.useState(() => {
      var f;
      return ht.isServer
        ? null
        : (f = o == null ? void 0 : o.createElement("div")) != null
          ? f
          : null;
    }),
    u = y.useContext(fs),
    a = Yn();
  return (
    Be(() => {
      !i ||
        !s ||
        i.contains(s) ||
        (s.setAttribute("data-headlessui-portal", ""), i.appendChild(s));
    }, [i, s]),
    Be(() => {
      if (s && u) return u.register(s);
    }, [u, s]),
    kf(() => {
      var f;
      !i ||
        !s ||
        (s instanceof Node && i.contains(s) && i.removeChild(s),
        i.childNodes.length <= 0 &&
          ((f = i.parentElement) == null || f.removeChild(i)));
    }),
    a
      ? !i || !s
        ? null
        : pf.createPortal(
            He({
              ourProps: { ref: l },
              theirProps: n,
              defaultTag: u0,
              name: "Portal",
            }),
            s,
          )
      : null
  );
}
let c0 = y.Fragment,
  Pf = y.createContext(null);
function d0(e, t) {
  let { target: n, ...r } = e,
    l = { ref: qe(t) };
  return $.createElement(
    Pf.Provider,
    { value: n },
    He({ ourProps: l, theirProps: r, defaultTag: c0, name: "Popover.Group" }),
  );
}
let fs = y.createContext(null);
function f0() {
  let e = y.useContext(fs),
    t = y.useRef([]),
    n = Y((o) => (t.current.push(o), e && e.register(o), () => r(o))),
    r = Y((o) => {
      let i = t.current.indexOf(o);
      i !== -1 && t.current.splice(i, 1), e && e.unregister(o);
    }),
    l = y.useMemo(
      () => ({ register: n, unregister: r, portals: t }),
      [n, r, t],
    );
  return [
    t,
    y.useMemo(
      () =>
        function ({ children: o }) {
          return $.createElement(fs.Provider, { value: l }, o);
        },
      [l],
    ),
  ];
}
let p0 = Oe(a0),
  m0 = Oe(d0),
  ps = Object.assign(p0, { Group: m0 });
function h0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const g0 = typeof Object.is == "function" ? Object.is : h0,
  { useState: v0, useEffect: y0, useLayoutEffect: w0, useDebugValue: x0 } = Sr;
function S0(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = v0({ inst: { value: r, getSnapshot: t } });
  return (
    w0(() => {
      (l.value = r), (l.getSnapshot = t), ui(l) && o({ inst: l });
    }, [e, r, t]),
    y0(
      () => (
        ui(l) && o({ inst: l }),
        e(() => {
          ui(l) && o({ inst: l });
        })
      ),
      [e],
    ),
    x0(r),
    r
  );
}
function ui(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !g0(n, r);
  } catch {
    return !0;
  }
}
function E0(e, t, n) {
  return t();
}
const k0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  N0 = !k0,
  C0 = N0 ? E0 : S0,
  j0 = "useSyncExternalStore" in Sr ? ((e) => e.useSyncExternalStore)(Sr) : C0;
function T0(e) {
  return j0(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function P0(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(l) {
      return r.add(l), () => r.delete(l);
    },
    dispatch(l, ...o) {
      let i = t[l].call(n, ...o);
      i && ((n = i), r.forEach((s) => s()));
    },
  };
}
function R0() {
  let e;
  return {
    before({ doc: t }) {
      var n;
      let r = t.documentElement;
      e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
    },
    after({ doc: t, d: n }) {
      let r = t.documentElement,
        l = r.clientWidth - r.offsetWidth,
        o = e - l;
      n.style(r, "paddingRight", `${o}px`);
    },
  };
}
function _0() {
  return vf()
    ? {
        before({ doc: e, d: t, meta: n }) {
          function r(l) {
            return n.containers.flatMap((o) => o()).some((o) => o.contains(l));
          }
          t.microTask(() => {
            var l;
            if (
              window.getComputedStyle(e.documentElement).scrollBehavior !==
              "auto"
            ) {
              let s = hn();
              s.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => s.dispose()));
            }
            let o = (l = window.scrollY) != null ? l : window.pageYOffset,
              i = null;
            t.addEventListener(
              e,
              "click",
              (s) => {
                if (s.target instanceof HTMLElement)
                  try {
                    let u = s.target.closest("a");
                    if (!u) return;
                    let { hash: a } = new URL(u.href),
                      f = e.querySelector(a);
                    f && !r(f) && (i = f);
                  } catch {}
              },
              !0,
            ),
              t.addEventListener(e, "touchstart", (s) => {
                if (s.target instanceof HTMLElement)
                  if (r(s.target)) {
                    let u = s.target;
                    for (; u.parentElement && r(u.parentElement); )
                      u = u.parentElement;
                    t.style(u, "overscrollBehavior", "contain");
                  } else t.style(s.target, "touchAction", "none");
              }),
              t.addEventListener(
                e,
                "touchmove",
                (s) => {
                  if (s.target instanceof HTMLElement)
                    if (r(s.target)) {
                      let u = s.target;
                      for (
                        ;
                        u.parentElement &&
                        u.dataset.headlessuiPortal !== "" &&
                        !(
                          u.scrollHeight > u.clientHeight ||
                          u.scrollWidth > u.clientWidth
                        );

                      )
                        u = u.parentElement;
                      u.dataset.headlessuiPortal === "" && s.preventDefault();
                    } else s.preventDefault();
                },
                { passive: !1 },
              ),
              t.add(() => {
                var s;
                let u = (s = window.scrollY) != null ? s : window.pageYOffset;
                o !== u && window.scrollTo(0, o),
                  i &&
                    i.isConnected &&
                    (i.scrollIntoView({ block: "nearest" }), (i = null));
              });
          });
        },
      }
    : {};
}
function O0() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function L0(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let rn = P0(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: hn(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: L0(n) },
      l = [_0(), R0(), O0()];
    l.forEach(({ before: o }) => (o == null ? void 0 : o(r))),
      l.forEach(({ after: o }) => (o == null ? void 0 : o(r)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
rn.subscribe(() => {
  let e = rn.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    ((l && !r) || (!l && r)) &&
      rn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && rn.dispatch("TEARDOWN", n);
  }
});
function F0(e, t, n) {
  let r = T0(rn),
    l = e ? r.get(e) : void 0,
    o = l ? l.count > 0 : !1;
  return (
    Be(() => {
      if (!(!e || !t))
        return rn.dispatch("PUSH", e, n), () => rn.dispatch("POP", e, n);
    }, [t, e]),
    o
  );
}
let ai = new Map(),
  or = new Map();
function za(e, t = !0) {
  Be(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function l() {
      var i;
      if (!r) return;
      let s = (i = or.get(r)) != null ? i : 1;
      if ((s === 1 ? or.delete(r) : or.set(r, s - 1), s !== 1)) return;
      let u = ai.get(r);
      u &&
        (u["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", u["aria-hidden"]),
        (r.inert = u.inert),
        ai.delete(r));
    }
    let o = (n = or.get(r)) != null ? n : 0;
    return (
      or.set(r, o + 1),
      o !== 0 ||
        (ai.set(r, {
          "aria-hidden": r.getAttribute("aria-hidden"),
          inert: r.inert,
        }),
        r.setAttribute("aria-hidden", "true"),
        (r.inert = !0)),
      l
    );
  }, [e, t]);
}
function $0({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let l = y.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    o = Qr(l),
    i = Y(() => {
      var s, u, a;
      let f = [];
      for (let c of e)
        c !== null &&
          (c instanceof HTMLElement
            ? f.push(c)
            : "current" in c &&
              c.current instanceof HTMLElement &&
              f.push(c.current));
      if (t != null && t.current) for (let c of t.current) f.push(c);
      for (let c of (s =
        o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null
        ? s
        : [])
        c !== document.body &&
          c !== document.head &&
          c instanceof HTMLElement &&
          c.id !== "headlessui-portal-root" &&
          (c.contains(l.current) ||
            c.contains(
              (a = (u = l.current) == null ? void 0 : u.getRootNode()) == null
                ? void 0
                : a.host,
            ) ||
            f.some((v) => c.contains(v)) ||
            f.push(c));
      return f;
    });
  return {
    resolveContainers: i,
    contains: Y((s) => i().some((u) => u.contains(s))),
    mainTreeNodeRef: l,
    MainTreeNode: y.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : $.createElement(cs, { features: oo.Hidden, ref: l });
        },
      [l, n],
    ),
  };
}
let wu = y.createContext(() => {});
wu.displayName = "StackContext";
var ms = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  ms || {},
);
function A0() {
  return y.useContext(wu);
}
function D0({ children: e, onUpdate: t, type: n, element: r, enabled: l }) {
  let o = A0(),
    i = Y((...s) => {
      t == null || t(...s), o(...s);
    });
  return (
    Be(() => {
      let s = l === void 0 || l === !0;
      return (
        s && i(0, n, r),
        () => {
          s && i(1, n, r);
        }
      );
    }, [i, n, r, l]),
    $.createElement(wu.Provider, { value: i }, e)
  );
}
let Rf = y.createContext(null);
function _f() {
  let e = y.useContext(Rf);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent.",
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, _f), t);
  }
  return e;
}
function M0() {
  let [e, t] = y.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    y.useMemo(
      () =>
        function (n) {
          let r = Y(
              (o) => (
                t((i) => [...i, o]),
                () =>
                  t((i) => {
                    let s = i.slice(),
                      u = s.indexOf(o);
                    return u !== -1 && s.splice(u, 1), s;
                  })
              ),
            ),
            l = y.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
              }),
              [r, n.slot, n.name, n.props],
            );
          return $.createElement(Rf.Provider, { value: l }, n.children);
        },
      [t],
    ),
  ];
}
let z0 = "p";
function I0(e, t) {
  let n = Gn(),
    { id: r = `headlessui-description-${n}`, ...l } = e,
    o = _f(),
    i = qe(t);
  Be(() => o.register(r), [r, o.register]);
  let s = { ref: i, ...o.props, id: r };
  return He({
    ourProps: s,
    theirProps: l,
    slot: o.slot || {},
    defaultTag: z0,
    name: o.name || "Description",
  });
}
let U0 = Oe(I0),
  B0 = Object.assign(U0, {});
var H0 = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(H0 || {}),
  V0 = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(V0 || {});
let W0 = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  io = y.createContext(null);
io.displayName = "DialogContext";
function Yr(e) {
  let t = y.useContext(io);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Yr), n);
  }
  return t;
}
function Q0(e, t, n = () => [document.body]) {
  F0(e, t, (r) => {
    var l;
    return { containers: [...((l = r.containers) != null ? l : []), n] };
  });
}
function K0(e, t) {
  return pe(t.type, W0, e, t);
}
let Y0 = "div",
  G0 = lo.RenderStrategy | lo.Static;
function b0(e, t) {
  let n = Gn(),
    {
      id: r = `headlessui-dialog-${n}`,
      open: l,
      onClose: o,
      initialFocus: i,
      role: s = "dialog",
      __demoMode: u = !1,
      ...a
    } = e,
    [f, c] = y.useState(0),
    v = y.useRef(!1);
  s = (function () {
    return s === "dialog" || s === "alertdialog"
      ? s
      : (v.current ||
          ((v.current = !0),
          console.warn(
            `Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`,
          )),
        "dialog");
  })();
  let x = yu();
  l === void 0 && x !== null && (l = (x & Ce.Open) === Ce.Open);
  let w = y.useRef(null),
    g = qe(w, t),
    k = Qr(w),
    m = e.hasOwnProperty("open") || x !== null,
    p = e.hasOwnProperty("onClose");
  if (!m && !p)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component.",
    );
  if (!m)
    throw new Error(
      "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.",
    );
  if (!p)
    throw new Error(
      "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.",
    );
  if (typeof l != "boolean")
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`,
    );
  if (typeof o != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`,
    );
  let h = l ? 0 : 1,
    [E, j] = y.useReducer(K0, {
      titleId: null,
      descriptionId: null,
      panelRef: y.createRef(),
    }),
    C = Y(() => o(!1)),
    R = Y((Z) => j({ type: 0, id: Z })),
    _ = Yn() ? (u ? !1 : h === 0) : !1,
    z = f > 1,
    F = y.useContext(io) !== null,
    [ie, Le] = f0(),
    Ve = {
      get current() {
        var Z;
        return (Z = E.panelRef.current) != null ? Z : w.current;
      },
    },
    {
      resolveContainers: kt,
      mainTreeNodeRef: st,
      MainTreeNode: bt,
    } = $0({ portals: ie, defaultContainers: [Ve] }),
    We = z ? "parent" : "leaf",
    T = x !== null ? (x & Ce.Closing) === Ce.Closing : !1,
    O = F || T ? !1 : _,
    L = y.useCallback(() => {
      var Z, at;
      return (at = Array.from(
        (Z = k == null ? void 0 : k.querySelectorAll("body > *")) != null
          ? Z
          : [],
      ).find((Fe) =>
        Fe.id === "headlessui-portal-root"
          ? !1
          : Fe.contains(st.current) && Fe instanceof HTMLElement,
      )) != null
        ? at
        : null;
    }, [st]);
  za(L, O);
  let U = z ? !0 : _,
    B = y.useCallback(() => {
      var Z, at;
      return (at = Array.from(
        (Z =
          k == null
            ? void 0
            : k.querySelectorAll("[data-headlessui-portal]")) != null
          ? Z
          : [],
      ).find((Fe) => Fe.contains(st.current) && Fe instanceof HTMLElement)) !=
        null
        ? at
        : null;
    }, [st]);
  za(B, U), Vh(kt, C, !(!_ || z));
  let re = !(z || h !== 0);
  Ef(k == null ? void 0 : k.defaultView, "keydown", (Z) => {
    re &&
      (Z.defaultPrevented ||
        (Z.key === Sf.Escape &&
          (Z.preventDefault(), Z.stopPropagation(), C())));
  }),
    Q0(k, !(T || h !== 0 || F), kt),
    y.useEffect(() => {
      if (h !== 0 || !w.current) return;
      let Z = new ResizeObserver((at) => {
        for (let Fe of at) {
          let Jr = Fe.target.getBoundingClientRect();
          Jr.x === 0 && Jr.y === 0 && Jr.width === 0 && Jr.height === 0 && C();
        }
      });
      return Z.observe(w.current), () => Z.disconnect();
    }, [h, w, C]);
  let [ut, gn] = M0(),
    np = y.useMemo(
      () => [{ dialogState: h, close: C, setTitleId: R }, E],
      [h, E, C, R],
    ),
    ju = y.useMemo(() => ({ open: h === 0 }), [h]),
    rp = {
      ref: g,
      id: r,
      role: s,
      "aria-modal": h === 0 ? !0 : void 0,
      "aria-labelledby": E.titleId,
      "aria-describedby": ut,
    };
  return $.createElement(
    D0,
    {
      type: "Dialog",
      enabled: h === 0,
      element: w,
      onUpdate: Y((Z, at) => {
        at === "Dialog" &&
          pe(Z, {
            [ms.Add]: () => c((Fe) => Fe + 1),
            [ms.Remove]: () => c((Fe) => Fe - 1),
          });
      }),
    },
    $.createElement(
      ds,
      { force: !0 },
      $.createElement(
        ps,
        null,
        $.createElement(
          io.Provider,
          { value: np },
          $.createElement(
            ps.Group,
            { target: w },
            $.createElement(
              ds,
              { force: !1 },
              $.createElement(
                gn,
                { slot: ju, name: "Dialog.Description" },
                $.createElement(
                  lr,
                  {
                    initialFocus: i,
                    containers: kt,
                    features: _
                      ? pe(We, {
                          parent: lr.features.RestoreFocus,
                          leaf: lr.features.All & ~lr.features.FocusLock,
                        })
                      : lr.features.None,
                  },
                  $.createElement(
                    Le,
                    null,
                    He({
                      ourProps: rp,
                      theirProps: a,
                      slot: ju,
                      defaultTag: Y0,
                      features: G0,
                      visible: h === 0,
                      name: "Dialog",
                    }),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    $.createElement(bt, null),
  );
}
let X0 = "div";
function J0(e, t) {
  let n = Gn(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...l } = e,
    [{ dialogState: o, close: i }] = Yr("Dialog.Overlay"),
    s = qe(t),
    u = Y((f) => {
      if (f.target === f.currentTarget) {
        if (Xh(f.currentTarget)) return f.preventDefault();
        f.preventDefault(), f.stopPropagation(), i();
      }
    }),
    a = y.useMemo(() => ({ open: o === 0 }), [o]);
  return He({
    ourProps: { ref: s, id: r, "aria-hidden": !0, onClick: u },
    theirProps: l,
    slot: a,
    defaultTag: X0,
    name: "Dialog.Overlay",
  });
}
let q0 = "div";
function Z0(e, t) {
  let n = Gn(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...l } = e,
    [{ dialogState: o }, i] = Yr("Dialog.Backdrop"),
    s = qe(t);
  y.useEffect(() => {
    if (i.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.",
      );
  }, [i.panelRef]);
  let u = y.useMemo(() => ({ open: o === 0 }), [o]);
  return $.createElement(
    ds,
    { force: !0 },
    $.createElement(
      ps,
      null,
      He({
        ourProps: { ref: s, id: r, "aria-hidden": !0 },
        theirProps: l,
        slot: u,
        defaultTag: q0,
        name: "Dialog.Backdrop",
      }),
    ),
  );
}
let eg = "div";
function tg(e, t) {
  let n = Gn(),
    { id: r = `headlessui-dialog-panel-${n}`, ...l } = e,
    [{ dialogState: o }, i] = Yr("Dialog.Panel"),
    s = qe(t, i.panelRef),
    u = y.useMemo(() => ({ open: o === 0 }), [o]),
    a = Y((f) => {
      f.stopPropagation();
    });
  return He({
    ourProps: { ref: s, id: r, onClick: a },
    theirProps: l,
    slot: u,
    defaultTag: eg,
    name: "Dialog.Panel",
  });
}
let ng = "h2";
function rg(e, t) {
  let n = Gn(),
    { id: r = `headlessui-dialog-title-${n}`, ...l } = e,
    [{ dialogState: o, setTitleId: i }] = Yr("Dialog.Title"),
    s = qe(t);
  y.useEffect(() => (i(r), () => i(null)), [r, i]);
  let u = y.useMemo(() => ({ open: o === 0 }), [o]);
  return He({
    ourProps: { ref: s, id: r },
    theirProps: l,
    slot: u,
    defaultTag: ng,
    name: "Dialog.Title",
  });
}
let lg = Oe(b0),
  og = Oe(Z0),
  ig = Oe(tg),
  sg = Oe(J0),
  ug = Oe(rg),
  Vt = Object.assign(lg, {
    Backdrop: og,
    Panel: ig,
    Overlay: sg,
    Title: ug,
    Description: B0,
  });
function ag(e = 0) {
  let [t, n] = y.useState(e),
    r = Kr(),
    l = y.useCallback(
      (u) => {
        r.current && n((a) => a | u);
      },
      [t, r],
    ),
    o = y.useCallback((u) => !!(t & u), [t]),
    i = y.useCallback(
      (u) => {
        r.current && n((a) => a & ~u);
      },
      [n, r],
    ),
    s = y.useCallback(
      (u) => {
        r.current && n((a) => a ^ u);
      },
      [n],
    );
  return { flags: t, addFlag: l, hasFlag: o, removeFlag: i, toggleFlag: s };
}
function cg(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function ci(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function di(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function dg(e, t) {
  let n = hn();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [o, i] = [r, l].map((u) => {
      let [a = 0] = u
        .split(",")
        .filter(Boolean)
        .map((f) => (f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3))
        .sort((f, c) => c - f);
      return a;
    }),
    s = o + i;
  if (s !== 0) {
    n.group((a) => {
      a.setTimeout(() => {
        t(), a.dispose();
      }, s),
        a.addEventListener(e, "transitionrun", (f) => {
          f.target === f.currentTarget && a.dispose();
        });
    });
    let u = n.addEventListener(e, "transitionend", (a) => {
      a.target === a.currentTarget && (t(), u());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function fg(e, t, n, r) {
  let l = n ? "enter" : "leave",
    o = hn(),
    i = r !== void 0 ? cg(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let s = pe(l, { enter: () => t.enter, leave: () => t.leave }),
    u = pe(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    a = pe(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    di(
      e,
      ...t.base,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered,
    ),
    ci(e, ...t.base, ...s, ...a),
    o.nextFrame(() => {
      di(e, ...t.base, ...s, ...a),
        ci(e, ...t.base, ...s, ...u),
        dg(
          e,
          () => (di(e, ...t.base, ...s), ci(e, ...t.base, ...t.entered), i()),
        );
    }),
    o.dispose
  );
}
function pg({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: l,
  onStop: o,
}) {
  let i = Kr(),
    s = hu(),
    u = gt(n);
  Be(() => {
    e && (u.current = "enter");
  }, [e]),
    Be(() => {
      let a = hn();
      s.add(a.dispose);
      let f = t.current;
      if (f && u.current !== "idle" && i.current)
        return (
          a.dispose(),
          l.current(u.current),
          a.add(
            fg(f, r.current, u.current === "enter", () => {
              a.dispose(), o.current(u.current);
            }),
          ),
          a.dispose
        );
    }, [n]);
}
function Ct(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let jo = y.createContext(null);
jo.displayName = "TransitionContext";
var mg = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(mg || {});
function hg() {
  let e = y.useContext(jo);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
    );
  return e;
}
function gg() {
  let e = y.useContext(To);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
    );
  return e;
}
let To = y.createContext(null);
To.displayName = "NestingContext";
function Po(e) {
  return "children" in e
    ? Po(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Of(e, t) {
  let n = gt(e),
    r = y.useRef([]),
    l = Kr(),
    o = hu(),
    i = Y((x, w = $t.Hidden) => {
      let g = r.current.findIndex(({ el: k }) => k === x);
      g !== -1 &&
        (pe(w, {
          [$t.Unmount]() {
            r.current.splice(g, 1);
          },
          [$t.Hidden]() {
            r.current[g].state = "hidden";
          },
        }),
        o.microTask(() => {
          var k;
          !Po(r) && l.current && ((k = n.current) == null || k.call(n));
        }));
    }),
    s = Y((x) => {
      let w = r.current.find(({ el: g }) => g === x);
      return (
        w
          ? w.state !== "visible" && (w.state = "visible")
          : r.current.push({ el: x, state: "visible" }),
        () => i(x, $t.Unmount)
      );
    }),
    u = y.useRef([]),
    a = y.useRef(Promise.resolve()),
    f = y.useRef({ enter: [], leave: [], idle: [] }),
    c = Y((x, w, g) => {
      u.current.splice(0),
        t &&
          (t.chains.current[w] = t.chains.current[w].filter(([k]) => k !== x)),
        t == null ||
          t.chains.current[w].push([
            x,
            new Promise((k) => {
              u.current.push(k);
            }),
          ]),
        t == null ||
          t.chains.current[w].push([
            x,
            new Promise((k) => {
              Promise.all(f.current[w].map(([m, p]) => p)).then(() => k());
            }),
          ]),
        w === "enter"
          ? (a.current = a.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => g(w)))
          : g(w);
    }),
    v = Y((x, w, g) => {
      Promise.all(f.current[w].splice(0).map(([k, m]) => m))
        .then(() => {
          var k;
          (k = u.current.shift()) == null || k();
        })
        .then(() => g(w));
    });
  return y.useMemo(
    () => ({
      children: r,
      register: s,
      unregister: i,
      onStart: c,
      onStop: v,
      wait: a,
      chains: f,
    }),
    [s, i, r, c, v, f, a],
  );
}
function vg() {}
let yg = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Ia(e) {
  var t;
  let n = {};
  for (let r of yg) n[r] = (t = e[r]) != null ? t : vg;
  return n;
}
function wg(e) {
  let t = y.useRef(Ia(e));
  return (
    y.useEffect(() => {
      t.current = Ia(e);
    }, [e]),
    t
  );
}
let xg = "div",
  Lf = lo.RenderStrategy;
function Sg(e, t) {
  var n, r;
  let {
      beforeEnter: l,
      afterEnter: o,
      beforeLeave: i,
      afterLeave: s,
      enter: u,
      enterFrom: a,
      enterTo: f,
      entered: c,
      leave: v,
      leaveFrom: x,
      leaveTo: w,
      ...g
    } = e,
    k = y.useRef(null),
    m = qe(k, t),
    p = (n = g.unmount) == null || n ? $t.Unmount : $t.Hidden,
    { show: h, appear: E, initial: j } = hg(),
    [C, R] = y.useState(h ? "visible" : "hidden"),
    _ = gg(),
    { register: z, unregister: F } = _;
  y.useEffect(() => z(k), [z, k]),
    y.useEffect(() => {
      if (p === $t.Hidden && k.current) {
        if (h && C !== "visible") {
          R("visible");
          return;
        }
        return pe(C, { hidden: () => F(k), visible: () => z(k) });
      }
    }, [C, k, z, F, h, p]);
  let ie = gt({
      base: Ct(g.className),
      enter: Ct(u),
      enterFrom: Ct(a),
      enterTo: Ct(f),
      entered: Ct(c),
      leave: Ct(v),
      leaveFrom: Ct(x),
      leaveTo: Ct(w),
    }),
    Le = wg({ beforeEnter: l, afterEnter: o, beforeLeave: i, afterLeave: s }),
    Ve = Yn();
  y.useEffect(() => {
    if (Ve && C === "visible" && k.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?",
      );
  }, [k, C, Ve]);
  let kt = j && !E,
    st = E && h && j,
    bt = !Ve || kt ? "idle" : h ? "enter" : "leave",
    We = ag(0),
    T = Y((re) =>
      pe(re, {
        enter: () => {
          We.addFlag(Ce.Opening), Le.current.beforeEnter();
        },
        leave: () => {
          We.addFlag(Ce.Closing), Le.current.beforeLeave();
        },
        idle: () => {},
      }),
    ),
    O = Y((re) =>
      pe(re, {
        enter: () => {
          We.removeFlag(Ce.Opening), Le.current.afterEnter();
        },
        leave: () => {
          We.removeFlag(Ce.Closing), Le.current.afterLeave();
        },
        idle: () => {},
      }),
    ),
    L = Of(() => {
      R("hidden"), F(k);
    }, _),
    U = y.useRef(!1);
  pg({
    immediate: st,
    container: k,
    classes: ie,
    direction: bt,
    onStart: gt((re) => {
      (U.current = !0), L.onStart(k, re, T);
    }),
    onStop: gt((re) => {
      (U.current = !1),
        L.onStop(k, re, O),
        re === "leave" && !Po(L) && (R("hidden"), F(k));
    }),
  });
  let B = g,
    Xt = { ref: m };
  return (
    st
      ? (B = {
          ...B,
          className: ro(
            g.className,
            ...ie.current.enter,
            ...ie.current.enterFrom,
          ),
        })
      : U.current &&
        ((B.className = ro(
          g.className,
          (r = k.current) == null ? void 0 : r.className,
        )),
        B.className === "" && delete B.className),
    $.createElement(
      To.Provider,
      { value: L },
      $.createElement(
        Gh,
        { value: pe(C, { visible: Ce.Open, hidden: Ce.Closed }) | We.flags },
        He({
          ourProps: Xt,
          theirProps: B,
          defaultTag: xg,
          features: Lf,
          visible: C === "visible",
          name: "Transition.Child",
        }),
      ),
    )
  );
}
function Eg(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...o } = e,
    i = y.useRef(null),
    s = qe(i, t);
  Yn();
  let u = yu();
  if (
    (n === void 0 && u !== null && (n = (u & Ce.Open) === Ce.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop.",
    );
  let [a, f] = y.useState(n ? "visible" : "hidden"),
    c = Of(() => {
      f("hidden");
    }),
    [v, x] = y.useState(!0),
    w = y.useRef([n]);
  Be(() => {
    v !== !1 &&
      w.current[w.current.length - 1] !== n &&
      (w.current.push(n), x(!1));
  }, [w, n]);
  let g = y.useMemo(() => ({ show: n, appear: r, initial: v }), [n, r, v]);
  y.useEffect(() => {
    if (n) f("visible");
    else if (!Po(c)) f("hidden");
    else {
      let h = i.current;
      if (!h) return;
      let E = h.getBoundingClientRect();
      E.x === 0 && E.y === 0 && E.width === 0 && E.height === 0 && f("hidden");
    }
  }, [n, c]);
  let k = { unmount: l },
    m = Y(() => {
      var h;
      v && x(!1), (h = e.beforeEnter) == null || h.call(e);
    }),
    p = Y(() => {
      var h;
      v && x(!1), (h = e.beforeLeave) == null || h.call(e);
    });
  return $.createElement(
    To.Provider,
    { value: c },
    $.createElement(
      jo.Provider,
      { value: g },
      He({
        ourProps: {
          ...k,
          as: y.Fragment,
          children: $.createElement(Ff, {
            ref: s,
            ...k,
            ...o,
            beforeEnter: m,
            beforeLeave: p,
          }),
        },
        theirProps: {},
        defaultTag: y.Fragment,
        features: Lf,
        visible: a === "visible",
        name: "Transition",
      }),
    ),
  );
}
function kg(e, t) {
  let n = y.useContext(jo) !== null,
    r = yu() !== null;
  return $.createElement(
    $.Fragment,
    null,
    !n && r
      ? $.createElement(hs, { ref: t, ...e })
      : $.createElement(Ff, { ref: t, ...e }),
  );
}
let hs = Oe(Eg),
  Ff = Oe(Sg),
  Ng = Oe(kg),
  nt = Object.assign(hs, { Child: Ng, Root: hs });
function Cg({ title: e, titleId: t, ...n }, r) {
  return y.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n,
    ),
    e ? y.createElement("title", { id: t }, e) : null,
    y.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z",
    }),
    y.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z",
    }),
  );
}
const jg = y.forwardRef(Cg),
  Tg = jg;
function Pg({ title: e, titleId: t, ...n }, r) {
  return y.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n,
    ),
    e ? y.createElement("title", { id: t }, e) : null,
    y.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
    }),
  );
}
const Rg = y.forwardRef(Pg),
  _g = Rg;
function Og({ title: e, titleId: t, ...n }, r) {
  return y.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n,
    ),
    e ? y.createElement("title", { id: t }, e) : null,
    y.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z",
    }),
    y.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    }),
  );
}
const Lg = y.forwardRef(Og),
  Fg = Lg;
function $g({ title: e, titleId: t, ...n }, r) {
  return y.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n,
    ),
    e ? y.createElement("title", { id: t }, e) : null,
    y.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    }),
  );
}
const Ag = y.forwardRef($g),
  $f = Ag;
function Dg({ title: e, titleId: t, ...n }, r) {
  return y.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n,
    ),
    e ? y.createElement("title", { id: t }, e) : null,
    y.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z",
    }),
  );
}
const Mg = y.forwardRef(Dg),
  zg = Mg;
function Ig({ title: e, titleId: t, ...n }, r) {
  return y.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n,
    ),
    e ? y.createElement("title", { id: t }, e) : null,
    y.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18 18 6M6 6l12 12",
    }),
  );
}
const Ug = y.forwardRef(Ig),
  Bg = Ug;
function Af(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Hg } = Object.prototype,
  { getPrototypeOf: xu } = Object,
  Ro = ((e) => (t) => {
    const n = Hg.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  it = (e) => ((e = e.toLowerCase()), (t) => Ro(t) === e),
  _o = (e) => (t) => typeof t === e,
  { isArray: bn } = Array,
  Ir = _o("undefined");
function Vg(e) {
  return (
    e !== null &&
    !Ir(e) &&
    e.constructor !== null &&
    !Ir(e.constructor) &&
    ze(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Df = it("ArrayBuffer");
function Wg(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Df(e.buffer)),
    t
  );
}
const Qg = _o("string"),
  ze = _o("function"),
  Mf = _o("number"),
  Oo = (e) => e !== null && typeof e == "object",
  Kg = (e) => e === !0 || e === !1,
  _l = (e) => {
    if (Ro(e) !== "object") return !1;
    const t = xu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Yg = it("Date"),
  Gg = it("File"),
  bg = it("Blob"),
  Xg = it("FileList"),
  Jg = (e) => Oo(e) && ze(e.pipe),
  qg = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (ze(e.append) &&
          ((t = Ro(e)) === "formdata" ||
            (t === "object" &&
              ze(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Zg = it("URLSearchParams"),
  ev = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Gr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, l;
  if ((typeof e != "object" && (e = [e]), bn(e)))
    for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let s;
    for (r = 0; r < i; r++) (s = o[r]), t.call(null, e[s], s, e);
  }
}
function zf(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    l;
  for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
  return null;
}
const If =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  Uf = (e) => !Ir(e) && e !== If;
function gs() {
  const { caseless: e } = (Uf(this) && this) || {},
    t = {},
    n = (r, l) => {
      const o = (e && zf(t, l)) || l;
      _l(t[o]) && _l(r)
        ? (t[o] = gs(t[o], r))
        : _l(r)
          ? (t[o] = gs({}, r))
          : bn(r)
            ? (t[o] = r.slice())
            : (t[o] = r);
    };
  for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && Gr(arguments[r], n);
  return t;
}
const tv = (e, t, n, { allOwnKeys: r } = {}) => (
    Gr(
      t,
      (l, o) => {
        n && ze(l) ? (e[o] = Af(l, n)) : (e[o] = l);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  nv = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  rv = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  lv = (e, t, n, r) => {
    let l, o, i;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), o = l.length; o-- > 0; )
        (i = l[o]), (!r || r(i, e, t)) && !s[i] && ((t[i] = e[i]), (s[i] = !0));
      e = n !== !1 && xu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  ov = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  iv = (e) => {
    if (!e) return null;
    if (bn(e)) return e;
    let t = e.length;
    if (!Mf(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  sv = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && xu(Uint8Array)),
  uv = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const o = l.value;
      t.call(e, o[0], o[1]);
    }
  },
  av = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  cv = it("HTMLFormElement"),
  dv = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) {
      return r.toUpperCase() + l;
    }),
  Ua = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  fv = it("RegExp"),
  Bf = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Gr(n, (l, o) => {
      let i;
      (i = t(l, o, e)) !== !1 && (r[o] = i || l);
    }),
      Object.defineProperties(e, r);
  },
  pv = (e) => {
    Bf(e, (t, n) => {
      if (ze(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (ze(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  mv = (e, t) => {
    const n = {},
      r = (l) => {
        l.forEach((o) => {
          n[o] = !0;
        });
      };
    return bn(e) ? r(e) : r(String(e).split(t)), n;
  },
  hv = () => {},
  gv = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  fi = "abcdefghijklmnopqrstuvwxyz",
  Ba = "0123456789",
  Hf = { DIGIT: Ba, ALPHA: fi, ALPHA_DIGIT: fi + fi.toUpperCase() + Ba },
  vv = (e = 16, t = Hf.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function yv(e) {
  return !!(
    e &&
    ze(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const wv = (e) => {
    const t = new Array(10),
      n = (r, l) => {
        if (Oo(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[l] = r;
            const o = bn(r) ? [] : {};
            return (
              Gr(r, (i, s) => {
                const u = n(i, l + 1);
                !Ir(u) && (o[s] = u);
              }),
              (t[l] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  xv = it("AsyncFunction"),
  Sv = (e) => e && (Oo(e) || ze(e)) && ze(e.then) && ze(e.catch),
  S = {
    isArray: bn,
    isArrayBuffer: Df,
    isBuffer: Vg,
    isFormData: qg,
    isArrayBufferView: Wg,
    isString: Qg,
    isNumber: Mf,
    isBoolean: Kg,
    isObject: Oo,
    isPlainObject: _l,
    isUndefined: Ir,
    isDate: Yg,
    isFile: Gg,
    isBlob: bg,
    isRegExp: fv,
    isFunction: ze,
    isStream: Jg,
    isURLSearchParams: Zg,
    isTypedArray: sv,
    isFileList: Xg,
    forEach: Gr,
    merge: gs,
    extend: tv,
    trim: ev,
    stripBOM: nv,
    inherits: rv,
    toFlatObject: lv,
    kindOf: Ro,
    kindOfTest: it,
    endsWith: ov,
    toArray: iv,
    forEachEntry: uv,
    matchAll: av,
    isHTMLForm: cv,
    hasOwnProperty: Ua,
    hasOwnProp: Ua,
    reduceDescriptors: Bf,
    freezeMethods: pv,
    toObjectSet: mv,
    toCamelCase: dv,
    noop: hv,
    toFiniteNumber: gv,
    findKey: zf,
    global: If,
    isContextDefined: Uf,
    ALPHABET: Hf,
    generateString: vv,
    isSpecCompliantForm: yv,
    toJSONObject: wv,
    isAsyncFn: xv,
    isThenable: Sv,
  };
function D(e, t, n, r, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    l && (this.response = l);
}
S.inherits(D, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: S.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Vf = D.prototype,
  Wf = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Wf[e] = { value: e };
});
Object.defineProperties(D, Wf);
Object.defineProperty(Vf, "isAxiosError", { value: !0 });
D.from = (e, t, n, r, l, o) => {
  const i = Object.create(Vf);
  return (
    S.toFlatObject(
      e,
      i,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== "isAxiosError",
    ),
    D.call(i, e.message, t, n, r, l),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Ev = null;
function vs(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function Qf(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ha(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, o) {
          return (l = Qf(l)), !n && o ? "[" + l + "]" : l;
        })
        .join(n ? "." : "")
    : t;
}
function kv(e) {
  return S.isArray(e) && !e.some(vs);
}
const Nv = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Lo(e, t, n) {
  if (!S.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = S.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, k) {
        return !S.isUndefined(k[g]);
      },
    ));
  const r = n.metaTokens,
    l = n.visitor || f,
    o = n.dots,
    i = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && S.isSpecCompliantForm(t);
  if (!S.isFunction(l)) throw new TypeError("visitor must be a function");
  function a(w) {
    if (w === null) return "";
    if (S.isDate(w)) return w.toISOString();
    if (!u && S.isBlob(w))
      throw new D("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(w) || S.isTypedArray(w)
      ? u && typeof Blob == "function"
        ? new Blob([w])
        : Buffer.from(w)
      : w;
  }
  function f(w, g, k) {
    let m = w;
    if (w && !k && typeof w == "object") {
      if (S.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (w = JSON.stringify(w));
      else if (
        (S.isArray(w) && kv(w)) ||
        ((S.isFileList(w) || S.endsWith(g, "[]")) && (m = S.toArray(w)))
      )
        return (
          (g = Qf(g)),
          m.forEach(function (h, E) {
            !(S.isUndefined(h) || h === null) &&
              t.append(
                i === !0 ? Ha([g], E, o) : i === null ? g : g + "[]",
                a(h),
              );
          }),
          !1
        );
    }
    return vs(w) ? !0 : (t.append(Ha(k, g, o), a(w)), !1);
  }
  const c = [],
    v = Object.assign(Nv, {
      defaultVisitor: f,
      convertValue: a,
      isVisitable: vs,
    });
  function x(w, g) {
    if (!S.isUndefined(w)) {
      if (c.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      c.push(w),
        S.forEach(w, function (m, p) {
          (!(S.isUndefined(m) || m === null) &&
            l.call(t, m, S.isString(p) ? p.trim() : p, g, v)) === !0 &&
            x(m, g ? g.concat(p) : [p]);
        }),
        c.pop();
    }
  }
  if (!S.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function Va(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Su(e, t) {
  (this._pairs = []), e && Lo(e, this, t);
}
const Kf = Su.prototype;
Kf.append = function (t, n) {
  this._pairs.push([t, n]);
};
Kf.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Va);
      }
    : Va;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + "=" + n(l[1]);
    }, "")
    .join("&");
};
function Cv(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Yf(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Cv,
    l = n && n.serialize;
  let o;
  if (
    (l
      ? (o = l(t, n))
      : (o = S.isURLSearchParams(t) ? t.toString() : new Su(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Wa {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    S.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Gf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  jv = typeof URLSearchParams < "u" ? URLSearchParams : Su,
  Tv = typeof FormData < "u" ? FormData : null,
  Pv = typeof Blob < "u" ? Blob : null,
  Rv = {
    isBrowser: !0,
    classes: { URLSearchParams: jv, FormData: Tv, Blob: Pv },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  bf = typeof window < "u" && typeof document < "u",
  _v = ((e) => bf && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product,
  ),
  Ov =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Lv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: bf,
        hasStandardBrowserEnv: _v,
        hasStandardBrowserWebWorkerEnv: Ov,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  rt = { ...Lv, ...Rv };
function Fv(e, t) {
  return Lo(
    e,
    new rt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, l, o) {
          return rt.isNode && S.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function $v(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function Av(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const l = n.length;
  let o;
  for (r = 0; r < l; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Xf(e) {
  function t(n, r, l, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const s = Number.isFinite(+i),
      u = o >= n.length;
    return (
      (i = !i && S.isArray(l) ? l.length : i),
      u
        ? (S.hasOwnProp(l, i) ? (l[i] = [l[i], r]) : (l[i] = r), !s)
        : ((!l[i] || !S.isObject(l[i])) && (l[i] = []),
          t(n, r, l[i], o) && S.isArray(l[i]) && (l[i] = Av(l[i])),
          !s)
    );
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return (
      S.forEachEntry(e, (r, l) => {
        t($v(r), l, n, 0);
      }),
      n
    );
  }
  return null;
}
function Dv(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Eu = {
  transitional: Gf,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        l = r.indexOf("application/json") > -1,
        o = S.isObject(t);
      if ((o && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return l ? JSON.stringify(Xf(t)) : t;
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t)
      )
        return t;
      if (S.isArrayBufferView(t)) return t.buffer;
      if (S.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let s;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Fv(t, this.formSerializer).toString();
        if ((s = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return Lo(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer,
          );
        }
      }
      return o || l ? (n.setContentType("application/json", !1), Dv(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Eu.transitional,
        r = n && n.forcedJSONParsing,
        l = this.responseType === "json";
      if (t && S.isString(t) && ((r && !this.responseType) || l)) {
        const i = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (i)
            throw s.name === "SyntaxError"
              ? D.from(s, D.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: rt.classes.FormData, Blob: rt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
S.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Eu.headers[e] = {};
});
const ku = Eu,
  Mv = S.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  zv = (e) => {
    const t = {};
    let n, r, l;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (i) {
            (l = i.indexOf(":")),
              (n = i.substring(0, l).trim().toLowerCase()),
              (r = i.substring(l + 1).trim()),
              !(!n || (t[n] && Mv[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Qa = Symbol("internals");
function ir(e) {
  return e && String(e).trim().toLowerCase();
}
function Ol(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(Ol) : String(e);
}
function Iv(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Uv = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function pi(e, t, n, r, l) {
  if (S.isFunction(r)) return r.call(this, t, n);
  if ((l && (t = n), !!S.isString(t))) {
    if (S.isString(r)) return t.indexOf(r) !== -1;
    if (S.isRegExp(r)) return r.test(t);
  }
}
function Bv(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Hv(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (l, o, i) {
        return this[r].call(this, t, l, o, i);
      },
      configurable: !0,
    });
  });
}
class Fo {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const l = this;
    function o(s, u, a) {
      const f = ir(u);
      if (!f) throw new Error("header name must be a non-empty string");
      const c = S.findKey(l, f);
      (!c || l[c] === void 0 || a === !0 || (a === void 0 && l[c] !== !1)) &&
        (l[c || u] = Ol(s));
    }
    const i = (s, u) => S.forEach(s, (a, f) => o(a, f, u));
    return (
      S.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : S.isString(t) && (t = t.trim()) && !Uv(t)
          ? i(zv(t), n)
          : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = ir(t)), t)) {
      const r = S.findKey(this, t);
      if (r) {
        const l = this[r];
        if (!n) return l;
        if (n === !0) return Iv(l);
        if (S.isFunction(n)) return n.call(this, l, r);
        if (S.isRegExp(n)) return n.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = ir(t)), t)) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || pi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let l = !1;
    function o(i) {
      if (((i = ir(i)), i)) {
        const s = S.findKey(r, i);
        s && (!n || pi(r, r[s], s, n)) && (delete r[s], (l = !0));
      }
    }
    return S.isArray(t) ? t.forEach(o) : o(t), l;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      l = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || pi(this, this[o], o, t, !0)) && (delete this[o], (l = !0));
    }
    return l;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      S.forEach(this, (l, o) => {
        const i = S.findKey(r, o);
        if (i) {
          (n[i] = Ol(l)), delete n[o];
          return;
        }
        const s = t ? Bv(o) : String(o).trim();
        s !== o && delete n[o], (n[s] = Ol(l)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      S.forEach(this, (r, l) => {
        r != null && r !== !1 && (n[l] = t && S.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((l) => r.set(l)), r;
  }
  static accessor(t) {
    const r = (this[Qa] = this[Qa] = { accessors: {} }).accessors,
      l = this.prototype;
    function o(i) {
      const s = ir(i);
      r[s] || (Hv(l, i), (r[s] = !0));
    }
    return S.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Fo.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
S.reduceDescriptors(Fo.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
S.freezeMethods(Fo);
const vt = Fo;
function mi(e, t) {
  const n = this || ku,
    r = t || n,
    l = vt.from(r.headers);
  let o = r.data;
  return (
    S.forEach(e, function (s) {
      o = s.call(n, o, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    o
  );
}
function Jf(e) {
  return !!(e && e.__CANCEL__);
}
function br(e, t, n) {
  D.call(this, e ?? "canceled", D.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
S.inherits(br, D, { __CANCEL__: !0 });
function Vv(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new D(
          "Request failed with status code " + n.status,
          [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
const Wv = rt.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, l, o) {
        const i = [e + "=" + encodeURIComponent(t)];
        S.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          S.isString(r) && i.push("path=" + r),
          S.isString(l) && i.push("domain=" + l),
          o === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function Qv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Kv(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function qf(e, t) {
  return e && !Qv(t) ? Kv(e, t) : t;
}
const Yv = rt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function l(o) {
        let i = o;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = l(window.location.href)),
        function (i) {
          const s = S.isString(i) ? l(i) : i;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Gv(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function bv(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let l = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        f = r[o];
      i || (i = a), (n[l] = u), (r[l] = a);
      let c = o,
        v = 0;
      for (; c !== l; ) (v += n[c++]), (c = c % e);
      if (((l = (l + 1) % e), l === o && (o = (o + 1) % e), a - i < t)) return;
      const x = f && a - f;
      return x ? Math.round((v * 1e3) / x) : void 0;
    }
  );
}
function Ka(e, t) {
  let n = 0;
  const r = bv(50, 250);
  return (l) => {
    const o = l.loaded,
      i = l.lengthComputable ? l.total : void 0,
      s = o - n,
      u = r(s),
      a = o <= i;
    n = o;
    const f = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && i && a ? (i - o) / u : void 0,
      event: l,
    };
    (f[t ? "download" : "upload"] = !0), e(f);
  };
}
const Xv = typeof XMLHttpRequest < "u",
  Jv =
    Xv &&
    function (e) {
      return new Promise(function (n, r) {
        let l = e.data;
        const o = vt.from(e.headers).normalize();
        let { responseType: i, withXSRFToken: s } = e,
          u;
        function a() {
          e.cancelToken && e.cancelToken.unsubscribe(u),
            e.signal && e.signal.removeEventListener("abort", u);
        }
        let f;
        if (S.isFormData(l)) {
          if (rt.hasStandardBrowserEnv || rt.hasStandardBrowserWebWorkerEnv)
            o.setContentType(!1);
          else if ((f = o.getContentType()) !== !1) {
            const [g, ...k] = f
              ? f
                  .split(";")
                  .map((m) => m.trim())
                  .filter(Boolean)
              : [];
            o.setContentType([g || "multipart/form-data", ...k].join("; "));
          }
        }
        let c = new XMLHttpRequest();
        if (e.auth) {
          const g = e.auth.username || "",
            k = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(g + ":" + k));
        }
        const v = qf(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), Yf(v, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function x() {
          if (!c) return;
          const g = vt.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders(),
            ),
            m = {
              data:
                !i || i === "text" || i === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: g,
              config: e,
              request: c,
            };
          Vv(
            function (h) {
              n(h), a();
            },
            function (h) {
              r(h), a();
            },
            m,
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = x)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(x);
              }),
          (c.onabort = function () {
            c &&
              (r(new D("Request aborted", D.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new D("Network Error", D.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let k = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const m = e.transitional || Gf;
            e.timeoutErrorMessage && (k = e.timeoutErrorMessage),
              r(
                new D(
                  k,
                  m.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
                  e,
                  c,
                ),
              ),
              (c = null);
          }),
          rt.hasStandardBrowserEnv &&
            (s && S.isFunction(s) && (s = s(e)), s || (s !== !1 && Yv(v))))
        ) {
          const g =
            e.xsrfHeaderName && e.xsrfCookieName && Wv.read(e.xsrfCookieName);
          g && o.set(e.xsrfHeaderName, g);
        }
        l === void 0 && o.setContentType(null),
          "setRequestHeader" in c &&
            S.forEach(o.toJSON(), function (k, m) {
              c.setRequestHeader(m, k);
            }),
          S.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          i && i !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", Ka(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", Ka(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (g) => {
              c &&
                (r(!g || g.type ? new br(null, e, c) : g),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal &&
              (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
        const w = Gv(v);
        if (w && rt.protocols.indexOf(w) === -1) {
          r(new D("Unsupported protocol " + w + ":", D.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(l || null);
      });
    },
  ys = { http: Ev, xhr: Jv };
S.forEach(ys, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ya = (e) => `- ${e}`,
  qv = (e) => S.isFunction(e) || e === null || e === !1,
  Zf = {
    getAdapter: (e) => {
      e = S.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const l = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !qv(n) && ((r = ys[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new D(`Unknown adapter '${i}'`);
        if (r) break;
        l[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(l).map(
          ([s, u]) =>
            `adapter ${s} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(Ya).join(`
`)
            : " " + Ya(o[0])
          : "as no adapter specified";
        throw new D(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: ys,
  };
function hi(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new br(null, e);
}
function Ga(e) {
  return (
    hi(e),
    (e.headers = vt.from(e.headers)),
    (e.data = mi.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Zf.getAdapter(e.adapter || ku.adapter)(e).then(
      function (r) {
        return (
          hi(e),
          (r.data = mi.call(e, e.transformResponse, r)),
          (r.headers = vt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Jf(r) ||
            (hi(e),
            r &&
              r.response &&
              ((r.response.data = mi.call(e, e.transformResponse, r.response)),
              (r.response.headers = vt.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const ba = (e) => (e instanceof vt ? e.toJSON() : e);
function Vn(e, t) {
  t = t || {};
  const n = {};
  function r(a, f, c) {
    return S.isPlainObject(a) && S.isPlainObject(f)
      ? S.merge.call({ caseless: c }, a, f)
      : S.isPlainObject(f)
        ? S.merge({}, f)
        : S.isArray(f)
          ? f.slice()
          : f;
  }
  function l(a, f, c) {
    if (S.isUndefined(f)) {
      if (!S.isUndefined(a)) return r(void 0, a, c);
    } else return r(a, f, c);
  }
  function o(a, f) {
    if (!S.isUndefined(f)) return r(void 0, f);
  }
  function i(a, f) {
    if (S.isUndefined(f)) {
      if (!S.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, f);
  }
  function s(a, f, c) {
    if (c in t) return r(a, f);
    if (c in e) return r(void 0, a);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (a, f) => l(ba(a), ba(f), !0),
  };
  return (
    S.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const c = u[f] || l,
        v = c(e[f], t[f], f);
      (S.isUndefined(v) && c !== s) || (n[f] = v);
    }),
    n
  );
}
const ep = "1.6.7",
  Nu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Nu[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const Xa = {};
Nu.transitional = function (t, n, r) {
  function l(o, i) {
    return (
      "[Axios v" +
      ep +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, s) => {
    if (t === !1)
      throw new D(
        l(i, " has been removed" + (n ? " in " + n : "")),
        D.ERR_DEPRECATED,
      );
    return (
      n &&
        !Xa[i] &&
        ((Xa[i] = !0),
        console.warn(
          l(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(o, i, s) : !0
    );
  };
};
function Zv(e, t, n) {
  if (typeof e != "object")
    throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const o = r[l],
      i = t[o];
    if (i) {
      const s = e[o],
        u = s === void 0 || i(s, o, e);
      if (u !== !0)
        throw new D("option " + o + " must be " + u, D.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new D("Unknown option " + o, D.ERR_BAD_OPTION);
  }
}
const ws = { assertOptions: Zv, validators: Nu },
  jt = ws.validators;
class so {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Wa(), response: new Wa() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let l;
        Error.captureStackTrace
          ? Error.captureStackTrace((l = {}))
          : (l = new Error());
        const o = l.stack ? l.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? o &&
            !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + o)
          : (r.stack = o);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Vn(this.defaults, n));
    const { transitional: r, paramsSerializer: l, headers: o } = n;
    r !== void 0 &&
      ws.assertOptions(
        r,
        {
          silentJSONParsing: jt.transitional(jt.boolean),
          forcedJSONParsing: jt.transitional(jt.boolean),
          clarifyTimeoutError: jt.transitional(jt.boolean),
        },
        !1,
      ),
      l != null &&
        (S.isFunction(l)
          ? (n.paramsSerializer = { serialize: l })
          : ws.assertOptions(
              l,
              { encode: jt.function, serialize: jt.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && S.merge(o.common, o[n.method]);
    o &&
      S.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (w) => {
          delete o[w];
        },
      ),
      (n.headers = vt.concat(i, o));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((u = u && g.synchronous), s.unshift(g.fulfilled, g.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (g) {
      a.push(g.fulfilled, g.rejected);
    });
    let f,
      c = 0,
      v;
    if (!u) {
      const w = [Ga.bind(this), void 0];
      for (
        w.unshift.apply(w, s),
          w.push.apply(w, a),
          v = w.length,
          f = Promise.resolve(n);
        c < v;

      )
        f = f.then(w[c++], w[c++]);
      return f;
    }
    v = s.length;
    let x = n;
    for (c = 0; c < v; ) {
      const w = s[c++],
        g = s[c++];
      try {
        x = w(x);
      } catch (k) {
        g.call(this, k);
        break;
      }
    }
    try {
      f = Ga.call(this, x);
    } catch (w) {
      return Promise.reject(w);
    }
    for (c = 0, v = a.length; c < v; ) f = f.then(a[c++], a[c++]);
    return f;
  }
  getUri(t) {
    t = Vn(this.defaults, t);
    const n = qf(t.baseURL, t.url);
    return Yf(n, t.params, t.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function (t) {
  so.prototype[t] = function (n, r) {
    return this.request(
      Vn(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
S.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, s) {
      return this.request(
        Vn(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        }),
      );
    };
  }
  (so.prototype[t] = n()), (so.prototype[t + "Form"] = n(!0));
});
const Ll = so;
class Cu {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](l);
      r._listeners = null;
    }),
      (this.promise.then = (l) => {
        let o;
        const i = new Promise((s) => {
          r.subscribe(s), (o = s);
        }).then(l);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, s) {
        r.reason || ((r.reason = new br(o, i, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Cu(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
}
const ey = Cu;
function ty(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function ny(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const xs = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(xs).forEach(([e, t]) => {
  xs[t] = e;
});
const ry = xs;
function tp(e) {
  const t = new Ll(e),
    n = Af(Ll.prototype.request, t);
  return (
    S.extend(n, Ll.prototype, t, { allOwnKeys: !0 }),
    S.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return tp(Vn(e, l));
    }),
    n
  );
}
const Q = tp(ku);
Q.Axios = Ll;
Q.CanceledError = br;
Q.CancelToken = ey;
Q.isCancel = Jf;
Q.VERSION = ep;
Q.toFormData = Lo;
Q.AxiosError = D;
Q.Cancel = Q.CanceledError;
Q.all = function (t) {
  return Promise.all(t);
};
Q.spread = ty;
Q.isAxiosError = ny;
Q.mergeConfig = Vn;
Q.AxiosHeaders = vt;
Q.formToJSON = (e) => Xf(S.isHTMLForm(e) ? new FormData(e) : e);
Q.getAdapter = Zf.getAdapter;
Q.HttpStatusCode = ry;
Q.default = Q;
function ly({ open: e, setOpen: t, fetchPerson: n }) {
  const r = y.useRef(null),
    [l, o] = y.useState({
      email: "",
      password: "",
      role: "",
      name: "",
      surname: "",
      age: "",
      gender: "",
    }),
    i = (u) => {
      const { name: a, value: f } = u.target;
      o((c) => ({ ...c, [a]: f }));
    },
    s = async () => {
      try {
        const u = { ...l, age: parseInt(l.age, 10) },
          a = JSON.stringify(u);
        console.log(a);
        const f = await Q.post("https://gokdis.ecosys.eu/api/v1/person", a, {
          headers: { "Content-Type": "application/json" },
          auth: { username: "helen@gokdis.ecosys.eu", password: "helen" },
        });
        n(), t(!1);
      } catch (u) {
        console.error("Error updating user", u);
      }
    };
  return d.jsx(nt.Root, {
    show: e,
    as: y.Fragment,
    children: d.jsxs(Vt, {
      as: "div",
      className: "relative z-10",
      initialFocus: r,
      onClose: t,
      children: [
        d.jsx(nt.Child, {
          as: y.Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: d.jsx("div", {
            className: "fixed inset-0 bg-opacity-75 transition-opacity",
          }),
        }),
        d.jsx("div", {
          className: "fixed inset-0 z-10 w-screen overflow-y-auto",
          children: d.jsx("div", {
            className:
              "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
            children: d.jsx(nt.Child, {
              as: y.Fragment,
              enter: "ease-out duration-300",
              enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              enterTo: "opacity-100 translate-y-0 sm:scale-100",
              leave: "ease-in duration-200",
              leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
              leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              children: d.jsxs(Vt.Panel, {
                className:
                  "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",
                children: [
                  d.jsx("div", {
                    className: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",
                    children: d.jsxs("div", {
                      className: "sm:flex sm:items-start",
                      children: [
                        d.jsx("div", {
                          className:
                            "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10",
                          children: d.jsx($f, {
                            className: "h-6 w-6 text-green-600",
                            "aria-hidden": "true",
                          }),
                        }),
                        d.jsx("div", {
                          className:
                            "mt-3 text-center sm:ml-4 sm:mt-2 sm:text-left",
                          children: d.jsx(Vt.Title, {
                            as: "h3",
                            className:
                              "text-base font-semibold leading-6 text-gray-900",
                            children: "Add user",
                          }),
                        }),
                      ],
                    }),
                  }),
                  d.jsxs("div", {
                    className: "ml-4 mr-4",
                    children: [
                      d.jsxs("div", {
                        className: "mb-2",
                        children: [
                          d.jsx("label", {
                            htmlFor: "name",
                            className:
                              "block text-sm font-medium leading-6 text-gray-900",
                            children: "Name",
                          }),
                          d.jsx("div", {
                            className: "mt-2",
                            children: d.jsx("input", {
                              type: "text",
                              name: "name",
                              id: "name",
                              value: l.name,
                              onChange: i,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                              placeholder: "Jane",
                            }),
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "mb-2",
                        children: [
                          d.jsx("label", {
                            htmlFor: "surname",
                            className:
                              "block text-sm font-medium leading-6 text-gray-900",
                            children: "Surname",
                          }),
                          d.jsx("div", {
                            className: "mt-2",
                            children: d.jsx("input", {
                              type: "text",
                              name: "surname",
                              id: "surname",
                              value: l.surname,
                              onChange: i,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                              placeholder: "Smith",
                            }),
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "mb-2",
                        children: [
                          d.jsx("label", {
                            htmlFor: "password",
                            className:
                              "block text-sm font-medium leading-6 text-gray-900",
                            children: "Password",
                          }),
                          d.jsx("div", {
                            className: "mt-2",
                            children: d.jsx("input", {
                              type: "password",
                              name: "password",
                              id: "password",
                              value: l.password,
                              onChange: i,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                              placeholder: "******",
                            }),
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "mb-2",
                        children: [
                          d.jsx("label", {
                            htmlFor: "email",
                            className:
                              "block text-sm font-medium leading-6 text-gray-900",
                            children: "Email",
                          }),
                          d.jsx("div", {
                            className: "mt-2",
                            children: d.jsx("input", {
                              type: "email",
                              name: "email",
                              id: "email",
                              value: l.email,
                              onChange: i,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                              placeholder: "janesmith@example.com",
                            }),
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "mb-2",
                        children: [
                          d.jsx("label", {
                            htmlFor: "age",
                            className:
                              "block text-sm font-medium leading-6 text-gray-900",
                            children: "Age",
                          }),
                          d.jsx("div", {
                            className: "mt-2",
                            children: d.jsx("input", {
                              type: "text",
                              name: "age",
                              id: "age",
                              value: l.age,
                              onChange: i,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                              placeholder: "23",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "mb-2 ml-4 mr-4",
                    children: [
                      d.jsx("label", {
                        htmlFor: "gender",
                        className:
                          "block text-sm font-medium leading-6 text-gray-900",
                        children: "Gender",
                      }),
                      d.jsxs("select", {
                        id: "gender",
                        name: "gender",
                        value: l.gender,
                        onChange: i,
                        className:
                          "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",
                        children: [
                          d.jsx("option", {
                            value: "",
                            selected: !0,
                            disabled: !0,
                            hidden: !0,
                            children: "Choose here",
                          }),
                          d.jsx("option", { children: "Male" }),
                          d.jsx("option", { children: "Female" }),
                          d.jsx("option", { children: "Other" }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "mb-2 ml-4 mr-4",
                    children: [
                      d.jsx("label", {
                        htmlFor: "role",
                        className:
                          "block text-sm font-medium leading-6 text-gray-900",
                        children: "Role",
                      }),
                      d.jsxs("select", {
                        id: "role",
                        name: "role",
                        value: l.role,
                        onChange: i,
                        className:
                          "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",
                        children: [
                          d.jsx("option", {
                            value: "",
                            selected: !0,
                            disabled: !0,
                            hidden: !0,
                            children: "Choose here",
                          }),
                          d.jsx("option", { children: "ROLE_ADMIN" }),
                          d.jsx("option", { children: "ROLE_MOD" }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className:
                      "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",
                    children: [
                      d.jsx("button", {
                        type: "button",
                        className:
                          "inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto",
                        onClick: s,
                        children: "Add",
                      }),
                      d.jsx("button", {
                        type: "button",
                        className:
                          "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                        onClick: () => t(!1),
                        ref: r,
                        children: "Cancel",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
function oy(...e) {
  return e.filter(Boolean).join(" ");
}
function iy({ searchQuery: e }) {
  const [t, n] = y.useState([]),
    [r, l] = y.useState(null),
    [o, i] = y.useState("error"),
    [s, u] = y.useState(!1),
    a = (g) => g.filter((k) => k.role === "ROLE_USER").length,
    f = (g) =>
      g.filter((k) => k.role === "ROLE_ADMIN" || k.role === "ROLE_MOD").length,
    c = [
      { name: "Number of users", value: t ? a(t).toString() : "0" },
      { name: "Number of admins", value: t ? f(t).toString() : "0" },
      { name: "Connect time", value: r !== null ? r : "0", unit: "seconds" },
      { name: "API", value: "api/v1/person" },
    ],
    v = t.filter(
      (g) =>
        g.name.toLowerCase().includes(e.toLowerCase()) ||
        g.surname.toLowerCase().includes(e.toLowerCase()),
    ),
    x = async () => {
      try {
        const g = performance.now(),
          k = await Q.get("https://gokdis.ecosys.eu/api/v1/person", {
            auth: { username: "helen@gokdis.ecosys.eu", password: "helen" },
          }),
          p = ((performance.now() - g) / 1e3).toFixed(2);
        Array.isArray(k.data)
          ? (n(k.data), l(p), i("success"))
          : (console.log("Authorization error"), i("error"));
      } catch (g) {
        console.error("Error fetching persons data:", g), i("error");
      }
    },
    w = async (g) => {
      const k = g.email;
      try {
        (
          await Q.delete("https://gokdis.ecosys.eu/api/v1/person/" + k, {
            auth: { username: "helen@gokdis.ecosys.eu", password: "helen" },
          })
        ).status === 200 && x();
      } catch {}
    };
  return (
    y.useEffect(() => {
      x();
    }, []),
    d.jsxs(d.Fragment, {
      children: [
        d.jsx(ly, { open: s, setOpen: u, fetchPerson: x }),
        d.jsxs("main", {
          children: [
            d.jsxs("header", {
              children: [
                d.jsx("div", {
                  className:
                    "flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8",
                  children: d.jsx("div", {
                    children: d.jsxs("div", {
                      className: "flex items-center gap-x-3",
                      children: [
                        d.jsx("div", {
                          className: `flex-none rounded-full ${o === "error" ? "bg-red-400/10 p-1 text-red-400" : "bg-green-400/10 p-1 text-green-400"}`,
                          children: d.jsx("div", {
                            className: "h-2 w-2 rounded-full bg-current",
                          }),
                        }),
                        d.jsxs("h1", {
                          className: "flex gap-x-3 text-base leading-7",
                          children: [
                            d.jsx("span", {
                              className: "font-semibold text-white",
                              children: "Server status",
                            }),
                            d.jsx("span", {
                              className: "text-gray-600",
                              children: "/",
                            }),
                            d.jsx("span", {
                              className: "font-semibold text-white",
                              children: "Spring",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                d.jsx("div", {
                  className:
                    "grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4",
                  children: c.map((g, k) =>
                    d.jsxs(
                      "div",
                      {
                        className: oy(
                          k % 2 === 1
                            ? "sm:border-l"
                            : k === 2
                              ? "lg:border-l"
                              : "",
                          "border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8",
                        ),
                        children: [
                          d.jsx("p", {
                            className:
                              "text-sm font-medium leading-6 text-gray-400",
                            children: g.name,
                          }),
                          d.jsxs("p", {
                            className: "mt-2 flex items-baseline gap-x-2",
                            children: [
                              d.jsx("span", {
                                className:
                                  "text-4xl font-semibold tracking-tight text-white",
                                children: g.value,
                              }),
                              g.unit
                                ? d.jsx("span", {
                                    className: "text-sm text-gray-400",
                                    children: g.unit,
                                  })
                                : null,
                            ],
                          }),
                        ],
                      },
                      g.name,
                    ),
                  ),
                }),
              ],
            }),
            d.jsx("div", {
              className: "",
              children: d.jsx("div", {
                className: "mx-auto ",
                children: d.jsx("div", {
                  className: " py-10",
                  children: d.jsxs("div", {
                    className: "px-4 sm:px-6 lg:px-8",
                    children: [
                      d.jsxs("div", {
                        className: "sm:flex sm:items-center",
                        children: [
                          d.jsxs("div", {
                            className: "sm:flex-auto",
                            children: [
                              d.jsx("h1", {
                                className:
                                  "text-base font-semibold leading-6 text-white",
                                children: "Users",
                              }),
                              d.jsx("p", {
                                className: "mt-2 text-sm text-gray-300",
                                children:
                                  "A list of all the users including their role, name, email and age.",
                              }),
                            ],
                          }),
                          d.jsx("div", {
                            className: "mt-4 sm:ml-4 sm:mt-0 sm:flex-none",
                            children: d.jsx("button", {
                              type: "button",
                              className:
                                "block rounded-md bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500",
                              onClick: () => u(!0),
                              children: "Add user",
                            }),
                          }),
                          d.jsx("div", {
                            className: "mt-4 sm:ml-4 sm:mt-0 sm:flex-none",
                          }),
                        ],
                      }),
                      d.jsx("div", {
                        className: "mt-8 flow-root",
                        children: d.jsx("div", {
                          className:
                            "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
                          children: d.jsx("div", {
                            className:
                              "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",
                            children: d.jsxs("table", {
                              className: "min-w-full divide-y divide-gray-700",
                              children: [
                                d.jsx("thead", {
                                  children: d.jsxs("tr", {
                                    children: [
                                      d.jsx("th", {
                                        scope: "col",
                                        className:
                                          "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0",
                                        children: "Role",
                                      }),
                                      d.jsx("th", {
                                        scope: "col",
                                        className:
                                          "px-3 py-3.5 text-left text-sm font-semibold text-white",
                                        children: "Name",
                                      }),
                                      d.jsx("th", {
                                        scope: "col",
                                        className:
                                          "px-3 py-3.5 text-left text-sm font-semibold text-white",
                                        children: "Surname",
                                      }),
                                      d.jsx("th", {
                                        scope: "col",
                                        className:
                                          "px-3 py-3.5 text-left text-sm font-semibold text-white",
                                        children: "Email",
                                      }),
                                      d.jsx("th", {
                                        scope: "col",
                                        className:
                                          "px-3 py-3.5 text-left text-sm font-semibold text-white",
                                        children: "Age",
                                      }),
                                      d.jsx("th", {
                                        scope: "col",
                                        className:
                                          "px-3 py-3.5 text-left text-sm font-semibold text-white",
                                        children: "Gender",
                                      }),
                                      d.jsx("th", {
                                        scope: "col",
                                        className:
                                          "relative py-3.5 pl-3 pr-4 sm:pr-0",
                                        children: d.jsx("span", {
                                          className: "sr-only",
                                          children: "Remove",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                t &&
                                  t.length > 0 &&
                                  d.jsx("tbody", {
                                    className: "divide-y divide-gray-800",
                                    children: v.map((g) =>
                                      d.jsxs(
                                        "tr",
                                        {
                                          children: [
                                            d.jsx("td", {
                                              className:
                                                "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0",
                                              children: g.role,
                                            }),
                                            d.jsx("td", {
                                              className:
                                                "whitespace-nowrap px-3 py-4 text-sm text-gray-300",
                                              children: g.name,
                                            }),
                                            d.jsx("td", {
                                              className:
                                                "whitespace-nowrap px-3 py-4 text-sm text-gray-300",
                                              children: g.surname,
                                            }),
                                            d.jsx("td", {
                                              className:
                                                "whitespace-nowrap px-3 py-4 text-sm text-gray-300",
                                              children: g.email,
                                            }),
                                            d.jsx("td", {
                                              className:
                                                "whitespace-nowrap px-3 py-4 text-sm text-gray-300",
                                              children: g.age,
                                            }),
                                            d.jsx("td", {
                                              className:
                                                "whitespace-nowrap px-3 py-4 text-sm text-gray-300",
                                              children: g.gender,
                                            }),
                                            d.jsx("td", {
                                              className:
                                                "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0",
                                              children: d.jsxs("a", {
                                                href: "#",
                                                className:
                                                  "text-red-400 hover:text-indigo-300",
                                                onClick: () => w(g),
                                                children: [
                                                  "Remove",
                                                  d.jsxs("span", {
                                                    className: "sr-only",
                                                    children: [", ", g.name],
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        },
                                        g.email,
                                      ),
                                    ),
                                  }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function sy() {
  return d.jsx(d.Fragment, { children: "Charts" });
}
function uy({ open: e, setOpen: t, fetchBeacon: n }) {
  const r = y.useRef(null),
    [l, o] = y.useState({ mac: "", id: "", x: "", y: "" }),
    i = (u) => {
      const { name: a, value: f } = u.target;
      o((c) => ({ ...c, [a]: f }));
    },
    s = async () => {
      try {
        const u = { ...l, x: parseInt(l.x, 10), y: parseInt(l.y, 10) },
          a = JSON.stringify(u);
        console.log(a);
        const f = await Q.post("https://gokdis.ecosys.eu/api/v1/beacon", a, {
          headers: { "Content-Type": "application/json" },
          auth: { username: "helen@gokdis.ecosys.eu", password: "helen" },
        });
        n(), t(!1);
      } catch (u) {
        console.error("Error updating beacon", u);
      }
    };
  return d.jsx(nt.Root, {
    show: e,
    as: y.Fragment,
    children: d.jsxs(Vt, {
      as: "div",
      className: "relative z-10",
      initialFocus: r,
      onClose: t,
      children: [
        d.jsx(nt.Child, {
          as: y.Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: d.jsx("div", {
            className: "fixed inset-0 bg-opacity-75 transition-opacity",
          }),
        }),
        d.jsx("div", {
          className: "fixed inset-0 z-10 w-screen overflow-y-auto",
          children: d.jsx("div", {
            className:
              "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
            children: d.jsx(nt.Child, {
              as: y.Fragment,
              enter: "ease-out duration-300",
              enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              enterTo: "opacity-100 translate-y-0 sm:scale-100",
              leave: "ease-in duration-200",
              leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
              leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              children: d.jsxs(Vt.Panel, {
                className:
                  "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",
                children: [
                  d.jsx("div", {
                    className: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",
                    children: d.jsxs("div", {
                      className: "sm:flex sm:items-start",
                      children: [
                        d.jsx("div", {
                          className:
                            "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10",
                          children: d.jsx($f, {
                            className: "h-6 w-6 text-green-600",
                            "aria-hidden": "true",
                          }),
                        }),
                        d.jsx("div", {
                          className:
                            "mt-3 text-center sm:ml-4 sm:mt-2 sm:text-left",
                          children: d.jsx(Vt.Title, {
                            as: "h3",
                            className:
                              "text-base font-semibold leading-6 text-gray-900",
                            children: "Add beacon",
                          }),
                        }),
                      ],
                    }),
                  }),
                  d.jsxs("div", {
                    className: "ml-4 mr-4",
                    children: [
                      d.jsxs("div", {
                        className: "mb-2",
                        children: [
                          d.jsx("label", {
                            htmlFor: "mac",
                            className:
                              "block text-sm font-medium leading-6 text-gray-900",
                            children: "Mac",
                          }),
                          d.jsx("div", {
                            className: "mt-2",
                            children: d.jsx("input", {
                              type: "text",
                              name: "mac",
                              id: "mac",
                              value: l.mac,
                              onChange: i,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                              placeholder: "C7:10:69:07:FB:51",
                            }),
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "mb-2",
                        children: [
                          d.jsx("label", {
                            htmlFor: "id",
                            className:
                              "block text-sm font-medium leading-6 text-gray-900",
                            children: "Id",
                          }),
                          d.jsx("div", {
                            className: "mt-2",
                            children: d.jsx("input", {
                              type: "text",
                              name: "id",
                              id: "id",
                              value: l.id,
                              onChange: i,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                              placeholder: "10000",
                            }),
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "mb-2",
                        children: [
                          d.jsx("label", {
                            htmlFor: "x",
                            className:
                              "block text-sm font-medium leading-6 text-gray-900",
                            children: "X",
                          }),
                          d.jsx("div", {
                            className: "mt-2",
                            children: d.jsx("input", {
                              type: "text",
                              name: "x",
                              id: "x",
                              value: l.x,
                              onChange: i,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                              placeholder: "5",
                            }),
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "mb-2",
                        children: [
                          d.jsx("label", {
                            htmlFor: "y",
                            className:
                              "block text-sm font-medium leading-6 text-gray-900",
                            children: "Y",
                          }),
                          d.jsx("div", {
                            className: "mt-2",
                            children: d.jsx("input", {
                              type: "text",
                              name: "y",
                              id: "y",
                              value: l.y,
                              onChange: i,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                              placeholder: "5",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className:
                      "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",
                    children: [
                      d.jsx("button", {
                        type: "button",
                        className:
                          "inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto",
                        onClick: s,
                        children: "Add",
                      }),
                      d.jsx("button", {
                        type: "button",
                        className:
                          "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
                        onClick: () => t(!1),
                        ref: r,
                        children: "Cancel",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
function ay(...e) {
  return e.filter(Boolean).join(" ");
}
function cy({ searchQuery: e }) {
  const [t, n] = y.useState([]),
    [r, l] = y.useState(null),
    [o, i] = y.useState("error"),
    [s, u] = y.useState(!1),
    a = [
      { name: "Number of beacons", value: t ? t.length.toString() : "0" },
      { name: "RSSI at 1 meter", value: "-65", unit: "db" },
      { name: "Connect time", value: r !== null ? r : "0", unit: "seconds" },
      { name: "API", value: "api/v1/beacon" },
    ],
    f = t ? t.filter((x) => x.mac.toLowerCase().includes(e.toLowerCase())) : [],
    c = async () => {
      try {
        const x = performance.now(),
          w = await Q.get("https://gokdis.ecosys.eu/api/v1/beacon", {
            auth: { username: "helen@gokdis.ecosys.eu", password: "helen" },
          }),
          k = ((performance.now() - x) / 1e3).toFixed(2);
        Array.isArray(w.data)
          ? (n(w.data), l(k), i("success"))
          : (console.log("Authorization error"), i("error"));
      } catch (x) {
        console.error("Error fetching beacons data:", x), i("error");
      }
    },
    v = async (x) => {
      const w = x.mac;
      try {
        (
          await Q.delete("https://gokdis.ecosys.eu/api/v1/beacon/" + w, {
            auth: { username: "helen@gokdis.ecosys.eu", password: "helen" },
          })
        ).status === 200 && c();
      } catch {}
    };
  return (
    y.useEffect(() => {
      c();
    }, []),
    d.jsxs(d.Fragment, {
      children: [
        d.jsx(uy, { open: s, setOpen: u, fetchBeacon: c }),
        d.jsxs("main", {
          children: [
            d.jsxs("header", {
              children: [
                d.jsx("div", {
                  className:
                    "flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8",
                  children: d.jsx("div", {
                    children: d.jsxs("div", {
                      className: "flex items-center gap-x-3",
                      children: [
                        d.jsx("div", {
                          className: `flex-none rounded-full ${o === "error" ? "bg-red-400/10 p-1 text-red-400" : "bg-green-400/10 p-1 text-green-400"}`,
                          children: d.jsx("div", {
                            className: "h-2 w-2 rounded-full bg-current",
                          }),
                        }),
                        d.jsxs("h1", {
                          className: "flex gap-x-3 text-base leading-7",
                          children: [
                            d.jsx("span", {
                              className: "font-semibold text-white",
                              children: "Server status",
                            }),
                            d.jsx("span", {
                              className: "text-gray-600",
                              children: "/",
                            }),
                            d.jsx("span", {
                              className: "font-semibold text-white",
                              children: "Spring",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                d.jsx("div", {
                  className:
                    "grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4",
                  children: a.map((x, w) =>
                    d.jsxs(
                      "div",
                      {
                        className: ay(
                          w % 2 === 1
                            ? "sm:border-l"
                            : w === 2
                              ? "lg:border-l"
                              : "",
                          "border-t border-white/5 py-6 px-4 sm:px-6 lg:px-8",
                        ),
                        children: [
                          d.jsx("p", {
                            className:
                              "text-sm font-medium leading-6 text-gray-400",
                            children: x.name,
                          }),
                          d.jsxs("p", {
                            className: "mt-2 flex items-baseline gap-x-2",
                            children: [
                              d.jsx("span", {
                                className:
                                  "text-4xl font-semibold tracking-tight text-white",
                                children: x.value,
                              }),
                              x.unit
                                ? d.jsx("span", {
                                    className: "text-sm text-gray-400",
                                    children: x.unit,
                                  })
                                : null,
                            ],
                          }),
                        ],
                      },
                      x.name,
                    ),
                  ),
                }),
              ],
            }),
            d.jsx("div", {
              className: "",
              children: d.jsx("div", {
                className: "mx-auto ",
                children: d.jsx("div", {
                  className: " py-10",
                  children: d.jsxs("div", {
                    className: "px-4 sm:px-6 lg:px-8",
                    children: [
                      d.jsxs("div", {
                        className: "sm:flex sm:items-center",
                        children: [
                          d.jsxs("div", {
                            className: "sm:flex-auto",
                            children: [
                              d.jsx("h1", {
                                className:
                                  "text-base font-semibold leading-6 text-white",
                                children: "Beacons",
                              }),
                              d.jsx("p", {
                                className: "mt-2 text-sm text-gray-300",
                                children:
                                  "A list of all the beacons including their Mac, Id, and coordinates.",
                              }),
                            ],
                          }),
                          d.jsx("div", {
                            className: "mt-4 sm:ml-4 sm:mt-0 sm:flex-none",
                            children: d.jsx("button", {
                              type: "button",
                              className:
                                "block rounded-md bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500",
                              onClick: () => u(!0),
                              children: "Add beacon",
                            }),
                          }),
                          d.jsx("div", {
                            className: "mt-4 sm:ml-4 sm:mt-0 sm:flex-none",
                          }),
                        ],
                      }),
                      d.jsx("div", {
                        className: "mt-8 flow-root",
                        children: d.jsx("div", {
                          className:
                            "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
                          children: d.jsx("div", {
                            className:
                              "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",
                            children: d.jsxs("table", {
                              className: "min-w-full divide-y divide-gray-700",
                              children: [
                                d.jsx("thead", {
                                  children: d.jsxs("tr", {
                                    children: [
                                      d.jsx("th", {
                                        scope: "col",
                                        className:
                                          "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0",
                                        children: "Mac",
                                      }),
                                      d.jsx("th", {
                                        scope: "col",
                                        className:
                                          "px-3 py-3.5 text-left text-sm font-semibold text-white",
                                        children: "Id",
                                      }),
                                      d.jsx("th", {
                                        scope: "col",
                                        className:
                                          "px-3 py-3.5 text-left text-sm font-semibold text-white",
                                        children: "X",
                                      }),
                                      d.jsx("th", {
                                        scope: "col",
                                        className:
                                          "px-3 py-3.5 text-left text-sm font-semibold text-white",
                                        children: "Y",
                                      }),
                                      d.jsx("th", {
                                        scope: "col",
                                        className:
                                          "relative py-3.5 pl-3 pr-4 sm:pr-0",
                                        children: d.jsx("span", {
                                          className: "sr-only",
                                          children: "Remove",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                t &&
                                  t.length > 0 &&
                                  d.jsx("tbody", {
                                    className: "divide-y divide-gray-800",
                                    children: f.map((x) =>
                                      d.jsxs(
                                        "tr",
                                        {
                                          children: [
                                            d.jsx("td", {
                                              className:
                                                "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0",
                                              children: x.mac,
                                            }),
                                            d.jsx("td", {
                                              className:
                                                "whitespace-nowrap px-3 py-4 text-sm text-gray-300",
                                              children: x.id,
                                            }),
                                            d.jsx("td", {
                                              className:
                                                "whitespace-nowrap px-3 py-4 text-sm text-gray-300",
                                              children: x.x,
                                            }),
                                            d.jsx("td", {
                                              className:
                                                "whitespace-nowrap px-3 py-4 text-sm text-gray-300",
                                              children: x.y,
                                            }),
                                            d.jsx("td", {
                                              className:
                                                "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0",
                                              children: d.jsxs("a", {
                                                href: "#",
                                                className:
                                                  "text-red-400 hover:text-indigo-300",
                                                onClick: () => v(x),
                                                children: [
                                                  "Remove",
                                                  d.jsxs("span", {
                                                    className: "sr-only",
                                                    children: [", ", x.name],
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        },
                                        x.mac,
                                      ),
                                    ),
                                  }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function dy({ title: e, titleId: t, ...n }, r) {
  return y.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n,
    ),
    e ? y.createElement("title", { id: t }, e) : null,
    y.createElement("path", {
      fillRule: "evenodd",
      d: "M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z",
      clipRule: "evenodd",
    }),
  );
}
const fy = y.forwardRef(dy),
  py = fy;
function my({ title: e, titleId: t, ...n }, r) {
  return y.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n,
    ),
    e ? y.createElement("title", { id: t }, e) : null,
    y.createElement("path", {
      fillRule: "evenodd",
      d: "M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z",
      clipRule: "evenodd",
    }),
  );
}
const hy = y.forwardRef(my),
  gy = hy;
function vy({ setSearchQuery: e, setSidebarOpen: t }) {
  return d.jsx(d.Fragment, {
    children: d.jsxs("div", {
      className:
        "sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8",
      children: [
        d.jsxs("button", {
          type: "button",
          className: "-m-2.5 p-2.5 text-white xl:hidden",
          onClick: () => t(!0),
          children: [
            d.jsx("span", { className: "sr-only", children: "Open sidebar" }),
            d.jsx(py, { className: "h-5 w-5", "aria-hidden": "true" }),
          ],
        }),
        d.jsx("div", {
          className: "flex flex-1 gap-x-4 self-stretch lg:gap-x-6",
          children: d.jsxs("form", {
            className: "flex flex-1",
            action: "#",
            method: "GET",
            children: [
              d.jsx("label", {
                htmlFor: "search-field",
                className: "sr-only",
                children: "Search",
              }),
              d.jsxs("div", {
                className: "relative w-full",
                children: [
                  d.jsx(gy, {
                    className:
                      "pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500",
                    "aria-hidden": "true",
                  }),
                  d.jsx("input", {
                    id: "search-field",
                    className:
                      "block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm",
                    placeholder: "Search...",
                    type: "search",
                    name: "search",
                    onChange: (n) => e(n.target.value),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const Ja = [
  { name: "Users", href: "#", current: !0, icon: _g, component: "Users" },
  { name: "Beacons", href: "#", current: !1, icon: zg, component: "Beacons" },
  { name: "Charts", href: "#", current: !1, icon: Tg, component: "Charts" },
  { name: "Settings", href: "#", current: !1, icon: Fg, component: "Settings" },
];
function qa(...e) {
  return e.filter(Boolean).join(" ");
}
function yy() {
  const [e, t] = y.useState(!1),
    [n, r] = y.useState("Users"),
    [l, o] = y.useState(""),
    i = (s) => {
      r(s);
    };
  return d.jsx(d.Fragment, {
    children: d.jsxs("div", {
      children: [
        d.jsx(nt.Root, {
          show: e,
          as: y.Fragment,
          children: d.jsxs(Vt, {
            as: "div",
            className: "relative z-50 xl:hidden",
            onClose: t,
            children: [
              d.jsx(nt.Child, {
                as: y.Fragment,
                enter: "transition-opacity ease-linear duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "transition-opacity ease-linear duration-300",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: d.jsx("div", {
                  className: "fixed inset-0 bg-gray-900/80",
                }),
              }),
              d.jsx("div", {
                className: "fixed inset-0 flex",
                children: d.jsx(nt.Child, {
                  as: y.Fragment,
                  enter: "transition ease-in-out duration-300 transform",
                  enterFrom: "-translate-x-full",
                  enterTo: "translate-x-0",
                  leave: "transition ease-in-out duration-300 transform",
                  leaveFrom: "translate-x-0",
                  leaveTo: "-translate-x-full",
                  children: d.jsxs(Vt.Panel, {
                    className: "relative mr-16 flex w-full max-w-xs flex-1",
                    children: [
                      d.jsx(nt.Child, {
                        as: y.Fragment,
                        enter: "ease-in-out duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in-out duration-300",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: d.jsx("div", {
                          className:
                            "absolute left-full top-0 flex w-16 justify-center pt-5",
                          children: d.jsxs("button", {
                            type: "button",
                            className: "-m-2.5 p-2.5",
                            onClick: () => t(!1),
                            children: [
                              d.jsx("span", {
                                className: "sr-only",
                                children: "Close sidebar",
                              }),
                              d.jsx(Bg, {
                                className: "h-6 w-6 text-white",
                                "aria-hidden": "true",
                              }),
                            ],
                          }),
                        }),
                      }),
                      d.jsxs("div", {
                        className:
                          "flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10",
                        children: [
                          d.jsx("div", {
                            className: "flex h-16 shrink-0 items-center",
                            children: d.jsx("img", {
                              className: "h-8 w-auto",
                              src: "",
                              alt: "Logo",
                            }),
                          }),
                          d.jsx("nav", {
                            className: "flex flex-1 flex-col",
                            children: d.jsx("ul", {
                              role: "list",
                              className: "flex flex-1 flex-col gap-y-7",
                              children: d.jsx("li", {
                                children: d.jsx("ul", {
                                  role: "list",
                                  className: "-mx-2 space-y-1",
                                  children: Ja.map((s) =>
                                    d.jsx(
                                      "li",
                                      {
                                        onClick: () => i(s.component),
                                        children: d.jsxs("a", {
                                          href: s.href,
                                          className: qa(
                                            s.component === n
                                              ? "bg-gray-800 text-white"
                                              : "text-gray-400 hover:text-white hover:bg-gray-800",
                                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                                          ),
                                          children: [
                                            d.jsx(s.icon, {
                                              className: "h-6 w-6 shrink-0",
                                              "aria-hidden": "true",
                                            }),
                                            s.name,
                                          ],
                                        }),
                                      },
                                      s.name,
                                    ),
                                  ),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
        d.jsx("div", {
          className:
            "hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col",
          children: d.jsxs("div", {
            className:
              "flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5",
            children: [
              d.jsx("div", {
                className: "flex h-16 shrink-0 items-center",
                children: d.jsx("img", {
                  className: "h-8 w-auto",
                  src: "",
                  alt: "Logo",
                }),
              }),
              d.jsx("nav", {
                className: "flex flex-1 flex-col",
                children: d.jsx("ul", {
                  role: "list",
                  className: "flex flex-1 flex-col gap-y-7",
                  children: d.jsx("li", {
                    children: d.jsx("ul", {
                      role: "list",
                      className: "-mx-2 space-y-1",
                      children: Ja.map((s) =>
                        d.jsx(
                          "li",
                          {
                            onClick: () => i(s.component),
                            children: d.jsxs("a", {
                              href: s.href,
                              className: qa(
                                s.component === n
                                  ? "bg-gray-800 text-white"
                                  : "text-gray-400 hover:text-white hover:bg-gray-800",
                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                              ),
                              children: [
                                d.jsx(s.icon, {
                                  className: "h-6 w-6 shrink-0",
                                  "aria-hidden": "true",
                                }),
                                s.name,
                              ],
                            }),
                          },
                          s.name,
                        ),
                      ),
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
        d.jsxs("div", {
          className: "xl:pl-72",
          children: [
            d.jsx(vy, { setSearchQuery: o, setSidebarOpen: t }),
            d.jsxs("div", {
              className: "",
              children: [
                n === "Users" && d.jsx(iy, { searchQuery: l }),
                n === "Beacons" && d.jsx(cy, { searchQuery: l }),
                n === "Charts" && d.jsx(sy, {}),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
gi.createRoot(document.getElementById("root")).render(
  d.jsx($.StrictMode, { children: d.jsx(yy, {}) }),
);
