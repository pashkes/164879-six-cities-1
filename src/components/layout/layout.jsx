import React from "react";
import PropTypes from "prop-types";

import Header from "./../header/header.jsx";
import DocumentTitle from "react-document-title";

const Layout = (props) => {
  const {pageClasses, children, title} = props;

  return (
    <DocumentTitle title={title}>
      <div className={`${pageClasses ? pageClasses.join(` `) : ``}`}>
        <Header />
        {children}
      </div>
    </DocumentTitle>
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
