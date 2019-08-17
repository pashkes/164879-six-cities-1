(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/components/catalog/catalog.jsx":
/*!********************************************!*\
  !*** ./src/components/catalog/catalog.jsx ***!
  \********************************************/
/*! exports provided: Catalog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Catalog", function() { return Catalog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _reducer_data_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducer/data/selectors */ "./src/reducer/data/selectors.js");
/* harmony import */ var _map_map_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map/map.jsx */ "./src/components/map/map.jsx");
/* harmony import */ var _select_select_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../select/select.jsx */ "./src/components/select/select.jsx");
/* harmony import */ var _cities_cities_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cities/cities.jsx */ "./src/components/cities/cities.jsx");
/* harmony import */ var _offers_offers_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../offers/offers.jsx */ "./src/components/offers/offers.jsx");
/* harmony import */ var _main_empty_main_empty_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../main-empty/main-empty.jsx */ "./src/components/main-empty/main-empty.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }











var Catalog = function Catalog(props) {
  var currentCity = props.currentCity,
      offers = props.offers,
      coordinates = props.coordinates,
      currentOffer = props.currentOffer,
      cities = props.cities;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, offers.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "page__main page__main--index"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "visually-hidden"
  }, "Cities"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cities tabs"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cities_cities_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    cities: cities
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cities__places-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cities__places-container container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "cities__places places"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "visually-hidden"
  }, "Places"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "places__found",
    role: "status",
    "aria-live": "polite"
  }, offers.length, " places to stay in ", currentCity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "places__sorting",
    action: "#",
    method: "get"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "places__sorting-caption"
  }, "Sort by"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_select_select_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    options: _constants__WEBPACK_IMPORTED_MODULE_3__["SortOptions"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_offers_offers_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
    offers: offers,
    classModOffers: ["cities__places-list", "tabs__content"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cities__right-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "cities__map map"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_map_map_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedOffer: currentOffer,
    currentCity: currentCity,
    coordinates: coordinates
  })))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main_empty_main_empty_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    selectedCity: currentCity
  }));
};
Catalog.propTypes = {
  currentCity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  offers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  coordinates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  currentOffer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  cities: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};

var sortOffers = function sortOffers(offers, sort) {
  switch (sort.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_3__["TypeSort"].TO_HIGH:
      return _toConsumableArray(offers).sort(function (current, next) {
        return current.price - next.price;
      });

    case _constants__WEBPACK_IMPORTED_MODULE_3__["TypeSort"].TO_LOW:
      return _toConsumableArray(offers).sort(function (current, next) {
        return next.price - current.price;
      });

    case _constants__WEBPACK_IMPORTED_MODULE_3__["TypeSort"].TOP_RATED:
      return _toConsumableArray(offers).sort(function (current, next) {
        return next.rating - current.rating;
      });

    default:
      return offers;
  }
};

var mapStateToProps = function mapStateToProps(state) {
  var offers = Object(_reducer_data_selectors__WEBPACK_IMPORTED_MODULE_4__["getFilteredOffers"])(state);
  var typeSort = Object(_reducer_data_selectors__WEBPACK_IMPORTED_MODULE_4__["getTypeSort"])(state);
  return {
    currentCity: Object(_reducer_data_selectors__WEBPACK_IMPORTED_MODULE_4__["getCurrentCity"])(state),
    offers: sortOffers(offers, typeSort),
    coordinates: offers.map(function (it) {
      return [it.location.latitude, it.location.longitude];
    }),
    currentOffer: Object(_reducer_data_selectors__WEBPACK_IMPORTED_MODULE_4__["getSelectedOffer"])(state),
    cities: Object(_reducer_data_selectors__WEBPACK_IMPORTED_MODULE_4__["getCitiesFromServer"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Catalog));

/***/ }),

/***/ "./src/components/cities/cities.jsx":
/*!******************************************!*\
  !*** ./src/components/cities/cities.jsx ***!
  \******************************************/
