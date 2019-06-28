import React from "react";
import PropType from "prop-types";
import {connect} from "react-redux";
import compose from 'recompose/compose';

import {
  getOffers,
  getNearbyOffers,
  getCurrentCity,
  getCurrentOffer
} from "./../../reducer/data/selectors";
import withLoadData from "./../../hocs/with-load-data/with-load-data";
import {Operation as DataOperation} from "../../reducer/data/data";
import {toPercentRating} from "./../../utils";
import {getAuthorizationStatus} from "../../reducer/user/selectors";

import Layout from "./../layout/layout.jsx";
import Gallery from "./../gallery/gallery.jsx";
import Goods from "./../goods/goods.jsx";
import Reviews from "./../reviews/reviews.jsx";
import Map from "./../map/map.jsx";
import Offers from "./../offers/offers.jsx";
import ReviewForm from "./../review-form/review-form.jsx";

export const Property = (props) => {
  const {
    images,
    isPremium,
    title,
    isFavorite,
    rating,
    price,
    host: {
      avatarURL,
      isPro,
      name,
    },
    goods,
    description,
    maxAdults,
    bedrooms,
    type,
    location: {latitude, longitude},
  } = props.currentOffer;
  const {
    id,
    activeCity,
    offersOnMap,
    nearbyOffers,
    isAuthentication,
  } = props;
  return (
    <Layout pageClasses={[`page`]}>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <Gallery photos={images}/>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{toPercentRating(rating)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{type}</li>
                <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
                <li className="property__feature property__feature--adults">{maxAdults}</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <Goods list={goods}/>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarURL} width="74" height="74" alt={name}/>
                  </div>
                  <span className="property__user-name">{name}</span>
                  {isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <Reviews id={id}/>
                {isAuthentication && <ReviewForm idCurrentOffer={id} />}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              selectedOffer={[latitude, longitude]}
              currentCity={activeCity}
              coordinates={offersOnMap}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <Offers
              offers={nearbyOffers}
              classModOffers={[`near-places__list`]}
              classModCard={`near-places__card`}
            />
          </section>
        </div>
      </main>
    </Layout>
  );
};

Property.propTypes = {
  id: PropType.string.isRequired,
  currentOffer: PropType.shape({
    images: PropType.array.isRequired,
    isPremium: PropType.bool.isRequired,
    title: PropType.string.isRequired,
    isFavorite: PropType.bool.isRequired,
    rating: PropType.number.isRequired,
    goods: PropType.array.isRequired,
    price: PropType.number.isRequired,
    host: PropType.shape({
      avatarURL: PropType.string.isRequired,
      name: PropType.string.isRequired,
      isPro: PropType.bool.isRequired,
    }).isRequired,
    description: PropType.string.isRequired,
    maxAdults: PropType.number.isRequired,
    bedrooms: PropType.number.isRequired,
    type: PropType.string.isRequired,
    location: PropType.shape({
      latitude: PropType.number.isRequired,
      longitude: PropType.number.isRequired,
    }).isRequired
  }).isRequired,
  nearbyOffers: PropType.array.isRequired,
  activeCity: PropType.string.isRequired,
  offersOnMap: PropType.array.isRequired,
  isAuthentication: PropType.bool.isRequired,
};


const mapStateToProps = (state, ownProps) => {
  const nearbyOffers = getNearbyOffers(state, ownProps.id);
  const offers = getOffers(state);

  return {
    isLoading: offers.length !== 0,
    currentOffer: getCurrentOffer(state, ownProps.id),
    nearbyOffers,
    offersOnMap: nearbyOffers ? nearbyOffers.map((it) => [it.location.latitude, it.location.longitude]) : [0, 0],
    activeCity: getCurrentCity(state),
    isAuthentication: getAuthorizationStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(DataOperation.loadData()),
});


const property = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoadData
);
export default property(Property);
