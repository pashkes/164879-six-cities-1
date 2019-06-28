import Constants, {TypeSort} from "./../../constants";
import {toModelOffer, toModelReview} from "./adapter";

const initialState = {
  offers: [],
  city: Constants.DEFAULT_CITY,
  reviews: {},
  currentOfferId: false,
  typeSort: TypeSort.POPULAR,
  isReviewSending: false,
  isReviewSent: false,
  error: ``,
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  SET_CITY: `SET_CITY`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  POST_REVIEW: `POST_REVIEW`,
  LOCK_FORM: `LOCK_FORM`,
  CLEAN_FORM: `CLEAN_FORM`,
  SHOW_ERROR: `SHOW_ERROR`,
};

const ActionCreators = {
  loadData: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  getReviews: (reviews, id) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: {id, data: reviews},
  }),
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  setActiveIdOffer: (id) => ({
    type: ActionType.SET_CURRENT_OFFER,
    payload: id,
  }),
  setSortType: (type) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: {type}
  }),
  postReview: (review, id) => ({
    type: ActionType.POST_REVIEW,
    payload: {id, data: review},
  }),
  lockForm: (isLock) => ({
    type: ActionType.LOCK_FORM,
    payload: isLock,
  }),
  cleanForm: (isSent) => ({
    type: ActionType.CLEAN_FORM,
    payload: isSent,
  }),
  showError: (error) => ({
    type: ActionType.SHOW_ERROR,
    payload: error,
  }),
};

const Operation = {
  loadData: () => {
    return (dispatch, _getState, api) => {
      return api.get(Constants.HOTEL_PATH)
        .then(({data}) => {
          dispatch(ActionCreators.loadData(data));
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
  postReview: (offerId, dataOffer) => {
    return (dispatch, _getState, api) => {
      return api.post(`${Constants.COMMENTS_PATH}/${offerId}`, dataOffer)
        .then((response) => {
          dispatch(ActionCreators.postReview(response.data, offerId));
          dispatch(ActionCreators.lockForm(false));
          dispatch(ActionCreators.cleanForm(true));
          dispatch(ActionCreators.showError(``));
        })
        .catch(() => {
          dispatch(ActionCreators.lockForm(false));
          dispatch(ActionCreators.showError(`Something went wrong 😥😥😥`));
        });
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {...state, ...{offers: toModelOffer(action.payload)}};
    case ActionType.SET_CITY:
      return {...state, ...{city: action.payload}};
    case ActionType.LOAD_REVIEWS:
      const reviews = {...state.reviews, ...toModelReview(action.payload)};
      return {...state, ...{reviews}};
    case ActionType.SET_CURRENT_OFFER:
      return {...state, ...{currentOfferId: action.payload}};
    case ActionType.SET_SORT_TYPE:
      return {...state, ...{typeSort: action.payload}};
    case ActionType.POST_REVIEW:
      const newReviews = {...state.reviews, ...toModelReview(action.payload)};
      return {...state, ...{reviews: newReviews}};
    case ActionType.LOCK_FORM:
      return {...state, ...{isReviewSending: action.payload}};
    case ActionType.CLEAN_FORM:
      return {...state, ...{isReviewSent: action.payload}};
    case ActionType.SHOW_ERROR:
      return {...state, ...{error: action.payload}};
    default:
      return state;
  }
};

export {initialState, ActionType, Operation, reducer, ActionCreators};
