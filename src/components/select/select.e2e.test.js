import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Select} from "./select";
import {KeyCode} from "../../constants";

configure({adapter: new Adapter()});

describe(`Select works correctly`, () => {
  const onKeyDown = jest.fn();
  const onClickDropdown = jest.fn();
  const select = shallow(
      <Select
        options={[]}
        onKeyDown={onKeyDown}
        onClickDropdown={onClickDropdown}
        onSelectOption={jest.fn()}
        isOpen={false}
        selected={``}
        button={{}}
        dropdown={{}}
        selectedName={`Default value`}
      />
  );

  it(`should call callback after click the button opening dropdown`, () => {
    select.find(`button`).simulate(`click`);
    select.setProps({isOpen: true});
    expect(onClickDropdown).toBeCalled();
  });

  it(`should call callback after key down escape if dropdown is opened`, () => {
    select.find(`ul`).simulate(`keyDown`, {
      keyCode: KeyCode.ESC,
    });
    expect(onKeyDown).toBeCalled();
  });
});

