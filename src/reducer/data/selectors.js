import {createSelector} from "reselect";

import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;

export const getActiveCity = (state) => state[NAME_SPACE].city;

export const getOffers = (state) => state[NAME_SPACE].offers;

export const getSelectedIdOffer = (state) => state[NAME_SPACE].currentOfferId;

export const getTypeSort = (state) => state[NAME_SPACE].typeSort;

export const getFilteredOffers = createSelector(
    getOffers,
    getActiveCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const getCurrentOffer = (state, id) => {
  const offers = getFilteredOffers(state);
  return offers.find((item) => item.id === Number(id));
};

export const getNearbyOffers = (state, id) => {
  const filterOffers = getFilteredOffers(state);
  const currentOffer = getCurrentOffer(state, id);
  if (filterOffers.length > 0 && currentOffer) {
    return filterOffers.map((it) => {
      it.dist = calcDistance(currentOffer.location.longitude, currentOffer.location.latitude, it.location.longitude, it.location.latitude);
      return it;
    })
      .sort((first, second) => {
        return first.dist - second.dist;
      })
      .slice(1, 4);
  } else {
    return false;
  }
};

export const getComments = (state, id) => state[NAME_SPACE].comments[id] ? state[NAME_SPACE].comments[id] : [];

const calcDistance = (x1, y1, x2, y2) => Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

export const getSelectedOffer = (state) => {
  const currentOfferId = getSelectedIdOffer(state);
  const offers = getFilteredOffers(state);
  if (currentOfferId) {
    const currentOffer = offers.find((item) => item.id === currentOfferId);
    return currentOffer ? [currentOffer.location.latitude, currentOffer.location.longitude] : [0, 0];
  } else {
    return [0, 0];
  }
};
