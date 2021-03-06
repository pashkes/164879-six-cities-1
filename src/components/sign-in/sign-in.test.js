import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SignIn from './sign-in';
configure({adapter: new Adapter()});

it(`Sign in page renders correctly`, () => {
  const signIn = shallow(<SignIn />);
  expect(signIn).toMatchSnapshot();
});
