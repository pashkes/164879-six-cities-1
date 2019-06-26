import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Rating from "./rating.jsx";
configure({adapter: new Adapter()});

it(`Rating should render correctly`, () => {
  const option = shallow(<Rating
    onChangeRating={jest.fn()}
  />);
  expect(option).toMatchSnapshot();
});
