import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Header} from "./header.jsx";

configure({adapter: new Adapter()});

describe(`Header should render is correctly`, () => {
  it(`if user require authorization`, () => {
    const header = shallow(<Header
      isAuthRequire={true}
      userData={{}}
      onClickLogOut={jest.fn()}
      logOut={jest.fn()}
    />);
    expect(header).toMatchSnapshot();
  });

  it(`if user already authorization`, () => {
    const header = shallow(<Header
      isAuthRequire={false}
      userData={{
        avatar: ``,
        email: `user@gmail.com`,
        name: `user`,
        isPro: true,
        id: 0,
      }}
      onClickLogOut={jest.fn()}
      logOut={jest.fn()}
    />);
    expect(header).toMatchSnapshot();
  });
});

