import * as React from "react";
import {Redirect} from "react-router-dom";

const withPrivateRoute = (Component, isAuthRequire, URL = `/`) => {
  const WithPrivateRoute: React.FunctionComponent = (props) => {
    return isAuthRequire ? <Redirect to={URL} /> : <Component {...props}/>;
  };

  return WithPrivateRoute;
};

export default withPrivateRoute;
