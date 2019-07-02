import React from "react";
import PropTypes from "prop-types";

import Header from "./../header/header.jsx";

const Layout = (props) => {
  const {pageClasses, children} = props;

  return (
    <div className={`${pageClasses ? pageClasses.join(` `) : ``}`}>
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
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

Layout.defaultProps = {
  pageClasses: ``
};

export default Layout;
