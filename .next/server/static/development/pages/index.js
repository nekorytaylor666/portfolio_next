module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Anch.jsx":
/*!*****************************!*\
  !*** ./components/Anch.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Anch = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "Anch",
  componentId: "sc-1xl1m5c-0"
})(["text-decoration:none;position:relative;font-size:", ";color:", ";cursor:pointer;:visited{text-decoration:none;color:", ";}:before{content:'';position:absolute;width:100%;height:2px;bottom:0;left:0;background:", ";visibility:hidden;border-radius:5px;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:0.25s linear;transition:0.25s linear;}:hover:before,:focus:before{visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1);}"], prop => prop.fontSize, prop => prop.color, prop => prop.color, prop => prop.underlineColor);
/* harmony default export */ __webpack_exports__["default"] = (Anch);

/***/ }),

/***/ "./components/Contacts.jsx":
/*!*********************************!*\
  !*** ./components/Contacts.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/mediaQueries */ "./tools/mediaQueries.js");
var _jsxFileName = "C:\\Users\\\u0422\u043E\u0445\u0442\u0430\u0440\\Desktop\\site_next\\components\\Contacts.jsx";





const ContactList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Contacts__ContactList",
  componentId: "sc-90cyav-0"
})(["list-style:none;display:flex;justify-content:space-between;align-items:center;width:", ";@media ", "{width:", ";}"], props => props.width, _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_4__["default"].mobileL, props => props.mobileWidth);

const Contacts = props => {
  const {
    color,
    size,
    width,
    mobileWidth
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactList, {
    width: width,
    mobileWidth: mobileWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.instagram.com/akmt_dev/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    size: size,
    color: color,
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInstagram"],
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.behance.net/akmt_dev/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    size: size,
    color: color,
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBehanceSquare"],
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://t.me/akmt_dev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    size: size,
    color: color,
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTelegramPlane"],
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://linkedin.com/in/\u0442\u043E\u0445\u0442\u0430\u0440-\u0430\u0445\u043C\u0435\u0442\u043E\u0432-51988b17b",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    size: size,
    color: color,
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLinkedin"],
    className: "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contacts);

/***/ }),

/***/ "./components/Ham.jsx":
/*!****************************!*\
  !*** ./components/Ham.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\\u0422\u043E\u0445\u0442\u0430\u0440\\Desktop\\site_next\\components\\Ham.jsx";


const Ham = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Ham",
  componentId: "sc-13dpbgu-0"
})(["display:block;width:20px;div{height:2px;background-color:", ";margin:4px 0;border-radius:24px;transition:0.3s;z-index:1;}.one{width:20px;}.two{width:15px;}.three{width:8px;margin:0;}:hover div{width:20px;}"], prop => prop.color);

const Header = props => {
  const {
    color
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ham, {
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Ham__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ham */ "./components/Ham.jsx");
/* harmony import */ var _Anch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Anch */ "./components/Anch.jsx");
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contacts */ "./components/Contacts.jsx");
/* harmony import */ var _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tools/mediaQueries */ "./tools/mediaQueries.js");
var _jsxFileName = "C:\\Users\\\u0422\u043E\u0445\u0442\u0430\u0440\\Desktop\\site_next\\components\\Header.jsx";







const Btn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Header__Btn",
  componentId: "by5f3k-0"
})(["text-decoration:none;background:none;border:none;&:focus{outline:none;}@media ", "{justify-self:end;}"], _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_6__["default"].mobileL);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Header__Title",
  componentId: "by5f3k-1"
})(["color:", ";font-size:1.5rem;font-weight:700;@media ", "{font-size:2.5rem;}"], prop => prop.color, _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_6__["default"].mobileL);
const NavigationLayout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__NavigationLayout",
  componentId: "by5f3k-2"
})(["z-index:1;position:absolute;display:flex;flex-direction:column;background:#ef3340;height:0;overflow:hidden;width:0;top:0;left:0;"]);
const MenuTab = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Header__MenuTab",
  componentId: "by5f3k-3"
})(["text-decoration:none;font-weight:bold;font-size:8rem;color:black;transition:0.4s;&:hover{color:white;}@media ", "{font-size:6rem;}"], _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_6__["default"].mobileL);
const LogoLayout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__LogoLayout",
  componentId: "by5f3k-4"
})(["display:grid;grid-template-columns:auto auto;grid-column-gap:10px;align-items:center;"]);
const TitleLayout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__TitleLayout",
  componentId: "by5f3k-5"
})(["width:100%;z-index:2;display:grid;grid-template-columns:auto 1fr;grid-column-gap:20px;align-items:center;justify-content:end;@media ", "{grid-template-columns:2fr auto;justify-items:start;}"], _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_6__["default"].mobileL);
const MenuLayout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Header__MenuLayout",
  componentId: "by5f3k-6"
})(["list-style:none;opacity:1;@media ", "{align-self:center;}"], _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_6__["default"].mobileL);
const Navbar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__Navbar",
  componentId: "by5f3k-7"
})(["display:flex;justify-content:space-between;flex-wrap:wrap;align-items:center;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Header__Logo",
  componentId: "by5f3k-8"
})(["z-index:0;height:3rem;"]);
const ContactsLayout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__ContactsLayout",
  componentId: "by5f3k-9"
})(["align-self:end;"]);
const SectionLayout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__SectionLayout",
  componentId: "by5f3k-10"
})(["display:grid;grid-template-rows:1fr 1fr;height:100%;padding:6rem 3rem 10rem 3rem;"]);

