import React, {Component} from 'react';
import MainPage from './components/main-page/main-page.jsx';
import OFFERS_MOCK from './mock-data';

class App extends Component {
  render() {
    return <MainPage offers={OFFERS_MOCK} />;
  }
}

MainPage.defaultProps = {
  offers: []
};

export default App;
