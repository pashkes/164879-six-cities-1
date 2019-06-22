import React from "react";
import PropTypes from "prop-types";
import Cities from "../cities/cities.jsx";
import Constants from "../../constants";
import Offers from "../offers/offers.jsx";
import Map from "../map/map.jsx";
import {
  getActiveCity,
  getFilteredOffers,
  getCoordinatesOfCurrentCity,
  getSelectedOffer,
} from "../../reducer/data/selectors";
import {connect} from "react-redux";

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
        <Cities cities={Constants.CITIES}/>
      </div>
      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {currentCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">Popular<svg className="places__sorting-arrow" width="7" height="4"><use
                xlinkHref="#icon-arrow-select"/></svg></span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
              {/* <select className="places__sorting-type" id="places-sorting">
                <option className="places__option" value="popular" selected="">Popular</option>
                <option className="places__option" value="to-high">Price: low to high</option>
                <option className="places__option" value="to-low">Price: high to low</option>
                <option className="places__option" value="top-rated">Top rated first</option>
              </select>*/}
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

Catalog.propTypes = {
  currentCity: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  coordinates: PropTypes.array.isRequired,
  currentOffer: PropTypes.array,
};

const mapStateToProps = (state) => ({
  currentCity: getActiveCity(state),
  offers: getFilteredOffers(state),
  coordinates: getCoordinatesOfCurrentCity(state),
  currentOffer: getSelectedOffer(state),
});

export {mapStateToProps};
export default connect(mapStateToProps)(Catalog);
