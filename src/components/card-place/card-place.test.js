import React from 'react';
import CardPlace from './card-place.jsx';
import renderer from 'react-test-renderer';

describe(`renders correctly`, ()=> {
  it(`in the default state`, () => {
    const card = renderer
      .create(<CardPlace/>)
      .toJSON();
    expect(card).toMatchSnapshot();
  });

  it(`if the card is favorite`, ()=> {
    const cardIsFavorite = renderer
      .create(<CardPlace isFavorite={true} />)
      .toJSON();
    expect(cardIsFavorite).toMatchSnapshot();
  });

  it(`if the card is premium`, ()=> {
    const cardIsPremium = renderer
      .create(<CardPlace isPremium={true} />)
      .toJSON();
    expect(cardIsPremium).toMatchSnapshot();
  });
});
