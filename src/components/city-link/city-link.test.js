import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {CityLink} from "./city-link.jsx";

configure({adapter: new Adapter()});


describe(`city link renders correctly`, () => {
  it(` if link is active`, () => {
    const currentCity = shallow(
        <CityLink
          city={`Amsterdam`}
          currentCity={`Amsterdam`}
          onChangeCity={jest.fn}
          changeCurrentCity={jest.fn}
        />
    );
    expect(currentCity).toMatchSnapshot();
  });

  it(` if link isn't active`, () => {
    const defaultCity = shallow(
        <CityLink
          city={`Amsterdam`}
          currentCity={`Paris`}
          onChangeCity={jest.fn}
        />
    );
    expect(defaultCity).toMatchSnapshot();
  });
});

