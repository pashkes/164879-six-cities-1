import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import CardPlace from "../card-place/card-place.jsx";
import {ActionCreators} from "./../../reducer/data/data";

export class Offers extends PureComponent {
  constructor(props) {
    super(props);
    this.onSelected = this.onSelected.bind(this);
  }

  onSelected(id) {
    this.props.setActiveOffer(id);
  }

  render() {
    const {offers, classModOffers = [], classModCard} = this.props;
    return <div className={`${classModOffers.join(` `)} places__list`}>
      {offers.map((offer) => {
        return <CardPlace
          key={offer.id}
          {...offer}
          onSelected={this.onSelected}
          classMod={classModCard}
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
  setActiveOffer: (id) => dispatch(ActionCreators.idActiveOffer(id)),
});

export default connect(null, mapDispatchToProps)(Offers);
