import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {CommentLength} from "../../constants";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);
      this.handlerTextMessage = this.handlerTextMessage.bind(this);
      this.setRating = this.setRating.bind(this);
      this.submitButton = React.createRef();
      this.messageBlock = React.createRef();
      this.state = {
        rating: 0,
        comment: ``,
        isValidate: false,
      };
    }

    handlerTextMessage(evt) {
      this.setState({comment: evt.target.value});
    }

    componentDidUpdate() {
      const value = this.messageBlock.current.value;
      const isMessageFilled = value.length >= CommentLength.MIN && value.length <= CommentLength.MAX;
      const isRatingSelected = this.state.rating > 0;
      this.setState({isValidate: isMessageFilled && isRatingSelected});

      if (this.props.isReviewSent) {
        this.setState({
          isValidate: false,
          rating: 0,
          comment: ``
        });
      }
    }

    setRating(value) {
      this.setState({rating: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          comment={this.state.comment}
          onChangeMessage={this.handlerTextMessage}
          onChangeRating={this.setRating}
          rating={this.state.rating}
          submitButton={this.submitButton}
          textarea={this.messageBlock}
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
