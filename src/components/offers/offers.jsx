import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CardPlace from '../card-place/card-place.jsx';


class Offers extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  _getEvent(index, evt) {
    evt.preventDefault();
    const selectedOffer = this.props.offers[index];
    this.setState({
      selected: <CardPlace key={selectedOffer.title} {...selectedOffer}/>
    });
  }

  render() {
    const offers = this.props.offers;
    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, index) => <CardPlace key={offer.title} onImageClickHandler={this._getEvent.bind(this, index)} {...offer}/>)}
    </div>;
  }
}

Offers.propsTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

export default Offers;
