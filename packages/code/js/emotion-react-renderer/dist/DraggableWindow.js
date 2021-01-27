var vs = Object.create,
  dr = Object.defineProperty,
  hs = Object.getPrototypeOf,
  ms = Object.prototype.hasOwnProperty,
  ys = Object.getOwnPropertyNames,
  gs = Object.getOwnPropertyDescriptor;
var bs = (e) => dr(e, "__esModule", { value: !0 });
var ce = (e, t) =>
  () => (t || (t = { exports: {} }, e(t.exports, t)), t.exports);
var xs = (e, t, r) => {
    if (bs(e), t && typeof t == "object" || typeof t == "function") {
      for (let n of ys(t)) {
        !ms.call(e, n) && n !== "default" && dr(e, n, {
          get: () => t[n],
          enumerable: !(r = gs(t, n)) || r.enumerable,
        });
      }
    }
    return e;
  },
  be = (e) =>
    e && e.__esModule
      ? e
      : xs(
        dr(e != null ? vs(hs(e)) : {}, "default", { value: e, enumerable: !0 }),
        e,
      );
var Fn = ce((xd, In) => {
  "use strict";
  var Bn = Object.getOwnPropertySymbols,
    ws = Object.prototype.hasOwnProperty,
    Ss = Object.prototype.propertyIsEnumerable;
  function Es(e) {
    if (e == null) {
      throw new TypeError(
        "Object.assign cannot be called with null or undefined",
      );
    }
    return Object(e);
  }
  function Cs() {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc");
      if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
      for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
      var n = Object.getOwnPropertyNames(t).map(function (a) {
        return t[a];
      });
      if (n.join("") !== "0123456789") return !1;
      var o = {};
      return "abcdefghijklmnopqrst".split("").forEach(function (a) {
        o[a] = a;
      }),
        Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst";
    } catch (a) {
      return !1;
    }
  }
  In.exports = Cs() ? Object.assign : function (e, t) {
    for (var r, n = Es(e), o, a = 1; a < arguments.length; a++) {
      r = Object(arguments[a]);
      for (var i in r) ws.call(r, i) && (n[i] = r[i]);
      if (Bn) {
        o = Bn(r);
        for (var s = 0; s < o.length; s++) {
          Ss.call(r, o[s]) && (n[o[s]] = r[o[s]]);
        }
      }
    }
    return n;
  };
});
var eo = ce((O) => {
  "use strict";
  var pr = Fn(), Ve = 60103, jn = 60106;
  O.Fragment = 60107;
  O.StrictMode = 60108;
  O.Profiler = 60114;
  var kn = 60109, Un = 60110, $n = 60112;
  O.Suspense = 60113;
  var zn = 60115, Hn = 60116;
  typeof Symbol == "function" && Symbol.for &&
    (K = Symbol.for,
      Ve = K("react.element"),
      jn = K("react.portal"),
      O.Fragment = K("react.fragment"),
      O.StrictMode = K("react.strict_mode"),
      O.Profiler = K("react.profiler"),
      kn = K("react.provider"),
      Un = K("react.context"),
      $n = K("react.forward_ref"),
      O.Suspense = K("react.suspense"),
      zn = K("react.memo"),
      Hn = K("react.lazy"));
  var K, Yn = typeof Symbol == "function" && Symbol.iterator;
  function Ps(e) {
    return e === null || typeof e != "object"
      ? null
      : (e = Yn && e[Yn] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  function Ue(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    ) {
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return "Minified React error #" + e + "; visit " + t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Gn = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Wn = {};
  function Me(e, t, r) {
    this.props = e, this.context = t, this.refs = Wn, this.updater = r || Gn;
  }
  Me.prototype.isReactComponent = {};
  Me.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) {
      throw Error(Ue(85));
    }
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Me.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Kn() {}
  Kn.prototype = Me.prototype;
  function vr(e, t, r) {
    this.props = e, this.context = t, this.refs = Wn, this.updater = r || Gn;
  }
  var hr = vr.prototype = new Kn();
  hr.constructor = vr;
  pr(hr, Me.prototype);
  hr.isPureReactComponent = !0;
  var mr = { current: null },
    qn = Object.prototype.hasOwnProperty,
    Xn = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Zn(e, t, r) {
    var n, o = {}, a = null, i = null;
    if (t != null) {
      for (
        n in t.ref !== void 0 && (i = t.ref),
          t.key !== void 0 && (a = "" + t.key),
          t
      ) {
        qn.call(t, n) && !Xn.hasOwnProperty(n) && (o[n] = t[n]);
      }
    }
    var s = arguments.length - 2;
    if (s === 1) o.children = r;
    else if (1 < s) {
      for (var f = Array(s), u = 0; u < s; u++) f[u] = arguments[u + 2];
      o.children = f;
    }
    if (e && e.defaultProps) {
      for (n in s = e.defaultProps, s) o[n] === void 0 && (o[n] = s[n]);
    }
    return {
      $$typeof: Ve,
      type: e,
      key: a,
      ref: i,
      props: o,
      _owner: mr.current,
    };
  }
  function Ts(e, t) {
    return {
      $$typeof: Ve,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function yr(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ve;
  }
  function As(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function (r) {
      return t[r];
    });
  }
  var Jn = /\/+/g;
  function gr(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? As("" + e.key)
      : t.toString(36);
  }
  function pt(e, t, r, n, o) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else {
      switch (a) {
        case "string":
        case "number":
          i = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Ve:
            case jn:
              i = !0;
          }
      }
    }
    if (i) {
      return i = e,
        o = o(i),
        e = n === "" ? "." + gr(i, 0) : n,
        Array.isArray(o)
          ? (r = "",
            e != null && (r = e.replace(Jn, "$&/") + "/"),
            pt(o, t, r, "", function (u) {
              return u;
            }))
          : o != null &&
            (yr(o) && (o = Ts(
              o,
              r + (!o.key || i && i.key === o.key
                ? ""
                : ("" + o.key).replace(Jn, "$&/") + "/") +
                e,
            )),
              t.push(o)),
        1;
    }
    if (i = 0, n = n === "" ? "." : n + ":", Array.isArray(e)) {
      for (var s = 0; s < e.length; s++) {
        a = e[s];
        var f = n + gr(a, s);
        i += pt(a, t, r, f, o);
      }
    } else if (f = Ps(e), typeof f == "function") {
      for (e = f.call(e), s = 0; !(a = e.next()).done;) {
        a = a.value, f = n + gr(a, s++), i += pt(a, t, r, f, o);
      }
    } else if (a === "object") {
      throw t = "" + e,
        Error(Ue(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t,
        ));
    }
    return i;
  }
  function vt(e, t, r) {
    if (e == null) return e;
    var n = [], o = 0;
    return pt(e, n, "", "", function (a) {
      return t.call(r, a, o++);
    }),
      n;
  }
  function Os(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(),
        e._status = 0,
        e._result = t,
        t.then(function (r) {
          e._status === 0 && (r = r.default, e._status = 1, e._result = r);
        }, function (r) {
          e._status === 0 && (e._status = 2, e._result = r);
        });
    }
    if (e._status === 1) return e._result;
    throw e._result;
  }
  var Qn = { current: null };
  function de() {
    var e = Qn.current;
    if (e === null) throw Error(Ue(321));
    return e;
  }
  var Vs = {
    ReactCurrentDispatcher: Qn,
    ReactCurrentBatchConfig: { transition: 0 },
    ReactCurrentOwner: mr,
    IsSomeRendererActing: { current: !1 },
    assign: pr,
  };
  O.Children = {
    map: vt,
    forEach: function (e, t, r) {
      vt(e, function () {
        t.apply(this, arguments);
      }, r);
    },
    count: function (e) {
      var t = 0;
      return vt(e, function () {
        t++;
      }),
        t;
    },
    toArray: function (e) {
      return vt(e, function (t) {
        return t;
      }) || [];
    },
    only: function (e) {
      if (!yr(e)) throw Error(Ue(143));
      return e;
    },
  };
  O.Component = Me;
  O.PureComponent = vr;
  O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vs;
  O.cloneElement = function (e, t, r) {
    if (e == null) throw Error(Ue(267, e));
    var n = pr({}, e.props), o = e.key, a = e.ref, i = e._owner;
    if (t != null) {
      if (
        t.ref !== void 0 && (a = t.ref, i = mr.current),
          t.key !== void 0 && (o = "" + t.key),
          e.type && e.type.defaultProps
      ) {
        var s = e.type.defaultProps;
      }
      for (f in t) {
        qn.call(t, f) && !Xn.hasOwnProperty(f) &&
          (n[f] = t[f] === void 0 && s !== void 0 ? s[f] : t[f]);
      }
    }
    var f = arguments.length - 2;
    if (f === 1) n.children = r;
    else if (1 < f) {
      s = Array(f);
      for (var u = 0; u < f; u++) s[u] = arguments[u + 2];
      n.children = s;
    }
    return { $$typeof: Ve, type: e.type, key: o, ref: a, props: n, _owner: i };
  };
  O.createContext = function (e, t) {
    return t === void 0 && (t = null),
      e = {
        $$typeof: Un,
        _calculateChangedBits: t,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      },
      e.Provider = { $$typeof: kn, _context: e },
      e.Consumer = e;
  };
  O.createElement = Zn;
  O.createFactory = function (e) {
    var t = Zn.bind(null, e);
    return t.type = e, t;
  };
  O.createRef = function () {
    return { current: null };
  };
  O.forwardRef = function (e) {
    return { $$typeof: $n, render: e };
  };
  O.isValidElement = yr;
  O.lazy = function (e) {
    return { $$typeof: Hn, _payload: { _status: -1, _result: e }, _init: Os };
  };
  O.memo = function (e, t) {
    return { $$typeof: zn, type: e, compare: t === void 0 ? null : t };
  };
  O.useCallback = function (e, t) {
    return de().useCallback(e, t);
  };
  O.useContext = function (e, t) {
    return de().useContext(e, t);
  };
  O.useDebugValue = function () {};
  O.useEffect = function (e, t) {
    return de().useEffect(e, t);
  };
  O.useImperativeHandle = function (e, t, r) {
    return de().useImperativeHandle(e, t, r);
  };
  O.useLayoutEffect = function (e, t) {
    return de().useLayoutEffect(e, t);
  };
  O.useMemo = function (e, t) {
    return de().useMemo(e, t);
  };
  O.useReducer = function (e, t, r) {
    return de().useReducer(e, t, r);
  };
  O.useRef = function (e) {
    return de().useRef(e);
  };
  O.useState = function (e) {
    return de().useState(e);
  };
  O.version = "17.0.1";
});
var $e = ce((Sd, to) => {
  "use strict";
  to.exports = eo();
});
var xo = ce((L) => {
  "use strict";
  var F = typeof Symbol == "function" && Symbol.for,
    Vr = F ? Symbol.for("react.element") : 60103,
    Mr = F ? Symbol.for("react.portal") : 60106,
    St = F ? Symbol.for("react.fragment") : 60107,
    Et = F ? Symbol.for("react.strict_mode") : 60108,
    Ct = F ? Symbol.for("react.profiler") : 60114,
    Pt = F ? Symbol.for("react.provider") : 60109,
    Tt = F ? Symbol.for("react.context") : 60110,
    Rr = F ? Symbol.for("react.async_mode") : 60111,
    At = F ? Symbol.for("react.concurrent_mode") : 60111,
    Ot = F ? Symbol.for("react.forward_ref") : 60112,
    Vt = F ? Symbol.for("react.suspense") : 60113,
    Xs = F ? Symbol.for("react.suspense_list") : 60120,
    Mt = F ? Symbol.for("react.memo") : 60115,
    Rt = F ? Symbol.for("react.lazy") : 60116,
    Zs = F ? Symbol.for("react.block") : 60121,
    Js = F ? Symbol.for("react.fundamental") : 60117,
    Qs = F ? Symbol.for("react.responder") : 60118,
    eu = F ? Symbol.for("react.scope") : 60119;
  function Y(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Vr:
          switch (e = e.type, e) {
            case Rr:
            case At:
            case St:
            case Ct:
            case Et:
            case Vt:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case Tt:
                case Ot:
                case Rt:
                case Mt:
                case Pt:
                  return e;
                default:
                  return t;
              }
          }
        case Mr:
          return t;
      }
    }
  }
  function bo(e) {
    return Y(e) === At;
  }
  L.AsyncMode = Rr;
  L.ConcurrentMode = At;
  L.ContextConsumer = Tt;
  L.ContextProvider = Pt;
  L.Element = Vr;
  L.ForwardRef = Ot;
  L.Fragment = St;
  L.Lazy = Rt;
  L.Memo = Mt;
  L.Portal = Mr;
  L.Profiler = Ct;
  L.StrictMode = Et;
  L.Suspense = Vt;
  L.isAsyncMode = function (e) {
    return bo(e) || Y(e) === Rr;
  };
  L.isConcurrentMode = bo;
  L.isContextConsumer = function (e) {
    return Y(e) === Tt;
  };
  L.isContextProvider = function (e) {
    return Y(e) === Pt;
  };
  L.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === Vr;
  };
  L.isForwardRef = function (e) {
    return Y(e) === Ot;
  };
  L.isFragment = function (e) {
    return Y(e) === St;
  };
  L.isLazy = function (e) {
    return Y(e) === Rt;
  };
  L.isMemo = function (e) {
    return Y(e) === Mt;
  };
  L.isPortal = function (e) {
    return Y(e) === Mr;
  };
  L.isProfiler = function (e) {
    return Y(e) === Ct;
  };
  L.isStrictMode = function (e) {
    return Y(e) === Et;
  };
  L.isSuspense = function (e) {
    return Y(e) === Vt;
  };
  L.isValidElementType = function (e) {
    return typeof e == "string" || typeof e == "function" || e === St ||
      e === At || e === Ct || e === Et || e === Vt || e === Xs ||
      typeof e == "object" && e !== null &&
        (e.$$typeof === Rt || e.$$typeof === Mt || e.$$typeof === Pt ||
          e.$$typeof === Tt || e.$$typeof === Ot || e.$$typeof === Js ||
          e.$$typeof === Qs || e.$$typeof === eu || e.$$typeof === Zs);
  };
  L.typeOf = Y;
});
var So = ce((Nd, wo) => {
  "use strict";
  wo.exports = xo();
});
var Dr = ce((Id, Eo) => {
  "use strict";
  var _r = So(),
    tu = {
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
    ru = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    nu = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    Co = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    Lr = {};
  Lr[_r.ForwardRef] = nu;
  Lr[_r.Memo] = Co;
  function Po(e) {
    return _r.isMemo(e) ? Co : Lr[e.$$typeof] || tu;
  }
  var ou = Object.defineProperty,
    au = Object.getOwnPropertyNames,
    To = Object.getOwnPropertySymbols,
    iu = Object.getOwnPropertyDescriptor,
    su = Object.getPrototypeOf,
    Ao = Object.prototype;
  function Oo(e, t, r) {
    if (typeof t != "string") {
      if (Ao) {
        var n = su(t);
        n && n !== Ao && Oo(e, n, r);
      }
      var o = au(t);
      To && (o = o.concat(To(t)));
      for (var a = Po(e), i = Po(t), s = 0; s < o.length; ++s) {
        var f = o[s];
        if (!ru[f] && !(r && r[f]) && !(i && i[f]) && !(a && a[f])) {
          var u = iu(t, f);
          try {
            ou(e, f, u);
          } catch (l) {}
        }
      }
    }
    return e;
  }
  Eo.exports = Oo;
});
var Fo = ce((ep, Br) => {
  function Fr() {
    return Br.exports = Fr = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) {
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
      }
      return e;
    },
      Fr.apply(this, arguments);
  }
  Br.exports = Fr;
});
var Oa = ce((an) => {
  "use strict";
  Object.defineProperty(an, "__esModule", { value: !0 });
  function wf(e) {
    var t = {};
    return function (r) {
      return t[r] === void 0 && (t[r] = e(r)), t[r];
    };
  }
  an.default = wf;
});
var Va = ce((sn) => {
  "use strict";
  Object.defineProperty(sn, "__esModule", { value: !0 });
  function Sf(e) {
    return e && typeof e == "object" && "default" in e ? e.default : e;
  }
  var Ef = Sf(Oa()),
    Cf =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    Pf = Ef(function (e) {
      return Cf.test(e) ||
        e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 &&
          e.charCodeAt(2) < 91;
    });
  sn.default = Pf;
});
var re = be($e());
function Ms(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++) {
    if (document.styleSheets[t].ownerNode === e) {
      return document.styleSheets[t];
    }
  }
}
function Rs(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t;
}
var ht = function () {
  function e(r) {
    var n = this;
    this._insertTag = function (o) {
      var a;
      n.tags.length === 0
        ? a = n.prepend ? n.container.firstChild : n.before
        : a = n.tags[n.tags.length - 1].nextSibling,
        n.container.insertBefore(o, a),
        n.tags.push(o);
    },
      this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy,
      this.tags = [],
      this.ctr = 0,
      this.nonce = r.nonce,
      this.key = r.key,
      this.container = r.container,
      this.prepend = r.prepend,
      this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function (n) {
    n.forEach(this._insertTag);
  },
    t.insert = function (n) {
      this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(Rs(this));
      var o = this.tags[this.tags.length - 1];
      if (!1) var a;
      if (this.isSpeedy) {
        var i = Ms(o);
        try {
          i.insertRule(n, i.cssRules.length);
        } catch (s) {}
      } else o.appendChild(document.createTextNode(n));
      this.ctr++;
    },
    t.flush = function () {
      this.tags.forEach(function (n) {
        return n.parentNode.removeChild(n);
      }),
        this.tags = [],
        this.ctr = 0;
    },
    e;
}();
var z = "-ms-",
  mt = "-moz-",
  R = "-webkit-",
  ro = "comm",
  br = "rule",
  xr = "decl";
var _s = "@import";
var Ls = "@keyframes";
var Ds = Math.abs, ze = String.fromCharCode;
function Ns(e, t) {
  return (((t << 2 ^ q(e, 0)) << 2 ^ q(e, 1)) << 2 ^ q(e, 2)) << 2 ^ q(e, 3);
}
function no(e) {
  return e.trim();
}
function Is(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function _(e, t, r) {
  return e.replace(t, r);
}
function oo(e, t) {
  return e.indexOf(t);
}
function q(e, t) {
  return e.charCodeAt(t) | 0;
}
function He(e, t, r) {
  return e.slice(t, r);
}
function pe(e) {
  return e.length;
}
function wr(e) {
  return e.length;
}
function yt(e, t) {
  return t.push(e), e;
}
function Bs(e, t) {
  return e.map(t).join("");
}
var Sr = 1, gt = 1, ao = 0, X = 0, ee = 0, Ye = "";
function bt(e, t, r, n, o, a, i) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: a,
    line: Sr,
    column: gt,
    length: i,
    return: "",
  };
}
function Ge(e, t, r) {
  return bt(e, t.root, t.parent, r, t.props, t.children, 0);
}
function Fs() {
  return ee;
}
function te() {
  return ee = X < ao ? q(Ye, X++) : 0, gt++, ee === 10 && (gt = 1, Sr++), ee;
}
function ve() {
  return q(Ye, X);
}
function io() {
  return X;
}
function Er(e, t) {
  return He(Ye, e, t);
}
function We(e) {
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
function Cr(e) {
  return Sr = gt = 1, ao = pe(Ye = e), X = 0, [];
}
function Pr(e) {
  return Ye = "", e;
}
function xt(e) {
  return no(Er(X - 1, Tr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function js(e) {
  for (; (ee = ve()) && ee < 33;) te();
  return We(e) > 2 || We(ee) > 3 ? "" : " ";
}
function Tr(e) {
  for (; te();) {
    switch (ee) {
      case e:
        return X;
      case 34:
      case 39:
        return Tr(e === 34 || e === 39 ? e : ee);
      case 40:
        e === 41 && Tr(e);
        break;
      case 92:
        te();
        break;
    }
  }
  return X;
}
function ks(e, t) {
  for (; te() && e + ee !== 47 + 10;) {
    if (e + ee === 42 + 42 && ve() === 47) {
      break;
    }
  }
  return "/*" + Er(t, X - 1) + "*" + ze(e === 47 ? e : te());
}
function Ar(e) {
  for (; !We(ve());) te();
  return Er(e, X);
}
function so(e) {
  return Pr(wt("", null, null, null, [""], e = Cr(e), 0, [0], e));
}
function wt(e, t, r, n, o, a, i, s, f) {
  for (
    var u = 0,
      l = 0,
      c = i,
      d = 0,
      p = 0,
      v = 0,
      m = 1,
      h = 1,
      g = 1,
      b = 0,
      E = "",
      P = o,
      w = a,
      S = n,
      C = E;
    h;
  ) {
    switch (v = b, b = te()) {
      case 34:
      case 39:
      case 91:
      case 40:
        C += xt(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += js(v);
        break;
      case 47:
        switch (ve()) {
          case 42:
          case 47:
            yt(Us(ks(te(), io()), t, r), f);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * m:
        s[u++] = pe(C) * g;
      case 125 * m:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            h = 0;
          case 59 + l:
            p > 0 &&
              yt(
                p > 32
                  ? fo(C + ";", n, r, c - 1)
                  : fo(_(C, " ", "") + ";", n, r, c - 2),
                f,
              );
            break;
          case 59:
            C += ";";
          default:
            if (
              yt(S = uo(C, t, r, u, l, o, s, E, P = [], w = [], c), a),
                b === 123
            ) {
              if (l === 0) wt(C, t, S, S, P, a, c, s, w);
              else {
                switch (d) {
                  case 100:
                  case 109:
                  case 115:
                    wt(
                      e,
                      S,
                      S,
                      n && yt(uo(e, S, S, 0, 0, o, s, E, o, P = [], c), w),
                      o,
                      w,
                      c,
                      s,
                      n ? P : w,
                    );
                    break;
                  default:
                    wt(C, S, S, S, [""], w, c, s, w);
                }
              }
            }
        }
        u = l = p = 0, m = g = 1, E = C = "", c = i;
        break;
      case 58:
        c = 1 + pe(C), p = v;
      default:
        switch (C += ze(b), b * m) {
          case 38:
            g = l > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            s[u++] = (pe(C) - 1) * g, g = 1;
            break;
          case 64:
            ve() === 45 && (C += xt(te())),
              d = ve(),
              l = pe(E = C += Ar(io())),
              b++;
            break;
          case 45:
            v === 45 && pe(C) == 2 && (m = 0);
        }
    }
  }
  return a;
}
function uo(e, t, r, n, o, a, i, s, f, u, l) {
  for (
    var c = o - 1, d = o === 0 ? a : [""], p = wr(d), v = 0, m = 0, h = 0;
    v < n;
    ++v
  ) {
    for (
      var g = 0, b = He(e, c + 1, c = Ds(m = i[v])), E = e; g < p; ++g
    ) {
      (E = no(m > 0 ? d[g] + " " + b : _(b, /&\f/g, d[g]))) && (f[h++] = E);
    }
  }
  return bt(e, t, r, o === 0 ? br : s, f, u, l);
}
function Us(e, t, r) {
  return bt(e, t, r, ro, ze(Fs()), He(e, 2, -2), 0);
}
function fo(e, t, r, n) {
  return bt(e, t, r, xr, He(e, 0, n), He(e, n + 1, -1), n);
}
function lo(e, t) {
  switch (Ns(e, t)) {
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
      return R + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return R + e + mt + e + z + e + e;
    case 6828:
    case 4268:
      return R + e + z + e + e;
    case 6165:
      return R + e + z + "flex-" + e + e;
    case 5187:
      return R + e + _(e, /(\w+).+(:[^]+)/, R + "box-$1$2" + z + "flex-$1$2") +
        e;
    case 5443:
      return R + e + z + "flex-item-" + _(e, /flex-|-self/, "") + e;
    case 4675:
      return R + e + z + "flex-line-pack" +
        _(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return R + e + z + _(e, "shrink", "negative") + e;
    case 5292:
      return R + e + z + _(e, "basis", "preferred-size") + e;
    case 6060:
      return R + "box-" + _(e, "-grow", "") + R + e + z +
        _(e, "grow", "positive") + e;
    case 4554:
      return R + _(e, /([^-])(transform)/g, "$1" + R + "$2") + e;
    case 6187:
      return _(
        _(_(e, /(zoom-|grab)/, R + "$1"), /(image-set)/, R + "$1"),
        e,
        "",
      ) + e;
    case 5495:
    case 3959:
      return _(e, /(image-set\([^]*)/, R + "$1$`$1");
    case 4968:
      return _(
        _(e, /(.+:)(flex-)?(.*)/, R + "box-pack:$3" + z + "flex-pack:$3"),
        /s.+-b[^;]+/,
        "justify",
      ) + R + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _(e, /(.+)-inline(.+)/, R + "$1$2") + e;
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
      if (pe(e) - 1 - t > 6) {
        switch (q(e, t + 1)) {
          case 102:
            t = q(e, t + 3);
          case 109:
            return _(
              e,
              /(.+:)(.+)-([^]+)/,
              "$1" + R + "$2-$3$1" + mt + (t == 108 ? "$3" : "$2-$3"),
            ) + e;
          case 115:
            return ~oo(e, "stretch")
              ? lo(_(e, "stretch", "fill-available"), t) + e
              : e;
        }
      }
      break;
    case 4949:
      if (q(e, t + 1) !== 115) break;
    case 6444:
      switch (q(e, pe(e) - 3 - (~oo(e, "!important") && 10))) {
        case 107:
        case 111:
          return _(e, e, R + e) + e;
        case 101:
          return _(
            e,
            /(.+:)([^;!]+)(;|!.+)?/,
            "$1" + R + (q(e, 14) === 45 ? "inline-" : "") + "box$3$1" + R +
              "$2$3$1" + z + "$2box$3",
          ) + e;
      }
      break;
    case 5936:
      switch (q(e, t + 11)) {
        case 114:
          return R + e + z + _(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return R + e + z + _(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return R + e + z + _(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return R + e + z + e + e;
  }
  return e;
}
function Re(e, t) {
  for (var r = "", n = wr(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
  return r;
}
function co(e, t, r, n) {
  switch (e.type) {
    case _s:
    case xr:
      return e.return = e.return || e.value;
    case ro:
      return "";
    case br:
      e.value = e.props.join(",");
  }
  return pe(r = Re(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function po(e) {
  var t = wr(e);
  return function (r, n, o, a) {
    for (var i = "", s = 0; s < t; s++) i += e[s](r, n, o, a) || "";
    return i;
  };
}
function vo(e) {
  return function (t) {
    t.root || (t = t.return) && e(t);
  };
}
function ho(e, t, r, n) {
  if (!e.return) {
    switch (e.type) {
      case xr:
        e.return = lo(e.value, e.length);
        break;
      case Ls:
        return Re([Ge(_(e.value, "@", "@" + R), e, "")], n);
      case br:
        if (e.length) {
          return Bs(e.props, function (o) {
            switch (Is(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Re([Ge(_(o, /:(read-\w+)/, ":" + mt + "$1"), e, "")], n);
              case "::placeholder":
                return Re([
                  Ge(_(o, /:(plac\w+)/, ":" + R + "input-$1"), e, ""),
                  Ge(_(o, /:(plac\w+)/, ":" + mt + "$1"), e, ""),
                  Ge(_(o, /:(plac\w+)/, z + "input-$1"), e, ""),
                ], n);
            }
            return "";
          });
        }
    }
  }
}
var $s = function (t) {
    var r = new WeakMap();
    return function (n) {
      if (r.has(n)) return r.get(n);
      var o = t(n);
      return r.set(n, o), o;
    };
  },
  Or = $s;
function zs(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var mo = zs;
var Hs = function (t, r) {
    var n = -1, o = 44;
    do switch (We(o)) {
      case 0:
        o === 38 && ve() === 12 && (r[n] = 1), t[n] += Ar(X - 1);
        break;
      case 2:
        t[n] += xt(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = ve() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += ze(o);
    } while (o = te());
    return t;
  },
  Ys = function (t, r) {
    return Pr(Hs(Cr(t), r));
  },
  yo = new WeakMap(),
  Gs = function (t) {
    if (!(t.type !== "rule" || !t.parent || !t.length)) {
      for (
        var r = t.value,
          n = t.parent,
          o = t.column === n.column && t.line === n.line;
        n.type !== "rule";
      ) {
        if (n = n.parent, !n) return;
      }
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !yo.get(n)) && !o
      ) {
        yo.set(t, !0);
        for (
          var a = [], i = Ys(r, a), s = n.props, f = 0, u = 0; f < i.length; f++
        ) {
          for (var l = 0; l < s.length; l++, u++) {
            t.props[u] = a[f] ? i[f].replace(/&\f/g, s[l]) : s[l] + " " + i[f];
          }
        }
      }
    }
  },
  Ws = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 &&
        (t.return = "", t.value = "");
    }
  };
var Ks = [ho],
  qs = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (m) {
        document.head.appendChild(m), m.setAttribute("data-s", "");
      });
    }
    var o = t.stylisPlugins || Ks, a = {}, i, s = [];
    i = t.container || document.head,
      Array.prototype.forEach.call(
        document.querySelectorAll("style[data-emotion]"),
        function (m) {
          var h = m.getAttribute("data-emotion").split(" ");
          if (h[0] === r) {
            for (var g = 1; g < h.length; g++) a[h[g]] = !0;
            s.push(m);
          }
        },
      );
    var f, u = [Gs, Ws];
    {
      var l,
        c = [
          co,
          vo(function (m) {
            l.insert(m);
          }),
        ],
        d = po(u.concat(o, c)),
        p = function (h) {
          return Re(so(h), d);
        };
      f = function (h, g, b, E) {
        l = b,
          p(h ? h + "{" + g.styles + "}" : g.styles),
          E && (v.inserted[g.name] = !0);
      };
    }
    var v = {
      key: r,
      sheet: new ht({
        key: r,
        container: i,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
      }),
      nonce: t.nonce,
      inserted: a,
      registered: {},
      insert: f,
    };
    return v.sheet.hydrate(s), v;
  },
  go = qs;
var ue = be($e());
function Ke() {
  return Ke = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) {
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
    }
    return e;
  },
    Ke.apply(this, arguments);
}
var uu = be(Dr());
var fu = !0;
function _t(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function (o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }),
    n;
}
var qe = function (t, r, n) {
  var o = t.key + "-" + r.name;
  if (
    (n === !1 || fu === !1) && t.registered[o] === void 0 &&
    (t.registered[o] = r.styles), t.inserted[r.name] === void 0
  ) {
    var a = r;
    do {
      var i = t.insert(r === a ? "." + o : "", a, t.sheet, !0);
      a = a.next;
    } while (a !== void 0);
  }
};
function lu(e) {
  for (
    var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4
  ) {
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 |
      (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24,
      r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16),
      r ^= r >>> 24,
      t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^
        (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255,
        t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13,
    t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16),
    ((t ^ t >>> 15) >>> 0).toString(36);
}
var Vo = lu;
var cu = {
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
  Mo = cu;
var du = /[A-Z]|^ms/g,
  pu = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Ro = function (t) {
    return t.charCodeAt(1) === 45;
  },
  _o = function (t) {
    return t != null && typeof t != "boolean";
  },
  Nr = mo(function (e) {
    return Ro(e) ? e : e.replace(du, "-$&").toLowerCase();
  }),
  Lo = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string") {
          return r.replace(pu, function (n, o, a) {
            return se = { name: o, styles: a, next: se }, o;
          });
        }
    }
    return Mo[t] !== 1 && !Ro(t) && typeof r == "number" && r !== 0 ? r + "px"
    : r;
  };
function Xe(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1) {
        return se = { name: r.name, styles: r.styles, next: se }, r.name;
      }
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0) {
          for (; n !== void 0;) {
            se = { name: n.name, styles: n.styles, next: se }, n = n.next;
          }
        }
        var o = r.styles + ";";
        return o;
      }
      return vu(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = se, i = r(e);
        return se = a, Xe(e, t, i);
      }
      break;
    }
    case "string":
      if (!1) var s, f;
      break;
  }
  if (t == null) return r;
  var u = t[r];
  return u !== void 0 ? u : r;
}
function vu(e, t, r) {
  var n = "";
  if (Array.isArray(r)) {
    for (var o = 0; o < r.length; o++) n += Xe(e, t, r[o]) + ";";
  } else {
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object") {
        t != null && t[i] !== void 0
          ? n += a + "{" + t[i] + "}"
          : _o(i) && (n += Nr(a) + ":" + Lo(a, i) + ";");
      } else {
        if (a === "NO_COMPONENT_SELECTOR" && !1) {
          throw new Error(
            "Component selectors can only be used in conjunction with @emotion/babel-plugin.",
          );
        }
        if (
          Array.isArray(i) && typeof i[0] == "string" &&
          (t == null || t[i[0]] === void 0)
        ) {
          for (var s = 0; s < i.length; s++) {
            _o(i[s]) && (n += Nr(a) + ":" + Lo(a, i[s]) + ";");
          }
        } else {
          var f = Xe(e, t, i);
          switch (a) {
            case "animation":
            case "animationName": {
              n += Nr(a) + ":" + f + ";";
              break;
            }
            default:
              n += a + "{" + f + "}";
          }
        }
      }
    }
  }
  return n;
}
var Do = /label:\s*([^\s;\n{]+)\s*;/g;
var se,
  _e = function (t, r, n) {
    if (
      t.length === 1 && typeof t[0] == "object" && t[0] !== null &&
      t[0].styles !== void 0
    ) {
      return t[0];
    }
    var o = !0, a = "";
    se = void 0;
    var i = t[0];
    i == null || i.raw === void 0 ? (o = !1, a += Xe(n, r, i)) : a += i[0];
    for (var s = 1; s < t.length; s++) a += Xe(n, r, t[s]), o && (a += i[s]);
    var f;
    Do.lastIndex = 0;
    for (var u = "", l; (l = Do.exec(a)) !== null;) u += "-" + l[1];
    var c = Vo(a) + u;
    return { name: c, styles: a, next: se };
  };
var Lt = Object.prototype.hasOwnProperty,
  No = ue.createContext(
    typeof HTMLElement != "undefined" ? go({ key: "css" }) : null,
  ),
  hu = No.Provider,
  Ze = function (t) {
    return ue.forwardRef(function (r, n) {
      var o = ue.useContext(No);
      return t(r, o, n);
    });
  },
  Je = ue.createContext({});
var mu = function (t, r) {
    if (typeof r == "function") {
      var n = r(t);
      return n;
    }
    return Ke({}, t, {}, r);
  },
  Qd = Or(function (e) {
    return Or(function (t) {
      return mu(e, t);
    });
  });
var Ir = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var Io = function (t, r) {
    var n = {};
    for (var o in r) Lt.call(r, o) && (n[o] = r[o]);
    if (n[Ir] = t, !1) {
      var a;
      if (a.stack) var i;
    }
    return n;
  },
  Bo = Ze(function (e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var o = e[Ir], a = [n], i = "";
    typeof e.className == "string"
      ? i = _t(t.registered, a, e.className)
      : e.className != null && (i = e.className + " ");
    var s = _e(
      a,
      void 0,
      typeof n == "function" || Array.isArray(n) ? ue.useContext(Je) : void 0,
    );
    if (!1) var f;
    var u = qe(t, s, typeof o == "string");
    i += t.key + "-" + s.name;
    var l = {};
    for (var c in e) {
      Lt.call(e, c) && c !== "css" && c !== Ir && !0 && (l[c] = e[c]);
    }
    l.ref = r, l.className = i;
    var d = ue.createElement(o, l);
    return d;
  });
var up = be(Fo());
var lp = be(Dr());
var Z = function (t, r) {
    var n = arguments;
    if (r == null || !Lt.call(r, "css")) {
      return re.createElement.apply(void 0, n);
    }
    var o = n.length, a = new Array(o);
    a[0] = Bo, a[1] = Io(t, r);
    for (var i = 2; i < o; i++) a[i] = n[i];
    return re.createElement.apply(null, a);
  },
  hp = !1,
  mp = Ze(function (e, t) {
    var r = e.styles,
      n = _e(
        [r],
        void 0,
        typeof r == "function" || Array.isArray(r) ? re.useContext(Je) : void 0,
      ),
      o = re.useRef();
    return re.useLayoutEffect(function () {
      var a = t.key + "-global",
        i = new ht({
          key: a,
          nonce: t.sheet.nonce,
          container: t.sheet.container,
          speedy: t.sheet.isSpeedy,
        }),
        s = document.querySelector(
          'style[data-emotion="' + a + " " + n.name + '"]',
        );
      return t.sheet.tags.length && (i.before = t.sheet.tags[0]),
        s !== null && i.hydrate([s]),
        o.current = i,
        function () {
          i.flush();
        };
    }, [t]),
      re.useLayoutEffect(function () {
        n.next !== void 0 && qe(t, n.next, !0);
        var a = o.current;
        if (a.tags.length) {
          var i = a.tags[a.tags.length - 1].nextElementSibling;
          a.before = i, a.flush();
        }
        t.insert("", n, a, !1);
      }, [t, n.name]),
      null;
  });
function xe() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
    t[r] = arguments[r];
  }
  return _e(t);
}
var yu = function e(t) {
  for (var r = t.length, n = 0, o = ""; n < r; n++) {
    var a = t[n];
    if (a != null) {
      var i = void 0;
      switch (typeof a) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(a)) i = e(a);
          else {
            i = "";
            for (var s in a) a[s] && s && (i && (i += " "), i += s);
          }
          break;
        }
        default:
          i = a;
      }
      i && (o && (o += " "), o += i);
    }
  }
  return o;
};
function gu(e, t, r) {
  var n = [], o = _t(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var yp = Ze(function (e, t) {
  var r = !1,
    n = function () {
      if (r && !1) throw new Error("css can only be used during render");
      for (
        var f = arguments.length, u = new Array(f), l = 0; l < f; l++
      ) {
        u[l] = arguments[l];
      }
      var c = _e(u, t.registered);
      return qe(t, c, !1), t.key + "-" + c.name;
    },
    o = function () {
      if (r && !1) throw new Error("cx can only be used during render");
      for (var f = arguments.length, u = new Array(f), l = 0; l < f; l++) {
        u[l] = arguments[l];
      }
      return gu(t.registered, n, yu(u));
    },
    a = { css: n, cx: o, theme: re.useContext(Je) },
    i = e.children(a);
  return r = !0, i;
});
var jr = function (e, t) {
  return jr = Object.setPrototypeOf ||
    { __proto__: [] } instanceof Array && function (r, n) {
        r.__proto__ = n;
      } ||
    function (r, n) {
      for (var o in n) n.hasOwnProperty(o) && (r[o] = n[o]);
    },
    jr(e, t);
};
function we(e, t) {
  jr(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null
    ? Object.create(t)
    : (r.prototype = t.prototype, new r());
}
var y = function () {
  return y = Object.assign || function (t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) {
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
      }
    }
    return t;
  },
    y.apply(this, arguments);
};
function j(e, t) {
  var r = {};
  for (var n in e) {
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  }
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) {
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]]);
    }
  }
  return r;
}
function jo(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") {
    return {
      next: function () {
        return e && n >= e.length && (e = void 0),
          { value: e && e[n++], done: !e };
      },
    };
  }
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function H(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), o, a = [], i;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;) a.push(o.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (i) throw i.error;
    }
  }
  return a;
}
function ne() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e = e.concat(H(arguments[t]));
  }
  return e;
}
function ko() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) {
    e += arguments[t].length;
  }
  for (var n = Array(e), o = 0, t = 0; t < r; t++) {
    for (var a = arguments[t], i = 0, s = a.length; i < s; i++, o++) {
      n[o] = a[i];
    }
  }
  return n;
}
var Uo = 1 / 60 * 1e3,
  $o = typeof window != "undefined"
    ? function (e) {
      return window.requestAnimationFrame(e);
    }
    : function (e) {
      return setTimeout(function () {
        return e(performance.now());
      }, Uo);
    };
