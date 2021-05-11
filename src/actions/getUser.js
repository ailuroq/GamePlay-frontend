import axios from "axios";
import {setAllUsers, setCurrentUser} from "../reducers/user";
import authHeader from "../services/auth-header";
import {setCurrentPageFriends} from "../reducers/profile";
import {setFindUsers} from "../reducers/findUsersReducer";

export const getCurrentUser = (username) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8000/getCurrentUser/${username}`, {headers: authHeader()})
        dispatch(setCurrentUser(response.data))
    }
}

export const deleteFriend = (friendUsername) => {
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost:8000/${friendUsername}/deleteFriend`, {headers: authHeader()})
        dispatch(setCurrentUser(response.data))
        dispatch(setCurrentPageFriends(1))
    }
}

export const acceptSubscriber = (subscriberUsername) => {
    return async (dispatch) => {
        const response = await axios.post(`http://localhost:8000/${subscriberUsername}/acceptFriendRequest`, null, {headers: authHeader()})
        dispatch(setCurrentUser(response.data))
    }
}

export const cancelFriendRequest = (username) => {
    return async (dispatch) => {
        const response = await axios.post(`http://localhost:8000/${username}/cancelFriendRequest`, null, {headers: authHeader()})
        dispatch(setCurrentUser(response.data))
    }
}

export const sendFriendRequest = (username) => {
    return async (dispatch) => {
        const response = await axios.post(`http://localhost:8000/${username}/sendFriendRequest`, null, {headers: authHeader()})
        dispatch(setCurrentUser(response.data))
    }
}

export const getAllUsers = (value, currentPage) => {
    return async (dispatch) => {
        const response = await axios.post(`http://localhost:8000/auth/getAllUsers?page=${currentPage}`, {query: value}, {headers: authHeader()})
        dispatch(setFindUsers(response.data))
    }
}