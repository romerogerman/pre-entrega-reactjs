import React from 'react';
import { Link } from 'react-router-dom';

const cascos = [
    { id: 1, name: 'Casco X1', description: 'Casco para jugadores profesionales', price: 120, image: 'url-del-casco-x1' },
    { id: 2, name: 'Casco X2', description: 'Casco ligero', price: 110, image: 'url-del-casco-x2' },
];

const Cascos = () => {
    return (
        <div>
            <h1>Cascos</h1>
            {cascos.map((casco) => (
                <div key={casco.id}>
                    <h2>{casco.name}</h2>
                    <p>{casco.description}</p>
                    <Link to={`/item/${casco.id}`}>Ver detalles</Link>
                </div>
            ))}
        </div>
    );
};

export default Cascos;
