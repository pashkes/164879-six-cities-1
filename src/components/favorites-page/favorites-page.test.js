import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {FavoritesPage} from "./favorites-page.jsx";

configure({adapter: new Adapter()});

describe(`Should correctly render`, () => {
  it(`favorites page is renders correctly`, () => {
    const favorites = shallow(<FavoritesPage cities={[`Amsterdam`]} favorites={{}} isLoading={false} loadFavorites={jest.fn()} />);
    expect(favorites).toMatchSnapshot();
  });

  it(`Should render empty favorites page if bookmarks is none`, () => {
    const favorites = shallow(<FavoritesPage cities={[]} favorites={{}} isLoading={false} loadFavorites={jest.fn()} />);
    expect(favorites).toMatchSnapshot();
  });
});
