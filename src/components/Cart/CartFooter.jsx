import React, { useContext } from 'react';
import styles from './CartFooter.module.css';
import CartContext from '../../store/cart-context';

const CartFooter = ({ onModalClose }) => {
  const cartContext = useContext(CartContext);

  const totalAmounts = cartContext.totalAmounts.toFixed(2);

  const checkoutHandler = () => {
    console.log('Ordered Items :', cartContext.items);
    onModalClose();
  };

  return (
    <>
      <div className={styles['cart__total']}>
        <h3>Total Amount</h3>
        <strong>${totalAmounts}</strong>
      </div>
      <ul className={styles['cart__action']}>
        <li>
          <button
            className={`button ${styles['button-outline']}`}
            onClick={onModalClose}
          >
            Close
          </button>
        </li>
        {cartContext.items.length > 0 && (
          <li>
            <button className='button' onClick={checkoutHandler}>
              Order
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default CartFooter;
