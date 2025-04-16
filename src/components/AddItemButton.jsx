// src/components/AddItemButton.jsx
import React from "react";

const AddItemButton = ({ onAdd, quantity }) => {
    return (
        <button onClick={() => onAdd(quantity)} className="btn btn-success">
            Agregar al carrito
        </button>
    );
};

export default AddItemButton;
