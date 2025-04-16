const Brief = ({ cart, totalPrice }) => {
    return (
        <div className="cart-brief">
            <h2>Resumen de la compra</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.quantity} x {item.name} - ${item.price * item.quantity}
                    </li>
                ))}
            </ul>
            <h3>Total: ${totalPrice}</h3>
        </div>
    );
};

export default Brief;  {/* Cambié esto de CartPage a Brief */}
