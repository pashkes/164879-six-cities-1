import React from 'react';
import CardPlace from './card-place.jsx';
import renderer from 'react-test-renderer';

it(`renders is correctly`, () => {
  const card = renderer
    .create(<CardPlace/>)
    .toJSON();
  expect(card).toMatchSnapshot();
});
