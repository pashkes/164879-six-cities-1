import React, {PureComponent} from "react";
import CardPlace from "../card-place/card-place.jsx";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "recompose";

import {ActionCreators} from "../../reducer/data/data";

export class Favorites extends PureComponent {
  constructor(props) {
    super(props);
    this.handelClickCity = this.handelClickCity.bind(this);
  }

  handelClickCity(evt) {
    evt.preventDefault();
    const {changeCity, history} = this.props;
    const city = evt.currentTarget.getAttribute(`data-city`);
    changeCity(city);
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
                  <a href="#" type="button" onClick={this.handelClickCity} data-city={group} className="locations__item-link">
                    <span>{group}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places" aria-live="polite" role="status">
                {favorites[group].map((offer) => {
                  return <CardPlace
                    onSelected={() => {
                    }}
                    classModPrefix={`favorites`}
                    mainClassMod={`favorites__card`}
                    key={offer.id}
                    {...offer}
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
  changeCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => dispatch(ActionCreators.setCity(city)),
});

const _favorites = compose(
    withRouter,
    connect(null, mapDispatchToProps)
);

export default _favorites(Favorites);
