import React from 'react'
import {Route, Switch} from "react-router-dom";
import SnakeGameEnvironment from "./SnakeGame/SnakeGameEnvironment";
import MainPage from "./TypingRace/MainPage";

const Games = () => {
    return (
        <div>
            <h1>All games</h1>
            <Switch>
                <Route path='/snake-game' component={SnakeGameEnvironment}/>
                <Route path='/typing-race' component={MainPage}/>
            </Switch>
        </div>
    )
}

export default Games