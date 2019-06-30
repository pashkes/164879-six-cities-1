import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreators} from "./../../reducer/data/data";
import {KeyCode} from "./../../constants";

export class Option extends PureComponent {
  constructor(props) {
    super(props);
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleOptionKeyDownEnter = this.handleOptionKeyDownEnter.bind(this);
  }

  handleOptionClick() {
    const {
      onSelectOption,
      value,
      name,
      typeSort,
      button
    } = this.props;
    onSelectOption(value, name);
    typeSort(value);
    button.current.focus();
  }

  handleOptionKeyDownEnter(evt) {
    const {
      button,
      onSelectOption,
      name,
      typeSort,
      value,
    } = this.props;
    if (evt.keyCode === KeyCode.ENTER) {
      button.current.focus();
      onSelectOption(value, name);
      typeSort(value);
    }
  }

  render() {
    const {isSelected, value, name} = this.props;
    return (
      <li
        className={`${isSelected ? `places__option--active` : ``} places__option`}
        onKeyDown={this.handleOptionKeyDownEnter}
        onClick={this.handleOptionClick}
        tabIndex="0"
        data-value={value}
      >
        {name}
      </li>
    );
  }
}

Option.propTypes = {
  onSelectOption: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  typeSort: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  button: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  typeSort: (value) => dispatch(ActionCreators.setSortType(value)),
});

export default connect(null, mapDispatchToProps)(Option);
