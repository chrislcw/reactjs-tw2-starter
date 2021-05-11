import * as actionTypes from "../actions/actionTypes";
import produce from "immer";

const INITIAL_STATE = {
  loader: false,
  language: 'en',
  formAction: {
    isSubmitted: false,
    error: {},
  },
};

export default function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.LOADER:
      return produce(state, (draft) => {
        draft.loader = action.enable;
      });

    case actionTypes.SWITCH_LANGUAGE:
      return produce(state, (draft) => {
        draft.language = action.data;
      });

    case actionTypes.SUBMIT_FORM:
      return produce(state, (draft) => {
        draft.formAction.isSubmitted = false;
        draft.formAction.error = {};
      });

    case actionTypes.SUCCESS_SUBMIT_FORM:
      return produce(state, (draft) => {
        draft.formAction.isSubmitted = true;
        draft.formAction.error = action.error;
      });

    case actionTypes.FAIL_SUBMIT_FORM:
      return produce(state, (draft) => {
        draft.formAction.isSubmitted = true;
        draft.formAction.error = action.error;
      });

    default:
      return state;
  }
}
