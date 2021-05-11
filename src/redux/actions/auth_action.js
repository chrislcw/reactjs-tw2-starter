import * as actionTypes from './actionTypes';

// Login
export const login = data => {
  return {
    type: actionTypes.REQUEST_LOGIN,
    data,
  };
};

export const loginSuccess = data => {
  return {
    type: actionTypes.SUCCESS_LOGIN,
    data
  };
};

export const loginFail = data => {
  return {
    type: actionTypes.FAIL_LOGIN,
    data,
  };
};
// END Login

// Logout
export const logout = () => {
  return {
    type: actionTypes.REQUEST_LOGOUT,
  };
};

export const logoutSuccess = () => {
  return {
    type: actionTypes.SUCCESS_LOGOUT,
  };
};

export const logoutFail = () => {
  return {
    type: actionTypes.FAIL_LOGOUT,
  };
};
// END Logout

// Forgot Password
export const forgotPassword = data => {
  return {
    type: actionTypes.REQUEST_FORGOT_PASSWORD,
    data,
  };
};

export const forgotPasswordSuccess = data => {
  return {
    type: actionTypes.SUCCESS_FORGOT_PASSWORD,
    data,
  };
};

export const forgotPasswordFail = data => {
  return {
    type: actionTypes.FAIL_FORGOT_PASSWORD,
    data
  };
};

export const forgotPasswordClear = () => {
  return {
    type: actionTypes.CLEAR_FORGOT_PASSWORD,
  };
};
// END Forgot Password

// Reset Password
export const resetPassword = data => {
  return {
    type: actionTypes.REQUEST_RESET_PASSWORD,
    data,
  };
};

export const resetPasswordSuccess = () => {
  return {
    type: actionTypes.SUCCESS_RESET_PASSWORD,
  };
};

export const resetPasswordFail = () => {
  return {
    type: actionTypes.FAIL_RESET_PASSWORD,
  };
};

export const resetPasswordClear = () => {
  return {
    type: actionTypes.CLEAR_RESET_PASSWORD,
  };
};
// END Reset Password
