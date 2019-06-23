import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Cities from "../cities/cities.jsx";
import Constants from "../../constants";
import Offers from "../offers/offers.jsx";
import Map from "../map/map.jsx";
import {
  getActiveCity,
  getFilteredOffers,
  getSelectedOffer,
} from "../../reducer/data/selectors";
import Sorter from "./../sorter/sorter.jsx";

export const Catalog = (props) => {
  const {
    currentCity,
    offers,
    coordinates,
    currentOffer,
  } = props;
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="cities tabs">
        <Cities cities={Constants.CITIES} />
      </div>
      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {currentCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <Sorter options={SortList} />
            </form>
            <Offers classModCard={`cities__place-card`} offers={offers} classModOffers={[`cities__places-list`, `tabs__content`]} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map selectedOffer={currentOffer} currentCity={currentCity} coordinates={coordinates} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

const SortList = [
  {
    value: `Popular`,
    selected: true,
  },
  {
    value: `Price: low to high`,
    selected: false,
  },
  {
    value: `Price: high to low`,
    selected: false,
  },
  {
    value: `Top rated first`,
    selected: false,
  }
];


Catalog.propTypes = {
  currentCity: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  coordinates: PropTypes.array.isRequired,
  currentOffer: PropTypes.array,
};

const mapStateToProps = (state) => ({
  currentCity: getActiveCity(state),
  offers: getFilteredOffers(state),
  coordinates: (getFilteredOffers(state)).map((it) => [it.location.latitude, it.location.longitude]),
  currentOffer: getSelectedOffer(state),
});

export {mapStateToProps};
export default connect(mapStateToProps)(Catalog);
