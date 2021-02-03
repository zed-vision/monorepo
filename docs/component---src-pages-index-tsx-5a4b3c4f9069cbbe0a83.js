(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "7jdZ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/forkMe-1a2bcb7dd2c870c3afe5d50466500c18.png";

/***/ }),

/***/ "QeBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js
var taggedTemplateLiteralLoose = __webpack_require__("fhSp");

// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("VtSi");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: /home/zed/z/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("3yYM");

// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("QsI/");

// EXTERNAL MODULE: /home/zed/z/node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 12 modules
var emotion_react_browser_esm = __webpack_require__("f7k3");

// EXTERNAL MODULE: /home/zed/z/node_modules/react/index.js
var react = __webpack_require__("ERkP");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ./src/components/bio.tsx
var bio = __webpack_require__("IgZc");

// EXTERNAL MODULE: ./src/components/layout.tsx
var layout = __webpack_require__("9Dj+");

// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// CONCATENATED MODULE: ./src/components/code/getUser.ts



var shaDB = {
  get: function () {
    var _get = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(key, type) {
      var _yield$import, getDB, db;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, "UUf3"));

            case 2:
              _yield$import = _context.sent;
              getDB = _yield$import.getDB;
              _context.next = 6;
              return getDB("shaDB");

            case 6:
              _context.t0 = _context.sent;
              _context.next = 9;
              return (0, _context.t0)();

            case 9:
              db = _context.sent;
              return _context.abrupt("return", db.get(key, type));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function get(_x, _x2) {
      return _get.apply(this, arguments);
    }

    return get;
  }(),
  put: function () {
    var _put = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2(key, value) {
      var _yield$import2, getDB, db;

      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, "UUf3"));

            case 2:
              _yield$import2 = _context2.sent;
              getDB = _yield$import2.getDB;
              _context2.next = 6;
              return getDB("shaDB");

            case 6:
              _context2.t0 = _context2.sent;
              _context2.next = 9;
              return (0, _context2.t0)();

            case 9:
              db = _context2.sent;
              return _context2.abrupt("return", db.put(key, value));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function put(_x3, _x4) {
      return _put.apply(this, arguments);
    }

    return put;
  }()
};
function getUserId() {
  return _getUserId.apply(this, arguments);
}

function _getUserId() {
  _getUserId = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
    var uuid, resp, data;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(typeof window === "undefined")) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", "");

          case 2:
            _context3.next = 4;
            return shaDB.get("uuid", "string");

          case 4:
            uuid = _context3.sent;

            if (uuid) {
              _context3.next = 15;
              break;
            }

            _context3.next = 8;
            return fetch("https://zed.vision/register");

          case 8:
            resp = _context3.sent;
            _context3.next = 11;
            return resp.json();

          case 11:
            data = _context3.sent;
            _context3.next = 14;
            return shaDB.put("uuid", data.uuid);

          case 14:
            return _context3.abrupt("return", data.uuid);

          case 15:
            return _context3.abrupt("return", uuid);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getUserId.apply(this, arguments);
}
// EXTERNAL MODULE: ./src/components/utils/typography.ts
var typography = __webpack_require__("cINY");

// EXTERNAL MODULE: /home/zed/z/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("KOtZ");

// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("zjfJ");

// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__("fGyu");

// CONCATENATED MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("BFfR");

// CONCATENATED MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__("XcBm");

// CONCATENATED MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
// CONCATENATED MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// CONCATENATED MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/construct.js


function construct_construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    construct_construct = Reflect.construct;
  } else {
    construct_construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(setPrototypeOf["a" /* default */])(instance, Class.prototype);
      return instance;
    };
  }

  return construct_construct.apply(null, arguments);
}
// CONCATENATED MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js




function wrapNativeSuper_wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  wrapNativeSuper_wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct_construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(setPrototypeOf["a" /* default */])(Wrapper, Class);
  };

  return wrapNativeSuper_wrapNativeSuper(Class);
}
// CONCATENATED MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/AwaitValue.js
function _AwaitValue(value) {
  this.wrapped = value;
}
// CONCATENATED MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/AsyncGenerator.js

function AsyncGenerator(gen) {
  var front, back;

  function send(key, arg) {
    return new Promise(function (resolve, reject) {
      var request = {
        key: key,
        arg: arg,
        resolve: resolve,
        reject: reject,
        next: null
      };

      if (back) {
        back = back.next = request;
      } else {
        front = back = request;
        resume(key, arg);
      }
    });
  }

  function resume(key, arg) {
    try {
      var result = gen[key](arg);
      var value = result.value;
      var wrappedAwait = value instanceof _AwaitValue;
      Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
        if (wrappedAwait) {
          resume(key === "return" ? "return" : "next", arg);
          return;
        }

        settle(result.done ? "return" : "normal", arg);
      }, function (err) {
        resume("throw", err);
      });
    } catch (err) {
      settle("throw", err);
    }
  }

  function settle(type, value) {
    switch (type) {
      case "return":
        front.resolve({
          value: value,
          done: true
        });
        break;

      case "throw":
        front.reject(value);
        break;

      default:
        front.resolve({
          value: value,
          done: false
        });
        break;
    }

    front = front.next;

    if (front) {
      resume(front.key, front.arg);
    } else {
      back = null;
    }
  }

  this._invoke = send;

  if (typeof gen["return"] !== "function") {
    this["return"] = undefined;
  }
}

if (typeof Symbol === "function" && Symbol.asyncIterator) {
  AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
    return this;
  };
}

AsyncGenerator.prototype.next = function (arg) {
  return this._invoke("next", arg);
};

AsyncGenerator.prototype["throw"] = function (arg) {
  return this._invoke("throw", arg);
};

AsyncGenerator.prototype["return"] = function (arg) {
  return this._invoke("return", arg);
};
// CONCATENATED MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/wrapAsyncGenerator.js

function _wrapAsyncGenerator(fn) {
  return function () {
    return new AsyncGenerator(fn.apply(this, arguments));
  };
}
// CONCATENATED MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/awaitAsyncGenerator.js

