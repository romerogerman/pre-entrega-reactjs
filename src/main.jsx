import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { CartProvider } from "./context/CartContext"; // 👈 Importalo

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider> {/* 👈 Envolvés toda la app con el proveedor */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
