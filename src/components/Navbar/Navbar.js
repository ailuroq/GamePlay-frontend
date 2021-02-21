import React from 'react'
import styles from './Navbar.module.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {
    const {user: currentUser} = useSelector((state) => state.auth)
    return (
        <div className={styles.navbar}>
            {currentUser &&
            <div className={styles.navigation}>
                <ul className={styles.menu}>
                    <li className={styles.menu__item}>
                        <Link to={"/" + currentUser.username}>Profile</Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link to={"/" + currentUser.username + "/achievements"}>Achievements</Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link to={"/" + currentUser.username + "/friends"}>Friends</Link>
                    </li>
                    <li className={styles.menu__item}>
                        <Link to={"/" + currentUser.username + "/statistics"}>Statistics</Link>
                    </li>
                </ul>
            </div>}
        </div>
    )
}

export default Navbar