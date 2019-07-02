import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreators} from "./../../reducer/data/data";
import {KeyCode} from "./../../constants";

export class Option extends PureComponent {
  constructor(props) {
    super(props);

    this._handleOptionClick = this._handleOptionClick.bind(this);
    this._handleKeyDownEnter = this._handleKeyDownEnter.bind(this);
  }

  _handleOptionClick() {
    const {
      value,
      name,
      onSetTypeSort,
      onSelectOption,
      onFocusButton,
    } = this.props;

    onSelectOption(value, name);
    onSetTypeSort(value);
    onFocusButton();
  }

  _handleKeyDownEnter(evt) {
    const {
      onFocusButton,
      name,
      value,
      onSelectOption,
      onSetTypeSort,
    } = this.props;

    if (evt.keyCode === KeyCode.ENTER) {
      onSelectOption(value, name);
      onSetTypeSort(value);
      onFocusButton();
    }
  }

  render() {
    const {isSelected, value, name} = this.props;

    return (
      <li
        className={`${isSelected ? `places__option--active` : ``} places__option`}
        onKeyDown={this._handleKeyDownEnter}
        onClick={this._handleOptionClick}
        tabIndex="0"
        data-value={value}
      >
        {name}
      </li>
    );
  }
}

Option.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSetTypeSort: PropTypes.func.isRequired,
  onSelectOption: PropTypes.func.isRequired,
  onFocusButton: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSetTypeSort: (value) => dispatch(ActionCreators.setSortType(value)),
});

export default connect(null, mapDispatchToProps)(Option);
