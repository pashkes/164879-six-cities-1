import * as React from "react";
import {Subtract} from 'utility-types';

import {TypeSort} from "../../constants";
import {KeyCode} from "./../../constants";

interface State {
  isOpen: boolean,
  selected: string,
  nameSelected: string,
}

interface InjectedProps {
  selectedName: string,
  onOpenDropdown: () => void,
  onKeyDownCloseDropdown: () => void,
  onCloseDropdown: () => void,
  onSelectOption: () => void,
  isOpen: boolean,
  selected: string,
}

const withSelect = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;


  class WithSelect extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false,
        selected: TypeSort.POPULAR,
        nameSelected: `Popular`
      };
    }

    closeDropdown = () => {
      this.setState({isOpen: false});
    };

    handleButtonClick = (evt) => {
      evt.preventDefault();
      const {isOpen} = this.state;
      this.setState({isOpen: !isOpen});
    };

    handleDocumentKeyDownEsc = (evt) => {
      if (evt.keyCode === KeyCode.ESC) {
        this.setState({isOpen: false});
      }
    };

    onSelectOption = (value, name) => {
      this.setState((currentState) => ({
        isOpen: !currentState.isOpen,
        selected: value,
        nameSelected: name,
      }));
    };

    render() {
      const {selected, nameSelected} = this.state;

      return (
        <Component
          {...this.props}
          selectedName={nameSelected}
          onOpenDropdown={this.handleButtonClick}
          onKeyDownCloseDropdown={this.handleDocumentKeyDownEsc}
          onCloseDropdown={this.closeDropdown}
          onSelectOption={this.onSelectOption}
          isOpen={this.state.isOpen}
          selected={selected}
        />
      );
    }
  }

  return WithSelect;
};

export default withSelect;
