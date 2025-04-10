// src/components/ItemListContainer.jsx
import React from "react";
import { Link } from "react-router-dom";

const ItemListContainer = ({ greeting, items }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{greeting}</h2>
      <div>
        {items.map((item) => (
          <div key={item.id} style={{ marginBottom: "20px" }}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <Link to={`/item/${item.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
