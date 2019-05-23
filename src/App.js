import React from 'react';
import MainPage from './components/catalog/catalog.jsx';
import leaflet from 'leaflet';

const App = () =>{
  return <MainPage leaflet={leaflet}/>;
};

export default App;
