import React from 'react';
import Card from '../components/cards/Card';
import MonsterData from '../data/monsters.json';

import './MonsterScreen.css';

function MonsterScreen(props) {
    return (
        <div className="monsterScreen">
            {
                MonsterData.map((monster) => {
                    return <Card key={monster.id}
                        id={monster.id}
                        name={monster.name}
                        level={monster.level}
                        race={monster.race}
                        hp={monster.hp}
                        mp={monster.mp}
                        image={monster.image}
                        damage={monster.damage}
                        defense={monster.defense}
                        magicDamage={monster.magicDamage}
                        magicDefense={monster.magicDefense}
                    />
                })
            }

        </div>
    );
}

export default MonsterScreen;