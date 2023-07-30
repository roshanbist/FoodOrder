import React from 'react';
import BannerImage from '../../assets/meals.jpg';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={BannerImage} alt='' />
    </div>
  );
};

export default Banner;
