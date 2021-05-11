import React from 'react'
import styles from './Navbar.module.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { withStyles } from "@material-ui/core";

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '370px',
        height: '100%',
        backgroundColor: '#253053'
    }
}

const Navbar = (props) => {

    const { classes } = props;

    const {user: currentUser} = useSelector((state) => state.auth)

    return (
        <div className={classes.sideMenu}>

            {currentUser &&
            <div className={styles.navbar}>
                <ul className={styles.menu}>
                    <li className={styles.menu__item}>
                        <Link to={"/u/" + currentUser.username}>Profile</Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link to={"/" + currentUser.username + "/achievements"}>Achievements</Link>
                    </li>
                    <li className={ styles.menu__item}>
                        <Link to={"/" + currentUser.username + "/friends"}>Friends</Link>
                    </li>
                    <li className={ styles.menu__item}>
                        <Link to={"/games"}>Games</Link>
                    </li>
                    <li className={ styles.menu__item}>
                        <Link to={"/findUsers"}>Find users</Link>
                    </li>
                </ul>
            </div>}
        </div>
    )
}

export default withStyles(style)(Navbar);