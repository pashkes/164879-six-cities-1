import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {CityLink} from "./city-link.jsx";

configure({adapter: new Adapter()});

it(`city link renders correctly if the city is current`, () => {
  const currentCity = shallow(<CityLink city={`Amsterdam`} currentCity={`Amsterdam`} changeCity={jest.fn} changeCurrentCity={jest.fn} />);
  expect(currentCity).toMatchSnapshot();
});

it(`city link renders correctly if the city isn't current`, () => {
  const defaultCity = shallow(<CityLink city={`Amsterdam`} currentCity={`Paris`} changeCity={jest.fn} />);
  expect(defaultCity).toMatchSnapshot();
});
