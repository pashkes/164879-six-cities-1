import * as React from "react";
import {Link} from "react-router-dom";

import FavoriteButton from "./../favorite-button/favorite-button";

interface Props {
  id: number,
  title: string,
  previewPhoto: string,
  type: string,
  isPremium: boolean,
  isFavorite: boolean,
  price: number,
  rating: number,
  onSelected: (id: number) => void,
  classModPrefix: string,
  mainClassMod: string,
}

class CardPlace extends React.PureComponent<Props, null> {
  handleImageClick = (evt) => {
    const {onSelected, id} = this.props;
    evt.preventDefault();
    onSelected(id);
  };

  render() {
    const {
      isPremium,
      previewPhoto,
      price,
      isFavorite,
      rating,
      title,
      type,
      id,
      mainClassMod = ``,
      classModPrefix = ``,
    } = this.props;

    return <article className={`${mainClassMod} place-card`}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
      <div className={`${classModPrefix}__image-wrapper place-card__image-wrapper`}>
        <button type="button" onClick={this.handleImageClick}>
          <img className="place-card__image" src={previewPhoto} width="260" height="200" alt={title} />
        </button>
      </div>
      <div className={`${classModPrefix}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            id={id}
            isFavorite={isFavorite}
            prefixClass={`place-card`}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>;
  }
}

export default CardPlace;
