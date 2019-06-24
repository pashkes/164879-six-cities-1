import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MainEmpty from "./../main-empty/main-empty.jsx";

configure({adapter: new Adapter()});

it(`Empty main page renders correctly`, () => {
  const emptyMainPage = shallow(
      <MainEmpty selectedCity={`Kiev`}/>
  );
  expect(emptyMainPage).toMatchSnapshot();
});
