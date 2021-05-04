import axios from "axios";
import {setCurrentPageSubscribers, setSubscribers} from "../reducers/profile";
import authHeader from "../services/auth-header";

export const getSubscribers = (username, page) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8000/${username}/subscribers?page=${page}`)
        dispatch(setSubscribers(response.data))
    }
}

export const acceptSubscriberAction = (subscriberUsername, username) => {
    return async (dispatch) => {
        await axios.post(`http://localhost:8000/${subscriberUsername}/acceptFriendRequest`, null, {headers: authHeader()})
        const response = await axios.get(`http://localhost:8000/${username}/subscribers?page=${1}`)
        dispatch(setSubscribers(response.data))
        dispatch(setCurrentPageSubscribers(1))
    }
}