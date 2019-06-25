import Constants, {TypeSort} from "./../../constants";
import {toModelOffer, toModelReview} from "./adapter";

const initialState = {
  offers: [],
  city: Constants.DEFAULT_CITY,
  comments: {},
  currentOfferId: false,
  typeSort: TypeSort.POPULAR,
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  ACTIVE_OFFER: `ACTIVE_OFFER`,
  SORT_TYPE: `SORT_TYPE`,
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
  getReviews: (comments, id) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: {id, data: comments},
  }),
  idActiveOffer: (id) => ({
    type: ActionType.ACTIVE_OFFER,
    payload: id,
  }),
  changeSortType: (type) => ({
    type: ActionType.SORT_TYPE,
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
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
    case ActionType.LOAD_REVIEWS:
      const comments = Object.assign(
          {},
          state.comments,
          toModelReview(action.payload)
      );
      return Object.assign({}, state, {
        comments
      });
    case ActionType.ACTIVE_OFFER:
      return Object.assign({}, state, {currentOfferId: action.payload});
    case ActionType.SORT_TYPE:
      return Object.assign({}, state, {typeSort: action.payload});
  }
  return state;
};

export {ActionType, Operation, reducer, ActionCreators};
