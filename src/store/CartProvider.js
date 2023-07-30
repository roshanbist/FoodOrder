import React, { useReducer } from 'react';
import CartContext from './cart-context';

const ACTIONS = {
  ADD_ITEM_TO_CART: 'add-item-to-cart',
  REMOVE_ITEM_FROM_CART: 'remove-item-from-cart',
};

const DEFAULT_STATE = {
  items: [],
  totalAmounts: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM_TO_CART:
      const existingItem = state.items.some(
        (item) => item.name === action.item.name
      );

      const updatedTotalAmount =
        state.totalAmounts + action.item.price * action.item.amount;

      const updatedCartItems = mergedCartItems(
        existingItem,
        state.items,
        action.item
      );

      return { items: updatedCartItems, totalAmounts: updatedTotalAmount };

    case ACTIONS.REMOVE_ITEM_FROM_CART:
      const itemExist = state.items.find((item) => item.id === action.id);

      const newTotalAmount = state.totalAmounts - itemExist.price;
      const updatedCartItem2 = calculateCartItem(state, itemExist, action.id);
      return { items: updatedCartItem2, totalAmounts: newTotalAmount };

    default:
      // returning in same strucutre ie object
      return DEFAULT_STATE;
  }
};

// defining calculateCartItem function
const mergedCartItems = (exisitingItem, arr, newItem) => {
  if (exisitingItem) {
    return arr.map((item) => {
      if (item.name === newItem.name) {
        // return object by updating its amount
        return { ...item, amount: item.amount + newItem.amount };
      } else {
        // return object
        return item;
      }
    });
  } else {
    return [...arr, newItem];
  }
};

// calculate cartItem function
const calculateCartItem = (state, itemExist, id) => {
  let updatedArr;

  if (itemExist.amount === 1) {
    updatedArr = state.items.filter((item) => item.id !== id);
  } else {
    const updatedItem = { ...itemExist, amount: itemExist.amount - 1 };
    updatedArr = state.items.map((item) =>
      item.id === id ? updatedItem : item
    );
  }
  return updatedArr;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, DEFAULT_STATE);

  const addItemHandler = (item) => {
    // dispatch addItem action type
    dispatch({ type: ACTIONS.ADD_ITEM_TO_CART, item: item });
  };

  const removeItemHandler = (id) => {
    // dispatch removeItem action type
    dispatch({ type: ACTIONS.REMOVE_ITEM_FROM_CART, id: id });
  };

  const cartValue = {
    items: cartState.items,
    totalAmounts: cartState.totalAmounts,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
