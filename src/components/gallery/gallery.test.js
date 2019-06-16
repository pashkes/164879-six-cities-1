import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Gallery from "./gallery.jsx";

configure({adapter: new Adapter()});

it(`gallery is renders correctly`, () => {
  const gallery = shallow(<Gallery photos={[``]} />);
  expect(gallery).toMatchSnapshot();
});
