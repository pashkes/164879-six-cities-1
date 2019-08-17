(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/react-document-title/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-document-title/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js"),
    PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),
    withSideEffect = __webpack_require__(/*! react-side-effect */ "./node_modules/react-side-effect/lib/index.js");

function reducePropsToState(propsList) {
  var innermostProps = propsList[propsList.length - 1];
  if (innermostProps) {
    return innermostProps.title;
  }
}

function handleStateChangeOnClient(title) {
  var nextTitle = title || '';
  if (nextTitle !== document.title) {
    document.title = nextTitle;
  }
}

function DocumentTitle() {}
DocumentTitle.prototype = Object.create(React.Component.prototype);

DocumentTitle.displayName = 'DocumentTitle';
DocumentTitle.propTypes = {
  title: PropTypes.string.isRequired
};

DocumentTitle.prototype.render = function() {
  if (this.props.children) {
    return React.Children.only(this.props.children);
  } else {
    return null;
  }
};

module.exports = withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(DocumentTitle);


/***/ }),

/***/ "./src/components/header/header.jsx":
/*!******************************************!*\
  !*** ./src/components/header/header.jsx ***!
  \******************************************/
/*! exports provided: Header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../constants */ "./src/constants.js");
/* harmony import */ var _reducer_user_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../reducer/user/selectors */ "./src/reducer/user/selectors.js");






var Header = function Header(props) {
  var isAuthRequire = props.isAuthRequire,
      userData = props.userData;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/",
    className: "header__logo-link header__logo-link--active"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "header__logo",
    src: "img/logo.svg",
    alt: "6 cities logo",
    width: "81",
    height: "41"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "header__nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "header__nav-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "header__nav-item user"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: isAuthRequire ? _constants__WEBPACK_IMPORTED_MODULE_4__["Page"].LOGIN : _constants__WEBPACK_IMPORTED_MODULE_4__["Page"].FAVORITES,
    className: "header__nav-link header__nav-link--profile"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__avatar-wrapper user__avatar-wrapper",
    style: isAuthRequire ? {} : {
      backgroundImage: "url(".concat(_constants__WEBPACK_IMPORTED_MODULE_4__["default"].BASE_URL).concat(userData.avatar, ")")
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "header__user-name user__name"
  }, isAuthRequire ? "Sign In" : userData.email))))))));
};
Header.propTypes = {
  isAuthRequire: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  userData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    avatar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    isPro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }).isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userData: Object(_reducer_user_selectors__WEBPACK_IMPORTED_MODULE_5__["getUserData"])(state),
    isAuthRequire: Object(_reducer_user_selectors__WEBPACK_IMPORTED_MODULE_5__["getAuthorizationStatus"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Header));

/***/ }),

/***/ "./src/components/layout/layout.jsx":
/*!******************************************!*\
  !*** ./src/components/layout/layout.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../header/header.jsx */ "./src/components/header/header.jsx");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);





var Layout = function Layout(props) {
  var pageClasses = props.pageClasses,
      children = props.children,
      title = props.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(pageClasses ? pageClasses.join(" ") : "")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_header_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), children);
};

