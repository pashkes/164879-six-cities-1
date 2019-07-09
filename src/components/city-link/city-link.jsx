import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getCurrentCity} from "./../../reducer/data/selectors";

export class CityLink extends PureComponent {
  constructor(props) {
    super(props);

    this._handleClickCity = this._handleClickCity.bind(this);
  }

  _handleClickCity(evt) {
    const {onChangeCity, city} = this.props;

    evt.preventDefault();
    onChangeCity(city);
  }

  render() {
    const {city, currentCity} = this.props;

    return (
      <li className="locations__item">
        <button type="button"
          onClick={this._handleClickCity}
          className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`}
        >
          <span>{city}</span>
        </button>
      </li>
    );
  }
}

CityLink.propTypes = {
  city: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: getCurrentCity(state),
});

export default connect(mapStateToProps)(CityLink);
