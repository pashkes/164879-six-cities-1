import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getAuthorizationStatus, getUserData} from "./../../reducer/user/selectors";

import Catalog from "./../catalog/catalog.jsx";
import Layout from "../layout/layout.jsx";

export const MainPage = () =>{
  return (
    <Layout pageClasses={[`page`, `page--gray`, `page--main`]}>
      <Catalog/>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isAuthorizationRequired: getAuthorizationStatus(state),
  authorization: getUserData(state)
});

MainPage.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  pageClass: PropTypes.string,
  authorization: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(MainPage);

