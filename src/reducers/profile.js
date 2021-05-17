import {
    GET_FRIENDS,
    GET_PROFILE,
    GET_SUBSCRIBERS, SET_CURRENT_PAGE_FRIENDS, SET_CURRENT_PAGE_SUBSCRIBERS,
} from "../actions/types";

const initialState = {
    profileData: {
        email: "",
        username: "",
        subscribers: [],
        invitations: []
    },

    allFriends: [],

    friends: [],
    currentPageFriends: 1,
    totalCountFriends: 0,
    numberOfPagesFriends: 0,

    subscribers: [],
    currentPageSubscribers: 1,
    totalCountSubscribers: 0,
    numberOfPagesSubscribers: 0,
}
export default function profile(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profileData: action.payload,
            }
        case GET_FRIENDS:
            return {
                ...state,
                friends: action.payload.friends,
                totalCountFriends: action.payload.totalCount,
                numberOfPagesFriends: action.payload.numberOfPages
            }
        case SET_CURRENT_PAGE_FRIENDS:
            return {
                ...state,
                currentPageFriends: action.payload
            }
        case GET_SUBSCRIBERS:
            return {
                ...state,
                subscribers: action.payload.subscribers,
                totalCountSubscribers: action.payload.totalCount,
                numberOfPagesSubscribers: action.payload.numberOfPages
            }
        case SET_CURRENT_PAGE_SUBSCRIBERS:
            return {
                ...state,
                currentPageSubscribers: action.payload
            }
        default:
            return state
    }
}

export const setFriends = (friends) => ({
    type: GET_FRIENDS,
    payload: friends
})

export const setCurrentPageFriends = (page) => ({
    type: SET_CURRENT_PAGE_FRIENDS,
    payload: page
})

export const setSubscribers = (subscribers) => ({
    type: GET_SUBSCRIBERS,
    payload: subscribers
})

export const setCurrentPageSubscribers = (page) => ({
    type: SET_CURRENT_PAGE_SUBSCRIBERS,
    payload: page
})
