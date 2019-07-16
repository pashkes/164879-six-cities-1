import * as React from "react";
import {connect} from "react-redux";

import {getCurrentCity} from "./../../reducer/data/selectors";

interface Props {
  city: string,
  onChangeCity: (city: string) => void,
  currentCity: string,
}

export class CityLink extends React.PureComponent<Props> {
  handleClickCity = (evt) => {
    const {onChangeCity, city} = this.props;

    evt.preventDefault();
    onChangeCity(city);
  };

  render() {
    const {city, currentCity} = this.props;

    return (
      <li className="locations__item">
        <button type="button"
          onClick={this.handleClickCity}
          className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item--active` : ``}`}
        >
          <span>{city}</span>
        </button>
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: getCurrentCity(state),
});

export default connect(mapStateToProps)(CityLink);
