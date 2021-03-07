import React from 'react'
import styles from './Header.module.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions/auth";

const Header = () => {
    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logout());
    };
    return (
        <div className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.logo}>
                    <Link to='/'>LOGOTYPE</Link>
                </div>
                <div className={styles.search}>
                    <input placeholder="Find games" type="text"/>
                </div>
                <div className={styles.top_profile_info}>
                    <ul className={styles.menu}>
                        {currentUser ? (
                            <div>
                                <li className="nav-item">
                                    <Link to={"/u/" + currentUser.username} className="nav-link">
                                        {currentUser.username}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" onClick={logOut}>Logout</Link>

                                </li>
                            </div>
                        ) : (
                            <div>
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link">
                                        Login
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/register"} className="nav-link">
                                        Sign Up
                                    </Link>
                                </li>
                            </div>
                        )}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Header