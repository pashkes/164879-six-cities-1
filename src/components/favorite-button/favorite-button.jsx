import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import {Operation} from "../../reducer/user/user";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import Constants from "./../../constants";

class FavoriteButton extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isRedirect: false,
    };
  }

  handleClick() {
    const {isFavorite, addToFavorites, id, removeFromFavorite, isAuthorization} = this.props;
    if (!isAuthorization) {
      this.setState({isRedirect: true});
    }
    if (isFavorite) {
      removeFromFavorite(id);
    } else {
      addToFavorites(id);
    }
  }

  render() {
    const {isFavorite, prefixClass, width = 18, height = 19} = this.props;
    const {isRedirect} = this.state;
    return (
      <Fragment>
        {
          !isRedirect ?
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
            : <Redirect to={Constants.LOGIN_PATH} />
        }
      </Fragment>
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
  isAuthorization: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorization: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (id) => dispatch(Operation.addToFavorites(id)),
  removeFromFavorite: (id) => dispatch(Operation.removeFromFavorite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
