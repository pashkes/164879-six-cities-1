import React from "react";
import PropType from "prop-types";
import {connect} from "react-redux";

import {
  getOffers,
  getNearbyOffers,
  getCurrentCity,
  getCurrentOffer
} from "./../../reducer/data/selectors";
import withLoadData from "./../../hocs/with-load-data/with-load-data";
import {Operation as DataOperation} from "../../reducer/data/data";
import {toPercentRating} from "./../../utils";

import Layout from "./../layout/layout.jsx";
import Gallery from "./../gallery/gallery.jsx";
import Goods from "./../goods/goods.jsx";
import Reviews from "./../reviews/reviews.jsx";
import Map from "./../map/map.jsx";
import Offers from "./../offers/offers.jsx";

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
                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                    <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"/>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                    <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"/>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                    <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"/>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                    <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"/>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                    <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"/>
                      </svg>
                    </label>
                  </div>
                  <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"/>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and
                      describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                  </div>
                </form>
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
};

const mapStateToProps = (state, ownProps) => {
  const nearbyOffers = getNearbyOffers(state, ownProps.id);
  const offers = getOffers(state);

  return {
    isLoading: offers.length !== 0,
    currentOffer: getCurrentOffer(state, ownProps.id),
    nearbyOffers,
    offersOnMap: nearbyOffers ? nearbyOffers.map((it) => [it.location.latitude, it.location.longitude]) : [[0, 0]],
    activeCity: getCurrentCity(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(DataOperation.loadOffers()),
});

const PropertyWithLoader = withLoadData(Property);

export default connect(mapStateToProps, mapDispatchToProps)(PropertyWithLoader);
