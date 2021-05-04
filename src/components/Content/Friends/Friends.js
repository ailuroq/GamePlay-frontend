import {useDispatch, useSelector} from "react-redux";
import {deleteUserFriend, getFriends} from "../../../actions/friends";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Search} from "@material-ui/icons";
import styles from "./Friends.module.css"
import {setCurrentPageFriends} from "../../../reducers/profile";
import {createPages} from "./createPages";
import Avatar from "@material-ui/core/Avatar";
import {API_URL} from "../../../constants/urlConstants";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    searchInput: {
        width: '75%',
        marginBottom: 10
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        marginTop: 15,
        marginLeft: 15
    },
}))

const Friends = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const friends = useSelector(state => state.profile.friends)
    const numberOfPagesFriends = useSelector(state => state.profile.numberOfPagesFriends)
    const currentPageFriends = useSelector(state => state.profile.currentPageFriends)

    const {username} = useParams()
    const [value, setValue] = useState('')
    const pages = []
    createPages(pages, numberOfPagesFriends, currentPageFriends)

    useEffect(() => {
        dispatch(getFriends(username, currentPageFriends))
    }, [dispatch, currentPageFriends, username])

    const handleDelete = friendUsername => {
        dispatch(deleteUserFriend(friendUsername, username))
    };

    return (
        <div>
            <TextField
                variant="outlined"
                label="Поиск друзей"
                className={classes.searchInput}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search/>
                        </InputAdornment>
                    )
                }}
            />
            {
                friends.map((friend, index) => {
                        return (
                            <Card className={styles.root} key={index}>
                                <Avatar src={API_URL + 'uploads/' + friend.avatarName}
                                        className={classes.large}/>
                                <div className={styles.username}>
                                    <Typography component="h5" variant="h6">
                                        <Link to={"/currentUser/" + friend.username}>{friend.username}</Link>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {friend.email}
                                    </Typography>
                                    <Button size="small" color="primary">
                                        Пригласить в игру
                                    </Button>
                                    <Button size="small" color="primary" onClick={() => handleDelete(friend.username)}>
                                        Удалить из друзей
                                    </Button>
                                </div>
                            </Card>
                        )
                    }
                )
            }
            <div className={styles.pages}>
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPageFriends === page ? styles.currentpage : styles.page}
                    onClick={() => dispatch(setCurrentPageFriends(page))}>{page}</span>)}
            </div>
        </div>
    )
}

export default Friends;