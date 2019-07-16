import * as React from "react";
import * as leaflet from "leaflet";

import {CITIES} from "./../../constants";

const MapConfig = {
  ID: `map`,
  ZOOM: 12,
  MARKER_PATH: `img/marker.svg`,
  ACTIVE_MARKER_PATH: `img/active-marker.svg`,
  MARKER_SIZE: [30, 30],
  TITLE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`
};

interface Props {
  coordinates: [[number, number]],
  currentCity: string,
  selectedOffer: [number, number],
}

class Map extends React.PureComponent<Props> {
  private map: any;
  private group: any;
  private icon: any;
  private activeIcon: any;

  constructor(props) {
    super(props);

    this.group = null;
    this.icon = leaflet.icon({
      iconUrl: MapConfig.MARKER_PATH,
      iconSize: [30, 30],
    });
    this.activeIcon = leaflet.icon({
      iconUrl: MapConfig.ACTIVE_MARKER_PATH,
      iconSize: [30, 30],
    });
  }

  _addMarkers() {
    const {selectedOffer, coordinates} = this.props;

    this.group = leaflet.layerGroup().addTo(this.map);

    for (let item of coordinates) {
      leaflet.marker(item, {icon: this.icon})
        .addTo(this.group);
    }
    leaflet.marker(selectedOffer, {icon: this.activeIcon}).addTo(this.group);
  }

  _initMap() {
    const city = CITIES.get(this.props.currentCity);

    this.map = leaflet.map(MapConfig.ID, {
      center: city,
      zoom: MapConfig.ZOOM,
      zoomControl: false,
      // marker: true,
      scrollWheelZoom: false,
    });

    this.map.setView(city, MapConfig.ZOOM);

    leaflet
      .tileLayer(MapConfig.TITLE_LAYER)
      .addTo(this.map);
    this._addMarkers();
    this.map.on(`click`, () => {
      if (this.map.scrollWheelZoom.enabled()) {
        this.map.scrollWheelZoom.disable();
      } else {
        this.map.scrollWheelZoom.enable();
      }
    });
  }

  componentDidMount() {
    this._initMap();
  }

  componentDidUpdate() {
    const {currentCity, coordinates, selectedOffer} = this.props;

    this.group.clearLayers();
    this.map.setView(CITIES.get(currentCity), MapConfig.ZOOM);

    for (let item of coordinates) {
      leaflet.marker(item, {icon: this.icon})
        .addTo(this.group);
    }

    leaflet.marker(selectedOffer, {icon: this.activeIcon})
      .addTo(this.group);
  }


  render() {
    return (
      <div className="cities__map" id="map"/>
    );
  }
}


export default Map;
