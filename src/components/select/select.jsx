import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import withSelect from "./../../hocs/with-select/with-select";
import Option from "./../option/option.jsx";

export class Select extends PureComponent {
  constructor(props) {
    super(props);

    this._handleClickDocumentOutside = this._handleClickDocumentOutside.bind(this);
    this._onFocusButton = this._onFocusButton.bind(this);

    this.dropdown = React.createRef();
    this.button = React.createRef();
  }

  componentDidMount() {
    window.addEventListener(`click`, this._handleClickDocumentOutside);
  }

  componentWillUnmount() {
    window.removeEventListener(`click`, this._handleClickDocumentOutside);
  }

  _handleClickDocumentOutside(evt) {
    const dropdown = this.dropdown.current.contains(evt.target);
    const button = this.button.current.contains(evt.target);
    const {isOpen, onCloseDropdown} = this.props;

    if (isOpen && !dropdown && !button) {
      onCloseDropdown();
    }
  }

  _onFocusButton() {
    this.button.current.focus();
  }

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
        <button type="button"
          className="places__sorting-type"
          onClick={onOpenDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}
          id="sorter"
          ref={this.button}
        >
          {selectedName}
          <svg className="places__sorting-arrow" width="7" height="4" aria-hidden="true">
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </button>
        <ul
          onKeyDown={onKeyDownCloseDropdown}
          ref={this.dropdown}
          aria-labelledby="sorter"
          className={`${isOpen ? `places__options--opened` : ``} places__options places__options--custom`}
          tabIndex="-1"
        >
          {options.map((option) => {
            return <Option
              onSelectOption={onSelectOption}
              isSelected={selected === option.value}
              onFocusButton={this._onFocusButton}
              value={option.value}
              name={option.name}
              button={this.button}
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

Select.propTypes = {
  onOpenDropdown: PropTypes.func.isRequired,
  onSelectOption: PropTypes.func.isRequired,
  onKeyDownCloseDropdown: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  selected: PropTypes.string.isRequired,
  selectedName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onCloseDropdown: PropTypes.func.isRequired,
};

export default withSelect(Select);
