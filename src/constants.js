const Constants = {
  CITIES: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`, `Kiev`],
  DEFAULT_CITY: `Amsterdam`,
  BASE_URL: `https://es31-server.appspot.com/six-cities`,
  HOTEL_PATH: `/hotels`,
  LOGIN_PATH: `/login`,
  COMMENTS_PATH: `/comments`,
  ACCESS_DENIED: 403,
  STATUS_OK: 200,
  TIMEOUT: 5000,
  MAX_RATING: 5,
};

export const Page = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer`
};

export const TypeSort = {
  POPULAR: `popular`,
  TO_HIGH: `to-high`,
  TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

export const KeyCode = {
  ESC: 27,
  ENTER: 13,
};

export const CommentLength = {
  MIN: 50,
  MAX: 300,
};

export default Constants;
