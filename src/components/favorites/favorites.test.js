import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Favorites from "./favorites.jsx";

configure({adapter: new Adapter()});

it(`favorites is renders correctly`, () => {
  const favorites = shallow(<Favorites history={{}} changeCity={jest.fn()} cities={[`Amsterdam`]} favorites={{'Amsterdam': []}} />);
  expect(favorites).toMatchSnapshot();
});
