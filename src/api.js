import axios from "axios";
import Constants from "./constants";

const createApi = (onLoginFail) => {
  const api = axios.create({
    baseURL: Constants.BASE_URL,
    timeout: Constants.TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === Constants.ACCESS_DENIED) {
      onLoginFail();
      return;
    }
    throw err;
  };
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
export default createApi;
