"use strict";
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ IsLoggedIn)
});

// EXTERNAL MODULE: ./components/serveraxios.ts
var serveraxios = __webpack_require__(5474);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var index_esm = __webpack_require__(6893);
// EXTERNAL MODULE: ./node_modules/react-icons/hi/index.esm.js
var hi_index_esm = __webpack_require__(3854);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/MobileMenuButton.jsx




const MobileMenuButton = props => {
  const {
    onClick,
    isOpen
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    display: {
      base: 'block',
      md: 'none'
    },
    ml: "-8",
    mr: "2",
    as: "button",
    type: "button",
    rounded: "md",
    p: "1",
    fontSize: "xl",
    color: "gray.500",
    _hover: {
      bg: 'gray.100'
    },
    onClick: onClick,
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      srOnly: true,
      children: isOpen ? 'Close Menu' : 'Open Menu'
    }), isOpen ? /*#__PURE__*/jsx_runtime_.jsx(hi_index_esm/* HiX */.apv, {}) : /*#__PURE__*/jsx_runtime_.jsx(hi_index_esm/* HiMenu */.r0I, {})]
  });
};
;// CONCATENATED MODULE: ./components/NavBreadcrumb.tsx




const NavBreadcrumb = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Breadcrumb, {
  fontSize: "sm",
  separator: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    as: hi_index_esm/* HiChevronRight */.MOd,
    color: "gray.400",
    fontSize: "md",
    top: "2px",
    pos: "relative"
  }),
  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.BreadcrumbItem, {
    color: "inherit",
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.BreadcrumbLink, {
      children: "AlmazKimya"
    })
  }), props.arr.map((item, index) => {
    return /*#__PURE__*/jsx_runtime_.jsx(react_.BreadcrumbItem, {
      color: "inherit",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.BreadcrumbLink, {
        children: item
      })
    }, index);
  })]
});
;// CONCATENATED MODULE: ./components/ScrollArea.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ScrollArea = props => /*#__PURE__*/jsx_runtime_.jsx(react_.Box, _objectSpread(_objectSpread({
  overflowY: "auto",
  height: "80vh",
  minH: "px",
  maxH: "full"
}, props), {}, {
  sx: {
    '&::-webkit-scrollbar-track': {
      bg: 'transparent'
    },
    '&::-webkit-scrollbar': {
      width: '4px'
    },
    '&::-webkit-scrollbar-thumb': {
      bg: (0,react_.useColorModeValue)('blue.600', 'gray.700'),
      borderRadius: '20px'
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(3750);
;// CONCATENATED MODULE: ./components/SearchInput.jsx
const _excluded = ["rootProps"];

function SearchInput_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SearchInput_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SearchInput_ownKeys(Object(source), true).forEach(function (key) { SearchInput_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SearchInput_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SearchInput_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SearchInput = props => {
  const {
    rootProps
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.InputGroup, SearchInput_objectSpread(SearchInput_objectSpread({
    maxW: "2xs",
    size: "sm",
    variant: "filled",
    display: {
      base: 'none',
      lg: 'block'
    }
  }, rootProps), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.InputLeftElement, {
      color: "gray.400",
      pointerEvents: "none",
      children: /*#__PURE__*/jsx_runtime_.jsx(bs_index_esm/* BsSearch */.dVI, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Input, SearchInput_objectSpread(SearchInput_objectSpread({}, rest), {}, {
      placeholder: "Search",
      rounded: "md",
      _placeholder: {
        color: 'gray.400'
      }
    }))]
  }));
};
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/SidebarLink.tsx





const SidebarLink = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: props.link == undefined ? /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      as: "a",
      marginEnd: "2",
      fontSize: "sm",
      display: "block",
      px: "3",
      py: "1",
      rounded: "md",
      cursor: "pointer",
      _hover: {
        color: 'white',
        bg: (0,react_.useColorModeValue)('blue.700', 'gray.600')
      },
      className: "group",
      fontWeight: "medium",
      transition: "background .1s ease-out",
      onClick: props.rest,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          opacity: props.avatar ? 1 : 0.5,
          _groupHover: {
            opacity: 1
          },
          children: props.avatar || props.icon
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          children: props.children
        })]
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: props.link,
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        as: "a",
        marginEnd: "2",
        fontSize: "sm",
        display: "block",
        px: "3",
        py: "1",
        rounded: "md",
        cursor: "pointer",
        _hover: {
          color: 'white',
          bg: (0,react_.useColorModeValue)('blue.700', 'gray.600')
        },
        className: "group",
        fontWeight: "medium",
        transition: "background .1s ease-out",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
            opacity: props.avatar ? 1 : 0.5,
            _groupHover: {
              opacity: 1
            },
            children: props.avatar || props.icon
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            children: props.children
          })]
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./components/useMobileMenuState.jsx
function useMobileMenuState_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function useMobileMenuState_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useMobileMenuState_ownKeys(Object(source), true).forEach(function (key) { useMobileMenuState_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useMobileMenuState_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useMobileMenuState_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useMobileMenuState = () => {
  const [isOpen, actions] = (0,react_.useBoolean)();
  const isMobile = (0,react_.useBreakpointValue)({
    base: true,
    lg: false
  });
  external_react_.useEffect(() => {
    if (isMobile == false) {
      actions.off();
    }
  }, [isMobile, actions]);
  return useMobileMenuState_objectSpread({
    isOpen
  }, actions);
};
;// CONCATENATED MODULE: ./components/UserInfo.jsx



const UserInfo = props => {
  const {
    name,
    image,
    email
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
    display: "inline-flex",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Avatar, {
      size: "sm",
      name: name,
      src: image
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
      lineHeight: "1",
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        fontWeight: "semibold",
        children: name
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        fontSize: "xs",
        mt: "1",
        color: (0,react_.useColorModeValue)('whiteAlpha.700', 'gray.400'),
        children: email
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./components/layout.js













function Layout(props) {
  const {
    isOpen,
    toggle
  } = useMobileMenuState();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    height: "100vh",
    bg: (0,react_.useColorModeValue)('blue.800', 'gray.800'),
    overflow: "hidden",
    sx: {
      '--sidebar-width': '13rem'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      as: "nav",
      display: "block",
      flex: "1",
      width: "var(--sidebar-width)",
      left: "0",
      py: "5",
      px: "3",
      color: "gray.200",
      position: "fixed",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
        fontSize: "sm",
        lineHeight: "tall",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          as: "a",
          href: "#",
          p: "3",
          display: "block",
          transition: "background 0.1s",
          rounded: "xl",
          _hover: {
            bg: 'whiteAlpha.200'
          },
          whiteSpace: "nowrap",
          children: /*#__PURE__*/jsx_runtime_.jsx(UserInfo, {
            name: props.name,
            email: props.username
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ScrollArea, {
          pt: "5",
          pb: "6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
            pb: "6",
            children: [/*#__PURE__*/jsx_runtime_.jsx(SidebarLink, {
              link: "/home",
              icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FiHome */.m6D, {}),
              children: "Ana s\u0259hif\u0259"
            }), /*#__PURE__*/jsx_runtime_.jsx(SidebarLink, {
              link: "/quiz",
              icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FiEdit */.vPQ, {}),
              children: "S\u0131naqlar"
            }), /*#__PURE__*/jsx_runtime_.jsx(SidebarLink, {
              link: "/documents",
              icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FiFileText */.NOg, {}),
              children: "Fayllar"
            }), /*#__PURE__*/jsx_runtime_.jsx(SidebarLink, {
              link: "/settings",
              icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FiSliders */.NNy, {}),
              children: "Profilim"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(SidebarLink, {
          rest: () => {
            (0,serveraxios/* logout */.kS)();
            router_default().push("/login");
          },
          icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FiLogOut */.xqh, {}),
          children: "\xC7\u0131x\u0131\u015F"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      flex: "1",
      p: {
        base: '0',
        md: '6'
      },
      marginStart: {
        md: 'var(--sidebar-width)'
      },
      position: "relative",
      left: isOpen ? 'var(--sidebar-width)' : '0',
      transition: "left 0.2s",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        maxW: "2560px",
        bg: (0,react_.useColorModeValue)('white', 'gray.700'),
        height: "100%",
        pb: "6",
        rounded: {
          md: 'lg'
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
          direction: "column",
          height: "full",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
            w: "full",
            py: "4",
            justify: "space-between",
            align: "center",
            px: "10",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
              align: "center",
              minH: "8",
              children: [/*#__PURE__*/jsx_runtime_.jsx(MobileMenuButton, {
                onClick: toggle,
                isOpen: isOpen
              }), /*#__PURE__*/jsx_runtime_.jsx(NavBreadcrumb, {
                arr: props.breadcumb
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(SearchInput, {})]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
            direction: "column",
            flex: "1",
            overflow: "auto",
            px: "10",
            pt: "8",
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
              size: "md",
              fontWeight: "extrabold",
              mb: "6",
              children: props.head
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
              flex: "1",
              rounded: "xl",
              children: props.children
            })]
          })]
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/isLoggedin.jsx







function IsLoggedIn(props) {
  const {
    0: userData,
    1: setUserData
  } = (0,external_react_.useState)("NoAuth");
  (0,external_react_.useEffect)(() => {
    (0,serveraxios/* isLoggedUser */.Ui)(setUserData);
  }, []);
  const router = (0,router_.useRouter)();

  if (userData == "NoAuth") {
    return /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Spinner, {
        size: "xl"
      })
    });
  } else if (!userData) {
    router.push('/login');
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
  } else {
    return /*#__PURE__*/jsx_runtime_.jsx(Layout, {
      breadcumb: props.breadcumb,
      head: props.head,
      name: `${userData.name} ${userData.surname}`,
      username: userData.username,
      children: props.children
    });
  }
}

/***/ })

};
;