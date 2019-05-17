import React from 'react';
import CardPlace from './card-place.jsx';
import renderer from 'react-test-renderer';

describe(`renders correctly`, () => {
  it(`in the default state`, () => {
    const card = renderer
      .create(<CardPlace
        id={`dsdsd`}
        title={``}
        photoURL={``}
        isPremium={false}
        isFavorite={false}
        price={0}
        type={``}
        rating={0}
      />)
      .toJSON();
    expect(card).toMatchSnapshot();
  });

  it(`if the card is favorite`, () => {
    const cardIsFavorite = renderer
      .create(<CardPlace
        id={`fcdx34`}
        title={``}
        photoURL={``}
        isPremium={false}
        isFavorite={true}
        price={0}
        type={``}
        rating={0}
      />)
      .toJSON();
    expect(cardIsFavorite).toMatchSnapshot();
  });

  it(`if the card is premium`, () => {
    const cardIsPremium = renderer
      .create(<CardPlace
        id={`ds43d`}
        title={``}
        photoURL={``}
        isPremium={true}
        isFavorite={false}
        price={0}
        type={``}
        rating={0}
      />)
      .toJSON();
    expect(cardIsPremium).toMatchSnapshot();
  });
});
