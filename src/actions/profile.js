import {GET_PROFILE, SET_MESSAGE} from "./types";
import axios from "axios";
import authHeader from "../services/auth-header";
import {API_URL} from "../constants/urlConstants";


const _getProfile = (profileData) => ({
    type: GET_PROFILE,
    payload: profileData
})


const getProfile = (username) => {
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
export default getProfile

