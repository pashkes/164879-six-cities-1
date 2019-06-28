import {Redirect} from "react-router-dom";
import React from "react";

const withPrivateRoute = (Component, isLogIn, URL = `/`) => {
  const WithPrivateRoute = (props) => {
    return isLogIn ? <Redirect to={URL} /> : <Component {...props}/>;
  };

  return WithPrivateRoute;
};

export default withPrivateRoute;
