import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "recompose";

import {Operation} from "../../reducer/data/data";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import Constants from "./../../constants";

export class FavoriteButton extends PureComponent {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    const {
      isFavorite,
      onAddToFavorites,
      id,
      onRemoveFromFavorites,
      isAuthRequire,
      history,
    } = this.props;

    if (isAuthRequire) {
      history.push(Constants.LOGIN_PATH);
      return;
    }
    if (isFavorite) {
      onRemoveFromFavorites(id);
    } else {
      onAddToFavorites(id);
    }
  }

  render() {
    const {isFavorite, prefixClass, width = 18, height = 19} = this.props;

    return (
      <button
        onClick={this._handleClick}
        type="button"
        className={`${prefixClass}__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`}
        aria-pressed={isFavorite ? `true` : `false`}
      >
        <svg className={`place-card__bookmark-icon`} aria-hidden="true" width={width} height={height}>
          <use xlinkHref="#icon-bookmark"/>
        </svg>
        <span className="visually-hidden">{isFavorite ? `In` : `To`} bookmarks</span>
      </button>
    );
  }
}

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onAddToFavorites: PropTypes.func.isRequired,
  onRemoveFromFavorites: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  prefixClass: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  isAuthRequire: PropTypes.bool.isRequired,
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isAuthRequire: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAddToFavorites: (id) => dispatch(Operation.addToFavorites(id)),
  onRemoveFromFavorites: (id) => dispatch(Operation.removeFromFavorites(id)),
});

const enhance = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(FavoriteButton);