function bu(e) {
  var t = [],
    r = [],
    n = 0,
    o = !1,
    a = new WeakSet(),
    i = {
      schedule: function (s, f, u) {
        f === void 0 && (f = !1), u === void 0 && (u = !1);
        var l = u && o, c = l ? t : r;
        return f && a.add(s),
          c.indexOf(s) === -1 && (c.push(s), l && o && (n = t.length)),
          s;
      },
      cancel: function (s) {
        var f = r.indexOf(s);
        f !== -1 && r.splice(f, 1), a.delete(s);
      },
      process: function (s) {
        var f;
        if (
          o = !0, f = [r, t], t = f[0], r = f[1], r.length = 0, n = t.length, n
        ) {
          for (var u = 0; u < n; u++) {
            var l = t[u];
            l(s), a.has(l) && (i.schedule(l), e());
          }
        }
        o = !1;
      },
    };
  return i;
}
var xu = 40,
  kr = !0,
  Qe = !1,
  Ur = !1,
  et = { delta: 0, timestamp: 0 },
  Dt = ["read", "update", "preRender", "render", "postRender"],
  $r = Dt.reduce(function (e, t) {
    return e[t] = bu(function () {
      return Qe = !0;
    }),
      e;
  }, {}),
  Su = Dt.reduce(function (e, t) {
    var r = $r[t];
    return e[t] = function (n, o, a) {
      return o === void 0 && (o = !1),
        a === void 0 && (a = !1),
        Qe || wu(),
        r.schedule(n, o, a);
    },
      e;
  }, {}),
  Le = Dt.reduce(function (e, t) {
    return e[t] = $r[t].cancel, e;
  }, {}),
  Eu = function (e) {
    return $r[e].process(et);
  },
  zo = function (e) {
    Qe = !1,
      et.delta = kr ? Uo : Math.max(Math.min(e - et.timestamp, xu), 1),
      et.timestamp = e,
      Ur = !0,
      Dt.forEach(Eu),
      Ur = !1,
      Qe && (kr = !1, $o(zo));
  },
  wu = function () {
    Qe = !0, kr = !0, Ur || $o(zo);
  },
  De = function () {
    return et;
  },
  J = Su;
