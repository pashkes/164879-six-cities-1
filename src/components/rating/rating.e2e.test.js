/*
import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Rating from "./rating";

configure({adapter: new Adapter()});

it(`function callback call correctly`, () => {
  const onChange = jest.fn();
  const rating = shallow(<Rating onChangeRating={onChange}/>);
  const firstStar = rating.find(`input[value="5"]`);
  firstStar.simulate(`change`, {target: {checked: true}});
  expect(onChange).toHaveBeenCalled();
  expect(onChange).toBeCalledWith(`5`);
});
*/
