import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {FavoriteButton} from "./favorite-button";
import Constants from "./../../constants";

configure({adapter: new Adapter()});


describe(`button works correctly`, () => {
  it(`should call callback function if add to favorite`, () => {
    const callbackFnAddToFavorite = jest.fn();
    const id = 0;
    const button = shallow(<FavoriteButton
      isFavorite={false}
      onAddToFavorites={callbackFnAddToFavorite}
      onRemoveFromFavorites={jest.fn()}
      id={id}
      prefixClass={``}
      isAuthRequire={false}
    />);
    button.simulate(`click`);
    expect(callbackFnAddToFavorite).toHaveBeenCalled();
    expect(callbackFnAddToFavorite).toBeCalledWith(id);
  });

  it(`should call callback function if remove from favorite`, () => {
    const callbackFnRemoveFromFavorite = jest.fn();
    const id = 0;
    const button = shallow(<FavoriteButton
      isFavorite={true}
      onAddToFavorites={jest.fn()}
      onRemoveFromFavorites={callbackFnRemoveFromFavorite}
      id={id}
      prefixClass={``}
      isAuthRequire={false}
    />);
    button.simulate(`click`);
    expect(callbackFnRemoveFromFavorite).toHaveBeenCalled();
    expect(callbackFnRemoveFromFavorite).toBeCalledWith(id);
  });

  it(`should redirect to login if user is require authorization`, () => {
    const push = jest.fn();
    const history = {
      push
    };
    const button = shallow(<FavoriteButton
      isFavorite={true}
      onAddToFavorites={jest.fn()}
      onRemoveFromFavorites={jest.fn()}
      id={0}
      prefixClass={``}
      isAuthRequire={true}
      history={history}
    />);
    button.simulate(`click`);
    expect(push).toBeCalled();
    expect(push).toBeCalledWith(Constants.LOGIN_PATH);
  });
});