var tt = function () {}, k = function () {};
var Ho = function (e, t) {
    return function (r) {
      return Math.max(Math.min(r, t), e);
    };
  },
  rt = function (e) {
    return e % 1 ? Number(e.toFixed(5)) : e;
  },
  nt = /(-)?([\d]*\.?[\d])+/g,
  zr =
    /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
  Cu =
    /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function ot(e) {
  return typeof e == "string";
}
var ye = {
    test: function (e) {
      return typeof e == "number";
    },
    parse: parseFloat,
    transform: function (e) {
      return e;
    },
  },
  Ne = y(y({}, ye), { transform: Ho(0, 1) }),
  at = y(y({}, ye), { default: 1 }),
  it = function (e) {
    return {
      test: function (t) {
        return ot(t) && t.endsWith(e) && t.split(" ").length === 1;
      },
      parse: parseFloat,
      transform: function (t) {
        return "" + t + e;
      },
    };
  },
  he = it("deg"),
  Se = it("%"),
  T = it("px"),
  Yo = it("vh"),
  Go = it("vw"),
  Hr = y(y({}, Se), {
    parse: function (e) {
      return Se.parse(e) / 100;
    },
    transform: function (e) {
      return Se.transform(e * 100);
    },
  }),
  Yr = function (e, t) {
    return function (r) {
      return ot(r) && Cu.test(r) && r.startsWith(e) || t && r.hasOwnProperty(t);
    };
  },
  Wo = function (e, t, r) {
    return function (n) {
      var o;
      if (!ot(n)) return n;
      var a = n.match(nt), i = a[0], s = a[1], f = a[2], u = a[3];
      return o = {},
        o[e] = parseFloat(i),
        o[t] = parseFloat(s),
        o[r] = parseFloat(f),
        o.alpha = u !== void 0 ? parseFloat(u) : 1,
        o;
    };
  },
  Ee = {
    test: Yr("hsl", "hue"),
    parse: Wo("hue", "saturation", "lightness"),
    transform: function (e) {
      var t = e.hue,
        r = e.saturation,
        n = e.lightness,
        o = e.alpha,
        a = o === void 0 ? 1 : o;
      return "hsla(" + Math.round(t) + ", " + Se.transform(rt(r)) + ", " +
        Se.transform(rt(n)) + ", " + rt(Ne.transform(a)) + ")";
    },
  },
  Pu = Ho(0, 255),
  Gr = y(y({}, ye), {
    transform: function (e) {
      return Math.round(Pu(e));
    },
  }),
  Ce = {
    test: Yr("rgb", "red"),
    parse: Wo("red", "green", "blue"),
    transform: function (e) {
      var t = e.red,
        r = e.green,
        n = e.blue,
        o = e.alpha,
        a = o === void 0 ? 1 : o;
      return "rgba(" + Gr.transform(t) + ", " + Gr.transform(r) + ", " +
        Gr.transform(n) + ", " + rt(Ne.transform(a)) + ")";
    },
  };
function Tu(e) {
  var t = "", r = "", n = "", o = "";
  return e.length > 5
    ? (t = e.substr(1, 2),
      r = e.substr(3, 2),
      n = e.substr(5, 2),
      o = e.substr(7, 2))
    : (t = e.substr(1, 1),
      r = e.substr(2, 1),
      n = e.substr(3, 1),
      o = e.substr(4, 1),
      t += t,
      r += r,
      n += n,
      o += o),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(n, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    };
}
var Nt = { test: Yr("#"), parse: Tu, transform: Ce.transform },
  U = {
    test: function (e) {
      return Ce.test(e) || Nt.test(e) || Ee.test(e);
    },
    parse: function (e) {
      return Ce.test(e) ? Ce.parse(e) : Ee.test(e) ? Ee.parse(e) : Nt.parse(e);
    },
    transform: function (e) {
      return ot(e) ? e : e.hasOwnProperty("red")
        ? Ce.transform(e)
        : Ee.transform(e);
    },
  },
  Ko = "${c}",
  qo = "${n}";
function Au(e) {
  var t, r, n, o;
  return isNaN(e) && ot(e) &&
    ((r = (t = e.match(nt)) === null || t === void 0 ? void 0 : t.length) !==
                null && r !== void 0
            ? r
            : 0) +
          ((o = (n = e.match(zr)) === null || n === void 0
                  ? void 0
                  : n.length) !== null && o !== void 0
            ? o
            : 0) > 0;
}
function Xo(e) {
  var t = [], r = 0, n = e.match(zr);
  n && (r = n.length, e = e.replace(zr, Ko), t.push.apply(t, n.map(U.parse)));
  var o = e.match(nt);
  return o && (e = e.replace(nt, qo), t.push.apply(t, o.map(ye.parse))),
    { values: t, numColors: r, tokenised: e };
}
function Zo(e) {
  return Xo(e).values;
}
function Jo(e) {
  var t = Xo(e), r = t.values, n = t.numColors, o = t.tokenised, a = r.length;
  return function (i) {
    for (var s = o, f = 0; f < a; f++) {
      s = s.replace(
        f < n ? Ko : qo,
        f < n ? U.transform(i[f]) : rt(i[f]),
      );
    }
    return s;
  };
}
var Ou = function (e) {
  return typeof e == "number" ? 0 : e;
};
function Vu(e) {
  var t = Zo(e), r = Jo(e);
  return r(t.map(Ou));
}
var oe = { test: Au, parse: Zo, createTransformer: Jo, getAnimatableNone: Vu },
  Mu = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ru(e) {
  var t = e.slice(0, -1).split("("), r = t[0], n = t[1];
  if (r === "drop-shadow") return e;
  var o = (n.match(nt) || [])[0];
  if (!o) return e;
  var a = n.replace(o, ""), i = Mu.has(r) ? 1 : 0;
  return o !== n && (i *= 100), r + "(" + i + a + ")";
}
var _u = /([a-z-]*)\(.*?\)/g,
  It = y(y({}, oe), {
    getAnimatableNone: function (e) {
      var t = e.match(_u);
      return t ? t.map(Ru).join(" ") : e;
    },
  });
var st = function (e, t, r) {
    return Math.min(Math.max(r, e), t);
  },
  Wr = .001,
  Lu = .01,
  Qo = 10,
  Du = .05,
  Nu = 1;
function Bu(e) {
  var t = e.duration,
    r = t === void 0 ? 800 : t,
    n = e.bounce,
    o = n === void 0 ? .25 : n,
    a = e.velocity,
    i = a === void 0 ? 0 : a,
    s = e.mass,
    f = s === void 0 ? 1 : s,
    u,
    l;
  tt(r <= Qo * 1e3, "Spring duration must be 10 seconds or less");
  var c = 1 - o;
  c = st(Du, Nu, c),
    r = st(Lu, Qo, r / 1e3),
    c < 1
      ? (u = function (m) {
        var h = m * c, g = h * r, b = h - i, E = Kr(m, c), P = Math.exp(-g);
        return Wr - b / E * P;
      },
        l = function (m) {
          var h = m * c,
            g = h * r,
            b = g * i + i,
            E = Math.pow(c, 2) * Math.pow(m, 2) * r,
            P = Math.exp(-g),
            w = Kr(Math.pow(m, 2), c),
            S = -u(m) + Wr > 0 ? -1 : 1;
          return S * ((b - E) * P) / w;
        })
      : (u = function (m) {
        var h = Math.exp(-m * r), g = (m - i) * r + 1;
        return -Wr + h * g;
      },
        l = function (m) {
          var h = Math.exp(-m * r), g = (i - m) * (r * r);
          return h * g;
        });
  var d = 5 / r, p = Iu(u, l, d);
  if (isNaN(p)) return { stiffness: 100, damping: 10 };
  var v = Math.pow(p, 2) * f;
  return { stiffness: v, damping: c * 2 * Math.sqrt(f * v) };
}
var Fu = 12;
function Iu(e, t, r) {
  for (var n = r, o = 1; o < Fu; o++) n = n - e(n) / t(n);
  return n;
}
function Kr(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var ju = ["duration", "bounce"], ku = ["stiffness", "damping", "mass"];
function ea(e, t) {
  return t.some(function (r) {
    return e[r] !== void 0;
  });
}
function Uu(e) {
  var t = y({
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
  }, e);
  if (!ea(e, ku) && ea(e, ju)) {
    var r = Bu(e);
    t = y(y(y({}, t), r), { velocity: 0, mass: 1 }),
      t.isResolvedFromDuration = !0;
  }
  return t;
}
function qr(e) {
  var t = e.from,
    r = t === void 0 ? 0 : t,
    n = e.to,
    o = n === void 0 ? 1 : n,
    a = e.restSpeed,
    i = a === void 0 ? 2 : a,
    s = e.restDelta,
    f = j(e, ["from", "to", "restSpeed", "restDelta"]),
    u = { done: !1, value: r },
    l = Uu(f),
    c = l.stiffness,
    d = l.damping,
    p = l.mass,
    v = l.velocity,
    m = l.isResolvedFromDuration,
    h = ta,
    g = ta;
  function b() {
    var E = v ? -(v / 1e3) : 0,
      P = o - r,
      w = d / (2 * Math.sqrt(c * p)),
      S = Math.sqrt(c / p) / 1e3;
    if (s ?? (s = Math.abs(o - r) <= 1 ? .01 : .4), w < 1) {
      var C = Kr(S, w);
      h = function (A) {
        var V = Math.exp(-w * S * A);
        return o -
          V * ((E + w * S * P) / C * Math.sin(C * A) + P * Math.cos(C * A));
      },
        g = function (A) {
          var V = Math.exp(-w * S * A);
          return w * S * V *
              (Math.sin(C * A) * (E + w * S * P) / C + P * Math.cos(C * A)) -
            V * (Math.cos(C * A) * (E + w * S * P) - C * P * Math.sin(C * A));
        };
    } else if (w === 1) {
      h = function (A) {
        return o - Math.exp(-S * A) * (P + (E + S * P) * A);
      };
    } else {
      var M = S * Math.sqrt(w * w - 1);
      h = function (A) {
        var V = Math.exp(-w * S * A), B = Math.min(M * A, 300);
        return o -
          V * ((E + w * S * P) * Math.sinh(B) + M * P * Math.cosh(B)) / M;
      };
    }
  }
  return b(), {
    next: function (E) {
      var P = h(E);
      if (m) u.done = E >= f.duration;
      else {
        var w = g(E) * 1e3, S = Math.abs(w) <= i, C = Math.abs(o - P) <= s;
        u.done = S && C;
      }
      return u.value = u.done ? o : P, u;
    },
    flipTarget: function () {
      var E;
      v = -v, E = [o, r], r = E[0], o = E[1], b();
    },
  };
}
qr.needsInterpolation = function (e, t) {
  return typeof e == "string" || typeof t == "string";
};
var ta = function (e) {
    return 0;
  },
  Pe = function (e, t, r) {
    var n = t - e;
    return n === 0 ? 1 : (r - e) / n;
  },
  $ = function (e, t, r) {
    return -r * e + r * t + e;
  },
  $u = function (e, t, r) {
    var n = e * e, o = t * t;
    return Math.sqrt(Math.max(0, r * (o - n) + n));
  },
  zu = [Nt, Ce, Ee],
  ra = function (e) {
    return zu.find(function (t) {
      return t.test(e);
    });
  },
  na = function (e) {
    return "'" + e +
      "' is not an animatable color. Use the equivalent color code instead.";
  },
  oa = function (e, t) {
    var r = ra(e), n = ra(t);
    k(!!r, na(e)),
      k(!!n, na(t)),
      k(
        r.transform === n.transform,
        "Both colors must be hex/RGBA, OR both must be HSLA.",
      );
    var o = r.parse(e), a = n.parse(t), i = y({}, o), s = r === Ee ? $ : $u;
    return function (f) {
      for (var u in i) u !== "alpha" && (i[u] = s(o[u], a[u], f));
      return i.alpha = $(o.alpha, a.alpha, f), r.transform(i);
    };
  };
var Xr = function (e) {
    return typeof e == "number";
  },
  Hu = function (e, t) {
    return function (r) {
      return t(e(r));
    };
  },
  ut = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return e.reduce(Hu);
  };
function ia(e, t) {
  return Xr(e)
    ? function (r) {
      return $(e, t, r);
    }
    : U.test(e)
    ? oa(e, t)
    : aa(e, t);
}
var sa = function (e, t) {
    var r = ko(e),
      n = r.length,
      o = e.map(function (a, i) {
        return ia(a, t[i]);
      });
    return function (a) {
      for (var i = 0; i < n; i++) r[i] = o[i](a);
      return r;
    };
  },
  Yu = function (e, t) {
    var r = y(y({}, e), t), n = {};
    for (var o in r) {e[o] !== void 0 && t[o] !== void 0 &&
        (n[o] = ia(e[o], t[o]));}
    return function (a) {
      for (var i in n) r[i] = n[i](a);
      return r;
    };
  };
function ua(e) {
  for (
    var t = oe.parse(e), r = t.length, n = 0, o = 0, a = 0, i = 0; i < r; i++
  ) {
    n || typeof t[i] == "number" ? n++ : t[i].hue !== void 0 ? a++ : o++;
  }
  return { parsed: t, numNumbers: n, numRGB: o, numHSL: a };
}
var aa = function (e, t) {
    var r = oe.createTransformer(t), n = ua(e), o = ua(t);
    return k(
      n.numHSL === o.numHSL && n.numRGB === o.numRGB &&
        n.numNumbers >= o.numNumbers,
      "Complex values '" + e + "' and '" + t +
        "' too different to mix. Ensure all colors are of the same type.",
    ),
      ut(sa(n.parsed, o.parsed), r);
  },
  Gu = function (e, t) {
    return function (r) {
      return $(e, t, r);
    };
  };
