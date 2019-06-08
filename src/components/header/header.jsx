import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import Constants from './../../constants';
import {ActionCreators} from './../../reducer/user/user';
import {getUserData} from './../../reducer/user/selectors';

export class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.onClickLogOut = this.onClickLogOut.bind(this);
  }

  onClickLogOut(evt) {
    evt.preventDefault();
    if (this.props.isAuthorization) {
      this.props.logOut(!this.props.isAuthorization);
    }
  }

  render() {
    const {isAuthorization, userData} = this.props;
    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#" onClick={this.onClickLogOut}>
                    <div
                      className="header__avatar-wrapper user__avatar-wrapper"
                      style={isAuthorization ? {backgroundImage: `url(${Constants.BASE_URL}${userData.avatar})`} : {}}>
                    </div>
                    <span className="header__user-name user__name">{isAuthorization ? userData.email : `Sign In`}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isAuthorization: PropTypes.bool.isRequired,
  userData: PropTypes.object.isRequired,
  onClickLogOut: PropTypes.func,
  logOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logOut: (exit) => dispatch(ActionCreators.requireAuthorization(exit))
});
const mapStateToProps = (state) => ({
  userData: getUserData(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