/*! exports provided: Cities, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cities", function() { return Cities; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducer_data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducer/data/data */ "./src/reducer/data/data.js");
/* harmony import */ var _city_link_city_link_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../city-link/city-link.jsx */ "./src/components/city-link/city-link.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Cities =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Cities, _PureComponent);

  function Cities(props) {
    var _this;

    _classCallCheck(this, Cities);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cities).call(this, props));
    _this._onSetCity = _this._onSetCity.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Cities, [{
    key: "_onSetCity",
    value: function _onSetCity(city) {
      var onChangeCity = this.props.onChangeCity;
      onChangeCity(city);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var cities = this.props.cities;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "locations container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "locations__list tabs__list"
      }, cities.map(function (city) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_city_link_city_link_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: city,
          city: city,
          onChangeCity: _this2._onSetCity
        });
      })));
    }
  }]);

  return Cities;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Cities.propTypes = {
  cities: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onChangeCity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChangeCity: function onChangeCity(city) {
      return dispatch(_reducer_data_data__WEBPACK_IMPORTED_MODULE_3__["ActionCreators"].setCity(city));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(Cities));

/***/ }),

/***/ "./src/components/city-link/city-link.jsx":
/*!************************************************!*\
  !*** ./src/components/city-link/city-link.jsx ***!
  \************************************************/
/*! exports provided: CityLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityLink", function() { return CityLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducer_data_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../reducer/data/selectors */ "./src/reducer/data/selectors.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CityLink =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CityLink, _PureComponent);

  function CityLink(props) {
    var _this;

    _classCallCheck(this, CityLink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CityLink).call(this, props));
    _this._handleClickCity = _this._handleClickCity.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CityLink, [{
    key: "_handleClickCity",
    value: function _handleClickCity(evt) {
      var _this$props = this.props,
          onChangeCity = _this$props.onChangeCity,
          city = _this$props.city;
      evt.preventDefault();
      onChangeCity(city);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          city = _this$props2.city,
          currentCity = _this$props2.currentCity;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "locations__item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: this._handleClickCity,
        className: "locations__item-link tabs__item ".concat(currentCity === city ? "tabs__item--active" : "")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, city)));
    }
  }]);

  return CityLink;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
CityLink.propTypes = {
  city: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChangeCity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  currentCity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return Object.assign({}, ownProps, {
    currentCity: Object(_reducer_data_selectors__WEBPACK_IMPORTED_MODULE_3__["getCurrentCity"])(state)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(CityLink));

/***/ }),

/***/ "./src/components/main-empty/main-empty.jsx":
/*!**************************************************!*\
  !*** ./src/components/main-empty/main-empty.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _cities_cities_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cities/cities.jsx */ "./src/components/cities/cities.jsx");





var MainEmpty = function MainEmpty(_ref) {
  var selectedCity = _ref.selectedCity;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "page__main page__main--index page__main--index-empty"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "visually-hidden"
  }, "Cities"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cities tabs"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cities_cities_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cities: _constants__WEBPACK_IMPORTED_MODULE_2__["default"].CITIES
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cities__places-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cities__places-container cities__places-container--empty container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "cities__no-places"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cities__status-wrapper tabs__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "cities__status"
  }, "No places to stay available"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "cities__status-description"
  }, "We could not find any property available at the moment in ", selectedCity))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cities__right-section"
  }))));
};

MainEmpty.propTypes = {
  selectedCity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MainEmpty);

/***/ }),

/***/ "./src/components/main-page/main-page.jsx":
/*!************************************************!*\
  !*** ./src/components/main-page/main-page.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catalog_catalog_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../catalog/catalog.jsx */ "./src/components/catalog/catalog.jsx");
/* harmony import */ var _layout_layout_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/layout.jsx */ "./src/components/layout/layout.jsx");





var MainPage = function MainPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_layout_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Six cities",
    pageClasses: ["page", "page--gray", "page--main"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_catalog_catalog_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

MainPage.propTypes = {
  pageClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ }),

