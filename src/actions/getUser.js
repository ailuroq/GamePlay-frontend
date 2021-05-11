import axios from "axios";
import {setCurrentUser} from "../reducers/user";
import authHeader from "../services/auth-header";

export const getCurrentUser = (username) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8000/getCurrentUser/${username}`, {headers: authHeader()})
        dispatch(setCurrentUser(response.data))
    }
}