function _awaitAsyncGenerator(value) {
  return new _AwaitValue(value);
}
// CONCATENATED MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/asyncGeneratorDelegate.js
function _asyncGeneratorDelegate(inner, awaitWrap) {
  var iter = {},
      waiting = false;

  function pump(key, value) {
    waiting = true;
    value = new Promise(function (resolve) {
      resolve(inner[key](value));
    });
    return {
      done: false,
      value: awaitWrap(value)
    };
  }

  ;

  if (typeof Symbol === "function" && Symbol.iterator) {
    iter[Symbol.iterator] = function () {
      return this;
    };
  }

  iter.next = function (value) {
    if (waiting) {
      waiting = false;
      return value;
    }

    return pump("next", value);
  };

  if (typeof inner["throw"] === "function") {
    iter["throw"] = function (value) {
      if (waiting) {
        waiting = false;
        throw value;
      }

      return pump("throw", value);
    };
  }

  if (typeof inner["return"] === "function") {
    iter["return"] = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }

      return pump("return", value);
    };
  }

  return iter;
}
// CONCATENATED MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/asyncIterator.js
function _asyncIterator(iterable) {
  var method;

  if (typeof Symbol !== "undefined") {
    if (Symbol.asyncIterator) {
      method = iterable[Symbol.asyncIterator];
      if (method != null) return method.call(iterable);
    }

    if (Symbol.iterator) {
      method = iterable[Symbol.iterator];
      if (method != null) return method.call(iterable);
    }
  }

  throw new TypeError("Object is not async iterable");
}
// CONCATENATED MODULE: ../code/modules/ipfs.client.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){Object(defineProperty["a" /* default */])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _createForOfIteratorHelperLoose(o,allowArrayLike){var it;if(typeof Symbol==="undefined"||o[Symbol.iterator]==null){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;return function(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}it=o[Symbol.iterator]();return it.next.bind(it);}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}var sr=Object.create,ae=Object.defineProperty,rr=Object.getPrototypeOf,nr=Object.prototype.hasOwnProperty,ir=Object.getOwnPropertyNames,or=Object.getOwnPropertyDescriptor;var br=function br(e){return ae(e,"__esModule",{value:!0});};var b=function b(e,t){return function(){return t||(t={exports:{}},e(t.exports,t)),t.exports;};};var ar=function ar(e,t,s){if(br(e),t&&typeof t=="object"||typeof t=="function"){var _loop=function _loop(){var r=_step2.value;!nr.call(e,r)&&r!=="default"&&ae(e,r,{get:function get(){return t[r];},enumerable:!(s=or(t,r))||s.enumerable});};for(var _iterator2=_createForOfIteratorHelperLoose(ir(t)),_step2;!(_step2=_iterator2()).done;){_loop();}}return e;},S=function S(e){return e&&e.__esModule?e:ar(ae(e!=null?sr(rr(e)):{},"default",{value:e,enumerable:!0}),e);};var Ne=b(function(E0,Me){"use strict";var cr=/*#__PURE__*/function(){var _ref2=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(e){var t,_iteratorNormalCompletion,_didIteratorError,_iteratorError,_iterator,_step,_value,s;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:t=[];_iteratorNormalCompletion=true;_didIteratorError=false;_context.prev=3;_iterator=_asyncIterator(e);case 5:_context.next=7;return _iterator.next();case 7:_step=_context.sent;_iteratorNormalCompletion=_step.done;_context.next=11;return _step.value;case 11:_value=_context.sent;if(_iteratorNormalCompletion){_context.next=18;break;}s=_value;t.push(s);case 15:_iteratorNormalCompletion=true;_context.next=5;break;case 18:_context.next=24;break;case 20:_context.prev=20;_context.t0=_context["catch"](3);_didIteratorError=true;_iteratorError=_context.t0;case 24:_context.prev=24;_context.prev=25;if(!(!_iteratorNormalCompletion&&_iterator.return!=null)){_context.next=29;break;}_context.next=29;return _iterator.return();case 29:_context.prev=29;if(!_didIteratorError){_context.next=32;break;}throw _iteratorError;case 32:return _context.finish(29);case 33:return _context.finish(24);case 34:return _context.abrupt("return",t);case 35:case"end":return _context.stop();}}},_callee,null,[[3,20,24,34],[25,,29,33]]);}));return function cr(_x4){return _ref2.apply(this,arguments);};}();Me.exports=cr;});var P=b(function(ce){"use strict";var xr=function xr(e){var t=e.name,s=e.message,r=e.stack,n=e.code,i=e.detail;return{name:t,message:s,stack:r,code:n,detail:i};};ce.encodeError=xr;var dr=function dr(e){if(e instanceof Error)return e;{var t=e.name,s=e.message,r=e.stack,n=e.code;return Object.assign(lr(t,s),{name:t,stack:r,code:n});}};ce.decodeError=dr;var lr=function lr(e,t){switch(e){case"RangeError":return new RangeError(t);case"ReferenceError":return ReferenceError(t);case"SyntaxError":return new SyntaxError(t);case"TypeError":return new TypeError(t);case"URIError":return new URIError(t);default:return new Error(t);}};});var Be=b(function(X){"use strict";X.TimeoutError=/*#__PURE__*/function(_Error){Object(inheritsLoose["a" /* default */])(_class,_Error);function _class(){return _Error.apply(this,arguments)||this;}_createClass(_class,[{key:"name",get:function get(){return this.constructor.name;}}]);return _class;}(/*#__PURE__*/wrapNativeSuper_wrapNativeSuper(Error));X.AbortError=/*#__PURE__*/function(_Error2){Object(inheritsLoose["a" /* default */])(_class2,_Error2);function _class2(){return _Error2.apply(this,arguments)||this;}_createClass(_class2,[{key:"name",get:function get(){return this.constructor.name;}}]);return _class2;}(/*#__PURE__*/wrapNativeSuper_wrapNativeSuper(Error));X.DisconnectError=/*#__PURE__*/function(_Error3){Object(inheritsLoose["a" /* default */])(_class3,_Error3);function _class3(){return _Error3.apply(this,arguments)||this;}_createClass(_class3,[{key:"name",get:function get(){return this.constructor.name;}}]);return _class3;}(/*#__PURE__*/wrapNativeSuper_wrapNativeSuper(Error));});var ze=b(function(D0,Re){"use strict";var _P=P(),kr=_P.decodeError,_Be=Be(),ur=_Be.DisconnectError,fr=_Be.TimeoutError,hr=_Be.AbortError;Re.exports=/*#__PURE__*/function(){function K(t){this.port=null,this.id=Math.random().toString(32).slice(2),this.nextID=0,this.queries=Object.create(null),t&&this.connect(t);}var _proto=K.prototype;_proto.execute=function execute(t){var _this6=this;var s=this.id+"@"+this.nextID++;return this.queries[s]=t,t.timeout>0&&t.timeout<Infinity&&(t.timerID=setTimeout(K.timeout,t.timeout,this,s)),t.signal&&t.signal.addEventListener("abort",function(){return _this6.abort(s);},{once:!0}),this.port&&K.postQuery(this.port,s,t),t.result;};_proto.connect=function connect(t){if(this.port)throw new Error("Transport is already open");this.port=t,this.port.addEventListener("message",this),this.port.start();for(var _i2=0,_Object$entries=Object.entries(this.queries);_i2<_Object$entries.length;_i2++){var _Object$entries$_i=_Object$entries[_i2],s=_Object$entries$_i[0],r=_Object$entries$_i[1];K.postQuery(t,s,r);}};_proto.disconnect=function disconnect(){var t=new ur();for(var _i3=0,_Object$entries2=Object.entries(this.queries);_i3<_Object$entries2.length;_i3++){var _Object$entries2$_i=_Object$entries2[_i3],s=_Object$entries2$_i[0],r=_Object$entries2$_i[1];r.fail(t),this.abort(s);}this.port&&(this.port.removeEventListener("message",this),this.port.close());};K.timeout=function timeout(t,s){var r=t.queries,n=r[s];n&&(delete r[s],n.fail(new fr("request timed out")),t.port&&t.port.postMessage({type:"abort",id:s}));};_proto.abort=function abort(t){var s=this.queries,r=s[t];r&&(delete s[t],r.fail(new hr()),this.port&&this.port.postMessage({type:"abort",id:t}),r.timerID!=null&&clearTimeout(r.timerID));};K.postQuery=function postQuery(t,s,r){t.postMessage({type:"query",namespace:r.namespace,method:r.method,id:s,input:r.toJSON()},Object(toConsumableArray["a" /* default */])(new Set(r.transfer()||[])));};_proto.handleEvent=function handleEvent(t){var _t$data=t.data,s=_t$data.id,r=_t$data.result,n=this.queries[s];n&&(delete this.queries[s],r.ok?n.succeed(r.value):n.fail(kr(r.error)),n.timerID!=null&&clearTimeout(n.timerID));};return K;}();});var Fe=b(function(j0,Oe){"use strict";Oe.exports=/*#__PURE__*/function(){function _class4(t,s,r){var _this7=this;this.result=new Promise(function(n,i){_this7.succeed=n,_this7.fail=i,_this7.signal=r.signal,_this7.input=r,_this7.namespace=t,_this7.method=s,_this7.timeout=r.timeout==null?Infinity:r.timeout,_this7.timerID=null;});}var _proto2=_class4.prototype;_proto2.toJSON=function toJSON(){return this.input;};_proto2.transfer=function transfer(){return this.input.transfer;};return _class4;}();});var Ve=b(function(M0,Le){"use strict";var pr=Fe();Le.exports=/*#__PURE__*/function(){function _class5(t,s,r){var _this8=this;this.transport=r;var n=this;var _loop2=function _loop2(){var i=_step3.value;n[i]=function(o){return _this8.transport.execute(new pr(t,i.toString(),o));};};for(var _iterator3=_createForOfIteratorHelperLoose(s),_step3;!(_step3=_iterator3()).done;){_loop2();}}return _class5;}();});var R=b(function(B0,_e){"use strict";var mr=Ve();_e.exports=/*#__PURE__*/function(){function _class6(t,s,r){this.remote=new mr(t,s,r);}return _class6;}();});var Qe=b(function(R0,Ge){"use strict";function gr(e){if(e.length>=255)throw new TypeError("Alphabet too long");for(var t=new Uint8Array(256),s=0;s<t.length;s++){t[s]=255;}for(var r=0;r<e.length;r++){var n=e.charAt(r),i=n.charCodeAt(0);if(t[i]!==255)throw new TypeError(n+" is ambiguous");t[i]=r;}var o=e.length,a=e.charAt(0),l=Math.log(o)/Math.log(256),k=Math.log(256)/Math.log(o);function Q(c){if(c instanceof Uint8Array||(ArrayBuffer.isView(c)?c=new Uint8Array(c.buffer,c.byteOffset,c.byteLength):Array.isArray(c)&&(c=Uint8Array.from(c))),!(c instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(c.length===0)return"";for(var d=0,C=0,f=0,m=c.length;f!==m&&c[f]===0;){f++,d++;}for(var g=(m-f)*k+1>>>0,u=new Uint8Array(g);f!==m;){for(var w=c[f],A=0,h=g-1;(w!==0||A<C)&&h!==-1;h--,A++){w+=256*u[h]>>>0,u[h]=w%o>>>0,w=w/o>>>0;}if(w!==0)throw new Error("Non-zero carry");C=A,f++;}for(var y=g-C;y!==g&&u[y]===0;){y++;}for(var J=a.repeat(d);y<g;++y){J+=e.charAt(u[y]);}return J;}function Ue(c){if(typeof c!="string")throw new TypeError("Expected String");if(c.length===0)return new Uint8Array();var d=0;if(c[d]!==" "){for(var C=0,f=0;c[d]===a;){C++,d++;}for(var m=(c.length-d)*l+1>>>0,g=new Uint8Array(m);c[d];){var u=t[c.charCodeAt(d)];if(u===255)return;for(var w=0,A=m-1;(u!==0||w<f)&&A!==-1;A--,w++){u+=o*g[A]>>>0,g[A]=u%256>>>0,u=u/256>>>0;}if(u!==0)throw new Error("Non-zero carry");f=w,d++;}if(c[d]!==" "){for(var h=m-f;h!==m&&g[h]===0;){h++;}for(var y=new Uint8Array(C+(m-h)),J=C;h!==m;){y[J++]=g[h++];}return y;}}}function tr(c){var d=Ue(c);if(d)return d;throw new Error("Non-base"+o+" character");}return{encode:Q,decodeUnsafe:Ue,decode:tr};}Ge.exports=gr;});var D=b(function(xe){"use strict";xe.TextEncoder=TextEncoder;xe.TextDecoder=TextDecoder;});var $=b(function(O0,Je){"use strict";var _D=D(),wr=_D.TextEncoder,yr=_D.TextDecoder,vr=new yr(),Er=function Er(e){return vr.decode(e);},Ar=new wr(),Cr=function Cr(e){return Ar.encode(e);};function Ir(e,t){var s=new Uint8Array(t),r=0;for(var _iterator4=_createForOfIteratorHelperLoose(e),_step4;!(_step4=_iterator4()).done;){var _n2=_step4.value;s.set(_n2,r),r+=_n2.length;}return s;}Je.exports={decodeText:Er,encodeText:Cr,concat:Ir};});var Ke=b(function(F0,Pe){"use strict";var _$=$(),qr=_$.encodeText,Xe=/*#__PURE__*/function(){function Xe(t,s,r,n){this.name=t,this.code=s,this.codeBuf=qr(this.code),this.alphabet=n,this.codec=r(n);}var _proto3=Xe.prototype;_proto3.encode=function encode(t){return this.codec.encode(t);};_proto3.decode=function decode(t){for(var _iterator5=_createForOfIteratorHelperLoose(t),_step5;!(_step5=_iterator5()).done;){var s=_step5.value;if(this.alphabet&&this.alphabet.indexOf(s)<0)throw new Error("invalid character '"+s+"' in '"+t+"'");}return this.codec.decode(t);};return Xe;}();Pe.exports=Xe;});var He=b(function(L0,$e){"use strict";var Sr=function Sr(e,t,s){var r={};for(var k=0;k<t.length;++k){r[t[k]]=k;}var n=e.length;for(;e[n-1]==="=";){--n;}var i=new Uint8Array(n*s/8|0),o=0,a=0,l=0;for(var _k=0;_k<n;++_k){var Q=r[e[_k]];if(Q===void 0)throw new SyntaxError("Invalid character "+e[_k]);a=a<<s|Q,o+=s,o>=8&&(o-=8,i[l++]=255&a>>o);}if(o>=s||255&a<<8-o)throw new SyntaxError("Unexpected end of data");return i;},Dr=function Dr(e,t,s){var r=t[t.length-1]==="=",n=(1<<s)-1,i="",o=0,a=0;for(var l=0;l<e.length;++l){for(a=a<<8|e[l],o+=8;o>s;){o-=s,i+=t[n&a>>o];}}if(o&&(i+=t[n&a<<s-o]),r)for(;i.length*s&7;){i+="=";}return i;},Tr=function Tr(e){return function(t){return{encode:function encode(s){return Dr(s,t,e);},decode:function decode(s){return Sr(s,t,e);}};};};$e.exports={rfc4648:Tr};});var H=b(function(V0,Ze){"use strict";var z=Qe(),jr=Ke(),_He=He(),x=_He.rfc4648,_$2=$(),Ur=_$2.decodeText,Mr=_$2.encodeText,Nr=function Nr(){return{encode:Ur,decode:Mr};},We=[["identity","\0",Nr,""],["base2","0",x(1),"01"],["base8","7",x(3),"01234567"],["base10","9",z,"0123456789"],["base16","f",x(4),"0123456789abcdef"],["base16upper","F",x(4),"0123456789ABCDEF"],["base32hex","v",x(5),"0123456789abcdefghijklmnopqrstuv"],["base32hexupper","V",x(5),"0123456789ABCDEFGHIJKLMNOPQRSTUV"],["base32hexpad","t",x(5),"0123456789abcdefghijklmnopqrstuv="],["base32hexpadupper","T",x(5),"0123456789ABCDEFGHIJKLMNOPQRSTUV="],["base32","b",x(5),"abcdefghijklmnopqrstuvwxyz234567"],["base32upper","B",x(5),"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"],["base32pad","c",x(5),"abcdefghijklmnopqrstuvwxyz234567="],["base32padupper","C",x(5),"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567="],["base32z","h",x(5),"ybndrfg8ejkmcpqxot1uwisza345h769"],["base36","k",z,"0123456789abcdefghijklmnopqrstuvwxyz"],["base36upper","K",z,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"],["base58btc","z",z,"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],["base58flickr","Z",z,"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"],["base64","m",x(6),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"],["base64pad","M",x(6),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],["base64url","u",x(6),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"],["base64urlpad","U",x(6),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="]],Ye=We.reduce(function(e,t){return e[t[0]]=new jr(t[0],t[1],t[2],t[3]),e;},{}),Br=We.reduce(function(e,t){return e[t[1]]=Ye[t[0]],e;},{});Ze.exports={names:Ye,codes:Br};});var O=b(function(v,et){"use strict";var T=H(),_$3=$(),Rr=_$3.encodeText,Z=_$3.decodeText,tt=_$3.concat;function Or(e,t){if(!t)throw new Error("requires an encoded Uint8Array");var _I=I(e),s=_I.name,r=_I.codeBuf;return zr(s,t),tt([r,t],r.length+t.length);}function Fr(e,t){var s=I(e),r=Rr(s.encode(t));return tt([s.codeBuf,r],s.codeBuf.length+r.length);}function Lr(e){e instanceof Uint8Array&&(e=Z(e));var t=e[0];return["f","F","v","V","t","T","b","B","c","C","h","k","K"].includes(t)&&(e=e.toLowerCase()),I(e[0]).decode(e.substring(1));}function Vr(e){if(e instanceof Uint8Array&&(e=Z(e)),Object.prototype.toString.call(e)!=="[object String]")return!1;try{return I(e[0]).name;}catch(t){return!1;}}function zr(e,t){I(e).decode(Z(t));}function I(e){if(T.names[e])return T.names[e];if(T.codes[e])return T.codes[e];throw new Error("Unsupported encoding: "+e);}function _r(e){return e instanceof Uint8Array&&(e=Z(e)),I(e[0]);}v=et.exports=Or;v.encode=Fr;v.decode=Lr;v.isEncoded=Vr;v.encoding=I;v.encodingFromData=_r;v.names=Object.freeze(T.names);v.codes=Object.freeze(T.codes);});var nt=b(function(_0,st){st.exports=le;var rt=128,Gr=127,Qr=~Gr,Jr=Math.pow(2,31);function le(e,t,s){if(Number.MAX_SAFE_INTEGER&&e>Number.MAX_SAFE_INTEGER)throw le.bytes=0,new RangeError("Could not encode varint");t=t||[],s=s||0;for(var r=s;e>=Jr;){t[s++]=e&255|rt,e/=128;}for(;e&Qr;){t[s++]=e&255|rt,e>>>=7;}return t[s]=e|0,le.bytes=s-r+1,t;}});var bt=b(function(G0,it){it.exports=de;var Pr=128,ot=127;function de(e,t){var s=0,t=t||0,r=0,n=t,i,o=e.length;do{if(n>=o||r>49)throw de.bytes=0,new RangeError("Could not decode varint");i=e[n++],s+=r<28?(i&ot)<<r:(i&ot)*Math.pow(2,r),r+=7;}while(i>=Pr);return de.bytes=n-t,s;}});var ct=b(function(Q0,at){var Xr=Math.pow(2,7),Kr=Math.pow(2,14),$r=Math.pow(2,21),Hr=Math.pow(2,28),Zr=Math.pow(2,35),Wr=Math.pow(2,42),Yr=Math.pow(2,49),en=Math.pow(2,56),tn=Math.pow(2,63);at.exports=function(e){return e<Xr?1:e<Kr?2:e<$r?3:e<Hr?4:e<Zr?5:e<Wr?6:e<Yr?7:e<en?8:e<tn?9:10;};});var lt=b(function(J0,xt){xt.exports={encode:nt(),decode:bt(),encodingLength:ct()};});var kt=b(function(P0,dt){"use strict";var sn=Object.freeze({identity:0,sha1:17,"sha2-256":18,"sha2-512":19,"sha3-512":20,"sha3-384":21,"sha3-256":22,"sha3-224":23,"shake-128":24,"shake-256":25,"keccak-224":26,"keccak-256":27,"keccak-384":28,"keccak-512":29,blake3:30,"murmur3-128":34,"murmur3-32":35,"dbl-sha2-256":86,md4:212,md5:213,bmt:214,"sha2-256-trunc254-padded":4114,"ripemd-128":4178,"ripemd-160":4179,"ripemd-256":4180,"ripemd-320":4181,x11:4352,kangarootwelve:7425,"sm3-256":21325,"blake2b-8":45569,"blake2b-16":45570,"blake2b-24":45571,"blake2b-32":45572,"blake2b-40":45573,"blake2b-48":45574,"blake2b-56":45575,"blake2b-64":45576,"blake2b-72":45577,"blake2b-80":45578,"blake2b-88":45579,"blake2b-96":45580,"blake2b-104":45581,"blake2b-112":45582,"blake2b-120":45583,"blake2b-128":45584,"blake2b-136":45585,"blake2b-144":45586,"blake2b-152":45587,"blake2b-160":45588,"blake2b-168":45589,"blake2b-176":45590,"blake2b-184":45591,"blake2b-192":45592,"blake2b-200":45593,"blake2b-208":45594,"blake2b-216":45595,"blake2b-224":45596,"blake2b-232":45597,"blake2b-240":45598,"blake2b-248":45599,"blake2b-256":45600,"blake2b-264":45601,"blake2b-272":45602,"blake2b-280":45603,"blake2b-288":45604,"blake2b-296":45605,"blake2b-304":45606,"blake2b-312":45607,"blake2b-320":45608,"blake2b-328":45609,"blake2b-336":45610,"blake2b-344":45611,"blake2b-352":45612,"blake2b-360":45613,"blake2b-368":45614,"blake2b-376":45615,"blake2b-384":45616,"blake2b-392":45617,"blake2b-400":45618,"blake2b-408":45619,"blake2b-416":45620,"blake2b-424":45621,"blake2b-432":45622,"blake2b-440":45623,"blake2b-448":45624,"blake2b-456":45625,"blake2b-464":45626,"blake2b-472":45627,"blake2b-480":45628,"blake2b-488":45629,"blake2b-496":45630,"blake2b-504":45631,"blake2b-512":45632,"blake2s-8":45633,"blake2s-16":45634,"blake2s-24":45635,"blake2s-32":45636,"blake2s-40":45637,"blake2s-48":45638,"blake2s-56":45639,"blake2s-64":45640,"blake2s-72":45641,"blake2s-80":45642,"blake2s-88":45643,"blake2s-96":45644,"blake2s-104":45645,"blake2s-112":45646,"blake2s-120":45647,"blake2s-128":45648,"blake2s-136":45649,"blake2s-144":45650,"blake2s-152":45651,"blake2s-160":45652,"blake2s-168":45653,"blake2s-176":45654,"blake2s-184":45655,"blake2s-192":45656,"blake2s-200":45657,"blake2s-208":45658,"blake2s-216":45659,"blake2s-224":45660,"blake2s-232":45661,"blake2s-240":45662,"blake2s-248":45663,"blake2s-256":45664,"skein256-8":45825,"skein256-16":45826,"skein256-24":45827,"skein256-32":45828,"skein256-40":45829,"skein256-48":45830,"skein256-56":45831,"skein256-64":45832,"skein256-72":45833,"skein256-80":45834,"skein256-88":45835,"skein256-96":45836,"skein256-104":45837,"skein256-112":45838,"skein256-120":45839,"skein256-128":45840,"skein256-136":45841,"skein256-144":45842,"skein256-152":45843,"skein256-160":45844,"skein256-168":45845,"skein256-176":45846,"skein256-184":45847,"skein256-192":45848,"skein256-200":45849,"skein256-208":45850,"skein256-216":45851,"skein256-224":45852,"skein256-232":45853,"skein256-240":45854,"skein256-248":45855,"skein256-256":45856,"skein512-8":45857,"skein512-16":45858,"skein512-24":45859,"skein512-32":45860,"skein512-40":45861,"skein512-48":45862,"skein512-56":45863,"skein512-64":45864,"skein512-72":45865,"skein512-80":45866,"skein512-88":45867,"skein512-96":45868,"skein512-104":45869,"skein512-112":45870,"skein512-120":45871,"skein512-128":45872,"skein512-136":45873,"skein512-144":45874,"skein512-152":45875,"skein512-160":45876,"skein512-168":45877,"skein512-176":45878,"skein512-184":45879,"skein512-192":45880,"skein512-200":45881,"skein512-208":45882,"skein512-216":45883,"skein512-224":45884,"skein512-232":45885,"skein512-240":45886,"skein512-248":45887,"skein512-256":45888,"skein512-264":45889,"skein512-272":45890,"skein512-280":45891,"skein512-288":45892,"skein512-296":45893,"skein512-304":45894,"skein512-312":45895,"skein512-320":45896,"skein512-328":45897,"skein512-336":45898,"skein512-344":45899,"skein512-352":45900,"skein512-360":45901,"skein512-368":45902,"skein512-376":45903,"skein512-384":45904,"skein512-392":45905,"skein512-400":45906,"skein512-408":45907,"skein512-416":45908,"skein512-424":45909,"skein512-432":45910,"skein512-440":45911,"skein512-448":45912,"skein512-456":45913,"skein512-464":45914,"skein512-472":45915,"skein512-480":45916,"skein512-488":45917,"skein512-496":45918,"skein512-504":45919,"skein512-512":45920,"skein1024-8":45921,"skein1024-16":45922,"skein1024-24":45923,"skein1024-32":45924,"skein1024-40":45925,"skein1024-48":45926,"skein1024-56":45927,"skein1024-64":45928,"skein1024-72":45929,"skein1024-80":45930,"skein1024-88":45931,"skein1024-96":45932,"skein1024-104":45933,"skein1024-112":45934,"skein1024-120":45935,"skein1024-128":45936,"skein1024-136":45937,"skein1024-144":45938,"skein1024-152":45939,"skein1024-160":45940,"skein1024-168":45941,"skein1024-176":45942,"skein1024-184":45943,"skein1024-192":45944,"skein1024-200":45945,"skein1024-208":45946,"skein1024-216":45947,"skein1024-224":45948,"skein1024-232":45949,"skein1024-240":45950,"skein1024-248":45951,"skein1024-256":45952,"skein1024-264":45953,"skein1024-272":45954,"skein1024-280":45955,"skein1024-288":45956,"skein1024-296":45957,"skein1024-304":45958,"skein1024-312":45959,"skein1024-320":45960,"skein1024-328":45961,"skein1024-336":45962,"skein1024-344":45963,"skein1024-352":45964,"skein1024-360":45965,"skein1024-368":45966,"skein1024-376":45967,"skein1024-384":45968,"skein1024-392":45969,"skein1024-400":45970,"skein1024-408":45971,"skein1024-416":45972,"skein1024-424":45973,"skein1024-432":45974,"skein1024-440":45975,"skein1024-448":45976,"skein1024-456":45977,"skein1024-464":45978,"skein1024-472":45979,"skein1024-480":45980,"skein1024-488":45981,"skein1024-496":45982,"skein1024-504":45983,"skein1024-512":45984,"skein1024-520":45985,"skein1024-528":45986,"skein1024-536":45987,"skein1024-544":45988,"skein1024-552":45989,"skein1024-560":45990,"skein1024-568":45991,"skein1024-576":45992,"skein1024-584":45993,"skein1024-592":45994,"skein1024-600":45995,"skein1024-608":45996,"skein1024-616":45997,"skein1024-624":45998,"skein1024-632":45999,"skein1024-640":46e3,"skein1024-648":46001,"skein1024-656":46002,"skein1024-664":46003,"skein1024-672":46004,"skein1024-680":46005,"skein1024-688":46006,"skein1024-696":46007,"skein1024-704":46008,"skein1024-712":46009,"skein1024-720":46010,"skein1024-728":46011,"skein1024-736":46012,"skein1024-744":46013,"skein1024-752":46014,"skein1024-760":46015,"skein1024-768":46016,"skein1024-776":46017,"skein1024-784":46018,"skein1024-792":46019,"skein1024-800":46020,"skein1024-808":46021,"skein1024-816":46022,"skein1024-824":46023,"skein1024-832":46024,"skein1024-840":46025,"skein1024-848":46026,"skein1024-856":46027,"skein1024-864":46028,"skein1024-872":46029,"skein1024-880":46030,"skein1024-888":46031,"skein1024-896":46032,"skein1024-904":46033,"skein1024-912":46034,"skein1024-920":46035,"skein1024-928":46036,"skein1024-936":46037,"skein1024-944":46038,"skein1024-952":46039,"skein1024-960":46040,"skein1024-968":46041,"skein1024-976":46042,"skein1024-984":46043,"skein1024-992":46044,"skein1024-1000":46045,"skein1024-1008":46046,"skein1024-1016":46047,"skein1024-1024":46048,"poseidon-bls12_381-a2-fc1":46081,"poseidon-bls12_381-a2-fc1-sc":46082});dt.exports={names:sn};});var W=b(function(X0,ut){"use strict";var _O=O(),rn=_O.encoding,_D2=D(),nn=_D2.TextDecoder,on=new nn("utf8");function bn(e){var t="";for(var s=0;s<e.length;s++){t+=String.fromCharCode(e[s]);}return t;}function an(e,t){if(t===void 0){t="utf8";}return t==="utf8"||t==="utf-8"?on.decode(e):t==="ascii"?bn(e):rn(t).encode(e);}ut.exports=an;});var ke=b(function(K0,ft){"use strict";var _O2=O(),cn=_O2.encoding,_D3=D(),xn=_D3.TextEncoder,ln=new xn();function dn(e){var t=new Uint8Array(e.length);for(var s=0;s<e.length;s++){t[s]=e.charCodeAt(s);}return t;}function kn(e,t){if(t===void 0){t="utf8";}return t==="utf8"||t==="utf-8"?ln.encode(e):t==="ascii"?dn(e):cn(t).decode(e);}ft.exports=kn;});var Y=b(function($0,ht){"use strict";function un(e,t){t||(t=e.reduce(function(n,i){return n+i.length;},0));var s=new Uint8Array(t),r=0;for(var _iterator6=_createForOfIteratorHelperLoose(e),_step6;!(_step6=_iterator6()).done;){var _n3=_step6.value;s.set(_n3,r),r+=_n3.length;}return s;}ht.exports=un;});var fe=b(function(H0,pt){"use strict";var mt=O(),j=lt(),_kt=kt(),F=_kt.names,ee=W(),fn=ke(),hn=Y(),L={};for(var e in F){var t=e;L[F[t]]=t;}function pn(e){if(!(e instanceof Uint8Array))throw new Error("must be passed a Uint8Array");return ee(e,"base16");}function mn(e){return fn(e,"base16");}function gn(e){if(!(e instanceof Uint8Array))throw new Error("must be passed a Uint8Array");return ee(mt.encode("base58btc",e)).slice(1);}function wn(e){var t=e instanceof Uint8Array?ee(e):e;return mt.decode("z"+t);}function wt(e){if(!(e instanceof Uint8Array))throw new Error("multihash must be a Uint8Array");if(e.length<2)throw new Error("multihash too short. must be > 2 bytes.");var t=j.decode(e);if(!gt(t))throw new Error("multihash unknown function code: 0x"+t.toString(16));e=e.slice(j.decode.bytes);var s=j.decode(e);if(s<0)throw new Error("multihash invalid length: "+s);if(e=e.slice(j.decode.bytes),e.length!==s)throw new Error("multihash length inconsistent: 0x"+ee(e,"base16"));return{code:t,name:L[t],length:s,digest:e};}function yn(e,t,s){if(!e||t===void 0)throw new Error("multihash encode requires at least two args: digest, code");var r=yt(t);if(!(e instanceof Uint8Array))throw new Error("digest should be a Uint8Array");if(s==null&&(s=e.length),s&&e.length!==s)throw new Error("digest length should be equal to specified length.");var n=j.encode(r),i=j.encode(s);return hn([n,i,e],n.length+i.length+e.length);}function yt(e){var t=e;if(typeof e=="string"){if(F[e]===void 0)throw new Error("Unrecognized hash function named: "+e);t=F[e];}if(typeof t!="number")throw new Error("Hash function code should be a number. Got: "+t);if(L[t]===void 0&&!ue(t))throw new Error("Unrecognized function code: "+t);return t;}function ue(e){return e>0&&e<16;}function gt(e){return!!(ue(e)||L[e]);}function vt(e){wt(e);}function vn(e){return vt(e),e.subarray(0,2);}pt.exports={names:F,codes:Object.freeze(L),toHexString:pn,fromHexString:mn,toB58String:gn,fromB58String:wn,decode:wt,encode:yn,coerceCode:yt,isAppCode:ue,validate:vt,prefix:vn,isValidCode:gt};});var Ct=b(function(Z0,Et){Et.exports=he;var At=128,En=127,An=~En,Cn=Math.pow(2,31);function he(e,t,s){if(Number.MAX_SAFE_INTEGER&&e>Number.MAX_SAFE_INTEGER)throw he.bytes=0,new RangeError("Could not encode varint");t=t||[],s=s||0;for(var r=s;e>=Cn;){t[s++]=e&255|At,e/=128;}for(;e&An;){t[s++]=e&255|At,e>>>=7;}return t[s]=e|0,he.bytes=s-r+1,t;}});var St=b(function(W0,It){It.exports=pe;var In=128,qt=127;function pe(e,t){var s=0,t=t||0,r=0,n=t,i,o=e.length;do{if(n>=o||r>49)throw pe.bytes=0,new RangeError("Could not decode varint");i=e[n++],s+=r<28?(i&qt)<<r:(i&qt)*Math.pow(2,r),r+=7;}while(i>=In);return pe.bytes=n-t,s;}});var Tt=b(function(Y0,Dt){var qn=Math.pow(2,7),Sn=Math.pow(2,14),Dn=Math.pow(2,21),Tn=Math.pow(2,28),jn=Math.pow(2,35),Un=Math.pow(2,42),Mn=Math.pow(2,49),Nn=Math.pow(2,56),Bn=Math.pow(2,63);Dt.exports=function(e){return e<qn?1:e<Sn?2:e<Dn?3:e<Tn?4:e<jn?5:e<Un?6:e<Mn?7:e<Nn?8:e<Bn?9:10;};});var me=b(function(eo,jt){jt.exports={encode:Ct(),decode:St(),encodingLength:Tt()};});var U=b(function(to,Ut){"use strict";var Rn=Object.freeze({identity:0,cidv1:1,cidv2:2,cidv3:3,ip4:4,tcp:6,sha1:17,"sha2-256":18,"sha2-512":19,"sha3-512":20,"sha3-384":21,"sha3-256":22,"sha3-224":23,"shake-128":24,"shake-256":25,"keccak-224":26,"keccak-256":27,"keccak-384":28,"keccak-512":29,blake3:30,dccp:33,"murmur3-128":34,"murmur3-32":35,ip6:41,ip6zone:42,path:47,multicodec:48,multihash:49,multiaddr:50,multibase:51,dns:53,dns4:54,dns6:55,dnsaddr:56,protobuf:80,cbor:81,raw:85,"dbl-sha2-256":86,rlp:96,bencode:99,"dag-pb":112,"dag-cbor":113,"libp2p-key":114,"git-raw":120,"torrent-info":123,"torrent-file":124,"leofcoin-block":129,"leofcoin-tx":130,"leofcoin-pr":131,sctp:132,"dag-jose":133,"dag-cose":134,"eth-block":144,"eth-block-list":145,"eth-tx-trie":146,"eth-tx":147,"eth-tx-receipt-trie":148,"eth-tx-receipt":149,"eth-state-trie":150,"eth-account-snapshot":151,"eth-storage-trie":152,"bitcoin-block":176,"bitcoin-tx":177,"bitcoin-witness-commitment":178,"zcash-block":192,"zcash-tx":193,docid:206,"stellar-block":208,"stellar-tx":209,md4:212,md5:213,bmt:214,"decred-block":224,"decred-tx":225,"ipld-ns":226,"ipfs-ns":227,"swarm-ns":228,"ipns-ns":229,zeronet:230,"secp256k1-pub":231,"bls12_381-g1-pub":234,"bls12_381-g2-pub":235,"x25519-pub":236,"ed25519-pub":237,"bls12_381-g1g2-pub":238,"dash-block":240,"dash-tx":241,"swarm-manifest":250,"swarm-feed":251,udp:273,"p2p-webrtc-star":275,"p2p-webrtc-direct":276,"p2p-stardust":277,"p2p-circuit":290,"dag-json":297,udt:301,utp:302,unix:400,p2p:421,ipfs:421,https:443,onion:444,onion3:445,garlic64:446,garlic32:447,tls:448,quic:460,ws:477,wss:478,"p2p-websocket-star":479,http:480,json:512,messagepack:513,"libp2p-peer-record":769,"sha2-256-trunc254-padded":4114,"ripemd-128":4178,"ripemd-160":4179,"ripemd-256":4180,"ripemd-320":4181,x11:4352,"p256-pub":4608,"p384-pub":4609,"p521-pub":4610,"ed448-pub":4611,"x448-pub":4612,"ed25519-priv":4864,kangarootwelve:7425,"sm3-256":21325,"blake2b-8":45569,"blake2b-16":45570,"blake2b-24":45571,"blake2b-32":45572,"blake2b-40":45573,"blake2b-48":45574,"blake2b-56":45575,"blake2b-64":45576,"blake2b-72":45577,"blake2b-80":45578,"blake2b-88":45579,"blake2b-96":45580,"blake2b-104":45581,"blake2b-112":45582,"blake2b-120":45583,"blake2b-128":45584,"blake2b-136":45585,"blake2b-144":45586,"blake2b-152":45587,"blake2b-160":45588,"blake2b-168":45589,"blake2b-176":45590,"blake2b-184":45591,"blake2b-192":45592,"blake2b-200":45593,"blake2b-208":45594,"blake2b-216":45595,"blake2b-224":45596,"blake2b-232":45597,"blake2b-240":45598,"blake2b-248":45599,"blake2b-256":45600,"blake2b-264":45601,"blake2b-272":45602,"blake2b-280":45603,"blake2b-288":45604,"blake2b-296":45605,"blake2b-304":45606,"blake2b-312":45607,"blake2b-320":45608,"blake2b-328":45609,"blake2b-336":45610,"blake2b-344":45611,"blake2b-352":45612,"blake2b-360":45613,"blake2b-368":45614,"blake2b-376":45615,"blake2b-384":45616,"blake2b-392":45617,"blake2b-400":45618,"blake2b-408":45619,"blake2b-416":45620,"blake2b-424":45621,"blake2b-432":45622,"blake2b-440":45623,"blake2b-448":45624,"blake2b-456":45625,"blake2b-464":45626,"blake2b-472":45627,"blake2b-480":45628,"blake2b-488":45629,"blake2b-496":45630,"blake2b-504":45631,"blake2b-512":45632,"blake2s-8":45633,"blake2s-16":45634,"blake2s-24":45635,"blake2s-32":45636,"blake2s-40":45637,"blake2s-48":45638,"blake2s-56":45639,"blake2s-64":45640,"blake2s-72":45641,"blake2s-80":45642,"blake2s-88":45643,"blake2s-96":45644,"blake2s-104":45645,"blake2s-112":45646,"blake2s-120":45647,"blake2s-128":45648,"blake2s-136":45649,"blake2s-144":45650,"blake2s-152":45651,"blake2s-160":45652,"blake2s-168":45653,"blake2s-176":45654,"blake2s-184":45655,"blake2s-192":45656,"blake2s-200":45657,"blake2s-208":45658,"blake2s-216":45659,"blake2s-224":45660,"blake2s-232":45661,"blake2s-240":45662,"blake2s-248":45663,"blake2s-256":45664,"skein256-8":45825,"skein256-16":45826,"skein256-24":45827,"skein256-32":45828,"skein256-40":45829,"skein256-48":45830,"skein256-56":45831,"skein256-64":45832,"skein256-72":45833,"skein256-80":45834,"skein256-88":45835,"skein256-96":45836,"skein256-104":45837,"skein256-112":45838,"skein256-120":45839,"skein256-128":45840,"skein256-136":45841,"skein256-144":45842,"skein256-152":45843,"skein256-160":45844,"skein256-168":45845,"skein256-176":45846,"skein256-184":45847,"skein256-192":45848,"skein256-200":45849,"skein256-208":45850,"skein256-216":45851,"skein256-224":45852,"skein256-232":45853,"skein256-240":45854,"skein256-248":45855,"skein256-256":45856,"skein512-8":45857,"skein512-16":45858,"skein512-24":45859,"skein512-32":45860,"skein512-40":45861,"skein512-48":45862,"skein512-56":45863,"skein512-64":45864,"skein512-72":45865,"skein512-80":45866,"skein512-88":45867,"skein512-96":45868,"skein512-104":45869,"skein512-112":45870,"skein512-120":45871,"skein512-128":45872,"skein512-136":45873,"skein512-144":45874,"skein512-152":45875,"skein512-160":45876,"skein512-168":45877,"skein512-176":45878,"skein512-184":45879,"skein512-192":45880,"skein512-200":45881,"skein512-208":45882,"skein512-216":45883,"skein512-224":45884,"skein512-232":45885,"skein512-240":45886,"skein512-248":45887,"skein512-256":45888,"skein512-264":45889,"skein512-272":45890,"skein512-280":45891,"skein512-288":45892,"skein512-296":45893,"skein512-304":45894,"skein512-312":45895,"skein512-320":45896,"skein512-328":45897,"skein512-336":45898,"skein512-344":45899,"skein512-352":45900,"skein512-360":45901,"skein512-368":45902,"skein512-376":45903,"skein512-384":45904,"skein512-392":45905,"skein512-400":45906,"skein512-408":45907,"skein512-416":45908,"skein512-424":45909,"skein512-432":45910,"skein512-440":45911,"skein512-448":45912,"skein512-456":45913,"skein512-464":45914,"skein512-472":45915,"skein512-480":45916,"skein512-488":45917,"skein512-496":45918,"skein512-504":45919,"skein512-512":45920,"skein1024-8":45921,"skein1024-16":45922,"skein1024-24":45923,"skein1024-32":45924,"skein1024-40":45925,"skein1024-48":45926,"skein1024-56":45927,"skein1024-64":45928,"skein1024-72":45929,"skein1024-80":45930,"skein1024-88":45931,"skein1024-96":45932,"skein1024-104":45933,"skein1024-112":45934,"skein1024-120":45935,"skein1024-128":45936,"skein1024-136":45937,"skein1024-144":45938,"skein1024-152":45939,"skein1024-160":45940,"skein1024-168":45941,"skein1024-176":45942,"skein1024-184":45943,"skein1024-192":45944,"skein1024-200":45945,"skein1024-208":45946,"skein1024-216":45947,"skein1024-224":45948,"skein1024-232":45949,"skein1024-240":45950,"skein1024-248":45951,"skein1024-256":45952,"skein1024-264":45953,"skein1024-272":45954,"skein1024-280":45955,"skein1024-288":45956,"skein1024-296":45957,"skein1024-304":45958,"skein1024-312":45959,"skein1024-320":45960,"skein1024-328":45961,"skein1024-336":45962,"skein1024-344":45963,"skein1024-352":45964,"skein1024-360":45965,"skein1024-368":45966,"skein1024-376":45967,"skein1024-384":45968,"skein1024-392":45969,"skein1024-400":45970,"skein1024-408":45971,"skein1024-416":45972,"skein1024-424":45973,"skein1024-432":45974,"skein1024-440":45975,"skein1024-448":45976,"skein1024-456":45977,"skein1024-464":45978,"skein1024-472":45979,"skein1024-480":45980,"skein1024-488":45981,"skein1024-496":45982,"skein1024-504":45983,"skein1024-512":45984,"skein1024-520":45985,"skein1024-528":45986,"skein1024-536":45987,"skein1024-544":45988,"skein1024-552":45989,"skein1024-560":45990,"skein1024-568":45991,"skein1024-576":45992,"skein1024-584":45993,"skein1024-592":45994,"skein1024-600":45995,"skein1024-608":45996,"skein1024-616":45997,"skein1024-624":45998,"skein1024-632":45999,"skein1024-640":46e3,"skein1024-648":46001,"skein1024-656":46002,"skein1024-664":46003,"skein1024-672":46004,"skein1024-680":46005,"skein1024-688":46006,"skein1024-696":46007,"skein1024-704":46008,"skein1024-712":46009,"skein1024-720":46010,"skein1024-728":46011,"skein1024-736":46012,"skein1024-744":46013,"skein1024-752":46014,"skein1024-760":46015,"skein1024-768":46016,"skein1024-776":46017,"skein1024-784":46018,"skein1024-792":46019,"skein1024-800":46020,"skein1024-808":46021,"skein1024-816":46022,"skein1024-824":46023,"skein1024-832":46024,"skein1024-840":46025,"skein1024-848":46026,"skein1024-856":46027,"skein1024-864":46028,"skein1024-872":46029,"skein1024-880":46030,"skein1024-888":46031,"skein1024-896":46032,"skein1024-904":46033,"skein1024-912":46034,"skein1024-920":46035,"skein1024-928":46036,"skein1024-936":46037,"skein1024-944":46038,"skein1024-952":46039,"skein1024-960":46040,"skein1024-968":46041,"skein1024-976":46042,"skein1024-984":46043,"skein1024-992":46044,"skein1024-1000":46045,"skein1024-1008":46046,"skein1024-1016":46047,"skein1024-1024":46048,"poseidon-bls12_381-a2-fc1":46081,"poseidon-bls12_381-a2-fc1-sc":46082,"zeroxcert-imprint-256":52753,"fil-commitment-unsealed":61697,"fil-commitment-sealed":61698,"holochain-adr-v0":8417572,"holochain-adr-v1":8483108,"holochain-key-v0":9728292,"holochain-key-v1":9793828,"holochain-sig-v0":10645796,"holochain-sig-v1":10711332,"skynet-ns":11639056});Ut.exports={baseTable:Rn};});var Rt=b(function(so,Mt){"use strict";var _U=U(),Nt=_U.baseTable,Bt=new Map();for(var e in Nt){var t=Nt[e];Bt.set(t,e);}Mt.exports=Object.freeze(Bt);});var Ot=b(function(ro,zt){"use strict";var _H=H(),zn=_H.names,_D4=D(),On=_D4.TextDecoder,Fn=new On("utf8");function Ln(e){var t="";for(var s=0;s<e.length;s++){t+=String.fromCharCode(e[s]);}return t;}function Vn(e,t){if(t===void 0){t="utf8";}if(t==="utf8"||t==="utf-8")return Fn.decode(e);if(t==="ascii")return Ln(e);var s=zn[t];if(!s)throw new Error("Unknown base");return s.encode(e);}zt.exports=Vn;});var Lt=b(function(no,Ft){"use strict";var _H2=H(),_n=_H2.names,_D5=D(),Gn=_D5.TextEncoder,Qn=new Gn();function Jn(e){var t=new Uint8Array(e.length);for(var s=0;s<e.length;s++){t[s]=e.charCodeAt(s);}return t;}function Pn(e,t){if(t===void 0){t="utf8";}if(t==="utf8"||t==="utf-8")return Qn.encode(e);if(t==="ascii")return Jn(e);var s=_n[t];if(!s)throw new Error("Unknown base");return s.decode(e);}Ft.exports=Pn;});var ge=b(function(io,Vt){"use strict";var _t=me(),Xn=Ot(),Kn=Lt();Vt.exports={numberToUint8Array:$n,uint8ArrayToNumber:Gt,varintUint8ArrayEncode:Hn,varintEncode:Zn};function Gt(e){return parseInt(Xn(e,"base16"),16);}function $n(e){var t=e.toString(16);return t.length%2==1&&(t="0"+t),Kn(t,"base16");}function Hn(e){return Uint8Array.from(_t.encode(Gt(e)));}function Zn(e){return Uint8Array.from(_t.encode(e));}});var Xt=b(function(oo,Qt){"use strict";var _U2=U(),Jt=_U2.baseTable,Wn=ge().varintEncode,Pt={};for(var e in Jt){var t=Jt[e];Pt[e]=Wn(t);}Qt.exports=Object.freeze(Pt);});var $t=b(function(bo,Kt){"use strict";function Yn(e,t){t||(t=e.reduce(function(n,i){return n+i.length;},0));var s=new Uint8Array(t),r=0;for(var _iterator7=_createForOfIteratorHelperLoose(e),_step7;!(_step7=_iterator7()).done;){var _n4=_step7.value;s.set(_n4,r),r+=_n4.length;}return s;}Kt.exports=Yn;});var Wt=b(function(ao,Ht){"use strict";var _U3=U(),ei=_U3.baseTable,Zt={};for(var _i4=0,_Object$entries3=Object.entries(ei);_i4<_Object$entries3.length;_i4++){var _Object$entries3$_i=_Object$entries3[_i4],e=_Object$entries3$_i[0],t=_Object$entries3$_i[1];var s=e.toUpperCase().replace(/-/g,"_");Zt[s]=t;}Ht.exports=Object.freeze(Zt);});var es=b(function(co,Yt){"use strict";var _U4=U(),ti=_U4.baseTable,we={};for(var _i5=0,_Object$entries4=Object.entries(ti);_i5<_Object$entries4.length;_i5++){var _Object$entries4$_i=_Object$entries4[_i5],e=_Object$entries4$_i[0],t=_Object$entries4$_i[1];we[t]===void 0&&(we[t]=e);}Yt.exports=Object.freeze(we);});var rs=b(function(xo,ts){"use strict";var M=me(),ss=Rt(),te=Xt(),si=ge(),ri=$t();function ni(e,t){var s;if(e instanceof Uint8Array)s=si.varintUint8ArrayEncode(e);else if(te[e])s=te[e];else throw new Error("multicodec not recognized");return ri([s,t],s.length+t.length);}function ii(e){return M.decode(e),e.slice(M.decode.bytes);}function oi(e){var t=M.decode(e),s=ss.get(t);if(s===void 0)throw new Error("Code "+t+" not found");return s;}function bi(e){return ss.get(e);}function ai(e){var t=te[e];if(t===void 0)throw new Error("Codec `"+e+"` not found");return M.decode(t);}function ci(e){return M.decode(e);}function xi(e){var t=te[e];if(t===void 0)throw new Error("Codec `"+e+"` not found");return t;}function li(e){return M.encode(e);}var di=Wt(),ki=es();ts.exports=_objectSpread({addPrefix:ni,rmPrefix:ii,getCodec:oi,getName:bi,getNumber:ai,getCode:ci,getCodeVarint:xi,getVarint:li,print:ki},di);});var is=b(function(lo,ns){"use strict";var ui=fe(),fi={checkCIDComponents:function checkCIDComponents(e){if(e==null)return"null values are not valid CIDs";if(!(e.version===0||e.version===1))return"Invalid version, must be a number equal to 1 or 0";if(typeof e.codec!="string")return"codec must be string";if(e.version===0){if(e.codec!=="dag-pb")return"codec must be 'dag-pb' for CIDv0";if(e.multibaseName!=="base58btc")return"multibaseName must be 'base58btc' for CIDv0";}if(!(e.multihash instanceof Uint8Array))return"multihash must be a Uint8Array";try{ui.validate(e.multihash);}catch(t){var s=t.message;return s||(s="Multihash validation failed"),s;}}};ns.exports=fi;});var bs=b(function(ko,os){"use strict";function hi(e,t){if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(var s=0;s<e.byteLength;s++){if(e[s]!==t[s])return!1;}return!0;}os.exports=hi;});var ne=b(function(uo,as){"use strict";var se=fe(),ye=O(),N=rs(),_U5=U(),re=_U5.baseTable,pi=is(),cs=Y(),mi=W(),gi=bs(),wi=Object.keys(re).reduce(function(e,t){return e[re[t]]=t,e;},{}),xs=Symbol.for("@ipld/js-cid/CID"),p=/*#__PURE__*/function(){function p(t,s,r,n){if(this.version,this.codec,this.multihash,Object.defineProperty(this,xs,{value:!0}),p.isCID(t)){var i=t;this.version=i.version,this.codec=i.codec,this.multihash=i.multihash,this.multibaseName=i.multibaseName||(i.version===0?"base58btc":"base32");return;}if(typeof t=="string"){var _i6=ye.isEncoded(t);if(_i6){var o=ye.decode(t);this.version=parseInt(o[0].toString(),16),this.codec=N.getCodec(o.slice(1)),this.multihash=N.rmPrefix(o.slice(1)),this.multibaseName=_i6;}else this.version=0,this.codec="dag-pb",this.multihash=se.fromB58String(t),this.multibaseName="base58btc";p.validateCID(this),Object.defineProperty(this,"string",{value:t});return;}if(t instanceof Uint8Array){var _i7=parseInt(t[0].toString(),16);if(_i7===1){var _o=t;this.version=_i7,this.codec=N.getCodec(_o.slice(1)),this.multihash=N.rmPrefix(_o.slice(1)),this.multibaseName="base32";}else this.version=0,this.codec="dag-pb",this.multihash=t,this.multibaseName="base58btc";p.validateCID(this);return;}this.version=t,typeof s=="number"&&(s=wi[s]),this.codec=s,this.multihash=r,this.multibaseName=n||(t===0?"base58btc":"base32"),p.validateCID(this);}var _proto4=p.prototype;_proto4.toV0=function toV0(){if(this.codec!=="dag-pb")throw new Error("Cannot convert a non dag-pb CID to CIDv0");var _se$decode=se.decode(this.multihash),t=_se$decode.name,s=_se$decode.length;if(t!=="sha2-256")throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");if(s!==32)throw new Error("Cannot convert non 32 byte multihash CID to CIDv0");return new p(0,this.codec,this.multihash);};_proto4.toV1=function toV1(){return new p(1,this.codec,this.multihash);};_proto4.toBaseEncodedString=function toBaseEncodedString(t){if(t===void 0){t=this.multibaseName;}if(this.string&&this.string.length!==0&&t===this.multibaseName)return this.string;var s;if(this.version===0){if(t!=="base58btc")throw new Error("not supported with CIDv0, to support different bases, please migrate the instance do CIDv1, you can do that through cid.toV1()");s=se.toB58String(this.multihash);}else if(this.version===1)s=mi(ye.encode(t,this.bytes));else throw new Error("unsupported version");return t===this.multibaseName&&Object.defineProperty(this,"string",{value:s}),s;};_proto4[Symbol.for("nodejs.util.inspect.custom")]=function(){return"CID("+this.toString()+")";};_proto4.toString=function toString(t){return this.toBaseEncodedString(t);};_proto4.toJSON=function toJSON(){return{codec:this.codec,version:this.version,hash:this.multihash};};_proto4.equals=function equals(t){return this.codec===t.codec&&this.version===t.version&&gi(this.multihash,t.multihash);};p.validateCID=function validateCID(t){var s=pi.checkCIDComponents(t);if(s)throw new Error(s);};p.isCID=function isCID(t){return t instanceof p||Boolean(t&&t[xs]);};_createClass(p,[{key:"bytes",get:function get(){var t=this._bytes;if(!t){if(this.version===0)t=this.multihash;else if(this.version===1){var s=N.getCodeVarint(this.codec);t=cs([[1],s,this.multihash],1+s.byteLength+this.multihash.byteLength);}else throw new Error("unsupported version");Object.defineProperty(this,"_bytes",{value:t});}return t;}},{key:"prefix",get:function get(){var t=N.getCodeVarint(this.codec),s=se.prefix(this.multihash);return cs([[this.version],t,s],1+t.byteLength+s.byteLength);}},{key:"code",get:function get(){return re[this.codec];}}]);return p;}();p.codecs=re;as.exports=p;});var q=b(function(ie){"use strict";var ls=ne(),yi=function yi(e,t){return t&&t.push(e.multihash.buffer),e;};ie.encodeCID=yi;var vi=function vi(e){var t=e;return Object.setPrototypeOf(t.multihash,Uint8Array.prototype),Object.setPrototypeOf(t,ls.prototype),Object.defineProperty(t,Symbol.for("@ipld/js-cid/CID"),{value:!0}),t;};ie.decodeCID=vi;ie.CID=ls;});var ks=b(function(ho,ds){ds.exports={name:"ipld-block",version:"0.11.0",description:"JavaScript Implementation of IPLD Block",leadMaintainer:"Volker Mische <volker.mische@gmail.com>",main:"src/index.js",scripts:{lint:"aegir lint",check:"tsc --noEmit --noErrorTruncation",build:"npm run build:js && npm run build:types","build:js":"aegir build","build:types":"tsc --emitDeclarationOnly --declarationDir dist",test:"aegir test","test:node":"aegir test --target node","test:browser":"aegir test --target browser",release:"aegir release --docs","release-minor":"aegir release --type minor --docs","release-major":"aegir release --type major --docs",coverage:"aegir coverage","coverage-publish":"aegir coverage --provider coveralls",docs:"aegir docs",prepare:"npm run build:types"},"pre-push":["lint","test"],repository:{type:"git",url:"git+https://github.com/ipld/js-ipld-block.git"},keywords:["IPLD"],license:"MIT",bugs:{url:"https://github.com/ipld/js-ipld-block/issues"},homepage:"https://github.com/ipld/js-ipld-block#readme",devDependencies:{aegir:"^27.0.0",uint8arrays:"^1.0.0",typescript:"^4.0.3"},dependencies:{cids:"^1.0.0"},engines:{node:">=6.0.0",npm:">=3.0.0"},typesVersions:{"*":{"*":["dist/*"]}},contributors:["David Dias <daviddias.p@gmail.com>","Volker Mische <volker.mische@gmail.com>","Friedel Ziegelmayer <dignifiedquire@gmail.com>","Irakli Gozalishvili <contact@gozala.io>","achingbrain <alex@achingbrain.net>","\u1D20\u026A\u1D04\u1D1B\u1D0F\u0280 \u0299\u1D0A\u1D07\u029F\u1D0B\u029C\u1D0F\u029F\u1D0D <victorbjelkholm@gmail.com>","Alan Shaw <alan.shaw@protocol.ai>","Charlie <the_charlie_daly@hotmail.co.uk>","Diogo Silva <fsdiogo@gmail.com>","Hugo Dias <hugomrdias@gmail.com>","Mikeal Rogers <mikeal.rogers@gmail.com>","Richard Littauer <richard.littauer@gmail.com>","Richard Schneider <makaretu@gmail.com>","Xmader <xmader@outlook.com>"]};});var gs=b(function(po,us){"use strict";var Ei=ne(),_ks=ks(),Ai=_ks.version,fs=Symbol.for("@ipld/js-ipld-block/block"),hs={writable:!1,configurable:!1,enumerable:!0},ps=/*#__PURE__*/function(){function ps(t,s){if(!t||!(t instanceof Uint8Array))throw new Error("first argument  must be a Uint8Array");if(!s||!Ei.isCID(s))throw new Error("second argument must be a CID");this.data=t,this.cid=s,Object.defineProperties(this,{data:hs,cid:hs});}ps.isBlock=function isBlock(t){return Boolean(t&&t[fs]);};_createClass(ps,[{key:"_data",get:function get(){return Ii(),this.data;}},{key:"_cid",get:function get(){return Ci(),this.cid;}},{key:Symbol.toStringTag,get:function get(){return"Block";}},{key:fs,get:function get(){return!0;}}]);return ps;}(),ms=function ms(e,t){var s=!1;return function(){if(e.test(Ai))s||(s=!0,console.warn(t));else throw new Error(t);};},Ci=ms(/^0\.10|^0\.11/,"block._cid is deprecated and will be removed in 0.12 release. Please use block.cid instead"),Ii=ms(/^0\.10|^0.11/,"block._data is deprecated and will be removed in 0.12 release. Please use block.data instead");us.exports=ps;});var ys=b(function(oe){"use strict";var _q=q(),qi=_q.encodeCID,Si=_q.decodeCID,ws=gs(),Di=function Di(_ref3,s){var e=_ref3.cid,t=_ref3.data;return s&&s.push(t.buffer),{cid:qi(e,s),data:t};};oe.encodeBlock=Di;var Ti=function Ti(_ref4){var e=_ref4.cid,t=_ref4.data;return new ws(t,Si(e));};oe.decodeBlock=Ti;oe.Block=ws;});var Is=b(function(go,vs){"use strict";var ji=R(),_q2=q(),V=_q2.encodeCID,Es=_q2.decodeCID,_P2=P(),Ui=_P2.decodeError,_ys=ys(),Mi=_ys.encodeBlock,As=_ys.decodeBlock,Cs=/*#__PURE__*/function(_ji){Object(inheritsLoose["a" /* default */])(Cs,_ji);function Cs(t){return _ji.call(this,"block",["put","get","rm","stat"],t)||this;}var _proto5=Cs.prototype;_proto5.get=/*#__PURE__*/function(){var _get=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(t,s){var _s2,r,_yield$this$remote$ge,n;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(s===void 0){s={};}_s2=s;r=_s2.transfer;_context2.next=5;return this.remote.get(_objectSpread(_objectSpread({},s),{},{cid:V(t,r)}));case 5:_yield$this$remote$ge=_context2.sent;n=_yield$this$remote$ge.block;return _context2.abrupt("return",As(n));case 8:case"end":return _context2.stop();}}},_callee2,this);}));function get(_x5,_x6){return _get.apply(this,arguments);}return get;}();_proto5.put=/*#__PURE__*/function(){var _put=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee3(t,s){var _s3,r,n;return regenerator_default.a.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:if(s===void 0){s={};}_s3=s,r=_s3.transfer;delete s.progress;_context3.next=5;return this.remote.put(_objectSpread(_objectSpread({},s),{},{cid:s.cid==null?void 0:V(s.cid,r),block:t instanceof Uint8Array?t:Mi(t,r)}));case 5:n=_context3.sent;return _context3.abrupt("return",As(n.block));case 7:case"end":return _context3.stop();}}},_callee3,this);}));function put(_x7,_x8){return _put.apply(this,arguments);}return put;}();_proto5.rm=function rm(t,s){if(s===void 0){s={};}var _this=this;return _wrapAsyncGenerator(/*#__PURE__*/regenerator_default.a.mark(function _callee4(){var _s4,r;return regenerator_default.a.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_s4=s,r=_s4.transfer;_context4.t0=_asyncGeneratorDelegate;_context4.t1=_asyncIterator;_context4.next=5;return _awaitAsyncGenerator(_this.remote.rm(_objectSpread(_objectSpread({},s),{},{cids:Array.isArray(t)?t.map(function(i){return V(i,r);}):[V(t,r)]})));case 5:_context4.t2=_context4.sent.map(Ni);_context4.t3=(0,_context4.t1)(_context4.t2);_context4.t4=_awaitAsyncGenerator;return _context4.delegateYield((0,_context4.t0)(_context4.t3,_context4.t4),"t5",9);case 9:case"end":return _context4.stop();}}},_callee4);}))();};_proto5.stat=/*#__PURE__*/function(){var _stat=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee5(t,s){var _s5,r,n;return regenerator_default.a.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:if(s===void 0){s={};}_s5=s;r=_s5.transfer;_context5.next=5;return this.remote.stat(_objectSpread(_objectSpread({},s),{},{cid:V(t,r)}));case 5:n=_context5.sent;return _context5.abrupt("return",_objectSpread(_objectSpread({},n),{},{cid:Es(n.cid)}));case 7:case"end":return _context5.stop();}}},_callee5,this);}));function stat(_x9,_x10){return _stat.apply(this,arguments);}return stat;}();return Cs;}(ji),Ni=function Ni(e){var t=Es(e.cid);return e.error?{cid:t,error:Ui(e.error)}:{cid:t};};vs.exports=Cs;});var qs=b(function(ve){"use strict";var _q3=q(),Bi=_q3.encodeCID,Ri=_q3.decodeCID,zi=_q3.CID,Oi=function Oi(_ref5){var e=_ref5.dagNode,t=_ref5.cids;for(var _iterator8=_createForOfIteratorHelperLoose(t),_step8;!(_step8=_iterator8()).done;){var s=_step8.value;Ri(s);}return e;};ve.decodeNode=Oi;var Fi=function Fi(e,t){var s=[];return Ee(e,s,t),{dagNode:e,cids:s};};ve.encodeNode=Fi;var Ee=function Ee(e,t,s){if(e!=null&&typeof e=="object")if(zi.isCID(e))t.push(e),Bi(e,s);else if(e instanceof ArrayBuffer)s&&s.push(e);else if(ArrayBuffer.isView(e))s&&s.push(e.buffer);else if(Array.isArray(e)){for(var _iterator9=_createForOfIteratorHelperLoose(e),_step9;!(_step9=_iterator9()).done;){var r=_step9.value;Ee(r,t,s);}}else for(var _i8=0,_Object$values=Object.values(e);_i8<_Object$values.length;_i8++){var _r2=_Object$values[_i8];Ee(_r2,t,s);}};});var js=b(function(yo,Ss){"use strict";var Li=R(),_q4=q(),be=_q4.encodeCID,Ds=_q4.decodeCID,_qs=qs(),Vi=_qs.encodeNode,_i=_qs.decodeNode,Ts=/*#__PURE__*/function(_Li){Object(inheritsLoose["a" /* default */])(Ts,_Li);function Ts(t){return _Li.call(this,"dag",["put","get","resolve","tree"],t)||this;}var _proto6=Ts.prototype;_proto6.put=/*#__PURE__*/function(){var _put2=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee6(t,s){var _s6,r,n;return regenerator_default.a.wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:if(s===void 0){s={};}_s6=s;r=_s6.cid;_context6.next=5;return this.remote.put(_objectSpread(_objectSpread({},s),{},{cid:r!=null?be(r):void 0,dagNode:Vi(t,s.transfer)}));case 5:n=_context6.sent;return _context6.abrupt("return",Ds(n));case 7:case"end":return _context6.stop();}}},_callee6,this);}));function put(_x11,_x12){return _put2.apply(this,arguments);}return put;}();_proto6.get=/*#__PURE__*/function(){var _get2=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee7(t,s){var _yield$this$remote$ge2,r,n;return regenerator_default.a.wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:if(s===void 0){s={};}_context7.next=3;return this.remote.get(_objectSpread(_objectSpread({},s),{},{cid:be(t,s.transfer)}));case 3:_yield$this$remote$ge2=_context7.sent;r=_yield$this$remote$ge2.value;n=_yield$this$remote$ge2.remainderPath;return _context7.abrupt("return",{value:_i(r),remainderPath:n});case 7:case"end":return _context7.stop();}}},_callee7,this);}));function get(_x13,_x14){return _get2.apply(this,arguments);}return get;}();_proto6.resolve=/*#__PURE__*/function(){var _resolve=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee8(t,s){var _yield$this$remote$re,r,n;return regenerator_default.a.wrap(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:if(s===void 0){s={};}_context8.next=3;return this.remote.resolve(_objectSpread(_objectSpread({},s),{},{cid:Gi(t,s.transfer)}));case 3:_yield$this$remote$re=_context8.sent;r=_yield$this$remote$re.cid;n=_yield$this$remote$re.remainderPath;return _context8.abrupt("return",{cid:Ds(r),remainderPath:n});case 7:case"end":return _context8.stop();}}},_callee8,this);}));function resolve(_x15,_x16){return _resolve.apply(this,arguments);}return resolve;}();_proto6.tree=function tree(t,s){if(s===void 0){s={};}var _this2=this;return _wrapAsyncGenerator(/*#__PURE__*/regenerator_default.a.mark(function _callee9(){return regenerator_default.a.wrap(function _callee9$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:_context9.t0=_asyncGeneratorDelegate;_context9.t1=_asyncIterator;_context9.next=4;return _awaitAsyncGenerator(_this2.remote.tree(_objectSpread(_objectSpread({},s),{},{cid:be(t,s.transfer)})));case 4:_context9.t2=_context9.sent;_context9.t3=(0,_context9.t1)(_context9.t2);_context9.t4=_awaitAsyncGenerator;return _context9.delegateYield((0,_context9.t0)(_context9.t3,_context9.t4),"t5",8);case 8:case"end":return _context9.stop();}}},_callee9);}))();};return Ts;}(Li),Gi=function Gi(e,t){return typeof e=="string"?e:be(e,t);};Ss.exports=Ts;});var Us=b(function(_){"use strict";var _P3=P(),Qi=_P3.encodeError,Ji=_P3.decodeError,Pi=/*#__PURE__*/function(){var _ref=_wrapAsyncGenerator(/*#__PURE__*/regenerator_default.a.mark(function _callee10(_ref6,t){var e,s,r,n,i,_yield$_awaitAsyncGen,o,a,l;return regenerator_default.a.wrap(function _callee10$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:e=_ref6.port;s=function s(o){},r=function r(){return new Promise(function(o){return s=o;});},n=function n(){return e.postMessage({method:"next"}),r();};e.onmessage=function(o){return s(o.data);};i=!1;_context10.prev=4;case 5:if(i){_context10.next=20;break;}_context10.next=8;return _awaitAsyncGenerator(n());case 8:_yield$_awaitAsyncGen=_context10.sent;o=_yield$_awaitAsyncGen.done;a=_yield$_awaitAsyncGen.value;l=_yield$_awaitAsyncGen.error;if(!(i=o,l!=null)){_context10.next=14;break;}throw Ji(l);case 14:_context10.t0=a!=null;if(!_context10.t0){_context10.next=18;break;}_context10.next=18;return t(a);case 18:_context10.next=5;break;case 20:_context10.prev=20;i||e.postMessage({method:"return"}),e.close();return _context10.finish(20);case 23:case"end":return _context10.stop();}}},_callee10,null,[[4,,20,23]]);}));return function Pi(_x,_x2){return _ref.apply(this,arguments);};}();_.decodeIterable=Pi;var Ki=function Ki(e,t,s){var _MessageChannel=new MessageChannel(),r=_MessageChannel.port1,n=_MessageChannel.port2,i=[],o=Xi(e);return r.onmessage=/*#__PURE__*/function(){var _ref8=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee11(_ref7){var a,_yield$o$next,l,k;return regenerator_default.a.wrap(function _callee11$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:a=_ref7.data.method;_context11.t0=a;_context11.next=_context11.t0==="next"?4:_context11.t0==="return"?17:19;break;case 4:_context11.prev=4;_context11.next=7;return o.next();case 7:_yield$o$next=_context11.sent;l=_yield$o$next.done;k=_yield$o$next.value;l?(r.postMessage({type:"next",done:!0}),r.close()):(i.length=0,r.postMessage({type:"next",done:!1,value:t(k,i)},i));_context11.next=16;break;case 13:_context11.prev=13;_context11.t1=_context11["catch"](4);r.postMessage({type:"throw",error:Qi(_context11.t1)}),r.close();case 16:return _context11.abrupt("break",20);case 17:r.close(),o.return&&o.return();return _context11.abrupt("break",20);case 19:return _context11.abrupt("break",20);case 20:case"end":return _context11.stop();}}},_callee11,null,[[4,13]]);}));return function(_x17){return _ref8.apply(this,arguments);};}(),r.start(),s.push(n),{type:"RemoteIterable",port:n};};_.encodeIterable=Ki;var Xi=function Xi(e){if(e!=null){if(typeof e[Symbol.asyncIterator]=="function")return e[Symbol.asyncIterator]();if(typeof e[Symbol.iterator]=="function")return e[Symbol.iterator]();}throw TypeError("Value must be async or sync iterable");},$i=function $i(e,t){var _MessageChannel2=new MessageChannel(),s=_MessageChannel2.port1,r=_MessageChannel2.port2;return s.onmessage=function(_ref9){var n=_ref9.data;return e.apply(null,n);},t.push(r),{type:"RemoteCallback",port:r};};_.encodeCallback=$i;var Hi=function Hi(_ref10){var e=_ref10.port;return function(s,r){if(r===void 0){r=[];}e.postMessage(s,Object(toConsumableArray["a" /* default */])(new Set(r)));};};_.decodeCallback=Hi;});var Ns=b(function(Eo,Ms){"use strict";function Zi(_x3){return _Zi.apply(this,arguments);}function _Zi(){_Zi=_wrapAsyncGenerator(/*#__PURE__*/regenerator_default.a.mark(function _callee12(e,t){var s,_r3;return regenerator_default.a.wrap(function _callee12$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:if(t===void 0){t={};}s=e.getReader();_context12.prev=2;case 3:_context12.next=5;return _awaitAsyncGenerator(s.read());case 5:_r3=_context12.sent;if(!_r3.done){_context12.next=8;break;}return _context12.abrupt("return");case 8:_context12.next=10;return _r3.value;case 10:_context12.next=3;break;case 12:_context12.prev=12;t.preventCancel!==!0&&s.cancel(),s.releaseLock();return _context12.finish(12);case 15:case"end":return _context12.stop();}}},_callee12,null,[[2,,12,15]]);}));return _Zi.apply(this,arguments);}Ms.exports=Zi;});var _s=b(function(Ao,Bs){"use strict";var Wi=R(),_q5=q(),Rs=_q5.encodeCID,zs=_q5.decodeCID,Os=_q5.CID,_Us=Us(),Ae=_Us.decodeIterable,E=_Us.encodeIterable,Fs=_Us.encodeCallback,Ce=Ns(),Ls=/*#__PURE__*/function(_Wi){Object(inheritsLoose["a" /* default */])(Ls,_Wi);function Ls(t){return _Wi.call(this,"core",["add","addAll","cat","ls"],t)||this;}var _proto7=Ls.prototype;_proto7.addAll=function addAll(t,s){if(s===void 0){s={};}var _this3=this;return _wrapAsyncGenerator(/*#__PURE__*/regenerator_default.a.mark(function _callee13(){var _s7,r,n,i,o,a;return regenerator_default.a.wrap(function _callee13$(_context13){while(1){switch(_context13.prev=_context13.next){case 0:_s7=s;r=_s7.timeout;n=_s7.signal;i=Object(toConsumableArray["a" /* default */])(s.transfer||[]);o=s.progress?Fs(s.progress,i):void 0;_context13.next=7;return _awaitAsyncGenerator(_this3.remote.addAll(_objectSpread(_objectSpread({},s),{},{input:s0(t,i),progress:o,transfer:i,timeout:r,signal:n})));case 7:a=_context13.sent;return _context13.delegateYield(_asyncGeneratorDelegate(_asyncIterator(Ae(a.data,Vs)),_awaitAsyncGenerator),"t0",9);case 9:case"end":return _context13.stop();}}},_callee13);}))();};_proto7.add=/*#__PURE__*/function(){var _add=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee14(t,s){var _s8,r,n,i,o,a;return regenerator_default.a.wrap(function _callee14$(_context14){while(1){switch(_context14.prev=_context14.next){case 0:if(s===void 0){s={};}_s8=s;r=_s8.timeout;n=_s8.signal;i=Object(toConsumableArray["a" /* default */])(s.transfer||[]);o=s.progress?Fs(s.progress,i):void 0;_context14.next=8;return this.remote.add(_objectSpread(_objectSpread({},s),{},{input:t0(t,i),progress:o,transfer:i,timeout:r,signal:n}));case 8:a=_context14.sent;return _context14.abrupt("return",Vs(a.data));case 10:case"end":return _context14.stop();}}},_callee14,this);}));function add(_x18,_x19){return _add.apply(this,arguments);}return add;}();_proto7.cat=function cat(t,s){if(s===void 0){s={};}var _this4=this;return _wrapAsyncGenerator(/*#__PURE__*/regenerator_default.a.mark(function _callee15(){var r,n;return regenerator_default.a.wrap(function _callee15$(_context15){while(1){switch(_context15.prev=_context15.next){case 0:r=Os.isCID(t)?Rs(t):t;_context15.next=3;return _awaitAsyncGenerator(_this4.remote.cat(_objectSpread(_objectSpread({},s),{},{path:r})));case 3:n=_context15.sent;return _context15.delegateYield(_asyncGeneratorDelegate(_asyncIterator(Ae(n.data,e0)),_awaitAsyncGenerator),"t0",5);case 5:case"end":return _context15.stop();}}},_callee15);}))();};_proto7.ls=function ls(t,s){if(s===void 0){s={};}var _this5=this;return _wrapAsyncGenerator(/*#__PURE__*/regenerator_default.a.mark(function _callee16(){var r,n;return regenerator_default.a.wrap(function _callee16$(_context16){while(1){switch(_context16.prev=_context16.next){case 0:r=Os.isCID(t)?Rs(t):t;_context16.next=3;return _awaitAsyncGenerator(_this5.remote.ls(_objectSpread(_objectSpread({},s),{},{path:r})));case 3:n=_context16.sent;return _context16.delegateYield(_asyncGeneratorDelegate(_asyncIterator(Ae(n.data,Yi)),_awaitAsyncGenerator),"t0",5);case 5:case"end":return _context16.stop();}}},_callee16);}))();};return Ls;}(Wi),Vs=function Vs(_ref11){var e=_ref11.path,t=_ref11.cid,s=_ref11.mode,r=_ref11.mtime,n=_ref11.size;return{path:e,cid:zs(t),mode:s,mtime:r,size:n};},Yi=function Yi(_ref12){var e=_ref12.depth,t=_ref12.name,s=_ref12.path,r=_ref12.size,n=_ref12.cid,i=_ref12.type,o=_ref12.mode,a=_ref12.mtime;return{cid:zs(n),type:i,name:t,path:s,mode:o,mtime:a,size:r,depth:e};},e0=function e0(e){return e;},t0=function t0(e,t){if(e instanceof Blob)return e;if(typeof e=="string")return e;if(e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e))return e;{var _s9=Se(e);if(_s9)return E(_s9,Ie,t);var _r4=De(e);if(_r4)return E(_r4,B,t);var _n5=Te(e);if(_n5)return E(Ce(_n5),B,t);var i=je(e);if(i)return qe(i,t);throw TypeError("Unexpected input: "+typeof e);}},s0=function s0(e,t){var s=Se(e);if(s)return E(s,Ie,t);var r=De(e);if(r)return E(r,B,t);var n=Te(e);if(n)return E(Ce(n),B,t);throw TypeError("Unexpected input: "+typeof e);},B=function B(e,t){if(e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e))return e;if(e instanceof Blob)return{path:"",content:e};if(typeof e=="string")return{path:"",content:e};{var _s10=je(e);if(_s10)return qe(_s10,t);throw TypeError("Unexpected input: "+typeof e);}},Ie=function Ie(e,t){if(typeof e=="number")throw TypeError("Iterable of numbers is not supported");if(e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e))return e;if(e instanceof Blob)return{path:"",content:e};if(typeof e=="string")return{path:"",content:e};{var _s11=je(e);if(_s11)return qe(_s11,t);throw TypeError("Unexpected input: "+typeof e);}},qe=function qe(_ref13,n){var e=_ref13.path,t=_ref13.mode,s=_ref13.mtime,r=_ref13.content;return{path:e,mode:t,mtime:s,content:r?r0(r,n):void 0};},r0=function r0(e,t){if(e==null)return"";if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return e;if(e instanceof Blob)return e;if(typeof e=="string")return e;{var _s12=Se(e);if(_s12)return E(_s12,Ie,t);var _r5=De(e);if(_r5)return E(_r5,B,t);var _n6=Te(e);if(_n6)return E(Ce(_n6),B,t);throw TypeError("Unexpected input: "+typeof e);}},Se=function Se(e){var t=e;return t&&typeof t[Symbol.iterator]=="function"?t:null;},De=function De(e){var t=e;return t&&typeof t[Symbol.asyncIterator]=="function"?t:null;},Te=function Te(e){return e&&typeof e.getReader=="function"?e:null;},je=function je(e){return typeof e=="object"&&(e.path||e.content)?e:null;};Bs.exports=Ls;});var Js=b(function(Co,Gs){"use strict";var n0=R(),_q6=q(),i0=_q6.decodeCID,o0=_q6.CID,Qs=/*#__PURE__*/function(_n7){Object(inheritsLoose["a" /* default */])(Qs,_n7);function Qs(t){return _n7.call(this,"files",["stat"],t)||this;}var _proto8=Qs.prototype;_proto8.stat=/*#__PURE__*/function(){var _stat2=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee17(t,s){var _s13,r,n,i,o,a,_yield$this$remote$st,l;return regenerator_default.a.wrap(function _callee17$(_context17){while(1){switch(_context17.prev=_context17.next){case 0:if(s===void 0){s={};}_s13=s;r=_s13.size;n=_s13.hash;i=_s13.withLocal;o=_s13.timeout;a=_s13.signal;_context17.next=9;return this.remote.stat({path:b0(t),size:r,hash:n,withLocal:i,timeout:o,signal:a});case 9:_yield$this$remote$st=_context17.sent;l=_yield$this$remote$st.stat;return _context17.abrupt("return",a0(l));case 12:case"end":return _context17.stop();}}},_callee17,this);}));function stat(_x20,_x21){return _stat2.apply(this,arguments);}return stat;}();return Qs;}(n0);Gs.exports=Qs;var b0=function b0(e){return o0.isCID(e)?"/ipfs/"+e.toString():e;},a0=function a0(e){return _objectSpread(_objectSpread({},e),{},{cid:i0(e.cid)});};});var Ks=b(function(Io,Ps){"use strict";var Xs=ze(),c0=Is(),x0=js(),l0=_s(),d0=Js(),G=/*#__PURE__*/function(_l){Object(inheritsLoose["a" /* default */])(G,_l);function G(t){var _this9;_this9=_l.call(this,t)||this;_this9.transport=t,_this9.dag=new x0(_this9.transport),_this9.files=new d0(_this9.transport),_this9.block=new c0(_this9.transport);return _this9;}G.attach=function attach(t,s){t.transport.connect(s);};G.detached=function detached(){return new G(new Xs(void 0));};G.from=function from(t){return new G(new Xs(t));};return G;}(l0);Ps.exports=G;});var $s=S(Ne()),Hs=S(Ks()),Zs=S(ne());var k0=["https://ipfs.io/ipfs/:hash","https://dweb.link/ipfs/:hash","https://gateway.ipfs.io/ipfs/:hash","https://ipfs.infura.io/ipfs/:hash","https://ninetailed.ninja/ipfs/:hash","https://10.via0.com/ipfs/:hash","https://ipfs.eternum.io/ipfs/:hash","https://hardbin.com/ipfs/:hash","https://cloudflare-ipfs.com/ipfs/:hash","https://cf-ipfs.com/ipfs/:hash","https://gateway.pinata.cloud/ipfs/:hash","https://ipfs.sloppyta.co/ipfs/:hash","https://ipfs.greyh.at/ipfs/:hash","https://jorropo.ovh/ipfs/:hash","https://jorropo.net/ipfs/:hash","https://gateway.temporal.cloud/ipfs/:hash","https://ipfs.runfission.com/ipfs/:hash","https://trusti.id/ipfs/:hash","https://ipfs.overpi.com/ipfs/:hash","https://ipfs.ink/ipfs/:hash","https://gateway.ravenland.org/ipfs/:hash","https://ipfs.smartsignature.io/ipfs/:hash","https://ipfs.telos.miami/ipfs/:hash","https://robotizing.net/ipfs/:hash","https://ipfs.mttk.net/ipfs/:hash","https://ipfs.fleek.co/ipfs/:hash","https://ipfs.jbb.one/ipfs/:hash","https://jacl.tech/ipfs/:hash","https://ipfs.k1ic.com/ipfs/:hash","https://ipfs.drink.cafe/ipfs/:hash","https://ipfs.azurewebsites.net/ipfs/:hash","https://gw.ipfspin.com/ipfs/:hash","https://ipfs.denarius.io/ipfs/:hash"];function u0(e){var t=0;return new Promise(function(s,r){return e.forEach(function(n){return n.then(s).catch(function(){++t===e.length&&r();});});});}var Ws=S(ke()),Ys=S(W()),er=S(Y());var f0=function f0(e){return new Uint8Array((e.match(/.{1,2}/g)||[]).map(function(t){return parseInt(t,16);}));};var h0=Zs.default;var p0=Hs.default;var m0=$s.default;var g0=er.default;var w0=Ws.default;var y0=Ys.default;
// CONCATENATED MODULE: ../code/js/ipfsClient.js
/** @type {MessagePort} */var port;var forceNormalWorker=false;if(typeof window!=="undefined"){var workerSrc="./js/workers/ipfsWorker.js";var ipfsClient_pathname=window.location.pathname;if(ipfsClient_pathname.indexOf("/ipfs/")!==-1){var ipfsClient_cid=ipfsClient_pathname.slice(6,52);forceNormalWorker=true;workerSrc="/ipfs/"+ipfsClient_cid+"/js/workers/ipfsWorker.js";}else if(location.origin!=="https://code.zed.vision"){forceNormalWorker=true;workerSrc="https://unpkg.com/@zedvision/code/js/workers/ipfsWorker.js";}if(typeof SharedWorker!=="undefined"&&!forceNormalWorker){var ipfsWorker=new SharedWorker(workerSrc);port=ipfsWorker.port;}else{var worker=new Worker(workerSrc);var ipfsClient_MessageChannel=new MessageChannel(),port1=ipfsClient_MessageChannel.port1,port2=ipfsClient_MessageChannel.port2;var msg={clientInit:true,port:port1};worker.postMessage(msg,[port1]);port=port2;}}var ipfsClient=p0.from(port);var ipfsCat=/*#__PURE__*/function(){var _ref=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(cid,opts){var options,res,result,resultStr;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:options=opts||{};res=ipfsClient.cat(cid,options);_context.t0=g0;_context.next=5;return m0(res);case 5:_context.t1=_context.sent;result=(0,_context.t0)(_context.t1);resultStr=y0(result);return _context.abrupt("return",resultStr);case 9:case"end":return _context.stop();}}},_callee);}));return function ipfsCat(_x,_x2){return _ref.apply(this,arguments);};}();
// CONCATENATED MODULE: ../code/js/hash.js
var log=function log(msg){if(typeof mgs==="string")console.log(msg);else if(typeof msg==="object")console.table({msg:msg});else console.log(msg);};function sha256ToCid(hash){return new h0(0,112,f0("1220"+hash)).toString();}// const signalCache = {};
/**
 * @param {string} signal 
 * @param {string} data
 */function sendSignal(_x,_x2){return _sendSignal.apply(this,arguments);}// export const sha256ToCID = (str) =>
