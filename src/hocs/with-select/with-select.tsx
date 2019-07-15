import React, {PureComponent} from "react";

import {TypeSort} from "../../constants";
import {KeyCode} from "./../../constants";

const withSelect = (Component) => {
  class WithSelect extends PureComponent {
    constructor(props) {
      super(props);

      this._handleButtonClick = this._handleButtonClick.bind(this);
      this._handleDocumentKeyDownEsc = this._handleDocumentKeyDownEsc.bind(this);
      this._onSelectOption = this._onSelectOption.bind(this);
      this._closeDropdown = this._closeDropdown.bind(this);

      this.state = {
        isOpen: false,
        selected: TypeSort.POPULAR,
        nameSelected: `Popular`
      };
    }

    _closeDropdown() {
      this.setState({isOpen: false});
    }

    _handleButtonClick(evt) {
      evt.preventDefault();
      const {isOpen} = this.state;
      this.setState({isOpen: !isOpen});
    }

    _handleDocumentKeyDownEsc(evt) {
      if (evt.keyCode === KeyCode.ESC) {
        this.setState({isOpen: false});
      }
    }

    _onSelectOption(value, name) {
      this.setState((currentState) => ({
        isOpen: !currentState.isOpen,
        selected: value,
        nameSelected: name,
      }));
    }

    render() {
      const {selected, nameSelected} = this.state;

      return (
        <Component
          {...this.props}
          selectedName={nameSelected}
          onOpenDropdown={this._handleButtonClick}
          onKeyDownCloseDropdown={this._handleDocumentKeyDownEsc}
          onCloseDropdown={this._closeDropdown}
          onSelectOption={this._onSelectOption}
          button={this.button}
          dropdown={this.selectList}
          isOpen={this.state.isOpen}
          selected={selected}
        />
      );
    }
  }

  return WithSelect;
};

export default withSelect;
