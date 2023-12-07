import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import { ToastContext } from '../ToastProvider';
import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({children, variant, id}) {

  const { dismissToast } = React.useContext(ToastContext);

  // Concatenate multiple classes into one
  const variantClasses = `${styles.toast} ${styles[variant]}`;

  // Assign the icon, huh
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={variantClasses}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>
          {`${variant} - ${children}`}
        </VisuallyHidden>  
        {children}
      </p>
      <button 
        className={styles.closeButton}
        onClick={() => dismissToast(id)}
        aria-label='Dismiss Message'
        aria-live='off'
      >
        <X size={24} />
      </button>
    </div>
  );
}



export default Toast;
