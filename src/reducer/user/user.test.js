import MockAdapter from "axios-mock-adapter";

import createApi from "./../../api";
import {initialState, Operation, ActionType, reducer, ActionCreators} from "./user";
import Constants from "./../../constants";


describe(`Api works correctly`, () => {
  it(`post login`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const authorization = Operation.authorization(``, ``);

    apiMock
      .onPost(Constants.LOGIN_PATH)
      .reply(Constants.STATUS_OK, false);

    return authorization(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.AUTHORIZATION,
          payload: {},
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.ERROR,
          payload: ``,
        });
      });
  });

  it(`get login`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const authorization = Operation.onCheckAuth();

    apiMock
      .onGet(Constants.LOGIN_PATH)
      .reply(Constants.STATUS_OK, false);

    return authorization(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.AUTHORIZATION,
          payload: {},
        });
      });
  });
});

describe(`Reducer works correctly`, () => {
  it(`should change required authorization`, () => {
    const reducerDoneLogIn = reducer(
        {isAuthRequire: false},
        ActionCreators.requireAuthorization(true)
    );

    expect(reducerDoneLogIn).toEqual({isAuthRequire: true});
  });

  it(`should get correct user data`, () => {
    const userData = {
      id: ``,
      email: ``,
      name: ``,
      avatar: ``,
      isPro: ``,
    };
    const getUserData = reducer(
        {userData: {}},
        ActionCreators.authorization(userData)
    );

    expect(getUserData).toEqual({userData});
  });

  it(`Should return default state`, () => {
    const reducerDone = reducer(
        initialState,
        {
          type: `Unknown_ACTION`,
          payload: `some data`
        }
    );

    expect(reducerDone).toEqual(initialState);
  });

});
