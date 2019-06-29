import React from "react";
import CardPlace from "../card-place/card-place.jsx";
import PropTypes from "prop-types";


const Favorites = ({favorites, cities}) => {
  return (
    <ul className="favorites__list" aria-live="polite" role="status">{
      cities.map((group) => {
        return <li key={group} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a href="#" className="locations__item-link">
                <span>{group}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places" aria-live="polite" role="status">
            {favorites[group].map((offer) => {
              return <CardPlace
                onSelected={() => {}}
                classModPrefix={`favorites`}
                mainClassMod={`favorites__card`}
                key={offer.id}
                {...offer}
              />;
            })}
          </div>
        </li>;
      })

    }</ul>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired,
};

export default Favorites;
