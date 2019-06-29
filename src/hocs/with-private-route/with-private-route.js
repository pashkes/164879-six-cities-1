import {Redirect} from "react-router-dom";
import React from "react";

const withPrivateRoute = (isRequireAuthorization, URL = `/`) => (Component) => {
  const WithPrivateRoute = (props) => {
    return isRequireAuthorization ? <Redirect to={URL} /> : <Component {...props}/>;
  };

  return WithPrivateRoute;
};

export default withPrivateRoute;
