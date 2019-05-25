import React from 'react';
import {Map} from './map.jsx';
import renderer from 'react-test-renderer';

const coordinates = [[52.3809553943508, 4.939309666406198]];

it(`map render is correctly`, () => {
  const map = renderer
    .create(<Map currentCity={`Amsterdam`} coordinates={coordinates}/>)
    .toJSON();
  expect(map).toMatchSnapshot();
});
