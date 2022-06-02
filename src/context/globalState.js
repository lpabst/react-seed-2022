import React, { createContext, useReducer } from "react";

const initialState = {
  user: null,
  modalToDisplay: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      return {
        ...state,
        user: action.value,
      };
    }

    case "USER_LOGGED_OUT": {
      return {
        ...state,
        user: null,
      };
    }

    default:
      return state;
  }
};

export const globalContext = createContext(initialState);

export const GlobalStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <globalContext.Provider value={{ state, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};
