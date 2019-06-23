import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getActiveCity} from "./../../reducer/data/selectors";

export class CityLink extends PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(evt) {
    evt.preventDefault();
    this.props.changeCity(this.props.city);
  }

  render() {
    const {city, currentCity} = this.props;
    return (
      <li className="locations__item">
        <a
          onClick={this.onClick}
          className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`}
          href="#">
          <span>{city}</span>
        </a>
      </li>
    );
  }
}

CityLink.propTypes = {
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: getActiveCity(state),
});

export default connect(mapStateToProps)(CityLink);
