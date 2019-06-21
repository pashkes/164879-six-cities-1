import Constants from "./../../constants";
import {toModelOffer, toModelReview} from "./adapter";

const initialState = {
  offers: [],
  city: Constants.DEFAULT_CITY,
  comments: {},
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

const ActionCreators = {
  loadOffers: (hotels) => ({
    type: ActionType.LOAD_OFFERS,
    payload: hotels,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getReviews: (comments, id) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: {id, data: comments},
    };
  },
};

const Operation = {
  loadOffers: () => {
    return (dispatch, _getState, api) => {
      return api.get(Constants.HOTEL_PATH)
        .then(({data}) => {
          dispatch(ActionCreators.loadOffers(data));
        });
    };
  },
  loadReviews: (id) => {
    return (dispatch, _getState, api) => {
      return api.get(`${Constants.COMMENTS_PATH}/${id}`)
        .then(({data}) => {
          dispatch(ActionCreators.getReviews(data, id));
        });
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {offers: toModelOffer(action.payload)});
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
    case ActionType.LOAD_REVIEWS:
      return Object.assign({}, state, toModelReview(action.payload));
  }
  return state;
};

export {ActionType, Operation, reducer, ActionCreators};
