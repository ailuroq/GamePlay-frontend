import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import styles from "../../components/Content/Friends/Friends.module.css"
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {deleteInvitation, getInvitationsForUser} from "../../actions/getInvitations";
import {API_URL} from "../../constants/urlConstants";

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

const InvitedFriends = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const invitations = useSelector(state => state.invitationReducer.invitations)

    useEffect(() => {
        dispatch(getInvitationsForUser())
    }, [dispatch])

    const handleDelete = (id, gameName) => {
        dispatch(deleteInvitation(id, gameName))
    };

    return (
        <div>
            {
                invitations.map((friend, index) => {
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
                                    <Typography component="h6" variant="h6">
                                        Приглашает вас поиграть в игру {friend.gameName === 'snakeGame' ? 'Змейка' : 'Сапёр'}!

                                    </Typography>
                                    <Button size="small" color="primary"
                                            onClick={() => handleDelete(friend.id, friend.gameName)}>
                                        <Link to={"/" + friend.gameName}>Принять приглашение</Link>
                                    </Button>
                                </div>
                            </Card>
                        )
                    }
                )
            }
        </div>
    )
}

export default InvitedFriends;