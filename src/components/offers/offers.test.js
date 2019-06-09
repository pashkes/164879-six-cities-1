import React from 'react';
import {Offers} from "./../offers/offers";
import offers from "../../mock/offers";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

it(`list of offers renders correctly`, () => {
  const cards = shallow(<Offers offers={offers} />);
  expect(cards).toMatchSnapshot();
});
