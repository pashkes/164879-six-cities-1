import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreators} from "../../reducer/data/data";
import City from "../city-link/city-link.jsx";

export class Cities extends PureComponent {
  constructor(props) {
    super(props);
    this._onSetCity = this._onSetCity.bind(this);
  }

  _onSetCity(city) {
    const {onChangeCity} = this.props;

    onChangeCity(city);
  }

  render() {
    const {cities} = this.props;

    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => <City
            key={city}
            city={city}
            onChangeCity={this._onSetCity}
          />)}
        </ul>
      </section>
    );
  }
}

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
  onChangeCity: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onChangeCity: (city) => dispatch(ActionCreators.setCity(city)),
});

export default connect(null, mapDispatchToProps)(Cities);
