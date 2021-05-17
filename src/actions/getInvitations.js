import axios from "axios";
import authHeader from "../services/auth-header";
import {setInvitations} from "../reducers/invitationsReducer";

export const getInvitationsForUser = () => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8000/api/invitations/getInvitationsForCurrentUser`, {headers: authHeader()})
        dispatch(setInvitations(response.data))
    }
}

export const deleteInvitation = (id, gameName) => {
    return async (dispatch) => {
        const response = await axios.post(`http://localhost:8000/api/invitations/acceptInvitation/${id}`, {gameName: gameName}, {headers: authHeader()})
        dispatch(setInvitations(response.data))
    }
}