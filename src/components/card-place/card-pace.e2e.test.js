import React from 'react';
import {shallow, configure} from 'enzyme';
import CardPlace from './card-place.jsx';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const clickHandler = jest.fn();
it(`simulate click to the title of card`, () => {
  const card = shallow(<CardPlace onTitleClickHandler={clickHandler}/>);
  card.find(`.place-card__name a`).simulate(`click`);
  expect(clickHandler).toHaveBeenCalled();
});
