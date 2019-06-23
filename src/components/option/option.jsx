import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreators} from "./../../reducer/data/data";

export class Option extends PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(evt) {
    evt.preventDefault();
    this.props.onSelected(this.props.value, this.props.name);
    this.props.typeSort(this.props.value);
  }

  render() {
    const {isSelected, value, name} = this.props;
    return (
      <li className={`${isSelected ? `places__option--active` : ``} places__option`} onClick={this.onClick} tabIndex="0" data-value={value}>{name}</li>
    );
  }
}

Option.propTypes = {
  onSelected: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  typeSort: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  typeSort: (value) => dispatch(ActionCreators.changeSortType(value)),
});

export default connect(null, mapDispatchToProps)(Option);
