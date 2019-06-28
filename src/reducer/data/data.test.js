import MockAdapter from "axios-mock-adapter";

import createApi from './../../api';
import {initialState, Operation, ActionType, reducer, ActionCreators} from './data';
import Constants, {TypeSort} from "./../../constants";

describe(`Reducer works correctly`, () => {

  it(`Should make a correctly API load offers`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const offers = Operation.loadData();

    apiMock
      .onGet(Constants.HOTEL_PATH)
      .reply(Constants.STATUS_OK, {fake: true});

    return offers(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: {fake: true},
        });
      });
  });

  it(`Should make a correctly API for load reviews`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const reviews = Operation.loadReviews(1);

    apiMock
      .onGet(`${Constants.COMMENTS_PATH}/1`)
      .reply(Constants.STATUS_OK, {fake: true});

    return reviews(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: {data: {fake: true}, id: 1},
        });
      });
  });

  it(`Should make a correctly API for post review`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const postReview = Operation.postReview(1);

    apiMock
      .onPost(`${Constants.COMMENTS_PATH}/1`)
      .reply(Constants.STATUS_OK, {fake: true});

    return postReview(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.POST_REVIEW,
          payload: {data: {fake: true}, id: 1},
        });
      });
  });

  it(`Should make a correctly API for post review and return error when something went wrong`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const postReview = Operation.postReview(1);

    apiMock
      .onPost(`${Constants.COMMENTS_PATH}/1`)
      .networkError();

    return postReview(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOCK_FORM,
          payload: false,
        });
      });
  });

  it(`Should add loaded reviews correctly`, () => {
    const reviewsFromServer = [{
      id: 0,
      comment: ``,
      date: `2019-06-01T10:38:39.844Z`,
      rating: 1,
      user: {
        name: ``,
        [`avatar_url`]: ``,
        [`is_pro`]: false,
      },
    }];
    const expectReviewsAfterConvert = [{
      id: 0,
      comment: ``,
      date: `June 2019`,
      machineDate: `2019-06-06`,
      rating: 1,
      name: ``,
      avatar: ``,
      isPro: false,
    }];
    const reducerDone = reducer(
        {
          reviews: {}
        },
        ActionCreators.getReviews(reviewsFromServer, 0)
    );
    expect(reducerDone).toEqual({
      reviews: {
        0: expectReviewsAfterConvert,
      },
    });

  });

  it(`Should add loaded offers correctly`, () => {
    const offersFromServer = [{
      id: 0,
      city: {
        name: ``,
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 1,
        }
      },
      price: 0,
      rating: 1,
      title: ``,
      type: ``,
      description: ``,
      goods: [``],
      bedrooms: ``,
      [`is_favorite`]: false,
      [`is_premium`]: false,
      [`preview_image`]: ``,
      [`max_adults`]: ``,
      images: [``],
      host: {
        [`avatar_url`]: ``,
        id: 0,
        [`is_pro`]: false,
        name: ``,
      },
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 1,
      },
    }];

    const expectOfferAfterConvert = [{
      id: 0,
      city: {
        name: ``,
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 1,
        }
      },
      price: 0,
      rating: 20,
      title: ``,
      type: ``,
      description: ``,
      goods: [``],
      bedrooms: ``,
      isFavorite: false,
      isPremium: false,
      previewPhoto: ``,
      maxAdults: ``,
      images: [``],
      host: {
        avatarURL: ``,
        id: 0,
        isPro: false,
        name: ``,
      },
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 1,
      },
    }];
    const reducerDone = reducer(
        {offers: []},
        ActionCreators.loadData(offersFromServer)
    );
    expect(reducerDone).toEqual({
      offers: expectOfferAfterConvert,
    });
  });

  it(`Should set current city`, () => {
    const reducerDone = reducer(
        {city: `Dusseldorf`},
        ActionCreators.setCity(`Amsterdam`)
    );
    expect(reducerDone).toEqual({
      city: `Amsterdam`
    });
  });

  it(`Should set current id of Offer`, () => {
    const reducerDone = reducer(
        {currentOfferId: 0},
        ActionCreators.setActiveIdOffer(1)
    );
    expect(reducerDone).toEqual({
      currentOfferId: 1
    });
  });

  it(`Should set sort type`, () => {
    const reducerDone = reducer(
        {typeSort: TypeSort.POPULAR},
        ActionCreators.setSortType(TypeSort.TOP_RATED)
    );
    expect(reducerDone).toEqual({
      typeSort: {type: TypeSort.TOP_RATED}
    });
  });

  it(`should return default state`, () => {
    const reducerDone = reducer(
        initialState,
        {
          type: `UNKNOWN_TYPE`,
          payload: {unknownField: ``}
        }
    );
    expect(reducerDone).toEqual(initialState);
  });

  it(`should set status sending review`, () => {
    const reducerDone = reducer(
        {isReviewSending: false},
        ActionCreators.lockForm(true)
    );
    expect(reducerDone).toEqual(
        {
          isReviewSending: true,
        }
    );
  });

  it(`should set status whether sent review`, () => {
    const reducerDone = reducer(
        {isReviewSent: false},
        ActionCreators.cleanForm(true)
    );
    expect(reducerDone).toEqual(
        {
          isReviewSent: true,
        }
    );
  });

  it(`should send error message`, () => {
    const reducerDone = reducer(
        {error: ``},
        ActionCreators.showError(`Something went wrong`)
    );
    expect(reducerDone).toEqual(
        {
          error: `Something went wrong`,
        }
    );
  });
});
