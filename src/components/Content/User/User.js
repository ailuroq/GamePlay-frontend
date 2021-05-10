import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {
    acceptSubscriber,
    cancelFriendRequest,
    deleteFriend,
    getCurrentUser,
    sendFriendRequest
} from "../../../actions/getUser";
import {API_URL} from "../../../constants/urlConstants";
import Button from "@material-ui/core/Button";
import styles from "./User.module.css"

const User = () => {

    const dispatch = useDispatch()
    const {username} = useParams()
    const profileData = useSelector(state => state.userReducer.profileData)
    const isFriend = useSelector(state => state.userReducer.isFriend)

    useEffect(() => {
        dispatch(getCurrentUser(username))
    }, [dispatch, username])

    const handleDelete = friendUsername => {
        dispatch(deleteFriend(friendUsername))
    };

    const handleAccept = subscriberUsername => {
        dispatch(acceptSubscriber(subscriberUsername))
    };

    const handleCancelFriendRequest = futureFriend => {
        dispatch(cancelFriendRequest(futureFriend))
    };

    const handleSendFriendRequest = futureFriend => {
        dispatch(sendFriendRequest(futureFriend))
    };

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{profileData.username}</strong> Profile
                </h3>
                <div className={styles.userPhoto}>
                    {profileData.avatarName &&
                    <img src={API_URL + 'uploads/' + profileData.avatarName} alt=""/>
                    }
                </div>
            </header>

            <p>
                <strong>Email:</strong> {profileData.email}
            </p>
            {
                isFriend === 'friend' &&
                <div>
                    <Button size="small" color="primary">
                        Пригласить в игру
                    </Button>
                    <Button size="small" color="primary"
                            onClick={() => handleDelete(profileData.username)}
                    >
                        Удалить из друзей
                    </Button>
                </div>
            }
            {
                isFriend === 'subscriber' &&
                <div>
                    <Button size="small" color="primary"
                            onClick={() => handleAccept(profileData.username)}
                    >
                        Принять заявку
                    </Button>
                </div>
            }
            {
                isFriend === 'meIsSubscriber' &&
                <div>
                    <Button size="small" color="primary"
                            onClick={() => handleCancelFriendRequest(profileData.username)}
                    >
                        Отменить заявку
                    </Button>
                </div>
            }
            {
                isFriend === 'no' &&
                <div>
                    <Button size="small" color="primary"
                            onClick={() => handleSendFriendRequest(profileData.username)}
                    >
                        Добавить в друзья
                    </Button>
                </div>
            }

        </div>
    );
};

export default User;