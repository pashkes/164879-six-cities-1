import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "recompose";

import Rating from "../rating/rating.jsx";
import withReviewForm from "./../../hocs/with-review-form/with-review-form";

import {Operation, ActionCreators} from "../../reducer/data/data";

import {
  getStatusSendingReview,
  getStatusIsSentReview,
  getError,
} from "./../../reducer/data/selectors";
import {KeyCode} from "../../constants";
import {CommentLength} from "../../constants";

export class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleMessageKeyDown = this.handleMessageKeyDown.bind(this);
    this.handleMessageOutside = this.handleMessageOutside.bind(this);
    this.form = React.createRef();
  }

  handleSubmitForm(evt) {
    evt.preventDefault();
    const {sendComment, rating, comment} = this.props;
    sendComment({rating, comment});
  }

  handleMessage() {
    document.addEventListener(`keydown`, this.handleMessageKeyDown);
  }

  handleMessageKeyDown({ctrlKey, keyCode}) {
    const {
      sendComment,
      rating,
      comment,
      isFormValid,
    } = this.props;
    if (isFormValid && ctrlKey && keyCode === KeyCode.ENTER) {
      sendComment({rating, comment});
    }
  }

  handleMessageOutside() {
    document.removeEventListener(`keydown`, this.handleMessageKeyDown);
  }

  componentDidUpdate() {
    const {isReviewSent, updateForm} = this.props;
    if (isReviewSent) {
      updateForm();
      this.form.current.reset();
    }
  }

  render() {
    const {
      onChangeMessage,
      onChangeRating,
      error,
      submitButton,
      textarea,
      isReviewSending,
      isFormValid,
    } = this.props;
    return (
      <form
        className="reviews__form form"
        onSubmit={this.handleSubmitForm}
        action="#"
        method="post"
        ref={this.form}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <Rating onChangeRating={onChangeRating}/>
        <textarea
          ref={textarea}
          onChange={onChangeMessage}
          onFocus={this.handleMessage}
          onBlur={this.handleMessageOutside}
          minLength={CommentLength.MIN}
          maxLength={CommentLength.MAX}
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"/>
        <span role="alert" aria-live="assertive">{error ? error : ``}</span>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">{CommentLength.MIN} characters</b>.
          </p>
          <button
            ref={submitButton}
            className="reviews__submit form__submit button"
            type="submit"
            disabled={!(isFormValid && !isReviewSending)}
          >{isReviewSending ? `Sending...` : `Submit`}
          </button>
        </div>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  onChangeMessage: PropTypes.func.isRequired,
  onChangeRating: PropTypes.func.isRequired,
  idCurrentOffer: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  sendComment: PropTypes.func.isRequired,
  submitButton: PropTypes.object.isRequired,
  textarea: PropTypes.object.isRequired,
  updateForm: PropTypes.func.isRequired,
  isReviewSending: PropTypes.bool.isRequired,
  isReviewSent: PropTypes.bool.isRequired,
  error: PropTypes.string,
  isFormValid: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isReviewSending: getStatusSendingReview(state),
  isReviewSent: getStatusIsSentReview(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendComment: (data)=> {
    dispatch(Operation.postReview(ownProps.idCurrentOffer, data));
    dispatch(ActionCreators.lockForm(true));
  },
  updateForm: () => dispatch(ActionCreators.cleanForm(false)),
});

const reviewForm = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withReviewForm,
);
export default reviewForm(ReviewForm);
