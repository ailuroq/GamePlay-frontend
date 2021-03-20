import axios from "axios";
import {deleteFriend, getAllFriends, setFriends} from "../reducers/profile";
import authHeader from "../services/auth-header";

export const getFriends = (username, page, limit) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8000/${username}/friends?page=${page}&limit=${limit}`)
        dispatch(setFriends(response.data))
    }
}

export const deleteUserFriend = (username) => {
    return async (dispatch) => {
        const response = await axios.post(`http://localhost:8000/${username}/deleteFriend`,null,{headers: authHeader()})
        dispatch(deleteFriend(response.data))
    }
}

export const getAllUserFriends = (username) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8000/${username}/allFriends`)
        dispatch(getAllFriends(response.data))
    }
}