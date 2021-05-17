import React from 'react'
import {Route, Switch} from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Profile from "./Profile/Profile";
import Games from "./Games/Games";
import SnakeGameEnvironment from "./Games/SnakeGame/SnakeGameEnvironment";
import MainPage from "./Games/TypingRace/MainPage";
import RatingTable from "./Games/SnakeGame/RatingTable";
import Friends from "./Friends/Friends";
import Subscribers from "./Subscribers/Subscribers";
import User from "./User/User";
import FindUsers from "./FindUsers/FindUsers";
import MinesweeperMain from "./Games/Minesweeper/minesweeperMain";
import RatingTableMinesweeper from "./Games/Minesweeper/RatingTableMinesweeper";
import InviteFriendsSnakeGame from "./Games/SnakeGame/InviteFriendsSnakeGame";
import InviteFriendsMinesweeperGame from "./Games/Minesweeper/InviteFriendsMinesweeperGame";
import InvitedFriends from "./InvitedFriends";

const Content = () => {
    return (
        <div>
            <Switch>
                <Route path='/typing-race/' component={MainPage}/>
                <Route exact path='/games' component={Games}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/u/:username" component={Profile}/>
                <Route path="/:username/friends" component={Friends}/>
                <Route path="/:username/subscribers" component={Subscribers}/>
                <Route path="/:username/invitations" component={InvitedFriends}/>
                <Route path='/snake-game/rating' component={RatingTable}/>
                <Route path='/currentUser/:username' component={User}/>
                <Route path='/findUsers' component={FindUsers}/>
                <Route exact path='/snakeGame' component={SnakeGameEnvironment}/>
                <Route exact path='/minesweeper' component={MinesweeperMain}/>
                <Route exact path='/minesweeper/rating' component={RatingTableMinesweeper}/>
                <Route path='/snake-game/inviteFriendsSnake' component={InviteFriendsSnakeGame}/>
                <Route path='/minesweeper/inviteFriendsMinesweeper' component={InviteFriendsMinesweeperGame}/>
            </Switch>
        </div>
    )
}

export default Content