import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/main-page/main-page.jsx';
import OFFERS_MOCK from './mock-data';

const initApp = () => {
  ReactDOM.render(
      <MainPage
        offers={OFFERS_MOCK}
      />,
      document.getElementById(`root`)
  );
};

MainPage.defaultProps = {
  offers: []
};

initApp();

