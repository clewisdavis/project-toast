import React from 'react';

import { ToastContext } from '../ToastProvider/ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {

  // get our 'toast' state from the provider, useContext hook
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper} 
      role='region' 
      aria-live='polite' 
      aria-label='Notification'>
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