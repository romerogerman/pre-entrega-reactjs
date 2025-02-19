import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div style={{ color: "white", fontSize: "1.5rem", cursor: "pointer" }}>
      <FaShoppingCart /> <span>3</span>
    </div>
  );
};

export default CartWidget;
