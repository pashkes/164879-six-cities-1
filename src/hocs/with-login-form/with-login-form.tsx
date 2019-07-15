import React, {PureComponent} from "react";

export const withLoginForm = (Component) => {
  class WithLoginForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
      };
      this._handleChangeEmail = this._handleChangeEmail.bind(this);
      this._handleChangePassword = this._handleChangePassword.bind(this);
    }

    _handleChangeEmail(evt) {
      this.setState({email: evt.target.value});
    }

    _handleChangePassword(evt) {
      this.setState({password: evt.target.value});
    }

    render() {
      const {props} = this;
      const {email, password} = this.state;
      return <Component
        {...props}
        onChangeEmail={this._handleChangeEmail}
        onChangePassword={this._handleChangePassword}
        emailValue={email}
        passwordValue={password}
      />;
    }
  }

  return WithLoginForm;
};
