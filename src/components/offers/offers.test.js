import React from 'react';
import {Offers} from "./../offers/offers";
import offers from '../../mock/offers';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mapStateToProps} from './offers.jsx';

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

it(`list of offers renders correctly`, () => {
  const cards = shallow(<Offers offers={offers}/>);
  expect(cards).toMatchSnapshot();
});

it(`should return array with unique list of offer`, () => {
  const filteredOffers = mapStateToProps({
    city: `Amsterdam`,
    offers: inputOffers
  });
  expect(filteredOffers).toEqual({
    offers: expectedOffers
  });
});
