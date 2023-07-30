import React, { useContext, useRef } from 'react';
import styles from './MealItemForm.module.css';
import CartContext from '../../store/cart-context';

const MealItemForm = ({ name, price, id }) => {
  const cartContext = useContext(CartContext);
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +inputRef.current.value;

    // adding item to items array
    cartContext.addItem({
      id: id,
      name: name,
      price: price,
      amount: enteredAmount,
    });
  };

  return (
    <div className={styles['meal__order']}>
      <form className={styles['order-form']} onSubmit={submitHandler}>
        <label htmlFor={id}>Amount</label>
        <input
          className={styles.input}
          type='number'
          step='1'
          min='1'
          max='10'
          id={id}
          defaultValue='1'
          ref={inputRef}
        />
        <button className={`button ${styles.button}`}>+ Add</button>
      </form>
    </div>
  );
};

export default MealItemForm;
