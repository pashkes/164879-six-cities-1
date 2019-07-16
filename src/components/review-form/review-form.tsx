import * as React from "react";
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

import Rating from "../rating/rating";

interface Props {
  onChangeMessage: () => void,
  onChangeRating: () => void,
  idCurrentOffer: number,
  rating: number,
  comment: string,
  onSendComment: ({rating: number, comment: string}) => void,
  onUpdateForm: () => void,
  isReviewSending: boolean,
  isReviewSent: boolean,
  error: string,
  isFormValid: boolean,
}

export class ReviewForm extends React.PureComponent<Props> {
  readonly _form: React.RefObject<HTMLFormElement>;
  constructor(props) {
    super(props);

    this._form = React.createRef();
  }

  handleSubmitForm = (evt) => {
    evt.preventDefault();
    const {onSendComment, rating, comment} = this.props;

    onSendComment({rating, comment});
  };

  handleMessageKeyDown = ({ctrlKey, keyCode}) => {
    const {
      onSendComment,
      rating,
      comment,
      isFormValid,
    } = this.props;

    if (isFormValid && ctrlKey && keyCode === KeyCode.ENTER) {
      onSendComment({rating, comment});
    }
  };

  componentDidUpdate() {
    const {isReviewSent, onUpdateForm} = this.props;

    if (isReviewSent) {
      onUpdateForm();
      this._form.current.reset();
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
        onSubmit={this.handleSubmitForm}
        action="#"
        method="post"
        ref={this._form}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <Rating onChangeRating={onChangeRating}/>
        <textarea
          value={comment}
          onChange={onChangeMessage}
          onKeyDown={this.handleMessageKeyDown}
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
