import React from "react";
import {Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import MainPage from "../main-page/main-page.jsx";
import SignIn from "./../sign-in/sign-in.jsx";
import Favorites from "./../favorites/favorite.jsx";
import withPrivateRoute from "./../../hocs/with-private-route/with-private-route";
import {getAuthorizationStatus} from "../../reducer/user/selectors";


export const App = ({isAuthorization}) => {
  const FavoritesPrivate = withPrivateRoute(Favorites, isAuthorization, `/login`);
  const SignInPrivate = withPrivateRoute(SignIn, !isAuthorization);
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/login" exact component={SignInPrivate} />
      <Route path="/favorites" exact component={FavoritesPrivate} />
    </Switch>
  );
};

App.propTypes = {
  isAuthorization: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthorization: getAuthorizationStatus(state)
});

export default connect(mapStateToProps)(App);
