import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({children, variant, handleDismiss}) {

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
        {children}
      </p>
      <button 
        className={styles.closeButton}
        onClick={handleDismiss}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}



export default Toast;