Layout.propTypes = {
  pageClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array])
};
Layout.defaultProps = {
  pageClasses: ""
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/login-form/login-form.jsx":
/*!**************************************************!*\
  !*** ./src/components/login-form/login-form.jsx ***!
  \**************************************************/
/*! exports provided: LoginForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return LoginForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_document_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-document-title */ "./node_modules/react-document-title/index.js");
/* harmony import */ var react_document_title__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_document_title__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducer_user_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducer/user/user */ "./src/reducer/user/user.js");
/* harmony import */ var _hocs_with_login_form_with_login_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hocs/with-login-form/with-login-form */ "./src/hocs/with-login-form/with-login-form.js");
/* harmony import */ var _reducer_user_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducer/user/selectors */ "./src/reducer/user/selectors.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var LoginForm =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(LoginForm, _PureComponent);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).call(this, props));
    _this._handleSubmitForm = _this._handleSubmitForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LoginForm, [{
    key: "_handleSubmitForm",
    value: function _handleSubmitForm(evt) {
      evt.preventDefault();
      var _this$props = this.props,
          emailValue = _this$props.emailValue,
          passwordValue = _this$props.passwordValue,
          onLogIn = _this$props.onLogIn;
      onLogIn(emailValue, passwordValue);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onChangeEmail = _this$props2.onChangeEmail,
          onChangePassword = _this$props2.onChangePassword,
          emailValue = _this$props2.emailValue,
          passwordValue = _this$props2.passwordValue,
          error = _this$props2.error;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_document_title__WEBPACK_IMPORTED_MODULE_3___default.a, {
        title: "Page of log in"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "login"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "login__title"
      }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this._handleSubmitForm,
        className: "login__form form",
        action: "#",
        method: "post"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login__input-wrapper form__input-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "login-email",
        className: "visually-hidden"
      }, "E-mail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: onChangeEmail,
        value: emailValue,
        id: "login-email",
        className: "login__input form__input",
        type: "email",
        name: "email",
        placeholder: "Email",
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login__input-wrapper form__input-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "login-password",
        className: "visually-hidden"
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: onChangePassword,
        value: passwordValue,
        id: "login-password",
        className: "login__input form__input",
        type: "password",
        name: "password",
        placeholder: "Password",
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        role: "alert",
        "aria-live": "polite"
      }, error), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "login__submit form__submit button",
        type: "submit"
      }, "Sign in"))));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
LoginForm.propTypes = {
  onChangeEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onChangePassword: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  emailValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  passwordValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onLogIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    error: Object(_reducer_user_selectors__WEBPACK_IMPORTED_MODULE_6__["getError"])(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLogIn: function onLogIn(email, password) {
      return dispatch(_reducer_user_user__WEBPACK_IMPORTED_MODULE_4__["Operation"].authorization(email, password));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_hocs_with_login_form_with_login_form__WEBPACK_IMPORTED_MODULE_5__["withLoginForm"])(LoginForm)));

/***/ }),

/***/ "./src/components/sign-in/sign-in.jsx":
/*!********************************************!*\
  !*** ./src/components/sign-in/sign-in.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _login_form_login_form_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../login-form/login-form.jsx */ "./src/components/login-form/login-form.jsx");
/* harmony import */ var _layout_layout_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/layout.jsx */ "./src/components/layout/layout.jsx");





var SignIn = function SignIn() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_layout_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Page of log in",
    pageClasses: ["page", "page--gray", "page--login"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "page__main page__main--login"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page__login-container container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_form_login_form_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "locations locations--login locations--current"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "locations__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "locations__item-link"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Amsterdam")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "./src/hocs/with-login-form/with-login-form.js":
/*!*****************************************************!*\
  !*** ./src/hocs/with-login-form/with-login-form.js ***!
  \*****************************************************/
/*! exports provided: withLoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLoginForm", function() { return withLoginForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var withLoginForm = function withLoginForm(Component) {
  var WithLoginForm =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(WithLoginForm, _PureComponent);

    function WithLoginForm(props) {
      var _this;

      _classCallCheck(this, WithLoginForm);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WithLoginForm).call(this, props));
      _this.state = {
        email: "",
        password: ""
      };
      _this._handleChangeEmail = _this._handleChangeEmail.bind(_assertThisInitialized(_this));
      _this._handleChangePassword = _this._handleChangePassword.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(WithLoginForm, [{
      key: "_handleChangeEmail",
      value: function _handleChangeEmail(evt) {
        this.setState({
          email: evt.target.value
        });
      }
    }, {
      key: "_handleChangePassword",
      value: function _handleChangePassword(evt) {
        this.setState({
          password: evt.target.value
        });
      }
    }, {
      key: "render",
      value: function render() {
        var props = this.props;
        var _this$state = this.state,
            email = _this$state.email,
            password = _this$state.password;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
          onChangeEmail: this._handleChangeEmail,
          onChangePassword: this._handleChangePassword,
          emailValue: email,
          passwordValue: password
        }));
      }
    }]);

    return WithLoginForm;
  }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

  return WithLoginForm;
};

/***/ })

}]);
//# sourceMappingURL=6.bundle.js.map