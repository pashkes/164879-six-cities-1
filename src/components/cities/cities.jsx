import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import City from '../city-link/city-link.jsx';
import {ActionCreators} from "../../reducers/reducer";

export class Cities extends PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(selectedItem) {
    this.props.changeCurrentCity(selectedItem);
  }
  render() {
    const {cities, currentCity} = this.props;
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, i) => <City
            key={i}
            city={city}
            changeCity={this.onChange}
            currentCity={currentCity}
          />)}
        </ul>
      </section>
    );
  }
}

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
  changeCurrentCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    cities: [...new Set([...state.offers.map((offer) => offer.city)])],
    currentCity: state.city
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCity: (city) => dispatch(ActionCreators.changeCity(city)),
});
export {mapStateToProps};
export default connect(mapStateToProps, mapDispatchToProps)(Cities);
