import React, { useEffect, useContext, useReducer, createContext } from 'react';
import reducer from '../reducers/cart_reducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    //JSON.strigify한 것을 풀어서 다시 받아오는 과정임
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(), // 로컬저장소 사용하지 않을 경우 []사용
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  // remove Item
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  // toggle amount
  const toggleAmount = (id, value) => {};

  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // 변화가 일어날떄마다, localStorage에 저장!
  useEffect(() => {
    // LS에 key, value값 전달
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    // initialState의 값을 Context의 Value값으로 전달
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
