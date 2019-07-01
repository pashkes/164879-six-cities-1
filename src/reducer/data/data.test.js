import MockAdapter from "axios-mock-adapter";

import createApi from './../../api';
import {initialState, Operation, ActionType, reducer, ActionCreators} from './data';
import Constants, {TypeSort} from "./../../constants";


describe(`Should make a correctly API`, () => {

  it(`load offers`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const offers = Operation.loadOffers();
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

  it(`load reviews`, () => {
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

  it(`post review`, () => {
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
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOCK_FORM,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.CLEAN_FORM,
          payload: true,
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.SHOW_ERROR,
          payload: ``,
        });
      });
  });

  it(`post review and return error when something went wrong`, () => {
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
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SHOW_ERROR,
          payload: Constants.ERROR_MESSAGE,
        });
      });
  });

  it(`add to favorite`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const id = 1;
    const addToFavorite = Operation.addToFavorites(id);
    apiMock
      .onPost(`${Constants.FAVORITE_PATH}/${id}/1`)
      .reply(Constants.STATUS_OK, {fake: true});
    return addToFavorite(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toBeCalled();
        expect(dispatch).toBeCalledWith(
            {
              type: ActionType.ADD_TO_FAVORITE,
              payload: {fake: true}
            }
        );
      });
  });

  it(`remove from favorite`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const id = 1;
    const removeFromFavorite = Operation.removeFromFavorites(id);
    apiMock
      .onPost(`${Constants.FAVORITE_PATH}/${id}/0`)
      .reply(Constants.STATUS_OK, {fake: true});
    return removeFromFavorite(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toBeCalled();
        expect(dispatch).toBeCalledWith(
            {
              type: ActionType.REMOVE_FROM_FAVORITE,
              payload: {fake: true}
            }
        );
      });
  });

  it(`load favorites`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const loadFavorites = Operation.loadFavorites();
    apiMock
      .onGet(Constants.FAVORITE_PATH)
      .reply(Constants.STATUS_OK, {fake: true});
    return loadFavorites(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toBeCalled();
        expect(dispatch).toBeCalledWith(
            {
              type: ActionType.LOAD_FAVORITES,
              payload: {fake: true}
            }
        );
      });
  });

});

describe(`Reducer works correctly`, () => {
  it(`add loaded offers`, () => {
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
        ActionCreators.loadOffers(offersFromServer)
    );
    expect(reducerDone).toEqual({
      offers: expectOfferAfterConvert,
    });
  });

  it(`set current city`, () => {
    const reducerDone = reducer(
        {city: `Dusseldorf`},
        ActionCreators.setCity(`Amsterdam`)
    );
    expect(reducerDone).toEqual({
      city: `Amsterdam`
    });
  });

  it(`set loaded reviews`, () => {
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

  it(`set current id of Offer`, () => {
    const reducerDone = reducer(
        {currentOfferId: 0},
        ActionCreators.setActiveIdOffer(1)
    );
    expect(reducerDone).toEqual({
      currentOfferId: 1
    });
  });

  it(`set sort type`, () => {
    const reducerDone = reducer(
        {typeSort: TypeSort.POPULAR},
        ActionCreators.setSortType(TypeSort.TOP_RATED)
    );
    expect(reducerDone).toEqual({
      typeSort: {type: TypeSort.TOP_RATED}
    });
  });

  it(`add new review`, () => {

    const reducerDone = reducer(
        {reviews: {}},
        ActionCreators.postReview([{
          id: 1,
          comment: ``,
          date: `2019-06-01T10:38:39.844Z`,
          rating: 1,
          user: {
            name: ``,
            [`avatar_url`]: ``,
            [`is_pro`]: false,
          },
        }], 1)
    );
    expect(reducerDone).toEqual({
      reviews: {'1': [{
        id: 1,
        comment: ``,
        date: `June 2019`,
        machineDate: `2019-06-06`,
        rating: 1,
        name: ``,
        avatar: ``,
        isPro: false,
      }]}
    });
  });

  it(`set status sending review`, () => {
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

  it(`set status whether sent review`, () => {
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

  it(`send error message`, () => {
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

  it(`add loaded favorites`, () => {
    const reducerDone = reducer(
        {favorites: []},
        ActionCreators.loadFavorites([
          {
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
            [`is_favorite`]: true,
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
          }
        ])
    );
    expect(reducerDone).toEqual({
      favorites: [
        {
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
          isFavorite: true,
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
        }
      ]
    });
  });

  it(`return default state`, () => {
    const reducerDone = reducer(
        initialState,
        {
          type: `UNKNOWN_TYPE`,
          payload: {unknownField: ``}
        }
    );
    expect(reducerDone).toEqual(initialState);
  });
});
