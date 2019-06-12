import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Goods from "./goods.jsx";

configure({adapter: new Adapter()});

it(`goods is renders correctly`, () => {
  const goods = shallow(<Goods list={[``]} />);
  expect(goods).toMatchSnapshot();
});
