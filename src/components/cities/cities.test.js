import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Cities} from './cities.jsx';

configure({adapter: new Adapter()});

const mockCities = [
  `Amsterdam`,
  `Paris`,
  `Cologne`,
  `Hamburg`,
  `Dusseldorf`
];

it(`cities renders correctly`, () => {
  const cities = shallow(<Cities cities={mockCities} onChangeCity={jest.fn} />);
  expect(cities).toMatchSnapshot();
});

