import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import styles from "../../Friends/Friends.module.css"
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {createPages} from "../../Friends/createPages";
import {getFriends, inviteFriend} from "../../../../actions/friends";
import {API_URL} from "../../../../constants/urlConstants";
import {setCurrentPageFriends} from "../../../../reducers/profile";

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

const InviteFriendsSnakeGame = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const friends = useSelector(state => state.profile.friends)
    const {user: currentUser} = useSelector((state) => state.auth);
    const numberOfPagesFriends = useSelector(state => state.profile.numberOfPagesFriends)
    const currentPageFriends = useSelector(state => state.profile.currentPageFriends)
    const pages = []
    createPages(pages, numberOfPagesFriends, currentPageFriends)

    useEffect(() => {
        dispatch(getFriends(currentUser.username, currentPageFriends))
    }, [dispatch, currentPageFriends, currentUser.username])

    const handleInvite = friendUsername => {
        dispatch(inviteFriend(friendUsername, 'snakeGame'))
    };

    return (
        <div>
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
                                    <Button size="small" color="primary" onClick={() => handleInvite(friend.username)}>
                                        Пригласить в игру
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

export default InviteFriendsSnakeGame;