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
    const inputEmail = loginForm.find(`input[type="email"]`);
    const inputPassword = loginForm.find(`input[type="password"]`);
    inputEmail.simulate(`change`, `user@gmail.com`);
    inputPassword.simulate(`change`, `123`);
    form.simulate(`submit`, {preventDefault() {}});
    expect(onChangeEmail).toBeCalled();
    expect(onChangeEmail).toBeCalledWith(`user@gmail.com`);
    expect(onChangePassword).toBeCalled();
    expect(onChangePassword).toBeCalledWith(`123`);
    expect(onButtonLogIn).toBeCalled();
    expect(onButtonLogIn).toBeCalledWith(`user@gmail.com`, `123`);
  });
});
