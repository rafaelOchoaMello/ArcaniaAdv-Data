//Rafael Ochôa Mello - rafaelochoamello@gmail.com
//23-Julho-2021

/* Este componente deve servir tanto para monstros quanto 
para NPCS, posteriormente será adicionado um condicional
que deve definir a localização (folder) da imagem 
a ser carregada */

import React from 'react';
import './Card.css';

function Card(props) {
    const id = parseInt(props.id) + 1;

    return (
        <>
            <div className="cardContainer">
                <div className="cardHeader">
                    <p>#{id} - {props.name}</p>
                </div>
                <div className="cardImage">
                    <img src={window.location.origin + `/assets/monsters/${props.image}`} alt="" />
                </div>
                <div className="cardBody">
                    <p> <strong>{props.level}</strong> </p>
                    <p>{props.race}</p>
                    <p>{props.hp}/{props.mp}</p>
                </div>
            </div>
        </>
    );
}

export default Card;