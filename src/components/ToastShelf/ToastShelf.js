import React from 'react';

import { ToastContext } from '../ToastProvider/ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {

  // get our 'toast' state from the provider, useContext hook
  const { toasts, setToasts, dismissToast } = React.useContext(ToastContext);

  // adding a useEffect
  React.useEffect(() => {
    console.log('toast shelf mounted');

    // create the keyDown function
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        console.log('keydown');
        dismissToast(toasts.id); //not working
      }
    }

    // create a listener on mount
    window.addEventListener('keydown', handleKeyDown);

    // cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toasts]);

  return (
    <ol className={styles.wrapper}>
      {/* map over the toast array */}
      {toasts.map(toast => (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast 
              id={toast.id}
              variant={toast.variant}
            >
              {toast.message}
            </Toast>
          </li>
      ))}
    </ol>
  );
}

export default ToastShelf;