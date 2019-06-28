import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "recompose";

import {Operation} from "../../reducer/user/user";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import Constants from "./../../constants";

class FavoriteButton extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      isFavorite,
      addToFavorites,
      id,
      removeFromFavorite,
      isAuthorizationRequired,
      history,
    } = this.props;

    if (isAuthorizationRequired) {
      history.push(Constants.LOGIN_PATH);
      return;
    }
    if (isFavorite) {
      removeFromFavorite(id);
    } else {
      addToFavorites(id);
    }
  }

  render() {
    const {isFavorite, prefixClass, width = 18, height = 19} = this.props;
    return (
      <button
        onClick={this.handleClick}
        type="button"
        className={`${prefixClass}__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`}
        aria-pressed={isFavorite ? `true` : `false`}
      >
        <svg className={`place-card__bookmark-icon`} width={width} height={height}>
          <use xlinkHref="#icon-bookmark"/>
        </svg>
        <span className="visually-hidden">{isFavorite ? `In` : `To`} bookmarks</span>
      </button>
    );
  }
}

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  prefixClass: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isAuthorizationRequired: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (id) => dispatch(Operation.addToFavorites(id)),
  removeFromFavorite: (id) => dispatch(Operation.removeFromFavorite(id)),
});

const favoriteButton = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
);

export default favoriteButton(FavoriteButton);
