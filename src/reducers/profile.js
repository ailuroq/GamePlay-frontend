import {DELETE_FRIEND, GET_ALL_FRIENDS, GET_FRIENDS, GET_PROFILE, SET_CURRENT_PAGE} from "../actions/types";

const initialState = {
    friends: [],
    profileData: {
        email: "",
        username: ""
    },
    allFriends: [],
    currentPage : 1,
    perPage: 5,
    totalCount : 0,
    numberOfPages: 0
}
export default function profile(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profileData: action.payload
            }
        case GET_FRIENDS:
            return {
                ...state,
                friends: action.payload.friends,
                totalCount: action.payload.totalCount,
                numberOfPages: action.payload.numberOfPages
            }
        case DELETE_FRIEND:
            return {
                ...state,
                friends: action.payload.friends
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case GET_ALL_FRIENDS:
            return {
                ...state,
                allFriends: action.payload
            }
        default:
            return state
    }
}

export const setFriends = (friends) => ({type: GET_FRIENDS, payload: friends})
export const deleteFriend = (friends) => ({type: DELETE_FRIEND, payload: friends})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page})
export const getAllFriends = (allFriends) => ({type: GET_ALL_FRIENDS, payload: allFriends})


