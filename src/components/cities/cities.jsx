import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import City from '../city-link/cityLink.jsx';

const Cities = ({cities}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, i) => <City key={i} city={city}/>)}
      </ul>
    </section>
  );
};

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    cities: [...new Set([...state.offers.map((offer) => offer.city)])],
  };
};

export {Cities};
export default connect(mapStateToProps)(Cities);
