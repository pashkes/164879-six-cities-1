import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Favorites from "./favorite-button.jsx";

configure({adapter: new Adapter()});

it(`favorite button is renders correctly`, () => {
  const favoriteButton = shallow(<Favorites
    height={`0`}
    width={`0`}
    isFavorite={false}
    id={0}
    prefixClass={``}
    isAuthorizationRequired={true}
    addToFavorites={jest.fn()}
    history={{}}
  />);
  expect(favoriteButton).toMatchSnapshot();
});
