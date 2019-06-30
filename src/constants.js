const Constants = {
  CITIES: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`, `Kiev`],
  DEFAULT_CITY: `Amsterdam`,
  BASE_URL: `https://es31-server.appspot.com/six-cities`,
  HOTEL_PATH: `/hotels`,
  LOGIN_PATH: `/login`,
  COMMENTS_PATH: `/comments`,
  FAVORITE_PATH: `/favorite`,
  ACCESS_DENIED: 403,
  STATUS_OK: 200,
  TIMEOUT: 5000,
  MAX_RATING: 5,
  MAX_SHOWN_REVIEWS: 10,
  AMOUNT_NEARBY_OFFERS: 3,
  MAX_AMOUNT_PHOTO: 6,
};

export const CITIES = new Map([
  [`Paris`, [48.856613, 2.352222]],
  [`Cologne`, [50.937531, 6.960279]],
  [`Brussels`, [50.850346, 4.351721]],
  [`Amsterdam`, [52.370216, 4.895168]],
  [`Hamburg`, [53.551086, 9.993682]],
  [`Dusseldorf`, [51.227741, 6.773456]]
]);

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

export const SortOptions = [
  {
    name: `Popular`,
    value: TypeSort.POPULAR,
    selected: true,
  },
  {
    name: `Price: low to high`,
    value: TypeSort.TO_HIGH,
    selected: false,
  },
  {
    name: `Price: high to low`,
    value: TypeSort.TO_LOW,
    selected: false,
  },
  {
    name: `Top rated first`,
    value: TypeSort.TOP_RATED,
    selected: false,
  }
];


export default Constants;
