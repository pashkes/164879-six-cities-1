import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Option} from './option.jsx';
configure({adapter: new Adapter()});

describe(`Option renders correctly`, () => {
  it(`in default state`, () => {
    const option = shallow(<Option
      button={{}}
      name={`Popular`}
      setTypeSort={jest.fn()}
      onSelect={jest.fn()}
      value={``}
      isSelected={false}
      onSelectOption={jest.fn()}
    />);
    expect(option).toMatchSnapshot();
  });
});