function Wu(e) {
  if (typeof e == "number") return Gu;
  if (typeof e == "string") return U.test(e) ? oa : aa;
  if (Array.isArray(e)) return sa;
  if (typeof e == "object") return Yu;
}
function Ku(e, t, r) {
  for (var n = [], o = r || Wu(e[0]), a = e.length - 1, i = 0; i < a; i++) {
    var s = o(e[i], e[i + 1]);
    if (t) {
      var f = Array.isArray(t) ? t[i] : t;
      s = ut(f, s);
    }
    n.push(s);
  }
  return n;
}
function qu(e, t) {
  var r = e[0], n = e[1], o = t[0];
  return function (a) {
    return o(Pe(r, n, a));
  };
}
function Xu(e, t) {
  var r = e.length, n = r - 1;
  return function (o) {
    var a = 0, i = !1;
    if (o <= e[0] ? i = !0 : o >= e[n] && (a = n - 1, i = !0), !i) {
      for (var s = 1; s < r && !(e[s] > o || s === n); s++);
      a = s - 1;
    }
    var f = Pe(e[a], e[a + 1], o);
    return t[a](f);
  };
}
function Zr(e, t, r) {
  var n = r === void 0 ? {} : r,
    o = n.clamp,
    a = o === void 0 ? !0 : o,
    i = n.ease,
    s = n.mixer,
    f = e.length;
  k(f === t.length, "Both input and output ranges must be the same length"),
    k(
      !i || !Array.isArray(i) || i.length === f - 1,
      "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.",
    ),
    e[0] > e[f - 1] &&
    (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
  var u = Ku(t, i, s), l = f === 2 ? qu(e, u) : Xu(e, u);
  return a
    ? function (c) {
      return l(st(e[0], e[f - 1], c));
    }
    : l;
}
var Bt = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Jr = function (e) {
    return function (t) {
      return t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
    };
  },
  Zu = function (e) {
    return function (t) {
      return Math.pow(t, e);
    };
  },
  fa = function (e) {
    return function (t) {
      return t * t * ((e + 1) * t - e);
    };
  },
  Ju = function (e) {
    var t = fa(e);
    return function (r) {
      return (r *= 2) < 1 ? .5 * t(r) : .5 * (2 - Math.pow(2, -10 * (r - 1)));
    };
  },
  la = 1.525,
  Qu = 4 / 11,
  ef = 8 / 11,
  tf = 9 / 10,
  Ft = function (e) {
    return e;
  },
  jt = Zu(2),
  ca = Bt(jt),
  Qr = Jr(jt),
  en = function (e) {
    return 1 - Math.sin(Math.acos(e));
  },
  kt = Bt(en),
  da = Jr(kt),
  Ut = fa(la),
  pa = Bt(Ut),
  va = Jr(Ut),
  ha = Ju(la),
  rf = 4356 / 361,
  nf = 35442 / 1805,
  of = 16061 / 1805,
  ft = function (e) {
    if (e === 1 || e === 0) return e;
    var t = e * e;
    return e < Qu ? 7.5625 * t
    : e < ef ? 9.075 * t - 9.9 * e + 3.4
    : e < tf
      ? rf * t - nf * e + of
      : 10.8 * e * e - 20.52 * e + 10.72;
  },
  ma = Bt(ft),
  ya = function (e) {
    return e < .5 ? .5 * (1 - ft(1 - e * 2)) : .5 * ft(e * 2 - 1) + .5;
  };
function af(e, t) {
  return e.map(function () {
    return t || Qr;
  }).splice(0, e.length - 1);
}
function sf(e) {
  var t = e.length;
  return e.map(function (r, n) {
    return n !== 0 ? n / (t - 1) : 0;
  });
}
function uf(e, t) {
  return e.map(function (r) {
    return r * t;
  });
}
function $t(e) {
  var t = e.from,
    r = t === void 0 ? 0 : t,
    n = e.to,
    o = n === void 0 ? 1 : n,
    a = e.ease,
    i = e.offset,
    s = e.duration,
    f = s === void 0 ? 300 : s,
    u = { done: !1, value: r },
    l = Array.isArray(o) ? o : [r, o],
    c = uf(i && i.length === l.length ? i : sf(l), f);
  function d() {
    return Zr(c, l, { ease: Array.isArray(a) ? a : af(l, a) });
  }
  var p = d();
  return {
    next: function (v) {
      return u.value = p(v), u.done = v >= f, u;
    },
    flipTarget: function () {
      l.reverse(), p = d();
    },
  };
}
function ff(e) {
  var t = e.velocity,
    r = t === void 0 ? 0 : t,
    n = e.from,
    o = n === void 0 ? 0 : n,
    a = e.power,
    i = a === void 0 ? .8 : a,
    s = e.timeConstant,
    f = s === void 0 ? 350 : s,
    u = e.restDelta,
    l = u === void 0 ? .5 : u,
    c = e.modifyTarget,
    d = { done: !1, value: o },
    p = i * r,
    v = o + p,
    m = c === void 0 ? v : c(v);
  return m !== v && (p = m - o), {
    next: function (h) {
      var g = -p * Math.exp(-h / f);
      return d.done = !(g > l || g < -l), d.value = d.done ? m : m + g, d;
    },
    flipTarget: function () {},
  };
}
var ga = { keyframes: $t, spring: qr, decay: ff };
function lf(e) {
  if (Array.isArray(e.to)) return $t;
  if (ga[e.type]) return ga[e.type];
  var t = new Set(Object.keys(e));
  return t.has("ease") || t.has("duration") && !t.has("dampingRatio")
    ? $t
    : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") ||
        t.has("damping") || t.has("restSpeed") || t.has("restDelta")
    ? qr
    : $t;
}
function ba(e, t, r) {
  return r === void 0 && (r = 0), e - t - r;
}
function cf(e, t, r, n) {
  return r === void 0 && (r = 0),
    n === void 0 && (n = !0),
    n ? ba(t + -e, t, r) : t - (e - t) + r;
}
function df(e, t, r, n) {
  return n ? e >= t + r : e <= -r;
}
var pf = function (e) {
  var t = function (r) {
    var n = r.delta;
    return e(n);
  };
  return {
    start: function () {
      return J.update(t, !0, !0);
    },
    stop: function () {
      return Le.update(t);
    },
  };
};
function tn(e) {
  var t,
    r,
    n = e.from,
    o = e.autoplay,
    a = o === void 0 ? !0 : o,
    i = e.driver,
    s = i === void 0 ? pf : i,
    f = e.elapsed,
    u = f === void 0 ? 0 : f,
    l = e.repeat,
    c = l === void 0 ? 0 : l,
    d = e.repeatType,
    p = d === void 0 ? "loop" : d,
    v = e.repeatDelay,
    m = v === void 0 ? 0 : v,
    h = e.onPlay,
    g = e.onStop,
    b = e.onComplete,
    E = e.onRepeat,
    P = e.onUpdate,
    w = j(e, [
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
    S = w.to,
    C,
    M = 0,
    A = w.duration,
    V,
    B = !1,
    G = !0,
    Q,
    le = lf(w);
  ((r = (t = le).needsInterpolation) === null || r === void 0
    ? void 0
    : r.call(t, n, S)) &&
    (Q = Zr([0, 100], [n, S], { clamp: !1 }), n = 0, S = 100);
  var ge = le(y(y({}, w), { from: n, to: S }));
  function D() {
    M++,
      p === "reverse"
        ? (G = M % 2 == 0, u = cf(u, A, m, G))
        : (u = ba(u, A, m), p === "mirror" && ge.flipTarget()),
      B = !1,
      E && E();
  }
  function ie() {
    C.stop(), b && b();
  }
  function me(W) {
    if (G || (W = -W), u += W, !B) {
      var Oe = ge.next(Math.max(0, u));
      V = Oe.value, Q && (V = Q(V)), B = G ? Oe.done : u <= 0;
    }
    P == null || P(V),
      B && (M === 0 && (A ?? (A = u)), M < c ? df(u, A, m, G) && D() : ie());
  }
  function cr() {
    h == null || h(), C = s(me), C.start();
  }
  return a && cr(), {
    stop: function () {
      g == null || g(), C.stop();
    },
  };
}
function rn(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function xa(e) {
  var t = e.from,
    r = t === void 0 ? 0 : t,
    n = e.velocity,
    o = n === void 0 ? 0 : n,
    a = e.min,
    i = e.max,
    s = e.power,
    f = s === void 0 ? .8 : s,
    u = e.timeConstant,
    l = u === void 0 ? 750 : u,
    c = e.bounceStiffness,
    d = c === void 0 ? 500 : c,
    p = e.bounceDamping,
    v = p === void 0 ? 10 : p,
    m = e.restDelta,
    h = m === void 0 ? 1 : m,
    g = e.modifyTarget,
    b = e.driver,
    E = e.onUpdate,
    P = e.onComplete,
    w;
  function S(D) {
    return a !== void 0 && D < a || i !== void 0 && D > i;
  }
  function C(D) {
    return a === void 0
      ? i
      : i === void 0 || Math.abs(a - D) < Math.abs(i - D)
      ? a
      : i;
  }
  function M(D) {
    w == null || w.stop(),
      w = tn(y(y({}, D), {
        driver: b,
        onUpdate: function (ie) {
          var me;
          E == null || E(ie),
            (me = D.onUpdate) === null || me === void 0 || me.call(D, ie);
        },
        onComplete: P,
      }));
  }
  function A(D) {
    M(y({ type: "spring", stiffness: d, damping: v, restDelta: h }, D));
  }
  if (S(r)) A({ from: r, velocity: o, to: C(r) });
  else {
    var V = f * o + r;
    typeof g != "undefined" && (V = g(V));
    var B = C(V),
      G = B === a ? -1 : 1,
      Q,
      le,
      ge = function (D) {
        Q = le,
          le = D,
          o = rn(D - Q, De().delta),
          (G === 1 && D > B || G === -1 && D < B) &&
          A({ from: D, to: B, velocity: o });
      };
    M({
      type: "decay",
      from: r,
      velocity: o,
      timeConstant: l,
      power: f,
      restDelta: h,
      modifyTarget: g,
      onUpdate: S(V) ? ge : void 0,
    });
  }
  return {
    stop: function () {
      return w == null ? void 0 : w.stop();
    },
  };
}
var vf = function (e) {
    return e;
  },
  wa = function (e) {
    return e === void 0 && (e = vf), function (t, r, n) {
      var o = r - n, a = -(0 - t + 1) * (0 - e(Math.abs(o)));
      return o <= 0 ? r + a : r - a;
    };
  },
  Op = wa(),
  Vp = wa(Math.sqrt);
var nn = function (e) {
    return e.hasOwnProperty("x") && e.hasOwnProperty("y");
  },
  Sa = function (e) {
    return nn(e) && e.hasOwnProperty("z");
  },
  zt = function (e, t) {
    return Math.abs(e - t);
  };
function on(e, t) {
  if (Xr(e) && Xr(t)) return zt(e, t);
  if (nn(e) && nn(t)) {
    var r = zt(e.x, t.x),
      n = zt(e.y, t.y),
      o = Sa(e) && Sa(t) ? zt(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2) + Math.pow(o, 2));
  }
}
var Ea = function (e, t) {
    return 1 - 3 * t + 3 * e;
  },
  Ca = function (e, t) {
    return 3 * t - 6 * e;
  },
  Pa = function (e) {
    return 3 * e;
  },
  Ht = function (e, t, r) {
    return ((Ea(t, r) * e + Ca(t, r)) * e + Pa(t)) * e;
  },
  Ta = function (e, t, r) {
    return 3 * Ea(t, r) * e * e + 2 * Ca(t, r) * e + Pa(t);
  },
  hf = 1e-7,
  mf = 10;
function yf(e, t, r, n, o) {
  var a, i, s = 0;
  do i = t + (r - t) / 2, a = Ht(i, n, o) - e, a > 0 ? r = i : t = i; while (
    Math.abs(a) > hf && ++s < mf
  );
  return i;
}
var gf = 8, bf = .001;
function xf(e, t, r, n) {
  for (var o = 0; o < gf; ++o) {
    var a = Ta(t, r, n);
    if (a === 0) return t;
    var i = Ht(t, r, n) - e;
    t -= i / a;
  }
  return t;
}
var Yt = 11, Gt = 1 / (Yt - 1);
function Aa(e, t, r, n) {
  if (e === t && r === n) return Ft;
  for (var o = new Float32Array(Yt), a = 0; a < Yt; ++a) {
    o[a] = Ht(a * Gt, e, r);
  }
  function i(s) {
    for (var f = 0, u = 1, l = Yt - 1; u !== l && o[u] <= s; ++u) f += Gt;
    --u;
    var c = (s - o[u]) / (o[u + 1] - o[u]), d = f + c * Gt, p = Ta(d, e, r);
    return p >= bf ? xf(s, d, e, r) : p === 0 ? d : yf(s, f, f + Gt, e, r);
  }
  return function (s) {
    return s === 0 || s === 1 ? s : Ht(i(s), t, n);
  };
}
var x = be($e()),
  un = function (e) {
    return typeof e == "object" && e.hasOwnProperty("current");
  },
  lt = function () {
    function e() {
      this.subscriptions = new Set();
    }
    return e.prototype.add = function (t) {
      var r = this;
      return this.subscriptions.add(t), function () {
        return void r.subscriptions.delete(t);
      };
    },
      e.prototype.notify = function (t, r, n) {
        var o, a;
        if (!!this.subscriptions.size) {
          try {
            for (
              var i = jo(this.subscriptions), s = i.next();
              !s.done;
              s = i.next()
            ) {
              var f = s.value;
              f(t, r, n);
            }
          } catch (u) {
            o = { error: u };
          } finally {
            try {
              s && !s.done && (a = i.return) && a.call(i);
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
  Tf = function (e) {
    return !isNaN(parseFloat(e));
  },
  fn = function () {
    function e(t) {
      var r = this;
      this.timeDelta = 0,
        this.lastUpdated = 0,
        this.updateSubscribers = new lt(),
        this.renderSubscribers = new lt(),
        this.canTrackVelocity = !1,
        this.updateAndNotify = function (n, o) {
          o === void 0 && (o = !0),
            r.prev = r.current,
            r.current = n,
            r.prev !== r.current && r.updateSubscribers.notify(r.current),
            o && r.renderSubscribers.notify(r.current);
          var a = De(), i = a.delta, s = a.timestamp;
          r.lastUpdated !== s &&
            (r.timeDelta = i,
              r.lastUpdated = s,
              J.postRender(r.scheduleVelocityCheck));
        },
        this.scheduleVelocityCheck = function () {
          return J.postRender(r.velocityCheck);
        },
        this.velocityCheck = function (n) {
          var o = n.timestamp;
          o !== r.lastUpdated && (r.prev = r.current);
        },
        this.current = t,
        this.canTrackVelocity = Tf(this.current);
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
      e.prototype.set = function (t, r) {
        r === void 0 && (r = !0),
          !r || !this.passiveEffect
            ? this.updateAndNotify(t, r)
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
          ? rn(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
          : 0;
      },
      e.prototype.start = function (t) {
        var r = this;
        return this.stop(),
          new Promise(function (n) {
            r.stopAnimation = t(n);
          }).then(function () {
            return r.clearAnimation();
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
function Te(e) {
  return new fn(e);
}
var Ma = function () {
  function e(t, r) {
    var n = this;
    this.children = new Set(),
      this.isHoverEventsEnabled = !0,
      this.baseTarget = {},
      this.latest = {},
      this.values = new Map(),
      this.valueSubscriptions = new Map(),
      this.config = {},
      this.isMounted = !1,
      this.update = function () {
        return n.config.onUpdate(n.latest);
      },
      this.triggerRender = function () {
        return n.render();
      },
      this.ref = function (o) {
        o ? n.mount(o) : n.unmount(),
          !!n.externalRef &&
          (typeof n.externalRef == "function"
            ? n.externalRef(o)
            : un(n.externalRef) && (n.externalRef.current = o));
      },
      this.parent = t,
      this.rootParent = t ? t.rootParent : this,
      this.treePath = t ? ne(t.treePath, [t]) : [],
      this.depth = t ? t.depth + 1 : 0,
      this.externalRef = r;
  }
  return e.prototype.suspendHoverEvents = function () {
    var t = this;
    this.isHoverEventsEnabled = !1,
      J.postRender(function () {
        return setTimeout(function () {
          return t.isHoverEventsEnabled = !0;
        }, 10);
      });
  },
    e.prototype.getVariantPayload = function () {
      return this.config.custom;
    },
    e.prototype.getVariant = function (t) {
      var r;
      return (r = this.config.variants) === null || r === void 0 ? void 0
      : r[t];
    },
    e.prototype.addVariantChild = function (t) {
      var r = this;
      return this.variantChildren || (this.variantChildren = new Set()),
        this.variantChildren.add(t),
        function () {
          return r.variantChildren.delete(t);
        };
    },
    e.prototype.addVariantChildOrder = function (t) {
      this.variantChildrenOrder || (this.variantChildrenOrder = new Set()),
        this.variantChildrenOrder.add(t);
    },
    e.prototype.onAnimationStart = function () {
      var t, r;
      (r = (t = this.config).onAnimationStart) === null || r === void 0 ||
        r.call(t);
    },
    e.prototype.onAnimationComplete = function () {
      var t, r;
      this.isMounted &&
        ((r = (t = this.config).onAnimationComplete) === null || r === void 0 ||
          r.call(t));
    },
    e.prototype.getDefaultTransition = function () {
      return this.config.transition;
    },
    e.prototype.subscribe = function (t) {
      var r = this;
      return this.children.add(t), function () {
        return r.children.delete(t);
      };
    },
    e.prototype.hasValue = function (t) {
      return this.values.has(t);
    },
    e.prototype.addValue = function (t, r) {
      this.hasValue(t) && this.removeValue(t),
        this.values.set(t, r),
        this.setSingleStaticValue(t, r.get()),
        this.subscribeToValue(t, r);
    },
    e.prototype.removeValue = function (t) {
      var r;
      (r = this.valueSubscriptions.get(t)) === null || r === void 0 || r(),
        this.valueSubscriptions.delete(t),
        this.values.delete(t),
        delete this.latest[t];
    },
    e.prototype.getValue = function (t, r) {
      var n = this.values.get(t);
      return n === void 0 && r !== void 0 &&
        (n = new fn(r), this.addValue(t, n)),
        n;
    },
    e.prototype.forEachValue = function (t) {
      this.values.forEach(t);
    },
    e.prototype.getInstance = function () {
      return this.element;
    },
    e.prototype.updateConfig = function (t) {
      t === void 0 && (t = {}), this.config = y({}, t);
    },
    e.prototype.getBaseValue = function (t, r) {
      return this.baseTarget[t];
    },
    e.prototype.setSingleStaticValue = function (t, r) {
      this.latest[t] = r;
    },
    e.prototype.setStaticValues = function (t, r) {
      if (typeof t == "string") this.setSingleStaticValue(t, r);
      else for (var n in t) this.setSingleStaticValue(n, t[n]);
    },
    e.prototype.scheduleRender = function () {
      J.render(this.triggerRender, !1, !0);
    },
    e.prototype.scheduleUpdateLayoutDelta = function () {
      J.preRender(this.rootParent.updateLayoutDelta, !1, !0);
    },
    e.prototype.subscribeToValue = function (t, r) {
      var n = this,
        o = function (f) {
          n.setSingleStaticValue(t, f),
            n.element && n.config.onUpdate && J.update(n.update, !1, !0);
        },
        a = function () {
          n.element && n.scheduleRender();
        },
        i = r.onChange(o),
        s = r.onRenderRequest(a);
      this.valueSubscriptions.set(t, function () {
        i(), s();
      });
    },
    e.prototype.mount = function (t) {
      k(
        !!t,
        "No ref found. Ensure components created with motion.custom forward refs using React.forwardRef",
      ),
        this.parent && (this.removeFromParent = this.parent.subscribe(this)),
        this.element = this.current = t;
    },
    e.prototype.unmount = function () {
      var t = this;
      this.forEachValue(function (r, n) {
        return t.removeValue(n);
      }),
        Le.update(this.update),
        Le.render(this.render),
        this.removeFromParent && this.removeFromParent();
    },
    e;
}();
function Af(e) {
  return e;
}
function Ra(e) {
  var t = e.top, r = e.left, n = e.right, o = e.bottom;
  return { x: { min: r, max: n }, y: { min: t, max: o } };
}
function Of(e) {
  var t = e.x, r = e.y;
  return { top: r.min, bottom: r.max, left: t.min, right: t.max };
}
function Vf(e, t) {
  var r = e.top, n = e.left, o = e.bottom, a = e.right;
  t === void 0 && (t = Af);
  var i = t({ x: n, y: r }), s = t({ x: a, y: o });
  return { top: i.y, left: i.x, bottom: s.y, right: s.x };
}
function Mf() {
  return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
}
function _a(e) {
  return { x: y({}, e.x), y: y({}, e.y) };
}
var La = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
function ln() {
  return { x: y({}, La), y: y({}, La) };
}
var Rf = {
    test: function (e) {
      return e === "auto";
    },
    parse: function (e) {
      return e;
    },
  },
  Da = y(y({}, ye), { transform: Math.round }),
  _f = {
    color: U,
    backgroundColor: U,
    outlineColor: U,
    fill: U,
    stroke: U,
    borderColor: U,
    borderTopColor: U,
    borderRightColor: U,
    borderBottomColor: U,
    borderLeftColor: U,
    borderWidth: T,
    borderTopWidth: T,
    borderRightWidth: T,
    borderBottomWidth: T,
    borderLeftWidth: T,
    borderRadius: T,
    radius: T,
    borderTopLeftRadius: T,
    borderTopRightRadius: T,
    borderBottomRightRadius: T,
    borderBottomLeftRadius: T,
    width: T,
    maxWidth: T,
    height: T,
    maxHeight: T,
    size: T,
    top: T,
    right: T,
    bottom: T,
    left: T,
    padding: T,
    paddingTop: T,
    paddingRight: T,
    paddingBottom: T,
    paddingLeft: T,
    margin: T,
    marginTop: T,
    marginRight: T,
    marginBottom: T,
    marginLeft: T,
    rotate: he,
    rotateX: he,
    rotateY: he,
    rotateZ: he,
    scale: at,
    scaleX: at,
    scaleY: at,
    scaleZ: at,
    skew: he,
    skewX: he,
    skewY: he,
    distance: T,
    translateX: T,
    translateY: T,
    translateZ: T,
    x: T,
    y: T,
    z: T,
    perspective: T,
    transformPerspective: T,
    opacity: Ne,
    originX: Hr,
    originY: Hr,
    originZ: T,
    zIndex: Da,
    filter: It,
    WebkitFilter: It,
    fillOpacity: Ne,
    strokeOpacity: Ne,
    numOctaves: Da,
  },
  Na = [ye, T, Se, he, Go, Yo, Rf],
  Ia = function (e) {
    return function (t) {
      return t.test(e);
    };
  },
  Wt = function (e) {
    return Na.find(Ia(e));
  },
  Lf = ne(Na, [U, oe]),
  Df = function (e) {
    return Lf.find(Ia(e));
  },
  cn = function (e) {
    return _f[e];
  },
  Nf = function (e, t) {
    return t && typeof e == "number" ? t.transform(e) : e;
  };
function Ba(e, t) {
  var r, n = cn(e);
  return n !== It && (n = oe),
    (r = n.getAnimatableNone) === null || r === void 0 ? void 0 : r.call(n, t);
}
var dn = ["", "X", "Y", "Z"],
  If = ["perspective", "translate", "scale", "rotate", "skew"],
  ct = ["transformPerspective", "x", "y", "z"];
If.forEach(function (e) {
  dn.forEach(function (t) {
    var r = e + t;
    ct.push(r);
  });
});
function Bf(e, t) {
  return ct.indexOf(e) - ct.indexOf(t);
}
var Ff = new Set(ct);
function Kt(e) {
  return Ff.has(e);
}
var jf = new Set(["originX", "originY", "originZ"]);
function Fa(e) {
  return jf.has(e);
}
var kf = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective",
};
function Uf(e, t, r, n, o, a) {
  o === void 0 && (o = !0), a === void 0 && (a = !0);
  var i = "";
  t.sort(Bf);
  for (var s = !1, f = t.length, u = 0; u < f; u++) {
    var l = t[u];
    i += (kf[l] || l) + "(" + e[l] + ") ", l === "z" && (s = !0);
  }
  return !s && o ? i += "translateZ(0)" : i = i.trim(),
    r ? i = r(e, n ? "" : i) : a && n && (i = "none"),
    i;
}
function $f(e) {
  var t = e.originX,
    r = t === void 0 ? "50%" : t,
    n = e.originY,
    o = n === void 0 ? "50%" : n,
    a = e.originZ,
    i = a === void 0 ? 0 : a;
  return r + " " + o + " " + i;
}
function pn(e, t, r) {
  var n = e.x,
    o = e.y,
    a = n.translate / t.x,
    i = o.translate / t.y,
    s = "translate3d(" + a + "px, " + i + "px, 0) ";
  if (r) {
    var f = r.rotate, u = r.rotateX, l = r.rotateY;
    f && (s += "rotate(" + f + ") "),
      u && (s += "rotateX(" + u + ") "),
      l && (s += "rotateY(" + l + ") ");
  }
  return s += "scale(" + n.scale + ", " + o.scale + ")",
    !r && s === ja ? "" : s;
}
var ja = pn(ln(), { x: 1, y: 1 });
function zf(e) {
  var t = e.x, r = e.y;
  return t.origin * 100 + "% " + r.origin * 100 + "% 0";
}
function ka(e) {
  return e.startsWith("--");
}
function vn(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
var Ua = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Hf(e) {
  var t = Ua.exec(e);
  if (!t) return [];
  var r = H(t, 3), n = r[1], o = r[2];
  return [n, o];
}
var Yf = 4;
function hn(e, t, r) {
  r === void 0 && (r = 1),
    k(
      r <= Yf,
      'Max CSS variable fallback depth detected in property "' + e +
        '". This may indicate a circular fallback dependency.',
    );
  var n = H(Hf(e), 2), o = n[0], a = n[1];
  if (!!o) {
    var i = window.getComputedStyle(t).getPropertyValue(o);
    return i ? i.trim() : vn(a) ? hn(a, t, r + 1) : a;
  }
}
function Gf(e, t, r) {
  var n, o = j(t, []), a = e.getInstance();
  if (!(a instanceof HTMLElement)) return { target: o, transitionEnd: r };
  r && (r = y({}, r)),
    e.forEachValue(function (u) {
      var l = u.get();
      if (!!vn(l)) {
        var c = hn(l, a);
        c && u.set(c);
      }
    });
  for (var i in o) {
    var s = o[i];
    if (!!vn(s)) {
      var f = hn(s, a);
      !f ||
        (o[i] = f, r && ((n = r[i]) !== null && n !== void 0 || (r[i] = s)));
    }
  }
  return { target: o, transitionEnd: r };
}
function $a(e, t) {
  return e / (t.max - t.min) * 100;
}
function Wf(e, t) {
  if (typeof e == "string") {
    if (T.test(e)) e = parseFloat(e);
    else return e;
  }
  var r = $a(e, t.x), n = $a(e, t.y);
  return r + "% " + n + "%";
}
var za = "_$css";
function Kf(e, t, r, n) {
  var o = e, a = e.includes("var("), i = [];
  a && (e = e.replace(Ua, function (m) {
    return i.push(m), za;
  }));
  var s = oe.parse(e);
  if (s.length > 5) return o;
  var f = oe.createTransformer(e),
    u = typeof s[0] != "number" ? 1 : 0,
    l = r.x.scale * n.x,
    c = r.y.scale * n.y;
  s[0 + u] /= l, s[1 + u] /= c;
  var d = $(l, c, .5);
  typeof s[2 + u] == "number" && (s[2 + u] /= d),
    typeof s[3 + u] == "number" && (s[3 + u] /= d);
  var p = f(s);
  if (a) {
    var v = 0;
    p = p.replace(za, function () {
      var m = i[v];
      return v++, m;
    });
  }
  return p;
}
var dt = { process: Wf },
  qt = {
    borderRadius: y(y({}, dt), {
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    }),
    borderTopLeftRadius: dt,
    borderTopRightRadius: dt,
    borderBottomLeftRadius: dt,
    borderBottomRightRadius: dt,
    boxShadow: { process: Kf },
  };
function Ha(e, t, r, n, o, a, i, s, f, u, l, c) {
  var d = i.enableHardwareAcceleration,
    p = i.transformTemplate,
    v = i.allowTransformNone;
  a.length = 0;
  var m = !1, h = !1, g = !0;
  for (var b in e) {
    var E = e[b], P = cn(b), w = Nf(E, P);
    if (Kt(b)) {
      if (m = !0, n[b] = w, a.push(b), !g) continue;
      var S = P.default !== void 0 ? P.default : 0;
      E !== S && (g = !1);
    } else if (Fa(b)) o[b] = w, h = !0;
    else if (b !== "transform" || typeof E != "function") {
      var C = ka(b) ? r : t;
      if (s && qt[b]) {
        var M = qt[b].process(E, c, f, l), A = qt[b].applyTo;
        if (A) for (var V = A.length, B = 0; B < V; B++) C[A[B]] = M;
        else C[b] = M;
      } else C[b] = w;
    }
  }
  s
    ? (t.transform = pn(u, l, m ? n : void 0),
      p && (t.transform = p(n, t.transform)),
      t.transformOrigin = zf(u))
    : (m && (t.transform = Uf(n, a, p, g, d, v)),
      h && (t.transformOrigin = $f(o)));
}
function Ya(e, t) {
  e.min = t.min, e.max = t.max;
}
function qf(e, t) {
  Ya(e.x, t.x), Ya(e.y, t.y);
}
function Xt(e, t, r) {
  var n = e - r, o = t * n;
  return r + o;
}
function Ga(e, t, r, n, o) {
  return o !== void 0 && (e = Xt(e, o, n)), Xt(e, r, n) + t;
}
function mn(e, t, r, n, o) {
  t === void 0 && (t = 0),
    r === void 0 && (r = 1),
    e.min = Ga(e.min, t, r, n, o),
    e.max = Ga(e.max, t, r, n, o);
}
function Xf(e, t) {
  var r = t.x, n = t.y;
  mn(e.x, r.translate, r.scale, r.originPoint),
    mn(e.y, n.translate, n.scale, n.originPoint);
}
function Wa(e, t, r, n) {
  var o = H(n, 3), a = o[0], i = o[1], s = o[2];
  e.min = t.min, e.max = t.max;
  var f = r[s] !== void 0 ? r[s] : .5, u = $(t.min, t.max, f);
  mn(e, r[a], r[i], u, r.scale);
}
var Ka = ["x", "scaleX", "originX"], qa = ["y", "scaleY", "originY"];
function Zf(e, t, r) {
  Wa(e.x, t.x, r, Ka), Wa(e.y, t.y, r, qa);
}
function Xa(e, t, r, n, o) {
  return e -= t, e = Xt(e, 1 / r, n), o !== void 0 && (e = Xt(e, 1 / o, n)), e;
}
function Jf(e, t, r, n, o) {
  t === void 0 && (t = 0), r === void 0 && (r = 1), n === void 0 && (n = .5);
  var a = $(e.min, e.max, n) - t;
  e.min = Xa(e.min, t, r, a, o), e.max = Xa(e.max, t, r, a, o);
}
function Za(e, t, r) {
  var n = H(r, 3), o = n[0], a = n[1], i = n[2];
  Jf(e, t[o], t[a], t[i], t.scale);
}
function Qf(e, t) {
  Za(e.x, t, Ka), Za(e.y, t, qa);
}
function el(e, t, r) {
  var n = r.length;
  if (!!n) {
    t.x = t.y = 1;
    for (var o = 0; o < n; o++) {
      var a = r[o].delta;
      t.x *= a.x.scale, t.y *= a.y.scale, Xf(e, a);
    }
  }
}
var tl = function (e) {
  return st(0, 1, e);
};
function Ja(e, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = .01), on(e, t) < r;
}
function Zt(e) {
  return e.max - e.min;
}
function Qa(e, t) {
  var r = .5, n = Zt(e), o = Zt(t);
  return o > n
    ? r = Pe(t.min, t.max - n, e.min)
    : n > o && (r = Pe(e.min, e.max - o, t.min)),
    tl(r);
}
function ei(e, t, r, n) {
  e.origin = n === void 0 ? Qa(t, r) : n,
    e.originPoint = $(t.min, t.max, e.origin),
    e.scale = Zt(r) / Zt(t),
    Ja(e.scale, 1, 1e-4) && (e.scale = 1),
    e.translate = $(r.min, r.max, e.origin) - e.originPoint,
    Ja(e.translate) && (e.translate = 0);
}
function ti(e, t, r, n) {
  ei(e.x, t.x, r.x, n), ei(e.y, t.y, r.y, n);
}
function ae(e) {
  return [e("x"), e("y")];
}
function ri(e, t) {
  var r = e.getBoundingClientRect();
  return Ra(Vf(r, t));
}
var yn = function (e) {
    return Array.isArray(e);
  },
  rl = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
  ni = function (e) {
    return rl.has(e);
  },
  nl = function (e) {
    return Object.keys(e).some(ni);
  },
  oi = function (e, t) {
    e.set(t, !1), e.set(t);
  },
  Jt = function (e) {
    return e === ye || e === T;
  },
  ai;
(function (e) {
  e.width = "width",
    e.height = "height",
    e.left = "left",
    e.right = "right",
    e.top = "top",
    e.bottom = "bottom";
})(ai || (ai = {}));
var ii = function (e, t) {
    return parseFloat(e.split(", ")[t]);
  },
  si = function (e, t) {
    return function (r, n) {
      var o = n.transform;
      if (o === "none" || !o) return 0;
      var a = o.match(/^matrix3d\((.+)\)$/);
      if (a) return ii(a[1], t);
      var i = o.match(/^matrix\((.+)\)$/);
      return i ? ii(i[1], e) : 0;
    };
  },
  ol = new Set(["x", "y", "z"]),
  al = ct.filter(function (e) {
    return !ol.has(e);
  });
function il(e) {
  var t = [];
  return al.forEach(function (r) {
    var n = e.getValue(r);
    n !== void 0 &&
      (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }),
    t.length && e.render(),
    t;
}
var ui = {
    width: function (e) {
      var t = e.x;
      return t.max - t.min;
    },
    height: function (e) {
      var t = e.y;
      return t.max - t.min;
    },
    top: function (e, t) {
      var r = t.top;
      return parseFloat(r);
    },
    left: function (e, t) {
      var r = t.left;
      return parseFloat(r);
    },
    bottom: function (e, t) {
      var r = e.y, n = t.top;
      return parseFloat(n) + (r.max - r.min);
    },
    right: function (e, t) {
      var r = e.x, n = t.left;
      return parseFloat(n) + (r.max - r.min);
    },
    x: si(4, 13),
    y: si(5, 14),
  },
  sl = function (e, t, r) {
    var n = t.getBoundingBox(),
      o = t.getComputedStyle(),
      a = o.display,
      i = o.top,
      s = o.left,
      f = o.bottom,
      u = o.right,
      l = o.transform,
      c = { top: i, left: s, bottom: f, right: u, transform: l };
    a === "none" && t.setStaticValues("display", e.display || "block"),
      t.render();
    var d = t.getBoundingBox();
    return r.forEach(function (p) {
      var v = t.getValue(p);
      oi(v, ui[p](n, c)), e[p] = ui[p](d, o);
    }),
      e;
  },
  ul = function (e, t, r, n) {
    r === void 0 && (r = {}),
      n === void 0 && (n = {}),
      t = y({}, t),
      n = y({}, n);
    var o = Object.keys(t).filter(ni), a = [], i = !1, s = [];
    if (
      o.forEach(function (u) {
        var l = e.getValue(u);
        if (!!e.hasValue(u)) {
          var c = r[u], d = t[u], p = Wt(c), v;
          if (yn(d)) {
            for (var m = d.length, h = d[0] === null ? 1 : 0; h < m; h++) {
              v
                ? k(Wt(d[h]) === v, "All keyframes must be of the same type")
                : (v = Wt(d[h]),
                  k(
                    v === p || Jt(p) && Jt(v),
                    "Keyframes must be of the same dimension as the current value",
                  ));
            }
          } else v = Wt(d);
          if (p !== v) {
            if (Jt(p) && Jt(v)) {
              var g = l.get();
              typeof g == "string" && l.set(parseFloat(g)),
                typeof d == "string"
                  ? t[u] = parseFloat(d)
                  : Array.isArray(d) && v === T && (t[u] = d.map(parseFloat));
            } else {
              (p == null ? void 0 : p.transform) && (v == null
                  ? void 0
                  : v.transform) && (c === 0 || d === 0)
                ? c === 0 ? l.set(v.transform(c)) : t[u] = p.transform(d)
                : (i || (a = il(e), i = !0),
                  s.push(u),
                  n[u] = n[u] !== void 0 ? n[u] : t[u],
                  oi(l, d));
            }
          }
        }
      }), s.length
    ) {
      var f = sl(t, e, s);
      return a.length && a.forEach(function (u) {
        var l = H(u, 2), c = l[0], d = l[1];
        e.getValue(c).set(d);
      }),
        e.render(),
        { target: f, transitionEnd: n };
    } else return { target: t, transitionEnd: n };
  };
function fl(e, t, r, n) {
  return nl(t) ? ul(e, t, r, n) : { target: t, transitionEnd: n };
}
var ll = function (e, t, r, n) {
    var o = Gf(e, t, n);
    return t = o.target, n = o.transitionEnd, fl(e, t, r, n);
  },
  cl = function (e) {
    return /^\-?\d*\.?\d+$/.test(e);
  };
var dl = function (e) {
  return yn(e) ? e[e.length - 1] || 0 : e;
};
function fi(e) {
  return Array.isArray(e);
}
function pl(e) {
  return typeof e == "string" || fi(e);
}
function vl(e) {
  var t = {};
  return e.forEachValue(function (r, n) {
    return t[n] = r.get();
  }),
    t;
}
function hl(e) {
  var t = {};
  return e.forEachValue(function (r, n) {
    return t[n] = r.getVelocity();
  }),
    t;
}
function gn(e, t, r) {
  return typeof t == "string" && (t = e.getVariant(t)),
    typeof t == "function" ? t(r ?? e.getVariantPayload(), vl(e), hl(e)) : t;
}
function ml(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Te(r));
}
function bn(e, t) {
  var r = gn(e, t),
    n = r ? e.makeTargetAnimatable(r, !1) : {},
    o = n.transitionEnd,
    a = o === void 0 ? {} : o,
    i = n.transition,
    s = j(n, ["transitionEnd", "transition"]);
  s = y(y({}, s), a);
  for (var f in s) {
    var u = dl(s[f]);
    ml(e, f, u);
  }
}
function xn(e, t) {
  var r = ne(t).reverse();
  r.forEach(function (n) {
    var o;
    bn(e, e.getVariant(n)),
      (o = e.variantChildren) === null || o === void 0 ||
      o.forEach(function (a) {
        xn(a, t);
      });
  });
}
function li(e, t) {
  if (Array.isArray(t)) return xn(e, t);
  if (typeof t == "string") return xn(e, [t]);
  bn(e, t);
}
function ci(e, t, r) {
  var n,
    o,
    a,
    i = Object.keys(t).filter(function (p) {
      return !e.hasValue(p);
    }),
    s = i.length;
  if (!!s) {
    for (var f = 0; f < s; f++) {
      var u = i[f], l = t[u], c = null;
      if (Array.isArray(l) && (c = l[0]), c === null) {
        var d = (n = r[u]) !== null && n !== void 0 ? n : e.readNativeValue(u);
        c = d !== void 0 ? d : t[u],
          k(
            c !== null,
            'No initial value for "' + u +
              '" can be inferred. Ensure an initial value for "' + u +
              '" is defined on the component.',
          );
      }
      typeof c == "string" && cl(c)
        ? c = parseFloat(c)
        : !Df(c) && oe.test(l) && (c = Ba(u, l)),
        e.addValue(u, Te(c)),
        (o = (a = r)[u]) !== null && o !== void 0 || (a[u] = c),
        e.baseTarget[u] = c;
    }
  }
}
function yl(e, t) {
  if (!!t) {
    var r = t[e] || t.default || t;
    return r.from;
  }
}
function di(e, t, r) {
  var n, o, a = {};
  for (var i in e) {
    a[i] = (n = yl(i, t)) !== null && n !== void 0
      ? n
      : (o = r.getValue(i)) === null || o === void 0
      ? void 0
      : o.get();
  }
  return a;
}
var Ie = function (e) {
    return e instanceof fn;
  },
  pi = function (e) {
    we(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.defaultConfig = {
        enableHardwareAcceleration: !0,
        allowTransformNone: !0,
      },
        r.style = {},
        r.reactStyle = {},
        r.vars = {},
        r.transform = {},
        r.transformOrigin = {},
        r.transformKeys = [],
        r.config = r.defaultConfig,
        r.isLayoutProjectionEnabled = !1,
        r.layoutUpdateListeners = new lt(),
        r.layoutMeasureListeners = new lt(),
        r.viewportBoxUpdateListeners = new lt(),
        r.hasViewportBoxUpdated = !1,
        r.targetBoxFinal = Mf(),
        r.treeScale = { x: 1, y: 1 },
        r.delta = ln(),
        r.deltaFinal = ln(),
        r.deltaTransform = ja,
        r.stopLayoutAxisAnimation = { x: function () {}, y: function () {} },
        r.isTargetBoxLocked = !1,
        r.updateLayoutDelta = function () {
          r.isLayoutProjectionEnabled && r.box && r.updateLayoutDeltas(),
            r.children.forEach(gl);
        },
        r;
    }
    return t.prototype.removeValue = function (r) {
      e.prototype.removeValue.call(this, r),
        delete this.vars[r],
        delete this.style[r];
    },
      t.prototype.clean = function () {
        this.style = {}, this.vars = {}, this.transform = {};
      },
      t.prototype.updateConfig = function (r) {
        r === void 0 && (r = {}), this.config = y(y({}, this.defaultConfig), r);
      },
      t.prototype.read = function (r) {
        var n = this.getComputedStyle();
        return (ka(r) ? n.getPropertyValue(r) : n[r]) || 0;
      },
      t.prototype.addValue = function (r, n) {
        e.prototype.addValue.call(this, r, n),
          r.startsWith("rotate") && (this.layoutOrigin = .5);
      },
      t.prototype.readNativeValue = function (r) {
        if (Kt(r)) {
          var n = cn(r);
          return n && n.default || 0;
        } elsereturn this.read(r);
      },
      t.prototype.getBaseValue = function (r, n) {
        var o,
          a = (o = n.style) === null || o === void 0
            ? void 0
            : o[r];
        return a !== void 0 && !Ie(a) ? a
        : e.prototype.getBaseValue.call(this, r, n);
      },
      t.prototype.makeTargetAnimatable = function (r, n) {
        n === void 0 && (n = !0);
        var o = r.transition,
          a = r.transitionEnd,
          i = j(r, ["transition", "transitionEnd"]),
          s = this.config.transformValues,
          f = di(i, o || {}, this);
        if (s && (a && (a = s(a)), i && (i = s(i)), f && (f = s(f))), n) {
          ci(this, i, f);
          var u = ll(this, i, f, a);
          a = u.transitionEnd, i = u.target;
        }
        return y({ transition: o, transitionEnd: a }, i);
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
      t.prototype.onLayoutUpdate = function (r) {
        return this.layoutUpdateListeners.add(r);
      },
      t.prototype.onLayoutMeasure = function (r) {
        return this.layoutMeasureListeners.add(r);
      },
      t.prototype.onViewportBoxUpdate = function (r) {
        return this.viewportBoxUpdateListeners.add(r);
      },
      t.prototype.layoutReady = function (r) {
        this.layoutUpdateListeners.notify(
          this.box,
          this.prevViewportBox || this.box,
          r,
        );
      },
      t.prototype.getBoundingBox = function () {
        var r = this.config.transformPagePoint;
        return ri(this.element, r);
      },
      t.prototype.getBoundingBoxWithoutTransforms = function () {
        var r = this.getBoundingBox();
        return Qf(r, this.latest), r;
      },
      t.prototype.getComputedStyle = function () {
        return window.getComputedStyle(this.element);
      },
      t.prototype.snapshotBoundingBox = function () {
        this.prevViewportBox = this.getBoundingBoxWithoutTransforms(),
          this.rebaseTargetBox(!1, this.prevViewportBox);
      },
      t.prototype.rebaseTargetBox = function (r, n) {
        var o = this;
        r === void 0 && (r = !1), n === void 0 && (n = this.box);
        var a = this.getAxisProgress(),
          i = a.x,
          s = a.y,
          f = this.box && !this.isTargetBoxLocked && !i.isAnimating() &&
            !s.isAnimating();
        (r || f) && ae(function (u) {
          var l = n[u], c = l.min, d = l.max;
          o.setAxisTarget(u, c, d);
        });
      },
      t.prototype.measureLayout = function () {
        var r = this;
        this.box = this.getBoundingBox(),
          this.boxCorrected = _a(this.box),
          this.targetBox || (this.targetBox = _a(this.box)),
          this.layoutMeasureListeners.notify(
            this.box,
            this.prevViewportBox || this.box,
          ),
          J.update(function () {
            return r.rebaseTargetBox();
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
        var r = this.config.transformTemplate;
        this.element.style.transform = r ? r({}, "") : "none",
          this.scheduleRender();
      },
      t.prototype.setAxisTarget = function (r, n, o) {
        var a = this.targetBox[r];
        a.min = n,
          a.max = o,
          this.hasViewportBoxUpdated = !0,
          this.rootParent.scheduleUpdateLayoutDelta();
      },
      t.prototype.getAxisProgress = function () {
        return this.axisProgress ||
          (this.axisProgress = { x: Te(0), y: Te(0) }),
          this.axisProgress;
      },
      t.prototype.startLayoutAxisAnimation = function (r, n) {
        var o = this,
          a,
          i = this.getAxisProgress()[r],
          s = this.targetBox[r],
          f = s.min,
          u = s.max,
          l = u - f;
        return i.clearListeners(),
          i.set(f),
          i.set(f),
          i.onChange(function (c) {
            return o.setAxisTarget(r, c, c + l);
          }),
          (a = this.animateMotionValue) === null || a === void 0 ? void 0
          : a.call(this, r, i, 0, n);
      },
      t.prototype.stopLayoutAnimation = function () {
        var r = this;
        ae(function (n) {
          return r.getAxisProgress()[n].stop();
        });
      },
      t.prototype.withoutTransform = function (r) {
        this.isLayoutProjectionEnabled && this.resetTransform(),
          this.parent ? this.parent.withoutTransform(r) : r(),
          this.isLayoutProjectionEnabled &&
          (this.element.style.transform = this.style.transform);
      },
      t.prototype.updateLayoutDeltas = function () {
        qf(this.boxCorrected, this.box);
        var r = this.treeScale.x, n = this.treeScale.y;
        el(this.boxCorrected, this.treeScale, this.treePath),
          ti(this.delta, this.boxCorrected, this.targetBox, this.layoutOrigin),
          this.hasViewportBoxUpdated &&
          this.viewportBoxUpdateListeners.notify(this.targetBox, this.delta),
          this.hasViewportBoxUpdated = !1;
        var o = pn(this.delta, this.treeScale);
        (o !== this.deltaTransform || r !== this.treeScale.x ||
          n !== this.treeScale.y) && this.scheduleRender(),
          this.deltaTransform = o;
      },
      t.prototype.updateTransformDeltas = function () {
        !this.isLayoutProjectionEnabled || !this.box ||
          (Zf(this.targetBoxFinal, this.targetBox, this.latest),
            ti(
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
          Ha(
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
        for (var r in this.vars)this.element.style.setProperty(r, this.vars[r]);
      },
      t;
  }(Ma),
  gl = function (e) {
    return e.updateLayoutDelta();
  };
function Qt(e) {
  var t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function vi(e, t, r) {
  return typeof e == "string" ? e : T.transform(t + r * e);
}
function bl(e, t, r) {
  var n = vi(t, e.x, e.width), o = vi(r, e.y, e.height);
  return n + " " + o;
}
var wn = function (e, t) {
    return T.transform(e * t);
  },
  xl = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  wl = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Sl(e, t, r, n, o, a) {
  n === void 0 && (n = 1), o === void 0 && (o = 0), a === void 0 && (a = !0);
  var i = a ? xl : wl;
  e[i.offset] = wn(-o, t);
  var s = wn(r, t), f = wn(n, t);
  e[i.array] = s + " " + f;
}
var El = { x: 0, y: 0, width: 0, height: 0 };
function Cl(e, t, r, n, o, a, i, s, f, u, l, c, d, p, v) {
  var m = e.attrX,
    h = e.attrY,
    g = e.originX,
    b = e.originY,
    E = e.pathLength,
    P = e.pathSpacing,
    w = P === void 0 ? 1 : P,
    S = e.pathOffset,
    C = S === void 0 ? 0 : S,
    M = j(e, [
      "attrX",
      "attrY",
      "originX",
      "originY",
      "pathLength",
      "pathSpacing",
      "pathOffset",
    ]);
  return Ha(M, n, r, o, a, i, s, l, c, d, p, v),
    n.transform && (t.transform = n.transform, delete n.transform),
    (g !== void 0 || b !== void 0 || t.transform) &&
    (t.transformOrigin = bl(
      f || El,
      g !== void 0 ? g : .5,
      b !== void 0
        ? b
        : .5,
    )),
    m !== void 0 && (n.x = m),
    h !== void 0 && (n.y = h),
    u !== void 0 && E !== void 0 && Sl(n, u, E, w, C, !1),
    n;
}
var hi = new Set([
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
  Pl = /([a-z])([A-Z])/g,
  Tl = "$1-$2",
  mi = function (e) {
    return e.replace(Pl, Tl).toLowerCase();
  },
  Ol = function (e) {
    we(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.attrs = {},
        r.defaultConfig = { enableHardwareAcceleration: !1 },
        r.config = r.defaultConfig,
        r;
    }
    return t.prototype.mount = function (r) {
      e.prototype.mount.call(this, r), this.measure();
    },
      t.prototype.measure = function () {
        var r = this;
        try {
          this.dimensions = typeof this.element.getBBox == "function"
            ? this.element.getBBox() : this.element.getBoundingClientRect();
        } catch (n) {
          this.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        Al(this.element) &&
        (this.totalPathLength = this.element.getTotalLength()),
          J.render(function () {
            return r.render();
          });
      },
      t.prototype.getBaseValue = function (r, n) {
        var o = n[r];
        return o !== void 0 && !Ie(o) ? o
        : e.prototype.getBaseValue.call(this, r, n);
      },
      t.prototype.clean = function () {
        e.prototype.clean.call(this), this.attrs = {};
      },
      t.prototype.read = function (r) {
        return r = hi.has(r) ? r : mi(r), this.element.getAttribute(r);
      },
      t.prototype.build = function () {
        this.updateTransformDeltas(),
          Cl(
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
        for (var r in this.attrs) {
          this.element.setAttribute(hi.has(r) ? r : mi(r), this.attrs[r]);
        }
      },
      t;
  }(pi);
function Al(e) {
  return e.tagName === "path";
}
var Vl = [
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
  Ml = new Set(Vl);
function yi(e) {
  return typeof e == "string" && Ml.has(e);
}
var er = x.createContext(null), tr = x.createContext({ variantContext: {} });
function gi() {
  return x.useContext(tr).variantContext;
}
function Rl() {
  return x.useContext(tr).visualElement;
}
var _l = x.createContext(null),
  Ll = function (e, t, r, n) {
    var o = Rl(),
      a = Qt(function () {
        var l = yi(e) ? Ol : pi;
        return new l(o, n);
      });
    r && (a.values.clear(), a.latest = {}),
      a.updateConfig(
        y(y(y({}, a.config), { enableHardwareAcceleration: !r }), t),
      );
    var i = x.useContext(_l);
    a.layoutId = i && t.layoutId ? i + "-" + t.layoutId : t.layoutId;
    var s = x.useContext(er), f = s === null ? !0 : s.isPresent;
    a.isPresent = t.isPresent !== void 0 ? t.isPresent : f;
    var u = s == null ? void 0 : s.id;
    return a.isPresenceRoot = !o || o.presenceId !== u,
      x.useEffect(function () {
        var l, c;
        if (
          t.onViewportBoxUpdate &&
          (l = a.onViewportBoxUpdate(t.onViewportBoxUpdate)),
            t._onLayoutMeasure && (c = a.onLayoutMeasure(t._onLayoutMeasure)),
            l || c
        ) {
          return function () {
            l == null || l(), c == null || c();
          };
        }
      }, [t.onViewportBoxUpdate, t._onLayoutMeasure]),
      a;
  },
  rr = x.createContext({
    transformPagePoint: function (e) {
      return e;
    },
    features: [],
    isStatic: !1,
  });
function Sn(e) {
  return x.useEffect(function () {
    return function () {
      return e();
    };
  }, []);
}
function En(e, t, r, n) {
  return e.addEventListener(t, r, n), function () {
    return e.removeEventListener(t, r, n);
  };
}
function Cn(e, t, r, n) {
  x.useEffect(function () {
    var o = e.current;
    if (r && o) return En(o, t, r, n);
  }, [e, t, r, n]);
}
function bi(e) {
  return typeof PointerEvent != "undefined" && e instanceof PointerEvent
    ? e.pointerType === "mouse"
    : e instanceof MouseEvent;
}
function xi(e) {
  var t = !!e.touches;
  return t;
}
function Dl(e) {
  return function (t) {
    var r = t instanceof MouseEvent, n = !r || r && t.button === 0;
    n && e(t);
  };
}
var Nl = { pageX: 0, pageY: 0 };
function Il(e, t) {
  t === void 0 && (t = "page");
  var r = e.touches[0] || e.changedTouches[0], n = r || Nl;
  return { x: n[t + "X"], y: n[t + "Y"] };
}
function Bl(e, t) {
  return t === void 0 && (t = "page"), { x: e[t + "X"], y: e[t + "Y"] };
}
function Pn(e, t) {
  return t === void 0 && (t = "page"), { point: xi(e) ? Il(e, t) : Bl(e, t) };
}
function Tn(e) {
  return Pn(e, "client");
}
var wi = function (e, t) {
    t === void 0 && (t = !1);
    var r = function (n) {
      return e(n, Pn(n));
    };
    return t ? Dl(r) : r;
  },
  An = typeof window != "undefined",
  Fl = function () {
    return An && window.onpointerdown === null;
  },
  jl = function () {
    return An && window.ontouchstart === null;
  },
  kl = function () {
    return An && window.onmousedown === null;
  },
  Ul = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
  },
  $l = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
  };
function Si(e) {
  return Fl() ? e : jl() ? $l[e] : kl() ? Ul[e] : e;
}
function Be(e, t, r, n) {
  return En(e, Si(t), wi(r, t === "pointerdown"), n);
}
function nr(e, t, r, n) {
  return Cn(e, Si(t), r && wi(r, t === "pointerdown"), n);
}
var or = function (e) {
    return e * 1e3;
  },
  Ei = function () {
    function e(t, r, n) {
      var o = this, a = (n === void 0 ? {} : n).transformPagePoint;
      if (
        this.startEvent = null,
          this.lastMoveEvent = null,
          this.lastMoveEventInfo = null,
          this.handlers = {},
          this.updatePoint = function () {
            if (!!(o.lastMoveEvent && o.lastMoveEventInfo)) {
              var c = Vn(o.lastMoveEventInfo, o.history),
                d = o.startEvent !== null,
                p = on(c.offset, { x: 0, y: 0 }) >= 3;
              if (!(!d && !p)) {
                var v = c.point, m = De().timestamp;
                o.history.push(y(y({}, v), { timestamp: m }));
                var h = o.handlers, g = h.onStart, b = h.onMove;
                d ||
                (g && g(o.lastMoveEvent, c), o.startEvent = o.lastMoveEvent),
                  b && b(o.lastMoveEvent, c);
              }
            }
          },
          this.handlePointerMove = function (c, d) {
            if (
              o.lastMoveEvent = c,
                o.lastMoveEventInfo = On(d, o.transformPagePoint),
                bi(c) && c.buttons === 0
            ) {
              o.handlePointerUp(c, d);
              return;
            }
            J.update(o.updatePoint, !0);
          },
          this.handlePointerUp = function (c, d) {
            o.end();
            var p = o.handlers.onEnd;
            if (!!p) {
              var v = Vn(On(d, o.transformPagePoint), o.history);
              p && p(c, v);
            }
          },
          !(xi(t) && t.touches.length > 1)
      ) {
        this.handlers = r, this.transformPagePoint = a;
        var i = Pn(t),
          s = On(i, this.transformPagePoint),
          f = s.point,
          u = De().timestamp;
        this.history = [y(y({}, f), { timestamp: u })];
        var l = r.onSessionStart;
        l && l(t, Vn(s, this.history)),
          this.removeListeners = ut(
            Be(window, "pointermove", this.handlePointerMove),
            Be(window, "pointerup", this.handlePointerUp),
            Be(window, "pointercancel", this.handlePointerUp),
          );
      }
    }
    return e.prototype.updateHandlers = function (t) {
      this.handlers = t;
    },
      e.prototype.end = function () {
        this.removeListeners && this.removeListeners(),
          Le.update(this.updatePoint);
      },
      e;
  }();
function On(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ci(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Vn(e, t) {
  var r = e.point;
  return {
    point: r,
    delta: Ci(r, Pi(t)),
    offset: Ci(r, zl(t)),
    velocity: Hl(t, .1),
  };
}
function zl(e) {
  return e[0];
}
function Pi(e) {
  return e[e.length - 1];
}
function Hl(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  for (
    var r = e.length - 1, n = null, o = Pi(e);
    r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > or(t)));
  ) {
    r--;
  }
  if (!n) return { x: 0, y: 0 };
  var a = (o.timestamp - n.timestamp) / 1e3;
  if (a === 0) return { x: 0, y: 0 };
  var i = { x: (o.x - n.x) / a, y: (o.y - n.y) / a };
  return i.x === Infinity && (i.x = 0), i.y === Infinity && (i.y = 0), i;
}
function Yl(e, t) {
  var r = e.onPan,
    n = e.onPanStart,
    o = e.onPanEnd,
    a = e.onPanSessionStart,
    i = r || n || o || a,
    s = x.useRef(null),
    f = x.useContext(rr).transformPagePoint,
    u = {
      onSessionStart: a,
      onStart: n,
      onMove: r,
      onEnd: function (c, d) {
        s.current = null, o && o(c, d);
      },
    };
  x.useEffect(function () {
    s.current !== null && s.current.updateHandlers(u);
  });
  function l(c) {
    s.current = new Ei(c, u, { transformPagePoint: f });
  }
  nr(t, "pointerdown", i && l),
    Sn(function () {
      return s.current && s.current.end();
    });
}
var Ti = function (e, t) {
    return t ? e === t ? !0 : Ti(e, t.parentElement) : !1;
  },
  Ai = {
    linear: Ft,
    easeIn: jt,
    easeInOut: Qr,
    easeOut: ca,
    circIn: en,
    circInOut: da,
    circOut: kt,
    backIn: Ut,
    backInOut: va,
    backOut: pa,
    anticipate: ha,
    bounceIn: ma,
    bounceInOut: ya,
    bounceOut: ft,
  },
  Oi = function (e) {
    if (Array.isArray(e)) {
      k(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
      );
      var t = H(e, 4), r = t[0], n = t[1], o = t[2], a = t[3];
      return Aa(r, n, o, a);
    } else if (typeof e == "string") {
      return k(Ai[e] !== void 0, "Invalid easing type '" + e + "'"), Ai[e];
    }
    return e;
  },
  Gl = function (e) {
    return Array.isArray(e) && typeof e[0] != "number";
  },
  Vi = function (e, t) {
    return e === "zIndex"
      ? !1
      : !!(typeof t == "number" || Array.isArray(t) ||
        typeof t == "string" && oe.test(t) && !t.startsWith("url("));
  },
  Ae = function () {
    return {
      type: "spring",
      stiffness: 500,
      damping: 25,
      restDelta: .5,
      restSpeed: 10,
    };
  },
  ar = function (e) {
    return {
      type: "spring",
      stiffness: 550,
      damping: e === 0 ? 100 : 30,
      restDelta: .01,
      restSpeed: 10,
    };
  },
  Mn = function () {
    return { type: "keyframes", ease: "linear", duration: .3 };
  },
  Wl = function (e) {
    return { type: "keyframes", duration: .8, values: e };
  },
  Mi = {
    x: Ae,
    y: Ae,
    z: Ae,
    rotate: Ae,
    rotateX: Ae,
    rotateY: Ae,
    rotateZ: Ae,
    scaleX: ar,
    scaleY: ar,
    scale: ar,
    opacity: Mn,
    backgroundColor: Mn,
    color: Mn,
    default: ar,
  },
  Kl = function (e, t) {
    var r;
    return yn(t) ? r = Wl : r = Mi[e] || Mi.default, y({ to: t }, r(t));
  };
function ql(e) {
  var t = e.when,
    r = e.delay,
    n = e.delayChildren,
    o = e.staggerChildren,
    a = e.staggerDirection,
    i = e.repeat,
    s = e.repeatType,
    f = e.repeatDelay,
    u = e.from,
    l = j(e, [
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
  return !!Object.keys(l).length;
}
var Ri = !1;
function Xl(e) {
  var t = e.ease,
    r = e.times,
    n = e.yoyo,
    o = e.flip,
    a = e.loop,
    i = j(e, ["ease", "times", "yoyo", "flip", "loop"]),
    s = y({}, i);
  return r && (s.offset = r),
    i.duration && (s.duration = or(i.duration)),
    i.repeatDelay && (s.repeatDelay = or(i.repeatDelay)),
    t && (s.ease = Gl(t) ? t.map(Oi) : Oi(t)),
    i.type === "tween" && (s.type = "keyframes"),
    (n || a || o) &&
    (tt(
      !Ri,
      "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.",
    ),
      Ri = !0,
      n ? s.repeatType = "reverse" : a
        ? s.repeatType = "loop"
        : o && (s.repeatType = "mirror"),
      s.repeat = a || n || o || i.repeat),
    i.type !== "spring" && (s.type = "keyframes"),
    s;
}
function Zl(e, t) {
  var r, n, o, a, i;
  return (i = (a = (n = (r = e[t]) === null || r === void 0
                      ? void 0
                      : r.delay) !== null && n !== void 0
                ? n
                : (o = e.default) === null || o === void 0
                ? void 0
                : o.delay) !== null && a !== void 0
          ? a
          : e.delay) !== null && i !== void 0
    ? i
    : 0;
}
function Jl(e) {
  return Array.isArray(e.to) && e.to[0] === null &&
    (e.to = ne(e.to), e.to[0] = e.from),
    e;
}
function Ql(e, t, r) {
  var n;
  return Array.isArray(t.to) &&
    ((n = e.duration) !== null && n !== void 0 || (e.duration = .8)),
    Jl(t),
    ql(e) || (e = y(y({}, e), Kl(r, t.to))),
    y(y({}, t), Xl(e));
}
function tc(e, t, r, n, o) {
  var a,
    i = ec(n, e),
    s = (a = i.from) !== null && a !== void 0 ? a : t.get(),
    f = Vi(e, r);
  s === "none" && f && typeof r == "string" && (s = Ba(e, r));
  var u = Vi(e, s);
  tt(
    u === f,
    "You are trying to animate " + e + ' from "' + s + '" to "' + r + '". ' +
      s + " is not an animatable value - to enable this animation set " + s +
      " to a value animatable to " + r + " via the `style` property.",
  );
  function l() {
    var d = {
      from: s,
      to: r,
      velocity: t.getVelocity(),
      onComplete: o,
      onUpdate: function (p) {
        return t.set(p);
      },
    };
    return i.type === "inertia" || i.type === "decay"
      ? xa(y(y({}, d), i))
      : tn(y(y({}, Ql(i, d, e)), {
        onUpdate: function (p) {
          var v;
          d.onUpdate(p),
            (v = i.onUpdate) === null || v === void 0 || v.call(i, p);
        },
        onComplete: function () {
          var p;
          d.onComplete(),
            (p = i.onComplete) === null || p === void 0 || p.call(i);
        },
      }));
  }
  function c() {
    var d;
    return t.set(r),
      o(),
      (d = i == null ? void 0 : i.onComplete) === null || d === void 0 ||
      d.call(i),
      { stop: function () {} };
  }
  return !u || !f || i.type === !1 ? c : l;
}
function ec(e, t) {
  return e[t] || e.default || e;
}
function ir(e, t, r, n) {
  return n === void 0 && (n = {}),
    t.start(function (o) {
      var a,
        i,
        s = tc(e, t, r, n, o),
        f = Zl(n, e),
        u = function () {
          return i = s();
        };
      return f ? a = setTimeout(u, or(f)) : u(), function () {
        clearTimeout(a), i == null || i.stop();
      };
    });
}
function Li(e, t, r) {
  e.onAnimationStart();
  var n;
  if (Array.isArray(t)) {
    var o = t.map(function (a) {
      return Rn(e, a, r);
    });
    n = Promise.all(o);
  } else typeof t == "string" ? n = Rn(e, t, r) : n = _i(e, t, r);
  return n.then(function () {
    return e.onAnimationComplete();
  });
}
function Rn(e, t, r) {
  var n;
  r === void 0 && (r = {});
  var o = gn(e, t, r.custom),
    a = (o || {}).transition,
    i = a === void 0 ? e.getDefaultTransition() || {} : a;
  r.transitionOverride && (i = r.transitionOverride);
  var s = o
      ? function () {
        return _i(e, o, r);
      }
      : function () {
        return Promise.resolve();
      },
    f = ((n = e.variantChildrenOrder) === null || n === void 0
        ? void 0
        : n.size)
      ? function (p) {
        p === void 0 && (p = 0);
        var v = i.delayChildren,
          m = v === void 0 ? 0 : v,
          h = i.staggerChildren,
          g = i.staggerDirection;
        return rc(e, t, m + p, h, g, r);
      }
      : function () {
        return Promise.resolve();
      },
    u = i.when;
  if (u) {
    var l = H(u === "beforeChildren" ? [s, f] : [f, s], 2), c = l[0], d = l[1];
    return c().then(d);
  } else return Promise.all([s(), f(r.delay)]);
}
function _i(e, t, r) {
  var n,
    o = r === void 0 ? {} : r,
    a = o.delay,
    i = a === void 0 ? 0 : a,
    s = o.transitionOverride,
    f = o.type,
    u = e.makeTargetAnimatable(t),
    l = u.transition,
    c = l === void 0 ? e.getDefaultTransition() : l,
    d = u.transitionEnd,
    p = j(u, ["transition", "transitionEnd"]);
  s && (c = s);
  var v = [],
    m = f &&
      ((n = e.animationState) === null || n === void 0
        ? void 0
        : n.getProtectedKeys(f));
  for (var h in p) {
    var g = e.getValue(h), b = p[h];
    if (!(!g || b === void 0 || (m == null ? void 0 : m[h]) !== void 0)) {
      var E = ir(h, g, b, y({ delay: i }, c));
      v.push(E);
    }
  }
  return Promise.all(v).then(function () {
    d && bn(e, d);
  });
}
function rc(e, t, r, n, o, a) {
  r === void 0 && (r = 0), n === void 0 && (n = 0), o === void 0 && (o = 1);
  var i = [],
    s = (e.variantChildrenOrder.size - 1) * n,
    f = o === 1
      ? function (u) {
        return u === void 0 && (u = 0), u * n;
      }
      : function (u) {
        return u === void 0 && (u = 0), s - u * n;
      };
  return Array.from(e.variantChildrenOrder).forEach(function (u, l) {
    var c = Rn(u, t, y(y({}, a), { delay: r + f(l) }));
    i.push(c);
  }),
    Promise.all(i);
}
function nc(e) {
  e.forEachValue(function (t) {
    return t.stop();
  });
}
var Di = function () {
  function e() {
    this.hasMounted = !1,
      this.pendingAnimations = [],
      this.subscribers = new Set();
  }
  return e.prototype.subscribe = function (t) {
    var r = this;
    return this.subscribers.add(t), function () {
      return r.subscribers.delete(t);
    };
  },
    e.prototype.start = function (t, r) {
      var n = this;
      if (this.hasMounted) {
        var o = [];
        return this.subscribers.forEach(function (a) {
          o.push(Li(a, t, { transitionOverride: r }));
        }),
          Promise.all(o);
      } else {
        return new Promise(function (a) {
          n.pendingAnimations.push({ animation: [t, r], resolve: a });
        });
      }
    },
    e.prototype.set = function (t) {
      return k(
        this.hasMounted,
        "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.",
      ),
        this.subscribers.forEach(function (r) {
          li(r, t);
        });
    },
    e.prototype.stop = function () {
      this.subscribers.forEach(function (t) {
        nc(t);
      });
    },
    e.prototype.mount = function () {
      var t = this;
      this.hasMounted = !0,
        this.pendingAnimations.forEach(function (r) {
          var n = r.animation, o = r.resolve;
          t.start.apply(t, ne(n)).then(o);
        });
    },
    e.prototype.unmount = function () {
      this.hasMounted = !1, this.stop();
    },
    e;
}();
function oc(e, t) {
  if (!Array.isArray(t)) return !1;
  var r = t.length;
  if (r !== e.length) return !1;
  for (var n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
var N;
(function (e) {
  e.Animate = "animate",
    e.Hover = "whileHover",
    e.Tap = "whileTap",
    e.Drag = "whileDrag",
    e.Focus = "whileFocus",
    e.Exit = "exit";
})(N || (N = {}));
var _n = [N.Animate, N.Hover, N.Tap, N.Drag, N.Focus, N.Exit],
  ac = ne(_n).reverse(),
  ic = _n.length;
function sc(e) {
  return function (t) {
    return Promise.all(t.map(function (r) {
      var n = r.animation, o = r.options;
      return Li(e, n, o);
    }));
  };
}
function lc(e) {
  var t = sc(e),
    r = fc(),
    n = !0,
    o = function (c, d) {
      var p = gn(e, d);
      if (p) {
        var v = p.transition,
          m = p.transitionEnd,
          h = j(p, ["transition", "transitionEnd"]);
        c = y(y(y({}, c), h), m);
      }
      return c;
    };
  function a(c) {
    return r[c].protectedKeys;
  }
  function i(c) {
    t = c(e);
  }
  var s, f;
  function u(c, d, p, v) {
    d === void 0 && (d = {}), s = c, f = d;
    var m = [], h = new Set(), g = {};
    c.variants && e.updateConfig(y(y({}, e.config), { variants: c.variants }));
    for (
      var b = Infinity,
        E = function (C) {
          var M = ac[C],
            A = r[M],
            V = (ie = c[M]) !== null && ie !== void 0 ? ie : d[M],
            B = pl(V),
            G = M === v ? A.isActive : null;
          G === !1 && (b = C);
          var Q = V === d[M] && B;
          if (
            Q && n && e.manuallyAnimateOnMount && (Q = !1),
              n && M === N.Animate && e.prevSnapshot &&
              (n = !1, A.prevResolvedValues = e.prevSnapshot),
              A.protectedKeys = y({}, g),
              !A.isActive && G === null || !V && !A.prevProp ||
              V instanceof Di || typeof V == "boolean"
          ) {
            return "continue";
          }
          var le = uc(A.prevProp, V) || M === v && A.isActive && !Q && B ||
              C > b && B,
            ge = Array.isArray(V) ? V : [V],
            D = ge.reduce(o, {});
          G === !1 && (D = {});
          var ie = A.prevResolvedValues,
            me = ie === void 0 ? {} : ie,
            cr = y(y({}, me), D);
          for (var W in cr) {
            var Oe = D[W], ds = me[W];
            g.hasOwnProperty(W) || (Oe !== ds
              ? Oe !== void 0 ? (le = !0, h.delete(W)) : h.add(W)
              : Oe !== void 0 && h.has(W)
              ? (le = !0, h.delete(W))
              : A.protectedKeys[W] = !0);
          }
          A.prevProp = V,
            A.prevResolvedValues = D,
            A.isActive && (g = y(y({}, g), D)),
            le && !Q && m.push.apply(
              m,
              ne(ge.map(function (ps) {
                return { animation: ps, options: y({ type: M }, p) };
              })),
            );
        },
        P = 0;
      P < ic;
      P++
    ) {
      E(P);
    }
    if (h.size) {
      var w = {};
      h.forEach(function (C) {
        var M = e.getBaseValue(C, c);
        M !== void 0 && (w[C] = M);
      }), m.push({ animation: w });
    }
    var S = Boolean(m.length);
    return n && c.initial === !1 && !e.manuallyAnimateOnMount && (S = !1),
      n = !1,
      S ? t(m) : Promise.resolve();
  }
  function l(c, d, p) {
    var v;
    return r[c].isActive === d
      ? Promise.resolve()
      : ((v = e.variantChildrenOrder) === null || v === void 0 ||
        v.forEach(function (m) {
          var h;
          return (h = m.animationState) === null || h === void 0
            ? void 0
            : h.setActive(c, d);
        }),
        r[c].isActive = d,
        u(s, f, p, c));
  }
  return {
    getProtectedKeys: a,
    setProps: u,
    setActive: l,
    setAnimateFunction: i,
  };
}
function uc(e, t) {
  return typeof t == "string" ? t !== e : fi(t) ? !oc(t, e) : !1;
}
function Fe(e) {
  return e === void 0 && (e = !1),
    { isActive: e, protectedKeys: {}, prevResolvedValues: {} };
}
function fc() {
  var e;
  return e = {},
    e[N.Animate] = Fe(!0),
    e[N.Hover] = Fe(),
    e[N.Tap] = Fe(),
    e[N.Drag] = Fe(),
    e[N.Focus] = Fe(),
    e[N.Exit] = Fe(),
    e;
}
function Ni(e) {
  var t = null;
  return function () {
    var r = function () {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
var Ii = Ni("dragHorizontal"), Bi = Ni("dragVertical");
function Fi(e) {
  var t = !1;
  if (e === "y") t = Bi();
  else if (e === "x") t = Ii();
  else {
    var r = Ii(), n = Bi();
    r && n
      ? t = function () {
        r(), n();
      }
      : (r && r(), n && n());
  }
  return t;
}
function cc() {
  var e = Fi(!0);
  return e ? (e(), !1) : !0;
}
function dc(e, t) {
  var r = e.onTap,
    n = e.onTapStart,
    o = e.onTapCancel,
    a = e.whileTap,
    i = r || n || o || a,
    s = x.useRef(!1),
    f = x.useRef(null);
  function u() {
    var v;
    (v = f.current) === null || v === void 0 || v.call(f), f.current = null;
  }
  function l() {
    var v;
    return s.current = !1,
      (v = t.animationState) === null || v === void 0 || v.setActive(N.Tap, !1),
      !cc();
  }
  function c(v, m) {
    !l() ||
      (Ti(t.getInstance(), v.target)
        ? r == null || r(v, m)
        : o == null || o(v, m));
  }
  function d(v, m) {
    !l() || o == null || o(v, m);
  }
  function p(v, m) {
    var h;
    u(),
      !s.current &&
      (s.current = !0,
        f.current = ut(
          Be(window, "pointerup", c),
          Be(window, "pointercancel", d),
        ),
        n == null || n(v, m),
        (h = t.animationState) === null || h === void 0 ||
        h.setActive(N.Tap, !0));
  }
  nr(t, "pointerdown", i ? p : void 0), Sn(u);
}
function ji(e, t, r) {
  return function (n, o) {
    var a;
    !bi(n) || !e.isHoverEventsEnabled ||
      (r == null || r(n, o),
        (a = e.animationState) === null || a === void 0 ||
        a.setActive(N.Hover, t));
  };
}
function pc(e, t) {
  var r = e.onHoverStart, n = e.onHoverEnd, o = e.whileHover;
  nr(t, "pointerenter", r || o ? ji(t, !0, r) : void 0),
    nr(t, "pointerleave", n || o ? ji(t, !1, n) : void 0);
}
function vc(e, t) {
  var r = e.whileFocus,
    n = function () {
      var a;
      (a = t.animationState) === null || a === void 0 ||
        a.setActive(N.Focus, !0);
    },
    o = function () {
      var a;
      (a = t.animationState) === null || a === void 0 ||
        a.setActive(N.Focus, !1);
    };
  Cn(t, "focus", r ? n : void 0), Cn(t, "blur", r ? o : void 0);
}
function hc(e, t) {
  Yl(e, t), dc(e, t), pc(e, t), vc(e, t);
}
var sr = function (e) {
    return function (t) {
      return e(t), null;
    };
  },
  ki = [
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
  mc = sr(function (e) {
    var t = e.visualElement, r = j(e, ["visualElement"]);
    hc(r, t);
  }),
  yc = {
    key: "gestures",
    shouldRender: function (e) {
      return ki.some(function (t) {
        return e.hasOwnProperty(t);
      });
    },
    getComponent: function () {
      return mc;
    },
  },
  gc = new Set(
    ne([
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
    ], ki),
  );
function Ui(e) {
  return gc.has(e);
}
var $i = function (e) {
  return !Ui(e);
};
try {
  zi = Va().default,
    $i = function (e) {
      return e.startsWith("on") ? !Ui(e) : zi(e);
    };
} catch (e) {}
var zi;
function bc(e) {
  var t = {};
  for (var r in e) $i(r) && (t[r] = e[r]);
  return t;
}
function xc(e, t) {
  var r = t.drag, n = {}, o = y(y(y({}, e.reactStyle), e.style), e.vars);
  return r &&
    (n.draggable = !1,
      o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
      o.touchAction = r === !0 ? "none" : "pan-" + (r === "x" ? "y" : "x")),
    n.style = o,
    n;
}
function wc(e) {
  return y(y({}, e.attrs), { style: y({}, e.reactStyle) });
}
function Sc(e, t, r) {
  var n = typeof e == "string" ? bc(t) : t;
  r.clean(), r.build();
  var o = yi(e) ? wc(r) : xc(r, t);
  return x.createElement(e, y(y(y({}, n), { ref: r.ref }), o));
}
function Hi(e, t) {
  var r = t.layout, n = t.layoutId;
  return Kt(e) || Fa(e) || (r || n !== void 0) && !!qt[e];
}
function Cc(e, t) {
  var r = Qt(Ec);
  for (var n in r) {
    var o = Hi(n, t),
      a = t[n] !== void 0,
      i = t.style && t.style[n] !== void 0,
      s = a && Ie(t[n]),
      f = i && Ie(t.style[n]),
      u = o && !a && !i,
      l = !o && !s && !f;
    (u || l) && (e.removeValue(n), delete r[n]);
  }
  Yi(e, r, t, !1, t),
    t.style && Yi(e, r, t.style, !0, t),
    t.transformValues && (e.reactStyle = t.transformValues(e.reactStyle));
}
function Yi(e, t, r, n, o) {
  n === void 0 && (n = !1), n && (e.reactStyle = {});
  for (var a in r) {
    var i = r[a], s = !1;
    if (Ie(i)) Pc.has(a) || (e.addValue(a, i), s = !0);
    else if (Hi(a, o)) {
      if (!e.hasValue(a)) e.addValue(a, Te(i));
      else if (i !== t[a]) {
        if (Ie(t[a])) e.addValue(a, Te(i));
        else {
          var f = e.getValue(a);
          f.set(i);
        }
      }
      s = !0;
    } else n && (e.reactStyle[a] = i);
    s && (t[a] = i);
  }
}
var Pc = new Set([]),
  Ec = function () {
    return {};
  };
function Tc(e, t, r, n) {
  var o = x.useContext(rr);
  if (t || typeof window == "undefined") return null;
  for (var a = ne(e, o.features), i = a.length, s = [], f = 0; f < i; f++) {
    var u = a[f], l = u.shouldRender, c = u.key, d = u.getComponent;
    if (l(n)) {
      var p = d(n);
      p && s.push(x.createElement(p, y({ key: c }, n, { visualElement: r })));
    }
  }
  return s;
}
var I;
(function (e) {
  e[e.Entering = 0] = "Entering",
    e[e.Present = 1] = "Present",
    e[e.Exiting = 2] = "Exiting";
})(I || (I = {}));
var je;
(function (e) {
  e[e.Hide = 0] = "Hide", e[e.Show = 1] = "Show";
})(je || (je = {}));
var Ac = {
    measureLayout: function (e) {
      return e.measureLayout();
    },
    layoutReady: function (e) {
      return e.layoutReady();
    },
  },
  Oc = function (e, t) {
    return e.depth - t.depth;
  };
function Ln() {
  var e = new Set(),
    t = function (n) {
      return e.add(n);
    },
    r = function (n) {
      var o = n === void 0 ? Ac : n,
        a = o.measureLayout,
        i = o.layoutReady,
        s = o.parent,
        f = Array.from(e).sort(Oc),
        u = function () {
          f.forEach(function (l) {
            return l.resetTransform();
          }), f.forEach(a);
        };
      s ? s.withoutTransform(u) : u(),
        f.forEach(i),
        f.forEach(function (l) {
          l.isPresent && (l.presence = I.Present);
        }),
        e.clear();
    };
  return { add: t, flush: r };
}
function ke(e) {
  return !!e.forceUpdate;
}
var Dn = x.createContext(Ln()),
  Gi = x.createContext(Ln()),
  Vc = typeof window != "undefined",
  Wi = Vc ? x.useLayoutEffect : x.useEffect;
function Mc(e) {
  var t = x.useContext(Dn), r = x.useContext(Gi);
  Wi(function () {
    return function () {
      ke(t) && t.remove(e), ke(r) && r.remove(e);
    };
  }, []);
}
function Ki() {
  var e = x.useContext(er);
  if (e === null) return [!0, null];
  var t = e.isPresent, r = e.onExitComplete, n = e.register, o = Rc();
  x.useEffect(function () {
    return n(o);
  }, []);
  var a = function () {
    return r == null ? void 0 : r(o);
  };
  return !t && r ? [!1, a] : [!0];
}
function _c(e) {
  return e === null ? !0 : e.isPresent;
}
var Lc = 0,
  Dc = function () {
    return Lc++;
  },
  Rc = function () {
    return Qt(Dc);
  };
function qi(e, t) {
  t === void 0 && (t = !1);
  var r = x.useRef(!0);
  (!t || t && r.current) && e(), r.current = !1;
}
function Xi(e) {
  var t = e.animate, r = e.variants, n = e.inherit;
  return n ?? (!!r && !t);
}
function Fc(e, t, r) {
  var n,
    o,
    a,
    i = gi(),
    s = x.useContext(er),
    f = Xi(t),
    u = [],
    l = {},
    c = !1;
  Bc(t) && (c = !0, i = {});
  for (var d = c || t.variants, p = 0; p < Nc; p++) {
    var v = Zi[p], m = t[v], h = i[v];
    fe(m) || m === !1
      ? (l[v] = m, u.push(m))
      : ((fe(h) || h === !1) && (l[v] = h), u.push(null)),
      u.push(fe(h) ? h : null);
  }
  var g = (n = t.animate) !== null && n !== void 0 ? n : l.animate,
    b = t.initial;
  b === void 0 && (fe(g) || l.initial !== !1) && (b = l.initial),
    (s == null ? void 0 : s.initial) === !1 && (b = l.initial = !1),
    l.parent = d ? e : i.parent,
    qi(function () {
      var w = b === !1 ? g : b;
      w && typeof w != "boolean" && !Ic(w) && li(e, w);
    }, !r),
    qi(function () {
      e.forEachValue(function (w, S) {
        e.baseTarget[S] = w.get();
      });
    }, !0);
  var E = x.useMemo(function () {
      return l;
    }, u),
    P;
  return d && f && !c &&
    (P = (o = i.parent) === null || o === void 0
      ? void 0
      : o.addVariantChild(e),
      e.inheritsVariants = !0),
    !c && f && ((a = e.parent) === null || a === void 0
      ? void 0
      : a.isMounted) &&
    b !== !1 && g && (e.manuallyAnimateOnMount = !0),
    x.useEffect(function () {
      return e.isMounted = !0, function () {
        e.isMounted = !1, P == null || P();
      };
    }, []),
    Wi(function () {
      var w;
      _c(s) &&
        ((w = e.variantChildrenOrder) === null || w === void 0 || w.clear());
    }),
    x.useEffect(function () {
      var w;
      d &&
        ((w = i.parent) === null || w === void 0 || w.addVariantChildOrder(e));
    }),
    E;
}
var Zi = ne(["initial"], _n), Nc = Zi.length;
function fe(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ic(e) {
  return typeof e == "object" && typeof e.start == "function";
}
function Bc(e) {
  var t;
  return typeof ((t = e.animate) === null || t === void 0 ? void 0 : t.start) ==
      "function" ||
    fe(e.animate) || fe(e.whileHover) || fe(e.whileDrag) || fe(e.whileTap) ||
    fe(e.whileFocus) || fe(e.exit);
}
function Ji(e, t) {
  var r = t.defaultFeatures, n = t.useVisualElement, o = t.useRender;
  function a(i, s) {
    var f = x.useContext(rr).isStatic, u = n(e, i, f, s);
    Cc(u, i);
    var l = Fc(u, i, f),
      c = Tc(r, f, u, i),
      d = x.useMemo(function () {
        return { visualElement: u, variantContext: l };
      }, [u, l]),
      p = o(e, i, u);
    return Mc(u),
      x.createElement(
        x.Fragment,
        null,
        x.createElement(tr.Provider, { value: d }, p),
        c,
      );
  }
  return x.forwardRef(a);
}
function Qi(e, t, r) {
  var n = t.min, o = t.max;
  return n !== void 0 && e < n
    ? e = r ? $(n, e, r) : Math.max(e, n)
    : o !== void 0 && e > o && (e = r ? $(o, e, r) : Math.min(e, o)),
    e;
}
function jc(e, t, r, n, o) {
  var a = e - t * r;
  return n ? Qi(a, n, o) : a;
}
function es(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function ts(e, t) {
  var r = t.top, n = t.left, o = t.bottom, a = t.right;
  return { x: es(e.x, n, a), y: es(e.y, r, o) };
}
function rs(e, t) {
  var r, n = t.min - e.min, o = t.max - e.max;
  return t.max - t.min < e.max - e.min &&
    (r = H([o, n], 2), n = r[0], o = r[1]),
    { min: e.min + n, max: e.min + o };
}
function kc(e, t) {
  return { x: rs(e.x, t.x), y: rs(e.y, t.y) };
}
function Uc(e, t, r) {
  var n = e.max - e.min, o = $(t.min, t.max - n, r);
  return { min: o, max: o + n };
}
function $c(e, t) {
  var r = {};
  return t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r;
}
var zc = function (e) {
    return typeof e == "object" && e.hasOwnProperty("current") &&
      e.current.hasOwnProperty("top") && e.current.hasOwnProperty("left");
  },
  ns = new WeakMap(),
  os,
  Yc = function () {
    function e(t) {
      var r = t.visualElement;
      this.isDragging = !1,
        this.currentDirection = null,
        this.constraints = !1,
        this.props = {},
        this.hasMutatedConstraints = !1,
        this.cursorProgress = { x: .5, y: .5 },
        this.originPoint = {},
        this.openGlobalLock = null,
        this.panSession = null,
        this.visualElement = r,
        this.visualElement.enableLayoutProjection(),
        ns.set(r, this);
    }
    return e.prototype.start = function (t, r) {
      var n = this,
        o = r === void 0 ? {} : r,
        a = o.snapToCursor,
        i = a === void 0 ? !1 : a,
        s = o.cursorProgress;
      i && this.snapToCursor(t);
      var f = function () {
          n.stopMotion();
        },
        u = function (p, v) {
          var m, h, g, b = n.props, E = b.drag, P = b.dragPropagation;
          if (
            !(E && !P &&
              (n.openGlobalLock && n.openGlobalLock(),
                n.openGlobalLock = Fi(E),
                !n.openGlobalLock))
          ) {
            n.prepareBoundingBox(),
              n.visualElement.lockTargetBox(),
              n.resolveDragConstraints();
            var w = Tn(p).point;
            ae(function (S) {
              var C = n.visualElement.targetBox[S], M = C.min, A = C.max;
              n.cursorProgress[S] = s ? s[S] : Pe(M, A, w[S]);
              var V = n.getAxisMotionValue(S);
              V && (n.originPoint[S] = V.get());
            }),
              n.isDragging = !0,
              n.currentDirection = null,
              (h = (m = n.props).onDragStart) === null || h === void 0 ||
              h.call(m, p, v),
              (g = n.visualElement.animationState) === null || g === void 0 ||
              g.setActive(N.Drag, !0);
          }
        },
        l = function (p, v) {
          var m,
            h,
            g,
            b,
            E = n.props,
            P = E.dragPropagation,
            w = E.dragDirectionLock;
          if (!(!P && !n.openGlobalLock)) {
            var S = v.offset;
            if (w && n.currentDirection === null) {
              n.currentDirection = Hc(S),
                n.currentDirection !== null &&
                ((h = (m = n.props).onDirectionLock) === null || h === void 0 ||
                  h.call(m, n.currentDirection));
              return;
            }
            n.updateAxis("x", p, S),
              n.updateAxis("y", p, S),
              (b = (g = n.props).onDrag) === null || b === void 0 ||
              b.call(g, p, v),
              os = p;
          }
        },
        c = function (p, v) {
          return n.stop(p, v);
        },
        d = this.props.transformPagePoint;
      this.panSession = new Ei(t, {
        onSessionStart: f,
        onStart: u,
        onMove: l,
        onEnd: c,
      }, { transformPagePoint: d });
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
          this.constraints && !this.hasMutatedConstraints && ae(function (r) {
            t.getAxisMotionValue(r) &&
              (t.constraints[r] = $c(t.visualElement.box[r], t.constraints[r]));
          });
      },
      e.prototype.resolveConstraints = function () {
        var t = this.props.dragConstraints;
        return t
          ? zc(t) ? ts(this.visualElement.box, t.current)
          : un(t) ? this.resolveRefConstraints(this.visualElement.box, t)
          : ts(this.visualElement.box, t)
          : !1;
      },
      e.prototype.resolveRefConstraints = function (t, r) {
        var n = this.props,
          o = n.onMeasureDragConstraints,
          a = n.transformPagePoint,
          i = r.current;
        k(
          i !== null,
          "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
        ), this.constraintsBox = ri(i, a);
        var s = kc(t, this.constraintsBox);
        if (o) {
          var f = o(Of(s));
          this.hasMutatedConstraints = !!f, f && (s = Ra(f));
        }
        return s;
      },
      e.prototype.cancelDrag = function () {
        var t;
        this.isDragging = !1,
          this.panSession && this.panSession.end(),
          this.panSession = null,
          !this.props.dragPropagation && this.openGlobalLock &&
          (this.openGlobalLock(), this.openGlobalLock = null),
          (t = this.visualElement.animationState) === null || t === void 0 ||
          t.setActive(N.Drag, !1);
      },
      e.prototype.stop = function (t, r) {
        var n;
        this.visualElement.unlockTargetBox(),
          (n = this.panSession) === null || n === void 0 || n.end(),
          this.panSession = null;
        var o = this.isDragging;
        if (this.cancelDrag(), !!o) {
          var a = this.props,
            i = a.dragMomentum,
            s = a.dragElastic,
            f = a.onDragEnd;
          if (i || s) {
            var u = r.velocity;
            this.animateDragEnd(u);
          }
          f == null || f(t, r);
        }
      },
      e.prototype.snapToCursor = function (t) {
        var r = this;
        this.prepareBoundingBox(),
          ae(function (n) {
            var o = r.props.drag;
            if (!!ur(n, o, r.currentDirection)) {
              var a = r.getAxisMotionValue(n);
              if (a) {
                var i = Tn(t).point,
                  s = r.visualElement.box,
                  f = s[n].max - s[n].min,
                  u = s[n].min + f / 2,
                  l = i[n] - u;
                r.originPoint[n] = i[n], a.set(l);
              } else r.cursorProgress[n] = .5, r.updateVisualElementAxis(n, t);
            }
          });
      },
      e.prototype.updateAxis = function (t, r, n) {
        var o = this.props.drag;
        if (!!ur(t, o, this.currentDirection)) {
          return this.getAxisMotionValue(t)
            ? this.updateAxisMotionValue(t, n)
            : this.updateVisualElementAxis(t, r);
        }
      },
      e.prototype.updateAxisMotionValue = function (t, r) {
        var n = this.getAxisMotionValue(t);
        if (!(!r || !n)) {
          var o = this.props.dragElastic,
            a = this.originPoint[t] + r[t],
            i = this.constraints ? Qi(a, this.constraints[t], o) : a;
          n.set(i);
        }
      },
      e.prototype.updateVisualElementAxis = function (t, r) {
        var n,
          o = this.props.dragElastic,
          a = this.visualElement.box[t],
          i = a.max - a.min,
          s = this.cursorProgress[t],
          f = Tn(r).point,
          u = jc(
            f[t],
            i,
            s,
            (n = this.constraints) === null || n === void 0 ? void 0 : n[t],
            o,
          );
        this.visualElement.setAxisTarget(t, u, u + i);
      },
      e.prototype.updateProps = function (t) {
        var r = t.drag,
          n = r === void 0 ? !1 : r,
          o = t.dragDirectionLock,
          a = o === void 0 ? !1 : o,
          i = t.dragPropagation,
          s = i === void 0 ? !1 : i,
          f = t.dragConstraints,
          u = f === void 0 ? !1 : f,
          l = t.dragElastic,
          c = l === void 0 ? .35 : l,
          d = t.dragMomentum,
          p = d === void 0 ? !0 : d,
          v = j(t, [
            "drag",
            "dragDirectionLock",
            "dragPropagation",
            "dragConstraints",
            "dragElastic",
            "dragMomentum",
          ]);
        this.props = y({
          drag: n,
          dragDirectionLock: a,
          dragPropagation: s,
          dragConstraints: u,
          dragElastic: c,
          dragMomentum: p,
        }, v);
      },
      e.prototype.getAxisMotionValue = function (t) {
        var r = this.props,
          n = r.layout,
          o = r.layoutId,
          a = "_drag" + t.toUpperCase();
        if (this.props[a])return this.props[a];
        if (!n && o === void 0)return this.visualElement.getValue(t, 0);
      },
      e.prototype.animateDragEnd = function (t) {
        var r = this,
          n = this.props,
          o = n.drag,
          a = n.dragMomentum,
          i = n.dragElastic,
          s = n.dragTransition,
          f = ae(function (u) {
            if (!!ur(u, o, r.currentDirection)) {
              var l = r.constraints ? r.constraints[u] : {},
                c = i ? 200 : 1e6,
                d = i ? 40 : 1e7,
                p = y(
                  y({
                    type: "inertia",
                    velocity: a ? t[u] : 0,
                    bounceStiffness: c,
                    bounceDamping: d,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                  }, s),
                  l,
                );
              return r.getAxisMotionValue(u)
                ? r.startAxisValueAnimation(u, p)
                : r.visualElement.startLayoutAxisAnimation(u, p);
            }
          });
        return Promise.all(f).then(function () {
          var u, l;
          (l = (u = r.props).onDragTransitionEnd) === null || l === void 0 ||
            l.call(u);
        });
      },
      e.prototype.stopMotion = function () {
        var t = this;
        ae(function (r) {
          var n = t.getAxisMotionValue(r);
          n ? n.stop() : t.visualElement.stopLayoutAnimation();
        });
      },
      e.prototype.startAxisValueAnimation = function (t, r) {
        var n = this.getAxisMotionValue(t);
        if (!!n) {
          var o = n.get();
          return n.set(o), n.set(o), ir(t, n, 0, r);
        }
      },
      e.prototype.scalePoint = function () {
        var t = this, r = this.props, n = r.drag, o = r.dragConstraints;
        if (!(!un(o) || !this.constraintsBox)) {
          this.stopMotion();
          var a = { x: 0, y: 0 };
          ae(function (i) {
            a[i] = Qa(t.visualElement.targetBox[i], t.constraintsBox[i]);
          }),
            this.prepareBoundingBox(),
            this.resolveDragConstraints(),
            ae(function (i) {
              if (!!ur(i, n, null)) {
                var s = Uc(
                    t.visualElement.targetBox[i],
                    t.constraintsBox[i],
                    a[i],
                  ),
                  f = s.min,
                  u = s.max;
                t.visualElement.setAxisTarget(i, f, u);
              }
            });
        }
      },
      e.prototype.mount = function (t) {
        var r = this,
          n = t.getInstance(),
          o = Be(n, "pointerdown", function (f) {
            var u = r.props,
              l = u.drag,
              c = u.dragListener,
              d = c === void 0 ? !0 : c;
            l && d && r.start(f);
          }),
          a = En(window, "resize", function () {
            r.scalePoint();
          }),
          i = t.onLayoutUpdate(function () {
            r.isDragging && r.resolveDragConstraints();
          }),
          s = t.prevSnapshot;
        return (s == null ? void 0 : s.isDragging) &&
          this.start(os, { cursorProgress: s.cursorProgress }),
          function () {
            o == null || o(),
              a == null || a(),
              i == null || i(),
              r.cancelDrag();
          };
      },
      e;
  }();
function ur(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function Hc(e, t) {
  t === void 0 && (t = 10);
  var r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
function Gc(e, t) {
  var r = e.dragControls,
    n = x.useContext(rr).transformPagePoint,
    o = Qt(function () {
      return new Yc({ visualElement: t });
    });
  o.updateProps(y(y({}, e), { transformPagePoint: n })),
    x.useEffect(function () {
      return r && r.subscribe(o);
    }, [o]),
    x.useEffect(function () {
      return o.mount(t);
    }, []);
}
var Wc = sr(function (e) {
    var t = e.visualElement, r = j(e, ["visualElement"]);
    return Gc(r, t);
  }),
  Kc = {
    key: "drag",
    shouldRender: function (e) {
      return !!e.drag || !!e.dragControls;
    },
    getComponent: function () {
      return Wc;
    },
  },
  qc = sr(function (e) {
    var t = e.custom,
      r = e.visualElement,
      n = H(Ki(), 2),
      o = n[0],
      a = n[1],
      i = x.useContext(er);
    x.useEffect(function () {
      var s,
        f,
        u = (s = r.animationState) === null || s === void 0
          ? void 0
          : s.setActive(N.Exit, !o, {
            custom: (f = i == null
                    ? void 0
                    : i.custom) !== null && f !== void 0
              ? f
              : t,
          });
      !o && (u == null || u.then(a));
    }, [o]);
  }),
  Xc = {
    key: "exit",
    shouldRender: function (e) {
      return !!e.exit && !Xi(e);
    },
    getComponent: function () {
      return qc;
    },
  };
function Zc(e, t) {
  var r = x.useMemo(function () {
    return t.subscribe(e);
  }, [t]);
  Sn(function () {
    return r == null ? void 0 : r();
  });
}
var Jc = sr(function (e) {
    var t = e.visualElement, r = e.animate;
    t.animationState || (t.animationState = lc(t));
    var n = gi();
    x.useEffect(function () {
      t.animationState.setProps(e, t.inheritsVariants ? n : void 0);
    }), r instanceof Di && Zc(t, r);
  }),
  Qc = {
    key: "animation",
    shouldRender: function () {
      return !0;
    },
    getComponent: function (e) {
      var t = e.animate,
        r = e.whileHover,
        n = e.whileFocus,
        o = e.whileTap,
        a = e.whileDrag,
        i = e.exit,
        s = e.variants;
      return t || r || n || o || a || i || s ? Jc : void 0;
    },
  };
function ed(e, t, r, n) {
  e.min = $(t.min, r.min, n), e.max = $(t.max, r.max, n);
}
var as = 1e3,
  ad = function (e) {
    we(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.frameTarget = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
        r.stopAxisAnimation = { x: void 0, y: void 0 },
        r.animate = function (n, o, a) {
          a === void 0 && (a = {});
          var i = a.originBox,
            s = a.targetBox,
            f = a.visibilityAction,
            u = a.shouldStackAnimate,
            l = j(a, [
              "originBox",
              "targetBox",
              "visibilityAction",
              "shouldStackAnimate",
            ]),
            c = r.props,
            d = c.visualElement,
            p = c.layout;
          if (u === !1) return r.safeToRemove();
          o = i || o, n = s || n;
          var v = td(o, n),
            m = ae(function (h) {
              if (p === "position") {
                var g = n[h].max - n[h].min;
                o[h].max = o[h].min + g;
              }
              if (!d.isTargetBoxLocked) {
                if (f !== void 0) f === je.Hide ? d.hide() : d.show();
                else {
                  return v
                    ? r.animateAxis(h, n[h], o[h], l)
                    : d.setAxisTarget(h, n[h].min, n[h].max);
                }
              }
            });
          return d.render(),
            Promise.all(m).then(function () {
              var h, g;
              (g = (h = r.props).onLayoutAnimationComplete) === null ||
              g === void 0 || g.call(h),
                d.isPresent ? d.presence = I.Present : r.safeToRemove();
            });
        },
        r;
    }
    return t.prototype.componentDidMount = function () {
      var r = this, n = this.props.visualElement;
      n.animateMotionValue = ir,
        n.enableLayoutProjection(),
        this.unsubLayoutReady = n.onLayoutUpdate(this.animate),
        n.updateConfig(y(y({}, n.config), {
          safeToRemove: function () {
            return r.safeToRemove();
          },
        }));
    },
      t.prototype.componentWillUnmount = function () {
        var r = this;
        this.unsubLayoutReady(),
          ae(function (n) {
            var o, a;
            return (a = (o = r.stopAxisAnimation)[n]) === null || a === void 0
              ? void 0
              : a.call(o);
          });
      },
      t.prototype.animateAxis = function (r, n, o, a) {
        var i,
          s,
          f = a === void 0 ? {} : a,
          u = f.transition,
          l = f.crossfadeOpacity;
        (s = (i = this.stopAxisAnimation)[r]) === null || s === void 0 ||
          s.call(i);
        var c = this.props.visualElement,
          d = this.frameTarget[r],
          p = c.getAxisProgress()[r];
        p.clearListeners(), p.set(0), p.set(0);
        var v;
        l && (v = this.createCrossfadeAnimation(l), c.show());
        var m = function () {
          var b = p.get() / as;
          ed(d, o, n, b), c.setAxisTarget(r, d.min, d.max), v == null || v(b);
        };
        m(), c.updateLayoutDelta();
        var h = p.onChange(m),
          g = ir(
            r === "x"
              ? "layoutX"
              : "layoutY",
            p,
            as,
            u || this.props.transition || rd,
          ).then(h);
        return this.stopAxisAnimation[r] = function () {
          p.stop(), h();
        },
          g;
      },
      t.prototype.createCrossfadeAnimation = function (r) {
        var n = this.props.visualElement, o = n.getValue("opacity", 0);
        return function (a) {
          o.set(nd($(0, 1, a))), r.set(od($(1, 0, a)));
        };
      },
      t.prototype.safeToRemove = function () {
        var r, n;
        (n = (r = this.props).safeToRemove) === null || n === void 0 ||
          n.call(r);
      },
      t.prototype.render = function () {
        return null;
      },
      t;
  }(x.Component);
function id(e) {
  var t = H(Ki(), 2), r = t[1];
  return x.createElement(ad, y({}, e, { safeToRemove: r }));
}
function td(e, t) {
  return !is(e) && !is(t) && (!fr(e.x, t.x) || !fr(e.y, t.y));
}
var ss = { min: 0, max: 0 };
function is(e) {
  return fr(e.x, ss) && fr(e.y, ss);
}
function fr(e, t) {
  return e.min === t.min && e.max === t.max;
}
var rd = { duration: .45, ease: [.4, 0, .1, 1] };
function us(e, t, r) {
  return function (n) {
    return n < e ? 0 : n > t ? 1 : r(Pe(e, t, n));
  };
}
var nd = us(0, .5, kt),
  od = us(.5, .95, Ft),
  sd = {
    key: "animate-layout",
    shouldRender: function (e) {
      return !!e.layout || !!e.layoutId;
    },
    getComponent: function () {
      return id;
    },
  },
  ud = function (e) {
    we(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.componentDidMount = function () {
      var r = this.props,
        n = r.syncLayout,
        o = r.framerSyncLayout,
        a = r.visualElement;
      ke(n) && n.register(a), ke(o) && o.register(a);
    },
      t.prototype.getSnapshotBeforeUpdate = function () {
        var r = this.props, n = r.syncLayout, o = r.visualElement;
        return ke(n) ? n.syncUpdate() : (o.snapshotBoundingBox(), n.add(o)),
          null;
      },
      t.prototype.componentDidUpdate = function () {
        var r = this.props, n = r.syncLayout, o = r.visualElement;
        ke(n) || n.flush(), o.rebaseTargetBox();
      },
      t.prototype.render = function () {
        return null;
      },
      t;
  }(x.default.Component);
function fd(e) {
  var t = x.useContext(Dn), r = x.useContext(Gi);
  return x.default.createElement(
    ud,
    y({}, e, { syncLayout: t, framerSyncLayout: r }),
  );
}
var fs = {
    key: "measure-layout",
    shouldRender: function (e) {
      return !!e.drag || !!e.layout || !!e.layoutId;
    },
    getComponent: function () {
      return fd;
    },
  },
  ld = [fs, Qc, Kc, yc, Xc, sd],
  cd = { useVisualElement: Ll, useRender: Sc };
function ls(e) {
  var t = y(y({}, cd), { defaultFeatures: e });
  function r(a) {
    return Ji(a, t);
  }
  var n = new Map();
  function o(a, i) {
    return i === "custom"
      ? a.custom
      : (n.has(i) || n.set(i, Ji(i, t)), n.get(i));
  }
  return new Proxy({ custom: r }, { get: o });
}
var Nn = ls(ld);
var jp = ls([fs]);
function dd(e, t) {
  if (t && e !== t.lead) return { visibilityAction: je.Hide };
  if (
    t && e.presence !== I.Entering && e === t.lead && t.lead !== t.prevLead
  ) {
    return { visibilityAction: je.Show };
  }
  var r, n;
  return e.presence === I.Entering
    ? r = t == null ? void 0 : t.getFollowOrigin()
    : e.presence === I.Exiting &&
      (n = t == null ? void 0 : t.getFollowTarget()),
    { originBox: r, targetBox: n };
}
function pd(e, t) {
  var r, n, o, a = {}, i = t && t.lead, s = i == null ? void 0 : i.presence;
  return t && e === i
    ? e.presence === I.Entering
      ? a.originBox = t.getFollowOrigin()
      : e.presence === I.Exiting && (a.targetBox = t.getFollowTarget())
    : t && e === t.follow &&
      (a.transition = t.getLeadTransition(),
        s === I.Entering
          ? a.targetBox = t.getLeadTarget()
          : s === I.Exiting && (a.originBox = t.getLeadOrigin())),
    !((r = t == null ? void 0 : t.follow) === null || r === void 0
        ? void 0
        : r.isPresenceRoot) && !(i == null ? void 0 : i.isPresenceRoot) ||
    (!t || e === i
      ? e.presence === I.Entering && (a.crossfadeOpacity = (n = t == null
              ? void 0
              : t.follow) === null || n === void 0
        ? void 0
        : n.getValue("opacity", 0))
      : t && e === t.follow
      ? !i || s === I.Entering ||
        s === I.Exiting && (a.crossfadeOpacity = (o = t == null
                  ? void 0
                  : t.lead) === null || o === void 0
            ? void 0
            : o.getValue("opacity", 1))
      : a.visibilityAction = je.Hide),
    a;
}
function vd(e, t) {
  for (
    var r = H(t, 2),
      n = r[0],
      o = r[1],
      a = void 0,
      i = 0,
      s = void 0,
      f = e.length,
      u = !1,
      l = f - 1;
    l >= 0;
    l--
  ) {
    var c = e[l], d = l === f - 1;
    if (d && (u = c.isPresent), u) a = c;
    else {
      var p = e[l - 1];
      p && p.isPresent && (a = c);
    }
    if (a) {
      i = l;
      break;
    }
  }
  if (a || (a = e[0]), s = e[i - 1], a) {
    for (var l = i - 1; l >= 0; l--) {
      var c = e[l];
      if (c.isPresent) {
        s = c;
        break;
      }
    }
  }
  return a !== n && !u && s === o && e.find(function (v) {
    return v === n;
  }) && (a = n),
    [a, s];
}
var hd = function () {
  function e() {
    this.order = [], this.hasChildren = !1;
  }
  return e.prototype.add = function (t) {
    var r;
    if (this.order.push(t), this.snapshot) {
      t.prevSnapshot = this.snapshot,
        t.prevViewportBox = this.snapshot.boundingBox;
      var n = this.snapshot.latestMotionValues;
      for (var o in n) {
        t.hasValue(o)
          ? (r = t.getValue(o)) === null || r === void 0 || r.set(n[o])
          : t.addValue(o, Te(n[o]));
      }
    }
    this.hasChildren = !0;
  },
    e.prototype.remove = function (t) {
      var r = this.order.findIndex(function (n) {
        return t === n;
      });
      r !== -1 && this.order.splice(r, 1);
    },
    e.prototype.updateLeadAndFollow = function () {
      this.prevLead = this.lead, this.prevFollow = this.follow;
      var t = H(vd(this.order, [this.lead, this.follow]), 2),
        r = t[0],
        n = t[1];
      this.lead = r, this.follow = n;
    },
    e.prototype.updateSnapshot = function () {
      if (!!this.lead) {
        var t = {
          boundingBox: this.lead.prevViewportBox,
          latestMotionValues: {},
        };
        this.lead.forEachValue(function (n, o) {
          var a = n.get();
          Kt(a) || (t.latestMotionValues[o] = a);
        });
        var r = ns.get(this.lead);
        r && r.isDragging &&
        (t.isDragging = !0, t.cursorProgress = r.cursorProgress),
          this.snapshot = t;
      }
    },
    e.prototype.isLeadPresent = function () {
      var t;
      return this.lead &&
        ((t = this.lead) === null || t === void 0 ? void 0 : t.presence) !==
          I.Exiting;
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
function md(e) {
  for (var t = !1, r = {}, n = 0; n < dn.length; n++) {
    var o = dn[n], a = "rotate" + o;
    !e.hasValue(a) || e.latest[a] === 0 ||
      (t = !0, r[a] = e.latest[a], e.latest[a] = 0);
  }
  if (!!t) {
    e.render();
    for (var a in r) e.latest[a] = r[a];
    e.scheduleRender();
  }
}
var kp = function (e) {
  we(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.children = new Set(),
      r.stacks = new Map(),
      r.hasMounted = !1,
      r.updateScheduled = !1,
      r.renderScheduled = !1,
      r.syncContext = y(y({}, Ln()), {
        syncUpdate: function (n) {
          return r.scheduleUpdate(n);
        },
        forceUpdate: function () {
          r.syncContext = y({}, r.syncContext), r.scheduleUpdate(!0);
        },
        register: function (n) {
          return r.addChild(n);
        },
        remove: function (n) {
          return r.removeChild(n);
        },
      }),
      r;
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
      var r = this;
      this.renderScheduled = this.updateScheduled = !1;
      var n = this.props.type;
      this.children.forEach(function (i) {
        i.isPresent
          ? i.presence !== I.Entering &&
            (i.presence = i.presence === I.Exiting ? I.Entering : I.Present)
          : i.presence = I.Exiting;
      }), this.updateStacks();
      var o = n === "crossfade" ? pd : dd,
        a = {
          measureLayout: function (i) {
            return i.measureLayout();
          },
          layoutReady: function (i) {
            var s = i.layoutId;
            i.layoutReady(o(i, r.getStack(s)));
          },
          parent: this.context.visualElement,
        };
      this.children.forEach(function (i) {
        return r.syncContext.add(i);
      }),
        this.syncContext.flush(a),
        this.stacks.forEach(function (i) {
          return i.snapshot = void 0;
        });
    },
    t.prototype.updateStacks = function () {
      this.stacks.forEach(function (r) {
        return r.updateLeadAndFollow();
      });
    },
    t.prototype.scheduleUpdate = function (r) {
      r === void 0 && (r = !1),
        !!(r || !this.updateScheduled) &&
        (this.updateScheduled = !0,
          this.children.forEach(function (n) {
            return md(n);
          }),
          this.children.forEach(function (n) {
            return n.snapshotBoundingBox();
          }),
          this.stacks.forEach(function (n) {
            return n.updateSnapshot();
          }),
          (r || !this.renderScheduled) &&
          (this.renderScheduled = !0, this.forceUpdate()));
    },
    t.prototype.addChild = function (r) {
      this.children.add(r),
        this.addToStack(r),
        r.presence = this.hasMounted ? I.Entering : I.Present;
    },
    t.prototype.removeChild = function (r) {
      this.scheduleUpdate(), this.children.delete(r), this.removeFromStack(r);
    },
    t.prototype.addToStack = function (r) {
      var n = this.getStack(r.layoutId);
      n == null || n.add(r);
    },
    t.prototype.removeFromStack = function (r) {
      var n = this.getStack(r.layoutId);
      n == null || n.remove(r);
    },
    t.prototype.getStack = function (r) {
      if (
        r !== void 0
      ) {
        return !this.stacks.has(r) && this.stacks.set(r, new hd()),
          this.stacks.get(r);
      }
    },
    t.prototype.render = function () {
      return x.createElement(
        Dn.Provider,
        { value: this.syncContext },
        this.props.children,
      );
    },
    t.contextType = tr,
    t;
}(x.Component);
var Up = function () {
  function e() {
    this.componentControls = new Set();
  }
  return e.prototype.subscribe = function (t) {
    var r = this;
    return this.componentControls.add(t), function () {
      return r.componentControls.delete(t);
    };
  },
    e.prototype.start = function (t, r) {
      this.componentControls.forEach(function (n) {
        n.start(t.nativeEvent || t, r);
      });
    },
    e.prototype.updateConstraints = function () {
      this.componentControls.forEach(function (t) {
        t.prepareBoundingBox(), t.resolveDragConstraints();
      });
    },
    e;
}();
var $p = function (e) {
  we(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.initialState = {}, r;
  }
  return t.prototype.updateLayoutDelta = function () {},
    t.prototype.build = function () {},
    t.prototype.clean = function () {},
    t.prototype.makeTargetAnimatable = function (r) {
      var n = r.transition,
        o = r.transitionEnd,
        a = j(r, ["transition", "transitionEnd"]),
        i = di(a, n || {}, this);
      return ci(this, a, i), y({ transition: n, transitionEnd: o }, a);
    },
    t.prototype.getBoundingBox = function () {
      return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
    },
    t.prototype.readNativeValue = function (r) {
      return this.initialState[r] || 0;
    },
    t.prototype.render = function () {
      this.build();
    },
    t;
}(Ma);
var lr = be($e()),
  cs = [640, 750, 1024, 1920],
  gd = ({ onShare: e, position: t, children: r }) => {
    let [n, o] = lr.default.useState(100),
      [a, i] = lr.default.useState(cs[0]),
      s = lr.default.useRef(null);
    return Z(
      Nn.div,
      {
        ref: s,
        css: `
            right: 20px;
            top: 20px;
            white-space: normal;
            position: ${t || "fixed"};
            overflow: hidden;
            overflow-y: overlay;
          `,
        whileDrag: { scale: n / 100 * 1.1 },
        animate: { scale: n / 100, width: a },
        dragElastic: .5,
        dragMomentum: !1,
        drag: !0,
      },
      Z(
        "div",
        {
          css: xe`
                display: block;
                font-family: Roboto;
                font-weight: 600;
                text-align: right;
            `,
        },
        Z(
          "span",
          {
            css: xe`
            color: white;
            display: inline-block;
            margin-right: 20px;
            span{
              margin: 4px
            }
        `,
          },
          cs.map((f) =>
            Z(
              "span",
              {
                key: f,
                css: a === f
                  ? xe`
            background: green;
            padding: 7px;
            border-radius: 10px;
            font-size: 20px
          `
                  : "",
                onClick: () => i(f),
              },
              f,
              "px",
            )
          ),
        ),
        Z(
          "span",
          {
            css: xe`
            background: grey;
            color: white;
            padding: 7px;
        `,
          },
          Z("span", {
            css: "font-size: 20px; margin: 5px",
            onClick: () => o((f) => f - 10),
          }, "-"),
          Z(Nn.span, { drag: !0 }, n, "%"),
          Z("span", {
            css: "font-size: 20px; margin: 5px",
            onClick: () => o((f) => f + 10),
          }, "+"),
        ),
        Z("button", {
          css: yd({}),
          onClick: () => {
            console.log(s.current.clientHeight), e();
          },
        }, "\u{1F30E} Export"),
      ),
      Z("div", {
        css: xe`  
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
      }, Z("div", { id: "zbody", css: "margin: 8px" }, r)),
    );
  },
  yd = ({ color: e = "darkred", square: t = !1 }) =>
    xe`
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
export { gd as DraggableWindow };
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
/** @license React v16.13.1
 * react-is.production.min.js
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