/***/ "./src/components/option/option.jsx":
/*!******************************************!*\
  !*** ./src/components/option/option.jsx ***!
  \******************************************/
/*! exports provided: Option, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducer_data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../reducer/data/data */ "./src/reducer/data/data.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../constants */ "./src/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Option =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Option, _PureComponent);

  function Option(props) {
    var _this;

    _classCallCheck(this, Option);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Option).call(this, props));
    _this._handleOptionClick = _this._handleOptionClick.bind(_assertThisInitialized(_this));
    _this._handleKeyDownEnter = _this._handleKeyDownEnter.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Option, [{
    key: "_handleOptionClick",
    value: function _handleOptionClick() {
      var _this$props = this.props,
          value = _this$props.value,
          name = _this$props.name,
          onSetTypeSort = _this$props.onSetTypeSort,
          onSelectOption = _this$props.onSelectOption,
          onFocusButton = _this$props.onFocusButton;
      onSelectOption(value, name);
      onSetTypeSort(value);
      onFocusButton();
    }
  }, {
    key: "_handleKeyDownEnter",
    value: function _handleKeyDownEnter(evt) {
      var _this$props2 = this.props,
          onFocusButton = _this$props2.onFocusButton,
          name = _this$props2.name,
          value = _this$props2.value,
          onSelectOption = _this$props2.onSelectOption,
          onSetTypeSort = _this$props2.onSetTypeSort;

      if (evt.keyCode === _constants__WEBPACK_IMPORTED_MODULE_4__["KeyCode"].ENTER) {
        onSelectOption(value, name);
        onSetTypeSort(value);
        onFocusButton();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          isSelected = _this$props3.isSelected,
          value = _this$props3.value,
          name = _this$props3.name;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "".concat(isSelected ? "places__option--active" : "", " places__option"),
        onKeyDown: this._handleKeyDownEnter,
        onClick: this._handleOptionClick,
        tabIndex: "0",
        "data-value": value
      }, name);
    }
  }]);

  return Option;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Option.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onSetTypeSort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSelectOption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onFocusButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSetTypeSort: function onSetTypeSort(value) {
      return dispatch(_reducer_data_data__WEBPACK_IMPORTED_MODULE_3__["ActionCreators"].setSortType(value));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(Option));

/***/ }),

/***/ "./src/components/select/select.jsx":
/*!******************************************!*\
  !*** ./src/components/select/select.jsx ***!
  \******************************************/
/*! exports provided: Select, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hocs_with_select_with_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../hocs/with-select/with-select */ "./src/hocs/with-select/with-select.js");
/* harmony import */ var _option_option_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../option/option.jsx */ "./src/components/option/option.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Select =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Select, _PureComponent);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));
    _this._handleClickDocumentOutside = _this._handleClickDocumentOutside.bind(_assertThisInitialized(_this));
    _this._onFocusButton = _this._onFocusButton.bind(_assertThisInitialized(_this));
    _this.dropdown = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.button = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("click", this._handleClickDocumentOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("click", this._handleClickDocumentOutside);
    }
  }, {
    key: "_handleClickDocumentOutside",
    value: function _handleClickDocumentOutside(evt) {
      var dropdown = this.dropdown.current.contains(evt.target);
      var button = this.button.current.contains(evt.target);
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          onCloseDropdown = _this$props.onCloseDropdown;

      if (isOpen && !dropdown && !button) {
        onCloseDropdown();
      }
    }
  }, {
    key: "_onFocusButton",
    value: function _onFocusButton() {
      this.button.current.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          onOpenDropdown = _this$props2.onOpenDropdown,
          isOpen = _this$props2.isOpen,
          selected = _this$props2.selected,
          onSelectOption = _this$props2.onSelectOption,
          options = _this$props2.options,
          selectedName = _this$props2.selectedName,
          onKeyDownCloseDropdown = _this$props2.onKeyDownCloseDropdown;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "places__sorting-type",
        onClick: onOpenDropdown,
        "aria-haspopup": "true",
        "aria-expanded": isOpen,
        id: "sorter",
        ref: this.button
      }, selectedName, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "places__sorting-arrow",
        width: "7",
        height: "4",
        "aria-hidden": "true"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-arrow-select"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        onKeyDown: onKeyDownCloseDropdown,
        ref: this.dropdown,
        "aria-labelledby": "sorter",
        className: "".concat(isOpen ? "places__options--opened" : "", " places__options places__options--custom"),
        tabIndex: "-1"
      }, options.map(function (option) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_option_option_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onSelectOption: onSelectOption,
          isSelected: selected === option.value,
          onFocusButton: _this2._onFocusButton,
          value: option.value,
          name: option.name,
          button: _this2.button,
          key: option.value
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        defaultValue: selected,
        hidden: true,
        id: "places-sorting"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: selected
      }, selectedName)));
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Select.propTypes = {
  onOpenDropdown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSelectOption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onKeyDownCloseDropdown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  selectedName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })).isRequired,
  onCloseDropdown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_with_select_with_select__WEBPACK_IMPORTED_MODULE_2__["default"])(Select));

