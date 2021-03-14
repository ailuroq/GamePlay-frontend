import React from 'react'
import {Route, Switch} from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Profile from "./Profile/Profile";
import Games from "./Games/Games";
import SnakeGameEnvironment from "./Games/SnakeGame/SnakeGameEnvironment";
import MainPage from "./Games/TypingRace/MainPage";
import RatingTable from "./Games/SnakeGame/RatingTable";
import styles from "./Content.module.css"

const Content = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/snake-game/' component={SnakeGameEnvironment}/>
                <Route path='/typing-race/' component={MainPage}/>
                <div className={styles.content}>
                    <Route exact path='/' component={Games}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/u/:username" component={Profile}/>
                    <Route path='/snake-game/rating' component={RatingTable}/>
                </div>
            </Switch>
        </div>
    )
}

export default  Content