import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Property} from "./property";

configure({adapter: new Adapter()});

it(`Call callback function when component is did mount`, () => {
  const currentOffer = {
    images: [],
    isPremium: false,
    title: ``,
    isFavorite: false,
    rating: 0,
    goods: [],
    price: 0,
    city: {
      name: `Berlin`
    },
    host: {
      avatarURL: ``,
      name: ``,
      isPro: false,
    },
    description: ``,
    maxAdults: 0,
    bedrooms: 0,
    type: ``,
    location: {
      latitude: 0,
      longitude: 0,
    }
  };
  const onCurrentCity = jest.fn();
  shallow(
      <Property
        id={0}
        currentOffer={currentOffer}
        nearbyOffers={[]}
        currentCity={currentOffer.city.name}
        offersOnMap={[]}
        isAuthorizationRequired={false}
        setCurrentCity={onCurrentCity}
      />
  );
  expect(onCurrentCity).toBeCalled();
  expect(onCurrentCity).toBeCalledWith(currentOffer.city.name);
});
