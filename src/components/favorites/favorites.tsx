import * as React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "recompose";

import {ActionCreators} from "../../reducer/data/data";
import CardPlace from "../card-place/card-place";

import {Offer} from "../../types";

interface Props {
  favorites: {
    [key: string]: Offer[]
  },
  cities: string[],
  history: any,
  onChangeCity: (city: string) => void,
}

export class Favorites extends React.PureComponent<Props> {
  handelClickCity = (evt) => {
    evt.preventDefault();
    const {onChangeCity, history} = this.props;
    const city = evt.currentTarget.getAttribute(`data-city`);

    onChangeCity(city);
    history.push(city);
  };

  render() {
    const {favorites, cities} = this.props;

    return (
      <ul className="favorites__list" aria-live="polite" role="status">
        {
          cities.map((group) => {
            return <li key={group} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <button
                    type="button"
                    onClick={this.handelClickCity}
                    data-city={group}
                    className="locations__item-link"
                  >
                    <span>{group}</span>
                  </button>
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

const mapDispatchToProps = (dispatch) => ({
  onChangeCity: (city) => dispatch(ActionCreators.setCity(city)),
});

const enhance = compose(
    withRouter,
    connect(null, mapDispatchToProps)
);

export default enhance(Favorites);
