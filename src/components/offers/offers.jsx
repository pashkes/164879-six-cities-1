import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CardPlace from '../card-place/card-place.jsx';
import {connect} from "react-redux";

class Offers extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
    this.onSelected = this.onSelected.bind(this);
  }

  onSelected(id) {
    this.setState({current: id});
  }

  render() {
    const offers = this.props.offers;
    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        return <CardPlace
          key={offer.id}
          {...offer}
          onSelected={this.onSelected}
          selected={this.state.currentCity === offer.id}
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

const mapStateToProps = (state) => {
  return {
    offers: state.offers.filter((offer) => {
      return offer.city === state.city;
    })
  };
};

export default connect(mapStateToProps)(Offers);
