import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {ReviewForm} from "./review-form";
import {KeyCode} from "../../constants";

configure({adapter: new Adapter()});

describe(`form comment works is correctly`, () => {
  const onChangeTextarea = jest.fn();
  const onChangeRating = jest.fn();
  const sendForm = jest.fn();
  const updateForm = jest.fn();
  const focus = () => {
  };
  const textarea = {
    current: {
      focus
    }
  };
  const commentValue = `some text`;
  const ratingValue = 1;
  const submitForm = shallow(
      <ReviewForm
        onChangeMessage={onChangeTextarea}
        onChangeRating={onChangeRating}
        idCurrentOffer={0}
        rating={ratingValue}
        comment={commentValue}
        sendComment={sendForm}
        submitButton={{}}
        textarea={textarea}
        updateForm={updateForm}
        isReviewSending={false}
        isReviewSent={false}
        isFormValid={true}
      />
  );
  it(`submit form if key down Ctrl + Enter in focus textarea`, () => {
    submitForm.find(`textarea`).simulate(`keyDown`, {
      keyCode: KeyCode.ENTER,
      ctrlKey: true,
    });
    expect(sendForm).toBeCalled();
  });

  it(`handler on change in textarea works correctly`, () => {
    submitForm.find(`textarea`).simulate(`change`, commentValue);
    expect(onChangeTextarea).toBeCalled();
    expect(onChangeTextarea).toBeCalledWith(commentValue);
  });

  it(`handler submit form works is correctly`, () => {
    submitForm.simulate(`submit`, {preventDefault() {}});
    expect(sendForm).toBeCalled();
    expect(sendForm).toBeCalledWith({comment: commentValue, rating: ratingValue});
  });
});
