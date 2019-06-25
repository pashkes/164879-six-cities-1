import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Option} from './option.jsx';
configure({adapter: new Adapter()});

it(`Option renders correctly`, () => {
  const option = shallow(<Option button={{}} name={`Popular`} typeSort={jest.fn()} onSelect={jest.fn()} value={``} isSelected={true} />);
  expect(option).toMatchSnapshot();
});
