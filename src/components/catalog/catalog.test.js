import React from 'react';
import renderer from 'react-test-renderer';
import {Catalog} from "./catalog.jsx";
import offers from '../../mock/offers';
import leafletMock from './../../mock/leaflet';

it(`catalog renders correctly`, () => {
  const card = renderer
    .create(<Catalog offers={offers} currentCity={`Amsterdam`} filteredOffersLength={4} leaflet={leafletMock} />)
    .toJSON();
  expect(card).toMatchSnapshot();
});
