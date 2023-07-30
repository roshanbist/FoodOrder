import { createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmounts: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
