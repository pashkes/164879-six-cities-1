import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CitiesCoordinates from './../../mock/coordinatesCities';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._zoom = 12;
    this._marker = {
      iconUrl: `img/marker.svg`,
      iconSize: [30, 30]
    };
    this._group = null;
  }

  __addMarkers() {
    this._group = this.props.leaflet.layerGroup().addTo(this._map);
    for (let item of this.props.coordinates) {
      this.props.leaflet
        .marker(item, this._marker)
        .addTo(this._group);
    }
  }

  _initMap() {
    const leaflet = this.props.leaflet;
    const city = CitiesCoordinates.get(this.props.currentCity);
    this._map = leaflet.map(`map`, {
      center: city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(city, this._zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);
    this.__addMarkers();
  }

  componentDidMount() {
    this._initMap();
  }

  componentDidUpdate() {
    this._group.clearLayers();
    this._map.setView(CitiesCoordinates.get(this.props.currentCity), this._zoom);
    for (let item of this.props.coordinates) {
      this.props.leaflet
        .marker(item, this._marker)
        .addTo(this._group);
    }
  }

  render() {
    return (
      <div className="cities__map" id="map"/>
    );
  }
}

Map.propTypes = {
  coordinates: PropTypes.array.isRequired,
  leaflet: PropTypes.object,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
  coordinates: state.offers.filter((offer) => {
    return offer.city === state.city;
  }).map((it) => it.coordinates)
});


export default connect(mapStateToProps)(Map);
