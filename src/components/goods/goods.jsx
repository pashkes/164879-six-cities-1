import React from "react";
import Proptypes from "prop-types";

const Goods = ({list}) =>{
  return (
    <ul className="property__inside-list">{
      list.map((item, i) => (
        <li key={i} className="property__inside-item">
          {item}
        </li>
      ))
    }</ul>
  );
};

Goods.propTypes = {
  list: Proptypes.array
};

export default Goods;
