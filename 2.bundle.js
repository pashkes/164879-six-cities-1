(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/components/map/map.jsx":
/*!************************************!*\
  !*** ./src/components/map/map.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../constants */ "./src/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var MapConfig = {
  ID: "map",
  ZOOM: 12,
  MARKER_PATH: "img/marker.svg",
  ACTIVE_MARKER_PATH: "img/active-marker.svg",
  MARKER_SIZE: [30, 30],
  TITLE_LAYER: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
};

var Map =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Map, _PureComponent);

  function Map(props) {
    var _this;

    _classCallCheck(this, Map);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Map).call(this, props));
    _this.group = null;
    _this._icon = leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.icon({
      iconUrl: MapConfig.MARKER_PATH,
      iconSize: MapConfig.MARKER_SIZE
    });
    _this._activeIcon = leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.icon({
      iconUrl: MapConfig.ACTIVE_MARKER_PATH,
      iconSize: MapConfig.MARKER_SIZE
    });
    return _this;
  }

  _createClass(Map, [{
    key: "_addMarkers",
    value: function _addMarkers() {
      var _this$props = this.props,
          selectedOffer = _this$props.selectedOffer,
          coordinates = _this$props.coordinates;
      this.group = leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.layerGroup().addTo(this.map);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = coordinates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.marker(item, {
            icon: this._icon
          }).addTo(this.group);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.marker(selectedOffer, {
        icon: this._activeIcon
      }).addTo(this.group);
    }
  }, {
    key: "_initMap",
    value: function _initMap() {
      var city = _constants__WEBPACK_IMPORTED_MODULE_3__["CITIES"].get(this.props.currentCity);
      this.map = leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.map(MapConfig.ID, {
        center: city,
        zoom: MapConfig.ZOOM,
        zoomControl: false,
        marker: true,
        scrollWheelZoom: false
      });
      this.map.setView(city, MapConfig.ZOOM);
      leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.tileLayer(MapConfig.TITLE_LAYER).addTo(this.map);

      this._addMarkers();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._initMap();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props2 = this.props,
          currentCity = _this$props2.currentCity,
          coordinates = _this$props2.coordinates,
          selectedOffer = _this$props2.selectedOffer;
      this.group.clearLayers();
      this.map.setView(_constants__WEBPACK_IMPORTED_MODULE_3__["CITIES"].get(currentCity), MapConfig.ZOOM);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = coordinates[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.marker(item, {
            icon: this._icon
          }).addTo(this.group);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.marker(selectedOffer, {
        icon: this._activeIcon
      }).addTo(this.group);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cities__map",
        id: "map"
      });
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

Map.propTypes = {
  coordinates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  currentCity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  selectedOffer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./src/components/offers/offers.jsx":
/*!******************************************!*\
  !*** ./src/components/offers/offers.jsx ***!
  \******************************************/
/*! exports provided: Offers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offers", function() { return Offers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducer_data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../reducer/data/data */ "./src/reducer/data/data.js");
/* harmony import */ var _card_place_card_place_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card-place/card-place.jsx */ "./src/components/card-place/card-place.jsx");
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






var Offers =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Offers, _PureComponent);

  function Offers(props) {
    var _this;

    _classCallCheck(this, Offers);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Offers).call(this, props));
    _this._onSelectOffer = _this._onSelectOffer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Offers, [{
    key: "_onSelectOffer",
    value: function _onSelectOffer(id) {
      this.props.onSetActiveOffer(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          offers = _this$props.offers,
          _this$props$classModO = _this$props.classModOffers,
          classModOffers = _this$props$classModO === void 0 ? [] : _this$props$classModO;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(classModOffers.join(" "), " places__list")
      }, offers.map(function (offer) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card_place_card_place_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
          key: offer.id
        }, offer, {
          onSelected: _this2._onSelectOffer,
          classModPrefix: "cities",
          mainClassMod: "cities__place-card"
        }));
      }));
    }
  }]);

  return Offers;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Offers.propTypes = {
  offers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    previewPhoto: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    isPremium: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
    isFavorite: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
    price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    rating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  })).isRequired,
  classModOffers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  classModCard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onSetActiveOffer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSetActiveOffer: function onSetActiveOffer(id) {
      return dispatch(_reducer_data_data__WEBPACK_IMPORTED_MODULE_3__["ActionCreators"].setActiveIdOffer(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(Offers));

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map