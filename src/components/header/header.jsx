import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Constants, {Page} from "./../../constants";
import {getUserData, getAuthorizationStatus} from "./../../reducer/user/selectors";

export const Header = (props) => {
  const {isAuthRequire, userData} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={isAuthRequire ? Page.LOGIN : Page.FAVORITES} className="header__nav-link header__nav-link--profile">
                  <div
                    className="header__avatar-wrapper user__avatar-wrapper"
                    style={isAuthRequire ? {} : {backgroundImage: `url(${Constants.BASE_URL}${userData.avatar})`}}>
                  </div>
                  <span className="header__user-name user__name">{isAuthRequire ? `Sign In` : userData.email}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
;

Header.propTypes = {
  isAuthRequire: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string,
  }).isRequired,
};


const mapStateToProps = (state) => ({
  userData: getUserData(state),
  isAuthRequire: getAuthorizationStatus(state)
});

export default connect(mapStateToProps)(Header);
