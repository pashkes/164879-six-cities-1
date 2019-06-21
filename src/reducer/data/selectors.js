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

export const getNearbyOffers = createSelector(
    getFilteredOffers,
    (offers) => offers.sort().slice(-3)
);

export const getCurrentOffer = (state, id) => {
  return state[NAME_SPACE].offers.find((item) => item.id === Number(id));
};

export const filterRandomOffers = createSelector(
    getNearbyOffers,
    (offers) => offers.map((it) => [it.location.latitude, it.location.longitude])
);

export const getComments = (state, id) => {
  return state[NAME_SPACE][id] ? state[NAME_SPACE][id] : [];
};
