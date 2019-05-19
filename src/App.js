import React, {Component} from 'react';
import MainPage from './components/main-page/main-page.jsx';
import offers from './mock/offers';
import leaflet from 'leaflet';

const citiesCoordinates = offers.map((it) => it.coordinates);
class App extends Component {
  componentDidMount() {
  }

  render() {
    return <MainPage offers={offers} cities={citiesCoordinates} leaflet={leaflet}/>;
  }
}

MainPage.defaultProps = {
  offers: []
};

export default App;
