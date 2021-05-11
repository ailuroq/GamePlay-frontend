import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions/auth";
import {AppBar, Toolbar, Grid, IconButton, Badge, makeStyles} from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import {AccountCircle} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}))

const Header = () => {

    const {user: currentUser} = useSelector((state) => state.auth);
    const {profileData} = useSelector(state => state.profile)

    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
    };

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item sm/>
                    {currentUser ? (
                        <div>
                            <IconButton>
                                <Badge badgeContent={3} color="primary">
                                    <ChatBubbleOutlineIcon fontSize="small"/>
                                </Badge>
                            </IconButton>
                            <IconButton
                                component={Link}
                                to={"/" + currentUser.username + "/subscribers"}
                            >
                                <Badge badgeContent={profileData.subscribers.length} color="secondary">
                                    <NotificationsNoneIcon fontSize="small"/>
                                </Badge>
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                component={Link}
                                to={"/u/" + currentUser.username}
                            >
                                <AccountCircle/>
                            </IconButton>
                            <IconButton
                                onClick={logOut}
                                component={Link}
                                to={"/login"}>
                                <Badge>
                                    <ExitToAppTwoToneIcon/>
                                </Badge>
                            </IconButton>
                        </div>
                    ) : (
                        <div>
                            <IconButton
                                component={Link}
                                to={"/login"}>
                                <Badge>
                                    <VpnKeyIcon/>
                                </Badge>
                            </IconButton>

                            <IconButton
                                component={Link}
                                to={"/register"}>
                                <Badge>
                                    <HowToRegIcon/>
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header