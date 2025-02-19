// src/App.jsx
import React from "react";
import NavBar from "./components/NavBar"; // Correct path
import ItemListContainer from "./components/ItemListContainer.jsx"; // Correct path

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a la tienda de fútbol americano!" />
    </div>
  );
}

export default App;




