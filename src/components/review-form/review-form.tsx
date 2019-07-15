import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "recompose";

import withReviewForm from "./../../hocs/with-review-form/with-review-form";
import {Operation, ActionCreators} from "../../reducer/data/data";
import {
  getStatusSendingReview,
  getStatusIsSentReview,
  getError,
} from "./../../reducer/data/selectors";
import {KeyCode} from "../../constants";
import {CommentLength} from "../../constants";

import Rating from "../rating/rating.jsx";

export class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSubmitForm = this._handleSubmitForm.bind(this);
    this._handleMessageKeyDown = this._handleMessageKeyDown.bind(this);

    this.form = React.createRef();
  }

  _handleSubmitForm(evt) {
    evt.preventDefault();
    const {onSendComment, rating, comment} = this.props;

    onSendComment({rating, comment});
  }

  _handleMessageKeyDown({ctrlKey, keyCode}) {
    const {
      onSendComment,
      rating,
      comment,
      isFormValid,
    } = this.props;

    if (isFormValid && ctrlKey && keyCode === KeyCode.ENTER) {
      onSendComment({rating, comment});
    }
  }

  componentDidUpdate() {
    const {isReviewSent, onUpdateForm} = this.props;

    if (isReviewSent) {
      onUpdateForm();
      this.form.current.reset();
    }
  }

  render() {
    const {
      onChangeMessage,
      onChangeRating,
      error,
      isReviewSending,
      isFormValid,
      comment,
    } = this.props;

    return (
      <form
        className="reviews__form form"
        onSubmit={this._handleSubmitForm}
        action="#"
        method="post"
        ref={this.form}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <Rating onChangeRating={onChangeRating}/>
        <textarea
          value={comment}
          onChange={onChangeMessage}
          onKeyDown={this._handleMessageKeyDown}
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
  onSendComment: PropTypes.func.isRequired,
  onUpdateForm: PropTypes.func.isRequired,
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
  onSendComment: (data) => {
    dispatch(Operation.postReview(ownProps.idCurrentOffer, data));
    dispatch(ActionCreators.lockForm(true));
  },
  onUpdateForm: () => dispatch(ActionCreators.cleanForm(false)),
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withReviewForm,
);
export default enhance(ReviewForm);
