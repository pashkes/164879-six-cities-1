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
import history from "./history.js";
import {ActionCreators} from "./reducer/user/user";

const initApp = () => {
  const api = createAPI(() => {
    history.push(`/login`);
    store.dispatch(ActionCreators.requireAuthorization(false));
    store.dispatch(ActionCreators.authorization({}));
  });
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
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

