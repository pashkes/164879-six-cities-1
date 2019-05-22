import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreators} from "../../reducer";

class CityLink extends PureComponent {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(evt) {
    evt.preventDefault();
    this.props.changeCurrentCity(this.props.city);
  }

  render() {
    const {city, currentCity} = this.props;
    return (
      <li className="locations__item">
        <a
          onClick={this._onClick}
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
  changeCurrentCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string,
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.city
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCity: (city) => dispatch(ActionCreators.changeCity(city)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityLink);
