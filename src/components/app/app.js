import React, {PureComponent} from "react";
import {Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {getOffers} from "../../reducer/data/selectors";
import {Operation as DataOperation} from "./../../reducer/data/data";
import {Operation as UserOperation} from "./../../reducer/user/user";
import Constants, {Page} from "../../constants";
import withPrivateRoute from "./../../hocs/with-private-route/with-private-route";

import MainPage from "../main-page/main-page.jsx";
import SignIn from "./../sign-in/sign-in.jsx";
import Favorites from "./../favorites/favorite.jsx";
import Property from "./../property/property.jsx";

export class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadOffers, checkAuth, offers} = this.props;
    if (offers.length === 0) {
      loadOffers();
    }
    checkAuth();
  }

  render() {
    const {isAuthorization} = this.props;
    const FavoritesPrivate = withPrivateRoute(Favorites, isAuthorization, Constants.LOGIN_PATH);
    const SignInPrivate = withPrivateRoute(SignIn, !isAuthorization);
    return (
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path={Page.LOGIN} exact component={SignInPrivate} />
        <Route path={Page.FAVORITES} exact component={FavoritesPrivate} />
        <Route path={`${Page.OFFER}/:id`} exact render={({match}) => <Property id={match.params.id} />} />
      </Switch>
    );
  }
}

App.propTypes = {
  isAuthorization: PropTypes.bool.isRequired,
  loadOffers: PropTypes.func.isRequired,
  checkAuth: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  loadOffers: () => dispatch(DataOperation.loadOffers()),
  checkAuth: () => dispatch(UserOperation.checkAuth()),
});

const mapStateToProps = (state) => ({
  isAuthorization: getAuthorizationStatus(state),
  offers: getOffers(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
