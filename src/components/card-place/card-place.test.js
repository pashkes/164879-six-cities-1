import CardPlace from "./card-place.jsx";
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

describe(`renders correctly`, () => {
  it(`in the default state`, () => {
    const card = shallow(<CardPlace
      id={525}
      title={``}
      previewPhoto={``}
      isPremium={false}
      isFavorite={false}
      price={0}
      type={``}
      rating={0}
    />);
    expect(card).toMatchSnapshot();
  });

  it(`if the card is favorite`, () => {
    const cardIsFavorite = shallow(<CardPlace
      id={414}
      title={``}
      previewPhoto={``}
      isPremium={false}
      isFavorite={true}
      price={0}
      type={``}
      rating={0}
    />);
    expect(cardIsFavorite).toMatchSnapshot();
  });

  it(`if the card is premium`, () => {
    const cardIsPremium = shallow(<CardPlace
      id={454554}
      title={``}
      previewPhoto={``}
      isPremium={true}
      isFavorite={false}
      price={0}
      type={``}
      rating={0}
    />);
    expect(cardIsPremium).toMatchSnapshot();
  });
});
