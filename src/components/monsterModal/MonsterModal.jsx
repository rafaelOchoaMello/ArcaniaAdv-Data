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
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure eligendi commodi
                            sapiente dicta consectetur, necessitatibus vero temporibus animi rerum quis accusantium,
                            similique recusandae amet, tempora ad mollitia quae cum!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure eligendi commodi
                            sapiente dicta consectetur, necessitatibus vero temporibus animi rerum quis accusantium,
                            similique recusandae amet, tempora ad mollitia quae cum!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure eligendi commodi
                            sapiente dicta consectetur, necessitatibus vero temporibus animi rerum quis accusantium,
                            similique recusandae amet, tempora ad mollitia quae cum!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MonsterModal;