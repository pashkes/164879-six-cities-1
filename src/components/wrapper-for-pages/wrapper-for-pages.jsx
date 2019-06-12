import React from "react";
import PropTypes from "prop-types";

const WrapperForPages = (props) => {
  const {pageClasses, children} = props;
  return (
    <div className={`${pageClasses ? pageClasses.join(` `) : ``}`}>
      {children}
    </div>
  );
};

WrapperForPages.propTypes = {
  pageClasses: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  children: PropTypes.array,
};

WrapperForPages.defaultProps = {
  pageClasses: ``
};
export default WrapperForPages;
