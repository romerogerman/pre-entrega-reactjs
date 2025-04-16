// src/components/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto del carrito
export const CartContext = createContext();

// Hook personalizado para acceder fácilmente al carrito
export const useCart = () => {
    return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar un artículo al carrito (con validación)
    const addItem = (item) => {
        // Validar que el artículo tenga un precio y cantidad válida
        if (typeof item.price !== 'number' || isNaN(item.price) || item.quantity <= 0) {
            console.error("Error al agregar producto: datos inválidos", item);
            return;
        }

        setCart((prevCart) => {
            const itemExists = prevCart.find((product) => product.id === item.id);
            if (itemExists) {
                return prevCart.map((product) =>
                    product.id === item.id
                        ? { ...product, quantity: product.quantity + item.quantity }
                        : product
                );
            } else {
                return [...prevCart, item];
            }
        });
    };

    // Eliminar un artículo del carrito
    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Actualizar la cantidad de un artículo en el carrito
    const updateItemQuantity = (id, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    // Calcular el precio total del carrito
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{ cart, totalPrice, addItem, removeItem, updateItemQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
