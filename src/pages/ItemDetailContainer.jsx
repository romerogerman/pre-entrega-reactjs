import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const items = [
    { id: 1, name: 'Casco X1', description: 'Casco para jugadores profesionales', price: 120, image: 'url-del-casco-x1' },
    { id: 2, name: 'Casco X2', description: 'Casco ligero', price: 110, image: 'url-del-casco-x2' },
    { id: 3, name: 'Guante GripX', description: 'Guante con excelente agarre', price: 50, image: 'url-del-guante-gripx' },
    { id: 4, name: 'Guante SpeedX', description: 'Guante ultraligero para velocidad', price: 60, image: 'url-del-guante-speedx' },
];

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const foundItem = items.find((item) => item.id === parseInt(itemId));
        setItem(foundItem);
    }, [itemId]);

    if (!item) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
        </div>
    );
};

export default ItemDetailContainer;
