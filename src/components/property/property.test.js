import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Property} from './property.jsx';
configure({adapter: new Adapter()});


const propertyProps = {
  images: [``],
  isPremium: false,
  title: ``,
  isFavorite: false,
  rating: 0,
  goods: [``],
  price: 0,
  host: {
    avatarURL: ``,
    name: ``,
    isPro: false,
  },
  description: ``,
  maxAdults: 1,
  bedrooms: 1,
  type: ``,
  location: {latitude: 0, longitude: 0},
};

it(`Property page renders correctly`, () => {
  const propertyPage = shallow(<Property
    offersOnMap={[]}
    nearbyOffers={[]}
    activeCity={``}
    id={`0`}
    currentOffer={propertyProps}
  />);
  expect(propertyPage).toMatchSnapshot();
});
