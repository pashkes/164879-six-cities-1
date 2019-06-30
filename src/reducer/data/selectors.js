import {createSelector} from "reselect";

import NameSpace from "../name-spaces";
import Constants from "./../../constants";

const NAME_SPACE = NameSpace.DATA;

export const getCurrentCity = (state) => state[NAME_SPACE].city;

export const getOffers = (state) => state[NAME_SPACE].offers;

export const getSelectedIdOffer = (state) => state[NAME_SPACE].currentOfferId;

export const getTypeSort = (state) => state[NAME_SPACE].typeSort;

export const getStatusSendingReview = (state) => state[NAME_SPACE].isReviewSending;

export const getStatusIsSentReview = (state) => state[NAME_SPACE].isReviewSent;

export const getError = (state) => state[NAME_SPACE].error;

export const getComments = (state, id) => state[NAME_SPACE].reviews[id];

export const getFavorites = (state) => state[NAME_SPACE].favorites;

export const getCitiesFromServer = createSelector(
    getOffers,
    (offers) => {
      return [...new Set([...offers.map((item) => item.city.name)])];
    }
);

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
  return offers.map((offer) => {
    offer.dist = calcDistance(currentOffer.location.longitude, currentOffer.location.latitude, offer.location.longitude, offer.location.latitude);
    return offer;
  })
    .sort((current, next) => {
      return current.dist - next.dist;
    })
    .slice(1, Constants.AMOUNT_NEARBY_OFFERS + 1);
};

const calcDistance = (x1, y1, x2, y2) => Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

export const groupingFavoritesForCities = (state) => {
  const favorites = getFavorites(state);
  if (favorites.length === 0) {
    return false;
  }
  const citiesKeys = [...new Set([...favorites.map((item) => item.city.name)])];
  const group = {};
  citiesKeys.forEach((item) => {
    group[item] = [];
  });
  favorites.forEach((item) => {
    group[item.city.name].push(item);
  });

  return group;
};

export const getSelectedOffer = (state) => {
  const currentOfferId = getSelectedIdOffer(state);
  const offers = getOffers(state);
  const currentOffer = offers.find((item) => item.id === currentOfferId);
  return currentOffer ? [currentOffer.location.latitude, currentOffer.location.longitude] : [0, 0];
};
