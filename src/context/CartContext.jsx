import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Hook para usar el contexto más fácilmente
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item, quantity) => {
    const existing = cartItems.find((i) => i.id === item.id);
    if (existing) {
      setCartItems((prev) =>
        prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...item, quantity }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};
