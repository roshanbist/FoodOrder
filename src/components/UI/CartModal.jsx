import React, { useEffect } from 'react';
import styles from './CartModal.module.css';

const CartModal = ({ children, onModalClose }) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        onModalClose();
      }
    };

    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  });

  return (
    <>
      <div className={styles['modal__overlay']} onClick={onModalClose} />
      <div className={styles['modal__holder']}>{children}</div>
    </>
  );
};

export default CartModal;
