import React from 'react';

// Create the Context
export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  // Create Toast state
  const [toasts, setToasts] = React.useState([]);

  return (
    // Set up the provider and broadcast our state
    <ToastContext.Provider value={{ toasts, setToasts }}>
      { children }
    </ToastContext.Provider>
  )
}

export default ToastProvider;
