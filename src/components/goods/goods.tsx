import * as React from "react";

interface Props {
  list: string[],
}

const Goods: React.FunctionComponent<Props> = ({list}) =>{
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

export default Goods;
