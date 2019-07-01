import React, {PureComponent} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "recompose";

import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {getOffers} from "../../reducer/data/selectors";
import {Operation as DataOperation} from "./../../reducer/data/data";
import {Operation as UserOperation} from "./../../reducer/user/user";
import Constants, {Page} from "../../constants";
import withPrivateRoute from "./../../hocs/with-private-route/with-private-route";
import withLoadData from "./../../hocs/with-load-data/with-load-data";

import MainPage from "../main-page/main-page.jsx";
import SignIn from "./../sign-in/sign-in.jsx";
import FavoritesPage from "../favorites-page/favorites-page.jsx";
import Property from "./../property/property.jsx";

export class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {checkAuth} = this.props;
    checkAuth();
  }

  render() {
    const {isAuthorizationRequired} = this.props;
    const FavoritesPrivate = withPrivateRoute(isAuthorizationRequired, Constants.LOGIN_PATH)(FavoritesPage);
    const SignInPrivate = withPrivateRoute(!isAuthorizationRequired)(SignIn);
    return (
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path={Page.LOGIN} exact component={SignInPrivate} />
        <Route path={Page.FAVORITES} exact component={FavoritesPrivate} />
        <Route path={`${Page.OFFER}/:id`} exact render={({match}) => <Property id={Number(match.params.id)} />} />
        <Redirect from='*' to='/' />
      </Switch>
    );
  }
}

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
  checkAuth: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(DataOperation.loadOffers()),
  checkAuth: () => dispatch(UserOperation.checkAuth()),
});

const mapStateToProps = (state) => {
  const offers = getOffers(state);
  return {
    isAuthorizationRequired: getAuthorizationStatus(state),
    offers,
    isLoading: offers.length !== 0,
  };
};

const _App = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoadData
);

export default _App(App);
