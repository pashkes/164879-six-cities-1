import * as React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "recompose";

import {Operation} from "../../reducer/data/data";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import Constants from "./../../constants";

interface Props {
  isFavorite: boolean,
  onAddToFavorites: (id: number) => void,
  onRemoveFromFavorites: (id: number) => void,
  id: number,
  prefixClass: string,
  width?: number,
  height?: number,
  isAuthRequire: boolean,
  history: any,
}

export class FavoriteButton extends React.PureComponent<Props, null> {
  handleClick = () => {
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
  };

  render() {
    const {isFavorite, prefixClass, width = 18, height = 19} = this.props;

    return (
      <button
        onClick={this.handleClick}
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
