import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CardPlace from "./card-place";

configure({adapter: new Adapter()});

it(`should call callback function after click to the image`, () => {
  const callbackFunction = jest.fn();
  const idOfCard = 0;
  const card = shallow(<CardPlace
    id={idOfCard}
    title={``}
    previewPhoto={``}
    type={``}
    isPremium={false}
    isFavorite={false}
    price={0}
    rating={0}
    onSelected={callbackFunction}
  />);

  card.find(`.place-card__image-wrapper button`).simulate(`click`, {preventDefault() {}});
  expect(callbackFunction).toBeCalled();
  expect(callbackFunction).toBeCalledWith(idOfCard);
});
