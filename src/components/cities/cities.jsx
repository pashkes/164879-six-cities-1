import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreators} from "../../reducer/data/data";
import City from "../city-link/city-link.jsx";

export class Cities extends PureComponent {
  constructor(props) {
    super(props);
    this.changeCity = this.changeCity.bind(this);
  }

  changeCity(city) {
    this.props.changeCurrentCity(city);
  }

  render() {
    const {cities} = this.props;
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, i) => <City
            key={i}
            city={city}
            changeCity={this.changeCity}
          />)}
        </ul>
      </section>
    );
  }
}

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
  changeCurrentCity: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCity: (city) => dispatch(ActionCreators.changeCity(city)),
});

export default connect(null, mapDispatchToProps)(Cities);
