import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {CityLink} from './city-link.jsx';

configure({adapter: new Adapter()});

const handlerOnClick = jest.fn();

it(`handler function is called after click to the city`, () => {
  const city = shallow(<CityLink
    city={`Amsterdam`}
    currentCity={`Paris`}
    changeCity={handlerOnClick}
    changeCurrentCity={jest.fn()}
  />);
  const link = city.find(`a`);
  link.simulate(`click`, {preventDefault() {}});
  expect(handlerOnClick).toHaveBeenCalled();
});
