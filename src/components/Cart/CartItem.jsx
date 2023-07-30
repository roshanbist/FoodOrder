import React, { useContext } from 'react';
import styles from './CartItem.module.css';
import CartContext from '../../store/cart-context';

const CartItem = ({ item }) => {
  const cartContext = useContext(CartContext);

  const addItemHandler = (item) => {
    cartContext.addItem({
      ...item,
      amount: 1,
    });
  };

  const removeItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  return (
    <div className={styles['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={styles['cart-item__summary']}>
          <div className={styles['cart-item__price']}>
            ${item.price.toFixed(2)}
          </div>
          <div className={styles['cart-item__amount']}>x{item.amount}</div>
        </div>
      </div>
      <div className={styles['cart-item__actions']}>
        <button onClick={() => removeItemHandler(item.id)}>-</button>
        <button onClick={() => addItemHandler(item)}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
