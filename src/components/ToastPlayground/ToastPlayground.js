import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import Toast from '../Toast';

import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  // state for 'textarea'
  const [message, setMessage] = React.useState('');
  // console.log(message);

  // state for 'radio'
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  // console.log(variants)

  // Update to be an array to hold all the variants, objects, don't forget to generate the key
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Oh No',
      variant: 'error',
    },
    {
      id: crypto.randomUUID(),
      message: 'Logged In',
      variant: 'success',
    }
  ]);
  // console.log(toasts);

  function handleCreateToast(event) {
    // prevent the default for behavior
    event.preventDefault();

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

    // clear out the state in the form
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  // create the handle dismiss function
  function handleDismiss(id) {
    // not allowed to mutate in React
    // create a new array, includes all the items except the one we want to remove
    const nextToast = toasts.filter(toast => {
      // go through all the toast, and find the one trying to dismiss
      // 🤔 keep the toast, if the id is NOT equal to the one we are dismissing
      return toast.id !== id
    })

    // call state setter function passing in the new array
    setToasts(nextToast);
  }


  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/* Toast Here, Prop APIs, content, variant,  */}
      {/* Conditionally render based on the state of isRendered */}
      {/* {isRendered && <Toast
        content={message}
        variant={variants}
        handleDismiss={handleDismiss}
      />} */}

      {/* Add the new ToastShelf */}
      <ToastShelf
        handleDismiss={handleDismiss}
        toasts={toasts}
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
            {/* <label htmlFor="variant-notice">
              <input
                id="variant-notice"
                type="radio"
                name="variant"
                value="notice"
              />
              notice
            </label> */}

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
