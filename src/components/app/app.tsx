import React, {PureComponent, Suspense, lazy} from "react";
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

import Spinner from "./../spinner/spinner.jsx";

const MainPage = lazy(() => import(`../main-page/main-page.jsx`));
const SignIn = lazy(() => import(`./../sign-in/sign-in.jsx`));
const FavoritesPage = lazy(() => import(`../favorites-page/favorites-page.jsx`));
const Property = lazy(() => import(`./../property/property.jsx`));

export class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onCheckAuth} = this.props;

    onCheckAuth();
  }

  render() {
    const {isAuthRequire} = this.props;
    const FavoritesPrivate = withPrivateRoute(isAuthRequire, Constants.LOGIN_PATH)(FavoritesPage);
    const SignInPrivate = withPrivateRoute(!isAuthRequire)(SignIn);

    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path={Page.LOGIN} exact component={SignInPrivate} />
          <Route path={Page.FAVORITES} exact component={FavoritesPrivate} />
          <Route path={`${Page.OFFER}/:id`} exact render={({match}) => <Property id={Number(match.params.id)} />} />
          <Redirect from='*' to='/' />
        </Switch>
      </Suspense>
    );
  }
}

App.propTypes = {
  isAuthRequire: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  onCheckAuth: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData: () => dispatch(DataOperation.loadOffers()),
  onCheckAuth: () => dispatch(UserOperation.onCheckAuth()),
});

const mapStateToProps = (state) => {
  const offers = getOffers(state);

  return {
    isAuthRequire: getAuthorizationStatus(state),
    offers,
    isLoading: offers.length !== 0,
  };
};

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoadData
);

export default enhance(App);
