import Constants from "./../../constants";
import toModelUserDate from "./adapter";

const initialState = {
  isAuthorizationRequired: false,
  authorization: {}
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  AUTHORIZATION: `AUTHORIZATION`
};

const ActionCreators = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  authorization: (userData) => ({
    type: ActionType.AUTHORIZATION,
    payload: userData
  })
};

const Operation = {
  authorization: (email, password) => (dispatch, _getState, api) => {
    return api.post(Constants.LOGIN_PATH, {email, password})
      .then(({status, data}) => {
        if (status === Constants.STATUS_OK) {
          dispatch(ActionCreators.requireAuthorization(true));
          dispatch(ActionCreators.authorization(toModelUserDate(data)));
        }
      });
  },
  checkAuth: () => {
    return (dispatch, _getState, api) => {
      return api
        .get(Constants.LOGIN_PATH)
        .then(({status, data}) => {
          if (status === Constants.STATUS_OK) {
            dispatch(ActionCreators.requireAuthorization(true));
            dispatch(ActionCreators.authorization(toModelUserDate(data)));
          }
        });
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {...state, ...{isAuthorizationRequired: action.payload}};
    case ActionType.AUTHORIZATION:
      return {...state, ...{authorization: action.payload}};
    default:
      return state;
  }
};

export {initialState, ActionCreators, ActionType, Operation, reducer};
