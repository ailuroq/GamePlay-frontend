import {GET_INVITATIONS} from "../actions/types";

const initialState = {
    invitations: [],
}

export default function invitationReducer(state = initialState, action) {
    switch (action.type) {
        case GET_INVITATIONS:
            return {
                ...state,
                invitations: action.payload
            }
        default:
            return state
    }
}

export const setInvitations = (invitations) => ({
    type: GET_INVITATIONS,
    payload: invitations
})