import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Option from './option.jsx';
configure({adapter: new Adapter()});

it(`Option in page renders correctly`, () => {
  const signIn = shallow(<Option onSelected={jest.fn()} value={``} isSelected={true} />);
  expect(signIn).toMatchSnapshot();
});
