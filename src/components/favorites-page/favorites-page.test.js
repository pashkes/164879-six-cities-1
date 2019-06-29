import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {FavoritesPage} from "./favorites-page.jsx";

configure({adapter: new Adapter()});

it(`favorites page is renders correctly`, () => {
  const favorites = shallow(<FavoritesPage cities={[]} favorites={{}} isLoading={false} loadData={jest.fn()} />);
  expect(favorites).toMatchSnapshot();
});
