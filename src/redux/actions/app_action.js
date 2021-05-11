import * as actionTypes from "./actionTypes";

export const loading = (enable = true) => {
  return {
    type: actionTypes.LOADER,
    enable,
  };
};

export const submitForm = () => {
  return {
    type: actionTypes.SUBMIT_FORM,
  };
};

export const submitFormSuccess = () => {
  return {
    type: actionTypes.SUCCESS_SUBMIT_FORM,
  };
};

export const submitFormFail = (error) => {
  return {
    type: actionTypes.FAIL_SUBMIT_FORM,
    error,
  };
};

export const switchLanguage = (lang) => {
  return {
    type: actionTypes.SWITCH_LANGUAGE,
    data: lang,
  };
};