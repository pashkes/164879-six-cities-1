import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CardPlace from '../card-place/card-place.jsx';


class Offers extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
    this.onSelected = this.onSelected.bind(this);
  }

  onSelected(id) {
    this.setState({selected: id});
  }

  render() {
    const offers = this.props.offers;
    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        return <CardPlace
          key={offer.id}
          {...offer}
          onSelected={this.onSelected}
          selected={this.state.selected === offer.id}
        />;
      })}
    </div>;
  }
}

Offers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
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
