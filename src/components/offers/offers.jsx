import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardPlace from "../card-place/card-place.jsx";

export class Offers extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: null
    };
    this.onSelected = this.onSelected.bind(this);
  }

  onSelected(id) {
    this.setState({current: id});
  }

  render() {
    const {offers, classModOffers = [], classModCard} = this.props;
    return <div className={`${classModOffers.join(` `)} places__list`}>
      {offers.map((offer) => {
        return <CardPlace
          key={offer.id}
          {...offer}
          onSelected={this.onSelected}
          selected={this.state.current === offer.id}
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
};

export default Offers;
