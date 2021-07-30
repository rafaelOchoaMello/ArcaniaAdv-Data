import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
    return (
        <aside className="Menu">
            <h3>Arcania Adv. - Database</h3>
            <nav>
                <ul>
                    <li>
                        <Link to="/monsters">Monstros</Link>
                    </li>
                    <li>
                        <Link to="/npcs">Personagens</Link>
                    </li>
                    <li>
                        <Link to="/itens">Itens</Link>
                    </li>
                    <li>
                        <Link to="/spells">Feitiços</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Menu;