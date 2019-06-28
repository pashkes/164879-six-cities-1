import {createSelector} from "reselect";

import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;

export const getCurrentCity = (state) => state[NAME_SPACE].city;

export const getOffers = (state) => state[NAME_SPACE].offers;

export const getSelectedIdOffer = (state) => state[NAME_SPACE].currentOfferId;

export const getTypeSort = (state) => state[NAME_SPACE].typeSort;

export const getStatusSendingReview = (state) => state[NAME_SPACE].isReviewSending;

export const getStatusIsSentReview = (state) => state[NAME_SPACE].isReviewSent;

export const getError = (state) => state[NAME_SPACE].error;

export const getFilteredOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const getCurrentOffer = (state, id) => {
  const offers = getOffers(state);
  return offers.find((item) => item.id === Number(id));
};

export const getNearbyOffers = (state, id) => {
  const offers = getOffers(state);
  const currentOffer = getCurrentOffer(state, id);

  if (offers.length > 0 && currentOffer) {
    return offers.map((offer) => {
      offer.dist = calcDistance(currentOffer.location.longitude, currentOffer.location.latitude, offer.location.longitude, offer.location.latitude);
      return offer;
    })
      .sort((current, next) => {
        return current.dist - next.dist;
      })
      .slice(1, 4);
  } else {
    return false;
  }
};

export const getComments = (state, id) => {
  return state[NAME_SPACE].reviews[id];
};

const calcDistance = (x1, y1, x2, y2) => Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

export const getSelectedOffer = (state) => {
  const currentOfferId = getSelectedIdOffer(state);
  const offers = getOffers(state);
  const currentOffer = offers.find((item) => item.id === currentOfferId);
  return currentOffer ? [currentOffer.location.latitude, currentOffer.location.longitude] : [0, 0];
};
