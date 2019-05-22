import offers from './mock/offers';


const filterOffers = (offersList, city) => {
  return offers.filter((offer) => offer.city === city);
};

const initialState = {
  city: `Paris`,
  offers
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

const ActionCreators = {
  changeCity: (city) => {
    return {
      type: ActionType.CHANGE_CITY,
      city,
    };
  },
  updateOffers: (city, offersList) => {
    return {
      type: ActionType.GET_OFFERS,
      offersList
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.city});
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {offers: action.offersList});
    default:
      return state;
  }
};

export {
  reducer,
  ActionCreators
};
