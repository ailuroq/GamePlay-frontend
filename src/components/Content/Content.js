import React from 'react'
import {Route, Switch} from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Profile from "./Profile/Profile";
import styles from "./Content.module.css"
import Games from "./Games/Games";
import SnakeGameEnvironment from "./Games/SnakeGame/SnakeGameEnvironment";
import MainPage from "./Games/TypingRace/MainPage";
import Friends from "./Friends/Friends";

const Content = () => {
    return (
        <div>
            <Switch>

                <Route exact path='/' component={Games}/>
                <Route path='/snake-game/' component={SnakeGameEnvironment}/>
                <Route path='/typing-race/' component={MainPage}/>
                <div className={styles.content}>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/u/:username" component={Profile}/>
                    <Route path="/:username/friends" component={Friends}/>
                </div>
            </Switch>
        </div>
    )
}

export default  Content