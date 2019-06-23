import React, {PureComponent} from "react";

const withSorter = (Component) => {
  class WithSorter extends PureComponent {
    constructor(props) {
      super(props);
      this.onClickOpenDropdown = this.onClickOpenDropdown.bind(this);
      this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
      this.onSelected = this.onSelected.bind(this);
      this.selectList = React.createRef();
      this.button = React.createRef();
      this.state = {
        isOpen: false,
        selected: `Popular`,
      };
    }

    onClickOpenDropdown(evt) {
      evt.preventDefault();
      this.setState({isOpen: !this.state.isOpen});
    }
    componentWillUpdate(nextProps, nextState) {
      if (this.state.selected !== nextState.selected) {
        console.log(`change`);
      }
    }

    componentDidMount() {
      window.addEventListener(`click`, this.onClickOutsideHandler);
    }

    componentWillUnmount() {
      window.removeEventListener(`click`, this.onClickOutsideHandler);
    }

    onClickOutsideHandler(evt) {
      const dropdown = this.selectList.current.contains(evt.target);
      const button = this.button.current.contains(evt.target);
      if (this.state.isOpen && !dropdown && !button) {
        this.setState({isOpen: false});
      }
    }

    onSelected(value) {
      this.setState((currentState) => ({
        isOpen: !currentState.isOpen,
        selected: value,
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
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

  return WithSorter;
};

export default withSorter;
