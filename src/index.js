import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";
import {composeWithDevTools} from "redux-devtools-extension";

import reducer from "./reducer/reducer";
import App from "./components/app/app";
import createAPI from "./api.js";
import {ActionCreators as UserActionCreators} from "./reducer/user/user";
const initApp = () => {
  let store;

  const api = createAPI(() => {
    store.dispatch(UserActionCreators.requireAuthorization(false));
  });
  store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
  );

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

