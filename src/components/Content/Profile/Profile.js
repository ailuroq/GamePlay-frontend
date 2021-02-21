import React, {useEffect, useState, useRef} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import styles from "./Profile.module.css"
import {useParams} from "react-router-dom";
import getProfile from "../../../actions/profile";
import avatar from "../../../static/avatar.jpeg"
import Navbar from "../../Navbar/Navbar";


const Profile = () => {
    const {user: currentUser} = useSelector((state)=> state.auth)
    const {username} = useParams()

    return (
        <div className={styles.profile}>
            <div className={styles.thin_column}>
                <div className={styles.avatar_column}>
                    <img src={avatar} className={styles.avatar} alt=""/>
                </div>
                <div className={styles.navbar}>
                    <Navbar/>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Profile;
