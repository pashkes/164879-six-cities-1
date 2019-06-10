import MockAdapter from "axios-mock-adapter";

import createApi from "./../../api";
import {Operation, ActionType, reducer, ActionCreators} from "./user";

describe(`Reducer works correctly`, () => {

  it(`should change required authorization`, () => {
    const reducerDoneLogIn = reducer(
        {isAuthorizationRequired: false},
        ActionCreators.requireAuthorization(true)
    );

    expect(reducerDoneLogIn).toEqual({isAuthorizationRequired: true});
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
        {authorization: {}},
        ActionCreators.authorization(userData)
    );

    expect(getUserData).toEqual({authorization: userData});
  });

  it(`Should make a correctly API post login`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const authorization = Operation.authorization(``, ``);

    apiMock
      .onPost(`/login`)
      .reply(200, true);

    return authorization(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: true,
        });
      });
  });

});
