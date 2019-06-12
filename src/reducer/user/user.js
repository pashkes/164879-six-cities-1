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
        if (status === 200) {
          dispatch(ActionCreators.requireAuthorization(true));
          dispatch(ActionCreators.authorization(toModelUserDate(data)));
        }
      });
  },
  checkAuth: () => {
    return (dispatch, _getState, api) => {
      return api
        .get(`/login`)
        .then((res) => {
          if (res.status === 200) {
            dispatch(ActionCreators.requireAuthorization(true));
            dispatch(ActionCreators.authorization(toModelUserDate(res.data)));
          }
        });
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {isAuthorizationRequired: action.payload});
    case ActionType.AUTHORIZATION:
      return Object.assign({}, state, {authorization: action.payload});
  }
  return state;
};

export {ActionCreators, ActionType, Operation, reducer};
