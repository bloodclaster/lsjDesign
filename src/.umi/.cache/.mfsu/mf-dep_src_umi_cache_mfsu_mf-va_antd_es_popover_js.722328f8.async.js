(self["webpackChunk"] = self["webpackChunk"] || []).push([["mf-dep_src_umi_cache_mfsu_mf-va_antd_es_popover_js"],{

/***/ "./node_modules/antd/es/_util/getRenderPropValue.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/_util/getRenderPropValue.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRenderPropValue": function() { return /* binding */ getRenderPropValue; }
/* harmony export */ });
var getRenderPropValue = function getRenderPropValue(propValue) {
  if (!propValue) {
    return null;
  }

  var isRenderFunction = typeof propValue === 'function';

  if (isRenderFunction) {
    return propValue();
  }

  return propValue;
};

/***/ }),

/***/ "./node_modules/antd/es/popover/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/es/popover/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tooltip */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_util/getRenderPropValue */ "./node_modules/antd/es/_util/getRenderPropValue.js");
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_util/motion */ "./node_modules/antd/es/_util/motion.js");


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var Popover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
  var customizePrefixCls = _a.prefixCls,
      title = _a.title,
      content = _a.content,
      otherProps = __rest(_a, ["prefixCls", "title", "content"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var getOverlay = function getOverlay(prefixCls) {
    if (!title && !content) return undefined;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "".concat(prefixCls, "-title")
    }, (0,_util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_3__.getRenderPropValue)(title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "".concat(prefixCls, "-inner-content")
    }, (0,_util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_3__.getRenderPropValue)(content)));
  };

  var prefixCls = getPrefixCls('popover', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_4__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, otherProps, {
    prefixCls: prefixCls,
    ref: ref,
    overlay: getOverlay(prefixCls),
    transitionName: (0,_util_motion__WEBPACK_IMPORTED_MODULE_5__.getTransitionName)(rootPrefixCls, 'zoom-big', otherProps.transitionName)
  }));
});
Popover.displayName = 'Popover';
Popover.defaultProps = {
  placement: 'top',
  trigger: 'hover',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  overlayStyle: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Popover);

/***/ }),

/***/ "./src/.umi/.cache/.mfsu/mf-va_antd_es_popover.js":
/*!********************************************************!*\
  !*** ./src/.umi/.cache/.mfsu/mf-va_antd_es_popover.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_bloodclaster_Desktop_github_sbwy_mysDesign_node_modules_antd_es_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/antd/es/popover */ "./node_modules/antd/es/popover/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_Users_bloodclaster_Desktop_github_sbwy_mysDesign_node_modules_antd_es_popover__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ })

}]);