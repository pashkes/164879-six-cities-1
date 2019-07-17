import * as React from "react";
import {Switch, Redirect, Route } from 'react-router'
import {connect} from "react-redux";
import {compose} from "recompose";

import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {getOffers} from "../../reducer/data/selectors";
import {Operation as DataOperation} from "../../reducer/data/data";
import {Operation as UserOperation} from "../../reducer/user/user";
import Constants, {Page} from "../../constants";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route";
import withLoadData from "../../hocs/with-load-data/with-load-data";

import Spinner from "./../spinner/spinner";

const MainPage = React.lazy(() => import(`../main-page/main-page`));
const SignIn = React.lazy(() => import(`../sign-in/sign-in`));
const FavoritesPage = React.lazy(() => import(`../favorites-page/favorites-page`));
const Property = React.lazy(() => import(`../property/property`));

interface Props {
  isAuthRequire: boolean,
  onLoadData: () => void,
  onCheckAuth: () => void,
  offers: [],
}

export class App extends React.PureComponent<Props, null> {
  componentDidMount() {
    const {onCheckAuth} = this.props;

    onCheckAuth();
  }

  render() {
    const {isAuthRequire} = this.props;
    const FavoritesPrivate = withPrivateRoute(FavoritesPage, isAuthRequire, Constants.LOGIN_PATH);
    const SignInPrivate = withPrivateRoute(SignIn, !isAuthRequire);

    return (
      <React.Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path={Page.LOGIN} exact component={SignInPrivate} />
          <Route path={Page.FAVORITES} exact component={FavoritesPrivate} />
          <Route path={`${Page.OFFER}/:id`} exact render={({match}) => <Property id={Number(match.params.id)} />} />
          <Redirect from='*' to='/' />
        </Switch>
      </React.Suspense>
    );
  }
}

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
