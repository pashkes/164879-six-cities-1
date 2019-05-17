import React from 'react';
import Offers from "./../offers/offers";
import offers from './../../mock/offers';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it(`Checking state of offers after clicking the image of first offer`, () => {
  const cards = mount(<Offers offers={offers}/>);
  const firstOffer = cards.find(`.place-card`).first();
  const ID_FIRST_OFFER = offers[0].id;
  firstOffer.find(`.cities__image-wrapper a`).simulate(`click`);
  expect(cards.state().selected).toEqual(ID_FIRST_OFFER);
});
