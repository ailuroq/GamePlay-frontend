import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Search} from "@material-ui/icons";
import styles from "../Friends/Friends.module.css"
import Avatar from "@material-ui/core/Avatar";
import {API_URL} from "../../../constants/urlConstants";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {createPages} from "../Friends/createPages";
import {setCurrentPageFindUsers} from "../../../reducers/findUsersReducer";
import {getAllUsers} from "../../../actions/getUser";

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

const FindUsers = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const findUsers = useSelector(state => state.findUsersReducer.findUsers)
    const numberOfPagesFindUsers = useSelector(state => state.findUsersReducer.numberOfPagesFindUsers)
    const currentPageFindUsers = useSelector(state => state.findUsersReducer.currentPageFindUsers)
    const [value, setValue] = useState('')
    const pages = []
    createPages(pages, numberOfPagesFindUsers, currentPageFindUsers)

    useEffect(() => {
        dispatch(getAllUsers(value, currentPageFindUsers))
    }, [dispatch, currentPageFindUsers, value])


    return (
        <div>
            <TextField
                variant="outlined"
                label="Поиск пользователей"
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
                findUsers.map((user, index) => {
                        return (
                            <Card className={styles.root} key={index}>
                                <Avatar src={API_URL + 'uploads/' + user.avatarName}
                                        className={classes.large}/>
                                <div className={styles.username}>
                                    <Typography component="h5" variant="h6">
                                        <Link to={"/currentUser/" + user.username}>{user.username}</Link>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {user.email}
                                    </Typography>
                                </div>
                            </Card>
                        )
                    }
                )
            }
            <div className={styles.pages}>
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPageFindUsers === page ? styles.currentpage : styles.page}
                    onClick={() => dispatch(setCurrentPageFindUsers(page))}>{page}</span>)}
            </div>
        </div>
    )
}

export default FindUsers;