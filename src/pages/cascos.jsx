// src/pages/Cascos.jsx
import React from "react";
import ItemListContainer from "../components/ItemListContainer";

const cascos = [
  { id: 1, name: "Casco X1", description: "Casco para jugadores profesionales", price: 120 },
  { id: 2, name: "Casco X2", description: "Casco ligero", price: 110 },
];

const Cascos = () => {
  return <ItemListContainer greeting="Nuestros Cascos" items={cascos} />;
};

export default Cascos;

