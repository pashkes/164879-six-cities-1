import MockAdapter from "axios-mock-adapter";

import createApi from './../../api';
import {Operation, ActionType, reducer, ActionCreators} from './data';

describe(`Reducer works correctly`, () => {

  it(`Should change active city`, () => {
    const reducerDone = reducer(
        {city: `Dusseldorf`},
        ActionCreators.changeCity(`Amsterdam`)
    );
    expect(reducerDone).toEqual({city: `Amsterdam`});
  });

  it(`Should make a correctly API load hotels`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const hotelsLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return hotelsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

});
