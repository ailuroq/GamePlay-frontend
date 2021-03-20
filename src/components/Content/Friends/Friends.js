import {useDispatch, useSelector} from "react-redux";
import {getAllUserFriends, getFriends} from "../../../actions/friends";
import React, {useEffect, useState} from "react";
import Friend from "./Friend/Friend";
import {useParams} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Search} from "@material-ui/icons";
import "./Friends.module.css"
import {setCurrentPage} from "../../../reducers/profile";
import {createPages} from "./createPages";

const useStyles = makeStyles(theme => ({
    searchInput: {
        width: '75%'
    },
}))

const Friends = () => {

    const classes = useStyles();
    const {user: currentUser} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const friends = useSelector(state => state.profile.friends)
    const currentPage = useSelector(state => state.profile.currentPage)
    const perPage = useSelector(state => state.profile.perPage)
    const numberOfPages = useSelector(state => state.profile.numberOfPages)
    const allFriends = useSelector(state => state.profile.allFriends)
    const {username} = useParams()
    const [value, setValue] = useState('')
    const pages = []
    createPages(pages, numberOfPages, currentPage)




    useEffect(() => {
        dispatch(getFriends(username, currentPage, perPage))
    }, [dispatch, currentPage])

    useEffect(() => {
        dispatch(getAllUserFriends(username))
    })

    const filteredUsers = allFriends.filter(user => {
        return user.username.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div>
            <TextField
                variant="outlined"
                label="Search Friends"
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
                !value
                    ?
                    friends.map(friend =>
                        <Friend friend={friend} key={friend.id}/>
                    )
                    :
                    filteredUsers.map(friend =>
                        <Friend friend={friend} key={friend.id}/>
                    )
            }
            <div className="pages">
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPage === page ? "current-page" : "page"}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>
        </div>
    )
}

export default Friends;