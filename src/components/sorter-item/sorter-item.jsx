import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class SortItem extends PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(evt) {
    evt.preventDefault();
    this.props.onSelected(this.props.value);
  }

  render() {
    const {isSelected, value} = this.props;
    return (
      <li className={`${isSelected ? `places__option--active` : ``} places__option`} onClick={this.onClick} tabIndex="0">{value}</li>
    );
  }
}

SortItem.propTypes = {
  onSelected: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default SortItem;
