import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {setCurrentPageSubscribers} from "../../../reducers/profile";
import {createPages} from "../Friends/createPages";
import {acceptSubscriberAction, getSubscribers} from "../../../actions/subscribers";
import Avatar from "@material-ui/core/Avatar";
import {API_URL} from "../../../constants/urlConstants";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import styles from "./Subscribers.module.css"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        marginTop: 15,
        marginLeft: 15
    },
}))

const Subscribers = () => {

    const dispatch = useDispatch()
    const classes = useStyles();
    const subscribers = useSelector(state => state.profile.subscribers)
    const numberOfPagesSubscribers = useSelector(state => state.profile.numberOfPagesSubscribers)
    const currentPageSubscribers = useSelector(state => state.profile.currentPageSubscribers)
    const {username} = useParams()
    const pages = []
    createPages(pages, numberOfPagesSubscribers, currentPageSubscribers)

    useEffect(() => {
        dispatch(getSubscribers(username, currentPageSubscribers))
    }, [dispatch, currentPageSubscribers, username])

    const handleSubmit = subscriberUsername => {
        dispatch(acceptSubscriberAction(subscriberUsername, username))
    };

    return (
        <div>
            <div>
                {
                    subscribers.map((subscriber, index) => {
                            return (
                                <Card className={styles.root} key={index}>
                                    <Avatar alt="Friend" src={API_URL + 'uploads/' + subscriber.avatarName}
                                            className={classes.large}/>
                                    <div className={styles.username}>
                                        <Typography component="h5" variant="h6">
                                            <Link to={"/currentUser/" + subscriber.username}>{subscriber.username}</Link>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {subscriber.email}
                                        </Typography>
                                        <Button size="small" color="primary" onClick={() => handleSubmit(subscriber.username)}>
                                            Принять заявку
                                        </Button>
                                    </div>
                                </Card>
                            )
                        }
                    )
                }
            </div>
            <div className={styles.pages}>
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPageSubscribers === page ? styles.currentpage : styles.page}
                    onClick={() => dispatch(setCurrentPageSubscribers(page))}>{page}</span>)}
            </div>
        </div>
    )
}

export default Subscribers;