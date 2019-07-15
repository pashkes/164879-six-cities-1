import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {TypeSort, SortOptions} from "../../constants";
import {
  getCurrentCity,
  getFilteredOffers,
  getSelectedOffer,
  getTypeSort,
  getCitiesFromServer,
} from "../../reducer/data/selectors";

import Map from "../map/map.jsx";
import Sorter from "./../select/select.jsx";
import Cities from "../cities/cities.jsx";
import Offers from "../offers/offers.jsx";
import MainEmpty from "./../main-empty/main-empty.jsx";

export const Catalog = (props) => {
  const {
    currentCity,
    offers,
    coordinates,
    currentOffer,
    cities,
  } = props;

  return (
    <Fragment>
      {
        offers.length !== 0 ?
          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <div className="cities tabs">
              <Cities cities={cities}/>
            </div>
            <div className="cities__places-wrapper">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found" role="status" aria-live="polite">{offers.length} places to stay in {currentCity}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <Sorter options={SortOptions}/>
                  </form>
                  <Offers offers={offers} classModOffers={[`cities__places-list`, `tabs__content`]}/>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map selectedOffer={currentOffer} currentCity={currentCity} coordinates={coordinates}/>
                  </section>
                </div>
              </div>
            </div>
          </main>
          : <MainEmpty selectedCity={currentCity}/>
      }
    </Fragment>
  );
};

Catalog.propTypes = {
  currentCity: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  coordinates: PropTypes.array.isRequired,
  currentOffer: PropTypes.array,
  cities: PropTypes.array.isRequired,
};

const sortOffers = (offers, sort) => {
  switch (sort.type) {
    case (TypeSort.TO_HIGH):
      return [...offers].sort((current, next) => current.price - next.price);
    case (TypeSort.TO_LOW):
      return [...offers].sort((current, next) => next.price - current.price);
    case (TypeSort.TOP_RATED):
      return [...offers].sort((current, next) => next.rating - current.rating);
    default:
      return offers;
  }
};

const mapStateToProps = (state) => {
  const offers = getFilteredOffers(state);
  const typeSort = getTypeSort(state);

  return {
    currentCity: getCurrentCity(state),
    offers: sortOffers(offers, typeSort),
    coordinates: offers.map((it) => [it.location.latitude, it.location.longitude]),
    currentOffer: getSelectedOffer(state),
    cities: getCitiesFromServer(state),
  };
};

export default connect(mapStateToProps)(Catalog);
