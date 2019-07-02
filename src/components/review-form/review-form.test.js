import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {ReviewForm} from './review-form.jsx';
configure({adapter: new Adapter()});

it(`Review form renders correctly`, () => {
  const reviewForm = shallow(<ReviewForm
    onChangeMessage={jest.fn()}
    onChangeRating={jest.fn()}
    idCurrentOffer={0}
    rating={0}
    comment={``}
    onSendComment={jest.fn()}
    onUpdateForm={jest.fn()}
    isReviewSending={false}
    isReviewSent={false}
    isFormValid={true}
    error={``}
  />);
  expect(reviewForm).toMatchSnapshot();
});
