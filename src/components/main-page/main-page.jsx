import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import Catalog from './../catalog/catalog.jsx';
import SignIn from './../sign-in/sign-in.jsx';
import {getAuthorizationStatus, getUserData} from './../../reducer/user/selectors';

export const MainPage = (props) =>{
  return (
    <div className={`page page--gray ${props.pageClass}`}>
      <Header
        isAuthorization={props.isAuthorizationRequired}
        email={props.authorization.email}
        avatar={props.authorization.avatar}
      />
      {props.isAuthorizationRequired ? <Catalog/> : <SignIn />}
    </div>
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

