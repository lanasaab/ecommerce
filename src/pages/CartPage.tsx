
import React, { createContext, useState, useContext } from 'react';

const CartPage = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartPage.Provider value={{ cart, addToCart }}>
      {children}
    </CartPage.Provider>
  );
};
