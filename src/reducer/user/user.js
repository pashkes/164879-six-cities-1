import Constants from "./../../constants";
import toModelUserDate from "./adapter";

const initialState = {
  isAuthRequire: true,
  userData: {},
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  AUTHORIZATION: `AUTHORIZATION`,
  ERROR: ``,
};

const ActionCreators = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  authorization: (userData) => ({
    type: ActionType.AUTHORIZATION,
    payload: userData
  }),
  setError: (error) => ({
    type: ActionType.ERROR,
    payload: error,
  }),
};

const Operation = {
  authorization: (email, password) => (dispatch, _getState, api) => {
    return api.post(Constants.LOGIN_PATH, {email, password})
      .then(({status, data}) => {
        if (status === Constants.STATUS_OK) {
          dispatch(ActionCreators.requireAuthorization(false));
          dispatch(ActionCreators.authorization(toModelUserDate(data)));
          dispatch(ActionCreators.setError(``));
        }
      })
      .catch(() => dispatch(ActionCreators.setError(`Something went wrong, check filled data 😥😥😥`)));
  },
  onCheckAuth: () => {
    return (dispatch, _getState, api) => {
      return api
        .get(Constants.LOGIN_PATH)
        .then(({status, data}) => {
          if (status === Constants.STATUS_OK) {
            dispatch(ActionCreators.requireAuthorization(false));
            dispatch(ActionCreators.authorization(toModelUserDate(data)));
          }
        });
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {...state, ...{isAuthRequire: action.payload}};
    case ActionType.AUTHORIZATION:
      return {...state, ...{userData: action.payload}};
    case ActionType.ERROR:
      return {...state, ...{error: action.payload}};
    default:
      return state;
  }
};

export {initialState, ActionCreators, ActionType, Operation, reducer};
