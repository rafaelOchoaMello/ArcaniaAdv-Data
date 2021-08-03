import React from 'react';

import './MonsterModal.css'

function MonsterModal(props) {
    console.log(props.data)
    console.log(`Modal: ${props.data.name}`);
    return (
        <>
            <div id="monsterModal-container">
                <div className="monsterModal-panel">
                    <button onClick={props.onClose}> Cancelar </button>
                    <div className="monsterModal-content">
                        <h1>{props.data.name}</h1>
                        <img src={window.location.origin + `/assets/monsters/${props.data.image}`} alt="" />
                        <p>{props.data.level}</p>
                        <p>{props.data.race}</p>
                        <p>{props.data.element}</p>
                        <div className="monsterModal-damageArea">
                            <p>Dano-F:{props.data.damage} | Defesa-F:{props.data.defense}</p>
                            <p>Dano-M:{props.data.magicDamage} | Defesa-M:{props.data.magicDefense}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MonsterModal;