// src/components/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';
import Brief from './Brief';

const CartPage = () => {
    const { cart, removeItem, updateItemQuantity } = useContext(CartContext);

    // ✅ Cálculo seguro del total
    const cartTotal = cart.reduce((total, item) => {
        const validPrice = typeof item.price === 'number' && !isNaN(item.price);
        const validQuantity = typeof item.quantity === 'number' && item.quantity > 0;
        return total + (validPrice && validQuantity ? item.price * item.quantity : 0);
    }, 0);

    return (
        <div className="cart-page">
            <h1>Tu Carrito</h1>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <div>
                    <div className="cart-items">
                        {cart.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                removeItem={removeItem}
                                updateItemQuantity={updateItemQuantity}
                            />
                        ))}
                    </div>

                    <Brief cart={cart} totalPrice={cartTotal} />

                    <div className="cart-summary">
                        <h2>Total: ${cartTotal}</h2>
                        <button>Proceder al pago</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
