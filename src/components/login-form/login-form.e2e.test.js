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
          onLogIn={onButtonLogIn}
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
    expect(onChangeEmail).toBeCalled();
    expect(onChangeEmail).toBeCalledWith(`user@gmail.com`);

    inputPassword.simulate(`change`, `123`);
    expect(onChangePassword).toBeCalled();
    expect(onChangePassword).toBeCalledWith(`123`);

    form.simulate(`submit`, {preventDefault() {}});
    expect(onButtonLogIn).toBeCalled();
    expect(onButtonLogIn).toBeCalledWith(`user@gmail.com`, `123`);
  });
});
