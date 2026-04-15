import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Create the AlertContext with default value []
const AlertContext = createContext([]);

const alertReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return [...state, action.payload];
    case 'REMOVE_ALERT':
      return state.filter(alert => alert.id !== action.payload);
    default:
      return state;
  }
};

const AlertProvider = ({ children }) => {
  const [alerts, dispatch] = useReducer(alertReducer, []);

  const setAlert = (msg, alertType, timeout = 3000) => {
    const id = uuidv4();
    dispatch({ type: 'SET_ALERT', payload: { msg, alertType, id } });

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT', payload: id }), timeout);
  };

  return (
    <AlertContext.Provider value={{ alerts, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export { AlertProvider, AlertContext };
