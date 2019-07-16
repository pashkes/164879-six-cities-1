import * as React from "react";

import withSelect from "./../../hocs/with-select/with-select";
import Option from "./../option/option";

interface Props {
  onOpenDropdown: () => void,
  onSelectOption: () => void,
  onKeyDownCloseDropdown: () => void,
  isOpen: boolean,
  selected: string,
  selectedName: string,
  options: {
    value: string,
    selected: boolean,
    name: string,
  }[] | null,
  onCloseDropdown: () => void,
}

export class Select extends React.PureComponent<Props, null> {
  readonly _button: React.RefObject<HTMLButtonElement>;
  readonly _dropdown: React.RefObject<HTMLUListElement>;

  constructor(props) {
    super(props);

    this._dropdown = React.createRef();
    this._button = React.createRef();
  }

  componentDidMount() {
    window.addEventListener(`click`, this.handleClickDocumentOutside);
  }

  componentWillUnmount() {
    window.removeEventListener(`click`, this.handleClickDocumentOutside);
  }

  handleClickDocumentOutside = (evt) => {
    const dropdown = this._dropdown.current.contains(evt.target);
    const button = this._button.current.contains(evt.target);
    const {isOpen, onCloseDropdown} = this.props;

    if (isOpen && !dropdown && !button) {
      onCloseDropdown();
    }
  };

  onFocusButton = () => {
    this._button.current.focus();
  };

  render() {
    const {
      onOpenDropdown,
      isOpen,
      selected,
      onSelectOption,
      options,
      selectedName,
      onKeyDownCloseDropdown,
    } = this.props;

    return (
      <React.Fragment>
        <button
          type="button"
          className="places__sorting-type"
          onClick={onOpenDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}
          id="sorter"
          ref={this._button}
        >
          {selectedName}
          <svg className="places__sorting-arrow" width="7" height="4" aria-hidden="true">
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </button>
        <ul
          onKeyDown={onKeyDownCloseDropdown}
          ref={this._dropdown}
          aria-labelledby="sorter"
          className={`${isOpen ? `places__options--opened` : ``} places__options places__options--custom`}
          tabIndex={-1}
        >
          {options.map((option) => {
            return <Option
              onSelectOption={onSelectOption}
              isSelected={selected === option.value}
              onFocusButton={this.onFocusButton}
              value={option.value}
              name={option.name}
              button={this._button}
              key={option.value}
            />;
          })}
        </ul>
        <select defaultValue={selected} hidden id="places-sorting">
          <option value={selected}>{selectedName}</option>
        </select>
      </React.Fragment>
    );
  }
}

export default withSelect(Select);
