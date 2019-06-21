import NameSpace from "../name-spaces";
import {createSelector} from "reselect";

const NAME_SPACE = NameSpace.DATA;

export const getActiveCity = (state) => {
  return state[NAME_SPACE].city;
};

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getFilteredOffers = createSelector(
    getOffers,
    getActiveCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const getCoordinatesOfCurrentCity = createSelector(
    getFilteredOffers,
    (offers) => offers.map((it) => [it.location.latitude, it.location.longitude])
);

export const getCurrentOffer = (state, id) => {
  return state[NAME_SPACE].offers.find((item) => item.id === Number(id));
};

export const getNearbyOffers = (state, id) => {
  const filterOffers = getFilteredOffers(state);
  const currentOffer = getCurrentOffer(state, id);
  if (filterOffers.length > 0) {
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


export const filterNearbyOffers = (state, id) => {
  const nearbyOffers = getNearbyOffers(state, id);
  return nearbyOffers ? nearbyOffers.map((it) => [it.location.latitude, it.location.longitude]) : [[0, 0]];
};

export const getComments = (state, id) => {
  return state[NAME_SPACE].comments[id] ? state[NAME_SPACE].comments[id] : [];
};

const getDifference = (num1, num2) => {
  if (num1 > num2) {
    return (num1 - num2);
  } else {
    return (num2 - num1);
  }
};

const calcDistance = (x1, y1, x2, y2) => {
  const deltaX = getDifference(x1, x2);
  const deltaY = getDifference(y1, y2);
  return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
};
