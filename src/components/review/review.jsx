import React from "react";
import PropTypes from "prop-types";

import Constants from "./../../constants";
import {convertRating} from "./../../utils";

const Review = (props) => {
  const {
    comment,
    date,
    rating,
    avatar,
    name,
  } = props;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`${Constants.BASE_URL}/${avatar}`} width="54" height="54" alt={name}/>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: convertRating(rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">{`${date.getMonth()} ${date.getFullYear()}`}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Review;
