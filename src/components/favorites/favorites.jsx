import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "recompose";

import {ActionCreators} from "../../reducer/data/data";
import CardPlace from "../card-place/card-place.jsx";

export class Favorites extends PureComponent {
  constructor(props) {
    super(props);

    this._handelClickCity = this._handelClickCity.bind(this);
  }

  _handelClickCity(evt) {
    evt.preventDefault();
    const {onChangeCity, history} = this.props;
    const city = evt.currentTarget.getAttribute(`data-city`);

    onChangeCity(city);
    history.push(city);
  }

  render() {
    const {favorites, cities} = this.props;

    return (
      <ul className="favorites__list" aria-live="polite" role="status">
        {
          cities.map((group) => {
            return <li key={group} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a
                    href="#"
                    type="button"
                    onClick={this._handelClickCity}
                    data-city={group}
                    className="locations__item-link"
                  >
                    <span>{group}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places" aria-live="polite" role="status">
                {favorites[group].map((offer) => {
                  return <CardPlace
                    {...offer}
                    onSelected={() => {}}
                    classModPrefix={`favorites`}
                    mainClassMod={`favorites__card`}
                    key={offer.id}
                  />;
                })}
              </div>
            </li>;
          })
        }
      </ul>
    );
  }
}

Favorites.propTypes = {
  favorites: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onChangeCity: (city) => dispatch(ActionCreators.setCity(city)),
});

const enhance = compose(
    withRouter,
    connect(null, mapDispatchToProps)
);

export default enhance(Favorites);
