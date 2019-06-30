import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Option} from "./option";
import {KeyCode} from "../../constants";

configure({adapter: new Adapter()});

describe(`Option work is correctly`, () => {
  const refButton = {
    current: {
      focus() {
      }
    }
  };
  const onSelect = jest.fn();
  const setTypeSort = jest.fn();

  it(`if click the option`, () => {

    const option = shallow(
        <Option
          onSelectOption={onSelect}
          isSelected={false}
          value={`value`}
          setTypeSort={setTypeSort}
          name={`name`}
          button={refButton}
        />
    );
    option.simulate(`click`);
    expect(onSelect).toHaveBeenCalled();
    expect(onSelect).toBeCalledWith(`value`, `name`);
    expect(setTypeSort).toHaveBeenCalled();
    expect(setTypeSort).toBeCalledWith(`value`);
  });

  it(`if key down key enter`, () => {
    const option = shallow(
        <Option
          onSelectOption={onSelect}
          isSelected={false}
          value={`value`}
          setTypeSort={setTypeSort}
          name={`name`}
          button={refButton}
        />
    );
    option.simulate(`keyDown`, {keyCode: KeyCode.ENTER});
    expect(onSelect).toHaveBeenCalled();
    expect(onSelect).toBeCalledWith(`value`, `name`);
    expect(setTypeSort).toHaveBeenCalled();
    expect(setTypeSort).toBeCalledWith(`value`);
  });

});
