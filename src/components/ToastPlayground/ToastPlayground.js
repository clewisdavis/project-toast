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
  const [variants, setVariants] = React.useState('notice');
  // console.log(variants)

  // Update to be an array to hold all the variants, objects
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

  // create the handle dismiss function
  function handleDismiss() {
    // setIsRendered(false);
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
        toasts={toasts}
      />
      

      <div className={styles.controlsWrapper}>
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
                checked={option === variants}
                onChange={event => {
                  setVariants(event.target.value);
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
            <Button
              onClick={event => {
                // setIsRendered(true);
              }}
            >Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
