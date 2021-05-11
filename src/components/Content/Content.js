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
import Friends from "./Friends/Friends";
import Subscribers from "./Subscribers/Subscribers";
import User from "./User/User";
import FindUsers from "./FindUsers/FindUsers";
import TradingGame from "./Games/TradingGame/TradingGame";

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
                    <Route path="/:username/friends" component={Friends}/>
                    <Route path="/:username/subscribers" component={Subscribers}/>
                    <Route path='/snake-game/rating' component={RatingTable}/>
                    <Route path='/currentUser/:username' component={User}/>
                    <Route path='/findUsers' component={FindUsers}/>
                    <Route path='/tradingGame' component={TradingGame}/>
                </div>
            </Switch>
        </div>
    )
}

export default  Content