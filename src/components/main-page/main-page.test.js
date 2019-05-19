import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from "./main-page";
import offers from './../../mock/offers';
import leafletMock from './../../mock/leaflet';

const citiesCoordinates = offers.map((it) => it.coordinates);

it(`main page renders correctly`, () => {
  const card = renderer
    .create(<MainPage offers={offers} cities={citiesCoordinates} leaflet={leafletMock}/>)
    .toJSON();
  expect(card).toMatchSnapshot();
});
