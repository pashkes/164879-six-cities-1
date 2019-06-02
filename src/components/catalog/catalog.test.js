import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Catalog} from "./catalog.jsx";

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

it(`catalog renders correctly`, () => {
  const catalog = shallow(
      <Catalog
        offers={inputOffers}
        currentCity={`Amsterdam`}
      />
  );
  expect(catalog).toMatchSnapshot();
});
