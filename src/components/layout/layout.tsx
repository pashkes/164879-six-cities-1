import React from "react";
import PropTypes from "prop-types";

import Header from "./../header/header.jsx";
import {Helmet} from "react-helmet";

const Layout = (props) => {
  const {pageClasses, children, title} = props;

  return (
    <div className={`${pageClasses ? pageClasses.join(` `) : ``}`}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  pageClasses: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

Layout.defaultProps = {
  pageClasses: ``
};

export default Layout;
