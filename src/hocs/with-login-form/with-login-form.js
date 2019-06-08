import React, {PureComponent} from 'react';

export const withLoginForm = (Component) => {
  class WithLoginForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
      };
      this.changeEmailHandler = this.changeEmailHandler.bind(this);
      this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    changeEmailHandler(evt) {
      this.setState({email: evt.target.value});
    }

    changePasswordHandler(evt) {
      this.setState({password: evt.target.value});
    }

    render() {
      const {props} = this;
      return <Component
        {...props}
        onChangeEmail={this.changeEmailHandler}
        onChangePassword={this.changePasswordHandler}
        emailValue={this.state.email}
        passwordValue={this.state.password}
      />;
    }
  }

  return WithLoginForm;
};
