import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import red from "@material-ui/core/colors/red";
import {API_URL} from "../../../../constants/urlConstants";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {acceptSubscriberAction} from "../../../../actions/subscribers";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


const Subscriber = (props) => {
    const classes = useStyles()
    const subscriber = props.subscriber
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(acceptSubscriberAction(subscriber.username))
    };


    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {subscriber.username[0]}
                    </Avatar>
                }
                title={subscriber.username}
            />
            <CardMedia
                className={classes.media}
                image={API_URL + 'uploads/' + subscriber.avatarName}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {subscriber.email}
                </Typography>
            </CardContent>
            <Button size="small" color="primary" onClick={handleSubmit}>
                Принять заявку
            </Button>
        </Card>
    )
}

export default Subscriber