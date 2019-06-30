import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreators} from "./../../reducer/data/data";
import CardPlace from "../card-place/card-place.jsx";

export class Offers extends PureComponent {
  constructor(props) {
    super(props);
    this.onSelectOffer = this.onSelectOffer.bind(this);
  }

  onSelectOffer(id) {
    this.props.setActiveOffer(id);
  }

  render() {
    const {offers, classModOffers = []} = this.props;
    return <div
      className={`${classModOffers.join(` `)} places__list`}
      role="status"
      aria-live="polite"
    >
      {offers.map((offer) => {
        return <CardPlace
          key={offer.id}
          {...offer}
          onSelected={this.onSelectOffer}
          classModPrefix={`cities`}
          mainClassMod={`cities__place-card`}
        />;
      })}
    </div>;
  }
}

Offers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    previewPhoto: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
  classModOffers: PropTypes.array,
  classModCard: PropTypes.string,
  setActiveOffer: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setActiveOffer: (id) => dispatch(ActionCreators.setActiveIdOffer(id)),
});

export default connect(null, mapDispatchToProps)(Offers);
