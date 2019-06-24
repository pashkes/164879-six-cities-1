import React from "react";
import PropTypes from "prop-types";

import withSelect from "./../../hocs/with-select/with-select";
import Option from "./../option/option.jsx";

export const Select = (props) => {
  const {
    onClickDropdown,
    isOpen,
    selected,
    onSelected,
    button,
    selectList,
    options,
    selectedName,
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
        {selectedName}
        <svg className="places__sorting-arrow" width="7" height="4" aria-hidden="true">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </button>
      <ul
        ref={selectList}
        aria-labelledby="sorter"
        className={`${isOpen ? `places__options--opened` : ``} places__options places__options--custom`}>
        {options.map((option, i) => {
          return <Option
            onSelected={onSelected}
            isSelected={selected === option.value}
            value={option.value}
            name={option.name}
            button={button}
            key={i}
          />;
        })}
      </ul>
      <select defaultValue={selected} hidden id="places-sorting">
        <option value={selected}>{selectedName}</option>
      </select>
    </React.Fragment>
  );
};

Select.propTypes = {
  onClickDropdown: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  selected: PropTypes.string.isRequired,
  button: PropTypes.object.isRequired,
  selectList: PropTypes.object.isRequired,
  selectedName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

export default withSelect(Select);
