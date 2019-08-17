(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/components/card-place/card-place.jsx":
/*!**************************************************!*\
  !*** ./src/components/card-place/card-place.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _favorite_button_favorite_button_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../favorite-button/favorite-button.jsx */ "./src/components/favorite-button/favorite-button.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var CardPlace =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CardPlace, _PureComponent);

  function CardPlace(props) {
    var _this;

    _classCallCheck(this, CardPlace);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CardPlace).call(this, props));
    _this._handleImageClick = _this._handleImageClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CardPlace, [{
    key: "_handleImageClick",
    value: function _handleImageClick(evt) {
      var _this$props = this.props,
          onSelected = _this$props.onSelected,
          id = _this$props.id;
      evt.preventDefault();
      onSelected(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isPremium = _this$props2.isPremium,
          previewPhoto = _this$props2.previewPhoto,
          price = _this$props2.price,
          isFavorite = _this$props2.isFavorite,
          rating = _this$props2.rating,
          title = _this$props2.title,
          type = _this$props2.type,
          id = _this$props2.id,
          _this$props2$mainClas = _this$props2.mainClassMod,
          mainClassMod = _this$props2$mainClas === void 0 ? "" : _this$props2$mainClas,
          _this$props2$classMod = _this$props2.classModPrefix,
          classModPrefix = _this$props2$classMod === void 0 ? "" : _this$props2$classMod;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "".concat(mainClassMod, " place-card")
      }, isPremium ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "place-card__mark"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Premium")) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(classModPrefix, "__image-wrapper place-card__image-wrapper")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: this._handleImageClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "place-card__image",
        src: previewPhoto,
        width: "260",
        height: "200",
        alt: title
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(classModPrefix, "__card-info place-card__info")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "place-card__price-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "place-card__price"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        className: "place-card__price-value"
      }, "\u20AC", price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "place-card__price-text"
      }, "/\xA0night")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_favorite_button_favorite_button_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: id,
        isFavorite: isFavorite,
        prefixClass: "place-card"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "place-card__rating rating"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "place-card__stars rating__stars"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          width: "".concat(rating, "%")
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "visually-hidden"
      }, "Rating"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "place-card__name"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/offer/".concat(id)
      }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "place-card__type"
      }, type)));
    }
  }]);

  return CardPlace;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

CardPlace.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  previewPhoto: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isPremium: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isFavorite: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  rating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  classModPrefix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mainClassMod: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CardPlace);

/***/ }),

/***/ "./src/components/favorite-button/favorite-button.jsx":
/*!************************************************************!*\
  !*** ./src/components/favorite-button/favorite-button.jsx ***!
  \************************************************************/
/*! exports provided: FavoriteButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteButton", function() { return FavoriteButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _reducer_data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducer/data/data */ "./src/reducer/data/data.js");
/* harmony import */ var _reducer_user_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducer/user/selectors */ "./src/reducer/user/selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../constants */ "./src/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var FavoriteButton =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FavoriteButton, _PureComponent);

  function FavoriteButton(props) {
    var _this;

    _classCallCheck(this, FavoriteButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FavoriteButton).call(this, props));
    _this._handleClick = _this._handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FavoriteButton, [{
    key: "_handleClick",
    value: function _handleClick() {
      var _this$props = this.props,
          isFavorite = _this$props.isFavorite,
          onAddToFavorites = _this$props.onAddToFavorites,
          id = _this$props.id,
          onRemoveFromFavorites = _this$props.onRemoveFromFavorites,
          isAuthRequire = _this$props.isAuthRequire,
          history = _this$props.history;

      if (isAuthRequire) {
        history.push(_constants__WEBPACK_IMPORTED_MODULE_7__["default"].LOGIN_PATH);
        return;
      }

      if (isFavorite) {
        onRemoveFromFavorites(id);
      } else {
        onAddToFavorites(id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isFavorite = _this$props2.isFavorite,
          prefixClass = _this$props2.prefixClass,
          _this$props2$width = _this$props2.width,
          width = _this$props2$width === void 0 ? 18 : _this$props2$width,
          _this$props2$height = _this$props2.height,
          height = _this$props2$height === void 0 ? 19 : _this$props2$height;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this._handleClick,
        type: "button",
        className: "".concat(prefixClass, "__bookmark-button ").concat(isFavorite ? "place-card__bookmark-button--active" : "", " button"),
        "aria-pressed": isFavorite ? "true" : "false"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "place-card__bookmark-icon",
        "aria-hidden": "true",
        width: width,
        height: height
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-bookmark"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "visually-hidden"
      }, isFavorite ? "In" : "To", " bookmarks"));
    }
  }]);

  return FavoriteButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
FavoriteButton.propTypes = {
  isFavorite: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onAddToFavorites: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onRemoveFromFavorites: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  prefixClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isAuthRequire: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthRequire: Object(_reducer_user_selectors__WEBPACK_IMPORTED_MODULE_6__["getAuthorizationStatus"])(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAddToFavorites: function onAddToFavorites(id) {
      return dispatch(_reducer_data_data__WEBPACK_IMPORTED_MODULE_5__["Operation"].addToFavorites(id));
    },
    onRemoveFromFavorites: function onRemoveFromFavorites(id) {
      return dispatch(_reducer_data_data__WEBPACK_IMPORTED_MODULE_5__["Operation"].removeFromFavorites(id));
    }
  };
};

var enhance = Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps));
/* harmony default export */ __webpack_exports__["default"] = (enhance(FavoriteButton));

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

/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map