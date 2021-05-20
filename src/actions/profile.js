import {GET_PROFILE, UPDATE_USER_AVATAR} from "./types";
import axios from "axios";
import authHeader from "../services/auth-header";
import {API_URL} from "../constants/urlConstants";

const _getProfile = (profileData) => ({
    type: GET_PROFILE,
    payload: profileData
})


export const getProfile = (username) => {
    return (dispatch) => {
        return axios
            .get(API_URL + username, {headers: authHeader()})
            .then(result => {
                dispatch(_getProfile(result.data))
            })
            .catch(error => {
                window.location = "/"
            })
    }
}

const _updateAvatar = data => ({
    type: UPDATE_USER_AVATAR,
    payload: data
})

export const updateAvatar = (avatar) => {
    return dispatch => {
        const formData = new FormData()
        formData.append('image', avatar)
        const user = JSON.parse(localStorage.getItem("user"));
        return axios
            .post(API_URL + 'upload/avatar/', formData,{
                headers: {
                    'Authorization': `Bearer ${user.accessToken}`,
                    'Content-Type': 'form-data'
                },
            })
            .then(result => {
                dispatch(_updateAvatar(result.data))
            })
    }
}

