import {reducer} from './reducer';

it(`should change city`, () => {
  const reducerDone = reducer(
      {city: `Dusseldorf`, offers: []},
      {type: `CHANGE_CITY`, city: `Amsterdam`}
  );
  expect(reducerDone).toEqual({city: `Amsterdam`, offers: []});
});
