import React from "react";
import PropTypes from "prop-types";

import SortItem from "./../option/option.jsx";
import withSorter from "./../../hocs/with-select/with-select";

export const Sorter = (props) => {
  const {
    onClickDropdown,
    isOpen,
    selected,
    onSelected,
    button,
    selectList,
    options,
  } = props;

  return (
    <React.Fragment>
      <button type="button"
        className="places__sorting-type"
        onClick={onClickDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        id="sorter"
        ref={button}
      >
        {selected}
        <svg className="places__sorting-arrow" width="7" height="4" aria-hidden="true">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </button>
      <ul
        ref={selectList}
        aria-labelledby="sorter"
        className={`${isOpen ? `places__options--opened` : ``} places__options places__options--custom`}>
        {options.map((option, i) => {
          return <SortItem
            onSelected={onSelected}
            isSelected={selected === option.value}
            value={option.value}
            key={i}
          />;
        })}
      </ul>
      <select defaultValue={selected} hidden id="places-sorting">
        <option value={selected}>{selected}</option>
      </select>
    </React.Fragment>
  );
};

Sorter.propTypes = {
  onClickDropdown: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  selected: PropTypes.string.isRequired,
  button: PropTypes.object.isRequired,
  selectList: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  })),
};

export default withSorter(Sorter);
