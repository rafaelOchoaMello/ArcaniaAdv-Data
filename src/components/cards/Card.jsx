//Rafael Ochôa Mello - rafaelochoamello@gmail.com
//23-Julho-2021

/* Este componente deve servir tanto para monstros quanto 
para NPCS, posteriormente será adicionado um condicional
que deve definir a localização (folder) da imagem 
a ser carregada */

import React from 'react';
import './Card.css';

function Card({name, level, race, hp, mp, image}) {
    return (
        <>
            <div className="cardContainer">
                <div className="cardHeader">
                    <p>{name}</p>
                </div>
                <div className="cardImage">
                    <img src={window.location.origin + `/assets/monsters/${image}`} alt="" />
                </div>
                <div className="cardBody">
                    <p> <strong>{level}</strong> </p>
                    <p>{race}</p>
                    <p>{hp}/{mp}</p>
                </div>
            </div>
        </>
    );
}

export default Card;