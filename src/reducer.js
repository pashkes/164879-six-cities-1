import offers from './mock/offers';


const filterOffers = (offersList, city) => {
  return offersList.filter((offer) => {
    return offer.city === city;
  });
};

const initialState = {
  city: `Paris`,
  offers
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  FILTER_OFFERS: `FILTER_OFFERS`
};

const ActionCreators = {
  changeCity: (city) => {
    return {
      type: ActionType.CHANGE_CITY,
      city,
    };
  },
  filterOffers: (city, offersList) => {
    return {
      type: ActionType.FILTER_OFFERS,
      offersList: filterOffers(city, [...offersList])
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.city});
    case ActionType.FILTER_OFFERS:
      return Object.assign({}, state, {offers: action.offersList});
    default:
      return state;
  }
};

export {
  reducer,
  ActionCreators
};
