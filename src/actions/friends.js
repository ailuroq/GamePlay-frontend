import axios from "axios";
import {setCurrentPageFriends, setFriends} from "../reducers/profile";
import authHeader from "../services/auth-header";

export const getFriends = (username, page) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8000/${username}/friends?page=${page}`)
        dispatch(setFriends(response.data))
    }
}

export const deleteUserFriend = (friendUsername, username) => {
    return async (dispatch) => {
        await axios.delete(`http://localhost:8000/${friendUsername}/deleteFriend`,{headers: authHeader()})
        const response = await axios.get(`http://localhost:8000/${username}/friends?page=${1}`)
        dispatch(setFriends(response.data))
        dispatch(setCurrentPageFriends(1))
    }
}

export const inviteFriend = (friendUsername, gameName) => {
    return async () => {
        await axios.post(`http://localhost:8000/api/invitations/sendInvitation/${friendUsername}`, {gameName: gameName}, {headers: authHeader()})
    }
}
