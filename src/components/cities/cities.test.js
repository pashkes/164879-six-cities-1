import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Cities, mapStateToProps} from './cities.jsx';

configure({adapter: new Adapter()});

const inputOffers = [
  {city: `Amsterdam`},
  {city: `Paris`},
  {city: `Cologne`},
  {city: `Hamburg`},
  {city: `Dusseldorf`}
];

const mockCities = [
  `Amsterdam`,
  `Paris`,
  `Cologne`,
  `Hamburg`,
  `Dusseldorf`
];

it(`cities renders correctly`, () => {
  const cities = shallow(<Cities cities={mockCities} changeCurrentCity={jest.fn} changeCity={jest.fn()}/>);
  expect(cities).toMatchSnapshot();
});

it(`should return state object with unique list cities`, () => {
  const state = mapStateToProps({
    offers: inputOffers,
    city: `Amsterdam`
  });
  expect(state).toEqual({
    cities: mockCities
  });
});
