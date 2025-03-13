import React from 'react';
import { Link } from 'react-router-dom';

const guantes = [
    { id: 3, name: 'Guante GripX', description: 'Guante con excelente agarre', price: 50, image: 'url-del-guante-gripx' },
    { id: 4, name: 'Guante SpeedX', description: 'Guante ultraligero para velocidad', price: 60, image: 'url-del-guante-speedx' },
];

const Guantes = () => {
    return (
        <div>
            <h1>Guantes</h1>
            {guantes.map((guante) => (
                <div key={guante.id}>
                    <h2>{guante.name}</h2>
                    <p>{guante.description}</p>
                    <Link to={`/item/${guante.id}`}>Ver detalles</Link>
                </div>
            ))}
        </div>
    );
};

export default Guantes;
