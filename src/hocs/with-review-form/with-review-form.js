import React, {PureComponent} from "react";

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
      };
    }

    handlerTextMessage(evt) {
      this.setState({comment: evt.target.value});
      const isMessageFilled = this.messageBlock.current.value.length >= CommentLength.MIN;
      const isButtonDisabled = this.submitButton.current.disabled;
      const isRatingSelected = this.state.rating > 0;
      const isMessageEmpty = this.messageBlock.current.value.length < CommentLength.MIN;
      if (isMessageFilled && isButtonDisabled && isRatingSelected) {
        this.submitButton.current.disabled = !isButtonDisabled;
      }
      if (isMessageEmpty) {
        this.submitButton.current.disabled = true;
      }
    }
    setRating(value) {
      this.setState({rating: value});
      const isMessageFilled = this.messageBlock.current.value.length >= CommentLength.MIN;
      const isButtonDisabled = this.submitButton.current.disabled;
      if (isButtonDisabled && isMessageFilled) {
        this.submitButton.current.disabled = false;
      }
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
        />
      );
    }
  }

  return WithReviewForm;
};

export default withReviewForm;
