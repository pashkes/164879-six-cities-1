import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {CommentLength} from "../../constants";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this._handleTextMessage = this._handleTextMessage.bind(this);
      this._onSetRating = this._onSetRating.bind(this);

      this.state = {
        rating: 0,
        comment: ``,
        isValidate: false,
      };
    }

    _handleTextMessage(evt) {
      this.setState({comment: evt.target.value});
    }

    componentDidUpdate() {
      const {comment, rating} = this.state;
      const isMessageFilled = comment.length >= CommentLength.MIN && comment.length <= CommentLength.MAX;
      const isRatingSelected = rating > 0;

      this.setState({isValidate: isMessageFilled && isRatingSelected});

      if (this.props.isReviewSent) {
        this.setState({
          isValidate: false,
          rating: 0,
          comment: ``
        });
      }
    }

    _onSetRating(value) {
      this.setState({rating: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          comment={this.state.comment}
          onChangeMessage={this._handleTextMessage}
          onChangeRating={this._onSetRating}
          rating={this.state.rating}
          isFormValid={this.state.isValidate}
        />
      );
    }
  }

  WithReviewForm.propTypes = {
    isReviewSent: PropTypes.bool.isRequired,
  };

  return WithReviewForm;
};

export default withReviewForm;
