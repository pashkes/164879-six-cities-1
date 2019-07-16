import * as React from "react";
import {connect} from "react-redux";

import {ActionCreators} from "./../../reducer/data/data";
import {KeyCode} from "./../../constants";

interface Props {
  value: string,
  name: string,
  isSelected: boolean,
  onSetTypeSort: (value: string) => void,
  onSelectOption: (value: string, name: string) => void,
  onFocusButton: () => void,
}

export class Option extends React.PureComponent<Props, null> {
  handleOptionClick = () => {
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
  };

  handleKeyDownEnter = (evt) => {
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
  };

  render() {
    const {isSelected, value, name} = this.props;

    return (
      <li
        className={`${isSelected ? `places__option--active` : ``} places__option`}
        onKeyDown={this.handleKeyDownEnter}
        onClick={this.handleOptionClick}
        tabIndex={0}
        data-value={value}
      >
        {name}
      </li>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  onSetTypeSort: (value) => dispatch(ActionCreators.setSortType(value)),
});

export default connect(null, mapDispatchToProps)(Option);
