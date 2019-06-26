import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Rating from "../rating/rating.jsx";
import withReviewForm from "./../../hocs/with-review-form/with-review-form";
import {Operation} from "../../reducer/data/data";
import {KeyCode} from "../../constants";
import {CommentLength} from "../../constants";

export class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleMessageKeyDown = this.handleMessageKeyDown.bind(this);
    this.handleMessageOutside = this.handleMessageOutside.bind(this);
  }

  handleSubmitForm(evt) {
    evt.preventDefault();
    const {sendComment, rating, comment} = this.props;
    sendComment({rating, comment});
  }

  handleMessage() {
    document.addEventListener(`keydown`, this.handleMessageKeyDown);
  }

  handleMessageKeyDown(evt) {
    const {sendComment, rating, comment} = this.props;
    if (rating && comment.length >= CommentLength.MIN && evt.ctrlKey && evt.keyCode === KeyCode.ENTER) {
      sendComment({rating, comment});
    }
  }

  handleMessageOutside() {
    document.removeEventListener(`keydown`, this.handleMessageKeyDown);
  }

  render() {
    const {
      onChangeMessage,
      onChangeRating,
      comment,
      submitButton,
      textarea,
    } = this.props;
    return (
      <form
        className="reviews__form form"
        onSubmit={this.handleSubmitForm}
        action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <Rating onChangeRating={onChangeRating}/>
        <textarea
          ref={textarea}
          onChange={onChangeMessage}
          onFocus={this.handleMessage}
          onBlur={this.handleMessageOutside}
          value={comment}
          minLength={CommentLength.MIN}
          maxLength={CommentLength.MAX}
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"/>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">{CommentLength.MIN} characters</b>.
          </p>
          <button ref={submitButton} className="reviews__submit form__submit button" type="submit" disabled>Submit
          </button>
        </div>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  onChangeMessage: PropTypes.func.isRequired,
  onChangeRating: PropTypes.func.isRequired,
  idCurrentOffer: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  sendComment: PropTypes.func.isRequired,
  submitButton: PropTypes.object.isRequired,
  textarea: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendComment: (data) => dispatch(Operation.uploadReview(ownProps.idCurrentOffer, data))
});

export default connect(null, mapDispatchToProps)(withReviewForm(ReviewForm));
