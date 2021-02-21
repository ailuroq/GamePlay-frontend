import React from 'react'
import {Route, Switch} from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Profile from "./Profile/Profile";
import styles from "./Content.module.css"

const Content = () => {
    return (
        <div className={styles.content}>
            <Switch>
                <Route exact path="/"/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/:username" component={Profile}/>

            </Switch>
        </div>
    )
}

export default  Content