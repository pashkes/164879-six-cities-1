import axios from 'axios';
import {ActionCreators} from "./reducer/user/user";
import Constants from './constants';

const createApi = (dispatch) => {
  const api = axios.create({
    baseURL: Constants.BASE_URL,
    timeout: Constants.TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === Constants.ACCESS_DENIED) {
      dispatch(ActionCreators.requireAuthorization(true));
    }
    return err;
  };
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
export default createApi;
