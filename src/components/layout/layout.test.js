import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Layout from "./layout";

configure({adapter: new Adapter()});

it(`Should render is correctly`, () => {
  const layout = shallow(<Layout />);

  expect(layout).toMatchSnapshot();
});
