import React from 'react';
import CardPlace from './card-place.jsx';
import renderer from 'react-test-renderer';

const offer = {
  title: `Beautiful & luxurious apartment at great location`,
  photoURL: `img/apartment-01.jpg`,
  isPremium: true,
  isFavorite: false,
  price: 120,
  type: `Apartment`,
  rating: 93
};
describe(`renders correctly`, () => {
  it(`in the default state`, () => {
    const card = renderer
      .create(<CardPlace
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
