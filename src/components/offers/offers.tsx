import * as React from "react";
import {connect} from "react-redux";

import {ActionCreators} from "./../../reducer/data/data";
import CardPlace from "../card-place/card-place";

import {Offer} from "../../types";

interface Props {
  offers: Offer[],
  classModOffers: string,
  classModCard: string,
  onSetActiveOffer: (id: number) => void,
}

export class Offers extends React.PureComponent<Props> {
  onSelectOffer = (id) => {
    this.props.onSetActiveOffer(id);
  };

  render() {
    const {offers, classModOffers = []} = this.props;

    return <div className={`${classModOffers} places__list`}>
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

const mapDispatchToProps = (dispatch) => ({
  onSetActiveOffer: (id) => dispatch(ActionCreators.setActiveIdOffer(id)),
});

export default connect(null, mapDispatchToProps)(Offers);
