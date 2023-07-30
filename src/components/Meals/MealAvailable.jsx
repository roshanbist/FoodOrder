import React from 'react';
import Card from '../UI/Card';
import styles from './MealAvailable.module.css';
import MealItem from './MealItem';
import { DUMMY_MEALS } from './MealData';

const MealAvailable = () => {
  return (
    <Card className={styles['meal__card']}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </Card>
  );
};

export default MealAvailable;
