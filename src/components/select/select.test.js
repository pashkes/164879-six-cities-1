import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {Select} from './select.jsx';
configure({adapter: new Adapter()});

it(`Select renders correctly`, () => {
  const option = shallow(<Select
    onSelected={jest.fn()}
    selected={``}
    onOpenDropdown={jest.fn()}
    onSelectOption={jest.fn()}
    selectedName={``}
    isOpen={false}
    onCloseDropdown={jest.fn()}
    options={[]}
    onKeyDownCloseDropdown={jest.fn()}
  />);
  expect(option).toMatchSnapshot();
});
