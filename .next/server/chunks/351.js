"use strict";
exports.id = 351;
exports.ids = [351];
exports.modules = {

/***/ 4351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IsLogin)
/* harmony export */ });
/* harmony import */ var _serveraxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5474);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






function IsLogin({
  children
}) {
  const {
    0: userData,
    1: setUserData
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("NoAuth");
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    (0,_serveraxios__WEBPACK_IMPORTED_MODULE_0__/* .isLoggedUser */ .Ui)(setUserData);
  }, []);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  if (userData == "NoAuth") {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
        size: "xl"
      })
    });
  } else if (userData) {
    router.push('/home');
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {});
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      children: children
    });
  }
}

/***/ })

};
;