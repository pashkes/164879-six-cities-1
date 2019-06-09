import React from "react";
import {Header} from "./header.jsx";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

it(`Header renders correctly`, () => {
  const cards = shallow(<Header
    isAuthorization={false}
    userData={{
      avatar: ``,
      email: ``,
    }}
    onClickLogOut={jest.fn()}
    logOut={jest.fn()}
  />);
  expect(cards).toMatchSnapshot();
});
