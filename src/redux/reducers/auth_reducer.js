import * as actionTypes from "../actions/actionTypes";
import produce from "immer";

const INITIAL_STATE = {
  user_id: null,
  access_token: null,
  forgotPasswordEmail: "",
  resetPasswordSuccess: false,
  forgotPassword: { isSubmitted: false, error: {} },
  userLogin: {
    isSubmitted: false,
    error: false,
  },
  role: null,
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Login
    case actionTypes.REQUEST_LOGIN: {
      // // console.log("REQUEST_LOGIN")

      return produce(state, (draft) => {
        draft.userLogin.isSubmitted = false;
        draft.userLogin.error = false;
        draft.access_token = null;
      });
    }
    case actionTypes.SUCCESS_LOGIN: {
      return produce(state, (draft) => {
        draft.userLogin.isSubmitted = true;
        draft.userLogin.error = false;
        draft.access_token = action.data.access_token;
        draft.role = action.data.role;
        draft.user_id = action.data.user_id;
      });
    }
    case actionTypes.FAIL_LOGIN: {
      return produce(state, (draft) => {
        draft.userLogin.isSubmitted = true;
        draft.userLogin.error = true;
        draft.access_token = null;
        draft.role = null;
      });
    }
    // Logout
    case actionTypes.SUCCESS_LOGOUT:
      return produce(state, (draft) => {
        draft.access_token = null;
        draft.role = null;
      });
    // Forgot Password
    case actionTypes.SUCCESS_FORGOT_PASSWORD:
      return produce(state, (draft) => {
        draft.forgotPasswordEmail = action.data.email;
      });
    case actionTypes.FAIL_FORGOT_PASSWORD:
    case actionTypes.CLEAR_FORGOT_PASSWORD:
      return produce(state, (draft) => {
        draft.forgotPasswordEmail = "";
        draft.forgotPassword.isSubmitted = true;
        draft.forgotPassword.error = action.data;
      });
    // Reset Password
    case actionTypes.SUCCESS_RESET_PASSWORD:
      return produce(state, (draft) => {
        draft.resetPasswordSuccess = true;
      });
    case actionTypes.FAIL_RESET_PASSWORD:
      return produce(state, (draft) => {
        draft.resetPasswordSuccess = false;
      });
    case actionTypes.CLEAR_RESET_PASSWORD:
      return produce(state, (draft) => {
        draft.resetPasswordSuccess = false;
      });

    default:
      return state;
  }
}
