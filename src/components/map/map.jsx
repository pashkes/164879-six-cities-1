import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  _initMap() {
    const city = [52.38333, 4.9];
    const leaflet = this.props.leaflet;
    const icon = leaflet.icon({
      iconUrl: `img/marker.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    for (let item of this.props.cities) {
      leaflet
        .marker(item, {icon})
        .addTo(map);
    }
  }

  componentDidMount() {
    this._initMap();
  }

  render() {
    return <div id="map"/>;
  }
}

Map.propTypes = {
  cities: PropTypes.array.isRequired,
  leaflet: PropTypes.object
};
export default Map;
