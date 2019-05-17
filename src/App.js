import React, {Component} from 'react';
import MainPage from './components/main-page/main-page.jsx';
import offers from './mock/offers';

class App extends Component {
  render() {
    return <MainPage offers={offers} />;
  }
}

MainPage.defaultProps = {
  offers: []
};

export default App;
