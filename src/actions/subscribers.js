import axios from "axios";
import {acceptSubscriber, setSubscribers} from "../reducers/profile";
import authHeader from "../services/auth-header";

export const getSubscribers = (username, page, limit) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8000/${username}/subscribers?page=${page}&limit=${limit}`)
        dispatch(setSubscribers(response.data))
    }
}

export const acceptSubscriberAction = (username) => {
    return async (dispatch) => {
        const response = await axios.post(`http://localhost:8000/${username}/acceptFriendRequest`, null, {headers: authHeader()})
        dispatch(acceptSubscriber(response.data))
    }
}