import React from 'react'
import {Route, Switch} from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Profile from "./Profile/Profile";
import styles from "./Content.module.css"
import Games from "./Games/Games";

const Content = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Games}/>
                <div className={styles.content}>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/u/:username" component={Profile}/>
                </div>
            </Switch>
        </div>
    )
}

export default  Content