import Constants from "./../../constants";
import toModelOffer from "./adapter";

const initialState = {
  offers: [],
  city: Constants.DEFAULT_CITY,
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
};

const ActionCreators = {
  loadOffers: (hotels) => ({
    type: ActionType.LOAD_OFFERS,
    payload: hotels,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    city,
  })
};

const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(Constants.HOTEL_PATH)
      .then((response) => {
        dispatch(ActionCreators.loadOffers(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {offers: toModelOffer(action.payload)});
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.city});
  }
  return state;
};

export {ActionType, Operation, reducer, ActionCreators};
