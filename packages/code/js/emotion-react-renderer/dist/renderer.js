var Oy = Object.create,
  Fo = Object.defineProperty,
  My = Object.getPrototypeOf,
  Ly = Object.prototype.hasOwnProperty,
  Ny = Object.getOwnPropertyNames,
  Ay = Object.getOwnPropertyDescriptor;
var Vf = (e) => Fo(e, "__esModule", { value: !0 });
var Se = (e, t) =>
    () => (t || (t = { exports: {} }, e(t.exports, t)), t.exports),
  Ry = (e, t) => {
    Vf(e);
    for (var n in t) Fo(e, n, { get: t[n], enumerable: !0 });
  },
  Vy = (e, t, n) => {
    if (Vf(e), t && typeof t == "object" || typeof t == "function") {
      for (let r of Ny(t)) {
        !Ly.call(e, r) && r !== "default" &&
          Fo(e, r, {
            get: () => t[r],
            enumerable: !(n = Ay(t, r)) || n.enumerable,
          });
      }
    }
    return e;
  },
  ut = (e) =>
    e && e.__esModule ? e : Vy(
      Fo(
        e != null
          ? Oy(My(e))
          : {},
        "default",
        { value: e, enumerable: !0 },
      ),
      e,
    );
var wu = Se((mC, Tc) => {
  "use strict";
  var _c = Object.getOwnPropertySymbols,
    b0 = Object.prototype.hasOwnProperty,
    I0 = Object.prototype.propertyIsEnumerable;
  function F0(e) {
    if (e == null) {
      throw new TypeError(
        "Object.assign cannot be called with null or undefined",
      );
    }
    return Object(e);
  }
  function j0() {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc");
      if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
      for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
      var r = Object.getOwnPropertyNames(t).map(function (i) {
        return t[i];
      });
      if (r.join("") !== "0123456789") return !1;
      var o = {};
      return "abcdefghijklmnopqrst".split("").forEach(function (i) {
        o[i] = i;
      }),
        Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst";
    } catch (i) {
      return !1;
    }
  }
  Tc.exports = j0() ? Object.assign : function (e, t) {
    for (var n, r = F0(e), o, i = 1; i < arguments.length; i++) {
      n = Object(arguments[i]);
      for (var a in n) b0.call(n, a) && (r[a] = n[a]);
      if (_c) {
        o = _c(n);
        for (var u = 0; u < o.length; u++) {
          I0.call(n, o[u]) && (r[o[u]] = n[o[u]]);
        }
      }
    }
    return r;
  };
});
var Uc = Se((R) => {
  "use strict";
  var xu = wu(), Cn = 60103, kc = 60106;
  R.Fragment = 60107;
  R.StrictMode = 60108;
  R.Profiler = 60114;
  var Oc = 60109, Mc = 60110, Lc = 60112;
  R.Suspense = 60113;
  var Nc = 60115, Ac = 60116;
  typeof Symbol == "function" && Symbol.for &&
    (Le = Symbol.for,
      Cn = Le("react.element"),
      kc = Le("react.portal"),
      R.Fragment = Le("react.fragment"),
      R.StrictMode = Le("react.strict_mode"),
      R.Profiler = Le("react.profiler"),
      Oc = Le("react.provider"),
      Mc = Le("react.context"),
      Lc = Le("react.forward_ref"),
      R.Suspense = Le("react.suspense"),
      Nc = Le("react.memo"),
      Ac = Le("react.lazy"));
  var Le, Rc = typeof Symbol == "function" && Symbol.iterator;
  function z0(e) {
    return e === null || typeof e != "object"
      ? null
      : (e = Rc && e[Rc] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  function wr(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    ) {
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Vc = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Dc = {};
  function Pn(e, t, n) {
    this.props = e, this.context = t, this.refs = Dc, this.updater = n || Vc;
  }
  Pn.prototype.isReactComponent = {};
  Pn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) {
      throw Error(wr(85));
    }
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Pn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function bc() {}
  bc.prototype = Pn.prototype;
  function Su(e, t, n) {
    this.props = e, this.context = t, this.refs = Dc, this.updater = n || Vc;
  }
  var Eu = Su.prototype = new bc();
  Eu.constructor = Su;
  xu(Eu, Pn.prototype);
  Eu.isPureReactComponent = !0;
  var Cu = { current: null },
    Ic = Object.prototype.hasOwnProperty,
    Fc = { key: !0, ref: !0, __self: !0, __source: !0 };
  function jc(e, t, n) {
    var r, o = {}, i = null, a = null;
    if (t != null) {
      for (
        r in t.ref !== void 0 && (a = t.ref),
          t.key !== void 0 && (i = "" + t.key),
          t
      ) {
        Ic.call(t, r) && !Fc.hasOwnProperty(r) && (o[r] = t[r]);
      }
    }
    var u = arguments.length - 2;
    if (u === 1) o.children = n;
    else if (1 < u) {
      for (var s = Array(u), l = 0; l < u; l++) s[l] = arguments[l + 2];
      o.children = s;
    }
    if (e && e.defaultProps) {
      for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
    }
    return {
      $$typeof: Cn,
      type: e,
      key: i,
      ref: a,
      props: o,
      _owner: Cu.current,
    };
  }
  function B0(e, t) {
    return {
      $$typeof: Cn,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function Pu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Cn;
  }
  function U0(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function (n) {
      return t[n];
    });
  }
  var zc = /\/+/g;
  function Tu(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? U0("" + e.key)
      : t.toString(36);
  }
  function ei(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else {
      switch (i) {
        case "string":
        case "number":
          a = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Cn:
            case kc:
              a = !0;
          }
      }
    }
    if (a) {
      return a = e,
        o = o(a),
        e = r === "" ? "." + Tu(a, 0) : r,
        Array.isArray(o)
          ? (n = "",
            e != null && (n = e.replace(zc, "$&/") + "/"),
            ei(o, t, n, "", function (l) {
              return l;
            }))
          : o != null &&
            (Pu(o) && (o = B0(
              o,
              n + (!o.key || a && a.key === o.key
                ? ""
                : ("" + o.key).replace(zc, "$&/") + "/") +
                e,
            )),
              t.push(o)),
        1;
    }
    if (a = 0, r = r === "" ? "." : r + ":", Array.isArray(e)) {
      for (var u = 0; u < e.length; u++) {
        i = e[u];
        var s = r + Tu(i, u);
        a += ei(i, t, n, s, o);
      }
    } else if (s = z0(e), typeof s == "function") {
      for (e = s.call(e), u = 0; !(i = e.next()).done;) {
        i = i.value, s = r + Tu(i, u++), a += ei(i, t, n, s, o);
      }
    } else if (i === "object") {
      throw t = "" + e,
        Error(wr(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t,
        ));
    }
    return a;
  }
  function ti(e, t, n) {
    if (e == null) return e;
    var r = [], o = 0;
    return ei(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
      r;
  }
  function $0(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(),
        e._status = 0,
        e._result = t,
        t.then(function (n) {
          e._status === 0 && (n = n.default, e._status = 1, e._result = n);
        }, function (n) {
          e._status === 0 && (e._status = 2, e._result = n);
        });
    }
    if (e._status === 1) return e._result;
    throw e._result;
  }
  var Bc = { current: null };
  function lt() {
    var e = Bc.current;
    if (e === null) throw Error(wr(321));
    return e;
  }
  var H0 = {
    ReactCurrentDispatcher: Bc,
    ReactCurrentBatchConfig: { transition: 0 },
    ReactCurrentOwner: Cu,
    IsSomeRendererActing: { current: !1 },
    assign: xu,
  };
  R.Children = {
    map: ti,
    forEach: function (e, t, n) {
      ti(e, function () {
        t.apply(this, arguments);
      }, n);
    },
    count: function (e) {
      var t = 0;
      return ti(e, function () {
        t++;
      }),
        t;
    },
    toArray: function (e) {
      return ti(e, function (t) {
        return t;
      }) || [];
    },
    only: function (e) {
      if (!Pu(e)) throw Error(wr(143));
      return e;
    },
  };
  R.Component = Pn;
  R.PureComponent = Su;
  R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H0;
  R.cloneElement = function (e, t, n) {
    if (e == null) throw Error(wr(267, e));
    var r = xu({}, e.props), o = e.key, i = e.ref, a = e._owner;
    if (t != null) {
      if (
        t.ref !== void 0 && (i = t.ref, a = Cu.current),
          t.key !== void 0 && (o = "" + t.key),
          e.type && e.type.defaultProps
      ) {
        var u = e.type.defaultProps;
      }
      for (s in t) {
        Ic.call(t, s) && !Fc.hasOwnProperty(s) &&
          (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
      }
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
      u = Array(s);
      for (var l = 0; l < s; l++) u[l] = arguments[l + 2];
      r.children = u;
    }
    return { $$typeof: Cn, type: e.type, key: o, ref: i, props: r, _owner: a };
  };
  R.createContext = function (e, t) {
    return t === void 0 && (t = null),
      e = {
        $$typeof: Mc,
        _calculateChangedBits: t,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      },
      e.Provider = { $$typeof: Oc, _context: e },
      e.Consumer = e;
  };
  R.createElement = jc;
  R.createFactory = function (e) {
    var t = jc.bind(null, e);
    return t.type = e, t;
  };
  R.createRef = function () {
    return { current: null };
  };
  R.forwardRef = function (e) {
    return { $$typeof: Lc, render: e };
  };
  R.isValidElement = Pu;
  R.lazy = function (e) {
    return { $$typeof: Ac, _payload: { _status: -1, _result: e }, _init: $0 };
  };
  R.memo = function (e, t) {
    return { $$typeof: Nc, type: e, compare: t === void 0 ? null : t };
  };
  R.useCallback = function (e, t) {
    return lt().useCallback(e, t);
  };
  R.useContext = function (e, t) {
    return lt().useContext(e, t);
  };
  R.useDebugValue = function () {};
  R.useEffect = function (e, t) {
    return lt().useEffect(e, t);
  };
  R.useImperativeHandle = function (e, t, n) {
    return lt().useImperativeHandle(e, t, n);
  };
  R.useLayoutEffect = function (e, t) {
    return lt().useLayoutEffect(e, t);
  };
  R.useMemo = function (e, t) {
    return lt().useMemo(e, t);
  };
  R.useReducer = function (e, t, n) {
    return lt().useReducer(e, t, n);
  };
  R.useRef = function (e) {
    return lt().useRef(e);
  };
  R.useState = function (e) {
    return lt().useState(e);
  };
  R.version = "17.0.1";
});
var Qt = Se((yC, $c) => {
  "use strict";
  $c.exports = Uc();
});
var Hc = Se((_u) => {
  "use strict";
  Object.defineProperty(_u, "__esModule", { value: !0 });
  function W0(e) {
    var t = {};
    return function (n) {
      return t[n] === void 0 && (t[n] = e(n)), t[n];
    };
  }
  _u.default = W0;
});
var Wc = Se((ku) => {
  "use strict";
  Object.defineProperty(ku, "__esModule", { value: !0 });
  function Y0(e) {
    return e && typeof e == "object" && "default" in e ? e.default : e;
  }
  var G0 = Y0(Hc()),
    K0 =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    X0 = G0(function (e) {
      return K0.test(e) ||
        e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 &&
          e.charCodeAt(2) < 91;
    });
  ku.default = X0;
});
var Kp = Se((V) => {
  "use strict";
  var Mn, Mr, Ci, ns;
  typeof performance == "object" && typeof performance.now == "function"
    ? ($p = performance,
      V.unstable_now = function () {
        return $p.now();
      })
    : (rs = Date,
      Hp = rs.now(),
      V.unstable_now = function () {
        return rs.now() - Hp;
      });
  var $p, rs, Hp;
  typeof window == "undefined" || typeof MessageChannel != "function"
    ? (Ln = null,
      os = null,
      is = function () {
        if (Ln !== null) {
          try {
            var e = V.unstable_now();
            Ln(!0, e), Ln = null;
          } catch (t) {
            throw setTimeout(is, 0), t;
          }
        }
      },
      Mn = function (e) {
        Ln !== null ? setTimeout(Mn, 0, e) : (Ln = e, setTimeout(is, 0));
      },
      Mr = function (e, t) {
        os = setTimeout(e, t);
      },
      Ci = function () {
        clearTimeout(os);
      },
      V.unstable_shouldYield = function () {
        return !1;
      },
      ns = V.unstable_forceFrameRate = function () {})
    : (Wp = window.setTimeout,
      Yp = window.clearTimeout,
      typeof console != "undefined" &&
      (Gp = window.cancelAnimationFrame,
        typeof window.requestAnimationFrame != "function" &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
        ),
        typeof Gp != "function" &&
        console.error(
          "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
        )),
      Lr = !1,
      Nr = null,
      Pi = -1,
      as = 5,
      us = 0,
      V.unstable_shouldYield = function () {
        return V.unstable_now() >= us;
      },
      ns = function () {},
      V.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
          : as = 0 < e ? Math.floor(1e3 / e) : 5;
      },
      ss = new MessageChannel(),
      Ti = ss.port2,
      ss.port1.onmessage = function () {
        if (Nr !== null) {
          var e = V.unstable_now();
          us = e + as;
          try {
            Nr(!0, e) ? Ti.postMessage(null) : (Lr = !1, Nr = null);
          } catch (t) {
            throw Ti.postMessage(null), t;
          }
        } else Lr = !1;
      },
      Mn = function (e) {
        Nr = e, Lr || (Lr = !0, Ti.postMessage(null));
      },
      Mr = function (e, t) {
        Pi = Wp(function () {
          e(V.unstable_now());
        }, t);
      },
      Ci = function () {
        Yp(Pi), Pi = -1;
      });
  var Ln, os, is, Wp, Yp, Gp, Lr, Nr, Pi, as, us, ss, Ti;
  function ls(e, t) {
    var n = e.length;
    e.push(t);
    e:
    for (;;) {
      var r = n - 1 >>> 1, o = e[r];
      if (o !== void 0 && 0 < _i(o, t)) e[r] = t, e[n] = o, n = r;
      else break e;
    }
  }
  function $e(e) {
    return e = e[0], e === void 0 ? null : e;
  }
  function ki(e) {
    var t = e[0];
    if (t !== void 0) {
      var n = e.pop();
      if (n !== t) {
        e[0] = n;
        e:
        for (var r = 0, o = e.length; r < o;) {
          var i = 2 * (r + 1) - 1, a = e[i], u = i + 1, s = e[u];
          if (a !== void 0 && 0 > _i(a, n)) {
            s !== void 0 && 0 > _i(s, a)
              ? (e[r] = s, e[u] = n, r = u)
              : (e[r] = a, e[i] = n, r = i);
          } else if (s !== void 0 && 0 > _i(s, n)) e[r] = s, e[u] = n, r = u;
          else break e;
        }
      }
      return t;
    }
    return null;
  }
  function _i(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return n !== 0 ? n : e.id - t.id;
  }
  var Ze = [], Ct = [], cx = 1, Ne = null, ue = 3, Oi = !1, nn = !1, Ar = !1;
  function fs(e) {
    for (var t = $e(Ct); t !== null;) {
      if (t.callback === null) ki(Ct);
      else if (t.startTime <= e) {
        ki(Ct), t.sortIndex = t.expirationTime, ls(Ze, t);
      } else break;
      t = $e(Ct);
    }
  }
  function cs(e) {
    if (Ar = !1, fs(e), !nn) {
      if ($e(Ze) !== null) nn = !0, Mn(ds);
      else {
        var t = $e(Ct);
        t !== null && Mr(cs, t.startTime - e);
      }
    }
  }
  function ds(e, t) {
    nn = !1, Ar && (Ar = !1, Ci()), Oi = !0;
    var n = ue;
    try {
      for (
        fs(t), Ne = $e(Ze);
        Ne !== null &&
        (!(Ne.expirationTime > t) || e && !V.unstable_shouldYield());
      ) {
        var r = Ne.callback;
        if (typeof r == "function") {
          Ne.callback = null, ue = Ne.priorityLevel;
          var o = r(Ne.expirationTime <= t);
          t = V.unstable_now(),
            typeof o == "function" ? Ne.callback = o : Ne === $e(Ze) && ki(Ze),
            fs(t);
        } else ki(Ze);
        Ne = $e(Ze);
      }
      if (Ne !== null) var i = !0;
      else {
        var a = $e(Ct);
        a !== null && Mr(cs, a.startTime - t), i = !1;
      }
      return i;
    } finally {
      Ne = null, ue = n, Oi = !1;
    }
  }
  var dx = ns;
  V.unstable_IdlePriority = 5;
  V.unstable_ImmediatePriority = 1;
  V.unstable_LowPriority = 4;
  V.unstable_NormalPriority = 3;
  V.unstable_Profiling = null;
  V.unstable_UserBlockingPriority = 2;
  V.unstable_cancelCallback = function (e) {
    e.callback = null;
  };
  V.unstable_continueExecution = function () {
    nn || Oi || (nn = !0, Mn(ds));
  };
  V.unstable_getCurrentPriorityLevel = function () {
    return ue;
  };
  V.unstable_getFirstCallbackNode = function () {
    return $e(Ze);
  };
  V.unstable_next = function (e) {
    switch (ue) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = ue;
    }
    var n = ue;
    ue = t;
    try {
      return e();
    } finally {
      ue = n;
    }
  };
  V.unstable_pauseExecution = function () {};
  V.unstable_requestPaint = dx;
  V.unstable_runWithPriority = function (e, t) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var n = ue;
    ue = e;
    try {
      return t();
    } finally {
      ue = n;
    }
  };
  V.unstable_scheduleCallback = function (e, t, n) {
    var r = V.unstable_now();
    switch (
      typeof n == "object" && n !== null
        ? (n = n.delay, n = typeof n == "number" && 0 < n ? r + n : r)
        : n = r, e
    ) {
      case 1:
        var o = -1;
        break;
      case 2:
        o = 250;
        break;
      case 5:
        o = 1073741823;
        break;
      case 4:
        o = 1e4;
        break;
      default:
        o = 5e3;
    }
    return o = n + o,
      e = {
        id: cx++,
        callback: t,
        priorityLevel: e,
        startTime: n,
        expirationTime: o,
        sortIndex: -1,
      },
      n > r
        ? (e.sortIndex = n,
          ls(Ct, e),
          $e(Ze) === null && e === $e(Ct) &&
          (Ar ? Ci() : Ar = !0, Mr(cs, n - r)))
        : (e.sortIndex = o, ls(Ze, e), nn || Oi || (nn = !0, Mn(ds))),
      e;
  };
  V.unstable_wrapCallback = function (e) {
    var t = ue;
    return function () {
      var n = ue;
      ue = t;
      try {
        return e.apply(this, arguments);
      } finally {
        ue = n;
      }
    };
  };
});
var Qp = Se((_C, Xp) => {
  "use strict";
  Xp.exports = Kp();
});
var Ih = Se((Ae) => {
  "use strict";
  var Mi = Qt(), $ = wu(), ee = Qp();
  function k(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    ) {
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  if (!Mi) throw Error(k(227));
  var Zp = new Set(), Rr = {};
  function rn(e, t) {
    Nn(e, t), Nn(e + "Capture", t);
  }
  function Nn(e, t) {
    for (Rr[e] = t, e = 0; e < t.length; e++) Zp.add(t[e]);
  }
  var ct =
      !(typeof window == "undefined" || typeof window.document == "undefined" ||
        typeof window.document.createElement == "undefined"),
    px =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    qp = Object.prototype.hasOwnProperty,
    Jp = {},
    ev = {};
  function vx(e) {
    return qp.call(ev, e)
      ? !0
      : qp.call(Jp, e)
      ? !1
      : px.test(e)
      ? ev[e] = !0
      : (Jp[e] = !0, !1);
  }
  function mx(e, t, n, r) {
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
          : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function hx(e, t, n, r) {
    if (t === null || typeof t == "undefined" || mx(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) {
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
    }
    return !1;
  }
  function ve(e, t, n, r, o, i, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
      this.attributeName = r,
      this.attributeNamespace = o,
      this.mustUseProperty = n,
      this.propertyName = e,
      this.type = t,
      this.sanitizeURL = i,
      this.removeEmptyString = a;
  }
  var oe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ").forEach(function (e) {
      oe[e] = new ve(e, 0, !1, e, null, !1, !1);
    });
  [["acceptCharset", "accept-charset"], ["className", "class"], [
    "htmlFor",
    "for",
  ], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    oe[t] = new ve(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    oe[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"]
    .forEach(function (e) {
      oe[e] = new ve(e, 2, !1, e, null, !1, !1);
    });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ").forEach(function (e) {
      oe[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    oe[e] = new ve(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    oe[e] = new ve(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    oe[e] = new ve(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    oe[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var ps = /[\-:]([a-z])/g;
  function vs(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ").forEach(function (e) {
      var t = e.replace(ps, vs);
      oe[t] = new ve(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ").forEach(function (e) {
      var t = e.replace(ps, vs);
      oe[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(ps, vs);
    oe[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    oe[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  oe.xlinkHref = new ve(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1,
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    oe[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function ms(e, t, n, r) {
    var o = oe.hasOwnProperty(t) ? oe[t] : null,
      i = o !== null
        ? o.type === 0
        : r
        ? !1
        : !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" ||
          t[1] !== "n" && t[1] !== "N");
    i ||
      (hx(t, n, o, r) && (n = null),
        r || o === null
          ? vx(t) &&
            (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : o.mustUseProperty
          ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n
          : (t = o.attributeName,
            r = o.attributeNamespace,
            n === null
              ? e.removeAttribute(t)
              : (o = o.type,
                n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var on = Mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Vr = 60103,
    an = 60106,
    Pt = 60107,
    hs = 60108,
    Dr = 60114,
    ys = 60109,
    gs = 60110,
    Li = 60112,
    br = 60113,
    Ni = 60120,
    Ai = 60115,
    ws = 60116,
    xs = 60121,
    Ss = 60128,
    tv = 60129,
    Es = 60130,
    Cs = 60131;
  typeof Symbol == "function" && Symbol.for &&
    (Z = Symbol.for,
      Vr = Z("react.element"),
      an = Z("react.portal"),
      Pt = Z("react.fragment"),
      hs = Z("react.strict_mode"),
      Dr = Z("react.profiler"),
      ys = Z("react.provider"),
      gs = Z("react.context"),
      Li = Z("react.forward_ref"),
      br = Z("react.suspense"),
      Ni = Z("react.suspense_list"),
      Ai = Z("react.memo"),
      ws = Z("react.lazy"),
      xs = Z("react.block"),
      Z("react.scope"),
      Ss = Z("react.opaque.id"),
      tv = Z("react.debug_trace_mode"),
      Es = Z("react.offscreen"),
      Cs = Z("react.legacy_hidden"));
  var Z, nv = typeof Symbol == "function" && Symbol.iterator;
  function Ir(e) {
    return e === null || typeof e != "object"
      ? null
      : (e = nv && e[nv] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ps;
  function Fr(e) {
    if (Ps === void 0) {
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ps = t && t[1] || "";
      }
    }
    return `
` + Ps + e;
  }
  var Ts = !1;
  function Ri(e, t) {
    if (!e || Ts) return "";
    Ts = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) {
        if (
          t = function () {
            throw Error();
          },
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct
        ) {
          try {
            Reflect.construct(t, []);
          } catch (s) {
            var r = s;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (s) {
            r = s;
          }
          e.call(t.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (s) {
          r = s;
        }
        e();
      }
    } catch (s) {
      if (s && r && typeof s.stack == "string") {
        for (
          var o = s.stack.split(`
`),
            i = r.stack.split(`
`),
            a = o.length - 1,
            u = i.length - 1;
          1 <= a && 0 <= u && o[a] !== i[u];
        ) {
          u--;
        }
        for (; 1 <= a && 0 <= u; a--, u--) {
          if (o[a] !== i[u]) {
            if (a !== 1 || u !== 1) {
              do if (a--, u--, 0 > u || o[a] !== i[u]) {
                return `
` + o[a].replace(" at new ", " at ");
              } while (1 <= a && 0 <= u);
            }
            break;
          }
        }
      }
    } finally {
      Ts = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Fr(e) : "";
  }
  function yx(e) {
    switch (e.tag) {
      case 5:
        return Fr(e.type);
      case 16:
        return Fr("Lazy");
      case 13:
        return Fr("Suspense");
      case 19:
        return Fr("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Ri(e.type, !1), e;
      case 11:
        return e = Ri(e.type.render, !1), e;
      case 22:
        return e = Ri(e.type._render, !1), e;
      case 1:
        return e = Ri(e.type, !0), e;
      default:
        return "";
    }
  }
  function An(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Pt:
        return "Fragment";
      case an:
        return "Portal";
      case Dr:
        return "Profiler";
      case hs:
        return "StrictMode";
      case br:
        return "Suspense";
      case Ni:
        return "SuspenseList";
    }
    if (typeof e == "object") {
      switch (e.$$typeof) {
        case gs:
          return (e.displayName || "Context") + ".Consumer";
        case ys:
          return (e._context.displayName || "Context") + ".Provider";
        case Li:
          var t = e.render;
          return t = t.displayName || t.name || "",
            e.displayName || (t !== ""
              ? "ForwardRef(" + t + ")"
              : "ForwardRef");
        case Ai:
          return An(e.type);
        case xs:
          return An(e._render);
        case ws:
          t = e._payload, e = e._init;
          try {
            return An(e(t));
          } catch (n) {}
      }
    }
    return null;
  }
  function Tt(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return e;
      default:
        return "";
    }
  }
  function rv(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio");
  }
  function gx(e) {
    var t = rv(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) && typeof n != "undefined" &&
      typeof n.get == "function" && typeof n.set == "function"
    ) {
      var o = n.get, i = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          r = "" + a, i.call(this, a);
        },
      }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (a) {
            r = "" + a;
          },
          stopTracking: function () {
            e._valueTracker = null, delete e[t];
          },
        };
    }
  }
  function Vi(e) {
    e._valueTracker || (e._valueTracker = gx(e));
  }
  function ov(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = rv(e) ? e.checked ? "true" : "false" : e.value),
      e = r,
      e !== n ? (t.setValue(e), !0) : !1;
  }
  function Di(e) {
    if (
      e = e || (typeof document != "undefined" ? document : void 0),
        typeof e == "undefined"
    ) {
      return null;
    }
    try {
      return e.activeElement || e.body;
    } catch (t) {
      return e.body;
    }
  }
  function _s(e, t) {
    var n = t.checked;
    return $({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function iv(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    n = Tt(t.value != null ? t.value : n),
      e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
      };
  }
  function av(e, t) {
    t = t.checked, t != null && ms(e, "checked", t, !1);
  }
  function Os(e, t) {
    av(e, t);
    var n = Tt(t.value), r = t.type;
    if (n != null) {
      r === "number"
        ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    } else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? ks(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && ks(e, t.type, Tt(t.defaultValue)),
      t.checked == null && t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
  }
  function uv(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(r !== "submit" && r !== "reset" ||
          t.value !== void 0 && t.value !== null)
      ) {
        return;
      }
      t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t;
    }
    n = e.name,
      n !== "" && (e.name = ""),
      e.defaultChecked = !!e._wrapperState.initialChecked,
      n !== "" && (e.name = n);
  }
  function ks(e, t, n) {
    (t !== "number" || Di(e.ownerDocument) !== e) &&
      (n == null
        ? e.defaultValue = "" + e._wrapperState.initialValue
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  function wx(e) {
    var t = "";
    return Mi.Children.forEach(e, function (n) {
      n != null && (t += n);
    }),
      t;
  }
  function Ms(e, t) {
    return e = $({ children: void 0 }, t),
      (t = wx(t.children)) && (e.children = t),
      e;
  }
  function Rn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) {
        o = t.hasOwnProperty("$" + e[n].value),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0);
      }
    } else {
      for (n = "" + Tt(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ls(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
    return $({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function sv(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(k(92));
        if (Array.isArray(n)) {
          if (!(1 >= n.length)) throw Error(k(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Tt(n) };
  }
  function lv(e, t) {
    var n = Tt(t.value), r = Tt(t.defaultValue);
    n != null &&
    (n = "" + n,
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function fv(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null &&
      (e.value = t);
  }
  var Ns = {
    html: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg",
  };
  function cv(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function As(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? cv(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var bi,
    dv = function (e) {
      return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
        : e;
    }(function (e, t) {
      if (e.namespaceURI !== Ns.svg || "innerHTML" in e) e.innerHTML = t;
      else {
        for (
          bi = bi || document.createElement("div"),
            bi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = bi.firstChild;
          e.firstChild;
        ) {
          e.removeChild(e.firstChild);
        }
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function jr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var zr = {
      animationIterationCount: !0,
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
    xx = ["Webkit", "ms", "Moz", "O"];
  Object.keys(zr).forEach(function (e) {
    xx.forEach(function (t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), zr[t] = zr[e];
    });
  });
  function pv(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || zr.hasOwnProperty(e) && zr[e]
      ? ("" + t).trim()
      : t + "px";
  }
  function vv(e, t) {
    e = e.style;
    for (var n in t) {
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, o = pv(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
      }
    }
  }
  var Sx = $({ menuitem: !0 }, {
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
  });
  function Rs(e, t) {
    if (t) {
      if (
        Sx[e] && (t.children != null || t.dangerouslySetInnerHTML != null)
      ) {
        throw Error(k(137, e));
      }
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(k(60));
        if (
          !(typeof t.dangerouslySetInnerHTML == "object" &&
            "__html" in t.dangerouslySetInnerHTML)
        ) {
          throw Error(k(61));
        }
      }
      if (t.style != null && typeof t.style != "object") throw Error(k(62));
    }
  }
  function Vs(e, t) {
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
  function Ds(e) {
    return e = e.target || e.srcElement || window,
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e;
  }
  var bs = null, Vn = null, Dn = null;
  function mv(e) {
    if (e = Br(e)) {
      if (typeof bs != "function") throw Error(k(280));
      var t = e.stateNode;
      t && (t = Ii(t), bs(e.stateNode, e.type, t));
    }
  }
  function hv(e) {
    Vn ? Dn ? Dn.push(e) : Dn = [e] : Vn = e;
  }
  function yv() {
    if (Vn) {
      var e = Vn, t = Dn;
      if (Dn = Vn = null, mv(e), t) for (e = 0; e < t.length; e++) mv(t[e]);
    }
  }
  function Is(e, t) {
    return e(t);
  }
  function gv(e, t, n, r, o) {
    return e(t, n, r, o);
  }
  function Fs() {}
  var wv = Is, un = !1, js = !1;
  function zs() {
    (Vn !== null || Dn !== null) && (Fs(), yv());
  }
  function Ex(e, t, n) {
    if (js) return e(t, n);
    js = !0;
    try {
      return wv(e, t, n);
    } finally {
      js = !1, zs();
    }
  }
  function Ur(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ii(n);
    if (r === null) return null;
    n = r[t];
    e:
    switch (t) {
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
        (e = e.type,
          r =
            !(e === "button" || e === "input" || e === "select" ||
              e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(k(231, t, typeof n));
    return n;
  }
  var Bs = !1;
  if (ct) {
    try {
      bn = {},
        Object.defineProperty(bn, "passive", {
          get: function () {
            Bs = !0;
          },
        }),
        window.addEventListener("test", bn, bn),
        window.removeEventListener("test", bn, bn);
    } catch (e) {
      Bs = !1;
    }
  }
  var bn;
  function Cx(e, t, n, r, o, i, a, u, s) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, l);
    } catch (d) {
      this.onError(d);
    }
  }
  var $r = !1,
    Fi = null,
    ji = !1,
    Us = null,
    Px = {
      onError: function (e) {
        $r = !0, Fi = e;
      },
    };
  function Tx(e, t, n, r, o, i, a, u, s) {
    $r = !1, Fi = null, Cx.apply(Px, arguments);
  }
  function _x(e, t, n, r, o, i, a, u, s) {
    if (Tx.apply(this, arguments), $r) {
      if ($r) {
        var l = Fi;
        $r = !1, Fi = null;
      } else throw Error(k(198));
      ji || (ji = !0, Us = l);
    }
  }
  function sn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do t = e, (t.flags & 1026) != 0 && (n = t.return), e = t.return; while (
        e
      );
    }
    return t.tag === 3 ? n : null;
  }
  function xv(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        t === null && (e = e.alternate, e !== null && (t = e.memoizedState)),
          t !== null
      ) {
        return t.dehydrated;
      }
    }
    return null;
  }
  function Sv(e) {
    if (sn(e) !== e) throw Error(k(188));
  }
  function kx(e) {
    var t = e.alternate;
    if (!t) {
      if (t = sn(e), t === null) throw Error(k(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t;;) {
      var o = n.return;
      if (o === null) break;
      var i = o.alternate;
      if (i === null) {
        if (r = o.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === i.child) {
        for (i = o.child; i;) {
          if (i === n) return Sv(o), e;
          if (i === r) return Sv(o), t;
          i = i.sibling;
        }
        throw Error(k(188));
      }
      if (n.return !== r.return) n = o, r = i;
      else {
        for (var a = !1, u = o.child; u;) {
          if (u === n) {
            a = !0, n = o, r = i;
            break;
          }
          if (u === r) {
            a = !0, r = o, n = i;
            break;
          }
          u = u.sibling;
        }
        if (!a) {
          for (u = i.child; u;) {
            if (u === n) {
              a = !0, n = i, r = o;
              break;
            }
            if (u === r) {
              a = !0, r = i, n = o;
              break;
            }
            u = u.sibling;
          }
          if (!a) throw Error(k(189));
        }
      }
      if (n.alternate !== r) throw Error(k(190));
    }
    if (n.tag !== 3) throw Error(k(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ev(e) {
    if (e = kx(e), !e) return null;
    for (var t = e;;) {
      if (t.tag === 5 || t.tag === 6) return t;
      if (t.child) t.child.return = t, t = t.child;
      else {
        if (t === e) break;
        for (; !t.sibling;) {
          if (!t.return || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return null;
  }
  function Cv(e, t) {
    for (var n = e.alternate; t !== null;) {
      if (t === e || t === n) return !0;
      t = t.return;
    }
    return !1;
  }
  var Pv,
    $s,
    Tv,
    _v,
    Hs = !1,
    qe = [],
    _t = null,
    kt = null,
    Ot = null,
    Hr = new Map(),
    Wr = new Map(),
    Yr = [],
    kv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit"
        .split(" ");
  function Ws(e, t, n, r, o) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n | 16,
      nativeEvent: o,
      targetContainers: [r],
    };
  }
  function Ov(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        _t = null;
        break;
      case "dragenter":
      case "dragleave":
        kt = null;
        break;
      case "mouseover":
      case "mouseout":
        Ot = null;
        break;
      case "pointerover":
      case "pointerout":
        Hr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wr.delete(t.pointerId);
    }
  }
  function Gr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
      ? (e = Ws(t, n, r, o, i),
        t !== null && (t = Br(t), t !== null && $s(t)),
        e)
      : (e.eventSystemFlags |= r,
        t = e.targetContainers,
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function Ox(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return _t = Gr(_t, e, t, n, r, o), !0;
      case "dragenter":
        return kt = Gr(kt, e, t, n, r, o), !0;
      case "mouseover":
        return Ot = Gr(Ot, e, t, n, r, o), !0;
      case "pointerover":
        var i = o.pointerId;
        return Hr.set(i, Gr(Hr.get(i) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return i = o.pointerId,
          Wr.set(i, Gr(Wr.get(i) || null, e, t, n, r, o)),
          !0;
    }
    return !1;
  }
  function Mx(e) {
    var t = ln(e.target);
    if (t !== null) {
      var n = sn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = xv(n), t !== null) {
            e.blockedOn = t,
              _v(e.lanePriority, function () {
                ee.unstable_runWithPriority(e.priority, function () {
                  Tv(n);
                });
              });
            return;
          }
        } else if (t === 3 && n.stateNode.hydrate) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function zi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = Ys(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        return t = Br(n), t !== null && $s(t), e.blockedOn = n, !1;
      }
      t.shift();
    }
    return !0;
  }
  function Mv(e, t, n) {
    zi(e) && n.delete(t);
  }
  function Lx() {
    for (Hs = !1; 0 < qe.length;) {
      var e = qe[0];
      if (e.blockedOn !== null) {
        e = Br(e.blockedOn), e !== null && Pv(e);
        break;
      }
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = Ys(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n !== null) {
          e.blockedOn = n;
          break;
        }
        t.shift();
      }
      e.blockedOn === null && qe.shift();
    }
    _t !== null && zi(_t) && (_t = null),
      kt !== null && zi(kt) && (kt = null),
      Ot !== null && zi(Ot) && (Ot = null),
      Hr.forEach(Mv),
      Wr.forEach(Mv);
  }
  function Kr(e, t) {
    e.blockedOn === t &&
      (e.blockedOn = null,
        Hs ||
        (Hs = !0,
          ee.unstable_scheduleCallback(ee.unstable_NormalPriority, Lx)));
  }
  function Lv(e) {
    function t(o) {
      return Kr(o, e);
    }
    if (0 < qe.length) {
      Kr(qe[0], e);
      for (var n = 1; n < qe.length; n++) {
        var r = qe[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      _t !== null && Kr(_t, e),
        kt !== null && Kr(kt, e),
        Ot !== null && Kr(Ot, e),
        Hr.forEach(t),
        Wr.forEach(t),
        n = 0;
      n < Yr.length;
      n++
    ) {
      r = Yr[n], r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < Yr.length && (n = Yr[0], n.blockedOn === null);) {
      Mx(n), n.blockedOn === null && Yr.shift();
    }
  }
  function Bi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
      n["Webkit" + e] = "webkit" + t,
      n["Moz" + e] = "moz" + t,
      n;
  }
  var In = {
      animationend: Bi("Animation", "AnimationEnd"),
      animationiteration: Bi("Animation", "AnimationIteration"),
      animationstart: Bi("Animation", "AnimationStart"),
      transitionend: Bi("Transition", "TransitionEnd"),
    },
    Gs = {},
    Nv = {};
  ct &&
    (Nv = document.createElement("div").style,
      "AnimationEvent" in window ||
      (delete In.animationend.animation,
        delete In.animationiteration.animation,
        delete In.animationstart.animation),
      "TransitionEvent" in window || delete In.transitionend.transition);
  function Ui(e) {
    if (Gs[e]) return Gs[e];
    if (!In[e]) return e;
    var t = In[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Nv) return Gs[e] = t[n];
    return e;
  }
  var Av = Ui("animationend"),
    Rv = Ui("animationiteration"),
    Vv = Ui("animationstart"),
    Dv = Ui("transitionend"),
    bv = new Map(),
    Ks = new Map(),
    Nx = [
      "abort",
      "abort",
      Av,
      "animationEnd",
      Rv,
      "animationIteration",
      Vv,
      "animationStart",
      "canplay",
      "canPlay",
      "canplaythrough",
      "canPlayThrough",
      "durationchange",
      "durationChange",
      "emptied",
      "emptied",
      "encrypted",
      "encrypted",
      "ended",
      "ended",
      "error",
      "error",
      "gotpointercapture",
      "gotPointerCapture",
      "load",
      "load",
      "loadeddata",
      "loadedData",
      "loadedmetadata",
      "loadedMetadata",
      "loadstart",
      "loadStart",
      "lostpointercapture",
      "lostPointerCapture",
      "playing",
      "playing",
      "progress",
      "progress",
      "seeking",
      "seeking",
      "stalled",
      "stalled",
      "suspend",
      "suspend",
      "timeupdate",
      "timeUpdate",
      Dv,
      "transitionEnd",
      "waiting",
      "waiting",
    ];
  function Xs(e, t) {
    for (var n = 0; n < e.length; n += 2) {
      var r = e[n], o = e[n + 1];
      o = "on" + (o[0].toUpperCase() + o.slice(1)),
        Ks.set(r, t),
        bv.set(r, o),
        rn(o, [r]);
    }
  }
  var Ax = ee.unstable_now;
  Ax();
  var F = 8;
  function Fn(e) {
    if ((1 & e) != 0) return F = 15, 1;
    if ((2 & e) != 0) return F = 14, 2;
    if ((4 & e) != 0) return F = 13, 4;
    var t = 24 & e;
    return t !== 0
      ? (F = 12, t)
      : (e & 32) != 0
      ? (F = 11, 32)
      : (t = 192 & e,
        t !== 0
          ? (F = 10, t)
          : (e & 256) != 0
          ? (F = 9, 256)
          : (t = 3584 & e,
            t !== 0
              ? (F = 8, t)
              : (e & 4096) != 0
              ? (F = 7, 4096)
              : (t = 4186112 & e,
                t !== 0
                  ? (F = 6, t)
                  : (t = 62914560 & e,
                    t !== 0
                      ? (F = 5, t)
                      : e & 67108864
                      ? (F = 4, 67108864)
                      : (e & 134217728) != 0
                      ? (F = 3, 134217728)
                      : (t = 805306368 & e,
                        t !== 0
                          ? (F = 2, t)
                          : (1073741824 & e) != 0
                          ? (F = 1, 1073741824)
                          : (F = 8, e))))));
  }
  function Rx(e) {
    switch (e) {
      case 99:
        return 15;
      case 98:
        return 10;
      case 97:
      case 96:
        return 8;
      case 95:
        return 2;
      default:
        return 0;
    }
  }
  function Vx(e) {
    switch (e) {
      case 15:
      case 14:
        return 99;
      case 13:
      case 12:
      case 11:
      case 10:
        return 98;
      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;
      case 3:
      case 2:
      case 1:
        return 95;
      case 0:
        return 90;
      default:
        throw Error(k(358, e));
    }
  }
  function Xr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return F = 0;
    var r = 0,
      o = 0,
      i = e.expiredLanes,
      a = e.suspendedLanes,
      u = e.pingedLanes;
    if (i !== 0) r = i, o = F = 15;
    else if (i = n & 134217727, i !== 0) {
      var s = i & ~a;
      s !== 0 ? (r = Fn(s), o = F) : (u &= i, u !== 0 && (r = Fn(u), o = F));
    } else {
      i = n & ~a, i !== 0 ? (r = Fn(i), o = F) : u !== 0 && (r = Fn(u), o = F);
    }
    if (r === 0) return 0;
    if (
      r = 31 - Mt(r),
        r = n & ((0 > r ? 0 : 1 << r) << 1) - 1,
        t !== 0 && t !== r && (t & a) == 0
    ) {
      if (Fn(t), o <= F) return t;
      F = o;
    }
    if (t = e.entangledLanes, t !== 0) {
      for (e = e.entanglements, t &= r; 0 < t;) {
        n = 31 - Mt(t), o = 1 << n, r |= e[n], t &= ~o;
      }
    }
    return r;
  }
  function Iv(e) {
    return e = e.pendingLanes & -1073741825,
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function $i(e, t) {
    switch (e) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return e = jn(24 & ~t), e === 0 ? $i(10, t) : e;
      case 10:
        return e = jn(192 & ~t), e === 0 ? $i(8, t) : e;
      case 8:
        return e = jn(3584 & ~t),
          e === 0 && (e = jn(4186112 & ~t), e === 0 && (e = 512)),
          e;
      case 2:
        return t = jn(805306368 & ~t), t === 0 && (t = 268435456), t;
    }
    throw Error(k(358, e));
  }
  function jn(e) {
    return e & -e;
  }
  function Qs(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Hi(e, t, n) {
    e.pendingLanes |= t;
    var r = t - 1;
    e.suspendedLanes &= r,
      e.pingedLanes &= r,
      e = e.eventTimes,
      t = 31 - Mt(t),
      e[t] = n;
  }
  var Mt = Math.clz32 ? Math.clz32 : Dx, bx = Math.log, Ix = Math.LN2;
  function Dx(e) {
    return e === 0 ? 32 : 31 - (bx(e) / Ix | 0) | 0;
  }
  var Fx = ee.unstable_UserBlockingPriority,
    jx = ee.unstable_runWithPriority,
    Wi = !0;
  function zx(e, t, n, r) {
    un || Fs();
    var o = Zs, i = un;
    un = !0;
    try {
      gv(o, e, t, n, r);
    } finally {
      (un = i) || zs();
    }
  }
  function Bx(e, t, n, r) {
    jx(Fx, Zs.bind(null, e, t, n, r));
  }
  function Zs(e, t, n, r) {
    if (Wi) {
      var o;
      if (
        (o = (t & 4) == 0) && 0 < qe.length && -1 < kv.indexOf(e)
      ) {
        e = Ws(null, e, t, n, r), qe.push(e);
      } else {
        var i = Ys(e, t, n, r);
        if (i === null) o && Ov(e, r);
        else {
          if (o) {
            if (-1 < kv.indexOf(e)) {
              e = Ws(i, e, t, n, r), qe.push(e);
              return;
            }
            if (Ox(i, e, t, n, r)) return;
            Ov(e, r);
          }
          Fv(e, t, r, null, n);
        }
      }
    }
  }
  function Ys(e, t, n, r) {
    var o = Ds(r);
    if (o = ln(o), o !== null) {
      var i = sn(o);
      if (i === null) o = null;
      else {
        var a = i.tag;
        if (a === 13) {
          if (o = xv(i), o !== null) return o;
          o = null;
        } else if (a === 3) {
          if (i.stateNode.hydrate) {
            return i.tag === 3
              ? i.stateNode.containerInfo
              : null;
          }
          o = null;
        } else i !== o && (o = null);
      }
    }
    return Fv(e, t, r, o, n), null;
  }
  var Lt = null, qs = null, Yi = null;
  function jv() {
    if (Yi) return Yi;
    var e,
      t = qs,
      n = t.length,
      r,
      o = "value" in Lt ? Lt.value : Lt.textContent,
      i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
    return Yi = o.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Gi(e) {
    var t = e.keyCode;
    return "charCode" in e
      ? (e = e.charCode, e === 0 && t === 13 && (e = 13))
      : e = t,
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0;
  }
  function Ki() {
    return !0;
  }
  function zv() {
    return !1;
  }
  function Te(e) {
    function t(n, r, o, i, a) {
      this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = a,
        this.currentTarget = null;
      for (var u in e) {
        e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
      }
      return this.isDefaultPrevented = (i.defaultPrevented != null
          ? i.defaultPrevented
          : i.returnValue === !1)
        ? Ki
        : zv,
        this.isPropagationStopped = zv,
        this;
    }
    return $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault
          ? n.preventDefault()
          : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          this.isDefaultPrevented = Ki);
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n && (n.stopPropagation
          ? n.stopPropagation()
          : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          this.isPropagationStopped = Ki);
      },
      persist: function () {},
      isPersistent: Ki,
    }),
      t;
  }
  var zn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Js = Te(zn),
    Qr = $({}, zn, { view: 0, detail: 0 }),
    Ux = Te(Qr),
    el,
    tl,
    Zr,
    Xi = $({}, Qr, {
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
      getModifierState: nl,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement ? e.toElement : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Zr && (Zr && e.type === "mousemove"
            ? (el = e.screenX - Zr.screenX, tl = e.screenY - Zr.screenY)
            : tl = el = 0,
            Zr = e),
            el);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : tl;
      },
    }),
    Bv = Te(Xi),
    $x = $({}, Xi, { dataTransfer: 0 }),
    Hx = Te($x),
    Wx = $({}, Qr, { relatedTarget: 0 }),
    rl = Te(Wx),
    Yx = $({}, zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gx = Te(Yx),
    Kx = $({}, zn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Xx = Te(Kx),
    Qx = $({}, zn, { data: 0 }),
    Uv = Te(Qx),
    Zx = {
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
    qx = {
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
    Jx = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function eS(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Jx[e])
      ? !!t[e]
      : !1;
  }
  function nl() {
    return eS;
  }
  var tS = $({}, Qr, {
      key: function (e) {
        if (e.key) {
          var t = Zx[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? (e = Gi(e), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? qx[e.keyCode] || "Unidentified"
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
      getModifierState: nl,
      charCode: function (e) {
        return e.type === "keypress" ? Gi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Gi(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    nS = Te(tS),
    rS = $({}, Xi, {
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
    $v = Te(rS),
    oS = $({}, Qr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: nl,
    }),
    iS = Te(oS),
    aS = $({}, zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    uS = Te(aS),
    sS = $({}, Xi, {
      deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    lS = Te(sS),
    fS = [9, 13, 27, 32],
    ol = ct && "CompositionEvent" in window,
    qr = null;
  ct && "documentMode" in document && (qr = document.documentMode);
  var cS = ct && "TextEvent" in window && !qr,
    Hv = ct && (!ol || qr && 8 < qr && 11 >= qr),
    Wv = String.fromCharCode(32),
    Yv = !1;
  function Gv(e, t) {
    switch (e) {
      case "keyup":
        return fS.indexOf(t.keyCode) !== -1;
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
  function Kv(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Bn = !1;
  function dS(e, t) {
    switch (e) {
      case "compositionend":
        return Kv(t);
      case "keypress":
        return t.which !== 32 ? null : (Yv = !0, Wv);
      case "textInput":
        return e = t.data, e === Wv && Yv ? null : e;
      default:
        return null;
    }
  }
  function pS(e, t) {
    if (Bn) {
      return e === "compositionend" || !ol && Gv(e, t)
        ? (e = jv(), Yi = qs = Lt = null, Bn = !1, e)
        : null;
    }
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Hv && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var vS = {
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
  function Xv(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!vS[e.type] : t === "textarea";
  }
  function Qv(e, t, n, r) {
    hv(r),
      t = Qi(t, "onChange"),
      0 < t.length &&
      (n = new Js("onChange", "change", null, n, r),
        e.push({ event: n, listeners: t }));
  }
  var Jr = null, eo = null;
  function mS(e) {
    Zv(e, 0);
  }
  function Zi(e) {
    var t = Un(e);
    if (ov(t)) return e;
  }
  function hS(e, t) {
    if (e === "change") return t;
  }
  var qv = !1;
  ct &&
    (ct
      ? (Ji = "oninput" in document,
        Ji ||
        (il = document.createElement("div"),
          il.setAttribute("oninput", "return;"),
          Ji = typeof il.oninput == "function"),
        qi = Ji)
      : qi = !1,
      qv = qi && (!document.documentMode || 9 < document.documentMode));
  var qi, Ji, il;
  function em() {
    Jr && (Jr.detachEvent("onpropertychange", Jv), eo = Jr = null);
  }
  function Jv(e) {
    if (e.propertyName === "value" && Zi(eo)) {
      var t = [];
      if (Qv(t, eo, e, Ds(e)), e = mS, un) e(t);
      else {
        un = !0;
        try {
          Is(e, t);
        } finally {
          un = !1, zs();
        }
      }
    }
  }
  function yS(e, t, n) {
    e === "focusin"
      ? (em(), Jr = t, eo = n, Jr.attachEvent("onpropertychange", Jv))
      : e === "focusout" && em();
  }
  function gS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") {
      return Zi(eo);
    }
  }
  function wS(e, t) {
    if (e === "click") return Zi(t);
  }
  function xS(e, t) {
    if (e === "input" || e === "change") return Zi(t);
  }
  function SS(e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
  }
  var Re = typeof Object.is == "function" ? Object.is : SS,
    ES = Object.prototype.hasOwnProperty;
  function to(e, t) {
    if (Re(e, t)) return !0;
    if (
      typeof e != "object" || e === null || typeof t != "object" || t === null
    ) {
      return !1;
    }
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      if (!ES.call(t, n[r]) || !Re(e[n[r]], t[n[r]])) {
        return !1;
      }
    }
    return !0;
  }
  function tm(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function nm(e, t) {
    var n = tm(e);
    e = 0;
    for (var r; n;) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) {
          return { node: n, offset: t - e };
        }
        e = r;
      }
      e: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = tm(n);
    }
  }
  function rm(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? rm(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function om() {
    for (var e = window, t = Di(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch (r) {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Di(e.document);
    }
    return t;
  }
  function al(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t &&
      (t === "input" &&
          (e.type === "text" || e.type === "search" || e.type === "tel" ||
            e.type === "url" || e.type === "password") ||
        t === "textarea" || e.contentEditable === "true");
  }
  var CS = ct && "documentMode" in document && 11 >= document.documentMode,
    $n = null,
    ul = null,
    no = null,
    sl = !1;
  function im(e, t, n) {
    var r = n.window === n
      ? n.document
      : n.nodeType === 9
      ? n
      : n.ownerDocument;
    sl || $n == null || $n !== Di(r) ||
      (r = $n,
        "selectionStart" in r && al(r)
          ? r = { start: r.selectionStart, end: r.selectionEnd }
          : (r = (r.ownerDocument && r.ownerDocument.defaultView || window)
            .getSelection(),
            r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            }),
        no && to(no, r) ||
        (no = r,
          r = Qi(ul, "onSelect"),
          0 < r.length &&
          (t = new Js("onSelect", "select", null, t, n),
            e.push({ event: t, listeners: r }),
            t.target = $n)));
  }
  Xs(
    "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange"
      .split(" "),
    0,
  );
  Xs(
    "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel"
      .split(" "),
    1,
  );
  Xs(Nx, 2);
  for (
    var am =
        "change selectionchange textInput compositionstart compositionend compositionupdate"
          .split(" "),
      ll = 0;
    ll < am.length;
    ll++
  ) {
    Ks.set(am[ll], 0);
  }
  Nn("onMouseEnter", ["mouseout", "mouseover"]);
  Nn("onMouseLeave", ["mouseout", "mouseover"]);
  Nn("onPointerEnter", ["pointerout", "pointerover"]);
  Nn("onPointerLeave", ["pointerout", "pointerover"]);
  rn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " ",
    ),
  );
  rn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange"
      .split(" "),
  );
  rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  rn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" "),
  );
  rn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" "),
  );
  rn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
  );
  var ro =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting"
        .split(" "),
    um = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ro),
    );
  function sm(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, _x(r, t, void 0, e), e.currentTarget = null;
  }
  function Zv(e, t) {
    t = (t & 4) != 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], o = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) {
          for (var a = r.length - 1; 0 <= a; a--) {
            var u = r[a], s = u.instance, l = u.currentTarget;
            if (u = u.listener, s !== i && o.isPropagationStopped()) break e;
            sm(o, u, l), i = s;
          }
        } else {
          for (a = 0; a < r.length; a++) {
            if (
              u = r[a],
                s = u.instance,
                l = u.currentTarget,
                u = u.listener,
                s !== i && o.isPropagationStopped()
            ) {
              break e;
            }
            sm(o, u, l), i = s;
          }
        }
      }
    }
    if (ji) throw e = Us, ji = !1, Us = null, e;
  }
  function z(e, t) {
    var n = fm(t), r = e + "__bubble";
    n.has(r) || (lm(t, e, 2, !1), n.add(r));
  }
  var cm = "_reactListening" + Math.random().toString(36).slice(2);
  function pm(e) {
    e[cm] || (e[cm] = !0,
      Zp.forEach(function (t) {
        um.has(t) || dm(t, !1, e, null), dm(t, !0, e, null);
      }));
  }
  function dm(e, t, n, r) {
    var o = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
      i = n;
    if (
      e === "selectionchange" && n.nodeType !== 9 && (i = n.ownerDocument),
        r !== null && !t && um.has(e)
    ) {
      if (e !== "scroll") return;
      o |= 2, i = r;
    }
    var a = fm(i), u = e + "__" + (t ? "capture" : "bubble");
    a.has(u) || (t && (o |= 4), lm(i, e, o, t), a.add(u));
  }
  function lm(e, t, n, r) {
    var o = Ks.get(t);
    switch (o === void 0 ? 2 : o) {
      case 0:
        o = zx;
        break;
      case 1:
        o = Bx;
        break;
      default:
        o = Zs;
    }
    n = o.bind(null, t, n, e),
      o = void 0,
      !Bs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" ||
      (o = !0),
      r
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
  }
  function Fv(e, t, n, r, o) {
    var i = r;
    if ((t & 1) == 0 && (t & 2) == 0 && r !== null) {
      e:
      for (;;) {
        if (r === null) return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var u = r.stateNode.containerInfo;
          if (u === o || u.nodeType === 8 && u.parentNode === o) break;
          if (a === 4) {
            for (a = r.return; a !== null;) {
              var s = a.tag;
              if (
                (s === 3 || s === 4) &&
                (s = a.stateNode.containerInfo,
                  s === o || s.nodeType === 8 && s.parentNode === o)
              ) {
                return;
              }
              a = a.return;
            }
          }
          for (; u !== null;) {
            if (a = ln(u), a === null) return;
            if (s = a.tag, s === 5 || s === 6) {
              r = i = a;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    }
    Ex(function () {
      var l = i, d = Ds(n), m = [];
      e: {
        var v = bv.get(e);
        if (v !== void 0) {
          var h = Js, g = e;
          switch (e) {
            case "keypress":
              if (Gi(n) === 0) break e;
            case "keydown":
            case "keyup":
              h = nS;
              break;
            case "focusin":
              g = "focus", h = rl;
              break;
            case "focusout":
              g = "blur", h = rl;
              break;
            case "beforeblur":
            case "afterblur":
              h = rl;
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
              h = Bv;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = Hx;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = iS;
              break;
            case Av:
            case Rv:
            case Vv:
              h = Gx;
              break;
            case Dv:
              h = uS;
              break;
            case "scroll":
              h = Ux;
              break;
            case "wheel":
              h = lS;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = Xx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = $v;
          }
          var x = (t & 4) != 0,
            c = !x && e === "scroll",
            f = x ? v !== null ? v + "Capture" : null : v;
          x = [];
          for (var p = l, y; p !== null;) {
            y = p;
            var w = y.stateNode;
            if (
              y.tag === 5 && w !== null &&
              (y = w,
                f !== null && (w = Ur(p, f), w != null && x.push(oo(p, w, y)))),
                c
            ) {
              break;
            }
            p = p.return;
          }
          0 < x.length &&
            (v = new h(v, g, null, n, d), m.push({ event: v, listeners: x }));
        }
      }
      if ((t & 7) == 0) {
        e: {
          if (
            v = e === "mouseover" || e === "pointerover",
              h = e === "mouseout" || e === "pointerout",
              v && (t & 16) == 0 && (g = n.relatedTarget || n.fromElement) &&
              (ln(g) || g[Wn])
          ) {
            break e;
          }
          if (
            (h || v) && (v = d.window === d
              ? d
              : (v = d.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window,
              h
                ? (g = n.relatedTarget || n.toElement,
                  h = l,
                  g = g ? ln(g) : null,
                  g !== null &&
                  (c = sn(g), g !== c || g.tag !== 5 && g.tag !== 6) &&
                  (g = null))
                : (h = null, g = l),
              h !== g)
          ) {
            if (
              x = Bv,
                w = "onMouseLeave",
                f = "onMouseEnter",
                p = "mouse",
                (e === "pointerout" || e === "pointerover") &&
                (x = $v,
                  w = "onPointerLeave",
                  f = "onPointerEnter",
                  p = "pointer"),
                c = h == null ? v : Un(h),
                y = g == null ? v : Un(g),
                v = new x(w, p + "leave", h, n, d),
                v.target = c,
                v.relatedTarget = y,
                w = null,
                ln(d) === l &&
                (x = new x(f, p + "enter", g, n, d),
                  x.target = y,
                  x.relatedTarget = c,
                  w = x),
                c = w,
                h && g
            ) {
              t: {
                for (x = h, f = g, p = 0, y = x; y; y = Hn(y)) p++;
                for (y = 0, w = f; w; w = Hn(w)) y++;
                for (; 0 < p - y;) x = Hn(x), p--;
                for (; 0 < y - p;) f = Hn(f), y--;
                for (; p--;) {
                  if (x === f || f !== null && x === f.alternate) break t;
                  x = Hn(x), f = Hn(f);
                }
                x = null;
              }
            } else x = null;
            h !== null && vm(m, v, h, x, !1),
              g !== null && c !== null && vm(m, c, g, x, !0);
          }
        }
        e: {
          if (
            v = l ? Un(l) : window,
              h = v.nodeName && v.nodeName.toLowerCase(),
              h === "select" || h === "input" && v.type === "file"
          ) {
            var E = hS;
          } else if (Xv(v)) {
            if (qv) E = xS;
            else {
              E = gS;
              var S = yS;
            }
          } else {
            (h = v.nodeName) && h.toLowerCase() === "input" &&
              (v.type === "checkbox" || v.type === "radio") && (E = wS);
          }
          if (E && (E = E(e, l))) {
            Qv(m, E, n, d);
            break e;
          }
          S && S(e, v, l),
            e === "focusout" && (S = v._wrapperState) && S.controlled &&
            v.type === "number" && ks(v, "number", v.value);
        }
        switch (S = l ? Un(l) : window, e) {
          case "focusin":
            (Xv(S) || S.contentEditable === "true") &&
              ($n = S, ul = l, no = null);
            break;
          case "focusout":
            no = ul = $n = null;
            break;
          case "mousedown":
            sl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sl = !1, im(m, n, d);
            break;
          case "selectionchange":
            if (CS) break;
          case "keydown":
          case "keyup":
            im(m, n, d);
        }
        var T;
        if (ol) {
          e: {
            switch (e) {
              case "compositionstart":
                var O = "onCompositionStart";
                break e;
              case "compositionend":
                O = "onCompositionEnd";
                break e;
              case "compositionupdate":
                O = "onCompositionUpdate";
                break e;
            }
            O = void 0;
          }
        } else {
          Bn
            ? Gv(e, n) && (O = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 &&
              (O = "onCompositionStart");
        }
        O &&
        (Hv && n.locale !== "ko" && (Bn || O !== "onCompositionStart"
          ? O === "onCompositionEnd" && Bn && (T = jv())
          : (Lt = d,
            qs = "value" in Lt
              ? Lt.value
              : Lt.textContent,
            Bn = !0)),
          S = Qi(l, O),
          0 < S.length &&
          (O = new Uv(O, e, null, n, d),
            m.push({ event: O, listeners: S }),
            T ? O.data = T : (T = Kv(n), T !== null && (O.data = T)))),
          (T = cS ? dS(e, n) : pS(e, n)) &&
          (l = Qi(l, "onBeforeInput"),
            0 < l.length &&
            (d = new Uv("onBeforeInput", "beforeinput", null, n, d),
              m.push({ event: d, listeners: l }),
              d.data = T));
      }
      Zv(m, t);
    });
  }
  function oo(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Qi(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var o = e, i = o.stateNode;
      o.tag === 5 && i !== null &&
      (o = i,
        i = Ur(e, n),
        i != null && r.unshift(oo(e, i, o)),
        i = Ur(e, t),
        i != null && r.push(oo(e, i, o))), e = e.return;
    }
    return r;
  }
  function Hn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null;
  }
  function vm(e, t, n, r, o) {
    for (var i = t._reactName, a = []; n !== null && n !== r;) {
      var u = n, s = u.alternate, l = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 && l !== null &&
      (u = l,
        o
          ? (s = Ur(n, i), s != null && a.unshift(oo(n, s, u)))
          : o || (s = Ur(n, i), s != null && a.push(oo(n, s, u)))),
        n = n.return;
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  function ea() {}
  var fl = null, cl = null;
  function mm(e, t) {
    switch (e) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!t.autoFocus;
    }
    return !1;
  }
  function dl(e, t) {
    return e === "textarea" || e === "option" || e === "noscript" ||
      typeof t.children == "string" || typeof t.children == "number" ||
      typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null;
  }
  var hm = typeof setTimeout == "function" ? setTimeout : void 0,
    PS = typeof clearTimeout == "function" ? clearTimeout : void 0;
  function pl(e) {
    e.nodeType === 1
      ? e.textContent = ""
      : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
  }
  function Yn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
    }
    return e;
  }
  function ym(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
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
  var vl = 0;
  function TS(e) {
    return { $$typeof: Ss, toString: e, valueOf: e };
  }
  var ta = Math.random().toString(36).slice(2),
    Nt = "__reactFiber$" + ta,
    na = "__reactProps$" + ta,
    Wn = "__reactContainer$" + ta,
    gm = "__reactEvents$" + ta;
  function ln(e) {
    var t = e[Nt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if (t = n[Wn] || n[Nt]) {
        if (
          n = t.alternate, t.child !== null || n !== null && n.child !== null
        ) {
          for (e = ym(e); e !== null;) {
            if (n = e[Nt]) return n;
            e = ym(e);
          }
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Br(e) {
    return e = e[Nt] || e[Wn],
      !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3
        ? null
        : e;
  }
  function Un(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(k(33));
  }
  function Ii(e) {
    return e[na] || null;
  }
  function fm(e) {
    var t = e[gm];
    return t === void 0 && (t = e[gm] = new Set()), t;
  }
  var ml = [], Gn = -1;
  function At(e) {
    return { current: e };
  }
  function B(e) {
    0 > Gn || (e.current = ml[Gn], ml[Gn] = null, Gn--);
  }
  function Y(e, t) {
    Gn++, ml[Gn] = e.current, e.current = t;
  }
  var Rt = {}, se = At(Rt), ye = At(!1), fn = Rt;
  function Kn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Rt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) {
      return r.__reactInternalMemoizedMaskedChildContext;
    }
    var o = {}, i;
    for (i in n) o[i] = t[i];
    return r &&
      (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = o),
      o;
  }
  function ge(e) {
    return e = e.childContextTypes, e != null;
  }
  function ra() {
    B(ye), B(se);
  }
  function wm(e, t, n) {
    if (se.current !== Rt) throw Error(k(168));
    Y(se, t), Y(ye, n);
  }
  function xm(e, t, n) {
    var r = e.stateNode;
    if (
      e = t.childContextTypes, typeof r.getChildContext != "function"
    ) {
      return n;
    }
    r = r.getChildContext();
    for (var o in r) if (!(o in e)) throw Error(k(108, An(t) || "Unknown", o));
    return $({}, n, r);
  }
  function oa(e) {
    return e =
      (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Rt,
      fn = se.current,
      Y(se, e),
      Y(ye, ye.current),
      !0;
  }
  function Sm(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(k(169));
    n
      ? (e = xm(e, t, fn),
        r.__reactInternalMemoizedMergedChildContext = e,
        B(ye),
        B(se),
        Y(se, e))
      : B(ye), Y(ye, n);
  }
  var hl = null,
    cn = null,
    _S = ee.unstable_runWithPriority,
    yl = ee.unstable_scheduleCallback,
    gl = ee.unstable_cancelCallback,
    kS = ee.unstable_shouldYield,
    Em = ee.unstable_requestPaint,
    wl = ee.unstable_now,
    OS = ee.unstable_getCurrentPriorityLevel,
    ia = ee.unstable_ImmediatePriority,
    Cm = ee.unstable_UserBlockingPriority,
    Pm = ee.unstable_NormalPriority,
    Tm = ee.unstable_LowPriority,
    _m = ee.unstable_IdlePriority,
    xl = {},
    MS = Em !== void 0 ? Em : function () {},
    dt = null,
    aa = null,
    Sl = !1,
    km = wl(),
    le = 1e4 > km ? wl : function () {
      return wl() - km;
    };
  function Xn() {
    switch (OS()) {
      case ia:
        return 99;
      case Cm:
        return 98;
      case Pm:
        return 97;
      case Tm:
        return 96;
      case _m:
        return 95;
      default:
        throw Error(k(332));
    }
  }
  function Om(e) {
    switch (e) {
      case 99:
        return ia;
      case 98:
        return Cm;
      case 97:
        return Pm;
      case 96:
        return Tm;
      case 95:
        return _m;
      default:
        throw Error(k(332));
    }
  }
  function dn(e, t) {
    return e = Om(e), _S(e, t);
  }
  function io(e, t, n) {
    return e = Om(e), yl(e, t, n);
  }
  function Je() {
    if (aa !== null) {
      var e = aa;
      aa = null, gl(e);
    }
    Mm();
  }
  function Mm() {
    if (!Sl && dt !== null) {
      Sl = !0;
      var e = 0;
      try {
        var t = dt;
        dn(99, function () {
          for (; e < t.length; e++) {
            var n = t[e];
            do n = n(!0); while (n !== null);
          }
        }), dt = null;
      } catch (n) {
        throw dt !== null && (dt = dt.slice(e + 1)), yl(ia, Je), n;
      } finally {
        Sl = !1;
      }
    }
  }
  var LS = on.ReactCurrentBatchConfig;
  function He(e, t) {
    if (e && e.defaultProps) {
      t = $({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var ua = At(null), sa = null, Qn = null, la = null;
  function El() {
    la = Qn = sa = null;
  }
  function Cl(e) {
    var t = ua.current;
    B(ua), e.type._context._currentValue = t;
  }
  function Lm(e, t) {
    for (; e !== null;) {
      var n = e.alternate;
      if ((e.childLanes & t) === t) {
        if (n === null || (n.childLanes & t) === t) break;
        n.childLanes |= t;
      } else e.childLanes |= t, n !== null && (n.childLanes |= t);
      e = e.return;
    }
  }
  function Zn(e, t) {
    sa = e,
      la = Qn = null,
      e = e.dependencies,
      e !== null && e.firstContext !== null &&
      ((e.lanes & t) != 0 && (We = !0), e.firstContext = null);
  }
  function Ve(e, t) {
    if (la !== e && t !== !1 && t !== 0) {
      if (
        (typeof t != "number" || t === 1073741823) && (la = e, t = 1073741823),
          t = { context: e, observedBits: t, next: null },
          Qn === null
      ) {
        if (sa === null) throw Error(k(308));
        Qn = t,
          sa.dependencies = { lanes: 0, firstContext: t, responders: null };
      } else Qn = Qn.next = t;
    }
    return e._currentValue;
  }
  var Vt = !1;
  function Pl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null },
      effects: null,
    };
  }
  function Nm(e, t) {
    e = e.updateQueue,
      t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
  }
  function Dt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function bt(e, t) {
    if (e = e.updateQueue, e !== null) {
      e = e.shared;
      var n = e.pending;
      n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
  }
  function Am(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var o = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var a = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? o = i = a : i = i.next = a, n = n.next;
        } while (n !== null);
        i === null ? o = i = t : i = i.next = t;
      } else o = i = t;
      n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate,
      e === null ? n.firstBaseUpdate = t : e.next = t,
      n.lastBaseUpdate = t;
  }
  function uo(e, t, n, r) {
    var o = e.updateQueue;
    Vt = !1;
    var i = o.firstBaseUpdate, a = o.lastBaseUpdate, u = o.shared.pending;
    if (u !== null) {
      o.shared.pending = null;
      var s = u, l = s.next;
      s.next = null, a === null ? i = l : a.next = l, a = s;
      var d = e.alternate;
      if (d !== null) {
        d = d.updateQueue;
        var m = d.lastBaseUpdate;
        m !== a &&
          (m === null ? d.firstBaseUpdate = l : m.next = l,
            d.lastBaseUpdate = s);
      }
    }
    if (i !== null) {
      m = o.baseState, a = 0, d = l = s = null;
      do {
        u = i.lane;
        var v = i.eventTime;
        if ((r & u) === u) {
          d !== null &&
            (d = d.next = {
              eventTime: v,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
          e: {
            var h = e, g = i;
            switch (u = t, v = n, g.tag) {
              case 1:
                if (h = g.payload, typeof h == "function") {
                  m = h.call(v, m, u);
                  break e;
                }
                m = h;
                break e;
              case 3:
                h.flags = h.flags & -4097 | 64;
              case 0:
                if (
                  h = g.payload,
                    u = typeof h == "function" ? h.call(v, m, u) : h,
                    u == null
                ) {
                  break e;
                }
                m = $({}, m, u);
                break e;
              case 2:
                Vt = !0;
            }
          }
          i.callback !== null &&
            (e.flags |= 32,
              u = o.effects,
              u === null ? o.effects = [i] : u.push(i));
        } else {
          v = {
            eventTime: v,
            lane: u,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          },
            d === null ? (l = d = v, s = m) : d = d.next = v,
            a |= u;
        }
        if (i = i.next, i === null) {
          if (u = o.shared.pending, u === null) break;
          i = u.next,
            u.next = null,
            o.lastBaseUpdate = u,
            o.shared.pending = null;
        }
      } while (1);
      d === null && (s = m),
        o.baseState = s,
        o.firstBaseUpdate = l,
        o.lastBaseUpdate = d,
        ao |= a,
        e.lanes = a,
        e.memoizedState = m;
    }
  }
  function Rm(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) {
      for (t = 0; t < e.length; t++) {
        var r = e[t], o = r.callback;
        if (o !== null) {
          if (r.callback = null, r = n, typeof o != "function") {
            throw Error(k(191, o));
          }
          o.call(r);
        }
      }
    }
  }
  var Vm = new Mi.Component().refs;
  function fa(e, t, n, r) {
    t = e.memoizedState,
      n = n(r, t),
      n = n == null ? t : $({}, t, n),
      e.memoizedState = n,
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ca = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? sn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = _e(), o = It(e), i = Dt(r, o);
      i.payload = t, n != null && (i.callback = n), bt(e, i), Ft(e, o, r);
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = _e(), o = It(e), i = Dt(r, o);
      i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        bt(e, i),
        Ft(e, o, r);
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = _e(), r = It(e), o = Dt(n, r);
      o.tag = 2, t != null && (o.callback = t), bt(e, o), Ft(e, r, n);
    },
  };
  function Dm(e, t, n, r, o, i, a) {
    return e = e.stateNode,
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, a)
        : t.prototype && t.prototype.isPureReactComponent
        ? !to(n, r) || !to(o, i)
        : !0;
  }
  function bm(e, t, n) {
    var r = !1, o = Rt, i = t.contextType;
    return typeof i == "object" && i !== null
      ? i = Ve(i)
      : (o = ge(t) ? fn : se.current,
        r = t.contextTypes,
        i = (r = r != null) ? Kn(e, o) : Rt),
      t = new t(n, i),
      e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
      t.updater = ca,
      e.stateNode = t,
      t._reactInternals = e,
      r &&
      (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = o,
        e.__reactInternalMemoizedMaskedChildContext = i),
      t;
  }
  function Im(e, t, n, r) {
    e = t.state,
      typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && ca.enqueueReplaceState(t, t.state, null);
  }
  function Tl(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = Vm, Pl(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? o.context = Ve(i)
      : (i = ge(t) ? fn : se.current, o.context = Kn(e, i)),
      uo(e, n, o, r),
      o.state = e.memoizedState,
      i = t.getDerivedStateFromProps,
      typeof i == "function" && (fa(e, t, i, n), o.state = e.memoizedState),
      typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function" ||
      (t = o.state,
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
        t !== o.state && ca.enqueueReplaceState(o, o.state, null),
        uo(e, n, o, r),
        o.state = e.memoizedState),
      typeof o.componentDidMount == "function" && (e.flags |= 4);
  }
  var da = Array.isArray;
  function so(e, t, n) {
    if (
      e = n.ref, e !== null && typeof e != "function" && typeof e != "object"
    ) {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(k(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(k(147, e));
        var o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" &&
            t.ref._stringRef === o
          ? t.ref
          : (t = function (i) {
            var a = r.refs;
            a === Vm && (a = r.refs = {}), i === null ? delete a[o] : a[o] = i;
          },
            t._stringRef = o,
            t);
      }
      if (typeof e != "string") throw Error(k(284));
      if (!n._owner) throw Error(k(290, e));
    }
    return e;
  }
  function pa(e, t) {
    if (e.type !== "textarea") {
      throw Error(k(
        31,
        Object.prototype.toString.call(t) === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : t,
      ));
    }
  }
  function Fm(e) {
    function t(c, f) {
      if (e) {
        var p = c.lastEffect;
        p !== null
          ? (p.nextEffect = f, c.lastEffect = f)
          : c.firstEffect = c.lastEffect = f,
          f.nextEffect = null,
          f.flags = 8;
      }
    }
    function n(c, f) {
      if (!e) return null;
      for (; f !== null;) t(c, f), f = f.sibling;
      return null;
    }
    function r(c, f) {
      for (
        c = new Map(); f !== null;
      ) {
        f.key !== null ? c.set(f.key, f) : c.set(f.index, f), f = f.sibling;
      }
      return c;
    }
    function o(c, f) {
      return c = jt(c, f), c.index = 0, c.sibling = null, c;
    }
    function i(c, f, p) {
      return c.index = p,
        e
          ? (p = c.alternate,
            p !== null
              ? (p = p.index, p < f ? (c.flags = 2, f) : p)
              : (c.flags = 2, f))
          : f;
    }
    function a(c) {
      return e && c.alternate === null && (c.flags = 2), c;
    }
    function u(c, f, p, y) {
      return f === null || f.tag !== 6
        ? (f = _l(p, c.mode, y), f.return = c, f)
        : (f = o(f, p), f.return = c, f);
    }
    function s(c, f, p, y) {
      return f !== null && f.elementType === p.type
        ? (y = o(f, p.props), y.ref = so(c, f, p), y.return = c, y)
        : (y = va(p.type, p.key, p.props, null, c.mode, y),
          y.ref = so(c, f, p),
          y.return = c,
          y);
    }
    function l(c, f, p, y) {
      return f === null || f.tag !== 4 ||
          f.stateNode.containerInfo !== p.containerInfo ||
          f.stateNode.implementation !== p.implementation
        ? (f = kl(p, c.mode, y), f.return = c, f)
        : (f = o(f, p.children || []), f.return = c, f);
    }
    function d(c, f, p, y, w) {
      return f === null || f.tag !== 7
        ? (f = qn(p, c.mode, y, w), f.return = c, f)
        : (f = o(f, p), f.return = c, f);
    }
    function m(c, f, p) {
      if (
        typeof f == "string" || typeof f == "number"
      ) {
        return f = _l("" + f, c.mode, p), f.return = c, f;
      }
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case Vr:
            return p = va(f.type, f.key, f.props, null, c.mode, p),
              p.ref = so(c, null, f),
              p.return = c,
              p;
          case an:
            return f = kl(f, c.mode, p), f.return = c, f;
        }
        if (da(f) || Ir(f)) return f = qn(f, c.mode, p, null), f.return = c, f;
        pa(c, f);
      }
      return null;
    }
    function v(c, f, p, y) {
      var w = f !== null ? f.key : null;
      if (typeof p == "string" || typeof p == "number") {
        return w !== null
          ? null
          : u(c, f, "" + p, y);
      }
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Vr:
            return p.key === w
              ? p.type === Pt ? d(c, f, p.props.children, y, w) : s(c, f, p, y)
              : null;
          case an:
            return p.key === w ? l(c, f, p, y) : null;
        }
        if (da(p) || Ir(p)) return w !== null ? null : d(c, f, p, y, null);
        pa(c, p);
      }
      return null;
    }
    function h(c, f, p, y, w) {
      if (
        typeof y == "string" || typeof y == "number"
      ) {
        return c = c.get(p) || null, u(f, c, "" + y, w);
      }
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Vr:
            return c = c.get(y.key === null ? p : y.key) || null,
              y.type === Pt
                ? d(f, c, y.props.children, w, y.key)
                : s(f, c, y, w);
          case an:
            return c = c.get(y.key === null ? p : y.key) || null, l(f, c, y, w);
        }
        if (da(y) || Ir(y)) return c = c.get(p) || null, d(f, c, y, w, null);
        pa(f, y);
      }
      return null;
    }
    function g(c, f, p, y) {
      for (
        var w = null, E = null, S = f, T = f = 0, O = null;
        S !== null && T < p.length;
        T++
      ) {
        S.index > T ? (O = S, S = null) : O = S.sibling;
        var _ = v(c, S, p[T], y);
        if (_ === null) {
          S === null && (S = O);
          break;
        }
        e && S && _.alternate === null && t(c, S),
          f = i(_, f, T),
          E === null ? w = _ : E.sibling = _,
          E = _,
          S = O;
      }
      if (T === p.length) return n(c, S), w;
      if (S === null) {
        for (; T < p.length; T++) {
          S = m(c, p[T], y),
            S !== null && (f = i(S, f, T),
              E === null
                ? w = S
                : E.sibling = S,
              E = S);
        }
        return w;
      }
      for (S = r(c, S); T < p.length; T++) {
        O = h(S, c, T, p[T], y),
          O !== null &&
          (e && O.alternate !== null && S.delete(O.key === null ? T : O.key),
            f = i(O, f, T),
            E === null
              ? w = O
              : E.sibling = O,
            E = O);
      }
      return e && S.forEach(function (A) {
        return t(c, A);
      }),
        w;
    }
    function x(c, f, p, y) {
      var w = Ir(p);
      if (typeof w != "function") throw Error(k(150));
      if (p = w.call(p), p == null) throw Error(k(151));
      for (
        var E = w = null, S = f, T = f = 0, O = null, _ = p.next();
        S !== null && !_.done;
        T++, _ = p.next()
      ) {
        S.index > T ? (O = S, S = null) : O = S.sibling;
        var A = v(c, S, _.value, y);
        if (A === null) {
          S === null && (S = O);
          break;
        }
        e && S && A.alternate === null && t(c, S),
          f = i(A, f, T),
          E === null ? w = A : E.sibling = A,
          E = A,
          S = O;
      }
      if (_.done) return n(c, S), w;
      if (S === null) {
        for (; !_.done; T++, _ = p.next()) {
          _ = m(c, _.value, y),
            _ !== null && (f = i(_, f, T),
              E === null
                ? w = _
                : E.sibling = _,
              E = _);
        }
        return w;
      }
      for (S = r(c, S); !_.done; T++, _ = p.next()) {
        _ = h(S, c, T, _.value, y),
          _ !== null &&
          (e && _.alternate !== null && S.delete(_.key === null ? T : _.key),
            f = i(_, f, T),
            E === null
              ? w = _
              : E.sibling = _,
            E = _);
      }
      return e && S.forEach(function (U) {
        return t(c, U);
      }),
        w;
    }
    return function (c, f, p, y) {
      var w = typeof p == "object" && p !== null && p.type === Pt &&
        p.key === null;
      w && (p = p.props.children);
      var E = typeof p == "object" && p !== null;
      if (E) {
        switch (p.$$typeof) {
          case Vr:
            e: {
              for (E = p.key, w = f; w !== null;) {
                if (w.key === E) {
                  switch (w.tag) {
                    case 7:
                      if (p.type === Pt) {
                        n(c, w.sibling),
                          f = o(w, p.props.children),
                          f.return = c,
                          c = f;
                        break e;
                      }
                      break;
                    default:
                      if (w.elementType === p.type) {
                        n(c, w.sibling),
                          f = o(w, p.props),
                          f.ref = so(c, w, p),
                          f.return = c,
                          c = f;
                        break e;
                      }
                  }
                  n(c, w);
                  break;
                } else t(c, w);
                w = w.sibling;
              }
              p.type === Pt
                ? (f = qn(p.props.children, c.mode, y, p.key),
                  f.return = c,
                  c = f)
                : (y = va(p.type, p.key, p.props, null, c.mode, y),
                  y.ref = so(c, f, p),
                  y.return = c,
                  c = y);
            }
            return a(c);
          case an:
            e: {
              for (w = p.key; f !== null;) {
                if (f.key === w) {
                  if (
                    f.tag === 4 &&
                    f.stateNode.containerInfo === p.containerInfo &&
                    f.stateNode.implementation === p.implementation
                  ) {
                    n(c, f.sibling),
                      f = o(f, p.children || []),
                      f.return = c,
                      c = f;
                    break e;
                  } else {
                    n(c, f);
                    break;
                  }
                } else t(c, f);
                f = f.sibling;
              }
              f = kl(p, c.mode, y), f.return = c, c = f;
            }
            return a(c);
        }
      }
      if (typeof p == "string" || typeof p == "number") {
        return p = "" + p,
          f !== null && f.tag === 6
            ? (n(c, f.sibling), f = o(f, p), f.return = c, c = f)
            : (n(c, f), f = _l(p, c.mode, y), f.return = c, c = f),
          a(c);
      }
      if (da(p)) return g(c, f, p, y);
      if (Ir(p)) return x(c, f, p, y);
      if (E && pa(c, p), typeof p == "undefined" && !w) {
        switch (c.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(k(152, An(c.type) || "Component"));
        }
      }
      return n(c, f);
    };
  }
  var ma = Fm(!0), jm = Fm(!1), lo = {}, et = At(lo), fo = At(lo), co = At(lo);
  function pn(e) {
    if (e === lo) throw Error(k(174));
    return e;
  }
  function Ol(e, t) {
    switch (Y(co, t), Y(fo, e), Y(et, lo), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : As(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t,
          t = e.namespaceURI || null,
          e = e.tagName,
          t = As(t, e);
    }
    B(et), Y(et, t);
  }
  function Jn() {
    B(et), B(fo), B(co);
  }
  function zm(e) {
    pn(co.current);
    var t = pn(et.current), n = As(t, e.type);
    t !== n && (Y(fo, e), Y(et, n));
  }
  function Ml(e) {
    fo.current === e && (B(et), B(fo));
  }
  var G = At(0);
  function ha(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")
        ) {
          return t;
        }
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 64) != 0) {
          return t;
        }
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var pt = null, zt = null, tt = !1;
  function Bm(e, t) {
    var n = De(5, null, null, 0);
    n.elementType = "DELETED",
      n.type = "DELETED",
      n.stateNode = t,
      n.return = e,
      n.flags = 8,
      e.lastEffect !== null
        ? (e.lastEffect.nextEffect = n, e.lastEffect = n)
        : e.firstEffect = e.lastEffect = n;
  }
  function Um(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t,
          t !== null ? (e.stateNode = t, !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
          t !== null ? (e.stateNode = t, !0) : !1;
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  function Ll(e) {
    if (tt) {
      var t = zt;
      if (t) {
        var n = t;
        if (!Um(e, t)) {
          if (t = Yn(n.nextSibling), !t || !Um(e, t)) {
            e.flags = e.flags & -1025 | 2, tt = !1, pt = e;
            return;
          }
          Bm(pt, n);
        }
        pt = e, zt = Yn(t.firstChild);
      } else e.flags = e.flags & -1025 | 2, tt = !1, pt = e;
    }
  }
  function $m(e) {
    for (
      e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    ) {
      e = e.return;
    }
    pt = e;
  }
  function ya(e) {
    if (e !== pt) return !1;
    if (!tt) return $m(e), tt = !0, !1;
    var t = e.type;
    if (
      e.tag !== 5 || t !== "head" && t !== "body" && !dl(t, e.memoizedProps)
    ) {
      for (t = zt; t;) Bm(e, t), t = Yn(t.nextSibling);
    }
    if ($m(e), e.tag === 13) {
      if (
        e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e
      ) {
        throw Error(k(317));
      }
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                zt = Yn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        zt = null;
      }
    } else zt = pt ? Yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Nl() {
    zt = pt = null, tt = !1;
  }
  var er = [];
  function Al() {
    for (var e = 0; e < er.length; e++) {
      er[e]._workInProgressVersionPrimary = null;
    }
    er.length = 0;
  }
  var po = on.ReactCurrentDispatcher,
    be = on.ReactCurrentBatchConfig,
    vo = 0,
    K = null,
    fe = null,
    ie = null,
    ga = !1,
    mo = !1;
  function we() {
    throw Error(k(321));
  }
  function Rl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) {
      if (!Re(e[n], t[n])) {
        return !1;
      }
    }
    return !0;
  }
  function Vl(e, t, n, r, o, i) {
    if (
      vo = i,
        K = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        po.current = e === null || e.memoizedState === null ? NS : AS,
        e = n(r, o),
        mo
    ) {
      i = 0;
      do {
        if (mo = !1, !(25 > i)) throw Error(k(301));
        i += 1,
          ie = fe = null,
          t.updateQueue = null,
          po.current = RS,
          e = n(r, o);
      } while (mo);
    }
    if (
      po.current = wa,
        t = fe !== null && fe.next !== null,
        vo = 0,
        ie = fe = K = null,
        ga = !1,
        t
    ) {
      throw Error(k(300));
    }
    return e;
  }
  function vn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ie === null ? K.memoizedState = ie = e : ie = ie.next = e, ie;
  }
  function mn() {
    if (fe === null) {
      var e = K.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = fe.next;
    var t = ie === null ? K.memoizedState : ie.next;
    if (t !== null) ie = t, fe = e;
    else {
      if (e === null) throw Error(k(310));
      fe = e,
        e = {
          memoizedState: fe.memoizedState,
          baseState: fe.baseState,
          baseQueue: fe.baseQueue,
          queue: fe.queue,
          next: null,
        },
        ie === null ? K.memoizedState = ie = e : ie = ie.next = e;
    }
    return ie;
  }
  function nt(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ho(e) {
    var t = mn(), n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = fe, o = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (o !== null) {
        var a = o.next;
        o.next = i.next, i.next = a;
      }
      r.baseQueue = o = i, n.pending = null;
    }
    if (o !== null) {
      o = o.next, r = r.baseState;
      var u = a = i = null, s = o;
      do {
        var l = s.lane;
        if (
          (vo & l) === l
        ) {
          u !== null &&
          (u = u.next = {
            lane: 0,
            action: s.action,
            eagerReducer: s.eagerReducer,
            eagerState: s.eagerState,
            next: null,
          }), r = s.eagerReducer === e ? s.eagerState : e(r, s.action);
        } else {
          var d = {
            lane: l,
            action: s.action,
            eagerReducer: s.eagerReducer,
            eagerState: s.eagerState,
            next: null,
          };
          u === null ? (a = u = d, i = r) : u = u.next = d,
            K.lanes |= l,
            ao |= l;
        }
        s = s.next;
      } while (s !== null && s !== o);
      u === null ? i = r : u.next = a,
        Re(r, t.memoizedState) || (We = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = u,
        n.lastRenderedState = r;
    }
    return [t.memoizedState, n.dispatch];
  }
  function yo(e) {
    var t = mn(), n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, i = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var a = o = o.next;
      do i = e(i, a.action), a = a.next; while (a !== o);
      Re(i, t.memoizedState) || (We = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i;
    }
    return [i, r];
  }
  function Hm(e, t, n) {
    var r = t._getVersion;
    r = r(t._source);
    var o = t._workInProgressVersionPrimary;
    if (
      o !== null
        ? e = o === r
        : (e = e.mutableReadLanes,
          (e = (vo & e) === e) &&
          (t._workInProgressVersionPrimary = r, er.push(t))), e
    ) {
      return n(t._source);
    }
    throw er.push(t), Error(k(350));
  }
  function Wm(e, t, n, r) {
    var o = me;
    if (o === null) throw Error(k(349));
    var i = t._getVersion,
      a = i(t._source),
      u = po.current,
      s = u.useState(function () {
        return Hm(o, t, n);
      }),
      l = s[1],
      d = s[0];
    s = ie;
    var m = e.memoizedState, v = m.refs, h = v.getSnapshot, g = m.source;
    m = m.subscribe;
    var x = K;
    return e.memoizedState = { refs: v, source: t, subscribe: r },
      u.useEffect(function () {
        v.getSnapshot = n, v.setSnapshot = l;
        var c = i(t._source);
        if (!Re(a, c)) {
          c = n(t._source),
            Re(d, c) ||
            (l(c), c = It(x), o.mutableReadLanes |= c & o.pendingLanes),
            c = o.mutableReadLanes,
            o.entangledLanes |= c;
          for (var f = o.entanglements, p = c; 0 < p;) {
            var y = 31 - Mt(p), w = 1 << y;
            f[y] |= c, p &= ~w;
          }
        }
      }, [n, t, r]),
      u.useEffect(function () {
        return r(t._source, function () {
          var c = v.getSnapshot, f = v.setSnapshot;
          try {
            f(c(t._source));
            var p = It(x);
            o.mutableReadLanes |= p & o.pendingLanes;
          } catch (y) {
            f(function () {
              throw y;
            });
          }
        });
      }, [t, r]),
      Re(h, n) && Re(g, t) && Re(m, r) ||
      (e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: nt,
        lastRenderedState: d,
      },
        e.dispatch = l = Dl.bind(null, K, e),
        s.queue = e,
        s.baseQueue = null,
        d = Hm(o, t, n),
        s.memoizedState = s.baseState = d),
      d;
  }
  function Ym(e, t, n) {
    var r = mn();
    return Wm(r, e, t, n);
  }
  function go(e) {
    var t = vn();
    return typeof e == "function" && (e = e()),
      t.memoizedState = t.baseState = e,
      e = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: nt,
        lastRenderedState: e,
      },
      e = e.dispatch = Dl.bind(null, K, e),
      [t.memoizedState, e];
  }
  function xa(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null },
      t = K.updateQueue,
      t === null
        ? (t = { lastEffect: null },
          K.updateQueue = t,
          t.lastEffect = e.next = e)
        : (n = t.lastEffect,
          n === null
            ? t.lastEffect = e.next = e
            : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)),
      e;
  }
  function Gm(e) {
    var t = vn();
    return e = { current: e }, t.memoizedState = e;
  }
  function Sa() {
    return mn().memoizedState;
  }
  function bl(e, t, n, r) {
    var o = vn();
    K.flags |= e,
      o.memoizedState = xa(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Il(e, t, n, r) {
    var o = mn();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (fe !== null) {
      var a = fe.memoizedState;
      if (i = a.destroy, r !== null && Rl(r, a.deps)) {
        xa(t, n, i, r);
        return;
      }
    }
    K.flags |= e, o.memoizedState = xa(1 | t, n, i, r);
  }
  function Km(e, t) {
    return bl(516, 4, e, t);
  }
  function Ea(e, t) {
    return Il(516, 4, e, t);
  }
  function Xm(e, t) {
    return Il(4, 2, e, t);
  }
  function Qm(e, t) {
    if (typeof t == "function") {
      return e = e(), t(e), function () {
        t(null);
      };
    }
    if (t != null) {
      return e = e(), t.current = e, function () {
        t.current = null;
      };
    }
  }
  function Zm(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
      Il(4, 2, Qm.bind(null, t, e), n);
  }
  function Fl() {}
  function qm(e, t) {
    var n = mn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Rl(t, r[1])
      ? r[0]
      : (n.memoizedState = [e, t], e);
  }
  function Jm(e, t) {
    var n = mn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Rl(t, r[1])
      ? r[0]
      : (e = e(), n.memoizedState = [e, t], e);
  }
  function VS(e, t) {
    var n = Xn();
    dn(98 > n ? 98 : n, function () {
      e(!0);
    }),
      dn(97 < n ? 97 : n, function () {
        var r = be.transition;
        be.transition = 1;
        try {
          e(!1), t();
        } finally {
          be.transition = r;
        }
      });
  }
  function Dl(e, t, n) {
    var r = _e(),
      o = It(e),
      i = {
        lane: o,
        action: n,
        eagerReducer: null,
        eagerState: null,
        next: null,
      },
      a = t.pending;
    if (
      a === null ? i.next = i : (i.next = a.next, a.next = i),
        t.pending = i,
        a = e.alternate,
        e === K || a !== null && a === K
    ) {
      mo = ga = !0;
    } else {
      if (
        e.lanes === 0 && (a === null || a.lanes === 0) &&
        (a = t.lastRenderedReducer, a !== null)
      ) {
        try {
          var u = t.lastRenderedState, s = a(u, n);
          if (i.eagerReducer = a, i.eagerState = s, Re(s, u)) return;
        } catch (l) {
        } finally {
        }
      }
      Ft(e, o, r);
    }
  }
  var wa = {
      readContext: Ve,
      useCallback: we,
      useContext: we,
      useEffect: we,
      useImperativeHandle: we,
      useLayoutEffect: we,
      useMemo: we,
      useReducer: we,
      useRef: we,
      useState: we,
      useDebugValue: we,
      useDeferredValue: we,
      useTransition: we,
      useMutableSource: we,
      useOpaqueIdentifier: we,
      unstable_isNewReconciler: !1,
    },
    NS = {
      readContext: Ve,
      useCallback: function (e, t) {
        return vn().memoizedState = [e, t === void 0 ? null : t], e;
      },
      useContext: Ve,
      useEffect: Km,
      useImperativeHandle: function (e, t, n) {
        return n = n != null ? n.concat([e]) : null,
          bl(4, 2, Qm.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
        return bl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = vn();
        return t = t === void 0 ? null : t,
          e = e(),
          n.memoizedState = [e, t],
          e;
      },
      useReducer: function (e, t, n) {
        var r = vn();
        return t = n !== void 0 ? n(t) : t,
          r.memoizedState = r.baseState = t,
          e = r.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          },
          e = e.dispatch = Dl.bind(null, K, e),
          [r.memoizedState, e];
      },
      useRef: Gm,
      useState: go,
      useDebugValue: Fl,
      useDeferredValue: function (e) {
        var t = go(e), n = t[0], r = t[1];
        return Km(function () {
          var o = be.transition;
          be.transition = 1;
          try {
            r(e);
          } finally {
            be.transition = o;
          }
        }, [e]),
          n;
      },
      useTransition: function () {
        var e = go(!1), t = e[0];
        return e = VS.bind(null, e[1]), Gm(e), [e, t];
      },
      useMutableSource: function (e, t, n) {
        var r = vn();
        return r.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: n,
        },
          Wm(r, e, t, n);
      },
      useOpaqueIdentifier: function () {
        if (tt) {
          var e = !1,
            t = TS(function () {
              throw e || (e = !0, n("r:" + (vl++).toString(36))), Error(k(355));
            }),
            n = go(t)[1];
          return (K.mode & 2) == 0 && (K.flags |= 516,
            xa(
              5,
              function () {
                n("r:" + (vl++).toString(36));
              },
              void 0,
              null,
            )),
            t;
        }
        return t = "r:" + (vl++).toString(36), go(t), t;
      },
      unstable_isNewReconciler: !1,
    },
    AS = {
      readContext: Ve,
      useCallback: qm,
      useContext: Ve,
      useEffect: Ea,
      useImperativeHandle: Zm,
      useLayoutEffect: Xm,
      useMemo: Jm,
      useReducer: ho,
      useRef: Sa,
      useState: function () {
        return ho(nt);
      },
      useDebugValue: Fl,
      useDeferredValue: function (e) {
        var t = ho(nt), n = t[0], r = t[1];
        return Ea(function () {
          var o = be.transition;
          be.transition = 1;
          try {
            r(e);
          } finally {
            be.transition = o;
          }
        }, [e]),
          n;
      },
      useTransition: function () {
        var e = ho(nt)[0];
        return [Sa().current, e];
      },
      useMutableSource: Ym,
      useOpaqueIdentifier: function () {
        return ho(nt)[0];
      },
      unstable_isNewReconciler: !1,
    },
    RS = {
      readContext: Ve,
      useCallback: qm,
      useContext: Ve,
      useEffect: Ea,
      useImperativeHandle: Zm,
      useLayoutEffect: Xm,
      useMemo: Jm,
      useReducer: yo,
      useRef: Sa,
      useState: function () {
        return yo(nt);
      },
      useDebugValue: Fl,
      useDeferredValue: function (e) {
        var t = yo(nt), n = t[0], r = t[1];
        return Ea(function () {
          var o = be.transition;
          be.transition = 1;
          try {
            r(e);
          } finally {
            be.transition = o;
          }
        }, [e]),
          n;
      },
      useTransition: function () {
        var e = yo(nt)[0];
        return [Sa().current, e];
      },
      useMutableSource: Ym,
      useOpaqueIdentifier: function () {
        return yo(nt)[0];
      },
      unstable_isNewReconciler: !1,
    },
    DS = on.ReactCurrentOwner,
    We = !1;
  function xe(e, t, n, r) {
    t.child = e === null ? jm(t, null, n, r) : ma(t, e.child, n, r);
  }
  function eh(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Zn(t, o),
      r = Vl(e, t, n, r, i, o),
      e !== null && !We
        ? (t.updateQueue = e.updateQueue,
          t.flags &= -517,
          e.lanes &= ~o,
          vt(e, t, o))
        : (t.flags |= 1, xe(e, t, r, o), t.child);
  }
  function nh(e, t, n, r, o, i) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" && !jl(a) && a.defaultProps === void 0 &&
          n.compare === null && n.defaultProps === void 0
        ? (t.tag = 15, t.type = a, th(e, t, a, r, o, i))
        : (e = va(n.type, null, r, t, t.mode, i),
          e.ref = t.ref,
          e.return = t,
          t.child = e);
    }
    return a = e.child,
      (o & i) == 0 &&
        (o = a.memoizedProps,
          n = n.compare,
          n = n !== null ? n : to,
          n(o, r) && e.ref === t.ref)
        ? vt(e, t, i)
        : (t.flags |= 1,
          e = jt(a, r),
          e.ref = t.ref,
          e.return = t,
          t.child = e);
  }
  function th(e, t, n, r, o, i) {
    if (e !== null && to(e.memoizedProps, r) && e.ref === t.ref) {
      if (We = !1, (i & o) != 0) {
        (e.flags & 16384) != 0 && (We = !0);
      } else {
        return t.lanes = e.lanes, vt(e, t, i);
      }
    }
    return zl(e, t, n, r, i);
  }
  function Bl(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") {
      if ((t.mode & 4) == 0) {
        t.memoizedState = { baseLanes: 0 }, Ca(t, n);
      } else if ((n & 1073741824) != 0) {
        t.memoizedState = { baseLanes: 0 },
          Ca(
            t,
            i !== null ? i.baseLanes : n,
          );
      } else {
        return e = i !== null ? i.baseLanes | n : n,
          t.lanes = t.childLanes = 1073741824,
          t.memoizedState = { baseLanes: e },
          Ca(t, e),
          null;
      }
    } else {
      i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n,
        Ca(t, r);
    }
    return xe(e, t, o, n), t.child;
  }
  function rh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 128);
  }
  function zl(e, t, n, r, o) {
    var i = ge(n) ? fn : se.current;
    return i = Kn(t, i),
      Zn(t, o),
      n = Vl(e, t, n, r, i, o),
      e !== null && !We
        ? (t.updateQueue = e.updateQueue,
          t.flags &= -517,
          e.lanes &= ~o,
          vt(e, t, o))
        : (t.flags |= 1, xe(e, t, n, o), t.child);
  }
  function oh(e, t, n, r, o) {
    if (ge(n)) {
      var i = !0;
      oa(t);
    } else i = !1;
    if (
      Zn(t, o), t.stateNode === null
    ) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2),
        bm(t, n, r),
        Tl(t, n, r, o),
        r = !0;
    } else if (e === null) {
      var a = t.stateNode, u = t.memoizedProps;
      a.props = u;
      var s = a.context, l = n.contextType;
      typeof l == "object" && l !== null
        ? l = Ve(l)
        : (l = ge(n) ? fn : se.current, l = Kn(t, l));
      var d = n.getDerivedStateFromProps,
        m = typeof d == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function";
      m ||
      typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function" ||
      (u !== r || s !== l) && Im(t, a, r, l), Vt = !1;
      var v = t.memoizedState;
      a.state = v,
        uo(t, r, a, o),
        s = t.memoizedState,
        u !== r || v !== s || ye.current || Vt
          ? (typeof d == "function" && (fa(t, n, d, r), s = t.memoizedState),
            (u = Vt || Dm(t, n, u, r, v, s, l))
              ? (m ||
                typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function" ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == "function" && (t.flags |= 4))
              : (typeof a.componentDidMount == "function" && (t.flags |= 4),
                t.memoizedProps = r,
                t.memoizedState = s),
            a.props = r,
            a.state = s,
            a.context = l,
            r = u)
          : (typeof a.componentDidMount == "function" && (t.flags |= 4),
            r = !1);
    } else {
      a = t.stateNode,
        Nm(e, t),
        u = t.memoizedProps,
        l = t.type === t.elementType ? u : He(t.type, u),
        a.props = l,
        m = t.pendingProps,
        v = a.context,
        s = n.contextType,
        typeof s == "object" && s !== null
          ? s = Ve(s)
          : (s = ge(n) ? fn : se.current, s = Kn(t, s));
      var h = n.getDerivedStateFromProps;
      (d = typeof h == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function") ||
      typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function" ||
      (u !== m || v !== s) && Im(t, a, r, s),
        Vt = !1,
        v = t.memoizedState,
        a.state = v,
        uo(t, r, a, o);
      var g = t.memoizedState;
      u !== m || v !== g || ye.current || Vt
        ? (typeof h == "function" && (fa(t, n, h, r), g = t.memoizedState),
          (l = Vt || Dm(t, n, l, r, v, g, s))
            ? (d ||
              typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function" ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, g, s),
                typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, g, s)),
              typeof a.componentDidUpdate == "function" && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == "function" &&
              (t.flags |= 256))
            : (typeof a.componentDidUpdate != "function" ||
              u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != "function" ||
              u === e.memoizedProps && v === e.memoizedState ||
              (t.flags |= 256),
              t.memoizedProps = r,
              t.memoizedState = g),
          a.props = r,
          a.state = g,
          a.context = s,
          r = l)
        : (typeof a.componentDidUpdate != "function" ||
          u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != "function" ||
          u === e.memoizedProps && v === e.memoizedState || (t.flags |= 256),
          r = !1);
    }
    return Ul(e, t, n, r, i, o);
  }
  function Ul(e, t, n, r, o, i) {
    rh(e, t);
    var a = (t.flags & 64) != 0;
    if (!r && !a) return o && Sm(t, n, !1), vt(e, t, i);
    r = t.stateNode, DS.current = t;
    var u = a && typeof n.getDerivedStateFromError != "function"
      ? null
      : r.render();
    return t.flags |= 1,
      e !== null && a
        ? (t.child = ma(t, e.child, null, i), t.child = ma(t, null, u, i))
        : xe(e, t, u, i),
      t.memoizedState = r.state,
      o && Sm(t, n, !0),
      t.child;
  }
  function ih(e) {
    var t = e.stateNode;
    t.pendingContext
      ? wm(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && wm(e, t.context, !1), Ol(e, t.containerInfo);
  }
  var Pa = { dehydrated: null, retryLane: 0 };
  function lh(e, t, n) {
    var r = t.pendingProps, o = G.current, i = !1, a;
    return (a = (t.flags & 64) != 0) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) != 0),
      a
        ? (i = !0, t.flags &= -65)
        : e !== null && e.memoizedState === null || r.fallback === void 0 ||
          r.unstable_avoidThisFallback === !0 || (o |= 1),
      Y(G, o & 1),
      e === null
        ? (r.fallback !== void 0 && Ll(t),
          e = r.children,
          o = r.fallback,
          i
            ? (e = ah(t, e, o, n),
              t.child.memoizedState = { baseLanes: n },
              t.memoizedState = Pa,
              e)
            : typeof r.unstable_expectedLoadTime == "number"
            ? (e = ah(t, e, o, n),
              t.child.memoizedState = { baseLanes: n },
              t.memoizedState = Pa,
              t.lanes = 33554432,
              e)
            : (n = $l({ mode: "visible", children: e }, t.mode, n, null),
              n.return = t,
              t.child = n))
        : e.memoizedState !== null
        ? i
          ? (r = sh(e, t, r.children, r.fallback, n),
            i = t.child,
            o = e.child.memoizedState,
            i.memoizedState = o === null
              ? { baseLanes: n }
              : { baseLanes: o.baseLanes | n },
            i.childLanes = e.childLanes & ~n,
            t.memoizedState = Pa,
            r)
          : (n = uh(e, t, r.children, n), t.memoizedState = null, n)
        : i
        ? (r = sh(e, t, r.children, r.fallback, n),
          i = t.child,
          o = e.child.memoizedState,
          i.memoizedState = o === null
            ? { baseLanes: n }
            : { baseLanes: o.baseLanes | n },
          i.childLanes = e.childLanes & ~n,
          t.memoizedState = Pa,
          r)
        : (n = uh(e, t, r.children, n), t.memoizedState = null, n);
  }
  function ah(e, t, n, r) {
    var o = e.mode, i = e.child;
    return t = { mode: "hidden", children: t },
      (o & 2) == 0 && i !== null
        ? (i.childLanes = 0, i.pendingProps = t)
        : i = $l(t, o, 0, null),
      n = qn(n, o, r, null),
      i.return = e,
      n.return = e,
      i.sibling = n,
      e.child = i,
      n;
  }
  function uh(e, t, n, r) {
    var o = e.child;
    return e = o.sibling,
      n = jt(o, { mode: "visible", children: n }),
      (t.mode & 2) == 0 && (n.lanes = r),
      n.return = t,
      n.sibling = null,
      e !== null &&
      (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e),
      t.child = n;
  }
  function sh(e, t, n, r, o) {
    var i = t.mode, a = e.child;
    e = a.sibling;
    var u = { mode: "hidden", children: n };
    return (i & 2) == 0 && t.child !== a
      ? (n = t.child,
        n.childLanes = 0,
        n.pendingProps = u,
        a = n.lastEffect,
        a !== null
          ? (t.firstEffect = n.firstEffect,
            t.lastEffect = a,
            a.nextEffect = null)
          : t.firstEffect = t.lastEffect = null)
      : n = jt(a, u),
      e !== null ? r = jt(e, r) : (r = qn(r, i, o, null), r.flags |= 2),
      r.return = t,
      n.return = t,
      n.sibling = r,
      t.child = n,
      r;
  }
  function fh(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Lm(e.return, t);
  }
  function Hl(e, t, n, r, o, i) {
    var a = e.memoizedState;
    a === null
      ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
        lastEffect: i,
      }
      : (a.isBackwards = t,
        a.rendering = null,
        a.renderingStartTime = 0,
        a.last = r,
        a.tail = n,
        a.tailMode = o,
        a.lastEffect = i);
  }
  function ch(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, i = r.tail;
    if (xe(e, t, r.children, n), r = G.current, (r & 2) != 0) {r = r & 1 | 2,
        t.flags |= 64;} else {
      if (e !== null && (e.flags & 64) != 0) {
        e:
        for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && fh(e, n);
          else if (e.tag === 19) fh(e, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      }
      r &= 1;
    }
    if (Y(G, r), (t.mode & 2) == 0) t.memoizedState = null;
    else {
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null;) {
            e = n.alternate,
              e !== null && ha(e) === null && (o = n),
              n = n.sibling;
          }
          n = o,
            n === null
              ? (o = t.child, t.child = null)
              : (o = n.sibling, n.sibling = null),
            Hl(t, !1, o, n, i, t.lastEffect);
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null;) {
            if (e = o.alternate, e !== null && ha(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = n, n = o, o = e;
          }
          Hl(t, !0, n, null, i, t.lastEffect);
          break;
        case "together":
          Hl(t, !1, null, null, void 0, t.lastEffect);
          break;
        default:
          t.memoizedState = null;
      }
    }
    return t.child;
  }
  function vt(e, t, n) {
    if (
      e !== null && (t.dependencies = e.dependencies),
        ao |= t.lanes,
        (n & t.childLanes) != 0
    ) {
      if (e !== null && t.child !== e.child) throw Error(k(153));
      if (t.child !== null) {
        for (
          e = t.child, n = jt(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        ) {
          e = e.sibling, n = n.sibling = jt(e, e.pendingProps), n.return = t;
        }
        n.sibling = null;
      }
      return t.child;
    }
    return null;
  }
  var dh, Wl, ph, vh;
  dh = function (e, t) {
    for (var n = t.child; n !== null;) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null;) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  };
  Wl = function () {};
  ph = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      e = t.stateNode, pn(et.current);
      var i = null;
      switch (n) {
        case "input":
          o = _s(e, o), r = _s(e, r), i = [];
          break;
        case "option":
          o = Ms(e, o), r = Ms(e, r), i = [];
          break;
        case "select":
          o = $({}, o, { value: void 0 }),
            r = $({}, r, { value: void 0 }),
            i = [];
          break;
        case "textarea":
          o = Ls(e, o), r = Ls(e, r), i = [];
          break;
        default:
          typeof o.onClick != "function" && typeof r.onClick == "function" &&
            (e.onclick = ea);
      }
      Rs(n, r);
      var a;
      n = null;
      for (l in o) {
        if (!r.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null) {
          if (l === "style") {
            var u = o[l];
            for (a in u) {
              u.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
            }
          } else {
            l !== "dangerouslySetInnerHTML" && l !== "children" &&
              l !== "suppressContentEditableWarning" &&
              l !== "suppressHydrationWarning" && l !== "autoFocus" &&
              (Rr.hasOwnProperty(l)
                ? i || (i = [])
                : (i = i || []).push(l, null));
          }
        }
      }
      for (l in r) {
        var s = r[l];
        if (
          u = o != null ? o[l] : void 0,
            r.hasOwnProperty(l) && s !== u && (s != null || u != null)
        ) {
          if (l === "style") {
            if (u) {
              for (a in u) {
                !u.hasOwnProperty(a) || s && s.hasOwnProperty(a) ||
                  (n || (n = {}), n[a] = "");
              }
              for (a in s) {
                s.hasOwnProperty(a) && u[a] !== s[a] &&
                  (n || (n = {}), n[a] = s[a]);
              }
            } else n || (i || (i = []), i.push(l, n)), n = s;
          } else {
            l === "dangerouslySetInnerHTML"
              ? (s = s ? s.__html : void 0,
                u = u ? u.__html : void 0,
                s != null && u !== s && (i = i || []).push(l, s))
              : l === "children"
              ? typeof s != "string" && typeof s != "number" ||
                (i = i || []).push(l, "" + s)
              : l !== "suppressContentEditableWarning" &&
                l !== "suppressHydrationWarning" && (Rr.hasOwnProperty(l)
                  ? (s != null && l === "onScroll" && z("scroll", e),
                    i || u === s || (i = []))
                  : typeof s == "object" && s !== null && s.$$typeof === Ss
                  ? s.toString()
                  : (i = i || []).push(l, s));
          }
        }
      }
      n && (i = i || []).push("style", n);
      var l = i;
      (t.updateQueue = l) && (t.flags |= 4);
    }
  };
  vh = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function wo(e, t) {
    if (!tt) {
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null;) {
            t.alternate !== null && (n = t), t = t.sibling;
          }
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null;) {
            n.alternate !== null && (r = n), n = n.sibling;
          }
          r === null
            ? t || e.tail === null ? e.tail = null : e.tail.sibling = null
            : r.sibling = null;
      }
    }
  }
  function bS(e, t, n) {
    var r = t.pendingProps;
    switch (t.tag) {
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
        return null;
      case 1:
        return ge(t.type) && ra(), null;
      case 3:
        return Jn(),
          B(ye),
          B(se),
          Al(),
          r = t.stateNode,
          r.pendingContext &&
          (r.context = r.pendingContext, r.pendingContext = null),
          (e === null || e.child === null) &&
          (ya(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)),
          Wl(t),
          null;
      case 5:
        Ml(t);
        var o = pn(co.current);
        if (n = t.type, e !== null && t.stateNode != null) {ph(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 128);} else {
          if (!r) {
            if (t.stateNode === null) throw Error(k(166));
            return null;
          }
          if (e = pn(et.current), ya(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[Nt] = t, r[na] = i, n) {
              case "dialog":
                z("cancel", r), z("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                z("load", r);
                break;
              case "video":
              case "audio":
                for (e = 0; e < ro.length; e++) z(ro[e], r);
                break;
              case "source":
                z("error", r);
                break;
              case "img":
              case "image":
              case "link":
                z("error", r), z("load", r);
                break;
              case "details":
                z("toggle", r);
                break;
              case "input":
                iv(r, i), z("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple },
                  z("invalid", r);
                break;
              case "textarea":
                sv(r, i), z("invalid", r);
            }
            Rs(n, i), e = null;
            for (var a in i) {
              i.hasOwnProperty(a) && (o = i[a],
                a === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o && (e = ["children", o])
                    : typeof o == "number" && r.textContent !== "" + o &&
                      (e = ["children", "" + o])
                  : Rr.hasOwnProperty(a) && o != null && a === "onScroll" &&
                    z("scroll", r));
            }
            switch (n) {
              case "input":
                Vi(r), uv(r, i, !0);
                break;
              case "textarea":
                Vi(r), fv(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = ea);
            }
            r = e, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            switch (
              a = o.nodeType === 9 ? o : o.ownerDocument,
                e === Ns.html && (e = cv(n)),
                e === Ns.html
                  ? n === "script"
                    ? (e = a.createElement("div"),
                      e.innerHTML = "<script></script>",
                      e = e.removeChild(e.firstChild))
                    : typeof r.is == "string"
                    ? e = a.createElement(n, { is: r.is })
                    : (e = a.createElement(n),
                      n === "select" && (a = e,
                        r.multiple
                          ? a.multiple = !0
                          : r.size && (a.size = r.size)))
                  : e = a.createElementNS(e, n),
                e[Nt] = t,
                e[na] = r,
                dh(e, t, !1, !1),
                t.stateNode = e,
                a = Vs(n, r),
                n
            ) {
              case "dialog":
                z("cancel", e), z("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                z("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ro.length; o++) z(ro[o], e);
                o = r;
                break;
              case "source":
                z("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                z("error", e), z("load", e), o = r;
                break;
              case "details":
                z("toggle", e), o = r;
                break;
              case "input":
                iv(e, r), o = _s(e, r), z("invalid", e);
                break;
              case "option":
                o = Ms(e, r);
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple },
                  o = $({}, r, { value: void 0 }),
                  z("invalid", e);
                break;
              case "textarea":
                sv(e, r), o = Ls(e, r), z("invalid", e);
                break;
              default:
                o = r;
            }
            Rs(n, o);
            var u = o;
            for (i in u) {
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? vv(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? (s = s ? s.__html : void 0, s != null && dv(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && jr(e, s)
                    : typeof s == "number" && jr(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" && i !== "autoFocus" &&
                    (Rr.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && z("scroll", e)
                      : s != null && ms(e, i, s, a));
              }
            }
            switch (n) {
              case "input":
                Vi(e), uv(e, r, !1);
                break;
              case "textarea":
                Vi(e), fv(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Tt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple,
                  i = r.value,
                  i != null
                    ? Rn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Rn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ea);
            }
            mm(n, r) && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 128);
        }
        return null;
      case 6:
        if (e && t.stateNode != null) vh(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
          n = pn(co.current),
            pn(et.current),
            ya(t)
              ? (r = t.stateNode,
                n = t.memoizedProps,
                r[Nt] = t,
                r.nodeValue !== n && (t.flags |= 4))
              : (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Nt] = t,
                t.stateNode = r);
        }
        return null;
      case 13:
        return B(G),
          r = t.memoizedState,
          (t.flags & 64) != 0
            ? (t.lanes = n, t)
            : (r = r !== null,
              n = !1,
              e === null
                ? t.memoizedProps.fallback !== void 0 && ya(t)
                : n = e.memoizedState !== null,
              r && !n && (t.mode & 2) != 0 &&
              (e === null &&
                    t.memoizedProps.unstable_avoidThisFallback !== !0 ||
                  (G.current & 1) != 0
                ? ae === 0 && (ae = 3)
                : ((ae === 0 || ae === 3) && (ae = 4),
                  me === null ||
                  (ao & 134217727) == 0 && (tr & 134217727) == 0 ||
                  nr(me, ce))),
              (r || n) && (t.flags |= 4),
              null);
      case 4:
        return Jn(), Wl(t), e === null && pm(t.stateNode.containerInfo), null;
      case 10:
        return Cl(t), null;
      case 17:
        return ge(t.type) && ra(), null;
      case 19:
        if (B(G), r = t.memoizedState, r === null) return null;
        if (i = (t.flags & 64) != 0, a = r.rendering, a === null) {
          if (i) wo(r, !1);
          else {
            if (ae !== 0 || e !== null && (e.flags & 64) != 0) {
              for (e = t.child; e !== null;) {
                if (a = ha(e), a !== null) {
                  for (
                    t.flags |= 64,
                      wo(r, !1),
                      i = a.updateQueue,
                      i !== null && (t.updateQueue = i, t.flags |= 4),
                      r.lastEffect === null && (t.firstEffect = null),
                      t.lastEffect = r.lastEffect,
                      r = n,
                      n = t.child;
                    n !== null;
                  ) {
                    i = n,
                      e = r,
                      i.flags &= 2,
                      i.nextEffect = null,
                      i.firstEffect = null,
                      i.lastEffect = null,
                      a = i.alternate,
                      a === null
                        ? (i.childLanes = 0,
                          i.lanes = e,
                          i.child = null,
                          i.memoizedProps = null,
                          i.memoizedState = null,
                          i.updateQueue = null,
                          i.dependencies = null,
                          i.stateNode = null)
                        : (i.childLanes = a.childLanes,
                          i.lanes = a.lanes,
                          i.child = a.child,
                          i.memoizedProps = a.memoizedProps,
                          i.memoizedState = a.memoizedState,
                          i.updateQueue = a.updateQueue,
                          i.type = a.type,
                          e = a.dependencies,
                          i.dependencies = e === null ? null
                          : { lanes: e.lanes, firstContext: e.firstContext }),
                      n = n.sibling;
                  }
                  return Y(G, G.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            }
            r.tail !== null && le() > Yl &&
              (t.flags |= 64, i = !0, wo(r, !1), t.lanes = 33554432);
          }
        } else {
          if (!i) {
            if (e = ha(a), e !== null) {
              if (
                t.flags |= 64,
                  i = !0,
                  n = e.updateQueue,
                  n !== null && (t.updateQueue = n, t.flags |= 4),
                  wo(r, !0),
                  r.tail === null && r.tailMode === "hidden" && !a.alternate &&
                  !tt
              ) {
                return t = t.lastEffect = r.lastEffect,
                  t !== null && (t.nextEffect = null),
                  null;
              }
            } else {
              2 * le() - r.renderingStartTime > Yl && n !== 1073741824 &&
                (t.flags |= 64, i = !0, wo(r, !1), t.lanes = 33554432);
            }
          }
          r.isBackwards
            ? (a.sibling = t.child, t.child = a)
            : (n = r.last,
              n !== null ? n.sibling = a : t.child = a,
              r.last = a);
        }
        return r.tail !== null
          ? (n = r.tail,
            r.rendering = n,
            r.tail = n.sibling,
            r.lastEffect = t.lastEffect,
            r.renderingStartTime = le(),
            n.sibling = null,
            t = G.current,
            Y(G, i ? t & 1 | 2 : t & 1),
            n)
          : null;
      case 23:
      case 24:
        return Gl(),
          e !== null &&
          e.memoizedState !== null != (t.memoizedState !== null) &&
          r.mode !== "unstable-defer-without-hiding" && (t.flags |= 4),
          null;
    }
    throw Error(k(156, t.tag));
  }
  function IS(e) {
    switch (e.tag) {
      case 1:
        ge(e.type) && ra();
        var t = e.flags;
        return t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
      case 3:
        if (Jn(), B(ye), B(se), Al(), t = e.flags, (t & 64) != 0) {
          throw Error(k(285));
        }
        return e.flags = t & -4097 | 64, e;
      case 5:
        return Ml(e), null;
      case 13:
        return B(G),
          t = e.flags,
          t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
      case 19:
        return B(G), null;
      case 4:
        return Jn(), null;
      case 10:
        return Cl(e), null;
      case 23:
      case 24:
        return Gl(), null;
      default:
        return null;
    }
  }
  function Kl(e, t) {
    try {
      var n = "", r = t;
      do n += yx(r), r = r.return; while (r);
      var o = n;
    } catch (i) {
      o = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: o };
  }
  function Xl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var FS = typeof WeakMap == "function" ? WeakMap : Map;
  function mh(e, t, n) {
    n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function () {
      Ta || (Ta = !0, Ql = r), Xl(e, t);
    },
      n;
  }
  function hh(e, t, n) {
    n = Dt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      n.payload = function () {
        return Xl(e, t), r(o);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        typeof r != "function" &&
          (rt === null ? rt = new Set([this]) : rt.add(this), Xl(e, t));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
      n;
  }
  var jS = typeof WeakSet == "function" ? WeakSet : Set;
  function yh(e) {
    var t = e.ref;
    if (t !== null) {
      if (typeof t == "function") {
        try {
          t(null);
        } catch (n) {
          Bt(e, n);
        }
      } else t.current = null;
    }
  }
  function zS(e, t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (t.flags & 256 && e !== null) {
          var n = e.memoizedProps, r = e.memoizedState;
          e = t.stateNode,
            t = e.getSnapshotBeforeUpdate(
              t.elementType === t.type ? n : He(t.type, n),
              r,
            ),
            e.__reactInternalSnapshotBeforeUpdate = t;
        }
        return;
      case 3:
        t.flags & 256 && pl(t.stateNode.containerInfo);
        return;
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(k(163));
  }
  function US(e, t, n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        if (
          t = n.updateQueue, t = t !== null ? t.lastEffect : null, t !== null
        ) {
          e = t = t.next;
          do {
            if ((e.tag & 3) == 3) {
              var r = e.create;
              e.destroy = r();
            }
            e = e.next;
          } while (e !== t);
        }
        if (
          t = n.updateQueue, t = t !== null ? t.lastEffect : null, t !== null
        ) {
          e = t = t.next;
          do {
            var o = e;
            r = o.next,
              o = o.tag,
              (o & 4) != 0 && (o & 1) != 0 && (gh(n, e), BS(n, e)),
              e = r;
          } while (e !== t);
        }
        return;
      case 1:
        e = n.stateNode,
          n.flags & 4 &&
          (t === null
            ? e.componentDidMount()
            : (r = n.elementType === n.type
              ? t.memoizedProps
              : He(n.type, t.memoizedProps),
              e.componentDidUpdate(
                r,
                t.memoizedState,
                e.__reactInternalSnapshotBeforeUpdate,
              ))),
          t = n.updateQueue,
          t !== null && Rm(n, t, e);
        return;
      case 3:
        if (t = n.updateQueue, t !== null) {
          if (e = null, n.child !== null) {
            switch (n.child.tag) {
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          }
          Rm(n, t, e);
        }
        return;
      case 5:
        e = n.stateNode,
          t === null && n.flags & 4 && mm(n.type, n.memoizedProps) && e.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        n.memoizedState === null &&
          (n = n.alternate,
            n !== null &&
            (n = n.memoizedState,
              n !== null && (n = n.dehydrated, n !== null && Lv(n))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error(k(163));
  }
  function wh(e, t) {
    for (var n = e;;) {
      if (n.tag === 5) {
        var r = n.stateNode;
        if (t) {
          r = r.style,
            typeof r.setProperty == "function"
              ? r.setProperty("display", "none", "important")
              : r.display = "none";
        } else {
          r = n.stateNode;
          var o = n.memoizedProps.style;
          o = o != null && o.hasOwnProperty("display") ? o.display : null,
            r.style.display = pv("display", o);
        }
      } else if (n.tag === 6) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
      else if (
        (n.tag !== 23 && n.tag !== 24 || n.memoizedState === null || n === e) &&
        n.child !== null
      ) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null;) {
        if (n.return === null || n.return === e) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  function Sh(e, t) {
    if (cn && typeof cn.onCommitFiberUnmount == "function") {
      try {
        cn.onCommitFiberUnmount(hl, t);
      } catch (i) {}
    }
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (e = t.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
          var n = e = e.next;
          do {
            var r = n, o = r.destroy;
            if (r = r.tag, o !== void 0) {
              if ((r & 4) != 0) gh(t, n);
              else {
                r = t;
                try {
                  o();
                } catch (i) {
                  Bt(r, i);
                }
              }
            }
            n = n.next;
          } while (n !== e);
        }
        break;
      case 1:
        if (
          yh(t), e = t.stateNode, typeof e.componentWillUnmount == "function"
        ) {
          try {
            e.props = t.memoizedProps,
              e.state = t.memoizedState,
              e.componentWillUnmount();
          } catch (i) {
            Bt(t, i);
          }
        }
        break;
      case 5:
        yh(t);
        break;
      case 4:
        xh(e, t);
    }
  }
  function Eh(e) {
    e.alternate = null,
      e.child = null,
      e.dependencies = null,
      e.firstEffect = null,
      e.lastEffect = null,
      e.memoizedProps = null,
      e.memoizedState = null,
      e.pendingProps = null,
      e.return = null,
      e.updateQueue = null;
  }
  function Ch(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ph(e) {
    e: {
      for (var t = e.return; t !== null;) {
        if (Ch(t)) break e;
        t = t.return;
      }
      throw Error(k(160));
    }
    var n = t;
    switch (t = n.stateNode, n.tag) {
      case 5:
        var r = !1;
        break;
      case 3:
        t = t.containerInfo, r = !0;
        break;
      case 4:
        t = t.containerInfo, r = !0;
        break;
      default:
        throw Error(k(161));
    }
    n.flags & 16 && (jr(t, ""), n.flags &= -17);
    e:
    t:
    for (n = e;;) {
      for (; n.sibling === null;) {
        if (n.return === null || Ch(n.return)) {
          n = null;
          break e;
        }
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;
      ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) {
        n = n.stateNode;
        break e;
      }
    }
    r ? Zl(e, n, t) : ql(e, n, t);
  }
  function Zl(e, t, n) {
    var r = e.tag, o = r === 5 || r === 6;
    if (o) {
      e = o ? e.stateNode : e.stateNode.instance,
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
            ? (t = n.parentNode, t.insertBefore(e, n))
            : (t = n, t.appendChild(e)),
            n = n._reactRootContainer,
            n != null || t.onclick !== null || (t.onclick = ea));
    } else if (r !== 4 && (e = e.child, e !== null)) {
      for (Zl(e, t, n), e = e.sibling; e !== null;) {
        Zl(e, t, n), e = e.sibling;
      }
    }
  }
  function ql(e, t, n) {
    var r = e.tag, o = r === 5 || r === 6;
    if (o) {
      e = o ? e.stateNode : e.stateNode.instance,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    } else if (r !== 4 && (e = e.child, e !== null)) {
      for (ql(e, t, n), e = e.sibling; e !== null;) {
        ql(e, t, n), e = e.sibling;
      }
    }
  }
  function xh(e, t) {
    for (var n = t, r = !1, o, i;;) {
      if (!r) {
        r = n.return;
        e:
        for (;;) {
          if (r === null) throw Error(k(160));
          switch (o = r.stateNode, r.tag) {
            case 5:
              i = !1;
              break e;
            case 3:
              o = o.containerInfo, i = !0;
              break e;
            case 4:
              o = o.containerInfo, i = !0;
              break e;
          }
          r = r.return;
        }
        r = !0;
      }
      if (n.tag === 5 || n.tag === 6) {
        e:
        for (var a = e, u = n, s = u;;) {
          if (Sh(a, s), s.child !== null && s.tag !== 4) {
            s.child.return = s, s = s.child;
          } else {
            if (s === u) {
              break e;
            }
            for (; s.sibling === null;) {
              if (s.return === null || s.return === u) break e;
              s = s.return;
            }
            s.sibling.return = s.return, s = s.sibling;
          }
        }
        i
          ? (a = o,
            u = n.stateNode,
            a.nodeType === 8 ? a.parentNode.removeChild(u) : a.removeChild(u))
          : o.removeChild(n.stateNode);
      } else if (n.tag === 4) {
        if (n.child !== null) {
          o = n.stateNode.containerInfo,
            i = !0,
            n.child.return = n,
            n = n.child;
          continue;
        }
      } else if (Sh(e, n), n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null;) {
        if (n.return === null || n.return === t) return;
        n = n.return, n.tag === 4 && (r = !1);
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  function ef(e, t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var n = t.updateQueue;
        if (n = n !== null ? n.lastEffect : null, n !== null) {
          var r = n = n.next;
          do (r.tag & 3) == 3 &&
            (e = r.destroy, r.destroy = void 0, e !== void 0 && e()),
            r = r.next; while (r !== n);
        }
        return;
      case 1:
        return;
      case 5:
        if (n = t.stateNode, n != null) {
          r = t.memoizedProps;
          var o = e !== null ? e.memoizedProps : r;
          e = t.type;
          var i = t.updateQueue;
          if (t.updateQueue = null, i !== null) {
            for (
              n[na] = r,
                e === "input" && r.type === "radio" && r.name != null &&
                av(n, r),
                Vs(e, o),
                t = Vs(e, r),
                o = 0;
              o < i.length;
              o += 2
            ) {
              var a = i[o], u = i[o + 1];
              a === "style"
                ? vv(n, u)
                : a === "dangerouslySetInnerHTML"
                ? dv(n, u)
                : a === "children"
                ? jr(n, u)
                : ms(n, a, u, t);
            }
            switch (e) {
              case "input":
                Os(n, r);
                break;
              case "textarea":
                lv(n, r);
                break;
              case "select":
                e = n._wrapperState.wasMultiple,
                  n._wrapperState.wasMultiple = !!r.multiple,
                  i = r.value,
                  i != null
                    ? Rn(n, !!r.multiple, i, !1)
                    : e !== !!r.multiple && (r.defaultValue != null
                      ? Rn(n, !!r.multiple, r.defaultValue, !0)
                      : Rn(n, !!r.multiple, r.multiple ? [] : "", !1));
            }
          }
        }
        return;
      case 6:
        if (t.stateNode === null) throw Error(k(162));
        t.stateNode.nodeValue = t.memoizedProps;
        return;
      case 3:
        n = t.stateNode, n.hydrate && (n.hydrate = !1, Lv(n.containerInfo));
        return;
      case 12:
        return;
      case 13:
        t.memoizedState !== null && (Jl = le(), wh(t.child, !0)), Th(t);
        return;
      case 19:
        Th(t);
        return;
      case 17:
        return;
      case 23:
      case 24:
        wh(t, t.memoizedState !== null);
        return;
    }
    throw Error(k(163));
  }
  function Th(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new jS()),
        t.forEach(function (r) {
          var o = $S.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        });
    }
  }
  function HS(e, t) {
    return e !== null &&
        (e = e.memoizedState, e === null || e.dehydrated !== null)
      ? (t = t.memoizedState, t !== null && t.dehydrated === null)
      : !1;
  }
  var WS = Math.ceil,
    _a = on.ReactCurrentDispatcher,
    tf = on.ReactCurrentOwner,
    N = 0,
    me = null,
    q = null,
    ce = 0,
    hn = 0,
    nf = At(0),
    ae = 0,
    ka = null,
    rr = 0,
    ao = 0,
    tr = 0,
    rf = 0,
    of = null,
    Jl = 0,
    Yl = Infinity;
  function or() {
    Yl = le() + 500;
  }
  var M = null,
    Ta = !1,
    Ql = null,
    rt = null,
    Ut = !1,
    xo = null,
    So = 90,
    af = [],
    uf = [],
    mt = null,
    Eo = 0,
    sf = null,
    Oa = -1,
    ht = 0,
    Ma = 0,
    Co = null,
    La = !1;
  function _e() {
    return (N & 48) != 0 ? le() : Oa !== -1 ? Oa : Oa = le();
  }
  function It(e) {
    if (e = e.mode, (e & 2) == 0) return 1;
    if ((e & 4) == 0) return Xn() === 99 ? 1 : 2;
    if (ht === 0 && (ht = rr), LS.transition !== 0) {
      Ma !== 0 && (Ma = of !== null ? of.pendingLanes : 0), e = ht;
      var t = 4186112 & ~Ma;
      return t &= -t,
        t === 0 && (e = 4186112 & ~e, t = e & -e, t === 0 && (t = 8192)),
        t;
    }
    return e = Xn(),
      (N & 4) != 0 && e === 98 ? e = $i(12, ht) : (e = Rx(e), e = $i(e, ht)),
      e;
  }
  function Ft(e, t, n) {
    if (50 < Eo) throw Eo = 0, sf = null, Error(k(185));
    if (e = Na(e, t), e === null) return null;
    Hi(e, t, n), e === me && (tr |= t, ae === 4 && nr(e, ce));
    var r = Xn();
    t === 1
      ? (N & 8) != 0 && (N & 48) == 0
        ? lf(e)
        : (Ie(e, n), N === 0 && (or(), Je()))
      : ((N & 4) == 0 || r !== 98 && r !== 99 ||
        (mt === null ? mt = new Set([e]) : mt.add(e)),
        Ie(e, n)), of = e;
  }
  function Na(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (
      n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;
    ) {
      e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    }
    return n.tag === 3 ? n.stateNode : null;
  }
  function Ie(e, t) {
    for (
      var n = e.callbackNode,
        r = e.suspendedLanes,
        o = e.pingedLanes,
        i = e.expirationTimes,
        a = e.pendingLanes;
      0 < a;
    ) {
      var u = 31 - Mt(a), s = 1 << u, l = i[u];
      if (l === -1) {
        if ((s & r) == 0 || (s & o) != 0) {
          l = t, Fn(s);
          var d = F;
          i[u] = 10 <= d ? l + 250 : 6 <= d ? l + 5e3 : -1;
        }
      } else l <= t && (e.expiredLanes |= s);
      a &= ~s;
    }
    if (r = Xr(e, e === me ? ce : 0), t = F, r === 0) {
      n !== null &&
        (n !== xl && gl(n), e.callbackNode = null, e.callbackPriority = 0);
    } else {
      if (n !== null) {
        if (e.callbackPriority === t) return;
        n !== xl && gl(n);
      }
      t === 15
        ? (n = lf.bind(null, e),
          dt === null ? (dt = [n], aa = yl(ia, Mm)) : dt.push(n),
          n = xl)
        : t === 14
        ? n = io(99, lf.bind(null, e))
        : (n = Vx(t), n = io(n, _h.bind(null, e))),
        e.callbackPriority = t,
        e.callbackNode = n;
    }
  }
  function _h(e) {
    if (Oa = -1, Ma = ht = 0, (N & 48) != 0) throw Error(k(327));
    var t = e.callbackNode;
    if ($t() && e.callbackNode !== t) return null;
    var n = Xr(e, e === me ? ce : 0);
    if (n === 0) return null;
    var r = n, o = N;
    N |= 16;
    var i = Oh();
    (me !== e || ce !== r) && (or(), ir(e, r));
    do try {
      YS();
      break;
    } catch (u) {
      kh(e, u);
    } while (1);
    if (
      El(),
        _a.current = i,
        N = o,
        q !== null ? r = 0 : (me = null, ce = 0, r = ae),
        (rr & tr) != 0
    ) {
      ir(e, 0);
    } else if (r !== 0) {
      if (
        r === 2 &&
        (N |= 64,
          e.hydrate && (e.hydrate = !1, pl(e.containerInfo)),
          n = Iv(e),
          n !== 0 && (r = Po(e, n))), r === 1
      ) {
        throw t = ka, ir(e, 0), nr(e, n), Ie(e, le()), t;
      }
      switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          yn(e);
          break;
        case 3:
          if (nr(e, n), (n & 62914560) === n && (r = Jl + 500 - le(), 10 < r)) {
            if (Xr(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & n) !== n) {
              _e(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = hm(yn.bind(null, e), r);
            break;
          }
          yn(e);
          break;
        case 4:
          if (nr(e, n), (n & 4186112) === n) break;
          for (r = e.eventTimes, o = -1; 0 < n;) {
            var a = 31 - Mt(n);
            i = 1 << a, a = r[a], a > o && (o = a), n &= ~i;
          }
          if (
            n = o,
              n = le() - n,
              n = (120 > n ? 120 : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * WS(n / 1960)) - n,
              10 < n
          ) {
            e.timeoutHandle = hm(yn.bind(null, e), n);
            break;
          }
          yn(e);
          break;
        case 5:
          yn(e);
          break;
        default:
          throw Error(k(329));
      }
    }
    return Ie(e, le()), e.callbackNode === t ? _h.bind(null, e) : null;
  }
  function nr(e, t) {
    for (
      t &= ~rf,
        t &= ~tr,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - Mt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function lf(e) {
    if ((N & 48) != 0) throw Error(k(327));
    if ($t(), e === me && (e.expiredLanes & ce) != 0) {
      var t = ce, n = Po(e, t);
      (rr & tr) != 0 && (t = Xr(e, t), n = Po(e, t));
    } else t = Xr(e, 0), n = Po(e, t);
    if (
      e.tag !== 0 && n === 2 &&
      (N |= 64,
        e.hydrate && (e.hydrate = !1, pl(e.containerInfo)),
        t = Iv(e),
        t !== 0 && (n = Po(e, t))), n === 1
    ) {
      throw n = ka, ir(e, 0), nr(e, t), Ie(e, le()), n;
    }
    return e.finishedWork = e.current.alternate,
      e.finishedLanes = t,
      yn(e),
      Ie(e, le()),
      null;
  }
  function GS() {
    if (mt !== null) {
      var e = mt;
      mt = null,
        e.forEach(function (t) {
          t.expiredLanes |= 24 & t.pendingLanes, Ie(t, le());
        });
    }
    Je();
  }
  function Mh(e, t) {
    var n = N;
    N |= 1;
    try {
      return e(t);
    } finally {
      N = n, N === 0 && (or(), Je());
    }
  }
  function Lh(e, t) {
    var n = N;
    N &= -2, N |= 8;
    try {
      return e(t);
    } finally {
      N = n, N === 0 && (or(), Je());
    }
  }
  function Ca(e, t) {
    Y(nf, hn), hn |= t, rr |= t;
  }
  function Gl() {
    hn = nf.current, B(nf);
  }
  function ir(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, PS(n)), q !== null) {
      for (n = q.return; n !== null;) {
        var r = n;
        switch (r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && ra();
            break;
          case 3:
            Jn(), B(ye), B(se), Al();
            break;
          case 5:
            Ml(r);
            break;
          case 4:
            Jn();
            break;
          case 13:
            B(G);
            break;
          case 19:
            B(G);
            break;
          case 10:
            Cl(r);
            break;
          case 23:
          case 24:
            Gl();
        }
        n = n.return;
      }
    }
    me = e,
      q = jt(e.current, null),
      ce = hn = rr = t,
      ae = 0,
      ka = null,
      rf = tr = ao = 0;
  }
  function kh(e, t) {
    do {
      var n = q;
      try {
        if (El(), po.current = wa, ga) {
          for (var r = K.memoizedState; r !== null;) {
            var o = r.queue;
            o !== null && (o.pending = null), r = r.next;
          }
          ga = !1;
        }
        if (
          vo = 0,
            ie = fe = K = null,
            mo = !1,
            tf.current = null,
            n === null || n.return === null
        ) {
          ae = 1, ka = t, q = null;
          break;
        }
        e: {
          var i = e, a = n.return, u = n, s = t;
          if (
            t = ce,
              u.flags |= 2048,
              u.firstEffect = u.lastEffect = null,
              s !== null && typeof s == "object" && typeof s.then == "function"
          ) {
            var l = s;
            if ((u.mode & 2) == 0) {
              var d = u.alternate;
              d
                ? (u.updateQueue = d.updateQueue,
                  u.memoizedState = d.memoizedState,
                  u.lanes = d.lanes)
                : (u.updateQueue = null, u.memoizedState = null);
            }
            var m = (G.current & 1) != 0, v = a;
            do {
              var h;
              if (h = v.tag === 13) {
                var g = v.memoizedState;
                if (g !== null) h = g.dehydrated !== null;
                else {
                  var x = v.memoizedProps;
                  h = x.fallback === void 0
                    ? !1
                    : x.unstable_avoidThisFallback !== !0
                    ? !0
                    : !m;
                }
              }
              if (h) {
                var c = v.updateQueue;
                if (c === null) {
                  var f = new Set();
                  f.add(l), v.updateQueue = f;
                } else c.add(l);
                if ((v.mode & 2) == 0) {
                  if (
                    v.flags |= 64,
                      u.flags |= 16384,
                      u.flags &= -2981,
                      u.tag === 1
                  ) {
                    if (u.alternate === null) u.tag = 17;
                    else {
                      var p = Dt(-1, 1);
                      p.tag = 2, bt(u, p);
                    }
                  }
                  u.lanes |= 1;
                  break e;
                }
                s = void 0, u = t;
                var y = i.pingCache;
                if (
                  y === null
                    ? (y = i.pingCache = new FS(), s = new Set(), y.set(l, s))
                    : (s = y.get(l),
                      s === void 0 && (s = new Set(), y.set(l, s))), !s.has(u)
                ) {
                  s.add(u);
                  var w = KS.bind(null, i, l, u);
                  l.then(w, w);
                }
                v.flags |= 4096, v.lanes = t;
                break e;
              }
              v = v.return;
            } while (v !== null);
            s = Error(
              (An(u.type) || "A React component") +
                ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`,
            );
          }
          ae !== 5 && (ae = 2), s = Kl(s, u), v = a;
          do {
            switch (v.tag) {
              case 3:
                i = s, v.flags |= 4096, t &= -t, v.lanes |= t;
                var E = mh(v, i, t);
                Am(v, E);
                break e;
              case 1:
                i = s;
                var S = v.type, T = v.stateNode;
                if (
                  (v.flags & 64) == 0 &&
                  (typeof S.getDerivedStateFromError == "function" ||
                    T !== null && typeof T.componentDidCatch == "function" &&
                      (rt === null || !rt.has(T)))
                ) {
                  v.flags |= 4096, t &= -t, v.lanes |= t;
                  var O = hh(v, i, t);
                  Am(v, O);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        Nh(n);
      } catch (_) {
        t = _, q === n && n !== null && (q = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Oh() {
    var e = _a.current;
    return _a.current = wa, e === null ? wa : e;
  }
  function Po(e, t) {
    var n = N;
    N |= 16;
    var r = Oh();
    me === e && ce === t || ir(e, t);
    do try {
      XS();
      break;
    } catch (o) {
      kh(e, o);
    } while (1);
    if (El(), N = n, _a.current = r, q !== null) throw Error(k(261));
    return me = null, ce = 0, ae;
  }
  function XS() {
    for (; q !== null;) Ah(q);
  }
  function YS() {
    for (; q !== null && !kS();) Ah(q);
  }
  function Ah(e) {
    var t = Rh(e.alternate, e, hn);
    e.memoizedProps = e.pendingProps,
      t === null ? Nh(e) : q = t,
      tf.current = null;
  }
  function Nh(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 2048) == 0) {
        if (n = bS(n, t, hn), n !== null) {
          q = n;
          return;
        }
        if (
          n = t,
            n.tag !== 24 && n.tag !== 23 || n.memoizedState === null ||
            (hn & 1073741824) != 0 || (n.mode & 4) == 0
        ) {
          for (var r = 0, o = n.child; o !== null;) {
            r |= o.lanes | o.childLanes, o = o.sibling;
          }
          n.childLanes = r;
        }
        e !== null && (e.flags & 2048) == 0 &&
          (e.firstEffect === null && (e.firstEffect = t.firstEffect),
            t.lastEffect !== null &&
            (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect),
              e.lastEffect = t.lastEffect),
            1 < t.flags &&
            (e.lastEffect !== null
              ? e.lastEffect.nextEffect = t
              : e.firstEffect = t,
              e.lastEffect = t));
      } else {
        if (n = IS(t), n !== null) {
          n.flags &= 2047, q = n;
          return;
        }
        e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
      }
      if (t = t.sibling, t !== null) {
        q = t;
        return;
      }
      q = t = e;
    } while (t !== null);
    ae === 0 && (ae = 5);
  }
  function yn(e) {
    var t = Xn();
    return dn(99, QS.bind(null, e, t)), null;
  }
  function QS(e, t) {
    do $t(); while (xo !== null);
    if ((N & 48) != 0) throw Error(k(327));
    var n = e.finishedWork;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) {
      throw Error(k(177));
    }
    e.callbackNode = null;
    var r = n.lanes | n.childLanes, o = r, i = e.pendingLanes & ~o;
    e.pendingLanes = o,
      e.suspendedLanes = 0,
      e.pingedLanes = 0,
      e.expiredLanes &= o,
      e.mutableReadLanes &= o,
      e.entangledLanes &= o,
      o = e.entanglements;
    for (var a = e.eventTimes, u = e.expirationTimes; 0 < i;) {
      var s = 31 - Mt(i), l = 1 << s;
      o[s] = 0, a[s] = -1, u[s] = -1, i &= ~l;
    }
    if (
      mt !== null && (r & 24) == 0 && mt.has(e) && mt.delete(e),
        e === me && (q = me = null, ce = 0),
        1 < n.flags
          ? n.lastEffect !== null
            ? (n.lastEffect.nextEffect = n, r = n.firstEffect)
            : r = n
          : r = n.firstEffect,
        r !== null
    ) {
      if (o = N, N |= 32, tf.current = null, fl = Wi, a = om(), al(a)) {
        if ("selectionStart" in a) {
          u = { start: a.selectionStart, end: a.selectionEnd };
        } else {
          e:
          if (
            u = (u = a.ownerDocument) && u.defaultView || window,
              (l = u.getSelection && u.getSelection()) && l.rangeCount !== 0
          ) {
            u = l.anchorNode,
              i = l.anchorOffset,
              s = l.focusNode,
              l = l.focusOffset;
            try {
              u.nodeType, s.nodeType;
            } catch (_) {
              u = null;
              break e;
            }
            var d = 0, m = -1, v = -1, h = 0, g = 0, x = a, c = null;
            t:
            for (;;) {
              for (
                var f;
                x !== u || i !== 0 && x.nodeType !== 3 || (m = d + i),
                  x !== s || l !== 0 && x.nodeType !== 3 || (v = d + l),
                  x.nodeType === 3 && (d += x.nodeValue.length),
                  (f = x.firstChild) !== null;
              ) {
                c = x, x = f;
              }
              for (;;) {
                if (x === a) break t;
                if (
                  c === u && ++h === i && (m = d),
                    c === s && ++g === l && (v = d),
                    (f = x.nextSibling) !== null
                ) {
                  break;
                }
                x = c, c = x.parentNode;
              }
              x = f;
            }
            u = m === -1 || v === -1 ? null : { start: m, end: v };
          } else u = null;
        }
        u = u || { start: 0, end: 0 };
      } else u = null;
      cl = { focusedElem: a, selectionRange: u },
        Wi = !1,
        Co = null,
        La = !1,
        M = r;
      do try {
        ZS();
      } catch (_) {
        if (M === null) throw Error(k(330));
        Bt(M, _), M = M.nextEffect;
      } while (M !== null);
      Co = null, M = r;
      do try {
        for (a = e; M !== null;) {
          var p = M.flags;
          if (p & 16 && jr(M.stateNode, ""), p & 128) {
            var y = M.alternate;
            if (y !== null) {
              var w = y.ref;
              w !== null &&
                (typeof w == "function" ? w(null) : w.current = null);
            }
          }
          switch (p & 1038) {
            case 2:
              Ph(M), M.flags &= -3;
              break;
            case 6:
              Ph(M), M.flags &= -3, ef(M.alternate, M);
              break;
            case 1024:
              M.flags &= -1025;
              break;
            case 1028:
              M.flags &= -1025, ef(M.alternate, M);
              break;
            case 4:
              ef(M.alternate, M);
              break;
            case 8:
              u = M, xh(a, u);
              var E = u.alternate;
              Eh(u), E !== null && Eh(E);
          }
          M = M.nextEffect;
        }
      } catch (_) {
        if (M === null) throw Error(k(330));
        Bt(M, _), M = M.nextEffect;
      } while (M !== null);
      if (
        w = cl,
          y = om(),
          p = w.focusedElem,
          a = w.selectionRange,
          y !== p && p && p.ownerDocument &&
          rm(p.ownerDocument.documentElement, p)
      ) {
        for (
          a !== null && al(p) &&
          (y = a.start,
            w = a.end,
            w === void 0 && (w = y),
            "selectionStart" in p
              ? (p.selectionStart = y,
                p.selectionEnd = Math.min(w, p.value.length))
              : (w = (y = p.ownerDocument || document) && y.defaultView ||
                window,
                w.getSelection &&
                (w = w.getSelection(),
                  u = p.textContent.length,
                  E = Math.min(a.start, u),
                  a = a.end === void 0 ? E : Math.min(a.end, u),
                  !w.extend && E > a && (u = a, a = E, E = u),
                  u = nm(p, E),
                  i = nm(p, a),
                  u && i &&
                  (w.rangeCount !== 1 || w.anchorNode !== u.node ||
                    w.anchorOffset !== u.offset || w.focusNode !== i.node ||
                    w.focusOffset !== i.offset) &&
                  (y = y.createRange(),
                    y.setStart(u.node, u.offset),
                    w.removeAllRanges(),
                    E > a
                      ? (w.addRange(y), w.extend(i.node, i.offset))
                      : (y.setEnd(i.node, i.offset), w.addRange(y)))))),
            y = [],
            w = p;
          w = w.parentNode;
        ) {
          w.nodeType === 1 &&
            y.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
        }
        for (
          typeof p.focus == "function" && p.focus(), p = 0; p < y.length; p++
        ) {
          w = y[p], w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
        }
      }
      Wi = !!fl, cl = fl = null, e.current = n, M = r;
      do try {
        for (p = e; M !== null;) {
          var S = M.flags;
          if (S & 36 && US(p, M.alternate, M), S & 128) {
            y = void 0;
            var T = M.ref;
            if (T !== null) {
              var O = M.stateNode;
              switch (M.tag) {
                case 5:
                  y = O;
                  break;
                default:
                  y = O;
              }
              typeof T == "function" ? T(y) : T.current = y;
            }
          }
          M = M.nextEffect;
        }
      } catch (_) {
        if (M === null) throw Error(k(330));
        Bt(M, _), M = M.nextEffect;
      } while (M !== null);
      M = null, MS(), N = o;
    } else e.current = n;
    if (Ut) Ut = !1, xo = e, So = t;
    else {
      for (M = r; M !== null;) {
        t = M.nextEffect,
          M.nextEffect = null,
          M.flags & 8 && (S = M, S.sibling = null, S.stateNode = null),
          M = t;
      }
    }
    if (
      r = e.pendingLanes,
        r === 0 && (rt = null),
        r === 1 ? e === sf ? Eo++ : (Eo = 0, sf = e) : Eo = 0,
        n = n.stateNode,
        cn && typeof cn.onCommitFiberRoot == "function"
    ) {
      try {
        cn.onCommitFiberRoot(hl, n, void 0, (n.current.flags & 64) == 64);
      } catch (_) {}
    }
    if (Ie(e, le()), Ta) throw Ta = !1, e = Ql, Ql = null, e;
    return (N & 8) != 0 || Je(), null;
  }
  function ZS() {
    for (; M !== null;) {
      var e = M.alternate;
      La || Co === null ||
        ((M.flags & 8) != 0
          ? Cv(M, Co) && (La = !0)
          : M.tag === 13 && HS(e, M) && Cv(M, Co) && (La = !0));
      var t = M.flags;
      (t & 256) != 0 && zS(e, M),
        (t & 512) == 0 || Ut || (Ut = !0,
          io(97, function () {
            return $t(), null;
          })),
        M = M.nextEffect;
    }
  }
  function $t() {
    if (So !== 90) {
      var e = 97 < So ? 97 : So;
      return So = 90, dn(e, qS);
    }
    return !1;
  }
  function BS(e, t) {
    af.push(t, e),
      Ut || (Ut = !0,
        io(97, function () {
          return $t(), null;
        }));
  }
  function gh(e, t) {
    uf.push(t, e),
      Ut || (Ut = !0,
        io(97, function () {
          return $t(), null;
        }));
  }
  function qS() {
    if (xo === null) return !1;
    var e = xo;
    if (xo = null, (N & 48) != 0) throw Error(k(331));
    var t = N;
    N |= 32;
    var n = uf;
    uf = [];
    for (var r = 0; r < n.length; r += 2) {
      var o = n[r], i = n[r + 1], a = o.destroy;
      if (o.destroy = void 0, typeof a == "function") {
        try {
          a();
        } catch (s) {
          if (i === null) throw Error(k(330));
          Bt(i, s);
        }
      }
    }
    for (n = af, af = [], r = 0; r < n.length; r += 2) {
      o = n[r], i = n[r + 1];
      try {
        var u = o.create;
        o.destroy = u();
      } catch (s) {
        if (i === null) throw Error(k(330));
        Bt(i, s);
      }
    }
    for (u = e.current.firstEffect; u !== null;) {
      e = u.nextEffect,
        u.nextEffect = null,
        u.flags & 8 && (u.sibling = null, u.stateNode = null),
        u = e;
    }
    return N = t, Je(), !0;
  }
  function Vh(e, t, n) {
    t = Kl(n, t),
      t = mh(e, t, 1),
      bt(e, t),
      t = _e(),
      e = Na(e, 1),
      e !== null && (Hi(e, 1, t), Ie(e, t));
  }
  function Bt(e, t) {
    if (e.tag === 3) Vh(e, e, t);
    else {
      for (var n = e.return; n !== null;) {
        if (n.tag === 3) {
          Vh(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            typeof r.componentDidCatch == "function" &&
              (rt === null || !rt.has(r))
          ) {
            e = Kl(t, e);
            var o = hh(n, e, 1);
            if (bt(n, o), o = _e(), n = Na(n, 1), n !== null) {
              Hi(n, 1, o), Ie(n, o);
            } else if (
              typeof r.componentDidCatch == "function" &&
              (rt === null || !rt.has(r))
            ) {
              try {
                r.componentDidCatch(t, e);
              } catch (i) {}
            }
            break;
          }
        }
        n = n.return;
      }
    }
  }
  function KS(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      t = _e(),
      e.pingedLanes |= e.suspendedLanes & n,
      me === e && (ce & n) === n &&
      (ae === 4 || ae === 3 && (ce & 62914560) === ce && 500 > le() - Jl
        ? ir(e, 0)
        : rf |= n),
      Ie(e, t);
  }
  function $S(e, t) {
    var n = e.stateNode;
    n !== null && n.delete(t),
      t = 0,
      t === 0 && (t = e.mode,
        (t & 2) == 0
          ? t = 1
          : (t & 4) == 0
          ? t = Xn() === 99
            ? 1
            : 2
          : (ht === 0 && (ht = rr),
            t = jn(62914560 & ~ht),
            t === 0 && (t = 4194304))),
      n = _e(),
      e = Na(e, t),
      e !== null && (Hi(e, t, n), Ie(e, n));
  }
  var Rh;
  Rh = function (e, t, n) {
    var r = t.lanes;
    if (e !== null) {
      if (e.memoizedProps !== t.pendingProps || ye.current) We = !0;
      else if ((n & r) != 0) We = (e.flags & 16384) != 0;
      else {
        switch (We = !1, t.tag) {
          case 3:
            ih(t), Nl();
            break;
          case 5:
            zm(t);
            break;
          case 1:
            ge(t.type) && oa(t);
            break;
          case 4:
            Ol(t, t.stateNode.containerInfo);
            break;
          case 10:
            r = t.memoizedProps.value;
            var o = t.type._context;
            Y(ua, o._currentValue), o._currentValue = r;
            break;
          case 13:
            if (t.memoizedState !== null) {
              return (n & t.child.childLanes) != 0
                ? lh(e, t, n)
                : (Y(G, G.current & 1),
                  t = vt(e, t, n),
                  t !== null ? t.sibling : null);
            }
            Y(G, G.current & 1);
            break;
          case 19:
            if (r = (n & t.childLanes) != 0, (e.flags & 64) != 0) {
              if (r) return ch(e, t, n);
              t.flags |= 64;
            }
            if (
              o = t.memoizedState,
                o !== null &&
                (o.rendering = null, o.tail = null, o.lastEffect = null),
                Y(G, G.current),
                r
            ) {
              break;
            }
            return null;
          case 23:
          case 24:
            return t.lanes = 0, Bl(e, t, n);
        }
        return vt(e, t, n);
      }
    } else We = !1;
    switch (t.lanes = 0, t.tag) {
      case 2:
        if (
          r = t.type,
            e !== null &&
            (e.alternate = null, t.alternate = null, t.flags |= 2),
            e = t.pendingProps,
            o = Kn(t, se.current),
            Zn(t, n),
            o = Vl(null, t, r, e, o, n),
            t.flags |= 1,
            typeof o == "object" && o !== null &&
            typeof o.render == "function" && o.$$typeof === void 0
        ) {
          if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ge(r)) {
            var i = !0;
            oa(t);
          } else i = !1;
          t.memoizedState = o.state !== null && o.state !== void 0
            ? o.state
            : null, Pl(t);
          var a = r.getDerivedStateFromProps;
          typeof a == "function" && fa(t, r, a, e),
            o.updater = ca,
            t.stateNode = o,
            o._reactInternals = t,
            Tl(t, r, e, n),
            t = Ul(null, t, r, !0, i, n);
        } else t.tag = 0, xe(null, t, o, n), t = t.child;
        return t;
      case 16:
        o = t.elementType;
        e: {
          switch (
            e !== null &&
            (e.alternate = null, t.alternate = null, t.flags |= 2),
              e = t.pendingProps,
              i = o._init,
              o = i(o._payload),
              t.type = o,
              i = t.tag = JS(o),
              e = He(o, e),
              i
          ) {
            case 0:
              t = zl(null, t, o, e, n);
              break e;
            case 1:
              t = oh(null, t, o, e, n);
              break e;
            case 11:
              t = eh(null, t, o, e, n);
              break e;
            case 14:
              t = nh(null, t, o, He(o.type, e), r, n);
              break e;
          }
          throw Error(k(306, o, ""));
        }
        return t;
      case 0:
        return r = t.type,
          o = t.pendingProps,
          o = t.elementType === r ? o : He(r, o),
          zl(e, t, r, o, n);
      case 1:
        return r = t.type,
          o = t.pendingProps,
          o = t.elementType === r ? o : He(r, o),
          oh(e, t, r, o, n);
      case 3:
        if (ih(t), r = t.updateQueue, e === null || r === null) {
          throw Error(k(282));
        }
        if (
          r = t.pendingProps,
            o = t.memoizedState,
            o = o !== null ? o.element : null,
            Nm(e, t),
            uo(t, r, null, n),
            r = t.memoizedState.element,
            r === o
        ) {
          Nl(), t = vt(e, t, n);
        } else {
          if (
            o = t.stateNode,
              (i = o.hydrate) &&
              (zt = Yn(t.stateNode.containerInfo.firstChild),
                pt = t,
                i = tt = !0),
              i
          ) {
            if (e = o.mutableSourceEagerHydrationData, e != null) {
              for (o = 0; o < e.length; o += 2) {
                i = e[o],
                  i._workInProgressVersionPrimary = e[o + 1],
                  er.push(i);
              }
            }
            for (
              n = jm(t, null, r, n), t.child = n; n;
            ) {
              n.flags = n.flags & -3 | 1024, n = n.sibling;
            }
          } else xe(e, t, r, n), Nl();
          t = t.child;
        }
        return t;
      case 5:
        return zm(t),
          e === null && Ll(t),
          r = t.type,
          o = t.pendingProps,
          i = e !== null ? e.memoizedProps : null,
          a = o.children,
          dl(r, o) ? a = null : i !== null && dl(r, i) && (t.flags |= 16),
          rh(e, t),
          xe(e, t, a, n),
          t.child;
      case 6:
        return e === null && Ll(t), null;
      case 13:
        return lh(e, t, n);
      case 4:
        return Ol(t, t.stateNode.containerInfo),
          r = t.pendingProps,
          e === null ? t.child = ma(t, null, r, n) : xe(e, t, r, n),
          t.child;
      case 11:
        return r = t.type,
          o = t.pendingProps,
          o = t.elementType === r ? o : He(r, o),
          eh(e, t, r, o, n);
      case 7:
        return xe(e, t, t.pendingProps, n), t.child;
      case 8:
        return xe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return xe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          r = t.type._context,
            o = t.pendingProps,
            a = t.memoizedProps,
            i = o.value;
          var u = t.type._context;
          if (Y(ua, u._currentValue), u._currentValue = i, a !== null) {
            if (
              u = a.value,
                i = Re(u, i)
                  ? 0
                  : (typeof r._calculateChangedBits == "function"
                    ? r._calculateChangedBits(u, i)
                    : 1073741823) | 0,
                i === 0
            ) {
              if (a.children === o.children && !ye.current) {
                t = vt(e, t, n);
                break e;
              }
            } else {
              for (u = t.child, u !== null && (u.return = t); u !== null;) {
                var s = u.dependencies;
                if (s !== null) {
                  a = u.child;
                  for (var l = s.firstContext; l !== null;) {
                    if (l.context === r && (l.observedBits & i) != 0) {
                      u.tag === 1 && (l = Dt(-1, n & -n), l.tag = 2, bt(u, l)),
                        u.lanes |= n,
                        l = u.alternate,
                        l !== null && (l.lanes |= n),
                        Lm(u.return, n),
                        s.lanes |= n;
                      break;
                    }
                    l = l.next;
                  }
                } else a = u.tag === 10 && u.type === t.type ? null : u.child;
                if (a !== null) a.return = u;
                else {
                  for (a = u; a !== null;) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (u = a.sibling, u !== null) {
                      u.return = a.return, a = u;
                      break;
                    }
                    a = a.return;
                  }
                }
                u = a;
              }
            }
          }
          xe(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type,
          i = t.pendingProps,
          r = i.children,
          Zn(t, n),
          o = Ve(o, i.unstable_observedBits),
          r = r(o),
          t.flags |= 1,
          xe(e, t, r, n),
          t.child;
      case 14:
        return o = t.type,
          i = He(o, t.pendingProps),
          i = He(o.type, i),
          nh(e, t, o, i, r, n);
      case 15:
        return th(e, t, t.type, t.pendingProps, r, n);
      case 17:
        return r = t.type,
          o = t.pendingProps,
          o = t.elementType === r ? o : He(r, o),
          e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2),
          t.tag = 1,
          ge(r) ? (e = !0, oa(t)) : e = !1,
          Zn(t, n),
          bm(t, r, o),
          Tl(t, r, o, n),
          Ul(null, t, r, !0, e, n);
      case 19:
        return ch(e, t, n);
      case 23:
        return Bl(e, t, n);
      case 24:
        return Bl(e, t, n);
    }
    throw Error(k(156, t.tag));
  };
  function eE(e, t, n, r) {
    this.tag = e,
      this.key = n,
      this.sibling = this.child = this.return = this.stateNode = this.type =
        this.elementType = null,
      this.index = 0,
      this.ref = null,
      this.pendingProps = t,
      this.dependencies = this.memoizedState = this.updateQueue = this
        .memoizedProps = null,
      this.mode = r,
      this.flags = 0,
      this.lastEffect = this.firstEffect = this.nextEffect = null,
      this.childLanes = this.lanes = 0,
      this.alternate = null;
  }
  function De(e, t, n, r) {
    return new eE(e, t, n, r);
  }
  function jl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function JS(e) {
    if (typeof e == "function") return jl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Li) return 11;
      if (e === Ai) return 14;
    }
    return 2;
  }
  function jt(e, t) {
    var n = e.alternate;
    return n === null
      ? (n = De(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n)
      : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.nextEffect = null,
        n.firstEffect = null,
        n.lastEffect = null),
      n.childLanes = e.childLanes,
      n.lanes = e.lanes,
      n.child = e.child,
      n.memoizedProps = e.memoizedProps,
      n.memoizedState = e.memoizedState,
      n.updateQueue = e.updateQueue,
      t = e.dependencies,
      n.dependencies = t === null
        ? null
        : { lanes: t.lanes, firstContext: t.firstContext },
      n.sibling = e.sibling,
      n.index = e.index,
      n.ref = e.ref,
      n;
  }
  function va(e, t, n, r, o, i) {
    var a = 2;
    if (r = e, typeof e == "function") jl(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else {
      e:
      switch (e) {
        case Pt:
          return qn(n.children, o, i, t);
        case tv:
          a = 8, o |= 16;
          break;
        case hs:
          a = 8, o |= 1;
          break;
        case Dr:
          return e = De(12, n, t, o | 8),
            e.elementType = Dr,
            e.type = Dr,
            e.lanes = i,
            e;
        case br:
          return e = De(13, n, t, o),
            e.type = br,
            e.elementType = br,
            e.lanes = i,
            e;
        case Ni:
          return e = De(19, n, t, o), e.elementType = Ni, e.lanes = i, e;
        case Es:
          return $l(n, o, i, t);
        case Cs:
          return e = De(24, n, t, o), e.elementType = Cs, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null) {
            switch (e.$$typeof) {
              case ys:
                a = 10;
                break e;
              case gs:
                a = 9;
                break e;
              case Li:
                a = 11;
                break e;
              case Ai:
                a = 14;
                break e;
              case ws:
                a = 16, r = null;
                break e;
              case xs:
                a = 22;
                break e;
            }
          }
          throw Error(k(130, e == null ? e : typeof e, ""));
      }
    }
    return t = De(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function qn(e, t, n, r) {
    return e = De(7, e, r, t), e.lanes = n, e;
  }
  function $l(e, t, n, r) {
    return e = De(23, e, r, t), e.elementType = Es, e.lanes = n, e;
  }
  function _l(e, t, n) {
    return e = De(6, e, null, t), e.lanes = n, e;
  }
  function kl(e, t, n) {
    return t = De(4, e.children !== null ? e.children : [], e.key, t),
      t.lanes = n,
      t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      },
      t;
  }
  function tE(e, t, n) {
    this.tag = t,
      this.containerInfo = e,
      this.finishedWork = this.pingCache = this.current = this.pendingChildren =
        null,
      this.timeoutHandle = -1,
      this.pendingContext = this.context = null,
      this.hydrate = n,
      this.callbackNode = null,
      this.callbackPriority = 0,
      this.eventTimes = Qs(0),
      this.expirationTimes = Qs(-1),
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this
        .expiredLanes = this.pingedLanes = this.suspendedLanes = this
          .pendingLanes = 0,
      this.entanglements = Qs(0),
      this.mutableSourceEagerHydrationData = null;
  }
  function nE(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0
      ? arguments[3]
      : null;
    return {
      $$typeof: an,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Aa(e, t, n, r) {
    var o = t.current, i = _e(), a = It(o);
    e:
    if (n) {
      n = n._reactInternals;
      t: {
        if (sn(n) !== n || n.tag !== 1) throw Error(k(170));
        var u = n;
        do {
          switch (u.tag) {
            case 3:
              u = u.stateNode.context;
              break t;
            case 1:
              if (ge(u.type)) {
                u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                break t;
              }
          }
          u = u.return;
        } while (u !== null);
        throw Error(k(171));
      }
      if (n.tag === 1) {
        var s = n.type;
        if (ge(s)) {
          n = xm(n, s, u);
          break e;
        }
      }
      n = u;
    } else n = Rt;
    return t.context === null ? t.context = n : t.pendingContext = n,
      t = Dt(i, a),
      t.payload = { element: e },
      r = r === void 0 ? null : r,
      r !== null && (t.callback = r),
      bt(o, t),
      Ft(o, a, i),
      a;
  }
  function ff(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Dh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function cf(e, t) {
    Dh(e, t), (e = e.alternate) && Dh(e, t);
  }
  function rE() {
    return null;
  }
  function df(e, t, n) {
    var r =
      n != null && n.hydrationOptions != null &&
        n.hydrationOptions.mutableSources || null;
    if (
      n = new tE(e, t, n != null && n.hydrate === !0),
        t = De(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0),
        n.current = t,
        t.stateNode = n,
        Pl(t),
        e[Wn] = n.current,
        pm(e.nodeType === 8 ? e.parentNode : e),
        r
    ) {
      for (e = 0; e < r.length; e++) {
        t = r[e];
        var o = t._getVersion;
        o = o(t._source),
          n.mutableSourceEagerHydrationData == null
            ? n.mutableSourceEagerHydrationData = [t, o]
            : n.mutableSourceEagerHydrationData.push(t, o);
      }
    }
    this._internalRoot = n;
  }
  df.prototype.render = function (e) {
    Aa(e, this._internalRoot, null, null);
  };
  df.prototype.unmount = function () {
    var e = this._internalRoot, t = e.containerInfo;
    Aa(null, e, null, function () {
      t[Wn] = null;
    });
  };
  function To(e) {
    return !(!e ||
      e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function oE(e, t) {
    if (
      t || (t = e
        ? e.nodeType === 9 ? e.documentElement : e.firstChild
        : null,
        t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot"))), !t
    ) {
      for (var n; n = e.lastChild;) e.removeChild(n);
    }
    return new df(e, 0, t ? { hydrate: !0 } : void 0);
  }
  function Ra(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
      var a = i._internalRoot;
      if (typeof o == "function") {
        var u = o;
        o = function () {
          var l = ff(a);
          u.call(l);
        };
      }
      Aa(t, a, e, o);
    } else {
      if (
        i = n._reactRootContainer = oE(n, r),
          a = i._internalRoot,
          typeof o == "function"
      ) {
        var s = o;
        o = function () {
          var l = ff(a);
          s.call(l);
        };
      }
      Lh(function () {
        Aa(t, a, e, o);
      });
    }
    return ff(a);
  }
  Pv = function (e) {
    if (e.tag === 13) {
      var t = _e();
      Ft(e, 4, t), cf(e, 4);
    }
  };
  $s = function (e) {
    if (e.tag === 13) {
      var t = _e();
      Ft(e, 67108864, t), cf(e, 67108864);
    }
  };
  Tv = function (e) {
    if (e.tag === 13) {
      var t = _e(), n = It(e);
      Ft(e, n, t), cf(e, n);
    }
  };
  _v = function (e, t) {
    return t();
  };
  bs = function (e, t, n) {
    switch (t) {
      case "input":
        if (Os(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode;) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
            ), t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = Ii(r);
              if (!o) throw Error(k(90));
              ov(r), Os(r, o);
            }
          }
        }
        break;
      case "textarea":
        lv(e, n);
        break;
      case "select":
        t = n.value, t != null && Rn(e, !!n.multiple, t, !1);
    }
  };
  Is = Mh;
  gv = function (e, t, n, r, o) {
    var i = N;
    N |= 4;
    try {
      return dn(98, e.bind(null, t, n, r, o));
    } finally {
      N = i, N === 0 && (or(), Je());
    }
  };
  Fs = function () {
    (N & 49) == 0 && (GS(), $t());
  };
  wv = function (e, t) {
    var n = N;
    N |= 2;
    try {
      return e(t);
    } finally {
      N = n, N === 0 && (or(), Je());
    }
  };
  function bh(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0
      ? arguments[2]
      : null;
    if (!To(t)) throw Error(k(200));
    return nE(e, t, null, n);
  }
  var iE = { Events: [Br, Un, Ii, hv, yv, $t, { current: !1 }] },
    _o = {
      findFiberByHostInstance: ln,
      bundleType: 0,
      version: "17.0.1",
      rendererPackageName: "react-dom",
    },
    aE = {
      bundleType: _o.bundleType,
      version: _o.version,
      rendererPackageName: _o.rendererPackageName,
      rendererConfig: _o.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: on.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return e = Ev(e), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: _o.findFiberByHostInstance || rE,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
    };
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" &&
    (ko = __REACT_DEVTOOLS_GLOBAL_HOOK__, !ko.isDisabled && ko.supportsFiber)
  ) {
    try {
      hl = ko.inject(aE), cn = ko;
    } catch (e) {}
  }
  var ko;
  Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iE;
  Ae.createPortal = bh;
  Ae.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) {
      throw typeof e.render == "function"
        ? Error(k(188))
        : Error(k(268, Object.keys(e)));
    }
    return e = Ev(t), e = e === null ? null : e.stateNode, e;
  };
  Ae.flushSync = function (e, t) {
    var n = N;
    if ((n & 48) != 0) return e(t);
    N |= 1;
    try {
      if (e) return dn(99, e.bind(null, t));
    } finally {
      N = n, Je();
    }
  };
  Ae.hydrate = function (e, t, n) {
    if (!To(t)) throw Error(k(200));
    return Ra(null, e, t, !0, n);
  };
  Ae.render = function (e, t, n) {
    if (!To(t)) throw Error(k(200));
    return Ra(null, e, t, !1, n);
  };
  Ae.unmountComponentAtNode = function (e) {
    if (!To(e)) throw Error(k(40));
    return e._reactRootContainer
      ? (Lh(function () {
        Ra(null, null, e, !1, function () {
          e._reactRootContainer = null, e[Wn] = null;
        });
      }),
        !0)
      : !1;
  };
  Ae.unstable_batchedUpdates = Mh;
  Ae.unstable_createPortal = function (e, t) {
    return bh(
      e,
      t,
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null,
    );
  };
  Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!To(n)) throw Error(k(200));
    if (e == null || e._reactInternals === void 0) throw Error(k(38));
    return Ra(e, t, n, !1, r);
  };
  Ae.version = "17.0.1";
});
var zh = Se((OC, Fh) => {
  "use strict";
  function jh() {
    if (
      !(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")
    ) {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jh);
      } catch (e) {
        console.error(e);
      }
    }
  }
  jh(), Fh.exports = Ih();
});
var oy = Se((I) => {
  "use strict";
  var te = typeof Symbol == "function" && Symbol.for,
    Cf = te ? Symbol.for("react.element") : 60103,
    Pf = te ? Symbol.for("react.portal") : 60106,
    Ba = te ? Symbol.for("react.fragment") : 60107,
    Ua = te ? Symbol.for("react.strict_mode") : 60108,
    $a = te ? Symbol.for("react.profiler") : 60114,
    Ha = te ? Symbol.for("react.provider") : 60109,
    Wa = te ? Symbol.for("react.context") : 60110,
    Tf = te ? Symbol.for("react.async_mode") : 60111,
    Ya = te ? Symbol.for("react.concurrent_mode") : 60111,
    Ga = te ? Symbol.for("react.forward_ref") : 60112,
    Ka = te ? Symbol.for("react.suspense") : 60113,
    kE = te ? Symbol.for("react.suspense_list") : 60120,
    Xa = te ? Symbol.for("react.memo") : 60115,
    Qa = te ? Symbol.for("react.lazy") : 60116,
    OE = te ? Symbol.for("react.block") : 60121,
    ME = te ? Symbol.for("react.fundamental") : 60117,
    LE = te ? Symbol.for("react.responder") : 60118,
    NE = te ? Symbol.for("react.scope") : 60119;
  function ke(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Cf:
          switch (e = e.type, e) {
            case Tf:
            case Ya:
            case Ba:
            case $a:
            case Ua:
            case Ka:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case Wa:
                case Ga:
                case Qa:
                case Xa:
                case Ha:
                  return e;
                default:
                  return t;
              }
          }
        case Pf:
          return t;
      }
    }
  }
  function ry(e) {
    return ke(e) === Ya;
  }
  I.AsyncMode = Tf;
  I.ConcurrentMode = Ya;
  I.ContextConsumer = Wa;
  I.ContextProvider = Ha;
  I.Element = Cf;
  I.ForwardRef = Ga;
  I.Fragment = Ba;
  I.Lazy = Qa;
  I.Memo = Xa;
  I.Portal = Pf;
  I.Profiler = $a;
  I.StrictMode = Ua;
  I.Suspense = Ka;
  I.isAsyncMode = function (e) {
    return ry(e) || ke(e) === Tf;
  };
  I.isConcurrentMode = ry;
  I.isContextConsumer = function (e) {
    return ke(e) === Wa;
  };
  I.isContextProvider = function (e) {
    return ke(e) === Ha;
  };
  I.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === Cf;
  };
  I.isForwardRef = function (e) {
    return ke(e) === Ga;
  };
  I.isFragment = function (e) {
    return ke(e) === Ba;
  };
  I.isLazy = function (e) {
    return ke(e) === Qa;
  };
  I.isMemo = function (e) {
    return ke(e) === Xa;
  };
  I.isPortal = function (e) {
    return ke(e) === Pf;
  };
  I.isProfiler = function (e) {
    return ke(e) === $a;
  };
  I.isStrictMode = function (e) {
    return ke(e) === Ua;
  };
  I.isSuspense = function (e) {
    return ke(e) === Ka;
  };
  I.isValidElementType = function (e) {
    return typeof e == "string" || typeof e == "function" || e === Ba ||
      e === Ya || e === $a || e === Ua || e === Ka || e === kE ||
      typeof e == "object" && e !== null &&
        (e.$$typeof === Qa || e.$$typeof === Xa || e.$$typeof === Ha ||
          e.$$typeof === Wa || e.$$typeof === Ga || e.$$typeof === ME ||
          e.$$typeof === LE || e.$$typeof === NE || e.$$typeof === OE);
  };
  I.typeOf = ke;
});
var ay = Se((BC, iy) => {
  "use strict";
  iy.exports = oy();
});
var Of = Se((UC, uy) => {
  "use strict";
  var _f = ay(),
    AE = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    RE = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    VE = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    sy = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    kf = {};
  kf[_f.ForwardRef] = VE;
  kf[_f.Memo] = sy;
  function ly(e) {
    return _f.isMemo(e) ? sy : kf[e.$$typeof] || AE;
  }
  var DE = Object.defineProperty,
    bE = Object.getOwnPropertyNames,
    fy = Object.getOwnPropertySymbols,
    IE = Object.getOwnPropertyDescriptor,
    FE = Object.getPrototypeOf,
    cy = Object.prototype;
  function dy(e, t, n) {
    if (typeof t != "string") {
      if (cy) {
        var r = FE(t);
        r && r !== cy && dy(e, r, n);
      }
      var o = bE(t);
      fy && (o = o.concat(fy(t)));
      for (var i = ly(e), a = ly(t), u = 0; u < o.length; ++u) {
        var s = o[u];
        if (!RE[s] && !(n && n[s]) && !(a && a[s]) && !(i && i[s])) {
          var l = IE(t, s);
          try {
            DE(e, s, l);
          } catch (d) {}
        }
      }
    }
    return e;
  }
  uy.exports = dy;
});
var Ey = Se((aP, Nf) => {
  function Af() {
    return Nf.exports = Af = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
      }
      return e;
    },
      Af.apply(this, arguments);
  }
  Nf.exports = Af;
});
var ni = {};
Ry(ni, {
  AnimateLayoutFeature: () => _p,
  AnimatePresence: () => Dw,
  AnimateSharedLayout: () => Bw,
  AnimationControls: () => _r,
  AnimationFeature: () => Sp,
  DragControls: () => zp,
  DragFeature: () => wp,
  ExitFeature: () => xp,
  FramerTreeLayoutContext: () => qu,
  GesturesFeature: () => op,
  HTMLVisualElement: () => zu,
  LayoutGroupContext: () => Vd,
  MotionConfig: () => o1,
  MotionConfigContext: () => Et,
  MotionValue: () => Sr,
  PresenceContext: () => Zt,
  SharedLayoutContext: () => kr,
  VisibilityAction: () => en,
  addScaleCorrection: () => wg,
  animate: () => nx,
  animateVisualElement: () => vi,
  animationControls: () => O1,
  createBatcher: () => hi,
  createDomMotionComponent: () => Ow,
  createMotionComponent: () => gi,
  isValidMotionProp: () => Zu,
  m: () => Mw,
  motion: () => Si,
  motionValue: () => pe,
  resolveMotionValue: () => Hw,
  transform: () => Vp,
  useAnimation: () => tx,
  useCycle: () => rx,
  useDeprecatedAnimatedState: () => sx,
  useDeprecatedInvertedScale: () => fx,
  useDomEvent: () => fi,
  useDragControls: () => ix,
  useElementScroll: () => Xw,
  useExternalRef: () => ax,
  useGestures: () => np,
  useIsPresent: () => ew,
  useMotionTemplate: () => $w,
  useMotionValue: () => Or,
  usePanGesture: () => Ud,
  usePresence: () => Ju,
  useReducedMotion: () => ex,
  useSpring: () => Gw,
  useTapGesture: () => ep,
  useTransform: () => ts,
  useVariantContext: () => Uu,
  useViewportScroll: () => qw,
});
var tu = function (e, t) {
  return tu = Object.setPrototypeOf ||
    { __proto__: [] } instanceof Array && function (n, r) {
        n.__proto__ = r;
      } ||
    function (n, r) {
      for (var o in r) r.hasOwnProperty(o) && (n[o] = r[o]);
    },
    tu(e, t);
};
function Wt(e, t) {
  tu(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null
    ? Object.create(t)
    : (n.prototype = t.prototype, new n());
}
var P = function () {
  return P = Object.assign || function (t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
    }
    return t;
  },
    P.apply(this, arguments);
};
function J(e, t) {
  var n = {};
  for (var r in e) {
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  }
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
    }
  }
  return n;
}
function Df(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") {
    return {
      next: function () {
        return e && r >= e.length && (e = void 0),
          { value: e && e[r++], done: !e };
      },
    };
  }
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function X(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), o, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done;) i.push(o.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}
function Ee() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e = e.concat(X(arguments[t]));
  }
  return e;
}
function bf() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) {
    e += arguments[t].length;
  }
  for (var r = Array(e), o = 0, t = 0; t < n; t++) {
    for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++) {
      r[o] = i[a];
    }
  }
  return r;
}
var If = 1 / 60 * 1e3,
  Ff = typeof window != "undefined"
    ? function (e) {
      return window.requestAnimationFrame(e);
    }
    : function (e) {
      return setTimeout(function () {
        return e(performance.now());
      }, If);
    };
function Dy(e) {
  var t = [],
    n = [],
    r = 0,
    o = !1,
    i = new WeakSet(),
    a = {
      schedule: function (u, s, l) {
        s === void 0 && (s = !1), l === void 0 && (l = !1);
        var d = l && o, m = d ? t : n;
        return s && i.add(u),
          m.indexOf(u) === -1 && (m.push(u), d && o && (r = t.length)),
          u;
      },
      cancel: function (u) {
        var s = n.indexOf(u);
        s !== -1 && n.splice(s, 1), i.delete(u);
      },
      process: function (u) {
        var s;
        if (
          o = !0, s = [n, t], t = s[0], n = s[1], n.length = 0, r = t.length, r
        ) {
          for (var l = 0; l < r; l++) {
            var d = t[l];
            d(u), i.has(d) && (a.schedule(d), e());
          }
        }
        o = !1;
      },
    };
  return a;
}
var by = 40,
  nu = !0,
  lr = !1,
  ru = !1,
  fr = { delta: 0, timestamp: 0 },
  jo = ["read", "update", "preRender", "render", "postRender"],
  ou = jo.reduce(function (e, t) {
    return e[t] = Dy(function () {
      return lr = !0;
    }),
      e;
  }, {}),
  Fy = jo.reduce(function (e, t) {
    var n = ou[t];
    return e[t] = function (r, o, i) {
      return o === void 0 && (o = !1),
        i === void 0 && (i = !1),
        lr || Iy(),
        n.schedule(r, o, i);
    },
      e;
  }, {}),
  wn = jo.reduce(function (e, t) {
    return e[t] = ou[t].cancel, e;
  }, {}),
  jy = function (e) {
    return ou[e].process(fr);
  },
  jf = function (e) {
    lr = !1,
      fr.delta = nu ? If : Math.max(Math.min(e - fr.timestamp, by), 1),
      fr.timestamp = e,
      ru = !0,
      jo.forEach(jy),
      ru = !1,
      lr && (nu = !1, Ff(jf));
  },
  Iy = function () {
    lr = !0, nu = !0, ru || Ff(jf);
  },
  xn = function () {
    return fr;
  },
  Ce = Fy;
var Sn = function () {}, Q = function () {};
var zf = function (e, t) {
    return function (n) {
      return Math.max(Math.min(n, t), e);
    };
  },
  cr = function (e) {
    return e % 1 ? Number(e.toFixed(5)) : e;
  },
  dr = /(-)?([\d]*\.?[\d])+/g,
  iu =
    /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
  zy =
    /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function pr(e) {
  return typeof e == "string";
}
var St = {
    test: function (e) {
      return typeof e == "number";
    },
    parse: parseFloat,
    transform: function (e) {
      return e;
    },
  },
  En = P(P({}, St), { transform: zf(0, 1) }),
  vr = P(P({}, St), { default: 1 }),
  mr = function (e) {
    return {
      test: function (t) {
        return pr(t) && t.endsWith(e) && t.split(" ").length === 1;
      },
      parse: parseFloat,
      transform: function (t) {
        return "" + t + e;
      },
    };
  },
  st = mr("deg"),
  Yt = mr("%"),
  L = mr("px"),
  Bf = mr("vh"),
  Uf = mr("vw"),
  au = P(P({}, Yt), {
    parse: function (e) {
      return Yt.parse(e) / 100;
    },
    transform: function (e) {
      return Yt.transform(e * 100);
    },
  }),
  uu = function (e, t) {
    return function (n) {
      return pr(n) && zy.test(n) && n.startsWith(e) || t && n.hasOwnProperty(t);
    };
  },
  $f = function (e, t, n) {
    return function (r) {
      var o;
      if (!pr(r)) return r;
      var i = r.match(dr), a = i[0], u = i[1], s = i[2], l = i[3];
      return o = {},
        o[e] = parseFloat(a),
        o[t] = parseFloat(u),
        o[n] = parseFloat(s),
        o.alpha = l !== void 0 ? parseFloat(l) : 1,
        o;
    };
  },
  Gt = {
    test: uu("hsl", "hue"),
    parse: $f("hue", "saturation", "lightness"),
    transform: function (e) {
      var t = e.hue,
        n = e.saturation,
        r = e.lightness,
        o = e.alpha,
        i = o === void 0 ? 1 : o;
      return "hsla(" + Math.round(t) + ", " + Yt.transform(cr(n)) + ", " +
        Yt.transform(cr(r)) + ", " + cr(En.transform(i)) + ")";
    },
  },
  By = zf(0, 255),
  su = P(P({}, St), {
    transform: function (e) {
      return Math.round(By(e));
    },
  }),
  Kt = {
    test: uu("rgb", "red"),
    parse: $f("red", "green", "blue"),
    transform: function (e) {
      var t = e.red,
        n = e.green,
        r = e.blue,
        o = e.alpha,
        i = o === void 0 ? 1 : o;
      return "rgba(" + su.transform(t) + ", " + su.transform(n) + ", " +
        su.transform(r) + ", " + cr(En.transform(i)) + ")";
    },
  };
function Uy(e) {
  var t = "", n = "", r = "", o = "";
  return e.length > 5
    ? (t = e.substr(1, 2),
      n = e.substr(3, 2),
      r = e.substr(5, 2),
      o = e.substr(7, 2))
    : (t = e.substr(1, 1),
      n = e.substr(2, 1),
      r = e.substr(3, 1),
      o = e.substr(4, 1),
      t += t,
      n += n,
      r += r,
      o += o),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    };
}
var zo = { test: uu("#"), parse: Uy, transform: Kt.transform },
  ne = {
    test: function (e) {
      return Kt.test(e) || zo.test(e) || Gt.test(e);
    },
    parse: function (e) {
      return Kt.test(e) ? Kt.parse(e) : Gt.test(e) ? Gt.parse(e) : zo.parse(e);
    },
    transform: function (e) {
      return pr(e) ? e : e.hasOwnProperty("red")
        ? Kt.transform(e)
        : Gt.transform(e);
    },
  },
  Hf = "${c}",
  Wf = "${n}";
function $y(e) {
  var t, n, r, o;
  return isNaN(e) && pr(e) &&
    ((n = (t = e.match(dr)) === null || t === void 0 ? void 0 : t.length) !==
                null && n !== void 0
            ? n
            : 0) +
          ((o = (r = e.match(iu)) === null || r === void 0
                  ? void 0
                  : r.length) !== null && o !== void 0
            ? o
            : 0) > 0;
}
function Yf(e) {
  var t = [], n = 0, r = e.match(iu);
  r && (n = r.length, e = e.replace(iu, Hf), t.push.apply(t, r.map(ne.parse)));
  var o = e.match(dr);
  return o && (e = e.replace(dr, Wf), t.push.apply(t, o.map(St.parse))),
    { values: t, numColors: n, tokenised: e };
}
function Gf(e) {
  return Yf(e).values;
}
function Kf(e) {
  var t = Yf(e), n = t.values, r = t.numColors, o = t.tokenised, i = n.length;
  return function (a) {
    for (var u = o, s = 0; s < i; s++) {
      u = u.replace(
        s < r ? Hf : Wf,
        s < r ? ne.transform(a[s]) : cr(a[s]),
      );
    }
    return u;
  };
}
var Hy = function (e) {
  return typeof e == "number" ? 0 : e;
};
function Wy(e) {
  var t = Gf(e), n = Kf(e);
  return n(t.map(Hy));
}
var Be = { test: $y, parse: Gf, createTransformer: Kf, getAnimatableNone: Wy },
  Yy = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Gy(e) {
  var t = e.slice(0, -1).split("("), n = t[0], r = t[1];
  if (n === "drop-shadow") return e;
  var o = (r.match(dr) || [])[0];
  if (!o) return e;
  var i = r.replace(o, ""), a = Yy.has(n) ? 1 : 0;
  return o !== r && (a *= 100), n + "(" + a + i + ")";
}
var Ky = /([a-z-]*)\(.*?\)/g,
  Bo = P(P({}, Be), {
    getAnimatableNone: function (e) {
      var t = e.match(Ky);
      return t ? t.map(Gy).join(" ") : e;
    },
  });
var hr = function (e, t, n) {
    return Math.min(Math.max(n, e), t);
  },
  lu = .001,
  Xy = .01,
  Xf = 10,
  Qy = .05,
  Zy = 1;
function Jy(e) {
  var t = e.duration,
    n = t === void 0 ? 800 : t,
    r = e.bounce,
    o = r === void 0 ? .25 : r,
    i = e.velocity,
    a = i === void 0 ? 0 : i,
    u = e.mass,
    s = u === void 0 ? 1 : u,
    l,
    d;
  Sn(n <= Xf * 1e3, "Spring duration must be 10 seconds or less");
  var m = 1 - o;
  m = hr(Qy, Zy, m),
    n = hr(Xy, Xf, n / 1e3),
    m < 1
      ? (l = function (x) {
        var c = x * m, f = c * n, p = c - a, y = fu(x, m), w = Math.exp(-f);
        return lu - p / y * w;
      },
        d = function (x) {
          var c = x * m,
            f = c * n,
            p = f * a + a,
            y = Math.pow(m, 2) * Math.pow(x, 2) * n,
            w = Math.exp(-f),
            E = fu(Math.pow(x, 2), m),
            S = -l(x) + lu > 0 ? -1 : 1;
          return S * ((p - y) * w) / E;
        })
      : (l = function (x) {
        var c = Math.exp(-x * n), f = (x - a) * n + 1;
        return -lu + c * f;
      },
        d = function (x) {
          var c = Math.exp(-x * n), f = (a - x) * (n * n);
          return c * f;
        });
  var v = 5 / n, h = qy(l, d, v);
  if (isNaN(h)) return { stiffness: 100, damping: 10 };
  var g = Math.pow(h, 2) * s;
  return { stiffness: g, damping: m * 2 * Math.sqrt(s * g) };
}
var e0 = 12;
function qy(e, t, n) {
  for (var r = n, o = 1; o < e0; o++) r = r - e(r) / t(r);
  return r;
}
function fu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var t0 = ["duration", "bounce"], n0 = ["stiffness", "damping", "mass"];
function Qf(e, t) {
  return t.some(function (n) {
    return e[n] !== void 0;
  });
}
function r0(e) {
  var t = P({
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
  }, e);
  if (!Qf(e, n0) && Qf(e, t0)) {
    var n = Jy(e);
    t = P(P(P({}, t), n), { velocity: 0, mass: 1 }),
      t.isResolvedFromDuration = !0;
  }
  return t;
}
function cu(e) {
  var t = e.from,
    n = t === void 0 ? 0 : t,
    r = e.to,
    o = r === void 0 ? 1 : r,
    i = e.restSpeed,
    a = i === void 0 ? 2 : i,
    u = e.restDelta,
    s = J(e, ["from", "to", "restSpeed", "restDelta"]),
    l = { done: !1, value: n },
    d = r0(s),
    m = d.stiffness,
    v = d.damping,
    h = d.mass,
    g = d.velocity,
    x = d.isResolvedFromDuration,
    c = Zf,
    f = Zf;
  function p() {
    var y = g ? -(g / 1e3) : 0,
      w = o - n,
      E = v / (2 * Math.sqrt(m * h)),
      S = Math.sqrt(m / h) / 1e3;
    if (u ?? (u = Math.abs(o - n) <= 1 ? .01 : .4), E < 1) {
      var T = fu(S, E);
      c = function (_) {
        var A = Math.exp(-E * S * _);
        return o -
          A * ((y + E * S * w) / T * Math.sin(T * _) + w * Math.cos(T * _));
      },
        f = function (_) {
          var A = Math.exp(-E * S * _);
          return E * S * A *
              (Math.sin(T * _) * (y + E * S * w) / T + w * Math.cos(T * _)) -
            A * (Math.cos(T * _) * (y + E * S * w) - T * w * Math.sin(T * _));
        };
    } else if (E === 1) {
      c = function (_) {
        return o - Math.exp(-S * _) * (w + (y + S * w) * _);
      };
    } else {
      var O = S * Math.sqrt(E * E - 1);
      c = function (_) {
        var A = Math.exp(-E * S * _), U = Math.min(O * _, 300);
        return o -
          A * ((y + E * S * w) * Math.sinh(U) + O * w * Math.cosh(U)) / O;
      };
    }
  }
  return p(), {
    next: function (y) {
      var w = c(y);
      if (x) l.done = y >= s.duration;
      else {
        var E = f(y) * 1e3, S = Math.abs(E) <= a, T = Math.abs(o - w) <= u;
        l.done = S && T;
      }
      return l.value = l.done ? o : w, l;
    },
    flipTarget: function () {
      var y;
      g = -g, y = [o, n], n = y[0], o = y[1], p();
    },
  };
}
cu.needsInterpolation = function (e, t) {
  return typeof e == "string" || typeof t == "string";
};
var Zf = function (e) {
    return 0;
  },
  Xt = function (e, t, n) {
    var r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  re = function (e, t, n) {
    return -n * e + n * t + e;
  },
  o0 = function (e, t, n) {
    var r = e * e, o = t * t;
    return Math.sqrt(Math.max(0, n * (o - r) + r));
  },
  i0 = [zo, Kt, Gt],
  qf = function (e) {
    return i0.find(function (t) {
      return t.test(e);
    });
  },
  Jf = function (e) {
    return "'" + e +
      "' is not an animatable color. Use the equivalent color code instead.";
  },
  ec = function (e, t) {
    var n = qf(e), r = qf(t);
    Q(!!n, Jf(e)),
      Q(!!r, Jf(t)),
      Q(
        n.transform === r.transform,
        "Both colors must be hex/RGBA, OR both must be HSLA.",
      );
    var o = n.parse(e), i = r.parse(t), a = P({}, o), u = n === Gt ? re : o0;
    return function (s) {
      for (var l in a) l !== "alpha" && (a[l] = u(o[l], i[l], s));
      return a.alpha = re(o.alpha, i.alpha, s), n.transform(a);
    };
  };
var du = function (e) {
    return typeof e == "number";
  },
  a0 = function (e, t) {
    return function (n) {
      return t(e(n));
    };
  },
  yr = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return e.reduce(a0);
  };
function nc(e, t) {
  return du(e)
    ? function (n) {
      return re(e, t, n);
    }
    : ne.test(e)
    ? ec(e, t)
    : tc(e, t);
}
var rc = function (e, t) {
    var n = bf(e),
      r = n.length,
      o = e.map(function (i, a) {
        return nc(i, t[a]);
      });
    return function (i) {
      for (var a = 0; a < r; a++) n[a] = o[a](i);
      return n;
    };
  },
  u0 = function (e, t) {
    var n = P(P({}, e), t), r = {};
    for (var o in n) {e[o] !== void 0 && t[o] !== void 0 &&
        (r[o] = nc(e[o], t[o]));}
    return function (i) {
      for (var a in r) n[a] = r[a](i);
      return n;
    };
  };
function oc(e) {
  for (
    var t = Be.parse(e), n = t.length, r = 0, o = 0, i = 0, a = 0; a < n; a++
  ) {
    r || typeof t[a] == "number" ? r++ : t[a].hue !== void 0 ? i++ : o++;
  }
  return { parsed: t, numNumbers: r, numRGB: o, numHSL: i };
}
var tc = function (e, t) {
    var n = Be.createTransformer(t), r = oc(e), o = oc(t);
    return Q(
      r.numHSL === o.numHSL && r.numRGB === o.numRGB &&
        r.numNumbers >= o.numNumbers,
      "Complex values '" + e + "' and '" + t +
        "' too different to mix. Ensure all colors are of the same type.",
    ),
      yr(rc(r.parsed, o.parsed), n);
  },
  s0 = function (e, t) {
    return function (n) {
      return re(e, t, n);
    };
  };
function l0(e) {
  if (typeof e == "number") return s0;
  if (typeof e == "string") return ne.test(e) ? ec : tc;
  if (Array.isArray(e)) return rc;
  if (typeof e == "object") return u0;
}
function f0(e, t, n) {
  for (var r = [], o = n || l0(e[0]), i = e.length - 1, a = 0; a < i; a++) {
    var u = o(e[a], e[a + 1]);
    if (t) {
      var s = Array.isArray(t) ? t[a] : t;
      u = yr(s, u);
    }
    r.push(u);
  }
  return r;
}
function c0(e, t) {
  var n = e[0], r = e[1], o = t[0];
  return function (i) {
    return o(Xt(n, r, i));
  };
}
function d0(e, t) {
  var n = e.length, r = n - 1;
  return function (o) {
    var i = 0, a = !1;
    if (o <= e[0] ? a = !0 : o >= e[r] && (i = r - 1, a = !0), !a) {
      for (var u = 1; u < n && !(e[u] > o || u === r); u++);
      i = u - 1;
    }
    var s = Xt(e[i], e[i + 1], o);
    return t[i](s);
  };
}
function Uo(e, t, n) {
  var r = n === void 0 ? {} : n,
    o = r.clamp,
    i = o === void 0 ? !0 : o,
    a = r.ease,
    u = r.mixer,
    s = e.length;
  Q(s === t.length, "Both input and output ranges must be the same length"),
    Q(
      !a || !Array.isArray(a) || a.length === s - 1,
      "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.",
    ),
    e[0] > e[s - 1] &&
    (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
  var l = f0(t, a, u), d = s === 2 ? c0(e, l) : d0(e, l);
  return i
    ? function (m) {
      return d(hr(e[0], e[s - 1], m));
    }
    : d;
}
var $o = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  pu = function (e) {
    return function (t) {
      return t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
    };
  },
  p0 = function (e) {
    return function (t) {
      return Math.pow(t, e);
    };
  },
  ic = function (e) {
    return function (t) {
      return t * t * ((e + 1) * t - e);
    };
  },
  v0 = function (e) {
    var t = ic(e);
    return function (n) {
      return (n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)));
    };
  },
  ac = 1.525,
  m0 = 4 / 11,
  h0 = 8 / 11,
  y0 = 9 / 10,
  Ho = function (e) {
    return e;
  },
  Wo = p0(2),
  uc = $o(Wo),
  vu = pu(Wo),
  mu = function (e) {
    return 1 - Math.sin(Math.acos(e));
  },
  Yo = $o(mu),
  sc = pu(Yo),
  Go = ic(ac),
  lc = $o(Go),
  fc = pu(Go),
  cc = v0(ac),
  g0 = 4356 / 361,
  w0 = 35442 / 1805,
  x0 = 16061 / 1805,
  gr = function (e) {
    if (e === 1 || e === 0) return e;
    var t = e * e;
    return e < m0 ? 7.5625 * t
    : e < h0 ? 9.075 * t - 9.9 * e + 3.4
    : e < y0
      ? g0 * t - w0 * e + x0
      : 10.8 * e * e - 20.52 * e + 10.72;
  },
  dc = $o(gr),
  pc = function (e) {
    return e < .5 ? .5 * (1 - gr(1 - e * 2)) : .5 * gr(e * 2 - 1) + .5;
  };
function S0(e, t) {
  return e.map(function () {
    return t || vu;
  }).splice(0, e.length - 1);
}
function E0(e) {
  var t = e.length;
  return e.map(function (n, r) {
    return r !== 0 ? r / (t - 1) : 0;
  });
}
function C0(e, t) {
  return e.map(function (n) {
    return n * t;
  });
}
function Ko(e) {
  var t = e.from,
    n = t === void 0 ? 0 : t,
    r = e.to,
    o = r === void 0 ? 1 : r,
    i = e.ease,
    a = e.offset,
    u = e.duration,
    s = u === void 0 ? 300 : u,
    l = { done: !1, value: n },
    d = Array.isArray(o) ? o : [n, o],
    m = C0(a && a.length === d.length ? a : E0(d), s);
  function v() {
    return Uo(m, d, { ease: Array.isArray(i) ? i : S0(d, i) });
  }
  var h = v();
  return {
    next: function (g) {
      return l.value = h(g), l.done = g >= s, l;
    },
    flipTarget: function () {
      d.reverse(), h = v();
    },
  };
}
function P0(e) {
  var t = e.velocity,
    n = t === void 0 ? 0 : t,
    r = e.from,
    o = r === void 0 ? 0 : r,
    i = e.power,
    a = i === void 0 ? .8 : i,
    u = e.timeConstant,
    s = u === void 0 ? 350 : u,
    l = e.restDelta,
    d = l === void 0 ? .5 : l,
    m = e.modifyTarget,
    v = { done: !1, value: o },
    h = a * n,
    g = o + h,
    x = m === void 0 ? g : m(g);
  return x !== g && (h = x - o), {
    next: function (c) {
      var f = -h * Math.exp(-c / s);
      return v.done = !(f > d || f < -d), v.value = v.done ? x : x + f, v;
    },
    flipTarget: function () {},
  };
}
var vc = { keyframes: Ko, spring: cu, decay: P0 };
function T0(e) {
  if (Array.isArray(e.to)) return Ko;
  if (vc[e.type]) return vc[e.type];
  var t = new Set(Object.keys(e));
  return t.has("ease") || t.has("duration") && !t.has("dampingRatio")
    ? Ko
    : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") ||
        t.has("damping") || t.has("restSpeed") || t.has("restDelta")
    ? cu
    : Ko;
}
function mc(e, t, n) {
  return n === void 0 && (n = 0), e - t - n;
}
function _0(e, t, n, r) {
  return n === void 0 && (n = 0),
    r === void 0 && (r = !0),
    r ? mc(t + -e, t, n) : t - (e - t) + n;
}
function k0(e, t, n, r) {
  return r ? e >= t + n : e <= -n;
}
var O0 = function (e) {
  var t = function (n) {
    var r = n.delta;
    return e(r);
  };
  return {
    start: function () {
      return Ce.update(t, !0, !0);
    },
    stop: function () {
      return wn.update(t);
    },
  };
};
function Xo(e) {
  var t,
    n,
    r = e.from,
    o = e.autoplay,
    i = o === void 0 ? !0 : o,
    a = e.driver,
    u = a === void 0 ? O0 : a,
    s = e.elapsed,
    l = s === void 0 ? 0 : s,
    d = e.repeat,
    m = d === void 0 ? 0 : d,
    v = e.repeatType,
    h = v === void 0 ? "loop" : v,
    g = e.repeatDelay,
    x = g === void 0 ? 0 : g,
    c = e.onPlay,
    f = e.onStop,
    p = e.onComplete,
    y = e.onRepeat,
    w = e.onUpdate,
    E = J(e, [
      "from",
      "autoplay",
      "driver",
      "elapsed",
      "repeat",
      "repeatType",
      "repeatDelay",
      "onPlay",
      "onStop",
      "onComplete",
      "onRepeat",
      "onUpdate",
    ]),
    S = E.to,
    T,
    O = 0,
    _ = E.duration,
    A,
    U = !1,
    Oe = !0,
    ze,
    at = T0(E);
  ((n = (t = at).needsInterpolation) === null || n === void 0
    ? void 0
    : n.call(t, r, S)) &&
    (ze = Uo([0, 100], [r, S], { clamp: !1 }), r = 0, S = 100);
  var Ht = at(P(P({}, E), { from: r, to: S }));
  function j() {
    O++,
      h === "reverse"
        ? (Oe = O % 2 == 0, l = _0(l, _, x, Oe))
        : (l = mc(l, _, x), h === "mirror" && Ht.flipTarget()),
      U = !1,
      y && y();
  }
  function Xe() {
    T.stop(), p && p();
  }
  function xt(Me) {
    if (Oe || (Me = -Me), l += Me, !U) {
      var gn = Ht.next(Math.max(0, l));
      A = gn.value, ze && (A = ze(A)), U = Oe ? gn.done : l <= 0;
    }
    w == null || w(A),
      U && (O === 0 && (_ ?? (_ = l)), O < m ? k0(l, _, x, Oe) && j() : Xe());
  }
  function eu() {
    c == null || c(), T = u(xt), T.start();
  }
  return i && eu(), {
    stop: function () {
      f == null || f(), T.stop();
    },
  };
}
function hu(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function hc(e) {
  var t = e.from,
    n = t === void 0 ? 0 : t,
    r = e.velocity,
    o = r === void 0 ? 0 : r,
    i = e.min,
    a = e.max,
    u = e.power,
    s = u === void 0 ? .8 : u,
    l = e.timeConstant,
    d = l === void 0 ? 750 : l,
    m = e.bounceStiffness,
    v = m === void 0 ? 500 : m,
    h = e.bounceDamping,
    g = h === void 0 ? 10 : h,
    x = e.restDelta,
    c = x === void 0 ? 1 : x,
    f = e.modifyTarget,
    p = e.driver,
    y = e.onUpdate,
    w = e.onComplete,
    E;
  function S(j) {
    return i !== void 0 && j < i || a !== void 0 && j > a;
  }
  function T(j) {
    return i === void 0
      ? a
      : a === void 0 || Math.abs(i - j) < Math.abs(a - j)
      ? i
      : a;
  }
  function O(j) {
    E == null || E.stop(),
      E = Xo(P(P({}, j), {
        driver: p,
        onUpdate: function (Xe) {
          var xt;
          y == null || y(Xe),
            (xt = j.onUpdate) === null || xt === void 0 || xt.call(j, Xe);
        },
        onComplete: w,
      }));
  }
  function _(j) {
    O(P({ type: "spring", stiffness: v, damping: g, restDelta: c }, j));
  }
  if (S(n)) _({ from: n, velocity: o, to: T(n) });
  else {
    var A = s * o + n;
    typeof f != "undefined" && (A = f(A));
    var U = T(A),
      Oe = U === i ? -1 : 1,
      ze,
      at,
      Ht = function (j) {
        ze = at,
          at = j,
          o = hu(j - ze, xn().delta),
          (Oe === 1 && j > U || Oe === -1 && j < U) &&
          _({ from: j, to: U, velocity: o });
      };
    O({
      type: "decay",
      from: n,
      velocity: o,
      timeConstant: d,
      power: s,
      restDelta: c,
      modifyTarget: f,
      onUpdate: S(A) ? Ht : void 0,
    });
  }
  return {
    stop: function () {
      return E == null ? void 0 : E.stop();
    },
  };
}
var M0 = function (e) {
    return e;
  },
  yc = function (e) {
    return e === void 0 && (e = M0), function (t, n, r) {
      var o = n - r, i = -(0 - t + 1) * (0 - e(Math.abs(o)));
      return o <= 0 ? n + i : n - i;
    };
  },
  pC = yc(),
  vC = yc(Math.sqrt);
var yu = function (e) {
    return e.hasOwnProperty("x") && e.hasOwnProperty("y");
  },
  gc = function (e) {
    return yu(e) && e.hasOwnProperty("z");
  },
  Qo = function (e, t) {
    return Math.abs(e - t);
  };
function gu(e, t) {
  if (du(e) && du(t)) return Qo(e, t);
  if (yu(e) && yu(t)) {
    var n = Qo(e.x, t.x),
      r = Qo(e.y, t.y),
      o = gc(e) && gc(t) ? Qo(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2));
  }
}
var wc = function (e, t, n) {
    var r = t - e;
    return ((n - e) % r + r) % r + e;
  },
  xc = function (e, t) {
    return 1 - 3 * t + 3 * e;
  },
  Sc = function (e, t) {
    return 3 * t - 6 * e;
  },
  Ec = function (e) {
    return 3 * e;
  },
  Zo = function (e, t, n) {
    return ((xc(t, n) * e + Sc(t, n)) * e + Ec(t)) * e;
  },
  Cc = function (e, t, n) {
    return 3 * xc(t, n) * e * e + 2 * Sc(t, n) * e + Ec(t);
  },
  L0 = 1e-7,
  N0 = 10;
function A0(e, t, n, r, o) {
  var i, a, u = 0;
  do a = t + (n - t) / 2, i = Zo(a, r, o) - e, i > 0 ? n = a : t = a; while (
    Math.abs(i) > L0 && ++u < N0
  );
  return a;
}
var R0 = 8, V0 = .001;
function D0(e, t, n, r) {
  for (var o = 0; o < R0; ++o) {
    var i = Cc(t, n, r);
    if (i === 0) return t;
    var a = Zo(t, n, r) - e;
    t -= a / i;
  }
  return t;
}
var qo = 11, Jo = 1 / (qo - 1);
function Pc(e, t, n, r) {
  if (e === t && n === r) return Ho;
  for (var o = new Float32Array(qo), i = 0; i < qo; ++i) {
    o[i] = Zo(i * Jo, e, n);
  }
  function a(u) {
    for (var s = 0, l = 1, d = qo - 1; l !== d && o[l] <= u; ++l) s += Jo;
    --l;
    var m = (u - o[l]) / (o[l + 1] - o[l]), v = s + m * Jo, h = Cc(v, e, n);
    return h >= V0 ? D0(u, v, e, n) : h === 0 ? v : A0(u, s, s + Jo, e, n);
  }
  return function (u) {
    return u === 0 || u === 1 ? u : Zo(a(u), t, r);
  };
}
var C = ut(Qt()),
  Ou = function (e) {
    return typeof e == "object" && e.hasOwnProperty("current");
  },
  xr = function () {
    function e() {
      this.subscriptions = new Set();
    }
    return e.prototype.add = function (t) {
      var n = this;
      return this.subscriptions.add(t), function () {
        return void n.subscriptions.delete(t);
      };
    },
      e.prototype.notify = function (t, n, r) {
        var o, i;
        if (!!this.subscriptions.size) {
          try {
            for (
              var a = Df(this.subscriptions), u = a.next();
              !u.done;
              u = a.next()
            ) {
              var s = u.value;
              s(t, n, r);
            }
          } catch (l) {
            o = { error: l };
          } finally {
            try {
              u && !u.done && (i = a.return) && i.call(a);
            } finally {
              if (o) throw o.error;
            }
          }
        }
      },
      e.prototype.clear = function () {
        this.subscriptions.clear();
      },
      e;
  }(),
  Q0 = function (e) {
    return !isNaN(parseFloat(e));
  },
  Sr = function () {
    function e(t) {
      var n = this;
      this.timeDelta = 0,
        this.lastUpdated = 0,
        this.updateSubscribers = new xr(),
        this.renderSubscribers = new xr(),
        this.canTrackVelocity = !1,
        this.updateAndNotify = function (r, o) {
          o === void 0 && (o = !0),
            n.prev = n.current,
            n.current = r,
            n.prev !== n.current && n.updateSubscribers.notify(n.current),
            o && n.renderSubscribers.notify(n.current);
          var i = xn(), a = i.delta, u = i.timestamp;
          n.lastUpdated !== u &&
            (n.timeDelta = a,
              n.lastUpdated = u,
              Ce.postRender(n.scheduleVelocityCheck));
        },
        this.scheduleVelocityCheck = function () {
          return Ce.postRender(n.velocityCheck);
        },
        this.velocityCheck = function (r) {
          var o = r.timestamp;
          o !== n.lastUpdated && (n.prev = n.current);
        },
        this.current = t,
        this.canTrackVelocity = Q0(this.current);
    }
    return e.prototype.onChange = function (t) {
      return this.updateSubscribers.add(t);
    },
      e.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
      },
      e.prototype.onRenderRequest = function (t) {
        return t(this.get()), this.renderSubscribers.add(t);
      },
      e.prototype.attach = function (t) {
        this.passiveEffect = t;
      },
      e.prototype.set = function (t, n) {
        n === void 0 && (n = !0),
          !n || !this.passiveEffect
            ? this.updateAndNotify(t, n)
            : this.passiveEffect(t, this.updateAndNotify);
      },
      e.prototype.get = function () {
        return this.current;
      },
      e.prototype.getPrevious = function () {
        return this.prev;
      },
      e.prototype.getVelocity = function () {
        return this.canTrackVelocity
          ? hu(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
          : 0;
      },
      e.prototype.start = function (t) {
        var n = this;
        return this.stop(),
          new Promise(function (r) {
            n.stopAnimation = t(r);
          }).then(function () {
            return n.clearAnimation();
          });
      },
      e.prototype.stop = function () {
        this.stopAnimation && this.stopAnimation(), this.clearAnimation();
      },
      e.prototype.isAnimating = function () {
        return !!this.stopAnimation;
      },
      e.prototype.clearAnimation = function () {
        this.stopAnimation = null;
      },
      e.prototype.destroy = function () {
        this.updateSubscribers.clear(),
          this.renderSubscribers.clear(),
          this.stop();
      },
      e;
  }();
function pe(e) {
  return new Sr(e);
}
var Yc = function () {
  function e(t, n) {
    var r = this;
    this.children = new Set(),
      this.isHoverEventsEnabled = !0,
      this.baseTarget = {},
      this.latest = {},
      this.values = new Map(),
      this.valueSubscriptions = new Map(),
      this.config = {},
      this.isMounted = !1,
      this.update = function () {
        return r.config.onUpdate(r.latest);
      },
      this.triggerRender = function () {
        return r.render();
      },
      this.ref = function (o) {
        o ? r.mount(o) : r.unmount(),
          !!r.externalRef &&
          (typeof r.externalRef == "function"
            ? r.externalRef(o)
            : Ou(r.externalRef) && (r.externalRef.current = o));
      },
      this.parent = t,
      this.rootParent = t ? t.rootParent : this,
      this.treePath = t ? Ee(t.treePath, [t]) : [],
      this.depth = t ? t.depth + 1 : 0,
      this.externalRef = n;
  }
  return e.prototype.suspendHoverEvents = function () {
    var t = this;
    this.isHoverEventsEnabled = !1,
      Ce.postRender(function () {
        return setTimeout(function () {
          return t.isHoverEventsEnabled = !0;
        }, 10);
      });
  },
    e.prototype.getVariantPayload = function () {
      return this.config.custom;
    },
    e.prototype.getVariant = function (t) {
      var n;
      return (n = this.config.variants) === null || n === void 0 ? void 0
      : n[t];
    },
    e.prototype.addVariantChild = function (t) {
      var n = this;
      return this.variantChildren || (this.variantChildren = new Set()),
        this.variantChildren.add(t),
        function () {
          return n.variantChildren.delete(t);
        };
    },
    e.prototype.addVariantChildOrder = function (t) {
      this.variantChildrenOrder || (this.variantChildrenOrder = new Set()),
        this.variantChildrenOrder.add(t);
    },
    e.prototype.onAnimationStart = function () {
      var t, n;
      (n = (t = this.config).onAnimationStart) === null || n === void 0 ||
        n.call(t);
    },
    e.prototype.onAnimationComplete = function () {
      var t, n;
      this.isMounted &&
        ((n = (t = this.config).onAnimationComplete) === null || n === void 0 ||
          n.call(t));
    },
    e.prototype.getDefaultTransition = function () {
      return this.config.transition;
    },
    e.prototype.subscribe = function (t) {
      var n = this;
      return this.children.add(t), function () {
        return n.children.delete(t);
      };
    },
    e.prototype.hasValue = function (t) {
      return this.values.has(t);
    },
    e.prototype.addValue = function (t, n) {
      this.hasValue(t) && this.removeValue(t),
        this.values.set(t, n),
        this.setSingleStaticValue(t, n.get()),
        this.subscribeToValue(t, n);
    },
    e.prototype.removeValue = function (t) {
      var n;
      (n = this.valueSubscriptions.get(t)) === null || n === void 0 || n(),
        this.valueSubscriptions.delete(t),
        this.values.delete(t),
        delete this.latest[t];
    },
    e.prototype.getValue = function (t, n) {
      var r = this.values.get(t);
      return r === void 0 && n !== void 0 &&
        (r = new Sr(n), this.addValue(t, r)),
        r;
    },
    e.prototype.forEachValue = function (t) {
      this.values.forEach(t);
    },
    e.prototype.getInstance = function () {
      return this.element;
    },
    e.prototype.updateConfig = function (t) {
      t === void 0 && (t = {}), this.config = P({}, t);
    },
    e.prototype.getBaseValue = function (t, n) {
      return this.baseTarget[t];
    },
    e.prototype.setSingleStaticValue = function (t, n) {
      this.latest[t] = n;
    },
    e.prototype.setStaticValues = function (t, n) {
      if (typeof t == "string") this.setSingleStaticValue(t, n);
      else for (var r in t) this.setSingleStaticValue(r, t[r]);
    },
    e.prototype.scheduleRender = function () {
      Ce.render(this.triggerRender, !1, !0);
    },
    e.prototype.scheduleUpdateLayoutDelta = function () {
      Ce.preRender(this.rootParent.updateLayoutDelta, !1, !0);
    },
    e.prototype.subscribeToValue = function (t, n) {
      var r = this,
        o = function (s) {
          r.setSingleStaticValue(t, s),
            r.element && r.config.onUpdate && Ce.update(r.update, !1, !0);
        },
        i = function () {
          r.element && r.scheduleRender();
        },
        a = n.onChange(o),
        u = n.onRenderRequest(i);
      this.valueSubscriptions.set(t, function () {
        a(), u();
      });
    },
    e.prototype.mount = function (t) {
      Q(
        !!t,
        "No ref found. Ensure components created with motion.custom forward refs using React.forwardRef",
      ),
        this.parent && (this.removeFromParent = this.parent.subscribe(this)),
        this.element = this.current = t;
    },
    e.prototype.unmount = function () {
      var t = this;
      this.forEachValue(function (n, r) {
        return t.removeValue(r);
      }),
        wn.update(this.update),
        wn.render(this.render),
        this.removeFromParent && this.removeFromParent();
    },
    e;
}();
function Z0(e) {
  return e;
}
function Gc(e) {
  var t = e.top, n = e.left, r = e.right, o = e.bottom;
  return { x: { min: n, max: r }, y: { min: t, max: o } };
}
function q0(e) {
  var t = e.x, n = e.y;
  return { top: n.min, bottom: n.max, left: t.min, right: t.max };
}
function J0(e, t) {
  var n = e.top, r = e.left, o = e.bottom, i = e.right;
  t === void 0 && (t = Z0);
  var a = t({ x: r, y: n }), u = t({ x: i, y: o });
  return { top: a.y, left: a.x, bottom: u.y, right: u.x };
}
function eg() {
  return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
}
function Kc(e) {
  return { x: P({}, e.x), y: P({}, e.y) };
}
var Xc = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
function Mu() {
  return { x: P({}, Xc), y: P({}, Xc) };
}
var tg = {
    test: function (e) {
      return e === "auto";
    },
    parse: function (e) {
      return e;
    },
  },
  Qc = P(P({}, St), { transform: Math.round }),
  ng = {
    color: ne,
    backgroundColor: ne,
    outlineColor: ne,
    fill: ne,
    stroke: ne,
    borderColor: ne,
    borderTopColor: ne,
    borderRightColor: ne,
    borderBottomColor: ne,
    borderLeftColor: ne,
    borderWidth: L,
    borderTopWidth: L,
    borderRightWidth: L,
    borderBottomWidth: L,
    borderLeftWidth: L,
    borderRadius: L,
    radius: L,
    borderTopLeftRadius: L,
    borderTopRightRadius: L,
    borderBottomRightRadius: L,
    borderBottomLeftRadius: L,
    width: L,
    maxWidth: L,
    height: L,
    maxHeight: L,
    size: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    rotate: st,
    rotateX: st,
    rotateY: st,
    rotateZ: st,
    scale: vr,
    scaleX: vr,
    scaleY: vr,
    scaleZ: vr,
    skew: st,
    skewX: st,
    skewY: st,
    distance: L,
    translateX: L,
    translateY: L,
    translateZ: L,
    x: L,
    y: L,
    z: L,
    perspective: L,
    transformPerspective: L,
    opacity: En,
    originX: au,
    originY: au,
    originZ: L,
    zIndex: Qc,
    filter: Bo,
    WebkitFilter: Bo,
    fillOpacity: En,
    strokeOpacity: En,
    numOctaves: Qc,
  },
  Zc = [St, L, Yt, st, Uf, Bf, tg],
  qc = function (e) {
    return function (t) {
      return t.test(e);
    };
  },
  ri = function (e) {
    return Zc.find(qc(e));
  },
  rg = Ee(Zc, [ne, Be]),
  og = function (e) {
    return rg.find(qc(e));
  },
  Lu = function (e) {
    return ng[e];
  },
  ig = function (e, t) {
    return t && typeof e == "number" ? t.transform(e) : e;
  };
function Jc(e, t) {
  var n, r = Lu(e);
  return r !== Bo && (r = Be),
    (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, t);
}
var Nu = ["", "X", "Y", "Z"],
  ag = ["perspective", "translate", "scale", "rotate", "skew"],
  Er = ["transformPerspective", "x", "y", "z"];
ag.forEach(function (e) {
  Nu.forEach(function (t) {
    var n = e + t;
    Er.push(n);
  });
});
function ug(e, t) {
  return Er.indexOf(e) - Er.indexOf(t);
}
var sg = new Set(Er);
function oi(e) {
  return sg.has(e);
}
var lg = new Set(["originX", "originY", "originZ"]);
function ed(e) {
  return lg.has(e);
}
var fg = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective",
};
function cg(e, t, n, r, o, i) {
  o === void 0 && (o = !0), i === void 0 && (i = !0);
  var a = "";
  t.sort(ug);
  for (var u = !1, s = t.length, l = 0; l < s; l++) {
    var d = t[l];
    a += (fg[d] || d) + "(" + e[d] + ") ", d === "z" && (u = !0);
  }
  return !u && o ? a += "translateZ(0)" : a = a.trim(),
    n ? a = n(e, r ? "" : a) : i && r && (a = "none"),
    a;
}
function dg(e) {
  var t = e.originX,
    n = t === void 0 ? "50%" : t,
    r = e.originY,
    o = r === void 0 ? "50%" : r,
    i = e.originZ,
    a = i === void 0 ? 0 : i;
  return n + " " + o + " " + a;
}
function Au(e, t, n) {
  var r = e.x,
    o = e.y,
    i = r.translate / t.x,
    a = o.translate / t.y,
    u = "translate3d(" + i + "px, " + a + "px, 0) ";
  if (n) {
    var s = n.rotate, l = n.rotateX, d = n.rotateY;
    s && (u += "rotate(" + s + ") "),
      l && (u += "rotateX(" + l + ") "),
      d && (u += "rotateY(" + d + ") ");
  }
  return u += "scale(" + r.scale + ", " + o.scale + ")",
    !n && u === td ? "" : u;
}
var td = Au(Mu(), { x: 1, y: 1 });
function pg(e) {
  var t = e.x, n = e.y;
  return t.origin * 100 + "% " + n.origin * 100 + "% 0";
}
function nd(e) {
  return e.startsWith("--");
}
function Ru(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
var rd = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function vg(e) {
  var t = rd.exec(e);
  if (!t) return [];
  var n = X(t, 3), r = n[1], o = n[2];
  return [r, o];
}
var mg = 4;
function Vu(e, t, n) {
  n === void 0 && (n = 1),
    Q(
      n <= mg,
      'Max CSS variable fallback depth detected in property "' + e +
        '". This may indicate a circular fallback dependency.',
    );
  var r = X(vg(e), 2), o = r[0], i = r[1];
  if (!!o) {
    var a = window.getComputedStyle(t).getPropertyValue(o);
    return a ? a.trim() : Ru(i) ? Vu(i, t, n + 1) : i;
  }
}
function hg(e, t, n) {
  var r, o = J(t, []), i = e.getInstance();
  if (!(i instanceof HTMLElement)) return { target: o, transitionEnd: n };
  n && (n = P({}, n)),
    e.forEachValue(function (l) {
      var d = l.get();
      if (!!Ru(d)) {
        var m = Vu(d, i);
        m && l.set(m);
      }
    });
  for (var a in o) {
    var u = o[a];
    if (!!Ru(u)) {
      var s = Vu(u, i);
      !s ||
        (o[a] = s, n && ((r = n[a]) !== null && r !== void 0 || (n[a] = u)));
    }
  }
  return { target: o, transitionEnd: n };
}
function od(e, t) {
  return e / (t.max - t.min) * 100;
}
function yg(e, t) {
  if (typeof e == "string") {
    if (L.test(e)) e = parseFloat(e);
    else return e;
  }
  var n = od(e, t.x), r = od(e, t.y);
  return n + "% " + r + "%";
}
var id = "_$css";
function gg(e, t, n, r) {
  var o = e, i = e.includes("var("), a = [];
  i && (e = e.replace(rd, function (x) {
    return a.push(x), id;
  }));
  var u = Be.parse(e);
  if (u.length > 5) return o;
  var s = Be.createTransformer(e),
    l = typeof u[0] != "number" ? 1 : 0,
    d = n.x.scale * r.x,
    m = n.y.scale * r.y;
  u[0 + l] /= d, u[1 + l] /= m;
  var v = re(d, m, .5);
  typeof u[2 + l] == "number" && (u[2 + l] /= v),
    typeof u[3 + l] == "number" && (u[3 + l] /= v);
  var h = s(u);
  if (i) {
    var g = 0;
    h = h.replace(id, function () {
      var x = a[g];
      return g++, x;
    });
  }
  return h;
}
var Cr = { process: yg },
  Pr = {
    borderRadius: P(P({}, Cr), {
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    }),
    borderTopLeftRadius: Cr,
    borderTopRightRadius: Cr,
    borderBottomLeftRadius: Cr,
    borderBottomRightRadius: Cr,
    boxShadow: { process: gg },
  };
function wg(e) {
  for (var t in e) Pr[t] = e[t];
}
function ad(e, t, n, r, o, i, a, u, s, l, d, m) {
  var v = a.enableHardwareAcceleration,
    h = a.transformTemplate,
    g = a.allowTransformNone;
  i.length = 0;
  var x = !1, c = !1, f = !0;
  for (var p in e) {
    var y = e[p], w = Lu(p), E = ig(y, w);
    if (oi(p)) {
      if (x = !0, r[p] = E, i.push(p), !f) continue;
      var S = w.default !== void 0 ? w.default : 0;
      y !== S && (f = !1);
    } else if (ed(p)) o[p] = E, c = !0;
    else if (p !== "transform" || typeof y != "function") {
      var T = nd(p) ? n : t;
      if (u && Pr[p]) {
        var O = Pr[p].process(y, m, s, d), _ = Pr[p].applyTo;
        if (_) for (var A = _.length, U = 0; U < A; U++) T[_[U]] = O;
        else T[p] = O;
      } else T[p] = E;
    }
  }
  u
    ? (t.transform = Au(l, d, x ? r : void 0),
      h && (t.transform = h(r, t.transform)),
      t.transformOrigin = pg(l))
    : (x && (t.transform = cg(r, i, h, f, v, g)),
      c && (t.transformOrigin = dg(o)));
}
function ud(e, t) {
  e.min = t.min, e.max = t.max;
}
function xg(e, t) {
  ud(e.x, t.x), ud(e.y, t.y);
}
function ii(e, t, n) {
  var r = e - n, o = t * r;
  return n + o;
}
function sd(e, t, n, r, o) {
  return o !== void 0 && (e = ii(e, o, r)), ii(e, n, r) + t;
}
function Du(e, t, n, r, o) {
  t === void 0 && (t = 0),
    n === void 0 && (n = 1),
    e.min = sd(e.min, t, n, r, o),
    e.max = sd(e.max, t, n, r, o);
}
function Sg(e, t) {
  var n = t.x, r = t.y;
  Du(e.x, n.translate, n.scale, n.originPoint),
    Du(e.y, r.translate, r.scale, r.originPoint);
}
function ld(e, t, n, r) {
  var o = X(r, 3), i = o[0], a = o[1], u = o[2];
  e.min = t.min, e.max = t.max;
  var s = n[u] !== void 0 ? n[u] : .5, l = re(t.min, t.max, s);
  Du(e, n[i], n[a], l, n.scale);
}
var fd = ["x", "scaleX", "originX"], cd = ["y", "scaleY", "originY"];
function Eg(e, t, n) {
  ld(e.x, t.x, n, fd), ld(e.y, t.y, n, cd);
}
function dd(e, t, n, r, o) {
  return e -= t, e = ii(e, 1 / n, r), o !== void 0 && (e = ii(e, 1 / o, r)), e;
}
function Cg(e, t, n, r, o) {
  t === void 0 && (t = 0), n === void 0 && (n = 1), r === void 0 && (r = .5);
  var i = re(e.min, e.max, r) - t;
  e.min = dd(e.min, t, n, i, o), e.max = dd(e.max, t, n, i, o);
}
function pd(e, t, n) {
  var r = X(n, 3), o = r[0], i = r[1], a = r[2];
  Cg(e, t[o], t[i], t[a], t.scale);
}
function Pg(e, t) {
  pd(e.x, t, fd), pd(e.y, t, cd);
}
function Tg(e, t, n) {
  var r = n.length;
  if (!!r) {
    t.x = t.y = 1;
    for (var o = 0; o < r; o++) {
      var i = n[o].delta;
      t.x *= i.x.scale, t.y *= i.y.scale, Sg(e, i);
    }
  }
}
var _g = function (e) {
  return hr(0, 1, e);
};
function vd(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = .01), gu(e, t) < n;
}
function ai(e) {
  return e.max - e.min;
}
function md(e, t) {
  var n = .5, r = ai(e), o = ai(t);
  return o > r
    ? n = Xt(t.min, t.max - r, e.min)
    : r > o && (n = Xt(e.min, e.max - o, t.min)),
    _g(n);
}
function hd(e, t, n, r) {
  e.origin = r === void 0 ? md(t, n) : r,
    e.originPoint = re(t.min, t.max, e.origin),
    e.scale = ai(n) / ai(t),
    vd(e.scale, 1, 1e-4) && (e.scale = 1),
    e.translate = re(n.min, n.max, e.origin) - e.originPoint,
    vd(e.translate) && (e.translate = 0);
}
function yd(e, t, n, r) {
  hd(e.x, t.x, n.x, r), hd(e.y, t.y, n.y, r);
}
function Ue(e) {
  return [e("x"), e("y")];
}
function gd(e, t) {
  var n = e.getBoundingClientRect();
  return Gc(J0(n, t));
}
var bu = function (e) {
    return Array.isArray(e);
  },
  kg = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
  wd = function (e) {
    return kg.has(e);
  },
  Og = function (e) {
    return Object.keys(e).some(wd);
  },
  xd = function (e, t) {
    e.set(t, !1), e.set(t);
  },
  ui = function (e) {
    return e === St || e === L;
  },
  Sd;
(function (e) {
  e.width = "width",
    e.height = "height",
    e.left = "left",
    e.right = "right",
    e.top = "top",
    e.bottom = "bottom";
})(Sd || (Sd = {}));
var Ed = function (e, t) {
    return parseFloat(e.split(", ")[t]);
  },
  Cd = function (e, t) {
    return function (n, r) {
      var o = r.transform;
      if (o === "none" || !o) return 0;
      var i = o.match(/^matrix3d\((.+)\)$/);
      if (i) return Ed(i[1], t);
      var a = o.match(/^matrix\((.+)\)$/);
      return a ? Ed(a[1], e) : 0;
    };
  },
  Mg = new Set(["x", "y", "z"]),
  Lg = Er.filter(function (e) {
    return !Mg.has(e);
  });
function Ng(e) {
  var t = [];
  return Lg.forEach(function (n) {
    var r = e.getValue(n);
    r !== void 0 &&
      (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }),
    t.length && e.render(),
    t;
}
var Pd = {
    width: function (e) {
      var t = e.x;
      return t.max - t.min;
    },
    height: function (e) {
      var t = e.y;
      return t.max - t.min;
    },
    top: function (e, t) {
      var n = t.top;
      return parseFloat(n);
    },
    left: function (e, t) {
      var n = t.left;
      return parseFloat(n);
    },
    bottom: function (e, t) {
      var n = e.y, r = t.top;
      return parseFloat(r) + (n.max - n.min);
    },
    right: function (e, t) {
      var n = e.x, r = t.left;
      return parseFloat(r) + (n.max - n.min);
    },
    x: Cd(4, 13),
    y: Cd(5, 14),
  },
  Ag = function (e, t, n) {
    var r = t.getBoundingBox(),
      o = t.getComputedStyle(),
      i = o.display,
      a = o.top,
      u = o.left,
      s = o.bottom,
      l = o.right,
      d = o.transform,
      m = { top: a, left: u, bottom: s, right: l, transform: d };
    i === "none" && t.setStaticValues("display", e.display || "block"),
      t.render();
    var v = t.getBoundingBox();
    return n.forEach(function (h) {
      var g = t.getValue(h);
      xd(g, Pd[h](r, m)), e[h] = Pd[h](v, o);
    }),
      e;
  },
  Rg = function (e, t, n, r) {
    n === void 0 && (n = {}),
      r === void 0 && (r = {}),
      t = P({}, t),
      r = P({}, r);
    var o = Object.keys(t).filter(wd), i = [], a = !1, u = [];
    if (
      o.forEach(function (l) {
        var d = e.getValue(l);
        if (!!e.hasValue(l)) {
          var m = n[l], v = t[l], h = ri(m), g;
          if (bu(v)) {
            for (var x = v.length, c = v[0] === null ? 1 : 0; c < x; c++) {
              g
                ? Q(ri(v[c]) === g, "All keyframes must be of the same type")
                : (g = ri(v[c]),
                  Q(
                    g === h || ui(h) && ui(g),
                    "Keyframes must be of the same dimension as the current value",
                  ));
            }
          } else g = ri(v);
          if (h !== g) {
            if (ui(h) && ui(g)) {
              var f = d.get();
              typeof f == "string" && d.set(parseFloat(f)),
                typeof v == "string"
                  ? t[l] = parseFloat(v)
                  : Array.isArray(v) && g === L && (t[l] = v.map(parseFloat));
            } else {
              (h == null ? void 0 : h.transform) && (g == null
                  ? void 0
                  : g.transform) && (m === 0 || v === 0)
                ? m === 0 ? d.set(g.transform(m)) : t[l] = h.transform(v)
                : (a || (i = Ng(e), a = !0),
                  u.push(l),
                  r[l] = r[l] !== void 0 ? r[l] : t[l],
                  xd(d, v));
            }
          }
        }
      }), u.length
    ) {
      var s = Ag(t, e, u);
      return i.length && i.forEach(function (l) {
        var d = X(l, 2), m = d[0], v = d[1];
        e.getValue(m).set(v);
      }),
        e.render(),
        { target: s, transitionEnd: r };
    } else return { target: t, transitionEnd: r };
  };
function Vg(e, t, n, r) {
  return Og(t) ? Rg(e, t, n, r) : { target: t, transitionEnd: r };
}
var Dg = function (e, t, n, r) {
    var o = hg(e, t, r);
    return t = o.target, r = o.transitionEnd, Vg(e, t, n, r);
  },
  bg = function (e) {
    return /^\-?\d*\.?\d+$/.test(e);
  },
  Ig = function (e) {
    return Boolean(e && typeof e == "object" && e.mix && e.toValue);
  },
  Fg = function (e) {
    return bu(e) ? e[e.length - 1] || 0 : e;
  };
function Td(e) {
  return Array.isArray(e);
}
function jg(e) {
  return typeof e == "string" || Td(e);
}
function zg(e) {
  var t = {};
  return e.forEachValue(function (n, r) {
    return t[r] = n.get();
  }),
    t;
}
function Bg(e) {
  var t = {};
  return e.forEachValue(function (n, r) {
    return t[r] = n.getVelocity();
  }),
    t;
}
function Iu(e, t, n) {
  return typeof t == "string" && (t = e.getVariant(t)),
    typeof t == "function" ? t(n ?? e.getVariantPayload(), zg(e), Bg(e)) : t;
}
function Ug(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, pe(n));
}
function Fu(e, t) {
  var n = Iu(e, t),
    r = n ? e.makeTargetAnimatable(n, !1) : {},
    o = r.transitionEnd,
    i = o === void 0 ? {} : o,
    a = r.transition,
    u = J(r, ["transitionEnd", "transition"]);
  u = P(P({}, u), i);
  for (var s in u) {
    var l = Fg(u[s]);
    Ug(e, s, l);
  }
}
function ju(e, t) {
  var n = Ee(t).reverse();
  n.forEach(function (r) {
    var o;
    Fu(e, e.getVariant(r)),
      (o = e.variantChildren) === null || o === void 0 ||
      o.forEach(function (i) {
        ju(i, t);
      });
  });
}
function _d(e, t) {
  if (Array.isArray(t)) return ju(e, t);
  if (typeof t == "string") return ju(e, [t]);
  Fu(e, t);
}
function kd(e, t, n) {
  var r,
    o,
    i,
    a = Object.keys(t).filter(function (h) {
      return !e.hasValue(h);
    }),
    u = a.length;
  if (!!u) {
    for (var s = 0; s < u; s++) {
      var l = a[s], d = t[l], m = null;
      if (Array.isArray(d) && (m = d[0]), m === null) {
        var v = (r = n[l]) !== null && r !== void 0 ? r : e.readNativeValue(l);
        m = v !== void 0 ? v : t[l],
          Q(
            m !== null,
            'No initial value for "' + l +
              '" can be inferred. Ensure an initial value for "' + l +
              '" is defined on the component.',
          );
      }
      typeof m == "string" && bg(m)
        ? m = parseFloat(m)
        : !og(m) && Be.test(d) && (m = Jc(l, d)),
        e.addValue(l, pe(m)),
        (o = (i = n)[l]) !== null && o !== void 0 || (i[l] = m),
        e.baseTarget[l] = m;
    }
  }
}
function $g(e, t) {
  if (!!t) {
    var n = t[e] || t.default || t;
    return n.from;
  }
}
function Od(e, t, n) {
  var r, o, i = {};
  for (var a in e) {
    i[a] = (r = $g(a, t)) !== null && r !== void 0
      ? r
      : (o = n.getValue(a)) === null || o === void 0
      ? void 0
      : o.get();
  }
  return i;
}
var ft = function (e) {
    return e instanceof Sr;
  },
  zu = function (e) {
    Wt(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.defaultConfig = {
        enableHardwareAcceleration: !0,
        allowTransformNone: !0,
      },
        n.style = {},
        n.reactStyle = {},
        n.vars = {},
        n.transform = {},
        n.transformOrigin = {},
        n.transformKeys = [],
        n.config = n.defaultConfig,
        n.isLayoutProjectionEnabled = !1,
        n.layoutUpdateListeners = new xr(),
        n.layoutMeasureListeners = new xr(),
        n.viewportBoxUpdateListeners = new xr(),
        n.hasViewportBoxUpdated = !1,
        n.targetBoxFinal = eg(),
        n.treeScale = { x: 1, y: 1 },
        n.delta = Mu(),
        n.deltaFinal = Mu(),
        n.deltaTransform = td,
        n.stopLayoutAxisAnimation = { x: function () {}, y: function () {} },
        n.isTargetBoxLocked = !1,
        n.updateLayoutDelta = function () {
          n.isLayoutProjectionEnabled && n.box && n.updateLayoutDeltas(),
            n.children.forEach(Hg);
        },
        n;
    }
    return t.prototype.removeValue = function (n) {
      e.prototype.removeValue.call(this, n),
        delete this.vars[n],
        delete this.style[n];
    },
      t.prototype.clean = function () {
        this.style = {}, this.vars = {}, this.transform = {};
      },
      t.prototype.updateConfig = function (n) {
        n === void 0 && (n = {}), this.config = P(P({}, this.defaultConfig), n);
      },
      t.prototype.read = function (n) {
        var r = this.getComputedStyle();
        return (nd(n) ? r.getPropertyValue(n) : r[n]) || 0;
      },
      t.prototype.addValue = function (n, r) {
        e.prototype.addValue.call(this, n, r),
          n.startsWith("rotate") && (this.layoutOrigin = .5);
      },
      t.prototype.readNativeValue = function (n) {
        if (oi(n)) {
          var r = Lu(n);
          return r && r.default || 0;
        } elsereturn this.read(n);
      },
      t.prototype.getBaseValue = function (n, r) {
        var o,
          i = (o = r.style) === null || o === void 0
            ? void 0
            : o[n];
        return i !== void 0 && !ft(i) ? i
        : e.prototype.getBaseValue.call(this, n, r);
      },
      t.prototype.makeTargetAnimatable = function (n, r) {
        r === void 0 && (r = !0);
        var o = n.transition,
          i = n.transitionEnd,
          a = J(n, ["transition", "transitionEnd"]),
          u = this.config.transformValues,
          s = Od(a, o || {}, this);
        if (u && (i && (i = u(i)), a && (a = u(a)), s && (s = u(s))), r) {
          kd(this, a, s);
          var l = Dg(this, a, s, i);
          i = l.transitionEnd, a = l.target;
        }
        return P({ transition: o, transitionEnd: i }, a);
      },
      t.prototype.enableLayoutProjection = function () {
        this.isLayoutProjectionEnabled = !0;
      },
      t.prototype.hide = function () {
        this.isVisible !== !1 && (this.isVisible = !1, this.scheduleRender());
      },
      t.prototype.show = function () {
        this.isVisible !== !0 && (this.isVisible = !0, this.scheduleRender());
      },
      t.prototype.onLayoutUpdate = function (n) {
        return this.layoutUpdateListeners.add(n);
      },
      t.prototype.onLayoutMeasure = function (n) {
        return this.layoutMeasureListeners.add(n);
      },
      t.prototype.onViewportBoxUpdate = function (n) {
        return this.viewportBoxUpdateListeners.add(n);
      },
      t.prototype.layoutReady = function (n) {
        this.layoutUpdateListeners.notify(
          this.box,
          this.prevViewportBox || this.box,
          n,
        );
      },
      t.prototype.getBoundingBox = function () {
        var n = this.config.transformPagePoint;
        return gd(this.element, n);
      },
      t.prototype.getBoundingBoxWithoutTransforms = function () {
        var n = this.getBoundingBox();
        return Pg(n, this.latest), n;
      },
      t.prototype.getComputedStyle = function () {
        return window.getComputedStyle(this.element);
      },
      t.prototype.snapshotBoundingBox = function () {
        this.prevViewportBox = this.getBoundingBoxWithoutTransforms(),
          this.rebaseTargetBox(!1, this.prevViewportBox);
      },
      t.prototype.rebaseTargetBox = function (n, r) {
        var o = this;
        n === void 0 && (n = !1), r === void 0 && (r = this.box);
        var i = this.getAxisProgress(),
          a = i.x,
          u = i.y,
          s = this.box && !this.isTargetBoxLocked && !a.isAnimating() &&
            !u.isAnimating();
        (n || s) && Ue(function (l) {
          var d = r[l], m = d.min, v = d.max;
          o.setAxisTarget(l, m, v);
        });
      },
      t.prototype.measureLayout = function () {
        var n = this;
        this.box = this.getBoundingBox(),
          this.boxCorrected = Kc(this.box),
          this.targetBox || (this.targetBox = Kc(this.box)),
          this.layoutMeasureListeners.notify(
            this.box,
            this.prevViewportBox || this.box,
          ),
          Ce.update(function () {
            return n.rebaseTargetBox();
          });
      },
      t.prototype.lockTargetBox = function () {
        this.isTargetBoxLocked = !0;
      },
      t.prototype.unlockTargetBox = function () {
        this.stopLayoutAnimation(), this.isTargetBoxLocked = !1;
      },
      t.prototype.resetTransform = function () {
        this.suspendHoverEvents();
        var n = this.config.transformTemplate;
        this.element.style.transform = n ? n({}, "") : "none",
          this.scheduleRender();
      },
      t.prototype.setAxisTarget = function (n, r, o) {
        var i = this.targetBox[n];
        i.min = r,
          i.max = o,
          this.hasViewportBoxUpdated = !0,
          this.rootParent.scheduleUpdateLayoutDelta();
      },
      t.prototype.getAxisProgress = function () {
        return this.axisProgress ||
          (this.axisProgress = { x: pe(0), y: pe(0) }),
          this.axisProgress;
      },
      t.prototype.startLayoutAxisAnimation = function (n, r) {
        var o = this,
          i,
          a = this.getAxisProgress()[n],
          u = this.targetBox[n],
          s = u.min,
          l = u.max,
          d = l - s;
        return a.clearListeners(),
          a.set(s),
          a.set(s),
          a.onChange(function (m) {
            return o.setAxisTarget(n, m, m + d);
          }),
          (i = this.animateMotionValue) === null || i === void 0 ? void 0
          : i.call(this, n, a, 0, r);
      },
      t.prototype.stopLayoutAnimation = function () {
        var n = this;
        Ue(function (r) {
          return n.getAxisProgress()[r].stop();
        });
      },
      t.prototype.withoutTransform = function (n) {
        this.isLayoutProjectionEnabled && this.resetTransform(),
          this.parent ? this.parent.withoutTransform(n) : n(),
          this.isLayoutProjectionEnabled &&
          (this.element.style.transform = this.style.transform);
      },
      t.prototype.updateLayoutDeltas = function () {
        xg(this.boxCorrected, this.box);
        var n = this.treeScale.x, r = this.treeScale.y;
        Tg(this.boxCorrected, this.treeScale, this.treePath),
          yd(this.delta, this.boxCorrected, this.targetBox, this.layoutOrigin),
          this.hasViewportBoxUpdated &&
          this.viewportBoxUpdateListeners.notify(this.targetBox, this.delta),
          this.hasViewportBoxUpdated = !1;
        var o = Au(this.delta, this.treeScale);
        (o !== this.deltaTransform || n !== this.treeScale.x ||
          r !== this.treeScale.y) && this.scheduleRender(),
          this.deltaTransform = o;
      },
      t.prototype.updateTransformDeltas = function () {
        !this.isLayoutProjectionEnabled || !this.box ||
          (Eg(this.targetBoxFinal, this.targetBox, this.latest),
            yd(
              this.deltaFinal,
              this.boxCorrected,
              this.targetBoxFinal,
              this.layoutOrigin,
            ));
      },
      t.prototype.build = function () {
        this.updateTransformDeltas(),
          this.isVisible !== void 0 &&
          (this.style.visibility = this.isVisible ? "visible" : "hidden"),
          ad(
            this.latest,
            this.style,
            this.vars,
            this.transform,
            this.transformOrigin,
            this.transformKeys,
            this.config,
            this.isLayoutProjectionEnabled && !!this.box,
            this.delta,
            this.deltaFinal,
            this.treeScale,
            this.targetBoxFinal,
          );
      },
      t.prototype.render = function () {
        this.build(), Object.assign(this.element.style, this.style);
        for (var n in this.vars)this.element.style.setProperty(n, this.vars[n]);
      },
      t;
  }(Yc),
  Hg = function (e) {
    return e.updateLayoutDelta();
  };
function Pe(e) {
  var t = C.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function Md(e, t, n) {
  return typeof e == "string" ? e : L.transform(t + n * e);
}
function Wg(e, t, n) {
  var r = Md(t, e.x, e.width), o = Md(n, e.y, e.height);
  return r + " " + o;
}
var Bu = function (e, t) {
    return L.transform(e * t);
  },
  Yg = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Gg = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Kg(e, t, n, r, o, i) {
  r === void 0 && (r = 1), o === void 0 && (o = 0), i === void 0 && (i = !0);
  var a = i ? Yg : Gg;
  e[a.offset] = Bu(-o, t);
  var u = Bu(n, t), s = Bu(r, t);
  e[a.array] = u + " " + s;
}
var Xg = { x: 0, y: 0, width: 0, height: 0 };
function Qg(e, t, n, r, o, i, a, u, s, l, d, m, v, h, g) {
  var x = e.attrX,
    c = e.attrY,
    f = e.originX,
    p = e.originY,
    y = e.pathLength,
    w = e.pathSpacing,
    E = w === void 0 ? 1 : w,
    S = e.pathOffset,
    T = S === void 0 ? 0 : S,
    O = J(e, [
      "attrX",
      "attrY",
      "originX",
      "originY",
      "pathLength",
      "pathSpacing",
      "pathOffset",
    ]);
  return ad(O, r, n, o, i, a, u, d, m, v, h, g),
    r.transform && (t.transform = r.transform, delete r.transform),
    (f !== void 0 || p !== void 0 || t.transform) &&
    (t.transformOrigin = Wg(
      s || Xg,
      f !== void 0 ? f : .5,
      p !== void 0
        ? p
        : .5,
    )),
    x !== void 0 && (r.x = x),
    c !== void 0 && (r.y = c),
    l !== void 0 && y !== void 0 && Kg(r, l, y, E, T, !1),
    r;
}
var Ld = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
  ]),
  Zg = /([a-z])([A-Z])/g,
  qg = "$1-$2",
  Nd = function (e) {
    return e.replace(Zg, qg).toLowerCase();
  },
  e1 = function (e) {
    Wt(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.attrs = {},
        n.defaultConfig = { enableHardwareAcceleration: !1 },
        n.config = n.defaultConfig,
        n;
    }
    return t.prototype.mount = function (n) {
      e.prototype.mount.call(this, n), this.measure();
    },
      t.prototype.measure = function () {
        var n = this;
        try {
          this.dimensions = typeof this.element.getBBox == "function"
            ? this.element.getBBox() : this.element.getBoundingClientRect();
        } catch (r) {
          this.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        Jg(this.element) &&
        (this.totalPathLength = this.element.getTotalLength()),
          Ce.render(function () {
            return n.render();
          });
      },
      t.prototype.getBaseValue = function (n, r) {
        var o = r[n];
        return o !== void 0 && !ft(o) ? o
        : e.prototype.getBaseValue.call(this, n, r);
      },
      t.prototype.clean = function () {
        e.prototype.clean.call(this), this.attrs = {};
      },
      t.prototype.read = function (n) {
        return n = Ld.has(n) ? n : Nd(n), this.element.getAttribute(n);
      },
      t.prototype.build = function () {
        this.updateTransformDeltas(),
          Qg(
            this.latest,
            this.style,
            this.vars,
            this.attrs,
            this.transform,
            this.transformOrigin,
            this.transformKeys,
            this.config,
            this.dimensions,
            this.totalPathLength,
            this.isLayoutProjectionEnabled && !!this.box,
            this.delta,
            this.deltaFinal,
            this.treeScale,
            this.targetBoxFinal,
          );
      },
      t.prototype.render = function () {
        e.prototype.render.call(this);
        for (var n in this.attrs) {
          this.element.setAttribute(Ld.has(n) ? n : Nd(n), this.attrs[n]);
        }
      },
      t;
  }(zu);
function Jg(e) {
  return e.tagName === "path";
}
var t1 = [
    "animate",
    "circle",
    "clipPath",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tspan",
    "use",
    "view",
  ],
  n1 = new Set(t1);
function Ad(e) {
  return typeof e == "string" && n1.has(e);
}
var Zt = C.createContext(null), si = C.createContext({ variantContext: {} });
function Uu() {
  return C.useContext(si).variantContext;
}
function Rd() {
  return C.useContext(si).visualElement;
}
var Vd = C.createContext(null),
  r1 = function (e, t, n, r) {
    var o = Rd(),
      i = Pe(function () {
        var d = Ad(e) ? e1 : zu;
        return new d(o, r);
      });
    n && (i.values.clear(), i.latest = {}),
      i.updateConfig(
        P(P(P({}, i.config), { enableHardwareAcceleration: !n }), t),
      );
    var a = C.useContext(Vd);
    i.layoutId = a && t.layoutId ? a + "-" + t.layoutId : t.layoutId;
    var u = C.useContext(Zt), s = u === null ? !0 : u.isPresent;
    i.isPresent = t.isPresent !== void 0 ? t.isPresent : s;
    var l = u == null ? void 0 : u.id;
    return i.isPresenceRoot = !o || o.presenceId !== l,
      C.useEffect(function () {
        var d, m;
        if (
          t.onViewportBoxUpdate &&
          (d = i.onViewportBoxUpdate(t.onViewportBoxUpdate)),
            t._onLayoutMeasure && (m = i.onLayoutMeasure(t._onLayoutMeasure)),
            d || m
        ) {
          return function () {
            d == null || d(), m == null || m();
          };
        }
      }, [t.onViewportBoxUpdate, t._onLayoutMeasure]),
      i;
  },
  Et = C.createContext({
    transformPagePoint: function (e) {
      return e;
    },
    features: [],
    isStatic: !1,
  });
function o1(e) {
  var t = e.children,
    n = e.features,
    r = n === void 0 ? [] : n,
    o = J(e, ["children", "features"]),
    i = C.useContext(Et),
    a = Ee(i.features, r),
    u = C.useMemo(function () {
      return { features: a };
    }, [a.length]);
  for (var s in o) u[s] = o[s];
  return C.createElement(Et.Provider, { value: u }, t);
}
function li(e) {
  return C.useEffect(function () {
    return function () {
      return e();
    };
  }, []);
}
function qt(e, t, n, r) {
  return e.addEventListener(t, n, r), function () {
    return e.removeEventListener(t, n, r);
  };
}
function fi(e, t, n, r) {
  C.useEffect(function () {
    var o = e.current;
    if (n && o) return qt(o, t, n, r);
  }, [e, t, n, r]);
}
function Dd(e) {
  return typeof PointerEvent != "undefined" && e instanceof PointerEvent
    ? e.pointerType === "mouse"
    : e instanceof MouseEvent;
}
function bd(e) {
  var t = !!e.touches;
  return t;
}
function i1(e) {
  return function (t) {
    var n = t instanceof MouseEvent, r = !n || n && t.button === 0;
    r && e(t);
  };
}
var a1 = { pageX: 0, pageY: 0 };
function u1(e, t) {
  t === void 0 && (t = "page");
  var n = e.touches[0] || e.changedTouches[0], r = n || a1;
  return { x: r[t + "X"], y: r[t + "Y"] };
}
function s1(e, t) {
  return t === void 0 && (t = "page"), { x: e[t + "X"], y: e[t + "Y"] };
}
function $u(e, t) {
  return t === void 0 && (t = "page"), { point: bd(e) ? u1(e, t) : s1(e, t) };
}
function Hu(e) {
  return $u(e, "client");
}
var Id = function (e, t) {
    t === void 0 && (t = !1);
    var n = function (r) {
      return e(r, $u(r));
    };
    return t ? i1(n) : n;
  },
  Wu = typeof window != "undefined",
  l1 = function () {
    return Wu && window.onpointerdown === null;
  },
  f1 = function () {
    return Wu && window.ontouchstart === null;
  },
  c1 = function () {
    return Wu && window.onmousedown === null;
  },
  d1 = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
  },
  p1 = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
  };
function Fd(e) {
  return l1() ? e : f1() ? p1[e] : c1() ? d1[e] : e;
}
function Tn(e, t, n, r) {
  return qt(e, Fd(t), Id(n, t === "pointerdown"), r);
}
function ci(e, t, n, r) {
  return fi(e, Fd(t), n && Id(n, t === "pointerdown"), r);
}
var di = function (e) {
    return e * 1e3;
  },
  jd = function () {
    function e(t, n, r) {
      var o = this, i = (r === void 0 ? {} : r).transformPagePoint;
      if (
        this.startEvent = null,
          this.lastMoveEvent = null,
          this.lastMoveEventInfo = null,
          this.handlers = {},
          this.updatePoint = function () {
            if (!!(o.lastMoveEvent && o.lastMoveEventInfo)) {
              var m = Gu(o.lastMoveEventInfo, o.history),
                v = o.startEvent !== null,
                h = gu(m.offset, { x: 0, y: 0 }) >= 3;
              if (!(!v && !h)) {
                var g = m.point, x = xn().timestamp;
                o.history.push(P(P({}, g), { timestamp: x }));
                var c = o.handlers, f = c.onStart, p = c.onMove;
                v ||
                (f && f(o.lastMoveEvent, m), o.startEvent = o.lastMoveEvent),
                  p && p(o.lastMoveEvent, m);
              }
            }
          },
          this.handlePointerMove = function (m, v) {
            if (
              o.lastMoveEvent = m,
                o.lastMoveEventInfo = Yu(v, o.transformPagePoint),
                Dd(m) && m.buttons === 0
            ) {
              o.handlePointerUp(m, v);
              return;
            }
            Ce.update(o.updatePoint, !0);
          },
          this.handlePointerUp = function (m, v) {
            o.end();
            var h = o.handlers.onEnd;
            if (!!h) {
              var g = Gu(Yu(v, o.transformPagePoint), o.history);
              h && h(m, g);
            }
          },
          !(bd(t) && t.touches.length > 1)
      ) {
        this.handlers = n, this.transformPagePoint = i;
        var a = $u(t),
          u = Yu(a, this.transformPagePoint),
          s = u.point,
          l = xn().timestamp;
        this.history = [P(P({}, s), { timestamp: l })];
        var d = n.onSessionStart;
        d && d(t, Gu(u, this.history)),
          this.removeListeners = yr(
            Tn(window, "pointermove", this.handlePointerMove),
            Tn(window, "pointerup", this.handlePointerUp),
            Tn(window, "pointercancel", this.handlePointerUp),
          );
      }
    }
    return e.prototype.updateHandlers = function (t) {
      this.handlers = t;
    },
      e.prototype.end = function () {
        this.removeListeners && this.removeListeners(),
          wn.update(this.updatePoint);
      },
      e;
  }();
function Yu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function zd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Gu(e, t) {
  var n = e.point;
  return {
    point: n,
    delta: zd(n, Bd(t)),
    offset: zd(n, v1(t)),
    velocity: m1(t, .1),
  };
}
function v1(e) {
  return e[0];
}
function Bd(e) {
  return e[e.length - 1];
}
function m1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  for (
    var n = e.length - 1, r = null, o = Bd(e);
    n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > di(t)));
  ) {
    n--;
  }
  if (!r) return { x: 0, y: 0 };
  var i = (o.timestamp - r.timestamp) / 1e3;
  if (i === 0) return { x: 0, y: 0 };
  var a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return a.x === Infinity && (a.x = 0), a.y === Infinity && (a.y = 0), a;
}
function Ud(e, t) {
  var n = e.onPan,
    r = e.onPanStart,
    o = e.onPanEnd,
    i = e.onPanSessionStart,
    a = n || r || o || i,
    u = C.useRef(null),
    s = C.useContext(Et).transformPagePoint,
    l = {
      onSessionStart: i,
      onStart: r,
      onMove: n,
      onEnd: function (m, v) {
        u.current = null, o && o(m, v);
      },
    };
  C.useEffect(function () {
    u.current !== null && u.current.updateHandlers(l);
  });
  function d(m) {
    u.current = new jd(m, l, { transformPagePoint: s });
  }
  ci(t, "pointerdown", a && d),
    li(function () {
      return u.current && u.current.end();
    });
}
var $d = function (e, t) {
    return t ? e === t ? !0 : $d(e, t.parentElement) : !1;
  },
  Hd = {
    linear: Ho,
    easeIn: Wo,
    easeInOut: vu,
    easeOut: uc,
    circIn: mu,
    circInOut: sc,
    circOut: Yo,
    backIn: Go,
    backInOut: fc,
    backOut: lc,
    anticipate: cc,
    bounceIn: dc,
    bounceInOut: pc,
    bounceOut: gr,
  },
  Wd = function (e) {
    if (Array.isArray(e)) {
      Q(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
      );
      var t = X(e, 4), n = t[0], r = t[1], o = t[2], i = t[3];
      return Pc(n, r, o, i);
    } else if (typeof e == "string") {
      return Q(Hd[e] !== void 0, "Invalid easing type '" + e + "'"), Hd[e];
    }
    return e;
  },
  h1 = function (e) {
    return Array.isArray(e) && typeof e[0] != "number";
  },
  Yd = function (e, t) {
    return e === "zIndex"
      ? !1
      : !!(typeof t == "number" || Array.isArray(t) ||
        typeof t == "string" && Be.test(t) && !t.startsWith("url("));
  },
  Jt = function () {
    return {
      type: "spring",
      stiffness: 500,
      damping: 25,
      restDelta: .5,
      restSpeed: 10,
    };
  },
  pi = function (e) {
    return {
      type: "spring",
      stiffness: 550,
      damping: e === 0 ? 100 : 30,
      restDelta: .01,
      restSpeed: 10,
    };
  },
  Ku = function () {
    return { type: "keyframes", ease: "linear", duration: .3 };
  },
  y1 = function (e) {
    return { type: "keyframes", duration: .8, values: e };
  },
  Gd = {
    x: Jt,
    y: Jt,
    z: Jt,
    rotate: Jt,
    rotateX: Jt,
    rotateY: Jt,
    rotateZ: Jt,
    scaleX: pi,
    scaleY: pi,
    scale: pi,
    opacity: Ku,
    backgroundColor: Ku,
    color: Ku,
    default: pi,
  },
  g1 = function (e, t) {
    var n;
    return bu(t) ? n = y1 : n = Gd[e] || Gd.default, P({ to: t }, n(t));
  };
function w1(e) {
  var t = e.when,
    n = e.delay,
    r = e.delayChildren,
    o = e.staggerChildren,
    i = e.staggerDirection,
    a = e.repeat,
    u = e.repeatType,
    s = e.repeatDelay,
    l = e.from,
    d = J(e, [
      "when",
      "delay",
      "delayChildren",
      "staggerChildren",
      "staggerDirection",
      "repeat",
      "repeatType",
      "repeatDelay",
      "from",
    ]);
  return !!Object.keys(d).length;
}
var Kd = !1;
function x1(e) {
  var t = e.ease,
    n = e.times,
    r = e.yoyo,
    o = e.flip,
    i = e.loop,
    a = J(e, ["ease", "times", "yoyo", "flip", "loop"]),
    u = P({}, a);
  return n && (u.offset = n),
    a.duration && (u.duration = di(a.duration)),
    a.repeatDelay && (u.repeatDelay = di(a.repeatDelay)),
    t && (u.ease = h1(t) ? t.map(Wd) : Wd(t)),
    a.type === "tween" && (u.type = "keyframes"),
    (r || i || o) &&
    (Sn(
      !Kd,
      "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.",
    ),
      Kd = !0,
      r ? u.repeatType = "reverse" : i
        ? u.repeatType = "loop"
        : o && (u.repeatType = "mirror"),
      u.repeat = i || r || o || a.repeat),
    a.type !== "spring" && (u.type = "keyframes"),
    u;
}
function S1(e, t) {
  var n, r, o, i, a;
  return (a = (i = (r = (n = e[t]) === null || n === void 0
                      ? void 0
                      : n.delay) !== null && r !== void 0
                ? r
                : (o = e.default) === null || o === void 0
                ? void 0
                : o.delay) !== null && i !== void 0
          ? i
          : e.delay) !== null && a !== void 0
    ? a
    : 0;
}
function E1(e) {
  return Array.isArray(e.to) && e.to[0] === null &&
    (e.to = Ee(e.to), e.to[0] = e.from),
    e;
}
function C1(e, t, n) {
  var r;
  return Array.isArray(t.to) &&
    ((r = e.duration) !== null && r !== void 0 || (e.duration = .8)),
    E1(t),
    w1(e) || (e = P(P({}, e), g1(n, t.to))),
    P(P({}, t), x1(e));
}
function T1(e, t, n, r, o) {
  var i,
    a = P1(r, e),
    u = (i = a.from) !== null && i !== void 0 ? i : t.get(),
    s = Yd(e, n);
  u === "none" && s && typeof n == "string" && (u = Jc(e, n));
  var l = Yd(e, u);
  Sn(
    l === s,
    "You are trying to animate " + e + ' from "' + u + '" to "' + n + '". ' +
      u + " is not an animatable value - to enable this animation set " + u +
      " to a value animatable to " + n + " via the `style` property.",
  );
  function d() {
    var v = {
      from: u,
      to: n,
      velocity: t.getVelocity(),
      onComplete: o,
      onUpdate: function (h) {
        return t.set(h);
      },
    };
    return a.type === "inertia" || a.type === "decay"
      ? hc(P(P({}, v), a))
      : Xo(P(P({}, C1(a, v, e)), {
        onUpdate: function (h) {
          var g;
          v.onUpdate(h),
            (g = a.onUpdate) === null || g === void 0 || g.call(a, h);
        },
        onComplete: function () {
          var h;
          v.onComplete(),
            (h = a.onComplete) === null || h === void 0 || h.call(a);
        },
      }));
  }
  function m() {
    var v;
    return t.set(n),
      o(),
      (v = a == null ? void 0 : a.onComplete) === null || v === void 0 ||
      v.call(a),
      { stop: function () {} };
  }
  return !l || !s || a.type === !1 ? m : d;
}
function P1(e, t) {
  return e[t] || e.default || e;
}
function Tr(e, t, n, r) {
  return r === void 0 && (r = {}),
    t.start(function (o) {
      var i,
        a,
        u = T1(e, t, n, r, o),
        s = S1(r, e),
        l = function () {
          return a = u();
        };
      return s ? i = setTimeout(l, di(s)) : l(), function () {
        clearTimeout(i), a == null || a.stop();
      };
    });
}
function vi(e, t, n) {
  e.onAnimationStart();
  var r;
  if (Array.isArray(t)) {
    var o = t.map(function (i) {
      return Xu(e, i, n);
    });
    r = Promise.all(o);
  } else typeof t == "string" ? r = Xu(e, t, n) : r = Xd(e, t, n);
  return r.then(function () {
    return e.onAnimationComplete();
  });
}
function Xu(e, t, n) {
  var r;
  n === void 0 && (n = {});
  var o = Iu(e, t, n.custom),
    i = (o || {}).transition,
    a = i === void 0 ? e.getDefaultTransition() || {} : i;
  n.transitionOverride && (a = n.transitionOverride);
  var u = o
      ? function () {
        return Xd(e, o, n);
      }
      : function () {
        return Promise.resolve();
      },
    s = ((r = e.variantChildrenOrder) === null || r === void 0
        ? void 0
        : r.size)
      ? function (h) {
        h === void 0 && (h = 0);
        var g = a.delayChildren,
          x = g === void 0 ? 0 : g,
          c = a.staggerChildren,
          f = a.staggerDirection;
        return _1(e, t, x + h, c, f, n);
      }
      : function () {
        return Promise.resolve();
      },
    l = a.when;
  if (l) {
    var d = X(l === "beforeChildren" ? [u, s] : [s, u], 2), m = d[0], v = d[1];
    return m().then(v);
  } else return Promise.all([u(), s(n.delay)]);
}
function Xd(e, t, n) {
  var r,
    o = n === void 0 ? {} : n,
    i = o.delay,
    a = i === void 0 ? 0 : i,
    u = o.transitionOverride,
    s = o.type,
    l = e.makeTargetAnimatable(t),
    d = l.transition,
    m = d === void 0 ? e.getDefaultTransition() : d,
    v = l.transitionEnd,
    h = J(l, ["transition", "transitionEnd"]);
  u && (m = u);
  var g = [],
    x = s &&
      ((r = e.animationState) === null || r === void 0
        ? void 0
        : r.getProtectedKeys(s));
  for (var c in h) {
    var f = e.getValue(c), p = h[c];
    if (!(!f || p === void 0 || (x == null ? void 0 : x[c]) !== void 0)) {
      var y = Tr(c, f, p, P({ delay: a }, m));
      g.push(y);
    }
  }
  return Promise.all(g).then(function () {
    v && Fu(e, v);
  });
}
function _1(e, t, n, r, o, i) {
  n === void 0 && (n = 0), r === void 0 && (r = 0), o === void 0 && (o = 1);
  var a = [],
    u = (e.variantChildrenOrder.size - 1) * r,
    s = o === 1
      ? function (l) {
        return l === void 0 && (l = 0), l * r;
      }
      : function (l) {
        return l === void 0 && (l = 0), u - l * r;
      };
  return Array.from(e.variantChildrenOrder).forEach(function (l, d) {
    var m = Xu(l, t, P(P({}, i), { delay: n + s(d) }));
    a.push(m);
  }),
    Promise.all(a);
}
function k1(e) {
  e.forEachValue(function (t) {
    return t.stop();
  });
}
var _r = function () {
    function e() {
      this.hasMounted = !1,
        this.pendingAnimations = [],
        this.subscribers = new Set();
    }
    return e.prototype.subscribe = function (t) {
      var n = this;
      return this.subscribers.add(t), function () {
        return n.subscribers.delete(t);
      };
    },
      e.prototype.start = function (t, n) {
        var r = this;
        if (this.hasMounted) {
          var o = [];
          return this.subscribers.forEach(function (i) {
            o.push(vi(i, t, { transitionOverride: n }));
          }),
            Promise.all(o);
        } else {
          return new Promise(function (i) {
            r.pendingAnimations.push({ animation: [t, n], resolve: i });
          });
        }
      },
      e.prototype.set = function (t) {
        return Q(
          this.hasMounted,
          "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.",
        ),
          this.subscribers.forEach(function (n) {
            _d(n, t);
          });
      },
      e.prototype.stop = function () {
        this.subscribers.forEach(function (t) {
          k1(t);
        });
      },
      e.prototype.mount = function () {
        var t = this;
        this.hasMounted = !0,
          this.pendingAnimations.forEach(function (n) {
            var r = n.animation, o = n.resolve;
            t.start.apply(t, Ee(r)).then(o);
          });
      },
      e.prototype.unmount = function () {
        this.hasMounted = !1, this.stop();
      },
      e;
  }(),
  O1 = function () {
    return new _r();
  };
function M1(e, t) {
  if (!Array.isArray(t)) return !1;
  var n = t.length;
  if (n !== e.length) return !1;
  for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var H;
(function (e) {
  e.Animate = "animate",
    e.Hover = "whileHover",
    e.Tap = "whileTap",
    e.Drag = "whileDrag",
    e.Focus = "whileFocus",
    e.Exit = "exit";
})(H || (H = {}));
var Qu = [H.Animate, H.Hover, H.Tap, H.Drag, H.Focus, H.Exit],
  L1 = Ee(Qu).reverse(),
  N1 = Qu.length;
function A1(e) {
  return function (t) {
    return Promise.all(t.map(function (n) {
      var r = n.animation, o = n.options;
      return vi(e, r, o);
    }));
  };
}
function D1(e) {
  var t = A1(e),
    n = V1(),
    r = !0,
    o = function (m, v) {
      var h = Iu(e, v);
      if (h) {
        var g = h.transition,
          x = h.transitionEnd,
          c = J(h, ["transition", "transitionEnd"]);
        m = P(P(P({}, m), c), x);
      }
      return m;
    };
  function i(m) {
    return n[m].protectedKeys;
  }
  function a(m) {
    t = m(e);
  }
  var u, s;
  function l(m, v, h, g) {
    v === void 0 && (v = {}), u = m, s = v;
    var x = [], c = new Set(), f = {};
    m.variants && e.updateConfig(P(P({}, e.config), { variants: m.variants }));
    for (
      var p = Infinity,
        y = function (T) {
          var O = L1[T],
            _ = n[O],
            A = (Xe = m[O]) !== null && Xe !== void 0 ? Xe : v[O],
            U = jg(A),
            Oe = O === g ? _.isActive : null;
          Oe === !1 && (p = T);
          var ze = A === v[O] && U;
          if (
            ze && r && e.manuallyAnimateOnMount && (ze = !1),
              r && O === H.Animate && e.prevSnapshot &&
              (r = !1, _.prevResolvedValues = e.prevSnapshot),
              _.protectedKeys = P({}, f),
              !_.isActive && Oe === null || !A && !_.prevProp ||
              A instanceof _r || typeof A == "boolean"
          ) {
            return "continue";
          }
          var at = R1(_.prevProp, A) || O === g && _.isActive && !ze && U ||
              T > p && U,
            Ht = Array.isArray(A) ? A : [A],
            j = Ht.reduce(o, {});
          Oe === !1 && (j = {});
          var Xe = _.prevResolvedValues,
            xt = Xe === void 0 ? {} : Xe,
            eu = P(P({}, xt), j);
          for (var Me in eu) {
            var gn = j[Me], _y = xt[Me];
            f.hasOwnProperty(Me) || (gn !== _y
              ? gn !== void 0 ? (at = !0, c.delete(Me)) : c.add(Me)
              : gn !== void 0 && c.has(Me)
              ? (at = !0, c.delete(Me))
              : _.protectedKeys[Me] = !0);
          }
          _.prevProp = A,
            _.prevResolvedValues = j,
            _.isActive && (f = P(P({}, f), j)),
            at && !ze && x.push.apply(
              x,
              Ee(Ht.map(function (ky) {
                return { animation: ky, options: P({ type: O }, h) };
              })),
            );
        },
        w = 0;
      w < N1;
      w++
    ) {
      y(w);
    }
    if (c.size) {
      var E = {};
      c.forEach(function (T) {
        var O = e.getBaseValue(T, m);
        O !== void 0 && (E[T] = O);
      }), x.push({ animation: E });
    }
    var S = Boolean(x.length);
    return r && m.initial === !1 && !e.manuallyAnimateOnMount && (S = !1),
      r = !1,
      S ? t(x) : Promise.resolve();
  }
  function d(m, v, h) {
    var g;
    return n[m].isActive === v
      ? Promise.resolve()
      : ((g = e.variantChildrenOrder) === null || g === void 0 ||
        g.forEach(function (x) {
          var c;
          return (c = x.animationState) === null || c === void 0
            ? void 0
            : c.setActive(m, v);
        }),
        n[m].isActive = v,
        l(u, s, h, m));
  }
  return {
    getProtectedKeys: i,
    setProps: l,
    setActive: d,
    setAnimateFunction: a,
  };
}
function R1(e, t) {
  return typeof t == "string" ? t !== e : Td(t) ? !M1(t, e) : !1;
}
function _n(e) {
  return e === void 0 && (e = !1),
    { isActive: e, protectedKeys: {}, prevResolvedValues: {} };
}
function V1() {
  var e;
  return e = {},
    e[H.Animate] = _n(!0),
    e[H.Hover] = _n(),
    e[H.Tap] = _n(),
    e[H.Drag] = _n(),
    e[H.Focus] = _n(),
    e[H.Exit] = _n(),
    e;
}
function Qd(e) {
  var t = null;
  return function () {
    var n = function () {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
var Zd = Qd("dragHorizontal"), qd = Qd("dragVertical");
function Jd(e) {
  var t = !1;
  if (e === "y") t = qd();
  else if (e === "x") t = Zd();
  else {
    var n = Zd(), r = qd();
    n && r
      ? t = function () {
        n(), r();
      }
      : (n && n(), r && r());
  }
  return t;
}
function b1() {
  var e = Jd(!0);
  return e ? (e(), !1) : !0;
}
function ep(e, t) {
  var n = e.onTap,
    r = e.onTapStart,
    o = e.onTapCancel,
    i = e.whileTap,
    a = n || r || o || i,
    u = C.useRef(!1),
    s = C.useRef(null);
  function l() {
    var g;
    (g = s.current) === null || g === void 0 || g.call(s), s.current = null;
  }
  function d() {
    var g;
    return u.current = !1,
      (g = t.animationState) === null || g === void 0 || g.setActive(H.Tap, !1),
      !b1();
  }
  function m(g, x) {
    !d() ||
      ($d(t.getInstance(), g.target)
        ? n == null || n(g, x)
        : o == null || o(g, x));
  }
  function v(g, x) {
    !d() || o == null || o(g, x);
  }
  function h(g, x) {
    var c;
    l(),
      !u.current &&
      (u.current = !0,
        s.current = yr(
          Tn(window, "pointerup", m),
          Tn(window, "pointercancel", v),
        ),
        r == null || r(g, x),
        (c = t.animationState) === null || c === void 0 ||
        c.setActive(H.Tap, !0));
  }
  ci(t, "pointerdown", a ? h : void 0), li(l);
}
function tp(e, t, n) {
  return function (r, o) {
    var i;
    !Dd(r) || !e.isHoverEventsEnabled ||
      (n == null || n(r, o),
        (i = e.animationState) === null || i === void 0 ||
        i.setActive(H.Hover, t));
  };
}
function I1(e, t) {
  var n = e.onHoverStart, r = e.onHoverEnd, o = e.whileHover;
  ci(t, "pointerenter", n || o ? tp(t, !0, n) : void 0),
    ci(t, "pointerleave", r || o ? tp(t, !1, r) : void 0);
}
function F1(e, t) {
  var n = e.whileFocus,
    r = function () {
      var i;
      (i = t.animationState) === null || i === void 0 ||
        i.setActive(H.Focus, !0);
    },
    o = function () {
      var i;
      (i = t.animationState) === null || i === void 0 ||
        i.setActive(H.Focus, !1);
    };
  fi(t, "focus", n ? r : void 0), fi(t, "blur", n ? o : void 0);
}
function np(e, t) {
  Ud(e, t), ep(e, t), I1(e, t), F1(e, t);
}
var mi = function (e) {
    return function (t) {
      return e(t), null;
    };
  },
  rp = [
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "onHoverStart",
    "onHoverEnd",
    "whileFocus",
    "whileTap",
    "whileHover",
  ],
  j1 = mi(function (e) {
    var t = e.visualElement, n = J(e, ["visualElement"]);
    np(n, t);
  }),
  op = {
    key: "gestures",
    shouldRender: function (e) {
      return rp.some(function (t) {
        return e.hasOwnProperty(t);
      });
    },
    getComponent: function () {
      return j1;
    },
  },
  z1 = new Set(
    Ee([
      "initial",
      "animate",
      "exit",
      "style",
      "variants",
      "transition",
      "transformTemplate",
      "transformValues",
      "custom",
      "inherit",
      "layout",
      "layoutId",
      "onLayoutAnimationComplete",
      "onViewportBoxUpdate",
      "onAnimationStart",
      "onAnimationComplete",
      "onUpdate",
      "onDragStart",
      "onDrag",
      "onDragEnd",
      "_onLayoutMeasure",
      "onMeasureDragConstraints",
      "onDirectionLock",
      "onDragTransitionEnd",
      "drag",
      "dragControls",
      "dragListener",
      "dragConstraints",
      "dragDirectionLock",
      "_dragX",
      "_dragY",
      "dragElastic",
      "dragMomentum",
      "dragPropagation",
      "dragTransition",
      "whileDrag",
    ], rp),
  );
function Zu(e) {
  return z1.has(e);
}
var ip = function (e) {
  return !Zu(e);
};
try {
  ap = Wc().default,
    ip = function (e) {
      return e.startsWith("on") ? !Zu(e) : ap(e);
    };
} catch (e) {}
var ap;
function B1(e) {
  var t = {};
  for (var n in e) ip(n) && (t[n] = e[n]);
  return t;
}
function U1(e, t) {
  var n = t.drag, r = {}, o = P(P(P({}, e.reactStyle), e.style), e.vars);
  return n &&
    (r.draggable = !1,
      o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
      o.touchAction = n === !0 ? "none" : "pan-" + (n === "x" ? "y" : "x")),
    r.style = o,
    r;
}
function $1(e) {
  return P(P({}, e.attrs), { style: P({}, e.reactStyle) });
}
function H1(e, t, n) {
  var r = typeof e == "string" ? B1(t) : t;
  n.clean(), n.build();
  var o = Ad(e) ? $1(n) : U1(n, t);
  return C.createElement(e, P(P(P({}, r), { ref: n.ref }), o));
}
function up(e, t) {
  var n = t.layout, r = t.layoutId;
  return oi(e) || ed(e) || (n || r !== void 0) && !!Pr[e];
}
function Y1(e, t) {
  var n = Pe(W1);
  for (var r in n) {
    var o = up(r, t),
      i = t[r] !== void 0,
      a = t.style && t.style[r] !== void 0,
      u = i && ft(t[r]),
      s = a && ft(t.style[r]),
      l = o && !i && !a,
      d = !o && !u && !s;
    (l || d) && (e.removeValue(r), delete n[r]);
  }
  sp(e, n, t, !1, t),
    t.style && sp(e, n, t.style, !0, t),
    t.transformValues && (e.reactStyle = t.transformValues(e.reactStyle));
}
function sp(e, t, n, r, o) {
  r === void 0 && (r = !1), r && (e.reactStyle = {});
  for (var i in n) {
    var a = n[i], u = !1;
    if (ft(a)) G1.has(i) || (e.addValue(i, a), u = !0);
    else if (up(i, o)) {
      if (!e.hasValue(i)) e.addValue(i, pe(a));
      else if (a !== t[i]) {
        if (ft(t[i])) e.addValue(i, pe(a));
        else {
          var s = e.getValue(i);
          s.set(a);
        }
      }
      u = !0;
    } else r && (e.reactStyle[i] = a);
    u && (t[i] = a);
  }
}
var G1 = new Set([]),
  W1 = function () {
    return {};
  };
function K1(e, t, n, r) {
  var o = C.useContext(Et);
  if (t || typeof window == "undefined") return null;
  for (var i = Ee(e, o.features), a = i.length, u = [], s = 0; s < a; s++) {
    var l = i[s], d = l.shouldRender, m = l.key, v = l.getComponent;
    if (d(r)) {
      var h = v(r);
      h && u.push(C.createElement(h, P({ key: m }, r, { visualElement: n })));
    }
  }
  return u;
}
var W;
(function (e) {
  e[e.Entering = 0] = "Entering",
    e[e.Present = 1] = "Present",
    e[e.Exiting = 2] = "Exiting";
})(W || (W = {}));
var en;
(function (e) {
  e[e.Hide = 0] = "Hide", e[e.Show = 1] = "Show";
})(en || (en = {}));
var X1 = {
    measureLayout: function (e) {
      return e.measureLayout();
    },
    layoutReady: function (e) {
      return e.layoutReady();
    },
  },
  Q1 = function (e, t) {
    return e.depth - t.depth;
  };
function hi() {
  var e = new Set(),
    t = function (r) {
      return e.add(r);
    },
    n = function (r) {
      var o = r === void 0 ? X1 : r,
        i = o.measureLayout,
        a = o.layoutReady,
        u = o.parent,
        s = Array.from(e).sort(Q1),
        l = function () {
          s.forEach(function (d) {
            return d.resetTransform();
          }), s.forEach(i);
        };
      u ? u.withoutTransform(l) : l(),
        s.forEach(a),
        s.forEach(function (d) {
          d.isPresent && (d.presence = W.Present);
        }),
        e.clear();
    };
  return { add: t, flush: n };
}
function tn(e) {
  return !!e.forceUpdate;
}
var kr = C.createContext(hi()),
  qu = C.createContext(hi()),
  Z1 = typeof window != "undefined",
  yi = Z1 ? C.useLayoutEffect : C.useEffect;
function q1(e) {
  var t = C.useContext(kr), n = C.useContext(qu);
  yi(function () {
    return function () {
      tn(t) && t.remove(e), tn(n) && n.remove(e);
    };
  }, []);
}
function Ju() {
  var e = C.useContext(Zt);
  if (e === null) return [!0, null];
  var t = e.isPresent, n = e.onExitComplete, r = e.register, o = J1();
  C.useEffect(function () {
    return r(o);
  }, []);
  var i = function () {
    return n == null ? void 0 : n(o);
  };
  return !t && n ? [!1, i] : [!0];
}
function ew() {
  return lp(C.useContext(Zt));
}
function lp(e) {
  return e === null ? !0 : e.isPresent;
}
var tw = 0,
  nw = function () {
    return tw++;
  },
  J1 = function () {
    return Pe(nw);
  };
function fp(e, t) {
  t === void 0 && (t = !1);
  var n = C.useRef(!0);
  (!t || t && n.current) && e(), n.current = !1;
}
function cp(e) {
  var t = e.animate, n = e.variants, r = e.inherit;
  return r ?? (!!n && !t);
}
function aw(e, t, n) {
  var r,
    o,
    i,
    a = Uu(),
    u = C.useContext(Zt),
    s = cp(t),
    l = [],
    d = {},
    m = !1;
  iw(t) && (m = !0, a = {});
  for (var v = m || t.variants, h = 0; h < rw; h++) {
    var g = dp[h], x = t[g], c = a[g];
    Qe(x) || x === !1
      ? (d[g] = x, l.push(x))
      : ((Qe(c) || c === !1) && (d[g] = c), l.push(null)),
      l.push(Qe(c) ? c : null);
  }
  var f = (r = t.animate) !== null && r !== void 0 ? r : d.animate,
    p = t.initial;
  p === void 0 && (Qe(f) || d.initial !== !1) && (p = d.initial),
    (u == null ? void 0 : u.initial) === !1 && (p = d.initial = !1),
    d.parent = v ? e : a.parent,
    fp(function () {
      var E = p === !1 ? f : p;
      E && typeof E != "boolean" && !ow(E) && _d(e, E);
    }, !n),
    fp(function () {
      e.forEachValue(function (E, S) {
        e.baseTarget[S] = E.get();
      });
    }, !0);
  var y = C.useMemo(function () {
      return d;
    }, l),
    w;
  return v && s && !m &&
    (w = (o = a.parent) === null || o === void 0
      ? void 0
      : o.addVariantChild(e),
      e.inheritsVariants = !0),
    !m && s && ((i = e.parent) === null || i === void 0
      ? void 0
      : i.isMounted) &&
    p !== !1 && f && (e.manuallyAnimateOnMount = !0),
    C.useEffect(function () {
      return e.isMounted = !0, function () {
        e.isMounted = !1, w == null || w();
      };
    }, []),
    yi(function () {
      var E;
      lp(u) &&
        ((E = e.variantChildrenOrder) === null || E === void 0 || E.clear());
    }),
    C.useEffect(function () {
      var E;
      v &&
        ((E = a.parent) === null || E === void 0 || E.addVariantChildOrder(e));
    }),
    y;
}
var dp = Ee(["initial"], Qu), rw = dp.length;
function Qe(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ow(e) {
  return typeof e == "object" && typeof e.start == "function";
}
function iw(e) {
  var t;
  return typeof ((t = e.animate) === null || t === void 0 ? void 0 : t.start) ==
      "function" ||
    Qe(e.animate) || Qe(e.whileHover) || Qe(e.whileDrag) || Qe(e.whileTap) ||
    Qe(e.whileFocus) || Qe(e.exit);
}
function gi(e, t) {
  var n = t.defaultFeatures, r = t.useVisualElement, o = t.useRender;
  function i(a, u) {
    var s = C.useContext(Et).isStatic, l = r(e, a, s, u);
    Y1(l, a);
    var d = aw(l, a, s),
      m = K1(n, s, l, a),
      v = C.useMemo(function () {
        return { visualElement: l, variantContext: d };
      }, [l, d]),
      h = o(e, a, l);
    return q1(l),
      C.createElement(
        C.Fragment,
        null,
        C.createElement(si.Provider, { value: v }, h),
        m,
      );
  }
  return C.forwardRef(i);
}
function pp(e, t, n) {
  var r = t.min, o = t.max;
  return r !== void 0 && e < r
    ? e = n ? re(r, e, n) : Math.max(e, r)
    : o !== void 0 && e > o && (e = n ? re(o, e, n) : Math.min(e, o)),
    e;
}
function uw(e, t, n, r, o) {
  var i = e - t * n;
  return r ? pp(i, r, o) : i;
}
function vp(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function mp(e, t) {
  var n = t.top, r = t.left, o = t.bottom, i = t.right;
  return { x: vp(e.x, r, i), y: vp(e.y, n, o) };
}
function hp(e, t) {
  var n, r = t.min - e.min, o = t.max - e.max;
  return t.max - t.min < e.max - e.min &&
    (n = X([o, r], 2), r = n[0], o = n[1]),
    { min: e.min + r, max: e.min + o };
}
function sw(e, t) {
  return { x: hp(e.x, t.x), y: hp(e.y, t.y) };
}
function lw(e, t, n) {
  var r = e.max - e.min, o = re(t.min, t.max - r, n);
  return { min: o, max: o + r };
}
function fw(e, t) {
  var n = {};
  return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n;
}
var cw = function (e) {
    return typeof e == "object" && e.hasOwnProperty("current") &&
      e.current.hasOwnProperty("top") && e.current.hasOwnProperty("left");
  },
  yp = new WeakMap(),
  gp,
  pw = function () {
    function e(t) {
      var n = t.visualElement;
      this.isDragging = !1,
        this.currentDirection = null,
        this.constraints = !1,
        this.props = {},
        this.hasMutatedConstraints = !1,
        this.cursorProgress = { x: .5, y: .5 },
        this.originPoint = {},
        this.openGlobalLock = null,
        this.panSession = null,
        this.visualElement = n,
        this.visualElement.enableLayoutProjection(),
        yp.set(n, this);
    }
    return e.prototype.start = function (t, n) {
      var r = this,
        o = n === void 0 ? {} : n,
        i = o.snapToCursor,
        a = i === void 0 ? !1 : i,
        u = o.cursorProgress;
      a && this.snapToCursor(t);
      var s = function () {
          r.stopMotion();
        },
        l = function (h, g) {
          var x, c, f, p = r.props, y = p.drag, w = p.dragPropagation;
          if (
            !(y && !w &&
              (r.openGlobalLock && r.openGlobalLock(),
                r.openGlobalLock = Jd(y),
                !r.openGlobalLock))
          ) {
            r.prepareBoundingBox(),
              r.visualElement.lockTargetBox(),
              r.resolveDragConstraints();
            var E = Hu(h).point;
            Ue(function (S) {
              var T = r.visualElement.targetBox[S], O = T.min, _ = T.max;
              r.cursorProgress[S] = u ? u[S] : Xt(O, _, E[S]);
              var A = r.getAxisMotionValue(S);
              A && (r.originPoint[S] = A.get());
            }),
              r.isDragging = !0,
              r.currentDirection = null,
              (c = (x = r.props).onDragStart) === null || c === void 0 ||
              c.call(x, h, g),
              (f = r.visualElement.animationState) === null || f === void 0 ||
              f.setActive(H.Drag, !0);
          }
        },
        d = function (h, g) {
          var x,
            c,
            f,
            p,
            y = r.props,
            w = y.dragPropagation,
            E = y.dragDirectionLock;
          if (!(!w && !r.openGlobalLock)) {
            var S = g.offset;
            if (E && r.currentDirection === null) {
              r.currentDirection = dw(S),
                r.currentDirection !== null &&
                ((c = (x = r.props).onDirectionLock) === null || c === void 0 ||
                  c.call(x, r.currentDirection));
              return;
            }
            r.updateAxis("x", h, S),
              r.updateAxis("y", h, S),
              (p = (f = r.props).onDrag) === null || p === void 0 ||
              p.call(f, h, g),
              gp = h;
          }
        },
        m = function (h, g) {
          return r.stop(h, g);
        },
        v = this.props.transformPagePoint;
      this.panSession = new jd(t, {
        onSessionStart: s,
        onStart: l,
        onMove: d,
        onEnd: m,
      }, { transformPagePoint: v });
    },
      e.prototype.prepareBoundingBox = function () {
        var t = this.visualElement;
        t.withoutTransform(function () {
          t.measureLayout();
        }), t.rebaseTargetBox(!0, t.getBoundingBoxWithoutTransforms());
      },
      e.prototype.resolveDragConstraints = function () {
        var t = this;
        this.constraints = this.resolveConstraints(),
          this.constraints && !this.hasMutatedConstraints && Ue(function (n) {
            t.getAxisMotionValue(n) &&
              (t.constraints[n] = fw(t.visualElement.box[n], t.constraints[n]));
          });
      },
      e.prototype.resolveConstraints = function () {
        var t = this.props.dragConstraints;
        return t
          ? cw(t) ? mp(this.visualElement.box, t.current)
          : Ou(t) ? this.resolveRefConstraints(this.visualElement.box, t)
          : mp(this.visualElement.box, t)
          : !1;
      },
      e.prototype.resolveRefConstraints = function (t, n) {
        var r = this.props,
          o = r.onMeasureDragConstraints,
          i = r.transformPagePoint,
          a = n.current;
        Q(
          a !== null,
          "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
        ), this.constraintsBox = gd(a, i);
        var u = sw(t, this.constraintsBox);
        if (o) {
          var s = o(q0(u));
          this.hasMutatedConstraints = !!s, s && (u = Gc(s));
        }
        return u;
      },
      e.prototype.cancelDrag = function () {
        var t;
        this.isDragging = !1,
          this.panSession && this.panSession.end(),
          this.panSession = null,
          !this.props.dragPropagation && this.openGlobalLock &&
          (this.openGlobalLock(), this.openGlobalLock = null),
          (t = this.visualElement.animationState) === null || t === void 0 ||
          t.setActive(H.Drag, !1);
      },
      e.prototype.stop = function (t, n) {
        var r;
        this.visualElement.unlockTargetBox(),
          (r = this.panSession) === null || r === void 0 || r.end(),
          this.panSession = null;
        var o = this.isDragging;
        if (this.cancelDrag(), !!o) {
          var i = this.props,
            a = i.dragMomentum,
            u = i.dragElastic,
            s = i.onDragEnd;
          if (a || u) {
            var l = n.velocity;
            this.animateDragEnd(l);
          }
          s == null || s(t, n);
        }
      },
      e.prototype.snapToCursor = function (t) {
        var n = this;
        this.prepareBoundingBox(),
          Ue(function (r) {
            var o = n.props.drag;
            if (!!wi(r, o, n.currentDirection)) {
              var i = n.getAxisMotionValue(r);
              if (i) {
                var a = Hu(t).point,
                  u = n.visualElement.box,
                  s = u[r].max - u[r].min,
                  l = u[r].min + s / 2,
                  d = a[r] - l;
                n.originPoint[r] = a[r], i.set(d);
              } else n.cursorProgress[r] = .5, n.updateVisualElementAxis(r, t);
            }
          });
      },
      e.prototype.updateAxis = function (t, n, r) {
        var o = this.props.drag;
        if (!!wi(t, o, this.currentDirection)) {
          return this.getAxisMotionValue(t)
            ? this.updateAxisMotionValue(t, r)
            : this.updateVisualElementAxis(t, n);
        }
      },
      e.prototype.updateAxisMotionValue = function (t, n) {
        var r = this.getAxisMotionValue(t);
        if (!(!n || !r)) {
          var o = this.props.dragElastic,
            i = this.originPoint[t] + n[t],
            a = this.constraints ? pp(i, this.constraints[t], o) : i;
          r.set(a);
        }
      },
      e.prototype.updateVisualElementAxis = function (t, n) {
        var r,
          o = this.props.dragElastic,
          i = this.visualElement.box[t],
          a = i.max - i.min,
          u = this.cursorProgress[t],
          s = Hu(n).point,
          l = uw(
            s[t],
            a,
            u,
            (r = this.constraints) === null || r === void 0 ? void 0 : r[t],
            o,
          );
        this.visualElement.setAxisTarget(t, l, l + a);
      },
      e.prototype.updateProps = function (t) {
        var n = t.drag,
          r = n === void 0 ? !1 : n,
          o = t.dragDirectionLock,
          i = o === void 0 ? !1 : o,
          a = t.dragPropagation,
          u = a === void 0 ? !1 : a,
          s = t.dragConstraints,
          l = s === void 0 ? !1 : s,
          d = t.dragElastic,
          m = d === void 0 ? .35 : d,
          v = t.dragMomentum,
          h = v === void 0 ? !0 : v,
          g = J(t, [
            "drag",
            "dragDirectionLock",
            "dragPropagation",
            "dragConstraints",
            "dragElastic",
            "dragMomentum",
          ]);
        this.props = P({
          drag: r,
          dragDirectionLock: i,
          dragPropagation: u,
          dragConstraints: l,
          dragElastic: m,
          dragMomentum: h,
        }, g);
      },
      e.prototype.getAxisMotionValue = function (t) {
        var n = this.props,
          r = n.layout,
          o = n.layoutId,
          i = "_drag" + t.toUpperCase();
        if (this.props[i])return this.props[i];
        if (!r && o === void 0)return this.visualElement.getValue(t, 0);
      },
      e.prototype.animateDragEnd = function (t) {
        var n = this,
          r = this.props,
          o = r.drag,
          i = r.dragMomentum,
          a = r.dragElastic,
          u = r.dragTransition,
          s = Ue(function (l) {
            if (!!wi(l, o, n.currentDirection)) {
              var d = n.constraints ? n.constraints[l] : {},
                m = a ? 200 : 1e6,
                v = a ? 40 : 1e7,
                h = P(
                  P({
                    type: "inertia",
                    velocity: i ? t[l] : 0,
                    bounceStiffness: m,
                    bounceDamping: v,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                  }, u),
                  d,
                );
              return n.getAxisMotionValue(l)
                ? n.startAxisValueAnimation(l, h)
                : n.visualElement.startLayoutAxisAnimation(l, h);
            }
          });
        return Promise.all(s).then(function () {
          var l, d;
          (d = (l = n.props).onDragTransitionEnd) === null || d === void 0 ||
            d.call(l);
        });
      },
      e.prototype.stopMotion = function () {
        var t = this;
        Ue(function (n) {
          var r = t.getAxisMotionValue(n);
          r ? r.stop() : t.visualElement.stopLayoutAnimation();
        });
      },
      e.prototype.startAxisValueAnimation = function (t, n) {
        var r = this.getAxisMotionValue(t);
        if (!!r) {
          var o = r.get();
          return r.set(o), r.set(o), Tr(t, r, 0, n);
        }
      },
      e.prototype.scalePoint = function () {
        var t = this, n = this.props, r = n.drag, o = n.dragConstraints;
        if (!(!Ou(o) || !this.constraintsBox)) {
          this.stopMotion();
          var i = { x: 0, y: 0 };
          Ue(function (a) {
            i[a] = md(t.visualElement.targetBox[a], t.constraintsBox[a]);
          }),
            this.prepareBoundingBox(),
            this.resolveDragConstraints(),
            Ue(function (a) {
              if (!!wi(a, r, null)) {
                var u = lw(
                    t.visualElement.targetBox[a],
                    t.constraintsBox[a],
                    i[a],
                  ),
                  s = u.min,
                  l = u.max;
                t.visualElement.setAxisTarget(a, s, l);
              }
            });
        }
      },
      e.prototype.mount = function (t) {
        var n = this,
          r = t.getInstance(),
          o = Tn(r, "pointerdown", function (s) {
            var l = n.props,
              d = l.drag,
              m = l.dragListener,
              v = m === void 0 ? !0 : m;
            d && v && n.start(s);
          }),
          i = qt(window, "resize", function () {
            n.scalePoint();
          }),
          a = t.onLayoutUpdate(function () {
            n.isDragging && n.resolveDragConstraints();
          }),
          u = t.prevSnapshot;
        return (u == null ? void 0 : u.isDragging) &&
          this.start(gp, { cursorProgress: u.cursorProgress }),
          function () {
            o == null || o(),
              i == null || i(),
              a == null || a(),
              n.cancelDrag();
          };
      },
      e;
  }();
function wi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function dw(e, t) {
  t === void 0 && (t = 10);
  var n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
function vw(e, t) {
  var n = e.dragControls,
    r = C.useContext(Et).transformPagePoint,
    o = Pe(function () {
      return new pw({ visualElement: t });
    });
  o.updateProps(P(P({}, e), { transformPagePoint: r })),
    C.useEffect(function () {
      return n && n.subscribe(o);
    }, [o]),
    C.useEffect(function () {
      return o.mount(t);
    }, []);
}
var mw = mi(function (e) {
    var t = e.visualElement, n = J(e, ["visualElement"]);
    return vw(n, t);
  }),
  wp = {
    key: "drag",
    shouldRender: function (e) {
      return !!e.drag || !!e.dragControls;
    },
    getComponent: function () {
      return mw;
    },
  },
  hw = mi(function (e) {
    var t = e.custom,
      n = e.visualElement,
      r = X(Ju(), 2),
      o = r[0],
      i = r[1],
      a = C.useContext(Zt);
    C.useEffect(function () {
      var u,
        s,
        l = (u = n.animationState) === null || u === void 0
          ? void 0
          : u.setActive(H.Exit, !o, {
            custom: (s = a == null
                    ? void 0
                    : a.custom) !== null && s !== void 0
              ? s
              : t,
          });
      !o && (l == null || l.then(i));
    }, [o]);
  }),
  xp = {
    key: "exit",
    shouldRender: function (e) {
      return !!e.exit && !cp(e);
    },
    getComponent: function () {
      return hw;
    },
  };
function yw(e, t) {
  var n = C.useMemo(function () {
    return t.subscribe(e);
  }, [t]);
  li(function () {
    return n == null ? void 0 : n();
  });
}
var gw = mi(function (e) {
    var t = e.visualElement, n = e.animate;
    t.animationState || (t.animationState = D1(t));
    var r = Uu();
    C.useEffect(function () {
      t.animationState.setProps(e, t.inheritsVariants ? r : void 0);
    }), n instanceof _r && yw(t, n);
  }),
  Sp = {
    key: "animation",
    shouldRender: function () {
      return !0;
    },
    getComponent: function (e) {
      var t = e.animate,
        n = e.whileHover,
        r = e.whileFocus,
        o = e.whileTap,
        i = e.whileDrag,
        a = e.exit,
        u = e.variants;
      return t || n || r || o || i || a || u ? gw : void 0;
    },
  };
function ww(e, t, n, r) {
  e.min = re(t.min, n.min, r), e.max = re(t.max, n.max, r);
}
var Ep = 1e3,
  Pw = function (e) {
    Wt(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.frameTarget = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
        n.stopAxisAnimation = { x: void 0, y: void 0 },
        n.animate = function (r, o, i) {
          i === void 0 && (i = {});
          var a = i.originBox,
            u = i.targetBox,
            s = i.visibilityAction,
            l = i.shouldStackAnimate,
            d = J(i, [
              "originBox",
              "targetBox",
              "visibilityAction",
              "shouldStackAnimate",
            ]),
            m = n.props,
            v = m.visualElement,
            h = m.layout;
          if (l === !1) return n.safeToRemove();
          o = a || o, r = u || r;
          var g = xw(o, r),
            x = Ue(function (c) {
              if (h === "position") {
                var f = r[c].max - r[c].min;
                o[c].max = o[c].min + f;
              }
              if (!v.isTargetBoxLocked) {
                if (s !== void 0) s === en.Hide ? v.hide() : v.show();
                else {
                  return g
                    ? n.animateAxis(c, r[c], o[c], d)
                    : v.setAxisTarget(c, r[c].min, r[c].max);
                }
              }
            });
          return v.render(),
            Promise.all(x).then(function () {
              var c, f;
              (f = (c = n.props).onLayoutAnimationComplete) === null ||
              f === void 0 || f.call(c),
                v.isPresent ? v.presence = W.Present : n.safeToRemove();
            });
        },
        n;
    }
    return t.prototype.componentDidMount = function () {
      var n = this, r = this.props.visualElement;
      r.animateMotionValue = Tr,
        r.enableLayoutProjection(),
        this.unsubLayoutReady = r.onLayoutUpdate(this.animate),
        r.updateConfig(P(P({}, r.config), {
          safeToRemove: function () {
            return n.safeToRemove();
          },
        }));
    },
      t.prototype.componentWillUnmount = function () {
        var n = this;
        this.unsubLayoutReady(),
          Ue(function (r) {
            var o, i;
            return (i = (o = n.stopAxisAnimation)[r]) === null || i === void 0
              ? void 0
              : i.call(o);
          });
      },
      t.prototype.animateAxis = function (n, r, o, i) {
        var a,
          u,
          s = i === void 0 ? {} : i,
          l = s.transition,
          d = s.crossfadeOpacity;
        (u = (a = this.stopAxisAnimation)[n]) === null || u === void 0 ||
          u.call(a);
        var m = this.props.visualElement,
          v = this.frameTarget[n],
          h = m.getAxisProgress()[n];
        h.clearListeners(), h.set(0), h.set(0);
        var g;
        d && (g = this.createCrossfadeAnimation(d), m.show());
        var x = function () {
          var p = h.get() / Ep;
          ww(v, o, r, p), m.setAxisTarget(n, v.min, v.max), g == null || g(p);
        };
        x(), m.updateLayoutDelta();
        var c = h.onChange(x),
          f = Tr(
            n === "x"
              ? "layoutX"
              : "layoutY",
            h,
            Ep,
            l || this.props.transition || Sw,
          ).then(c);
        return this.stopAxisAnimation[n] = function () {
          h.stop(), c();
        },
          f;
      },
      t.prototype.createCrossfadeAnimation = function (n) {
        var r = this.props.visualElement, o = r.getValue("opacity", 0);
        return function (i) {
          o.set(Ew(re(0, 1, i))), n.set(Cw(re(1, 0, i)));
        };
      },
      t.prototype.safeToRemove = function () {
        var n, r;
        (r = (n = this.props).safeToRemove) === null || r === void 0 ||
          r.call(n);
      },
      t.prototype.render = function () {
        return null;
      },
      t;
  }(C.Component);
function Tw(e) {
  var t = X(Ju(), 2), n = t[1];
  return C.createElement(Pw, P({}, e, { safeToRemove: n }));
}
function xw(e, t) {
  return !Cp(e) && !Cp(t) && (!xi(e.x, t.x) || !xi(e.y, t.y));
}
var Pp = { min: 0, max: 0 };
function Cp(e) {
  return xi(e.x, Pp) && xi(e.y, Pp);
}
function xi(e, t) {
  return e.min === t.min && e.max === t.max;
}
var Sw = { duration: .45, ease: [.4, 0, .1, 1] };
function Tp(e, t, n) {
  return function (r) {
    return r < e ? 0 : r > t ? 1 : n(Xt(e, t, r));
  };
}
var Ew = Tp(0, .5, Yo),
  Cw = Tp(.5, .95, Ho),
  _p = {
    key: "animate-layout",
    shouldRender: function (e) {
      return !!e.layout || !!e.layoutId;
    },
    getComponent: function () {
      return Tw;
    },
  },
  _w = function (e) {
    Wt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.componentDidMount = function () {
      var n = this.props,
        r = n.syncLayout,
        o = n.framerSyncLayout,
        i = n.visualElement;
      tn(r) && r.register(i), tn(o) && o.register(i);
    },
      t.prototype.getSnapshotBeforeUpdate = function () {
        var n = this.props, r = n.syncLayout, o = n.visualElement;
        return tn(r) ? r.syncUpdate() : (o.snapshotBoundingBox(), r.add(o)),
          null;
      },
      t.prototype.componentDidUpdate = function () {
        var n = this.props, r = n.syncLayout, o = n.visualElement;
        tn(r) || r.flush(), o.rebaseTargetBox();
      },
      t.prototype.render = function () {
        return null;
      },
      t;
  }(C.default.Component);
function kw(e) {
  var t = C.useContext(kr), n = C.useContext(qu);
  return C.default.createElement(
    _w,
    P({}, e, { syncLayout: t, framerSyncLayout: n }),
  );
}
var kp = {
    key: "measure-layout",
    shouldRender: function (e) {
      return !!e.drag || !!e.layout || !!e.layoutId;
    },
    getComponent: function () {
      return kw;
    },
  },
  Op = [kp, Sp, wp, op, xp, _p],
  Mp = { useVisualElement: r1, useRender: H1 };
function Lp(e) {
  var t = P(P({}, Mp), { defaultFeatures: e });
  function n(i) {
    return gi(i, t);
  }
  var r = new Map();
  function o(i, a) {
    return a === "custom"
      ? i.custom
      : (r.has(a) || r.set(a, gi(a, t)), r.get(a));
  }
  return new Proxy({ custom: n }, { get: o });
}
var Si = Lp(Op);
function Ow(e) {
  var t = P(P({}, Mp), { defaultFeatures: Op });
  return gi(e, t);
}
var Mw = Lp([kp]);
function Lw() {
  var e = C.useRef(!1), t = X(C.useState(0), 2), n = t[0], r = t[1];
  return li(function () {
    return e.current = !0;
  }),
    C.useCallback(function () {
      !e.current && r(n + 1);
    }, [n]);
}
var Np = 0;
function Nw() {
  var e = Np;
  return Np++, e;
}
var es = function (e) {
  var t = e.children,
    n = e.initial,
    r = e.isPresent,
    o = e.onExitComplete,
    i = e.custom,
    a = e.presenceAffectsLayout,
    u = Pe(Aw),
    s = Pe(Nw),
    l = C.useMemo(function () {
      return {
        id: s,
        initial: n,
        isPresent: r,
        custom: i,
        onExitComplete: function (d) {
          u.set(d, !0);
          var m = !0;
          u.forEach(function (v) {
            v || (m = !1);
          }), m && (o == null || o());
        },
        register: function (d) {
          return u.set(d, !1), function () {
            return u.delete(d);
          };
        },
      };
    }, a ? void 0 : [r]);
  return C.useMemo(function () {
    u.forEach(function (d, m) {
      return u.set(m, !1);
    });
  }, [r]),
    C.createElement(Zt.Provider, { value: l }, t);
};
function Aw() {
  return new Map();
}
function kn(e) {
  return e.key || "";
}
function Rw(e, t) {
  var n = null;
  e.forEach(function (r) {
    var o = kn(r);
    t.set(o, r);
  });
}
function Vw(e) {
  var t = [];
  return C.Children.forEach(e, function (n) {
    C.isValidElement(n) && t.push(n);
  }),
    t;
}
var Dw = function (e) {
  var t = e.children,
    n = e.custom,
    r = e.initial,
    o = r === void 0 ? !0 : r,
    i = e.onExitComplete,
    a = e.exitBeforeEnter,
    u = e.presenceAffectsLayout,
    s = u === void 0 ? !0 : u,
    l = Lw(),
    d = C.useContext(kr);
  tn(d) && (l = d.forceUpdate);
  var m = C.useRef(!0),
    v = Vw(t),
    h = C.useRef(v),
    g = C.useRef(new Map()).current,
    x = C.useRef(new Set()).current;
  if (Rw(v, g), m.current) {
    return m.current = !1,
      C.createElement(
        C.Fragment,
        null,
        v.map(function (S) {
          return C.createElement(es, {
            key: kn(S),
            isPresent: !0,
            initial: o ? void 0 : !1,
            presenceAffectsLayout: s,
          }, S);
        }),
      );
  }
  for (
    var c = Ee(v), f = h.current.map(kn), p = v.map(kn), y = f.length, w = 0;
    w < y;
    w++
  ) {
    var E = f[w];
    p.indexOf(E) === -1 ? x.add(E) : x.delete(E);
  }
  return a && x.size && (c = []),
    x.forEach(function (S) {
      if (p.indexOf(S) === -1) {
        var T = g.get(S);
        if (!!T) {
          var O = f.indexOf(S),
            _ = function () {
              g.delete(S), x.delete(S);
              var A = h.current.findIndex(function (U) {
                return U.key === S;
              });
              h.current.splice(A, 1), x.size || (h.current = v, l(), i && i());
            };
          c.splice(
            O,
            0,
            C.createElement(es, {
              key: kn(T),
              isPresent: !1,
              onExitComplete: _,
              custom: n,
              presenceAffectsLayout: s,
            }, T),
          );
        }
      }
    }),
    c = c.map(function (S) {
      var T = S.key;
      return x.has(T)
        ? S
        : C.createElement(es, {
          key: kn(S),
          isPresent: !0,
          presenceAffectsLayout: s,
        }, S);
    }),
    h.current = c,
    C.createElement(
      C.Fragment,
      null,
      x.size ? c : c.map(function (S) {
        return C.cloneElement(S);
      }),
    );
};
function bw(e, t) {
  if (t && e !== t.lead) return { visibilityAction: en.Hide };
  if (
    t && e.presence !== W.Entering && e === t.lead && t.lead !== t.prevLead
  ) {
    return { visibilityAction: en.Show };
  }
  var n, r;
  return e.presence === W.Entering
    ? n = t == null ? void 0 : t.getFollowOrigin()
    : e.presence === W.Exiting &&
      (r = t == null ? void 0 : t.getFollowTarget()),
    { originBox: n, targetBox: r };
}
function Iw(e, t) {
  var n, r, o, i = {}, a = t && t.lead, u = a == null ? void 0 : a.presence;
  return t && e === a
    ? e.presence === W.Entering
      ? i.originBox = t.getFollowOrigin()
      : e.presence === W.Exiting && (i.targetBox = t.getFollowTarget())
    : t && e === t.follow &&
      (i.transition = t.getLeadTransition(),
        u === W.Entering
          ? i.targetBox = t.getLeadTarget()
          : u === W.Exiting && (i.originBox = t.getLeadOrigin())),
    !((n = t == null ? void 0 : t.follow) === null || n === void 0
        ? void 0
        : n.isPresenceRoot) && !(a == null ? void 0 : a.isPresenceRoot) ||
    (!t || e === a
      ? e.presence === W.Entering && (i.crossfadeOpacity = (r = t == null
              ? void 0
              : t.follow) === null || r === void 0
        ? void 0
        : r.getValue("opacity", 0))
      : t && e === t.follow
      ? !a || u === W.Entering ||
        u === W.Exiting && (i.crossfadeOpacity = (o = t == null
                  ? void 0
                  : t.lead) === null || o === void 0
            ? void 0
            : o.getValue("opacity", 1))
      : i.visibilityAction = en.Hide),
    i;
}
function Fw(e, t) {
  for (
    var n = X(t, 2),
      r = n[0],
      o = n[1],
      i = void 0,
      a = 0,
      u = void 0,
      s = e.length,
      l = !1,
      d = s - 1;
    d >= 0;
    d--
  ) {
    var m = e[d], v = d === s - 1;
    if (v && (l = m.isPresent), l) i = m;
    else {
      var h = e[d - 1];
      h && h.isPresent && (i = m);
    }
    if (i) {
      a = d;
      break;
    }
  }
  if (i || (i = e[0]), u = e[a - 1], i) {
    for (var d = a - 1; d >= 0; d--) {
      var m = e[d];
      if (m.isPresent) {
        u = m;
        break;
      }
    }
  }
  return i !== r && !l && u === o && e.find(function (g) {
    return g === r;
  }) && (i = r),
    [i, u];
}
var jw = function () {
  function e() {
    this.order = [], this.hasChildren = !1;
  }
  return e.prototype.add = function (t) {
    var n;
    if (this.order.push(t), this.snapshot) {
      t.prevSnapshot = this.snapshot,
        t.prevViewportBox = this.snapshot.boundingBox;
      var r = this.snapshot.latestMotionValues;
      for (var o in r) {
        t.hasValue(o)
          ? (n = t.getValue(o)) === null || n === void 0 || n.set(r[o])
          : t.addValue(o, pe(r[o]));
      }
    }
    this.hasChildren = !0;
  },
    e.prototype.remove = function (t) {
      var n = this.order.findIndex(function (r) {
        return t === r;
      });
      n !== -1 && this.order.splice(n, 1);
    },
    e.prototype.updateLeadAndFollow = function () {
      this.prevLead = this.lead, this.prevFollow = this.follow;
      var t = X(Fw(this.order, [this.lead, this.follow]), 2),
        n = t[0],
        r = t[1];
      this.lead = n, this.follow = r;
    },
    e.prototype.updateSnapshot = function () {
      if (!!this.lead) {
        var t = {
          boundingBox: this.lead.prevViewportBox,
          latestMotionValues: {},
        };
        this.lead.forEachValue(function (r, o) {
          var i = r.get();
          oi(i) || (t.latestMotionValues[o] = i);
        });
        var n = yp.get(this.lead);
        n && n.isDragging &&
        (t.isDragging = !0, t.cursorProgress = n.cursorProgress),
          this.snapshot = t;
      }
    },
    e.prototype.isLeadPresent = function () {
      var t;
      return this.lead &&
        ((t = this.lead) === null || t === void 0 ? void 0 : t.presence) !==
          W.Exiting;
    },
    e.prototype.getFollowOrigin = function () {
      var t;
      return this.follow ? this.follow.prevViewportBox
      : (t = this.snapshot) === null || t === void 0 ? void 0 : t.boundingBox;
    },
    e.prototype.getFollowTarget = function () {
      var t;
      return (t = this.follow) === null || t === void 0 ? void 0 : t.box;
    },
    e.prototype.getLeadOrigin = function () {
      var t;
      return (t = this.lead) === null || t === void 0 ? void 0
      : t.prevViewportBox;
    },
    e.prototype.getLeadTarget = function () {
      var t;
      return (t = this.lead) === null || t === void 0 ? void 0 : t.box;
    },
    e.prototype.getLeadTransition = function () {
      var t;
      return (t = this.lead) === null || t === void 0 ? void 0
      : t.config.transition;
    },
    e;
}();
function zw(e) {
  for (var t = !1, n = {}, r = 0; r < Nu.length; r++) {
    var o = Nu[r], i = "rotate" + o;
    !e.hasValue(i) || e.latest[i] === 0 ||
      (t = !0, n[i] = e.latest[i], e.latest[i] = 0);
  }
  if (!!t) {
    e.render();
    for (var i in n) e.latest[i] = n[i];
    e.scheduleRender();
  }
}
var Bw = function (e) {
  Wt(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.children = new Set(),
      n.stacks = new Map(),
      n.hasMounted = !1,
      n.updateScheduled = !1,
      n.renderScheduled = !1,
      n.syncContext = P(P({}, hi()), {
        syncUpdate: function (r) {
          return n.scheduleUpdate(r);
        },
        forceUpdate: function () {
          n.syncContext = P({}, n.syncContext), n.scheduleUpdate(!0);
        },
        register: function (r) {
          return n.addChild(r);
        },
        remove: function (r) {
          return n.removeChild(r);
        },
      }),
      n;
  }
  return t.prototype.componentDidMount = function () {
    this.hasMounted = !0, this.updateStacks();
  },
    t.prototype.componentDidUpdate = function () {
      this.startLayoutAnimation();
    },
    t.prototype.shouldComponentUpdate = function () {
      return this.renderScheduled = !0, !0;
    },
    t.prototype.startLayoutAnimation = function () {
      var n = this;
      this.renderScheduled = this.updateScheduled = !1;
      var r = this.props.type;
      this.children.forEach(function (a) {
        a.isPresent
          ? a.presence !== W.Entering &&
            (a.presence = a.presence === W.Exiting ? W.Entering : W.Present)
          : a.presence = W.Exiting;
      }), this.updateStacks();
      var o = r === "crossfade" ? Iw : bw,
        i = {
          measureLayout: function (a) {
            return a.measureLayout();
          },
          layoutReady: function (a) {
            var u = a.layoutId;
            a.layoutReady(o(a, n.getStack(u)));
          },
          parent: this.context.visualElement,
        };
      this.children.forEach(function (a) {
        return n.syncContext.add(a);
      }),
        this.syncContext.flush(i),
        this.stacks.forEach(function (a) {
          return a.snapshot = void 0;
        });
    },
    t.prototype.updateStacks = function () {
      this.stacks.forEach(function (n) {
        return n.updateLeadAndFollow();
      });
    },
    t.prototype.scheduleUpdate = function (n) {
      n === void 0 && (n = !1),
        !!(n || !this.updateScheduled) &&
        (this.updateScheduled = !0,
          this.children.forEach(function (r) {
            return zw(r);
          }),
          this.children.forEach(function (r) {
            return r.snapshotBoundingBox();
          }),
          this.stacks.forEach(function (r) {
            return r.updateSnapshot();
          }),
          (n || !this.renderScheduled) &&
          (this.renderScheduled = !0, this.forceUpdate()));
    },
    t.prototype.addChild = function (n) {
      this.children.add(n),
        this.addToStack(n),
        n.presence = this.hasMounted ? W.Entering : W.Present;
    },
    t.prototype.removeChild = function (n) {
      this.scheduleUpdate(), this.children.delete(n), this.removeFromStack(n);
    },
    t.prototype.addToStack = function (n) {
      var r = this.getStack(n.layoutId);
      r == null || r.add(n);
    },
    t.prototype.removeFromStack = function (n) {
      var r = this.getStack(n.layoutId);
      r == null || r.remove(n);
    },
    t.prototype.getStack = function (n) {
      if (
        n !== void 0
      ) {
        return !this.stacks.has(n) && this.stacks.set(n, new jw()),
          this.stacks.get(n);
      }
    },
    t.prototype.render = function () {
      return C.createElement(
        kr.Provider,
        { value: this.syncContext },
        this.props.children,
      );
    },
    t.contextType = si,
    t;
}(C.Component);
function Or(e) {
  return Pe(function () {
    return pe(e);
  });
}
function Ap(e, t) {
  C.useEffect(function () {
    return ft(e) ? e.onChange(t) : void 0;
  });
}
function Uw(e, t) {
  C.useEffect(function () {
    var n = e.map(function (r) {
      return r.onChange(t);
    });
    return function () {
      return n.forEach(function (r) {
        return r();
      });
    };
  });
}
function Rp(e, t) {
  var n = Or(t()),
    r = function () {
      return n.set(t());
    };
  return r(),
    Uw(e, function () {
      return Ce.update(r, !1, !0);
    }),
    n;
}
function $w(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = e.length;
  function o() {
    for (var i = "", a = 0; a < r; a++) {
      i += e[a];
      var u = t[a];
      u && (i += t[a].get());
    }
    return i;
  }
  return Rp(t, o);
}
function Hw(e) {
  var t = e instanceof Sr ? e.get() : e;
  return Ig(t) ? t.toValue() : t;
}
var Ww = function (e) {
    return typeof e == "object" && e.mix;
  },
  Yw = function (e) {
    return Ww(e) ? e.mix : void 0;
  };
function Vp() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = !Array.isArray(e[0]),
    r = n ? 0 : -1,
    o = e[0 + r],
    i = e[1 + r],
    a = e[2 + r],
    u = e[3 + r],
    s = Uo(i, a, P({ mixer: Yw(a[0]) }, u));
  return n ? s(o) : s;
}
function ts(e, t, n, r) {
  var o = typeof t == "function" ? t : Vp(t, n, r);
  return Array.isArray(e) ? Dp(e, o) : Dp([e], function (i) {
    var a = X(i, 1), u = a[0];
    return o(u);
  });
}
function Dp(e, t) {
  var n = Pe(function () {
    return [];
  });
  return Rp(e, function () {
    n.length = 0;
    for (var r = e.length, o = 0; o < r; o++) n[o] = e[o].get();
    return t(n);
  });
}
function Gw(e, t) {
  t === void 0 && (t = {});
  var n = C.useContext(Et).isStatic,
    r = C.useRef(null),
    o = Or(ft(e) ? e.get() : e);
  return C.useMemo(function () {
    return o.attach(function (i, a) {
      return n
        ? a(i)
        : (r.current && r.current.stop(),
          r.current = Xo(
            P(P({ from: o.get(), to: i, velocity: o.getVelocity() }, t), {
              onUpdate: a,
            }),
          ),
          o.get());
    });
  }, Object.values(t)),
    Ap(e, function (i) {
      return o.set(parseFloat(i));
    }),
    o;
}
function bp() {
  return {
    scrollX: pe(0),
    scrollY: pe(0),
    scrollXProgress: pe(0),
    scrollYProgress: pe(0),
  };
}
function Ip(e, t, n) {
  n.set(!e || !t ? 0 : e / t);
}
function Fp(e, t) {
  var n = function () {
    var r = t(),
      o = r.xOffset,
      i = r.yOffset,
      a = r.xMaxOffset,
      u = r.yMaxOffset;
    e.scrollX.set(o),
      e.scrollY.set(i),
      Ip(o, a, e.scrollXProgress),
      Ip(i, u, e.scrollYProgress);
  };
  return n(), n;
}
var Kw = function (e) {
  return function () {
    return {
      xOffset: e.scrollLeft,
      yOffset: e.scrollTop,
      xMaxOffset: e.scrollWidth - e.offsetWidth,
      yMaxOffset: e.scrollHeight - e.offsetHeight,
    };
  };
};
function Xw(e) {
  var t = Pe(bp);
  return yi(function () {
    var n = e.current;
    if (
      Q(!!n, "ref provided to useScroll must be passed into a HTML element."),
        !!n
    ) {
      var r = Fp(t, Kw(n)),
        o = qt(n, "scroll", r, { passive: !0 }),
        i = qt(n, "resize", r);
      return function () {
        o && o(), i && i();
      };
    }
  }, []),
    t;
}
var Ei;
function Qw() {
  return {
    xOffset: window.pageXOffset,
    yOffset: window.pageYOffset,
    xMaxOffset: document.body.clientWidth - window.innerWidth,
    yMaxOffset: document.body.clientHeight - window.innerHeight,
  };
}
var jp = !1;
function Zw() {
  if (jp = !0, typeof window != "undefined") {
    var e = Fp(Ei, Qw);
    qt(window, "scroll", e, { passive: !0 }), qt(window, "resize", e);
  }
}
function qw() {
  return Ei || (Ei = bp()),
    yi(function () {
      !jp && Zw();
    }, []),
    Ei;
}
var On;
function Jw() {
  if (On = pe(null), typeof window != "undefined") {
    if (window.matchMedia) {
      var e = window.matchMedia("(prefers-reduced-motion)"),
        t = function () {
          return On.set(e.matches);
        };
      e.addListener(t), t();
    } else On.set(!1);
  }
}
function ex() {
  !On && Jw();
  var e = X(C.useState(On.get()), 2), t = e[0], n = e[1];
  return Ap(On, n), t;
}
function tx() {
  var e = Pe(function () {
    return new _r();
  });
  return C.useEffect(function () {
    return e.mount(), function () {
      return e.unmount();
    };
  }, []),
    e;
}
function nx(e, t, n) {
  n === void 0 && (n = {});
  var r = ft(e) ? e : pe(e);
  return Tr("", r, t, n), {
    stop: function () {
      return r.stop();
    },
  };
}
function rx() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = C.useRef(0), r = X(C.useState(e[n.current]), 2), o = r[0], i = r[1];
  return [o, function (a) {
    n.current = typeof a != "number" ? wc(0, e.length, n.current + 1) : a,
      i(e[n.current]);
  }];
}
var zp = function () {
    function e() {
      this.componentControls = new Set();
    }
    return e.prototype.subscribe = function (t) {
      var n = this;
      return this.componentControls.add(t), function () {
        return n.componentControls.delete(t);
      };
    },
      e.prototype.start = function (t, n) {
        this.componentControls.forEach(function (r) {
          r.start(t.nativeEvent || t, n);
        });
      },
      e.prototype.updateConstraints = function () {
        this.componentControls.forEach(function (t) {
          t.prepareBoundingBox(), t.resolveDragConstraints();
        });
      },
      e;
  }(),
  ox = function () {
    return new zp();
  };
function ix() {
  return Pe(ox);
}
function ax(e) {
  var t = !e || typeof e == "function" ? C.useRef(null) : e;
  return e && typeof e == "function" && C.useEffect(function () {
    return e(t.current), function () {
      return e(null);
    };
  }, []),
    t;
}
var ux = function (e) {
  Wt(t, e);
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n.initialState = {}, n;
  }
  return t.prototype.updateLayoutDelta = function () {},
    t.prototype.build = function () {},
    t.prototype.clean = function () {},
    t.prototype.makeTargetAnimatable = function (n) {
      var r = n.transition,
        o = n.transitionEnd,
        i = J(n, ["transition", "transitionEnd"]),
        a = Od(i, r || {}, this);
      return kd(this, i, a), P({ transition: r, transitionEnd: o }, i);
    },
    t.prototype.getBoundingBox = function () {
      return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
    },
    t.prototype.readNativeValue = function (n) {
      return this.initialState[n] || 0;
    },
    t.prototype.render = function () {
      this.build();
    },
    t;
}(Yc);
function sx(e) {
  var t = X(C.useState(e), 2),
    n = t[0],
    r = t[1],
    o = Pe(function () {
      return new ux();
    });
  o.updateConfig({
    onUpdate: function (a) {
      return r(P({}, a));
    },
  }),
    o.initialState = e,
    C.useEffect(function () {
      return o.mount({}), function () {
        return o.unmount();
      };
    }, []);
  var i = Pe(function () {
    return function (a) {
      return vi(o, a);
    };
  });
  return [n, i];
}
var lx = 1e5,
  Bp = function (e) {
    return e > .001 ? 1 / e : lx;
  },
  Up = !1;
function fx(e) {
  var t = Or(1), n = Or(1), r = Rd();
  Q(
    !!(e || r),
    "If no scale values are provided, useInvertedScale must be used within a child of another motion component.",
  ),
    Sn(
      Up,
      "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.",
    ),
    Up = !0,
    e
      ? (t = e.scaleX || t, n = e.scaleY || n)
      : r && (t = r.getValue("scaleX", 1), n = r.getValue("scaleY", 1));
  var o = ts(t, Bp), i = ts(n, Bp);
  return { scaleX: o, scaleY: i };
}
var sr = ut(Qt()), Rf = ut(zh());
var Ke = ut(Qt());
function uE(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++) {
    if (document.styleSheets[t].ownerNode === e) {
      return document.styleSheets[t];
    }
  }
}
function sE(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t;
}
var Va = function () {
  function e(n) {
    var r = this;
    this._insertTag = function (o) {
      var i;
      r.tags.length === 0
        ? i = r.prepend ? r.container.firstChild : r.before
        : i = r.tags[r.tags.length - 1].nextSibling,
        r.container.insertBefore(o, i),
        r.tags.push(o);
    },
      this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy,
      this.tags = [],
      this.ctr = 0,
      this.nonce = n.nonce,
      this.key = n.key,
      this.container = n.container,
      this.prepend = n.prepend,
      this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function (r) {
    r.forEach(this._insertTag);
  },
    t.insert = function (r) {
      this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(sE(this));
      var o = this.tags[this.tags.length - 1];
      if (!1) var i;
      if (this.isSpeedy) {
        var a = uE(o);
        try {
          a.insertRule(r, a.cssRules.length);
        } catch (u) {}
      } else o.appendChild(document.createTextNode(r));
      this.ctr++;
    },
    t.flush = function () {
      this.tags.forEach(function (r) {
        return r.parentNode.removeChild(r);
      }),
        this.tags = [],
        this.ctr = 0;
    },
    e;
}();
var de = "-ms-",
  Da = "-moz-",
  D = "-webkit-",
  Bh = "comm",
  pf = "rule",
  vf = "decl";
var lE = "@import";
var fE = "@keyframes";
var cE = Math.abs, Oo = String.fromCharCode;
function dE(e, t) {
  return (((t << 2 ^ Fe(e, 0)) << 2 ^ Fe(e, 1)) << 2 ^ Fe(e, 2)) << 2 ^
    Fe(e, 3);
}
function Uh(e) {
  return e.trim();
}
function pE(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function b(e, t, n) {
  return e.replace(t, n);
}
function $h(e, t) {
  return e.indexOf(t);
}
function Fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Mo(e, t, n) {
  return e.slice(t, n);
}
function yt(e) {
  return e.length;
}
function mf(e) {
  return e.length;
}
function ba(e, t) {
  return t.push(e), e;
}
function vE(e, t) {
  return e.map(t).join("");
}
var hf = 1, Ia = 1, Hh = 0, je = 0, Ye = 0, Lo = "";
function Fa(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: hf,
    column: Ia,
    length: a,
    return: "",
  };
}
function No(e, t, n) {
  return Fa(e, t.root, t.parent, n, t.props, t.children, 0);
}
function mE() {
  return Ye;
}
function Ge() {
  return Ye = je < Hh ? Fe(Lo, je++) : 0, Ia++, Ye === 10 && (Ia = 1, hf++), Ye;
}
function gt() {
  return Fe(Lo, je);
}
function Wh() {
  return je;
}
function yf(e, t) {
  return Mo(Lo, e, t);
}
function Ao(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function gf(e) {
  return hf = Ia = 1, Hh = yt(Lo = e), je = 0, [];
}
function wf(e) {
  return Lo = "", e;
}
function ja(e) {
  return Uh(yf(je - 1, xf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function hE(e) {
  for (; (Ye = gt()) && Ye < 33;) Ge();
  return Ao(e) > 2 || Ao(Ye) > 3 ? "" : " ";
}
function xf(e) {
  for (; Ge();) {
    switch (Ye) {
      case e:
        return je;
      case 34:
      case 39:
        return xf(e === 34 || e === 39 ? e : Ye);
      case 40:
        e === 41 && xf(e);
        break;
      case 92:
        Ge();
        break;
    }
  }
  return je;
}
function yE(e, t) {
  for (; Ge() && e + Ye !== 47 + 10;) {
    if (e + Ye === 42 + 42 && gt() === 47) {
      break;
    }
  }
  return "/*" + yf(t, je - 1) + "*" + Oo(e === 47 ? e : Ge());
}
function Sf(e) {
  for (; !Ao(gt());) Ge();
  return yf(e, je);
}
function Yh(e) {
  return wf(za("", null, null, null, [""], e = gf(e), 0, [0], e));
}
function za(e, t, n, r, o, i, a, u, s) {
  for (
    var l = 0,
      d = 0,
      m = a,
      v = 0,
      h = 0,
      g = 0,
      x = 1,
      c = 1,
      f = 1,
      p = 0,
      y = "",
      w = o,
      E = i,
      S = r,
      T = y;
    c;
  ) {
    switch (g = p, p = Ge()) {
      case 34:
      case 39:
      case 91:
      case 40:
        T += ja(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += hE(g);
        break;
      case 47:
        switch (gt()) {
          case 42:
          case 47:
            ba(gE(yE(Ge(), Wh()), t, n), s);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * x:
        u[l++] = yt(T) * f;
      case 125 * x:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            c = 0;
          case 59 + d:
            h > 0 &&
              ba(
                h > 32
                  ? Kh(T + ";", r, n, m - 1)
                  : Kh(b(T, " ", "") + ";", r, n, m - 2),
                s,
              );
            break;
          case 59:
            T += ";";
          default:
            if (
              ba(S = Gh(T, t, n, l, d, o, u, y, w = [], E = [], m), i),
                p === 123
            ) {
              if (d === 0) za(T, t, S, S, w, i, m, u, E);
              else {
                switch (v) {
                  case 100:
                  case 109:
                  case 115:
                    za(
                      e,
                      S,
                      S,
                      r && ba(Gh(e, S, S, 0, 0, o, u, y, o, w = [], m), E),
                      o,
                      E,
                      m,
                      u,
                      r ? w : E,
                    );
                    break;
                  default:
                    za(T, S, S, S, [""], E, m, u, E);
                }
              }
            }
        }
        l = d = h = 0, x = f = 1, y = T = "", m = a;
        break;
      case 58:
        m = 1 + yt(T), h = g;
      default:
        switch (T += Oo(p), p * x) {
          case 38:
            f = d > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            u[l++] = (yt(T) - 1) * f, f = 1;
            break;
          case 64:
            gt() === 45 && (T += ja(Ge())),
              v = gt(),
              d = yt(y = T += Sf(Wh())),
              p++;
            break;
          case 45:
            g === 45 && yt(T) == 2 && (x = 0);
        }
    }
  }
  return i;
}
function Gh(e, t, n, r, o, i, a, u, s, l, d) {
  for (
    var m = o - 1, v = o === 0 ? i : [""], h = mf(v), g = 0, x = 0, c = 0;
    g < r;
    ++g
  ) {
    for (
      var f = 0, p = Mo(e, m + 1, m = cE(x = a[g])), y = e; f < h; ++f
    ) {
      (y = Uh(x > 0 ? v[f] + " " + p : b(p, /&\f/g, v[f]))) && (s[c++] = y);
    }
  }
  return Fa(e, t, n, o === 0 ? pf : u, s, l, d);
}
function gE(e, t, n) {
  return Fa(e, t, n, Bh, Oo(mE()), Mo(e, 2, -2), 0);
}
function Kh(e, t, n, r) {
  return Fa(e, t, n, vf, Mo(e, 0, r), Mo(e, r + 1, -1), r);
}
function Xh(e, t) {
  switch (dE(e, t)) {
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return D + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return D + e + Da + e + de + e + e;
    case 6828:
    case 4268:
      return D + e + de + e + e;
    case 6165:
      return D + e + de + "flex-" + e + e;
    case 5187:
      return D + e + b(e, /(\w+).+(:[^]+)/, D + "box-$1$2" + de + "flex-$1$2") +
        e;
    case 5443:
      return D + e + de + "flex-item-" + b(e, /flex-|-self/, "") + e;
    case 4675:
      return D + e + de + "flex-line-pack" +
        b(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return D + e + de + b(e, "shrink", "negative") + e;
    case 5292:
      return D + e + de + b(e, "basis", "preferred-size") + e;
    case 6060:
      return D + "box-" + b(e, "-grow", "") + D + e + de +
        b(e, "grow", "positive") + e;
    case 4554:
      return D + b(e, /([^-])(transform)/g, "$1" + D + "$2") + e;
    case 6187:
      return b(
        b(b(e, /(zoom-|grab)/, D + "$1"), /(image-set)/, D + "$1"),
        e,
        "",
      ) + e;
    case 5495:
    case 3959:
      return b(e, /(image-set\([^]*)/, D + "$1$`$1");
    case 4968:
      return b(
        b(e, /(.+:)(flex-)?(.*)/, D + "box-pack:$3" + de + "flex-pack:$3"),
        /s.+-b[^;]+/,
        "justify",
      ) + D + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return b(e, /(.+)-inline(.+)/, D + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (yt(e) - 1 - t > 6) {
        switch (Fe(e, t + 1)) {
          case 102:
            t = Fe(e, t + 3);
          case 109:
            return b(
              e,
              /(.+:)(.+)-([^]+)/,
              "$1" + D + "$2-$3$1" + Da + (t == 108 ? "$3" : "$2-$3"),
            ) + e;
          case 115:
            return ~$h(e, "stretch")
              ? Xh(b(e, "stretch", "fill-available"), t) + e
              : e;
        }
      }
      break;
    case 4949:
      if (Fe(e, t + 1) !== 115) break;
    case 6444:
      switch (Fe(e, yt(e) - 3 - (~$h(e, "!important") && 10))) {
        case 107:
        case 111:
          return b(e, e, D + e) + e;
        case 101:
          return b(
            e,
            /(.+:)([^;!]+)(;|!.+)?/,
            "$1" + D + (Fe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + D +
              "$2$3$1" + de + "$2box$3",
          ) + e;
      }
      break;
    case 5936:
      switch (Fe(e, t + 11)) {
        case 114:
          return D + e + de + b(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return D + e + de + b(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return D + e + de + b(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return D + e + de + e + e;
  }
  return e;
}
function ar(e, t) {
  for (var n = "", r = mf(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function Qh(e, t, n, r) {
  switch (e.type) {
    case lE:
    case vf:
      return e.return = e.return || e.value;
    case Bh:
      return "";
    case pf:
      e.value = e.props.join(",");
  }
  return yt(n = ar(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Zh(e) {
  var t = mf(e);
  return function (n, r, o, i) {
    for (var a = "", u = 0; u < t; u++) a += e[u](n, r, o, i) || "";
    return a;
  };
}
function qh(e) {
  return function (t) {
    t.root || (t = t.return) && e(t);
  };
}
function Jh(e, t, n, r) {
  if (!e.return) {
    switch (e.type) {
      case vf:
        e.return = Xh(e.value, e.length);
        break;
      case fE:
        return ar([No(b(e.value, "@", "@" + D), e, "")], r);
      case pf:
        if (e.length) {
          return vE(e.props, function (o) {
            switch (pE(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ar([No(b(o, /:(read-\w+)/, ":" + Da + "$1"), e, "")], r);
              case "::placeholder":
                return ar([
                  No(b(o, /:(plac\w+)/, ":" + D + "input-$1"), e, ""),
                  No(b(o, /:(plac\w+)/, ":" + Da + "$1"), e, ""),
                  No(b(o, /:(plac\w+)/, de + "input-$1"), e, ""),
                ], r);
            }
            return "";
          });
        }
    }
  }
}
var wE = function (t) {
    var n = new WeakMap();
    return function (r) {
      if (n.has(r)) return n.get(r);
      var o = t(r);
      return n.set(r, o), o;
    };
  },
  Ef = wE;
function xE(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ey = xE;
var SE = function (t, n) {
    var r = -1, o = 44;
    do switch (Ao(o)) {
      case 0:
        o === 38 && gt() === 12 && (n[r] = 1), t[r] += Sf(je - 1);
        break;
      case 2:
        t[r] += ja(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = gt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Oo(o);
    } while (o = Ge());
    return t;
  },
  EE = function (t, n) {
    return wf(SE(gf(t), n));
  },
  ty = new WeakMap(),
  CE = function (t) {
    if (!(t.type !== "rule" || !t.parent || !t.length)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";
      ) {
        if (r = r.parent, !r) return;
      }
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ty.get(r)) && !o
      ) {
        ty.set(t, !0);
        for (
          var i = [], a = EE(n, i), u = r.props, s = 0, l = 0; s < a.length; s++
        ) {
          for (var d = 0; d < u.length; d++, l++) {
            t.props[l] = i[s] ? a[s].replace(/&\f/g, u[d]) : u[d] + " " + a[s];
          }
        }
      }
    }
  },
  PE = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 &&
        (t.return = "", t.value = "");
    }
  };
var TE = [Jh],
  _E = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (x) {
        document.head.appendChild(x), x.setAttribute("data-s", "");
      });
    }
    var o = t.stylisPlugins || TE, i = {}, a, u = [];
    a = t.container || document.head,
      Array.prototype.forEach.call(
        document.querySelectorAll("style[data-emotion]"),
        function (x) {
          var c = x.getAttribute("data-emotion").split(" ");
          if (c[0] === n) {
            for (var f = 1; f < c.length; f++) i[c[f]] = !0;
            u.push(x);
          }
        },
      );
    var s, l = [CE, PE];
    {
      var d,
        m = [
          Qh,
          qh(function (x) {
            d.insert(x);
          }),
        ],
        v = Zh(l.concat(o, m)),
        h = function (c) {
          return ar(Yh(c), v);
        };
      s = function (c, f, p, y) {
        d = p,
          h(c ? c + "{" + f.styles + "}" : f.styles),
          y && (g.inserted[f.name] = !0);
      };
    }
    var g = {
      key: n,
      sheet: new Va({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return g.sheet.hydrate(u), g;
  },
  ny = _E;
var it = ut(Qt());
function Ro() {
  return Ro = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
    }
    return e;
  },
    Ro.apply(this, arguments);
}
var jE = ut(Of());
var zE = !0;
function Za(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function (o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }),
    r;
}
var Vo = function (t, n, r) {
  var o = t.key + "-" + n.name;
  if (
    (r === !1 || zE === !1) && t.registered[o] === void 0 &&
    (t.registered[o] = n.styles), t.inserted[n.name] === void 0
  ) {
    var i = n;
    do {
      var a = t.insert(n === i ? "." + o : "", i, t.sheet, !0);
      i = i.next;
    } while (i !== void 0);
  }
};
function BE(e) {
  for (
    var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4
  ) {
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 |
      (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24,
      n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16),
      n ^= n >>> 24,
      t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^
        (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255,
        t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13,
    t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16),
    ((t ^ t >>> 15) >>> 0).toString(36);
}
var py = BE;
var UE = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  vy = UE;
var $E = /[A-Z]|^ms/g,
  HE = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  my = function (t) {
    return t.charCodeAt(1) === 45;
  },
  hy = function (t) {
    return t != null && typeof t != "boolean";
  },
  Mf = ey(function (e) {
    return my(e) ? e : e.replace($E, "-$&").toLowerCase();
  }),
  yy = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string") {
          return n.replace(HE, function (r, o, i) {
            return ot = { name: o, styles: i, next: ot }, o;
          });
        }
    }
    return vy[t] !== 1 && !my(t) && typeof n == "number" && n !== 0 ? n + "px"
    : n;
  };
function Do(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1) {
        return ot = { name: n.name, styles: n.styles, next: ot }, n.name;
      }
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0) {
          for (; r !== void 0;) {
            ot = { name: r.name, styles: r.styles, next: ot }, r = r.next;
          }
        }
        var o = n.styles + ";";
        return o;
      }
      return WE(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = ot, a = n(e);
        return ot = i, Do(e, t, a);
      }
      break;
    }
    case "string":
      if (!1) var u, s;
      break;
  }
  if (t == null) return n;
  var l = t[n];
  return l !== void 0 ? l : n;
}
function WE(e, t, n) {
  var r = "";
  if (Array.isArray(n)) {
    for (var o = 0; o < n.length; o++) r += Do(e, t, n[o]) + ";";
  } else {
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object") {
        t != null && t[a] !== void 0
          ? r += i + "{" + t[a] + "}"
          : hy(a) && (r += Mf(i) + ":" + yy(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && !1) {
          throw new Error(
            "Component selectors can only be used in conjunction with @emotion/babel-plugin.",
          );
        }
        if (
          Array.isArray(a) && typeof a[0] == "string" &&
          (t == null || t[a[0]] === void 0)
        ) {
          for (var u = 0; u < a.length; u++) {
            hy(a[u]) && (r += Mf(i) + ":" + yy(i, a[u]) + ";");
          }
        } else {
          var s = Do(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              r += Mf(i) + ":" + s + ";";
              break;
            }
            default:
              r += i + "{" + s + "}";
          }
        }
      }
    }
  }
  return r;
}
var gy = /label:\s*([^\s;\n{]+)\s*;/g;
var ot,
  ur = function (t, n, r) {
    if (
      t.length === 1 && typeof t[0] == "object" && t[0] !== null &&
      t[0].styles !== void 0
    ) {
      return t[0];
    }
    var o = !0, i = "";
    ot = void 0;
    var a = t[0];
    a == null || a.raw === void 0 ? (o = !1, i += Do(r, n, a)) : i += a[0];
    for (var u = 1; u < t.length; u++) i += Do(r, n, t[u]), o && (i += a[u]);
    var s;
    gy.lastIndex = 0;
    for (var l = "", d; (d = gy.exec(i)) !== null;) l += "-" + d[1];
    var m = py(i) + l;
    return { name: m, styles: i, next: ot };
  };
var qa = Object.prototype.hasOwnProperty,
  wy = it.createContext(
    typeof HTMLElement != "undefined" ? ny({ key: "css" }) : null,
  ),
  YE = wy.Provider,
  bo = function (t) {
    return it.forwardRef(function (n, r) {
      var o = it.useContext(wy);
      return t(n, o, r);
    });
  },
  Io = it.createContext({});
var GE = function (t, n) {
    if (typeof n == "function") {
      var r = n(t);
      return r;
    }
    return Ro({}, t, {}, n);
  },
  iP = Ef(function (e) {
    return Ef(function (t) {
      return GE(e, t);
    });
  });
var Lf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var xy = function (t, n) {
    var r = {};
    for (var o in n) qa.call(n, o) && (r[o] = n[o]);
    if (r[Lf] = t, !1) {
      var i;
      if (i.stack) var a;
    }
    return r;
  },
  Sy = bo(function (e, t, n) {
    var r = e.css;
    typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
    var o = e[Lf], i = [r], a = "";
    typeof e.className == "string"
      ? a = Za(t.registered, i, e.className)
      : e.className != null && (a = e.className + " ");
    var u = ur(
      i,
      void 0,
      typeof r == "function" || Array.isArray(r) ? it.useContext(Io) : void 0,
    );
    if (!1) var s;
    var l = Vo(t, u, typeof o == "string");
    a += t.key + "-" + u.name;
    var d = {};
    for (var m in e) {
      qa.call(e, m) && m !== "css" && m !== Lf && !0 && (d[m] = e[m]);
    }
    d.ref = n, d.className = a;
    var v = it.createElement(o, d);
    return v;
  });
var vP = ut(Ey());
var hP = ut(Of());
var he = function (t, n) {
    var r = arguments;
    if (n == null || !qa.call(n, "css")) {
      return Ke.createElement.apply(void 0, r);
    }
    var o = r.length, i = new Array(o);
    i[0] = Sy, i[1] = xy(t, n);
    for (var a = 2; a < o; a++) i[a] = r[a];
    return Ke.createElement.apply(null, i);
  },
  SP = !1,
  Cy = bo(function (e, t) {
    var n = e.styles,
      r = ur(
        [n],
        void 0,
        typeof n == "function" || Array.isArray(n) ? Ke.useContext(Io) : void 0,
      ),
      o = Ke.useRef();
    return Ke.useLayoutEffect(function () {
      var i = t.key + "-global",
        a = new Va({
          key: i,
          nonce: t.sheet.nonce,
          container: t.sheet.container,
          speedy: t.sheet.isSpeedy,
        }),
        u = document.querySelector(
          'style[data-emotion="' + i + " " + r.name + '"]',
        );
      return t.sheet.tags.length && (a.before = t.sheet.tags[0]),
        u !== null && a.hydrate([u]),
        o.current = a,
        function () {
          a.flush();
        };
    }, [t]),
      Ke.useLayoutEffect(function () {
        r.next !== void 0 && Vo(t, r.next, !0);
        var i = o.current;
        if (i.tags.length) {
          var a = i.tags[i.tags.length - 1].nextElementSibling;
          i.before = a, i.flush();
        }
        t.insert("", r, i, !1);
      }, [t, r.name]),
      null;
  });
function wt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  return ur(t);
}
var KE = function e(t) {
  for (var n = t.length, r = 0, o = ""; r < n; r++) {
    var i = t[r];
    if (i != null) {
      var a = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i)) a = e(i);
          else {
            a = "";
            for (var u in i) i[u] && u && (a && (a += " "), a += u);
          }
          break;
        }
        default:
          a = i;
      }
      a && (o && (o += " "), o += a);
    }
  }
  return o;
};
function XE(e, t, n) {
  var r = [], o = Za(e, r, n);
  return r.length < 2 ? n : o + t(r);
}
var EP = bo(function (e, t) {
  var n = !1,
    r = function () {
      if (n && !1) throw new Error("css can only be used during render");
      for (
        var s = arguments.length, l = new Array(s), d = 0; d < s; d++
      ) {
        l[d] = arguments[d];
      }
      var m = ur(l, t.registered);
      return Vo(t, m, !1), t.key + "-" + m.name;
    },
    o = function () {
      if (n && !1) throw new Error("cx can only be used during render");
      for (var s = arguments.length, l = new Array(s), d = 0; d < s; d++) {
        l[d] = arguments[d];
      }
      return XE(t.registered, r, KE(l));
    },
    i = { css: r, cx: o, theme: Ke.useContext(Io) },
    a = e.children(i);
  return n = !0, a;
});
var Ja = ut(Qt()),
  Py = [640, 750, 1024, 1920],
  Ty = ({ onShare: e, position: t, children: n }) => {
    let [r, o] = Ja.default.useState(100),
      [i, a] = Ja.default.useState(Py[0]),
      u = Ja.default.useRef(null);
    return he(
      Si.div,
      {
        ref: u,
        css: `
            right: 20px;
            top: 20px;
            white-space: normal;
            position: ${t || "fixed"};
            overflow: hidden;
            overflow-y: overlay;
          `,
        whileDrag: { scale: r / 100 * 1.1 },
        animate: { scale: r / 100, width: i },
        dragElastic: .5,
        dragMomentum: !1,
        drag: !0,
      },
      he(
        "div",
        {
          css: wt`
                display: block;
                font-family: Roboto;
                font-weight: 600;
                text-align: right;
            `,
        },
        he(
          "span",
          {
            css: wt`
            color: white;
            display: inline-block;
            margin-right: 20px;
            span{
              margin: 4px
            }
        `,
          },
          Py.map((s) =>
            he(
              "span",
              {
                key: s,
                css: i === s
                  ? wt`
            background: green;
            padding: 7px;
            border-radius: 10px;
            font-size: 20px
          `
                  : "",
                onClick: () => a(s),
              },
              s,
              "px",
            )
          ),
        ),
        he(
          "span",
          {
            css: wt`
            background: grey;
            color: white;
            padding: 7px;
        `,
          },
          he("span", {
            css: "font-size: 20px; margin: 5px",
            onClick: () => o((s) => s - 10),
          }, "-"),
          he(Si.span, { drag: !0 }, r, "%"),
          he("span", {
            css: "font-size: 20px; margin: 5px",
            onClick: () => o((s) => s + 10),
          }, "+"),
        ),
        he("button", {
          css: QE({}),
          onClick: () => {
            console.log(u.current.clientHeight), e();
          },
        }, "\u{1F30E} Export"),
      ),
      he("div", {
        css: wt`  
            max-width: 100%;
            z-index: 10;
            position: relative;
            min-width: 300px;
            min-height: 250px;
            background: inherit;
            border-radius: 2px;
            overflow-x: hidden;
            padding: 24px;
         
          
          :after{
           content: '';
           z-index: -9;
           background: inherit; 
           position: absolute;
           left: 10px;
           right: 10px;
           top: 10px;  
           bottom: 10px;
           box-shadow: inset 0 0 0 200px rgba(255,255,255,0.15);
           filter: blur(10px);
          }
          >div{
            background: white;
            padding:10px;
            border-radius: 12px;
            opacity: 0.9
          }
    `,
      }, he("div", { id: "zbody", css: "margin: 8px" }, n)),
    );
  },
  QE = ({ color: e = "darkred", square: t = !1 }) =>
    wt`
    background: ${e};
    
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-family: Roboto;
    padding: 8px 8px;
    outline: none;
    border: none; 
    margin-left: 20px;
    border-radius: 0px ${t ? 0 : 8}px 0px 0px;
`;
var { motion: ZE } = ni;
var qE = (
    e,
    t,
  ) => (Rf.default.render(he(sr.Fragment, { children: e }), t),
    () => Rf.default.unmountComponentAtNode(t)),
  JE = sr.default;
var eC = sr.Fragment;
var tC = sr.default;
export {
  Cy as Global,
  eC as Fragment,
  he as jsx,
  JE as default,
  ni as Motion,
  qE as render,
  tC as React,
  Ty as DraggableWindow,
  wt as css,
  ZE as motion,
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/** @license React v0.20.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
