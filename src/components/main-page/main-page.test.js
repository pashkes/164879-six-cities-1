import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from "./main-page";
import offers from './../../mock/offers';

it(`main page renders correctly`, () => {
  const card = renderer
    .create(<MainPage offers={offers}/>)
    .toJSON();
  expect(card).toMatchSnapshot();
});
