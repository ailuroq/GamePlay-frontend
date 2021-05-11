import {GET_USER_PROFILE, SET_ALL_USERS} from "../actions/types";

const initialState = {
    profileData: {
        email: "",
        username: "",
        avatarName: ""
    },
    isFriend: 'no',

    allUsers: []
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_PROFILE:
            return {
                ...state,
                profileData: action.payload.currentUser,
                isFriend: action.payload.isFriend
            }
        case SET_ALL_USERS:
            return {
                ...state,
                allUsers: action.payload,
            }
        default:
            return state
    }
}

export const setCurrentUser = (profileData) => ({
    type: GET_USER_PROFILE,
    payload: profileData
})

export const setAllUsers = (allUsers) => ({
    type: SET_ALL_USERS,
    payload: allUsers
})
