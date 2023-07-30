import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

const Header = ({ onModalOpen }) => {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.container}`}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onModalOpen={onModalOpen} />
      </div>
    </div>
  );
};

export default Header;
