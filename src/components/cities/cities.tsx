import * as React from "react";
import {connect} from "react-redux";

import {ActionCreators} from "../../reducer/data/data";
import City from "../city-link/city-link";

interface Props {
  cities: string[],
  onChangeCity: (city: string) => void,
}

export class Cities extends React.PureComponent<Props> {
  onSetCity = (city) => {
    const {onChangeCity} = this.props;

    onChangeCity(city);
  };

  render() {
    const {cities} = this.props;

    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => <City
            key={city}
            city={city}
            onChangeCity={this.onSetCity}
          />)}
        </ul>
      </section>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  onChangeCity: (city) => dispatch(ActionCreators.setCity(city)),
});

export default connect(null, mapDispatchToProps)(Cities);
