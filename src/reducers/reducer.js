import offers from '../mock/offers';


const initialState = {
  city: `Amsterdam`,
  offers,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
};

const ActionCreators = {
  changeCity: (city) => {
    return {
      type: ActionType.CHANGE_CITY,
      city,
    };
  },
};

const reducer = (state = initialState, action) => {
  if (action.type === ActionType.CHANGE_CITY) {
    return Object.assign({}, state, {city: action.city});
  }
  return state;
};

export {
  reducer,
  ActionCreators
};
