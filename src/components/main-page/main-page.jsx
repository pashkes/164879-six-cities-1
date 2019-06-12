import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Header from "../header/header.jsx";
import Catalog from "./../catalog/catalog.jsx";
import WrapperForPages from "../wrapper-for-pages/wrapper-for-pages.jsx";
import {getAuthorizationStatus, getUserData} from "./../../reducer/user/selectors";

export const MainPage = () =>{
  return (
    <WrapperForPages pageClasses={[`page`, `page--gray`, `page--main`]}>
      <Header />
      <Catalog/>
    </WrapperForPages>
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

