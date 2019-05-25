import {mapStateToProps} from "./map";

const inputObject = {
  city: ``,
  offers: [
    {
      id: ``,
      city: ``,
      title: ``,
      photoURL: ``,
      isPremium: false,
      isFavorite: false,
      price: 0,
      type: ``,
      rating: 0,
      coordinates: [52.3809553943508, 4.939309666406198]
    }
  ]
};

const expectedObject = {
  currentCity: ``,
  coordinates: [[52.3809553943508, 4.939309666406198]]
};

it(`should return array of arrays`, () => {
  const newObject = mapStateToProps(inputObject);
  expect(newObject).toEqual(expectedObject);
});

