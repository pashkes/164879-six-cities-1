(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/components/favorites-page/favorites-page.jsx":
/*!**********************************************************!*\
  !*** ./src/components/favorites-page/favorites-page.jsx ***!
  \**********************************************************/
/*! exports provided: FavoritesPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPage", function() { return FavoritesPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _layout_layout_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/layout.jsx */ "./src/components/layout/layout.jsx");
/* harmony import */ var _reducer_data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducer/data/data */ "./src/reducer/data/data.js");
/* harmony import */ var _reducer_data_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducer/data/selectors */ "./src/reducer/data/selectors.js");
/* harmony import */ var _favorites_favorites_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../favorites/favorites.jsx */ "./src/components/favorites/favorites.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var FavoritesPage =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FavoritesPage, _PureComponent);

  function FavoritesPage(props) {
    _classCallCheck(this, FavoritesPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(FavoritesPage).call(this, props));
  }

  _createClass(FavoritesPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onLoadFavorites = this.props.onLoadFavorites;
      onLoadFavorites();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          favorites = _this$props.favorites,
          cities = _this$props.cities;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_layout_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "Page of favorite offers"
      }, cities.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "page__main page__main--favorites"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page__favorites-container container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "favorites"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "favorites__title"
      }, "Saved listing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "favorites__list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_favorites_favorites_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        favorites: favorites,
        cities: cities
      }))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "page__main page__main--favorites page__main--favorites-empty"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page__favorites-container container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "favorites favorites--empty"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "visually-hidden"
      }, "Favorites (empty)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "favorites__status-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
        className: "favorites__status"
      }, "Nothing yet saved."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "favorites__status-description"
      }, "Save properties to narrow down search or plan yor future trips."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "footer container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/",
        className: "footer__logo-link"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "footer__logo",
        src: "img/logo.svg",
        alt: "6 cities logo",
        width: "64",
        height: "33"
      }))));
    }
  }]);

  return FavoritesPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
FavoritesPage.propTypes = {
  favorites: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onLoadFavorites: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  cities: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  var favorites = Object(_reducer_data_selectors__WEBPACK_IMPORTED_MODULE_6__["groupingFavoritesForCities"])(state);
  return {
    cities: Object.keys(favorites),
    favorites: favorites || {}
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLoadFavorites: function onLoadFavorites() {
      return dispatch(_reducer_data_data__WEBPACK_IMPORTED_MODULE_5__["Operation"].loadFavorites());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(FavoritesPage));

/***/ }),

/***/ "./src/components/favorites/favorites.jsx":
/*!************************************************!*\
  !*** ./src/components/favorites/favorites.jsx ***!
  \************************************************/
/*! exports provided: Favorites, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Favorites", function() { return Favorites; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _reducer_data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducer/data/data */ "./src/reducer/data/data.js");
/* harmony import */ var _card_place_card_place_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card-place/card-place.jsx */ "./src/components/card-place/card-place.jsx");
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








var Favorites =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Favorites, _PureComponent);

  function Favorites(props) {
    var _this;

    _classCallCheck(this, Favorites);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Favorites).call(this, props));
    _this._handelClickCity = _this._handelClickCity.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Favorites, [{
    key: "_handelClickCity",
    value: function _handelClickCity(evt) {
      evt.preventDefault();
      var _this$props = this.props,
          onChangeCity = _this$props.onChangeCity,
          history = _this$props.history;
      var city = evt.currentTarget.getAttribute("data-city");
      onChangeCity(city);
      history.push(city);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          favorites = _this$props2.favorites,
          cities = _this$props2.cities;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "favorites__list",
        "aria-live": "polite",
        role: "status"
      }, cities.map(function (group) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: group,
          className: "favorites__locations-items"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "favorites__locations locations locations--current"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "locations__item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          onClick: _this2._handelClickCity,
          "data-city": group,
          className: "locations__item-link"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, group)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "favorites__places",
          "aria-live": "polite",
          role: "status"
        }, favorites[group].map(function (offer) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card_place_card_place_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, offer, {
            onSelected: function onSelected() {},
            classModPrefix: "favorites",
            mainClassMod: "favorites__card",
            key: offer.id
          }));
        })));
      }));
    }
  }]);

  return Favorites;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Favorites.propTypes = {
  favorites: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  cities: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onChangeCity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChangeCity: function onChangeCity(city) {
      return dispatch(_reducer_data_data__WEBPACK_IMPORTED_MODULE_5__["ActionCreators"].setCity(city));
    }
  };
};

var enhance = Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"], Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, mapDispatchToProps));
/* harmony default export */ __webpack_exports__["default"] = (enhance(Favorites));

/***/ })

}]);
//# sourceMappingURL=7.bundle.js.map