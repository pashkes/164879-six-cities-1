import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignIn from './sign-in';
configure({adapter: new Adapter()});

it(`city link renders correctly`, () => {
  const currentCity = shallow(<SignIn />);
  expect(currentCity).toMatchSnapshot();
});
