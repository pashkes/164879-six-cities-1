import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Spinner from './spinner.jsx';
configure({adapter: new Adapter()});

it(`Spinner renders correctly`, () => {
  const signIn = shallow(<Spinner />);
  expect(signIn).toMatchSnapshot();
});
