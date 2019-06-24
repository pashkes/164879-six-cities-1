import React, {PureComponent} from "react";

import {TypeSort} from "../../constants";
import {KeyCode} from "./../../constants";

const withSelect = (Component) => {
  class WithSelect extends PureComponent {
    constructor(props) {
      super(props);
      this.onClickOpenDropdown = this.onClickOpenDropdown.bind(this);
      this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
      this.onKeyDownEsc = this.onKeyDownEsc.bind(this);
      this.onSelected = this.onSelected.bind(this);
      this.selectList = React.createRef();
      this.button = React.createRef();
      this.state = {
        isOpen: false,
        selected: TypeSort.POPULAR,
        nameSelected: `Popular`
      };
    }

    onClickOpenDropdown(evt) {
      evt.preventDefault();
      this.setState({isOpen: !this.state.isOpen});
    }

    componentDidMount() {
      window.addEventListener(`click`, this.onClickOutsideHandler);
      window.addEventListener(`keydown`, this.onKeyDownEsc);
    }

    componentWillUnmount() {
      window.removeEventListener(`click`, this.onClickOutsideHandler);
      window.removeEventListener(`keydown`, this.onKeyDownEsc);
    }

    onClickOutsideHandler(evt) {
      const dropdown = this.selectList.current.contains(evt.target);
      const button = this.button.current.contains(evt.target);
      if (this.state.isOpen && !dropdown && !button) {
        this.setState({isOpen: false});
      }
    }

    onKeyDownEsc(evt) {
      if (evt.keyCode === KeyCode.ESC) {
        this.setState({isOpen: false});
      }
    }

    onSelected(value, name) {
      this.setState((currentState) => ({
        isOpen: !currentState.isOpen,
        selected: value,
        nameSelected: name,
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
          selectedName={this.state.nameSelected}
          onClickDropdown={this.onClickOpenDropdown}
          onSelected={this.onSelected}
          button={this.button}
          selectList={this.selectList}
          isOpen={this.state.isOpen}
          selected={this.state.selected}
        />
      );
    }
  }

  return WithSelect;
};

export default withSelect;
