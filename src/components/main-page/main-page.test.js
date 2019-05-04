import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from "./main-page";
import OFFERS_MOCK from './../../mock-data';

it(`main page renders correctly`, () => {
  const card = renderer
    .create(<MainPage offers={OFFERS_MOCK}/>)
    .toJSON();
  expect(card).toMatchSnapshot();
});
