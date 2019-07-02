import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {CityLink} from "./city-link.jsx";

configure({adapter: new Adapter()});

const handleClick = jest.fn();

it(`Should call callback function after click to the city`, () => {
  const cityName = `Amsterdam`;
  const city = shallow(<CityLink
    city={cityName}
    currentCity={`Paris`}
    onChangeCity={handleClick}
  />);

  const link = city.find(`a`);
  link.simulate(`click`, {preventDefault() {}});
  expect(handleClick).toBeCalled();
  expect(handleClick).toBeCalledWith(cityName);
});
