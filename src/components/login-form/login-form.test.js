import React from 'react';
import {LoginForm} from "./login-form.jsx";
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it(`Login form renders correctly`, () => {
  const cards = shallow(<LoginForm
    onChangeEmail={jest.fn()}
    onChangePassword={jest.fn()}
    logIn={jest.fn()}
  />);
  expect(cards).toMatchSnapshot();
});
