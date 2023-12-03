import React from 'react';

// Create the Context
export const ToastContext = React.createContext();

function ToastProvider({ children }) {

    // Update to be an array to hold all the variants, objects, don't forget to generate the key
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'it works',
      variant: 'error',
    },
    {
      id: crypto.randomUUID(),
      message: 'pulling from provider',
      variant: 'success',
    }
  ]);

  // Function to create the toasts
  function createToast(message, variant) {
    // create a new array, do not mutate the state
    const nextToast = [
      // copy the current toast
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      }
    ];
    // call the state setter and pass along the new array
    setToasts(nextToast);
  }

  return (
    // Set up the provider and broadcast our state
    <ToastContext.Provider 
      value={{ 
          toasts,
          createToast 
      }}
    >
      { children }
    </ToastContext.Provider>
  )
}

export default ToastProvider;
