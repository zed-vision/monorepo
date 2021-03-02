(self["webpackChunk_zedvision_zedvision_site"] = self["webpackChunk_zedvision_zedvision_site"] || []).push([[168],{

/***/ 9041:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3182);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8197);


var _templateObject, _templateObject2, _templateObject3, _templateObject4;


/** @jsx jsx */



var Slider = function Slider() {
  var steps = 128;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(steps / 2),
      sliderValue = _useState[0],
      setSlider = _useState[1];

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("input", {
    max: steps,
    css: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .css */ .iv)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(["\n        appearance: none;\n        width: 100%;\n        height: 40px; \n        background: rgb(", " ", " 0); \n        outline: none; \n    "])), 255 / steps * sliderValue, 255 / steps * (steps - sliderValue)),
    type: "range",
    "aria-label": "font size changer",
    value: sliderValue,
    step: "1",
    onChangeCapture: function onChangeCapture(e) {
      return setSlider(Number(e.currentTarget.value));
    }
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("p", {
    css: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .css */ .iv)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(["\n        font-size: ", "px\n        "])), 72 / steps * sliderValue)
  }, "Example when the text gets bigger..."), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("p", {
    css: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .css */ .iv)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(["\n        font-size: ", "px\n        "])), 72 / steps * (steps - sliderValue))
  }, "...or smaller"));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .Global */ .xB, {
    styles: (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .css */ .iv)(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(["\n      body{\n          margin: 0;\n          overflow: overlay;\n        }  \n    "])))
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)(Slider, null));
});

/***/ })

}]);
//# sourceMappingURL=component---src-pages-example-tsx-ed66a9f96540075acc0d.js.map