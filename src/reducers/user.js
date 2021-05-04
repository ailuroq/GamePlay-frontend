import {GET_USER_PROFILE} from "../actions/types";

const initialState = {
    profileData: {
        email: "",
        username: "",
        avatarName: ""
    },
    isFriend: 'no'
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_PROFILE:
            return {
                ...state,
                profileData: action.payload.currentUser,
                isFriend: action.payload.isFriend
            }
        default:
            return state
    }
}

export const setCurrentUser = (profileData) => ({
    type: GET_USER_PROFILE,
    payload: profileData
})
