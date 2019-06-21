import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Review from "./review.jsx";

configure({adapter: new Adapter()});


const reviewMock = {
  id: `0`,
  comment: ``,
  date: ``,
  machineDate: ``,
  rating: 0,
  name: ``,
  avatar: ``,
  isPro: false,
};

it(`review renders correctly`, () => {
  const review = shallow(<Review {...reviewMock} />);
  expect(review).toMatchSnapshot();
});
