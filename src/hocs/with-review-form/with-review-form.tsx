import * as React from "react";
import {Subtract} from 'utility-types';

import {CommentLength} from "../../constants";

interface InjectedProps {
  comment: string,
  onChangeMessage: () => void,
  onChangeRating: () => void,
  rating: number,
  isFormValid: boolean,
  isValidate: boolean
}

interface State {
  rating: number,
  comment: string,
  isValidate: boolean,
}

const withReviewForm = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithReviewForm extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.onSetRating = this.onSetRating.bind(this);

      this.state = {
        rating: 0,
        comment: ``,
        isValidate: false,
      };
    }

    handleTextMessage = (evt) => {
      this.setState({comment: evt.target.value});
    };

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

    onSetRating = (value) => {
      this.setState({rating: value});
    };

    render() {
      return (
        <Component
          {...this.props}
          comment={this.state.comment}
          onChangeMessage={this.handleTextMessage}
          onChangeRating={this.onSetRating}
          rating={this.state.rating}
          isFormValid={this.state.isValidate}
        />
      );
    }
  }

  return WithReviewForm;
};

export default withReviewForm;
