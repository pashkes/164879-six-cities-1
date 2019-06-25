import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operation} from "../../reducer/user/user";
import {withLoginForm} from "../../hocs/with-login-form/with-login-form";

export class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleButtonSubmitForm = this.handleButtonSubmitForm.bind(this);
  }

  handleButtonSubmitForm(evt) {
    evt.preventDefault();
    const {
      emailValue,
      passwordValue,
      onButtonLogIn,
    } = this.props;
    onButtonLogIn(emailValue, passwordValue);
  }

  render() {
    const {
      onChangeEmail,
      onChangePassword,
      emailValue,
      passwordValue,
    } = this.props;
    return (
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form onSubmit={this.handleButtonSubmitForm} className="login__form form" action="#" method="post">
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input
              onChange={onChangeEmail}
              value={emailValue}
              className="login__input form__input"
              type="email"
              name="email"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input
              onChange={onChangePassword}
              value={passwordValue}
              className="login__input form__input"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <button className="login__submit form__submit button" type="submit">Sign in</button>
        </form>
      </section>
    );
  }
}

LoginForm.propTypes = {
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
  onButtonLogIn: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onButtonLogIn: (email, password) => dispatch(Operation.authorization(email, password)),
});

export default connect(null, mapDispatchToProps)(withLoginForm(LoginForm));
