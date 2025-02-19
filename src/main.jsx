// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // App.js is in the same src folder
import "./index.css"; // Your main CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap is installed

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
