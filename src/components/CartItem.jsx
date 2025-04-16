// src/components/CartItem.jsx
import React from 'react';

const CartItem = ({ item, removeItem, updateItemQuantity }) => {
    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (!isNaN(newQuantity) && newQuantity > 0) {
            updateItemQuantity(item.id, newQuantity);
        }
    };

    // Validaciones
    const validPrice = typeof item.price === 'number' && !isNaN(item.price);
    const validQuantity = typeof item.quantity === 'number' && item.quantity > 0;

    const itemTotal = validPrice && validQuantity ? item.price * item.quantity : 0;

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
                <h3>{item.name || "Producto sin nombre"}</h3>
                <p>Precio: ${validPrice ? item.price : "?"}</p>
                <input
                    type="number"
                    value={validQuantity ? item.quantity : 1}
                    onChange={handleQuantityChange}
                    min="1"
                />
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
            <p>Total: ${itemTotal}</p>
        </div>
    );
};

export default CartItem;
