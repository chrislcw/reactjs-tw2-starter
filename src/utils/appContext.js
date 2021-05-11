import React from 'react';
export const AppContext = React.createContext();

export const appContextInitialState = {
  storagePopupToggle: false,
};

export function appContextReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_STORAGE_POPUP':
      return {
        storagePopupToggle: action.data,
      };

    default:
      return appContextInitialState;
  }
}
