import {Redirect} from "react-router-dom";
import React from "react";

const withPrivateRoute = (Component, isLogIn, URL = `/`) => {
  const WithPrivateRoute = (props) => {
    return isLogIn ? <Component {...props}/> : <Redirect to={URL} />;
  };

  return WithPrivateRoute;
};

export default withPrivateRoute;
