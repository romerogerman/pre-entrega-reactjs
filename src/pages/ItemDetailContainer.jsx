// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemQuantitySelector from "../components/ItemQuantitySelector";
import AddItemButton from "../components/AddItemButton";
import { useCart } from "../components/CartContext"; // Acceso al carrito

const items = [
    { id: 1, name: 'Casco X1', description: 'Casco para jugadores profesionales', price: 120, image: 'url-del-casco-x1' },
    { id: 2, name: 'Casco X2', description: 'Casco ligero', price: 110, image: 'url-del-casco-x2' },
    { id: 3, name: 'Guante GripX', description: 'Guante con excelente agarre', price: 50, image: 'url-del-guante-gripx' },
    { id: 4, name: 'Guante SpeedX', description: 'Guante ultraligero para velocidad', price: 60, image: 'url-del-guante-speedx' },
];

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCart();

    useEffect(() => {
        const foundItem = items.find((item) => item.id === parseInt(itemId));
        setItem(foundItem);
    }, [itemId]);

    const handleAddToCart = (qty) => {
        if (item && typeof item.price === "number" && qty > 0) {
            const newItem = {
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: qty
            };
            addItem(newItem);
            console.log(`Agregado al carrito: ${item.name} - Cantidad: ${qty}`);
        } else {
            console.warn("Error al agregar el producto al carrito: datos inválidos");
        }
    };

    if (!item) {
        return <div>Cargando...</div>;
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <AddItemButton onAdd={handleAddToCart} quantity={quantity} />
        </div>
    );
};

export default ItemDetailContainer;
