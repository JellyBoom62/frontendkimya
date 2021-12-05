"use strict";
exports.id = 287;
exports.ids = [287];
exports.modules = {

/***/ 4287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1872);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6893);
/* harmony import */ var _components_serveraxios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5474);
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3838);
/* harmony import */ var _geist_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_geist_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);










const QuizList = () => {
  const {
    0: quizes,
    1: setQuizes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_components_serveraxios__WEBPACK_IMPORTED_MODULE_2__/* .fetchTestsName */ .jw)(setQuizes);
  }, []);

  if (quizes == undefined) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "100%",
      h: "100vh",
      justifyContent: "center",
      alignItems: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
        size: "xl"
      })
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      w: "100%",
      pt: "15px",
      pb: "5px",
      px: "10px",
      borderRadius: "6px",
      bgColor: "gray.800",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        direction: "row",
        alignItems: "center",
        mb: "20px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__/* .FiChevronRight */ .Tfp, {
          fontSize: "20px",
          color: "#6d6d6d"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          mr: "5px"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_7__/* .FcBiomass */ .Rns, {
          fontSize: "20px"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontSize: "14px",
          ml: "5px",
          fontWeight: "semibold",
          children: "Testl\u0259r"
        })]
      }), quizes.map((item, index) => {
        const date = new Date(item.time);
        const formattedDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format('HH:mm:ss');
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_geist_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {
          w: "100%",
          href: `quiz/${item.testID}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            direction: ["column", "row"],
            transition: "0.1s",
            shadow: "lg",
            alignItems: ['', 'center'],
            justifyContent: "space-between",
            w: "100%",
            py: "7px",
            px: ["10px", "20px"],
            bgColor: "gray.700",
            borderLeftWidth: "2px",
            borderLeftColor: "green.400",
            borderRadius: "4px",
            mb: "10px",
            _hover: {
              cursor: 'pointer',
              bgColor: "gray.600"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
              w: "40%",
              fontSize: "14px",
              children: item.testName
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              w: "40%",
              fontSize: "14px",
              children: item.description
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              w: "20%",
              justifyContent: ['', 'flex-end'],
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                fontSize: "14px",
                colorScheme: "green",
                children: formattedDate
              })
            })]
          })
        }, index);
      })]
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuizList);

/***/ })

};
;