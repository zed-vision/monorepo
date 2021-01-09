(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "0yTM":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Welcome to gatsby-plugin-mdx!
 *
 * Start reading in gatsby-node.js
 */var MDXRenderer=__webpack_require__("M6MO");module.exports={MDXRenderer:MDXRenderer};

/***/ }),

/***/ "695J":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "KEM+":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "M6MO":
/***/ (function(module, exports, __webpack_require__) {

var _construct=__webpack_require__("rDK1");var _toConsumableArray=__webpack_require__("RhWx");var _defineProperty=__webpack_require__("KEM+");var _objectWithoutPropertiesLoose=__webpack_require__("LdEA");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var React=__webpack_require__("ERkP");var _require=__webpack_require__("ZVZ0"),mdx=_require.mdx;var _require2=__webpack_require__("Amv9"),useMDXScope=_require2.useMDXScope;module.exports=function MDXRenderer(_ref){var scope=_ref.scope,children=_ref.children,props=_objectWithoutPropertiesLoose(_ref,["scope","children"]);var mdxScope=useMDXScope(scope);// Memoize the compiled component
var End=React.useMemo(function(){if(!children){return null;}var fullScope=_objectSpread({// React is here just in case the user doesn't pass them in
// in a manual usage of the renderer
React:React,mdx:mdx},mdxScope);var keys=Object.keys(fullScope);var values=keys.map(function(key){return fullScope[key];});var fn=_construct(Function,["_fn"].concat(_toConsumableArray(keys),[""+children]));return fn.apply(void 0,[{}].concat(_toConsumableArray(values)));},[children,scope]);return React.createElement(End,_objectSpread({},props));};

/***/ }),

/***/ "RhWx":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("tGbD");

var iterableToArray = __webpack_require__("twbh");

var unsupportedIterableToArray = __webpack_require__("peMk");

