import offers from './mock/offers';

const initialState = {
  city: `Amsterdam`,
  offers: [...offers]
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`
};


const ActionCreators = {
  changeCity: (city) => {
    return {
      type: ActionType.CHANGE_CITY,
      name: city,
    };
  },
  getOffers: (offersList) => {
    return {
      type: ActionType.GET_OFFERS,
      offersList
    };
  },
};

const reducer = (state = initialState, action) => {
  let result;
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      result = Object.assign({}, state, {city: action.name});
      break;
    case ActionType.GET_OFFERS:
      result = Object.assign({}, state, {offers: action.offersList});
      break;
    default:
  }
  return result;
};

export {
  reducer,
  ActionCreators,
  ActionType,
};
