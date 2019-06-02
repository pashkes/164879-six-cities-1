import Constants from './../../constants';

const initialState = {
  offers: [],
  city: Constants.DEFAULT_CITY,
};

const getRelatedRating = (rating) => rating * 100 / Constants.MAX_RATING;
const toModelOffer = (data) => ({
  id: data.id,
  city: {
    name: data.city.name,
    location: {
      latitude: data.city.location.latitude,
      longitude: data.city.location.longitude,
      zoom: data.city.location.zoom,
    }
  },
  price: data.price,
  rating: getRelatedRating(data.rating),
  title: data.title,
  type: data.type,
  description: data.description,
  goods: data.goods,
  bedrooms: data.bedrooms,
  isFavorite: data[`is_favorite`],
  isPremium: data[`is_premium`],
  previewPhoto: data[`preview_image`],
  maxAdults: data[`max_adults`],
  images: data.images,
  host: {
    avatarURL: data.host[`avatar_url`],
    id: data.host.id,
    isPro: data.host[`is_pro`],
    name: data.host.name,
  },
  location: {
    latitude: data.location.latitude,
    longitude: data.location.longitude,
    zoom: data.location.zoom,
  },
});

const transformHotels = (hotels) => hotels.map((item) => toModelOffer(item));

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
};

const ActionCreators = {
  loadOffers: (hotels) => ({
    type: ActionType.LOAD_OFFERS,
    payload: hotels,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    city,
  })
};

const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(Constants.HOTEL_PATH)
      .then((response) => {
        dispatch(ActionCreators.loadOffers(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {offers: transformHotels(action.payload)});
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.city});
  }
  return state;
};

export {ActionType, Operation, reducer, ActionCreators};
