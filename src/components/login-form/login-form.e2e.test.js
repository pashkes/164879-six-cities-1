import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {LoginForm} from "./login-form";

configure({adapter: new Adapter()});

describe(`form work is correctly`, () => {
  it(`should call callback function when submit form`, () => {
    const onButtonLogIn = jest.fn();
    const onChangeEmail = jest.fn();
    const onChangePassword = jest.fn();
    const loginForm = shallow(
        <LoginForm
          onButtonLogIn={onButtonLogIn}
          onChangeEmail={onChangeEmail}
          onChangePassword={onChangePassword}
          emailValue={`user@gmail.com`}
          passwordValue={`123`}
        />
    );
    const form = loginForm.find(`form`);
    form.simulate(`submit`, {preventDefault() {}});
    expect(onButtonLogIn).toHaveBeenCalled();
  });
});
