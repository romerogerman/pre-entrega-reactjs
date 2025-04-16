import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Usamos el CartContext que está en components
import CartContextProvider from "./components/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider> {/* ✅ Este es el correcto */}
      <App />
    </CartContextProvider>
  </React.StrictMode>
);
