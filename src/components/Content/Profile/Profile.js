import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import styles from "./Profile.module.css"
import {useParams} from "react-router-dom";
import {getProfile, updateAvatar} from "../../../actions/profile";
import avatar from "../../../static/avatar.jpeg"
import {API_URL} from "../../../constants/urlConstants";
import Button from "@material-ui/core/Button";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

const Profile = () => {
    const {user: currentUser} = useSelector((state) => state.auth)
    const {username} = useParams()
    const [avatarDialog, setAvatarDialog] = useState(false)
    const [photo, setPhoto] = useState()
    const [disable, setDisable] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfile(username))
    }, [dispatch, username])

    const handlePhotoChange = (e) => {
        const photo = e.target.files[0]
        setDisable(false)
        setPhoto(photo)
    }
    const handleAlertDialogOpen = () => {
        setAvatarDialog(true)
    }
    const handleAlertDialogClose = () => {
        setAvatarDialog(false)
    }
    const handlePhotoSubmit = () => {
        console.log(photo)
        dispatch(updateAvatar(photo))
    }
    const {profileData} = useSelector(state => state.profile)

    return (
        <div className={styles.profile}>
            <div className={styles.thin_column}>
                <div className={styles.avatar_column}>
                    {profileData.avatarName &&
                    <img src={API_URL + 'uploads/' + profileData.avatarName} className={styles.avatar} alt=""/>
                    }
                </div>
                <div><Button onClick={handleAlertDialogOpen} variant='contained'>Изменить аватар</Button></div>
            </div>
            <Dialog
                open={avatarDialog}
                onClose={handleAlertDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Возможные нежелательные удаления данных"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Выбрать новый аватар
                    </DialogContentText>
                    <input name='image' onChange={handlePhotoChange} type="file"/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAlertDialogClose} color="primary">
                        Отмена
                    </Button>
                    <Button
                        disabled={disable}
                        onClick={() => {
                            handleAlertDialogClose()
                            handlePhotoSubmit()
                        }}
                        color="primary" autoFocus>
                        Изменить
                    </Button>
                </DialogActions>
            </Dialog>
            <div className={styles.wide_column}>
                <div>
                    <div className={styles.user_info}>
                        <div className={styles.user_info_top}>
                            <p>{profileData.username}</p> {/*Username from the server*/}
                        </div>
                    </div>
                    <div className={styles.basic_info}>
                        <div className={styles.basic_info_top}>
                            <p>Basic info</p>
                            <p>Email: {profileData.email}</p>
                            <Link
                                to={"/" + currentUser.username + "/subscribers"}>Subscribers: {profileData.subscribers.length}</Link>
                        </div>
                    </div>

                    <div className={styles.achievements}>
                        <div/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
