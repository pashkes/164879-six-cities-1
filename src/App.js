import React, {Component} from 'react';
import MainPage from './components/catalog/catalog.jsx';
import offers from './mock/offers';
import leaflet from 'leaflet';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return <MainPage offers={offers} leaflet={leaflet}/>;
  }
}

MainPage.defaultProps = {
  offers: []
};

export default App;
