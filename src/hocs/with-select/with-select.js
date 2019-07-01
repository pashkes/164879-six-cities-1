import React, {PureComponent} from "react";

import {TypeSort} from "../../constants";
import {KeyCode} from "./../../constants";

const withSelect = (Component) => {
  class WithSelect extends PureComponent {
    constructor(props) {
      super(props);
      this.handleButtonClick = this.handleButtonClick.bind(this);
      this.handleClickDocumentOutside = this.handleClickDocumentOutside.bind(this);
      this.handleDocumentKeyDownEsc = this.handleDocumentKeyDownEsc.bind(this);
      this.onSelectOption = this.onSelectOption.bind(this);
      this.selectList = React.createRef();
      this.button = React.createRef();
      this.state = {
        isOpen: false,
        selected: TypeSort.POPULAR,
        nameSelected: `Popular`
      };
    }

    handleButtonClick(evt) {
      evt.preventDefault();
      const {isOpen} = this.state;
      this.setState({isOpen: !isOpen});
    }

    componentDidMount() {
      window.addEventListener(`click`, this.handleClickDocumentOutside);
    }

    componentWillUnmount() {
      window.removeEventListener(`click`, this.handleClickDocumentOutside);
    }

    handleClickDocumentOutside(evt) {
      const dropdown = this.selectList.current.contains(evt.target);
      const button = this.button.current.contains(evt.target);
      if (this.state.isOpen && !dropdown && !button) {
        this.setState({isOpen: false});
      }
    }

    handleDocumentKeyDownEsc(evt) {
      if (evt.keyCode === KeyCode.ESC) {
        this.setState({isOpen: false});
      }
    }

    onSelectOption(value, name) {
      this.setState((currentState) => ({
        isOpen: !currentState.isOpen,
        selected: value,
        nameSelected: name,
      }));
    }

    render() {
      const {isOpen, selected, nameSelected} = this.state;
      return (
        <Component
          {...this.props}
          selectedName={nameSelected}
          onClickDropdown={this.handleButtonClick}
          onKeyDown={this.handleDocumentKeyDownEsc}
          onSelectOption={this.onSelectOption}
          button={this.button}
          dropdown={this.selectList}
          isOpen={isOpen}
          selected={selected}
        />
      );
    }
  }

  return WithSelect;
};

export default withSelect;
