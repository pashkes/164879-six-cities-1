import MockAdapter from 'axios-mock-adapter';

import createApi from './../../api';
import {Operation, ActionType} from './user';

describe(`Reducer works correctly`, () => {

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
