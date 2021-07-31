import './Content.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../../screens/home/Home';
import MonsterScreen from '../../../screens/monster/MonstersScreens';
import ItemScreen from '../../../screens/Itens/ItemScreen';
import NpcScreen from '../../../screens/npcs/NpcScreen';
import SpellScreen from '../../../screens/spells/SpellScreen';
import NotFound from '../../../screens/NotFound';

function Content(props){
    return (
        <main className="Content">
            <Switch>
                <Route exact path="/monsters">
                    <MonsterScreen />
                </Route>
                <Route exact path="/itens">
                    <ItemScreen />
                </Route>
                <Route exact path="/npcs">
                    <NpcScreen />
                </Route>
                <Route exact path="/spells">
                    <SpellScreen />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
    );
}

export default Content;