//   (new CID(0, 112, fromHexString("1220" + str))).toString();
/**
 * @param {string} signal
 * @param {number} _retry
 * @returns {Promise<()=>any>}
 */function _sendSignal(){_sendSignal=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee(signal,data){var toSave,dataCid,_URL,pathname,_yield$ipfsClient$add,path;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:log("sending signal: "+signal);if(!data){_context.next=13;break;}log("sending data as well....");toSave=data;if(typeof data!=="string")toSave=JSON.stringify(data);log(toSave);_context.next=8;return ipfsClient.add(toSave);case 8:dataCid=_context.sent.cid.toString();_URL=new URL(signal),pathname=_URL.pathname;_context.next=12;return fetch("https://zed.vision/signal/?cid="+dataCid+"&signal="+pathname.slice(1));case 12:fetch("https://zed.vision/ipfs/"+dataCid);// const hexHash = Array.from((new CID(dataCid)).multihash).map((b) =>
//   ("00" + b.toString(16)).slice(-2)
// ).join("");
// const allHash = new Array(hexHash.length).fill(signal).map((x, i) =>
//   x + new Array(i).fill("x").join("") + hexHash.slice(i, i + 1)
// );
// log({ allHash });
// log("adding the fist 5");
// await Promise.all(
//   allHash.map(async (x) => {
//     const { path } = await ipfsClient.add(x);
//     log(path);
//   }),
// );
// log(`rest is uploaded`);
case 13:_context.next=15;return ipfsClient.add(signal);case 15:_yield$ipfsClient$add=_context.sent;path=_yield$ipfsClient$add.path;log("signal sent --- "+path);return _context.abrupt("return",{success:true});case 19:case"end":return _context.stop();}}},_callee);}));return _sendSignal.apply(this,arguments);}function fetchSignal(_x3,_x4){return _fetchSignal.apply(this,arguments);}/****
 * 
 * 
 * 
 * UTILS
 * 
 * 
 * 
 * 
 */ /**
 * 
 * @param {string} signal
 * @param {number} retry 
 * @returns {Promise<any>}
 */ /**
 * @param {number} delay
 */function _fetchSignal(){_fetchSignal=Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regenerator_default.a.mark(function _callee2(signal,_retry){var retry,smallSignal,cid,resData,res,resCID,_smallSignal,_cid,_resData;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!(typeof window==="undefined")){_context2.next=2;break;}return _context2.abrupt("return");case 2:retry=typeof _retry==="number"?_retry:999;// console.log("retrying hash fetch");
if(!(window.location.hostname!=="code.zed.vision")){_context2.next=29;break;}_context2.prev=4;if(!(retry===0)){_context2.next=7;break;}throw new Error("No more retry");case 7:smallSignal=signal.slice(-8);////    log(`signal to wait: ${smallSignal}`);
// console.log(`https://zed.vision/signal?signal=${smallSignal}`);
_context2.next=10;return fetch("https://zed.vision/signal?signal="+smallSignal+"&securityrandomparam="+Math.random()*10000).then(function(x){return x.text();});case 10:cid=_context2.sent;console.log(cid);if(!(String(cid)==="404")){_context2.next=16;break;}_context2.next=15;return wait(3000);case 15:return _context2.abrupt("return",fetchSignal(signal,retry-1));case 16:_context2.next=18;return fetch("https://code.zed.vision/ipfs/"+cid).then(function(x){return x.text();});case 18:resData=_context2.sent;return _context2.abrupt("return",function(){return parse(resData);});case 22:_context2.prev=22;_context2.t0=_context2["catch"](4);_context2.next=26;return wait(3000);case 26:if(!(retry>1)){_context2.next=28;break;}return _context2.abrupt("return",fetchSignal(signal,retry-1));case 28:throw new Error("no signal");case 29:_context2.prev=29;if(!(retry===0)){_context2.next=32;break;}throw new Error("No more retry");case 32:_context2.next=34;return ipfsClient.add(signal,{onlyHash:true});case 34:res=_context2.sent;resCID=res.cid.toString();//  log(`CID to wait: ${resCID}`);
//
_context2.next=38;return ipfsCat(resCID,{timeout:1500});case 38:_smallSignal=signal.slice(-8);_context2.next=41;return fetch("https://zed.vision/signal?signal="+_smallSignal+"&securityrandomparam="+Math.random()*10000).then(function(x){return x.text();});case 41:_cid=_context2.sent;_context2.next=44;return fetch("https://code.zed.vision/ipfs/"+_cid).then(function(x){return x.text();});case 44:_resData=_context2.sent;return _context2.abrupt("return",function(){return parse(_resData);});case 48:_context2.prev=48;_context2.t1=_context2["catch"](29);if(!(retry>1)){_context2.next=52;break;}return _context2.abrupt("return",fetchSignal(signal,retry-1));case 52:throw new Error("no signal");case 53:case"end":return _context2.stop();}}},_callee2,null,[[4,22],[29,48]]);}));return _fetchSignal.apply(this,arguments);}function wait(delay){return new Promise(function(resolve){setTimeout(function(){resolve(delay);},delay);});}// async function getData(signal, retry) {
//   const { pathname } = new URL(signal);
//   const signalPath = pathname.slice(1);
//   const res = await fetch(`https://zed.vision/signal?signal=${signalPath}`);
//   const cid = await res.text();
//   const data = await fetch(`https://code.zed.vision/ipfs/${cid}`);
//   const content = await data.text();
//   return content;
//   // return fetch(`https://zed.vision/signal?signal=${signalPath}`).then((x) =>
//   //   x.text()
//   // ).then((cid) => ipfsCat(cid));
// }
// if (retry === 0) throw new Error("Cant fetch data");
// log(`GET data, retry: ${retry}`);
// try {
//   const hashArr = new Array(68).fill(0).map((_x, i) => i);
//   const restRes = hashArr.map((i) =>
//     wait(Math.random() * 2000).then(() => getCharAt(signal, i))
//   );
//   const hashHex = (await Promise.all(restRes)).join("");
//   const cid = new CID(0, 112, fromHexString(hashHex));
//   log(`We got the data, its hash: ${cid.toString()}`);
//   return await ipfsCat(
//     cid.toString(),
//     { timeout: 1500 },
//   );
// } catch (e) {
//   return getData(signal, retry - 1);
// }
/**
       * @param {string} signal
       * @param {number} i
       */ //   async function getCharAt(signal, i) {
