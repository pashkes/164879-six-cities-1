import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {compose} from "recompose";
import {BrowserRouter} from "react-router-dom";

import reducer from "./reducer/reducer";
import App from "./components/app/app";
import createAPI from "./api.js";
import {Operation as DataOperation} from "./reducer/data/data";
import {Operation as UserOperation} from "./reducer/user/user";
import history from "./history.js";

const initApp = () => {
  const api = createAPI(() => history.push(`/login`));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  store.dispatch(DataOperation.loadOffers());
  store.dispatch(UserOperation.checkAuth());
  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>,
      document.getElementById(`root`)
  );
};


initApp();

