import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import Toast from '../Toast';

import ToastShelf from '../ToastShelf';

import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  // pull in from the provider
  const { createToast } = React.useContext(ToastContext);

  // state for 'textarea'
  const [message, setMessage] = React.useState('');
  // console.log(message);

  // state for 'radio'
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  // console.log(variants)

  function handleCreateToast(event) {
    // prevent the default for behavior
    event.preventDefault();

    // new function in provider
    createToast(message, variant);

    // clear out the state in the form
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  // create the handle dismiss function
  function handleDismiss(id) {
    // not allowed to mutate in React
    // create a new array, includes all the items except the one we want to remove
    // const nextToast = toasts.filter(toast => {
    //   // go through all the toast, and find the one trying to dismiss
    //   // 🤔 keep the toast, if the id is NOT equal to the one we are dismissing
    //   return toast.id !== id
    // })

    // // call state setter function passing in the new array
    // setToasts(nextToast);
  }


  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/* Add the new ToastShelf */}
      <ToastShelf
        handleDismiss={handleDismiss}
      />
      

      <form onSubmit={handleCreateToast} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message" 
              className={styles.messageInput} 
              value={message}
              onChange={event => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >

            {VARIANT_OPTIONS.map(option => (
              <div key={option}>
              <label htmlFor={option}>
              <input
                id={option}
                type="radio"
                name="variant"
                value={option}
                checked={option === variant}
                onChange={event => {
                  setVariant(event.target.value);
                }}
              />
              {option}
            </label>
            </div>
            ))}
 
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
