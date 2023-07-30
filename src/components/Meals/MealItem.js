import React from 'react';
import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';

const MealItem = ({ meal }) => {
  return (
    <div key={meal.id} className={styles.meal}>
      <div className='meal-lt-block'>
        <h3>{meal.name}</h3>
        <div className={styles['meal__description']}>{meal.description}</div>
        <div className={styles['meal__price']}>{`$${meal.price.toFixed(
          2
        )}`}</div>
      </div>
      <MealItemForm name={meal.name} price={meal.price} id={meal.id} />
    </div>
  );
};

export default MealItem;