var nonIterableSpread = __webpack_require__("d8WC");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "TcdR":
/***/ (function(module, exports) {

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

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "cZrw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js
var taggedTemplateLiteralLoose = __webpack_require__("fhSp");

// EXTERNAL MODULE: /home/zed/z/node_modules/react/index.js
var react = __webpack_require__("ERkP");

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ./src/components/bio.tsx
var bio = __webpack_require__("IgZc");

// EXTERNAL MODULE: ./src/components/layout.tsx
var layout = __webpack_require__("9Dj+");

// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// EXTERNAL MODULE: ./src/components/utils/typography.ts
var typography = __webpack_require__("cINY");

// EXTERNAL MODULE: /home/zed/z/node_modules/gatsby-plugin-mdx/index.js
var gatsby_plugin_mdx = __webpack_require__("0yTM");

// EXTERNAL MODULE: /home/zed/z/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js + 2 modules
var emotion_styled_browser_esm = __webpack_require__("TMWK");

// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("VtSi");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: /home/zed/z/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("3yYM");

// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("QsI/");

// EXTERNAL MODULE: /home/zed/z/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("f7k3");

// EXTERNAL MODULE: /home/zed/z/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__("fGyu");

// CONCATENATED MODULE: ./src/components/codeBox/example.ts

var defaultProps = {
  events: ["reset"].concat(Object(toConsumableArray["a" /* default */])(new Array(8).fill("+1")))
};
var counterExample = "import { FC, useState } from \"react\";\n\nconst Counter: FC<{ initial?: number }> = (\n  { initial = 0 },\n) => {\n  const [clicks, setClicks] = useState(initial);\n\n  return <div>\n    <p>Clicks: {clicks}</p>\n    <button onClick={() => setClicks(clicks + 1)}>+</button>\n    <button onClick={() => setClicks(clicks - 1)}>-</button>\n  </div>;\n};\n\nconst rootElement = document.createElement(\"div\");\n\nReactDOM.render(<Counter initial={0} />, rootElement);\ndocument.body.appendChild(rootElement);\n\n";
// CONCATENATED MODULE: ./src/components/codeBox/styledCodeBoxComps.tsx


function _templateObject5() {
  var data = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n    display: block;\n    width: 150px;\n    height: 150px;\n    overflow: hidden;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n    text-align: center;\n    border-radius: 12px;\n    width: 200px;\n    height: 200px;\n    display: flex;\n    place-content: center;\n    place-items: center;\n    margin: 0;\n    padding: 0;\n    background: rgb(255, 255, 255) none repeat scroll 0% 0%;\n    user-select: none;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px 0px, rgba(0, 0, 0, 0.06) 0px 10px 15px 0px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n    display: block;\n    width: 100%;\n    padding: 10px;\n    color: white;\n    background: red;\n    height: 220px;\n    pre{\n        font-size: 1em;\n        line-height: 1;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n    display: block;\n    width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n    background: #3f51b5;\n    font-family: \"Roboto\";\n    margin: 0;\n    padding: 10px 20px 10px;\n    color: white;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Header = emotion_styled_browser_esm["a" /* default */].div(_templateObject());
var ResultContainer = emotion_styled_browser_esm["a" /* default */].div(_templateObject2());
var ErrorContainer = emotion_styled_browser_esm["a" /* default */].div(_templateObject3());
var ResultBox = emotion_styled_browser_esm["a" /* default */].div(_templateObject4());
var ResultBoxContainer = emotion_styled_browser_esm["a" /* default */].div(_templateObject5());
// CONCATENATED MODULE: ./src/components/codeBox/CodeBox.tsx





function CodeBox_templateObject() {
  var data = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n      width: 100%;\n      height: 70vh;\n    "]);

  CodeBox_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/** @jsx jsx */



var CodeBox_CodeBox = function CodeBox(_ref) {
  var title = _ref.title,
      children = _ref.children;
  var starterCode = (children === null || children === void 0 ? void 0 : children.toString().trim()) || counterExample;
  if (typeof window === "undefined") return Object(emotion_react_browser_esm["c" /* jsx */])("pre", null, "Loading");
  react["useEffect"](function () {
    function start() {
      return _start.apply(this, arguments);
    }

    function _start() {
      _start = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _yield$Function, run;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new Function("return import(\"https://blog.zed.vision/code/src/codeLoader.js\")")();

              case 2:
                _yield$Function = _context.sent;
                run = _yield$Function.run;
                run("embedded", window, starterCode);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _start.apply(this, arguments);
    }

    if (typeof window !== undefined) start();
  }, []);
  return Object(emotion_react_browser_esm["c" /* jsx */])(react["Fragment"], null, !!title && Object(emotion_react_browser_esm["c" /* jsx */])(Header, null, Object(emotion_react_browser_esm["c" /* jsx */])("span", null, title), Object(emotion_react_browser_esm["c" /* jsx */])("button", null, "Save")), Object(emotion_react_browser_esm["c" /* jsx */])("div", {
    css: Object(emotion_react_browser_esm["b" /* css */])(CodeBox_templateObject()),
    id: "editor"
  }));
};
// EXTERNAL MODULE: /home/zed/z/node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__("ZVZ0");

// CONCATENATED MODULE: ./src/templates/blog-post.tsx


function blog_post_templateObject3() {
  var data = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n  margin-bottom: ", ";\n"]);

  blog_post_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function blog_post_templateObject2() {
  var data = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n  font-size: ", ";\n  line-height: ", ";\n  display: block;\n  margin-bottom: ", ";\n"]);

  blog_post_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function blog_post_templateObject() {
  var data = Object(taggedTemplateLiteralLoose["a" /* default */])(["\n  margin-top: ", ";\n  margin-bottom: 0;\n"]);

  blog_post_templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var components = {
  pre: function PreComp(props) {
    return /*#__PURE__*/react["createElement"]("div", props);
  },
  code: CodeBox_CodeBox
};
var StyledHeader = emotion_styled_browser_esm["a" /* default */].h1(blog_post_templateObject(), Object(typography["a" /* rhythm */])(1));

var _scale = Object(typography["b" /* scale */])(1 / 5),
    fontSize = _scale.fontSize,
    lineHeight = _scale.lineHeight;

var StyledDate = emotion_styled_browser_esm["a" /* default */].p(blog_post_templateObject2(), fontSize, lineHeight, Object(typography["a" /* rhythm */])(1));
var Hr = emotion_styled_browser_esm["a" /* default */].hr(blog_post_templateObject3(), Object(typography["a" /* rhythm */])(1));

var blog_post_BlogPostTemplate = function BlogPostTemplate(_ref) {
  var data = _ref.data,
      pageContext = _ref.pageContext;
  var post = data.mdx;
  var previous = pageContext.previous,
      next = pageContext.next;

  var BlogPost = function BlogPost() {
    return /*#__PURE__*/react["createElement"](esm["MDXProvider"], {
      components: components
    }, /*#__PURE__*/react["createElement"](gatsby_plugin_mdx["MDXRenderer"], null, post.body));
  };

  return /*#__PURE__*/react["createElement"](react["Fragment"], null, /*#__PURE__*/react["createElement"](layout["a" /* Layout */], null, /*#__PURE__*/react["createElement"](seo["a" /* SEO */], {
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.excerpt
  }), /*#__PURE__*/react["createElement"]("header", null, /*#__PURE__*/react["createElement"](StyledHeader, null, post.frontmatter.title), /*#__PURE__*/react["createElement"](StyledDate, null, post.frontmatter.date)), /*#__PURE__*/react["createElement"](BlogPost, null), /*#__PURE__*/react["createElement"](Hr, null), /*#__PURE__*/react["createElement"]("footer", null, /*#__PURE__*/react["createElement"](bio["a" /* Bio */], null)), /*#__PURE__*/react["createElement"]("nav", null, /*#__PURE__*/react["createElement"]("ul", null, previous && /*#__PURE__*/react["createElement"]("li", null, /*#__PURE__*/react["createElement"](gatsby_browser_entry["Link"], {
    to: previous.fields.slug,
    rel: "prev"
  }, "\u2190 ", previous.frontmatter.title)), next && /*#__PURE__*/react["createElement"]("li", null, /*#__PURE__*/react["createElement"](gatsby_browser_entry["Link"], {
    to: next.fields.slug,
    rel: "next"
  }, next.frontmatter.title, " \u2192"))))));
};

/* harmony default export */ var blog_post = __webpack_exports__["default"] = (blog_post_BlogPostTemplate);
var pageQuery = "2168380918";

/***/ }),

/***/ "d8WC":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "iQ7j":
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "peMk":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("iQ7j");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "rDK1":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("695J");

var isNativeReflectConstruct = __webpack_require__("TcdR");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "tGbD":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("iQ7j");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "twbh":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ })

}]);