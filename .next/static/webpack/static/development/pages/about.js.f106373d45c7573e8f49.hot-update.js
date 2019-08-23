webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Ham__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Ham */ "./components/Ham.jsx");
/* harmony import */ var _Anch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Anch */ "./components/Anch.jsx");
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Contacts */ "./components/Contacts.jsx");
/* harmony import */ var _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tools/mediaQueries */ "./tools/mediaQueries.js");

var _jsxFileName = "C:\\Users\\\u0422\u043E\u0445\u0442\u0430\u0440\\Desktop\\site_next\\components\\Header.jsx";








var Btn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "Header__Btn",
  componentId: "by5f3k-0"
})(["text-decoration:none;background:none;border:none;&:focus{outline:none;}@media ", "{justify-self:end;}"], _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_8__["default"].mobileL);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "Header__Title",
  componentId: "by5f3k-1"
})(["color:", ";font-size:1.5rem;font-weight:700;@media ", "{font-size:2.5rem;}"], function (prop) {
  return prop.color;
}, _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_8__["default"].mobileL);
var NavigationLayout = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__NavigationLayout",
  componentId: "by5f3k-2"
})(["z-index:1;position:fixed;display:flex;flex-direction:column;background:#ef3340;height:0;overflow:hidden;width:0;top:0;left:0;"]);
var MenuTab = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "Header__MenuTab",
  componentId: "by5f3k-3"
})(["cursor:pointer;text-decoration:none;font-weight:bold;font-size:8rem;color:black;transition:0.4s;&:hover{color:white;}@media ", "{font-size:6rem;}"], _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_8__["default"].mobileL);
var LogoLayout = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__LogoLayout",
  componentId: "by5f3k-4"
})(["display:grid;grid-template-columns:auto auto;grid-column-gap:10px;align-items:center;"]);
var TitleLayout = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__TitleLayout",
  componentId: "by5f3k-5"
})(["width:100%;z-index:2;display:grid;grid-template-columns:auto 1fr;grid-column-gap:20px;align-items:center;justify-content:end;@media ", "{grid-template-columns:2fr auto;justify-items:start;}"], _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_8__["default"].mobileL);
var MenuLayout = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Header__MenuLayout",
  componentId: "by5f3k-6"
})(["list-style:none;opacity:1;@media ", "{align-self:center;}"], _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_8__["default"].mobileL);
var Navbar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__Navbar",
  componentId: "by5f3k-7"
})(["display:flex;justify-content:space-between;flex-wrap:wrap;align-items:center;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "Header__Logo",
  componentId: "by5f3k-8"
})(["z-index:0;height:3rem;"]);
var ContactsLayout = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__ContactsLayout",
  componentId: "by5f3k-9"
})(["align-self:end;"]);
var SectionLayout = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__SectionLayout",
  componentId: "by5f3k-10"
})(["display:grid;grid-template-rows:1fr 1fr;height:100%;padding:6rem 3rem 3rem 3rem;@media ", "{padding:6rem 3rem 12rem 3rem;}"], _tools_mediaQueries__WEBPACK_IMPORTED_MODULE_8__["default"].mobileL);
var Fixed = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__Fixed",
  componentId: "by5f3k-11"
})(["width:100%;z-index:4;position:fixed;"]);

var Header = function Header() {
  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var menuRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      displayNav = _useState2[0],
      setDisplayNav = _useState2[1];

  var showNavigation = function showNavigation() {
    setDisplayNav(!displayNav);
    var navigation = navRef.current;
    var menuList = menuRef.current;
    var delay = 0.5;
    var tl = new gsap__WEBPACK_IMPORTED_MODULE_3__["TimelineMax"]({});

    if (!displayNav) {
      tl.to(navigation, delay, {
        height: '100vh',
        width: '100%',
        ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power3"].easeInOut
      });
      tl.from(menuList, delay, {
        opacity: 0,
        x: -30,
        y: -30,
        ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power3"].easeInOut
      });
    } else {
      tl.to(navigation, delay, {
        height: '0',
        width: '0',
        ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power3"].easeInOut
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {// Update the document title using the browser API
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Navbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Fixed, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logo, {
    src: "/static/logo_ball.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Anch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/",
    color: displayNav ? 'black' : 'white',
    underlineColor: displayNav ? 'black' : '#ef3340',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    color: displayNav ? 'black' : 'white',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Akhmetov Toktar"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Btn, {
    onClick: showNavigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Ham__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: displayNav ? 'black' : 'white',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavigationLayout, {
    ref: navRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuLayout, {
    ref: menuRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/about",
    title: "About me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuTab, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "About me"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuTab, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuTab, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuTab, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "lorem ipsum"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContactsLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Contacts__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "black",
    size: "4x",
    width: "400px",
    mobileWidth: "200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=about.js.f106373d45c7573e8f49.hot-update.js.map