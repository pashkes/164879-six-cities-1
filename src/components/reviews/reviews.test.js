import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Reviews} from "./reviews.jsx";

configure({adapter: new Adapter()});

it(`list of reviews renders correctly`, () => {
  const review = shallow(<Reviews isLoading={false} loadData={jest.fn()} reviews={[]} id={0} />);
  expect(review).toMatchSnapshot();
});
