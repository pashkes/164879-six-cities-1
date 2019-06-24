import React from "react";
import PropTypes from "prop-types";
import Constants from "../../constants";

import Cities from "../cities/cities.jsx";
const MainEmpty = ({selectedCity}) => {
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="cities tabs">
        <Cities cities={Constants.CITIES} />
      </div>
      <div className="cities__places-wrapper">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property availbale at the moment in {selectedCity}</p>
            </div>
          </section>
          <div className="cities__right-section">
          </div>
        </div>
      </div>
    </main>
  );
};

MainEmpty.propTypes = {
  selectedCity: PropTypes.string.isRequired,
};

export default MainEmpty;