//     if (!signalCache[signal]) {
//       signalCache[signal] = {
//         "0": "1",
//         "1": "2",
//         "2": "2",
//         "3": "0",
//       };
//     }
//     if (signalCache[signal][i]) return signalCache[signal][i];
//     const chars = [..."0123456789abcdef"];
//     const prefix = new Array(i).fill("x").join("");
//     if (signalCache[signal][i]) return signalCache[signal][i];
//     log(`fetching char ${i}`);
//     const nextChar = await raceToSuccess(
//       chars.map(async (xx) => {
//         await wait(Math.random() * 1000);
//         if (signalCache[signal][i]) return signalCache[signal][i];
//         return await fetchSignal(signal + prefix + xx, 1).then(() => xx);
//       }),
//     );
//     signalCache[signal][i] = nextChar;
//     log(signalCache[signal]);
//     return nextChar;
//   }
// }
/**
 * @param {sting} d
 */function parse(d){try{if(typeof d!=="string")return d;var ret=JSON.parse(d);//   console.log({ ret });
return ret;}catch(e){//    console.log({ d });
return d;}}
// CONCATENATED MODULE: ../qrious/dist/qrious.esm.js
var c=function c(i,e){return function(){return e||(e={exports:{}},i(e.exports,e)),e.exports;};};var qrious_esm_E=c(function(t0,O){"use strict";var w=function w(){},le=Object.prototype.hasOwnProperty,ve=Array.prototype.slice;function de(i,e){var t;return typeof Object.create=="function"?t=Object.create(i):(w.prototype=i,t=new w(),w.prototype=null),e&&N(!0,t,e),t;}function _e(i,e,t,r){var x=this;return typeof i!="string"&&(r=t,t=e,e=i,i=null),typeof e!="function"&&(r=t,t=e,e=function e(){return x.apply(this,arguments);}),N(!1,e,x,r),e.prototype=de(x.prototype,t),e.prototype.constructor=e,e.class_=i||x.class_,e.super_=x,e;}function N(i,e,t){t=ve.call(arguments,2);for(var r,x,s=0,a=t.length;s<a;s++){x=t[s];for(r in x){(!i||le.call(x,r))&&(e[r]=x[r]);}}}O.exports=_e;});var qrious_esm_S=c(function(r0,A){"use strict";var be=qrious_esm_E();function k(){}k.class_="Nevis";k.super_=Object;k.extend=be;A.exports=k;});var u=c(function(x0,y){"use strict";y.exports=qrious_esm_S();});var qrious_esm_B=c(function(s0,C){"use strict";var me=u(),ke=me.extend(function(i,e,t){this.qrious=i,this.element=e,this.element.qrious=i,this.enabled=Boolean(t);},{draw:function draw(i){},getElement:function getElement(){return this.enabled||(this.enabled=!0,this.render()),this.element;},getModuleSize:function getModuleSize(i){var e=this.qrious,t=e.padding||0,r=Math.floor((e.size-t*2)/i.width);return Math.max(1,r);},getOffset:function getOffset(i){var e=this.qrious,t=e.padding;if(t!=null)return t;var r=this.getModuleSize(i),x=Math.floor((e.size-r*i.width)/2);return Math.max(0,x);},render:function render(i){this.enabled&&(this.resize(),this.reset(),this.draw(i));},reset:function reset(){},resize:function resize(){}});C.exports=ke;});var L=c(function(a0,R){"use strict";var pe=qrious_esm_B(),ge=pe.extend({draw:function draw(i){var e,t,r=this.qrious,x=this.getModuleSize(i),s=this.getOffset(i),a=this.element.getContext("2d");for(a.fillStyle=r.foreground,a.globalAlpha=r.foregroundAlpha,e=0;e<i.width;e++){for(t=0;t<i.width;t++){i.buffer[t*i.width+e]&&a.fillRect(x*e+s,x*t+s,x,x);}}},reset:function reset(){var i=this.qrious,e=this.element.getContext("2d"),t=i.size;e.lineWidth=1,e.clearRect(0,0,t,t),e.fillStyle=i.background,e.globalAlpha=i.backgroundAlpha,e.fillRect(0,0,t,t);},resize:function resize(){var i=this.element;i.width=i.height=this.qrious.size;}});R.exports=ge;});var j=c(function(n0,T){"use strict";var we=u(),Be=we.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]});T.exports=Be;});var I=c(function(f0,z){"use strict";var Me=u(),qe=Me.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}});z.exports=qe;});var qrious_esm_V=c(function(c0,P){"use strict";var Oe=u(),Ne=Oe.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]});P.exports=Ne;});var qrious_esm_G=c(function(o0,U){"use strict";var Ee=u(),Ae=Ee.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]});U.exports=Ae;});var qrious_esm_K=c(function(u0,F){"use strict";var Se=u(),ye=j(),_=I(),v=qrious_esm_V(),Ce=qrious_esm_G(),o=Se.extend(function(i){var e,t,r,x,s,a=i.value.length;for(this._badness=[],this._level=_.LEVELS[i.level],this._polynomial=[],this._value=i.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,r=(this._level-1)*4+(this._version-1)*16,x=_.BLOCKS[r++],s=_.BLOCKS[r++],e=_.BLOCKS[r++],t=_.BLOCKS[r],r=e*(x+s)+s-3+(this._version<=9),!(a<=r));){;}this._dataBlock=e,this._eccBlock=t,this._neccBlock1=x,this._neccBlock2=s;var n=this.width=17+4*this._version;this.buffer=o._createArray(n*n),this._ecc=o._createArray(e+(e+t)*(x+s)+s),this._mask=o._createArray((n*(n+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+n*(n-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(a),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish();},{_addAlignment:function _addAlignment(i,e){var t,r=this.buffer,x=this.width;for(r[i+x*e]=1,t=-2;t<2;t++){r[i+t+x*(e-2)]=1,r[i-2+x*(e+t+1)]=1,r[i+2+x*(e+t)]=1,r[i+t+1+x*(e+2)]=1;}for(t=0;t<2;t++){this._setMask(i-1,e+t),this._setMask(i+1,e-t),this._setMask(i-t,e-1),this._setMask(i+t,e+1);}},_appendData:function _appendData(i,e,t,r){var x,s,a,n=this._polynomial,f=this._stringBuffer;for(s=0;s<r;s++){f[t+s]=0;}for(s=0;s<e;s++){if(x=v.LOG[f[i+s]^f[t]],x!==255)for(a=1;a<r;a++){f[t+a-1]=f[t+a]^v.EXPONENT[o._modN(x+n[r-a])];}else for(a=t;a<t+r;a++){f[a]=f[a+1];}f[t+r-1]=x===255?0:v.EXPONENT[o._modN(x+n[0])];}},_appendEccToData:function _appendEccToData(){var i,e=0,t=this._dataBlock,r=this._calculateMaxLength(),x=this._eccBlock;for(i=0;i<this._neccBlock1;i++){this._appendData(e,t,r,x),e+=t,r+=x;}for(i=0;i<this._neccBlock2;i++){this._appendData(e,t+1,r,x),e+=t+1,r+=x;}},_applyMask:function _applyMask(i){var e,t,r,x,s=this.buffer,a=this.width;switch(i){case 0:for(x=0;x<a;x++){for(r=0;r<a;r++){!(r+x&1)&&!this._isMasked(r,x)&&(s[r+x*a]^=1);}}break;case 1:for(x=0;x<a;x++){for(r=0;r<a;r++){!(x&1)&&!this._isMasked(r,x)&&(s[r+x*a]^=1);}}break;case 2:for(x=0;x<a;x++){for(e=0,r=0;r<a;r++,e++){e===3&&(e=0),!e&&!this._isMasked(r,x)&&(s[r+x*a]^=1);}}break;case 3:for(t=0,x=0;x<a;x++,t++){for(t===3&&(t=0),e=t,r=0;r<a;r++,e++){e===3&&(e=0),!e&&!this._isMasked(r,x)&&(s[r+x*a]^=1);}}break;case 4:for(x=0;x<a;x++){for(e=0,t=x>>1&1,r=0;r<a;r++,e++){e===3&&(e=0,t=!t),!t&&!this._isMasked(r,x)&&(s[r+x*a]^=1);}}break;case 5:for(t=0,x=0;x<a;x++,t++){for(t===3&&(t=0),e=0,r=0;r<a;r++,e++){e===3&&(e=0),!((r&x&1)+!(!e|!t))&&!this._isMasked(r,x)&&(s[r+x*a]^=1);}}break;case 6:for(t=0,x=0;x<a;x++,t++){for(t===3&&(t=0),e=0,r=0;r<a;r++,e++){e===3&&(e=0),!((r&x&1)+(e&&e===t)&1)&&!this._isMasked(r,x)&&(s[r+x*a]^=1);}}break;case 7:for(t=0,x=0;x<a;x++,t++){for(t===3&&(t=0),e=0,r=0;r<a;r++,e++){e===3&&(e=0),!((e&&e===t)+(r+x&1)&1)&&!this._isMasked(r,x)&&(s[r+x*a]^=1);}}break;}},_calculateMaxLength:function _calculateMaxLength(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;},_calculatePolynomial:function _calculatePolynomial(){var i,e,t=this._eccBlock,r=this._polynomial;for(r[0]=1,i=0;i<t;i++){for(r[i+1]=1,e=i;e>0;e--){r[e]=r[e]?r[e-1]^v.EXPONENT[o._modN(v.LOG[r[e]]+i)]:r[e-1];}r[0]=v.EXPONENT[o._modN(v.LOG[r[0]]+i)];}for(i=0;i<=t;i++){r[i]=v.LOG[r[i]];}},_checkBadness:function _checkBadness(){var i,e,t,r,x,s=0,a=this._badness,n=this.buffer,f=this.width;for(x=0;x<f-1;x++){for(r=0;r<f-1;r++){(n[r+f*x]&&n[r+1+f*x]&&n[r+f*(x+1)]&&n[r+1+f*(x+1)]||!(n[r+f*x]||n[r+1+f*x]||n[r+f*(x+1)]||n[r+1+f*(x+1)]))&&(s+=o.N2);}}var h=0;for(x=0;x<f;x++){for(t=0,a[0]=0,i=0,r=0;r<f;r++){e=n[r+f*x],i===e?a[t]++:a[++t]=1,i=e,h+=i?1:-1;}s+=this._getBadness(t);}h<0&&(h=-h);var q=0,b=h;for(b+=b<<2,b<<=1;b>f*f;){b-=f*f,q++;}for(s+=q*o.N4,r=0;r<f;r++){for(t=0,a[0]=0,i=0,x=0;x<f;x++){e=n[r+f*x],i===e?a[t]++:a[++t]=1,i=e;}s+=this._getBadness(t);}return s;},_convertBitStream:function _convertBitStream(i){var e,t,r=this._ecc,x=this._version;for(t=0;t<i;t++){r[t]=this._value.charCodeAt(t);}var s=this._stringBuffer=r.slice(),a=this._calculateMaxLength();i>=a-2&&(i=a-2,x>9&&i--);var n=i;if(x>9){for(s[n+2]=0,s[n+3]=0;n--;){e=s[n],s[n+3]|=255&e<<4,s[n+2]=e>>4;}s[2]|=255&i<<4,s[1]=i>>4,s[0]=64|i>>12;}else{for(s[n+1]=0,s[n+2]=0;n--;){e=s[n],s[n+2]|=255&e<<4,s[n+1]=e>>4;}s[1]|=255&i<<4,s[0]=64|i>>4;}for(n=i+3-(x<10);n<a;){s[n++]=236,s[n++]=17;}},_getBadness:function _getBadness(i){var e,t=0,r=this._badness;for(e=0;e<=i;e++){r[e]>=5&&(t+=o.N1+r[e]-5);}for(e=3;e<i-1;e+=2){r[e-2]===r[e+2]&&r[e+2]===r[e-1]&&r[e-1]===r[e+1]&&r[e-1]*3===r[e]&&(r[e-3]===0||e+3>i||r[e-3]*3>=r[e]*4||r[e+3]*3>=r[e]*4)&&(t+=o.N3);}return t;},_finish:function _finish(){this._stringBuffer=this.buffer.slice();var i,e,t=0,r=3e4;for(e=0;e<8&&(this._applyMask(e),i=this._checkBadness(),i<r&&(r=i,t=e),t!==7);e++){this.buffer=this._stringBuffer.slice();}t!==e&&this._applyMask(t),r=_.FINAL_FORMAT[t+(this._level-1<<3)];var x=this.buffer,s=this.width;for(e=0;e<8;e++,r>>=1){r&1&&(x[s-1-e+s*8]=1,e<6?x[8+s*e]=1:x[8+s*(e+1)]=1);}for(e=0;e<7;e++,r>>=1){r&1&&(x[8+s*(s-7+e)]=1,e?x[6-e+s*8]=1:x[7+s*8]=1);}},_interleaveBlocks:function _interleaveBlocks(){var i,e,t=this._dataBlock,r=this._ecc,x=this._eccBlock,s=0,a=this._calculateMaxLength(),n=this._neccBlock1,f=this._neccBlock2,h=this._stringBuffer;for(i=0;i<t;i++){for(e=0;e<n;e++){r[s++]=h[i+e*t];}for(e=0;e<f;e++){r[s++]=h[n*t+i+e*(t+1)];}}for(e=0;e<f;e++){r[s++]=h[n*t+i+e*(t+1)];}for(i=0;i<x;i++){for(e=0;e<n+f;e++){r[s++]=h[a+i+e*x];}}this._stringBuffer=r;},_insertAlignments:function _insertAlignments(){var i,e,t,r=this._version,x=this.width;if(r>1)for(i=ye.BLOCK[r],t=x-7;;){for(e=x-7;e>i-3&&(this._addAlignment(e,t),!(e<i));){e-=i;}if(t<=i+9)break;t-=i,this._addAlignment(6,t),this._addAlignment(t,6);}},_insertFinders:function _insertFinders(){var i,e,t,r,x=this.buffer,s=this.width;for(i=0;i<3;i++){for(e=0,r=0,i===1&&(e=s-7),i===2&&(r=s-7),x[r+3+s*(e+3)]=1,t=0;t<6;t++){x[r+t+s*e]=1,x[r+s*(e+t+1)]=1,x[r+6+s*(e+t)]=1,x[r+t+1+s*(e+6)]=1;}for(t=1;t<5;t++){this._setMask(r+t,e+1),this._setMask(r+1,e+t+1),this._setMask(r+5,e+t),this._setMask(r+t+1,e+5);}for(t=2;t<4;t++){x[r+t+s*(e+2)]=1,x[r+2+s*(e+t+1)]=1,x[r+4+s*(e+t)]=1,x[r+t+1+s*(e+4)]=1;}}},_insertTimingGap:function _insertTimingGap(){var i,e,t=this.width;for(e=0;e<7;e++){this._setMask(7,e),this._setMask(t-8,e),this._setMask(7,e+t-7);}for(i=0;i<8;i++){this._setMask(i,7),this._setMask(i+t-8,7),this._setMask(i,t-8);}},_insertTimingRowAndColumn:function _insertTimingRowAndColumn(){var i,e=this.buffer,t=this.width;for(i=0;i<t-14;i++){i&1?(this._setMask(8+i,6),this._setMask(6,8+i)):(e[8+i+t*6]=1,e[6+t*(8+i)]=1);}},_insertVersion:function _insertVersion(){var i,e,t,r,x=this.buffer,s=this._version,a=this.width;if(s>6)for(i=Ce.BLOCK[s-7],e=17,t=0;t<6;t++){for(r=0;r<3;r++,e--){1&(e>11?s>>e-12:i>>e)?(x[5-t+a*(2-r+a-11)]=1,x[2-r+a-11+a*(5-t)]=1):(this._setMask(5-t,2-r+a-11),this._setMask(2-r+a-11,5-t));}}},_isMasked:function _isMasked(i,e){var t=o._getMaskBit(i,e);return this._mask[t]===1;},_pack:function _pack(){var i,e,t,r=1,x=1,s=this.width,a=s-1,n=s-1,f=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(e=0;e<f;e++){for(i=this._stringBuffer[e],t=0;t<8;t++,i<<=1){128&i&&(this.buffer[a+s*n]=1);do{x?a--:(a++,r?n!==0?n--:(a-=2,r=!r,a===6&&(a--,n=9)):n!==s-1?n++:(a-=2,r=!r,a===6&&(a--,n-=8))),x=!x;}while(this._isMasked(a,n));}}},_reverseMask:function _reverseMask(){var i,e,t=this.width;for(i=0;i<9;i++){this._setMask(i,8);}for(i=0;i<8;i++){this._setMask(i+t-8,8),this._setMask(8,i);}for(e=0;e<7;e++){this._setMask(8,e+t-7);}},_setMask:function _setMask(i,e){var t=o._getMaskBit(i,e);this._mask[t]=1;},_syncMask:function _syncMask(){var i,e,t=this.width;for(e=0;e<t;e++){for(i=0;i<=e;i++){this.buffer[i+t*e]&&this._setMask(i,e);}}}},{_createArray:function _createArray(i){var e,t=[];for(e=0;e<i;e++){t[e]=0;}return t;},_getMaskBit:function _getMaskBit(i,e){var t;return i>e&&(t=i,i=e,e=t),t=e,t+=e*e,t>>=1,t+=i,t;},_modN:function _modN(i){for(;i>=255;){i-=255,i=(i>>8)+(i&255);}return i;},N1:3,N2:3,N3:40,N4:10});F.exports=o;});var qrious_esm_X=c(function(h0,D){"use strict";var Re=qrious_esm_B(),Le=Re.extend({draw:function draw(){this.element.src=this.qrious.toDataURL();},reset:function reset(){this.element.src="";},resize:function resize(){var i=this.element;i.width=i.height=this.qrious.size;}});D.exports=Le;});var qrious_esm_H=c(function(l0,Q){"use strict";var Te=u(),je=Te.extend(function(i,e,t,r){this.name=i,this.modifiable=Boolean(e),this.defaultValue=t,this._valueTransformer=r;},{transform:function transform(i){var e=this._valueTransformer;return typeof e=="function"?e(i,this):i;}});Q.exports=je;});var M=c(function(v0,W){"use strict";var ze=u(),Ie=ze.extend(null,{abs:function abs(i){return i!=null?Math.abs(i):null;},hasOwn:function hasOwn(i,e){return Object.prototype.hasOwnProperty.call(i,e);},noop:function noop(){},toUpperCase:function toUpperCase(i){return i!=null?i.toUpperCase():null;}});W.exports=Ie;});var qrious_esm_Y=c(function(d0,J){"use strict";var Pe=u(),p=M(),d=Pe.extend(function(i){this.options={},i.forEach(function(e){this.options[e.name]=e;},this);},{exists:function exists(i){return this.options[i]!=null;},get:function get(i,e){return d._get(this.options[i],e);},getAll:function getAll(i){var e,t=this.options,r={};for(e in t){p.hasOwn(t,e)&&(r[e]=d._get(t[e],i));}return r;},init:function init(i,e,t){typeof t!="function"&&(t=p.noop);var r,x;for(r in this.options){p.hasOwn(this.options,r)&&(x=this.options[r],d._set(x,x.defaultValue,e),d._createAccessor(x,e,t));}this._setAll(i,e,!0);},set:function set(i,e,t){return this._set(i,e,t);},setAll:function setAll(i,e){return this._setAll(i,e);},_set:function _set(i,e,t,r){var x=this.options[i];if(!x)throw new Error("Invalid option: "+i);if(!x.modifiable&&!r)throw new Error("Option cannot be modified: "+i);return d._set(x,e,t);},_setAll:function _setAll(i,e,t){if(!i)return!1;var r,x=!1;for(r in i){p.hasOwn(i,r)&&this._set(r,i[r],e,t)&&(x=!0);}return x;}},{_createAccessor:function _createAccessor(i,e,t){var r={get:function get(){return d._get(i,e);}};i.modifiable&&(r.set=function(x){d._set(i,x,e)&&t(x,i);}),Object.defineProperty(e,i.name,r);},_get:function _get(i,e){return e["_"+i.name];},_set:function _set(i,e,t){var r="_"+i.name,x=t[r],s=i.transform(e!=null?e:i.defaultValue);return t[r]=s,s!==x;}});J.exports=d;});var qrious_esm_$=c(function(_0,Z){"use strict";var Ve=u(),Ue=Ve.extend(function(){this._services={};},{getService:function getService(i){var e=this._services[i];if(!e)throw new Error("Service is not being managed with name: "+i);return e;},setService:function setService(i,e){if(this._services[i])throw new Error("Service is already managed with name: "+i);e&&(this._services[i]=e);}});Z.exports=Ue;});var qrious_esm_re=c(function(b0,ee){"use strict";var Ge=u(),Fe=L(),Ke=qrious_esm_K(),De=qrious_esm_X(),l=qrious_esm_H(),Xe=qrious_esm_Y(),Qe=qrious_esm_$(),m=M(),g=new Xe([new l("background",!0,"white"),new l("backgroundAlpha",!0,1,m.abs),new l("element"),new l("foreground",!0,"black"),new l("foregroundAlpha",!0,1,m.abs),new l("level",!0,"L",m.toUpperCase),new l("mime",!0,"image/png"),new l("padding",!0,null,m.abs),new l("size",!0,100,m.abs),new l("value",!0,"")]),ie=new Qe(),te=Ge.extend(function(i){g.init(i,this,this.update.bind(this));var e=g.get("element",this),t=ie.getService("element"),r=e&&t.isCanvas(e)?e:t.createCanvas(),x=e&&t.isImage(e)?e:t.createImage();this._canvasRenderer=new Fe(this,r,!0),this._imageRenderer=new De(this,x,x===e),this.update();},{get:function get(){return g.getAll(this);},set:function set(i){g.setAll(i,this)&&this.update();},toDataURL:function toDataURL(i){return this.canvas.toDataURL(i||this.mime);},update:function update(){var i=new Ke({level:this.level,value:this.value});this._canvasRenderer.render(i),this._imageRenderer.render(i);}},{use:function use(i){ie.setService(i.getName(),i);}});Object.defineProperties(te.prototype,{canvas:{get:function get(){return this._canvasRenderer.getElement();}},image:{get:function get(){return this._imageRenderer.getElement();}}});ee.exports=te;});var qrious_esm_se=c(function(m0,xe){"use strict";xe.exports=qrious_esm_re();});var qrious_esm_ne=c(function(k0,ae){"use strict";var He=u(),We=He.extend({getName:function getName(){}});ae.exports=We;});var ce=c(function(p0,fe){"use strict";var Je=qrious_esm_ne(),Ye=Je.extend({createCanvas:function createCanvas(){},createImage:function createImage(){},getName:function getName(){return"element";},isCanvas:function isCanvas(i){},isImage:function isImage(i){}});fe.exports=Ye;});var ue=c(function(g0,oe){"use strict";var Ze=ce(),$e=Ze.extend({createCanvas:function createCanvas(){return document.createElement("canvas");},createImage:function createImage(){return document.createElement("img");},isCanvas:function isCanvas(i){return i instanceof HTMLCanvasElement;},isImage:function isImage(i){return i instanceof HTMLImageElement;}});oe.exports=$e;});"use strict";var he=qrious_esm_se(),qrious_esm_e0=ue();he.use(new qrious_esm_e0());
// CONCATENATED MODULE: ./src/components/utils/sha256/sha256.ts



function sha256(_x) {
  return _sha.apply(this, arguments);
}

function _sha() {
  _sha = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee(message) {
    var msgBuffer, hashBuffer, hashArray, hashHex;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            msgBuffer = new TextEncoder().encode(message);
            _context.next = 3;
            return crypto.subtle.digest("SHA-256", msgBuffer);

          case 3:
            hashBuffer = _context.sent;
            hashArray = Array.from(new Uint8Array(hashBuffer)); // convert bytes to hex string

            hashHex = hashArray.map(function (b) {
              return ("00" + b.toString(16)).slice(-2);
            }).join("");
            return _context.abrupt("return", hashHex);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sha.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/components/code/Qr.tsx





var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;


/** @jsx jsx */
//@ts-ignore


 //@ts-ignore



var Qr_Qr = function Qr() {
  var side1 = react_default.a.useRef(null);
  var side2 = react_default.a.useRef(null);
  var side3 = react_default.a.useRef(null);
  var side4 = react_default.a.useRef(null);
  var side5 = react_default.a.useRef(null);
  var side6 = react_default.a.useRef(null);

  var _React$useState = react_default.a.useState(100),
      retry = _React$useState[0],
      setRetry = _React$useState[1]; // const [secrets, setSecrets] = React.useState({})


  var _React$useState2 = react_default.a.useState({
    current: "",
    last: ""
  }),
      urls = _React$useState2[0],
      setUrl = _React$useState2[1];

  var _React$useState3 = react_default.a.useState({}),
      cubeSides = _React$useState3[0],
      setQrCube = _React$useState3[1];

  var setQR = function setQR(side, color, element) {
    var options = {
      size: 220,
      element: element,
      foregroundAlpha: 0.9,
      foreground: color,
      backgroundAlpha: 1,
      padding: 10,
      background: "black",
      value: urls.current
    };
    var qr = "qr" + side;

    if (typeof cubeSides[qr] === "undefined") {
      cubeSides[qr] = new he(options);
    }

    if (cubeSides[qr].get().value !== urls.current) {
      cubeSides[qr].value = urls.current;
    }

    return cubeSides[qr];
  };

  react_default.a.useEffect(function () {
    var connect = /*#__PURE__*/function () {
      var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var secret, key, url;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                secret = Math.random() + "-" + Math.random() + "-" + Math.random();
                _context.next = 3;
                return sha256(secret);

              case 3:
                key = _context.sent.slice(0, 8);
                url = "https://zed.vision/" + key; // setSecrets(s=> {...s, [url]: secret});

                console.log("waiting for url: " + url);
                setUrl({
                  last: urls.current,
                  current: url
                });
                setTimeout(function () {
                  return setRetry(function (x) {
                    return x - 1;
                  });
                }, 20000);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function connect() {
        return _ref.apply(this, arguments);
      };
    }();

    if (typeof window !== "undefined" && retry > 0 && cubeState === 1) {
      connect();
    }
  }, [retry]);
  react_default.a.useEffect(function () {
    var setSignal = /*#__PURE__*/function () {
      var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2(url) {
        var getData, signalData;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(cubeState !== 1)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return fetchSignal(url, 7);

              case 4:
                getData = _context2.sent;
                setCubeState(0);
                Loader(side1.current, 220);
                Loader(side2.current, 220);
                Loader(side3.current, 220);
                Loader(side4.current, 220);
                Loader(side5.current, 220);
                Loader(side6.current, 220);
                _context2.next = 14;
                return getData();

              case 14:
                signalData = _context2.sent;
                setCubeState(-1);
                setTimeout(function () {
                  return window.location.href = signalData.rootUrl;
                }, 2000);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function setSignal(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    var setSignals = function setSignals() {
      urls.last && setSignal(urls.last);
      urls.current && setSignal(urls.current);
      setQrCube({
        qr1: setQR(1, "red", side1.current),
        qr2: setQR(2, "#FFA52C", side2.current),
        qr3: setQR(3, "yellow", side3.current),
        qr4: setQR(4, "#35CB4A", side4.current),
        qr5: setQR(5, "#3C99DC", side5.current),
        qr6: setQR(6, "#DF3BCF", side6.current)
      });
    };

    if (typeof window !== "undefined" && retry > 0) setSignals();
  }, [urls]);

  var _React$useState4 = react_default.a.useState(1),
      cubeState = _React$useState4[0],
      setCubeState = _React$useState4[1];

  return Object(emotion_react_browser_esm["c" /* jsx */])("div", {
    css: Object(emotion_react_browser_esm["b" /* css */])(_templateObject || (_templateObject = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n        display: inline-block;\n       position: relative;\n       margin: 100px;\n       overflow: visible;\n\n   \n   @keyframes byecube {\n     from {\n      transform: translateX(0px);\n    }\n   to {\n      transform: translateY(-1000px);\n    }\n    };\n    \n    "])))
  }, Object(emotion_react_browser_esm["c" /* jsx */])("div", {
    css: Object(emotion_react_browser_esm["b" /* css */])(_templateObject2 || (_templateObject2 = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n        position: absolute;\n         animation-name:", ";\n  animation-timing-function: cubic-bezier(.57,-0.6,0,1.03);\n  animation-iteration-count: 1;\n  animation-duration: 4s;\n   transform-style: preserve-3d;\n  transform-origin:  center center; \n"])), cubeState === 1 || cubeState === 0 ? "none" : "byecube")
  }, Object(emotion_react_browser_esm["c" /* jsx */])(Qr_Cube, {
    size: 220,
    animate: true,
    sides: [Object(emotion_react_browser_esm["c" /* jsx */])("canvas", {
      ref: side1
    }), Object(emotion_react_browser_esm["c" /* jsx */])("canvas", {
      ref: side2
    }), Object(emotion_react_browser_esm["c" /* jsx */])("canvas", {
      ref: side3
    }), Object(emotion_react_browser_esm["c" /* jsx */])("canvas", {
      ref: side4
    }), Object(emotion_react_browser_esm["c" /* jsx */])("canvas", {
      ref: side5
    }), Object(emotion_react_browser_esm["c" /* jsx */])("canvas", {
      ref: side6
    })]
  })));
}; //@ts-ignore

var Qr_Cube = function Cube(_ref3) {
  var sides = _ref3.sides,
      _size = _ref3.size,
      animate = _ref3.animate;
  var border = 0;
  var size = _size + 2 * border; //@ts-ignore

  return Object(emotion_react_browser_esm["c" /* jsx */])("div", {
    css: Object(emotion_react_browser_esm["b" /* css */])(_templateObject3 || (_templateObject3 = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n      position: relative;\n        display: inline-block; \n        perspective: 900px;\n\n         perspective-origin: 50% 50% ; \n\n\n  \n        "])))
  }, Object(emotion_react_browser_esm["c" /* jsx */])("div", {
    css: Qr_spinCubeCss(size, animate)
  }, Object(emotion_react_browser_esm["c" /* jsx */])("div", {
    css: Object(emotion_react_browser_esm["b" /* css */])(_templateObject4 || (_templateObject4 = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n              transform: translateZ(", "px);\n              "])), size / 2)
  }, sides[0]), Object(emotion_react_browser_esm["c" /* jsx */])("div", {
    css: Object(emotion_react_browser_esm["b" /* css */])(_templateObject5 || (_templateObject5 = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n            transform: rotateY(90deg) \n                       translateZ(", "px);\n            "])), size / 2)
  }, sides[1]), Object(emotion_react_browser_esm["c" /* jsx */])("div", {
    css: Object(emotion_react_browser_esm["b" /* css */])(_templateObject6 || (_templateObject6 = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n                transform: rotateY(90deg) \n                           rotateX(90deg) \n                           translateZ(", "px);\n                "])), size / 2)
  }, sides[2]), Object(emotion_react_browser_esm["c" /* jsx */])("div", {
    css: Object(emotion_react_browser_esm["b" /* css */])(_templateObject7 || (_templateObject7 = Object(taggedTemplateLiteralLoose["a" /* default */])([" \n                transform: translateZ( -", "px) \n                           rotateY(180deg) \n                           rotateZ(90deg);\n            "])), size / 2)
  }, sides[3]), Object(emotion_react_browser_esm["c" /* jsx */])("div", {
    css: Object(emotion_react_browser_esm["b" /* css */])(_templateObject8 || (_templateObject8 = Object(taggedTemplateLiteralLoose["a" /* default */])([" \n                transform: rotateY(-90deg) \n                           rotateZ(90deg) \n                           translateZ(", "px);\n                "])), size / 2)
  }, sides[4]), Object(emotion_react_browser_esm["c" /* jsx */])("div", {
    css: Object(emotion_react_browser_esm["b" /* css */])(_templateObject9 || (_templateObject9 = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n            transform: rotateX(-90deg) \n                       translateZ(", "px);\n            "])), size / 2)
  }, sides[5])));
};

if (typeof window === "undefined") Math.random = function () {
  return 0.4;
}; //elegant solution to ever changing builds.

var randoms = new Array(3).fill(0).map(function (x, i) {
  return (Math.random() * 360 - 180) * (i === 2 ? 2 : 1);
});
var Qr_r = randoms;

var Qr_spinCubeCss = function spinCubeCss(size, animate) {
  return Object(emotion_react_browser_esm["b" /* css */])(_templateObject10 || (_templateObject10 = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n\n  width: ", "px; \n  height: ", "px;\n  animation-name: ", ";\n  animation-timing-function: ease; //cubic-bezier(.57,-0.6,0,1.03);\n  animation-iteration-count: infinite;\n  animation-duration: 10s;\n  transform-style: preserve-3d;\n  transform: rotateX(", "deg) rotateY(", "deg) rotateZ(", "deg);\n  \n \n      \n      \n  @keyframes spincube {\n    from,to {\n      transform: rotateX(", "deg) rotateY(", "deg) rotateZ(", "deg);\n    }\n    16% {\n      transform: rotateX(", "deg) rotateY(", "deg) rotateZ(", "deg);\n    }\n    33% {\n      transform: rotateX(", "deg) rotateY(", "deg) rotateZ(", "deg);\n       }\n    50% {\n     transform: rotateX(", "deg) rotateY(", "deg) rotateZ(", "deg);\n    }\n    66% {\n     transform: rotateX(", "deg) rotateY(", "deg) rotateZ(", "deg);\n      }\n    83% {\n     transform: rotateX(", "deg) rotateY(", "deg) rotateZ(", "deg);\n     }\n  }\n\n  \n\n\n\n   div{\n    position: absolute;\n    width: ", "px;\n    height: ", "px;\n    /* margin: 10px;\n    padding: 10px; */\n    /* border: 10px solid transparent; */\n    background: rgba(255,255,255, .5);\n\n    box-shadow: inset 0 0 50px rgba(255,0,0);\n  }\n"])), size, size, animate && "spincube", Qr_r[1], Qr_r[2], Qr_r[0], Qr_r[1], Qr_r[2], Qr_r[0], Qr_r[1], Qr_r[0], Qr_r[0], Qr_r[2], Qr_r[0], Qr_r[1], Qr_r[2], Qr_r[1], Qr_r[0], Qr_r[0], Qr_r[1], Qr_r[2], Qr_r[0], Qr_r[2], Qr_r[1], size, size);
};

/* harmony default export */ var code_Qr = (function () {
  return Object(emotion_react_browser_esm["c" /* jsx */])(react_default.a.Fragment, null, Object(emotion_react_browser_esm["c" /* jsx */])(emotion_react_browser_esm["a" /* Global */], {
    styles: Object(emotion_react_browser_esm["b" /* css */])(_templateObject11 || (_templateObject11 = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n      body{\n          background: #333;\n           overflow: visible;\n          margin: 300px;\n          width: 0px;\n          text-align: center;\n         }  \n    "])))
  }), Object(emotion_react_browser_esm["c" /* jsx */])(Qr_Qr, null));
});

var Loader = function Loader(c, size) {
  var w = c.width = size,
      h = c.height = size,
      ctx = c.getContext("2d"),
      opts = {
    len: 12,
    count: 50,
    baseTime: 10,
    addedTime: 10,
    dieChance: .005,
    spawnChance: .1,
    sparkChance: .01,
    sparkDist: 10,
    sparkSize: 1,
    color: "hsl(hue,100%,light%)",
    baseLight: 50,
    addedLight: 10,
    // [50-10,50+10]
    shadowToTimePropMult: 6,
    baseLightInputMultiplier: .01,
    addedLightInputMultiplier: .02,
    cx: w / 2,
    cy: h / 2,
    repaintAlpha: .01,
    hueChange: 0.1
  },
      tick = 0,
      lines = [],
      dieX = w / 2 / opts.len,
      dieY = h / 2 / opts.len,
      baseRad = Math.PI * 2 / 6;
  ctx.fillStyle = "transparent";
  ctx.fillRect(0, 0, w, h);

  function loop() {
    window.requestAnimationFrame(loop);
    ++tick;
    ctx.globalCompositeOperation = "source-over";
    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(0,0,0,alp)".replace("alp", String(opts.repaintAlpha));
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";

    if (lines.length < opts.count && Math.random() < opts.spawnChance) {
      lines.push(new Line());
    }

    lines.map(function (line) {
      line.step();
    });
  }

  var Line = /*#__PURE__*/function () {
    function Line() {
      this.x = 0;
      this.y = 0;
      this.addedX = 0;
      this.addedY = 0;
      this.rad = 0;
      this.lightInputMultiplier = 0;
      this.color = "";
      this.time = 0;
      this.targetTime = 0;
      this.cumulativeTime = 0;
      this.reset();
    }

    var _proto = Line.prototype;

    _proto.reset = function reset() {
      this.x = 0;
      this.y = 0;
      this.addedX = 0;
      this.addedY = 0;
      this.rad = 0;
      this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
      this.color = opts.color.replace("hue", String(tick * opts.hueChange));
      this.cumulativeTime = 0;
      this.beginPhase();
    };

    _proto.beginPhase = function beginPhase() {
      this.x += this.addedX;
      this.y += this.addedY;
      this.time = 0;
      this.targetTime = opts.baseTime + opts.addedTime * Math.random() | 0;
      this.rad += baseRad * (Math.random() < .5 ? 1 : -1);
      this.addedX = Math.cos(this.rad);
      this.addedY = Math.sin(this.rad);

      if (Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY) {
        this.reset();
      }
    };

    _proto.step = function step() {
      ++this.time;
      ++this.cumulativeTime;

      if (this.time >= this.targetTime) {
        this.beginPhase();
      }

      var prop = this.time / this.targetTime,
          wave = Math.sin(prop * Math.PI / 2),
          x = this.addedX * wave,
          y = this.addedY * wave;
      ctx.shadowBlur = prop * opts.shadowToTimePropMult;
      ctx.fillStyle = ctx.shadowColor = this.color.replace("light", String(opts.baseLight + opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier)));
      ctx.fillRect(opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, 2, 2);

      if (Math.random() < opts.sparkChance) {
        ctx.fillRect(opts.cx + (this.x + x) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.cy + (this.y + y) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize);
      }
    };

    return Line;
  }();

  loop();
};
// EXTERNAL MODULE: ./assets/forkMe.png
var forkMe = __webpack_require__("7jdZ");
var forkMe_default = /*#__PURE__*/__webpack_require__.n(forkMe);

// CONCATENATED MODULE: ./src/pages/index.tsx





var pages_templateObject;

/** @jsx jsx */











var isMobile = function isMobile() {
  if (typeof window === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
};

var pages_BlogIndex = function BlogIndex(_ref) {
  var data = _ref.data;
  var edges = data.allMdx.edges;
  react["useEffect"](function () {
    if (typeof window !== "undefined") {
      var install = /*#__PURE__*/function () {
        var _ref2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = console;
                  _context.next = 3;
                  return getUserId();

                case 3:
                  _context.t1 = _context.sent;

                  _context.t0.log.call(_context.t0, _context.t1);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function install() {
          return _ref2.apply(this, arguments);
        };
      }();

      install(); // registerSW();
    }
  }, []);
  return Object(emotion_react_browser_esm["c" /* jsx */])(layout["a" /* Layout */], null, Object(emotion_react_browser_esm["c" /* jsx */])(seo["a" /* SEO */], {
    title: "This is Zed."
  }), isMobile() === false ? Object(emotion_react_browser_esm["c" /* jsx */])("h1", null, "Link your mobile with this code: ", Object(emotion_react_browser_esm["c" /* jsx */])(Qr_Qr, null)) : Object(emotion_react_browser_esm["c" /* jsx */])("h1", null, "This is my blog."), Object(emotion_react_browser_esm["c" /* jsx */])("a", {
    href: "https://github.com/zed-vision/monorepo"
  }, Object(emotion_react_browser_esm["c" /* jsx */])("img", {
    loading: "lazy",
    width: "149",
    height: "149",
    src: forkMe_default.a,
    style: {
      position: "absolute",
      top: 0,
      right: 0
    },
    alt: "Fork me on GitHub"
  })), edges.map(function (_ref3) {
    var node = _ref3.node;
    var title = node.frontmatter.title || node.fields.slug;
    return Object(emotion_react_browser_esm["c" /* jsx */])("article", {
      key: node.fields.slug
    }, Object(emotion_react_browser_esm["c" /* jsx */])("header", null, Object(emotion_react_browser_esm["c" /* jsx */])("h3", {
      css: Object(emotion_react_browser_esm["b" /* css */])(pages_templateObject || (pages_templateObject = Object(taggedTemplateLiteralLoose["a" /* default */])(["  \n                      margin-bottom: ", ";\n                      "])), Object(typography["a" /* rhythm */])(1 / 4))
    }, Object(emotion_react_browser_esm["c" /* jsx */])(gatsby_browser_entry["Link"], {
      to: node.fields.slug
    }, title)), Object(emotion_react_browser_esm["c" /* jsx */])("small", null, node.frontmatter.date)), Object(emotion_react_browser_esm["c" /* jsx */])("section", null, Object(emotion_react_browser_esm["c" /* jsx */])("p", {
      dangerouslySetInnerHTML: {
        __html: node.frontmatter.description || node.excerpt
      }
    })));
  }), Object(emotion_react_browser_esm["c" /* jsx */])(bio["a" /* Bio */], null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_BlogIndex);
var pageQuery = "497448492";

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-tsx-5a4b3c4f9069cbbe0a83.js.map