import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Catalog, mapStateToProps} from "./catalog.jsx";

configure({adapter: new Adapter()});

const inputOffers = [
  {
    id: ``,
    city: `Amsterdam`,
    title: ``,
    photoURL: ``,
    isPremium: false,
    isFavorite: false,
    price: 0,
    type: ``,
    rating: 0,
    coordinates: [0, 0]
  },
  {
    id: ``,
    city: `Berlin`,
    title: ``,
    photoURL: ``,
    isPremium: false,
    isFavorite: false,
    price: 0,
    type: ``,
    rating: 0,
    coordinates: [0, 0]
  }
];

const expectedOffers = [
  {
    id: ``,
    city: `Amsterdam`,
    title: ``,
    photoURL: ``,
    isPremium: false,
    isFavorite: false,
    price: 0,
    type: ``,
    rating: 0,
    coordinates: [0, 0]
  }
];

it(`catalog renders correctly`, () => {
  const catalog = shallow(
      <Catalog
        offers={inputOffers}
        currentCity={`Amsterdam`}
      />
  );
  expect(catalog).toMatchSnapshot();
});

it(`should return object array with filtered selected city`, () => {
  const filteredOffers = mapStateToProps({
    city: `Amsterdam`,
    offers: inputOffers
  });
  expect(filteredOffers).toEqual({
    currentCity: `Amsterdam`,
    offers: expectedOffers
  });
});

