import React from "react";
import CardPlace from "./card-place.jsx";
import renderer from "react-test-renderer";

describe(`renders correctly`, () => {
  it(`in the default state`, () => {
    const card = renderer
      .create(<CardPlace
        id={525}
        title={``}
        previewPhoto={``}
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
        id={414}
        title={``}
        previewPhoto={``}
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
        id={454554}
        title={``}
        previewPhoto={``}
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
