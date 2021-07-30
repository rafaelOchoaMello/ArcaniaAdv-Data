import './Content.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MonsterScreen from '../../../screens/monster/MonstersScreens';

function Content(props){
    return (
        <main className="Content">
            <Switch>
                <Route path="/monsters">
                    <MonsterScreen />
                </Route>
            </Switch>
        </main>
    );
}

export default Content;