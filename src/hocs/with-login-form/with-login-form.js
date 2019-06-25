import React, {PureComponent} from "react";

export const withLoginForm = (Component) => {
  class WithLoginForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
      };
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(evt) {
      this.setState({email: evt.target.value});
    }

    handlePasswordChange(evt) {
      this.setState({password: evt.target.value});
    }

    render() {
      const {props} = this;
      return <Component
        {...props}
        onChangeEmail={this.handleEmailChange}
        onChangePassword={this.handlePasswordChange}
        emailValue={this.state.email}
        passwordValue={this.state.password}
      />;
    }
  }

  return WithLoginForm;
};
