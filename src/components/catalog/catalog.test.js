import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Catalog} from "./catalog.jsx";

configure({adapter: new Adapter()});

const inputOffers = [
  {
    id: 0,
    city: `Amsterdam`,
    title: ``,
    previewPhoto: ``,
    isPremium: false,
    isFavorite: false,
    price: 0,
    type: ``,
    rating: 0,
    coordinates: [0, 0]
  },
  {
    id: 1,
    city: `Berlin`,
    title: ``,
    previewPhoto: ``,
    isPremium: false,
    isFavorite: false,
    price: 0,
    type: ``,
    rating: 0,
    coordinates: [0, 0]
  }
];

describe(`main page render is correctly`, () => {
  it(`if have offers`, () => {
    const catalog = shallow(
        <Catalog
          cities={[`Kiev`, `Amsterdam`]}
          coordinates={[0, 0]}
          offers={inputOffers}
          currentCity={``}
        />
    );
    expect(catalog).toMatchSnapshot();
  });

  it(`if don't have offers`, () => {
    const catalog = shallow(
        <Catalog
          cities={[``]}
          coordinates={[0, 0]}
          offers={[]}
          currentCity={``}
        />
    );
    expect(catalog).toMatchSnapshot();
  });
});

