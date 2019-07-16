import * as React from "react";
import {Subtract} from 'utility-types';

interface State {
  email: string
  password: string,
}

interface InjectedProps {
  onChangeEmail: () => void,
  onChangePassword: () => void,
  emailValue: string,
  passwordValue: string,
}

export const withLoginForm = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithLoginForm extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
      };
    }

    handleChangeEmail = (evt) => {
      this.setState({email: evt.target.value});
    };

    handleChangePassword = (evt) => {
      this.setState({password: evt.target.value});
    };

    render() {
      const {props} = this;
      const {email, password} = this.state;
      return <Component
        {...props}
        onChangeEmail={this.handleChangeEmail}
        onChangePassword={this.handleChangePassword}
        emailValue={email}
        passwordValue={password}
      />;
    }
  }

  return WithLoginForm;
};
