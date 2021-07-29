//Rafael Ochôa Mello - rafaelochoamello@gmail.com
//23-Julho-2021

import React, { useState } from 'react';
import './Card.css';

import MonsterModal from '../monsterModal/MonsterModal';

function Card(props) {
    const id = parseInt(props.id) + 1;
    const [monsterModal, setMonsterModal] = useState(false);

    return (
        <>
            <button className="cardButton" onClick={() => { setMonsterModal(true) }}>
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
            </button>

            {/* Controle sobre o estado do modal */}
            {monsterModal ? <MonsterModal data={props} onClose={() => setMonsterModal(false)} /> : null}
        </>
    );
}

export default Card;