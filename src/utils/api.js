import axios from "axios";
import { store } from "./../redux/store";
import { loading, logoutSuccess } from "../redux/actions";
import { withRouter } from "react-router-dom";

const APIHost = () => {
  let host = process.env.REACT_APP_BASEURL;
  return host;
};

const axiosInstance = axios.create({
  baseURL: APIHost(),
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = store.getState().Auth.access_token || null;
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // // console.log("api.js response", response);
    store.dispatch(loading(false));
    return response;
  },
  (error) => {
    // console.log("api.js Error", error.response)
    store.dispatch(loading(false));
    if (error.config.url !== "auth/login") {
      if (error.response.status === 401) {
        store.dispatch(logoutSuccess());
        window.location = "/";
      }
    }
    return Promise.reject(error.response);
  }
);

export default withRouter(axiosInstance);
