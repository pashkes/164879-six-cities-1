import {Redirect} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

const withRedirect = (Component) => {
  const WithRedirect = (props) => {
    return props.isAuthentication ? <Component {...props}/> : <Redirect to="/login" />;
  };
  WithRedirect.propTypes = {
    isAuthentication: PropTypes.bool.isRequired,
  };

  return WithRedirect;
};

export default withRedirect;