const Header = () => {
  const navRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const menuRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const [displayNav, setDisplayNav] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const showNavigation = () => {
    setDisplayNav(!displayNav);
    const navigation = navRef.current;
    const menuList = menuRef.current;
    const delay = 0.5;
    const tl = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]({});

    if (!displayNav) {
      tl.to(navigation, delay, {
        height: '100vh',
        width: '100%',
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power3"].easeInOut
      });
      tl.from(menuList, delay, {
        opacity: 0,
        x: -30,
        y: -30,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power3"].easeInOut
      });
    } else {
      tl.to(navigation, delay, {
        height: '0',
        width: '0',
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power3"].easeInOut
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {// Update the document title using the browser API
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
    src: "/static/logo_ball.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Anch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "#",
    color: displayNav ? 'black' : 'white',
    underlineColor: displayNav ? 'black' : '#ef3340',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    color: displayNav ? 'black' : 'white',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, "Akhmetov Toktar"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Btn, {
    onClick: showNavigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Ham__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: displayNav ? 'black' : 'white',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavigationLayout, {
    ref: navRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuLayout, {
    ref: menuRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuTab, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, "lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuTab, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, "lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuTab, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuTab, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, "lorem ipsum"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactsLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contacts__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "black",
    size: "4x",
    width: "400px",
    mobileWidth: "200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Main.jsx":
/*!*****************************!*\
  !*** ./components/Main.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Anch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Anch */ "./components/Anch.jsx");
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contacts */ "./components/Contacts.jsx");
/* harmony import */ var _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/mediaQueries */ "./tools/mediaQueries.js");
var _jsxFileName = "C:\\Users\\\u0422\u043E\u0445\u0442\u0430\u0440\\Desktop\\site_next\\components\\Main.jsx";





const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Main__Title",
  componentId: "sc-1qli85e-0"
})(["font-size:9rem;font-weight:100;"]);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "Main__SubTitle",
  componentId: "sc-1qli85e-1"
})(["font-size:3rem;font-weight:inherit;"]);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Main__Img",
  componentId: "sc-1qli85e-2"
})(["height:", ";margin-right:10px;"], prop => prop.height);
const SubTitleLayout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Main__SubTitleLayout",
  componentId: "sc-1qli85e-3"
})(["display:flex;align-items:center;"]);
const ContactsLayout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Main__ContactsLayout",
  componentId: "sc-1qli85e-4"
})(["justify-self:start;align-self:end;display:grid;grid-template-columns:1fr 1fr;width:100%;margin-bottom:10rem;"]);
const CustomAnchLayout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Main__CustomAnchLayout",
  componentId: "sc-1qli85e-5"
})(["justify-self:center;@media ", "{justify-self:end;}"], _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_4__["default"].mobileL);
const SectionLayout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "Main__SectionLayout",
  componentId: "sc-1qli85e-6"
})(["display:grid;grid-template-rows:1fr 1fr;height:100%;"]);

function Main() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Full stack"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitleLayout, {
    className: "subtitle_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Img, {
    src: "/static/ampersand.png",
    alt: "",
    height: "6rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subtitle_text_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, {
    className: "subtitle_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Web developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, {
    className: "subtitle_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Creator")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactsLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contacts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "white",
    size: "4x",
    width: "400px",
    mobileWidth: "200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomAnchLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Anch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "https://t.me/akmt_dev",
    className: "contact",
    fontSize: "2.5rem",
    color: "white",
    underlineColor: "#ef3340",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Contact me"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.jsx");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Main */ "./components/Main.jsx");
var _jsxFileName = "C:\\Users\\\u0422\u043E\u0445\u0442\u0430\u0440\\Desktop\\site_next\\pages\\index.jsx";





const Layout = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Layout",
  componentId: "sc-6h8rmy-0"
})(["height:100vh;padding:3rem;"]);

const Index = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layout, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_1__["NextSeo"], {
  title: "Portfolio Akhmetov Tokhtar",
  description: "Portfolio of Akhmetov Tokhtar. Junior web developer from Astana, Kazakhstan. React, Node, Next, C#, Python, Django",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./tools/mediaQueries.js":
/*!*******************************!*\
  !*** ./tools/mediaQueries.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};
const devices = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};
/* harmony default export */ __webpack_exports__["default"] = (devices);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Тохтар\Desktop\site_next\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map