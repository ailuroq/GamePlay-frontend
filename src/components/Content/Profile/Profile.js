import React, {useEffect, useState, useRef} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import styles from "./Profile.module.css"
import {useParams} from "react-router-dom";
import getProfile from "../../../actions/profile";
import avatar from "../../../static/avatar.jpeg"
import Navbar from "../../Navbar/Navbar";
import {API_URL} from "../../../constants/urlConstants";


const Profile = () => {
    const {user: currentUser} = useSelector((state)=> state.auth)
    const {username} = useParams()

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getProfile(username))
    }, [dispatch, username])

    const {profileData} = useSelector(state => state.profile)

    return (
        <div className={styles.profile}>
            <div className={styles.thin_column}>
                <div className={styles.avatar_column}>
                    {profileData.avatarName &&
                    <img src={API_URL + 'uploads/' + profileData.avatarName} className={styles.avatar} alt=""/>
                    }
                </div>
                <div className={styles.navbar}>
                    <Navbar/>
                </div>
            </div>
            <div className={styles.wide_column}>
                <div>
                    <div className={styles.user_info}>
                        <div className={styles.user_info_top}>
                            <p>{profileData.username}</p> {/*Username from the server*/}
                        </div>
                        <div>
                            <p>Last online</p> {/*Last online time from the server*/}
                        </div>
                    </div>
                    <div className={styles.basic_info}>
                        <div className={styles.basic_info_top}>
                            <p>Basic info</p>
                            <p>Email: {profileData.email}</p>
                        </div>
                    </div>
                    <div className={styles.favorite_games}>
                        <div className={styles.favorite_games_text}>
                            <p>Favorite games</p>
                        </div>
                        <div className={styles.games_pict}>
                            {/*Here is mapped props from redux (first 6),
                            now just as example 6 images*/}
                            <div><img src={avatar} alt=""/></div>
                            <div><img src={avatar} alt=""/></div>
                            <div><img src={avatar} alt=""/></div>
                            <div><img src={avatar} alt=""/></div>
                            <div><img src={avatar} alt=""/></div>
                            <div><img src={avatar} alt=""/></div>
                        </div>
                    </div>
                    <div className={styles.achievements}>
                        {/*Here is mapped props from redux (last N achievements)*/}
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
