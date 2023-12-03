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

  // Create the dismiss
  function dismissToast(id) {
    // create a new array, includes all the items except the one we want to remove
    const nextToast = toasts.filter(toast => {
    //   // go through all the toast, and find the one trying to dismiss
    //   // 🤔 keep the toast, if the id is NOT equal to the one we are dismissing
      return toast.id !== id
    })

    // // call state setter function passing in the new array
    setToasts(nextToast);
  }

  return (
    // Set up the provider and broadcast our state
    <ToastContext.Provider 
      value={{ 
          toasts,
          createToast,
          dismissToast
      }}
    >
      { children }
    </ToastContext.Provider>
  )
}

export default ToastProvider;
