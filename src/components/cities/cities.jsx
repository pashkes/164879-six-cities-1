import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreators} from './../../reducer';

class Cities extends PureComponent {
  constructor(props) {
    super(props);
    this._onClickCity = this._onClickCity.bind(this);
  }

  _onClickCity(evt) {
    evt.preventDefault();
    this.props.changeCurrentCity(evt.target.textContent);
  }

  render() {
    const {cities, currentCity} = this.props;
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, i) => {
            return (
              <li key={i} className="locations__item">
                <a
                  onClick={this._onClickCity}
                  className={`locations__item-link tabs__item ${city === currentCity ? `tabs__item--active` : ``}`}
                  href="#">
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.city
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCity: (city) => dispatch(ActionCreators.changeCity(city))
});

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  changeCurrentCity: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cities);
