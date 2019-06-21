import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import CitiesCoordinates from "./../../mock/coordinatesCities";


export class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.zoom = 12;
    this.marker = {
      iconUrl: `img/marker.svg`,
      iconSize: [30, 30]
    };
    this.activeMarker = {
      iconUrl: `img/active-marker.svg`,
      iconSize: [30, 30]
    };
    this.group = null;
  }

  addMarkers() {
    const {selectedOffer, coordinates} = this.props;
    const activeOffer = selectedOffer.length !== 0;
    this.group = leaflet.layerGroup().addTo(this.map);
    for (let item of coordinates) {
      leaflet.marker(item, this.marker)
        .addTo(this.group);
    }
    if (activeOffer) {
      leaflet.marker(selectedOffer, this.activeMarker)
        .addTo(this.group);
    }
  }

  initMap() {
    const city = CitiesCoordinates.get(this.props.currentCity);
    this.map = leaflet.map(`map`, {
      center: city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true,
      scrollWheelZoom: false,
    });
    this.map.setView(city, this.zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this.addMarkers();
  }

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    const {currentCity, coordinates} = this.props;
    this.group.clearLayers();
    this.map.setView(CitiesCoordinates.get(currentCity), this.zoom);
    for (let item of coordinates) {
      leaflet.marker(item, this.marker)
        .addTo(this.group);
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
  currentCity: PropTypes.string.isRequired,
  selectedOffer: PropTypes.array
};

Map.defaultProps = {
  selectedOffer: []
};

export default Map;
