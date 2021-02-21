import {API_URL} from "../constants/urlConstants";
import axios from "axios";
import {CREATE_POST_SUCCESS, DELETE_POST} from "./types";
import authHeader from "../services/auth-header";

export const createPost = (username, text) => (dispatch) => {
    return axios.post(API_URL + username, {
        text
    }, {headers: authHeader()}).then((result) => {
        const {posts} = result.data
        dispatch({
            type: CREATE_POST_SUCCESS,
            payload: {posts: posts}
        })
    })
}

export const deletePost = (postId) => (dispatch) => {
    return axios.post(API_URL + 'deletePost/' + postId, {
        postId
    }, {headers: authHeader()}).then((result) => {
        const {posts} = result.data
        dispatch({
            type: DELETE_POST,
            payload: {posts: posts}
        })
    })
}