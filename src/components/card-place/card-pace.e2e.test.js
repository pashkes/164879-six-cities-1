import React from 'react';
import {shallow, configure} from 'enzyme';
import CardPlace from './card-place.jsx';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it(`simulate click to the title of card`, () => {
  const cardComponent = shallow(<CardPlace/>);
  cardComponent.find(`.place-card__name a`).simulate(`click`);
  expect(jest.fn()).toHaveBeenCalled();
});
