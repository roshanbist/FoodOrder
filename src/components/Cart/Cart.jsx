import React, { useContext } from 'react';
import CartFooter from './CartFooter';
import CartModal from '../UI/CartModal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import styles from './CartItem.module.css';

const Cart = ({ onModalClose }) => {
  const cartContext = useContext(CartContext);

  return (
    <CartModal onModalClose={onModalClose}>
      <div className={styles['cart-items']}>
        {cartContext.items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CartFooter onModalClose={onModalClose} />
    </CartModal>
  );
};

export default Cart;