/***/ }),

/***/ "./src/hocs/with-select/with-select.js":
/*!*********************************************!*\
  !*** ./src/hocs/with-select/with-select.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
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





var withSelect = function withSelect(Component) {
  var WithSelect =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(WithSelect, _PureComponent);

    function WithSelect(props) {
      var _this;

      _classCallCheck(this, WithSelect);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WithSelect).call(this, props));
      _this._handleButtonClick = _this._handleButtonClick.bind(_assertThisInitialized(_this));
      _this._handleDocumentKeyDownEsc = _this._handleDocumentKeyDownEsc.bind(_assertThisInitialized(_this));
      _this._onSelectOption = _this._onSelectOption.bind(_assertThisInitialized(_this));
      _this._closeDropdown = _this._closeDropdown.bind(_assertThisInitialized(_this));
      _this.state = {
        isOpen: false,
        selected: _constants__WEBPACK_IMPORTED_MODULE_1__["TypeSort"].POPULAR,
        nameSelected: "Popular"
      };
      return _this;
    }

    _createClass(WithSelect, [{
      key: "_closeDropdown",
      value: function _closeDropdown() {
        this.setState({
          isOpen: false
        });
      }
    }, {
      key: "_handleButtonClick",
      value: function _handleButtonClick(evt) {
        evt.preventDefault();
        var isOpen = this.state.isOpen;
        this.setState({
          isOpen: !isOpen
        });
      }
    }, {
      key: "_handleDocumentKeyDownEsc",
      value: function _handleDocumentKeyDownEsc(evt) {
        if (evt.keyCode === _constants__WEBPACK_IMPORTED_MODULE_1__["KeyCode"].ESC) {
          this.setState({
            isOpen: false
          });
        }
      }
    }, {
      key: "_onSelectOption",
      value: function _onSelectOption(value, name) {
        this.setState(function (currentState) {
          return {
            isOpen: !currentState.isOpen,
            selected: value,
            nameSelected: name
          };
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            selected = _this$state.selected,
            nameSelected = _this$state.nameSelected;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, this.props, {
          selectedName: nameSelected,
          onOpenDropdown: this._handleButtonClick,
          onKeyDownCloseDropdown: this._handleDocumentKeyDownEsc,
          onCloseDropdown: this._closeDropdown,
          onSelectOption: this._onSelectOption,
          button: this.button,
          dropdown: this.selectList,
          isOpen: this.state.isOpen,
          selected: selected
        }));
      }
    }]);

    return WithSelect;
  }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

  return WithSelect;
};

/* harmony default export */ __webpack_exports__["default"] = (withSelect);

/***/ })

}]);
//# sourceMappingURL=5.bundle.js.map