import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MainPage from "./main-page.jsx";

configure({adapter: new Adapter()});

it(`main page renders correctly`, () => {
  const catalog = shallow(
      <MainPage
        isAuthorizationRequired={false}
        authorization={{}}
      />
  );
  expect(catalog).toMatchSnapshot();
});
