import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import DocumentTitle from "react-document-title";

import {Operation} from "../../reducer/user/user";
import {withLoginForm} from "../../hocs/with-login-form/with-login-form";
import {getError} from "../../reducer/user/selectors";

export class LoginForm extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSubmitForm = this._handleSubmitForm.bind(this);
  }

  _handleSubmitForm(evt) {
    evt.preventDefault();
    const {
      emailValue,
      passwordValue,
      onLogIn,
    } = this.props;

    onLogIn(emailValue, passwordValue);
  }

  render() {
    const {
      onChangeEmail,
      onChangePassword,
      emailValue,
      passwordValue,
      error,
    } = this.props;

    return (
      <DocumentTitle title="Page of log in">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form onSubmit={this._handleSubmitForm} className="login__form form" action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label htmlFor="login-email" className="visually-hidden">E-mail</label>
              <input
                onChange={onChangeEmail}
                value={emailValue}
                id="login-email"
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label htmlFor="login-password" className="visually-hidden">Password</label>
              <input
                onChange={onChangePassword}
                value={passwordValue}
                id="login-password"
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <span role="alert" aria-live="polite">{error}</span>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
      </DocumentTitle>
    );
  }
}

LoginForm.propTypes = {
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
  onLogIn: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  error: getError(state),
});
const mapDispatchToProps = (dispatch) => ({
  onLogIn: (email, password) => dispatch(Operation.authorization(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withLoginForm(LoginForm));
