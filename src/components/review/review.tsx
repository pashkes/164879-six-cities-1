import * as React from "react";

import {toRelatedRating} from "./../../utils";
import {Comment} from "../../types";

const Review: React.FunctionComponent<Comment> = (props) => {
  const {
    comment,
    date,
    rating,
    avatar,
    name,
    machineDate,
  } = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt={name}/>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${toRelatedRating(rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={machineDate}>{date}</time>
      </div>
    </li>
  );
};

export default Review;
