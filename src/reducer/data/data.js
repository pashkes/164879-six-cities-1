import Constants, {TypeSort} from "./../../constants";
import {toModelOffer, toModelReview} from "./adapter";

const initialState = {
  offers: [],
  city: Constants.DEFAULT_CITY,
  reviews: {},
  currentOfferId: false,
  typeSort: TypeSort.POPULAR,
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_CITY: `SET_CITY`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
};

const ActionCreators = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  getReviews: (reviews, id) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: {id, data: reviews},
  }),
  setActiveIdOffer: (id) => ({
    type: ActionType.SET_CURRENT_OFFER,
    payload: id,
  }),
  setSortType: (type) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: {type}
  }),
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
    case ActionType.SET_CITY:
      return Object.assign({}, state, {city: action.payload});
    case ActionType.LOAD_REVIEWS:
      const reviews = Object.assign(
          {},
          state.reviews,
          toModelReview(action.payload)
      );
      return Object.assign({}, state, {
        reviews
      });
    case ActionType.SET_CURRENT_OFFER:
      return Object.assign({}, state, {currentOfferId: action.payload});
    case ActionType.SET_SORT_TYPE:
      return Object.assign({}, state, {typeSort: action.payload});
  }
  return state;
};

export {ActionType, Operation, reducer, ActionCreators};
