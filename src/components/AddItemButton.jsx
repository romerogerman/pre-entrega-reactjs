/// src/components/AddItemButton.jsx
import React from "react";
import { useCart } from "../context/CartContext";

const AddItemButton = ({ item, quantity }) => {
    const { addItemToCart } = useCart();

    const handleClick = () => {
        addItemToCart(item, quantity);
    };

    return (
        <button onClick={handleClick} className="btn btn-success mt-2">
            Agregar al carrito
        </button>
    );
};

export default AddItemButton;
