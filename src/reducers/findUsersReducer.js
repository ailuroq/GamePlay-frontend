import {GET_FIND_USERS, SET_CURRENT_PAGE_FIND_USERS} from "../actions/types";

const initialState = {
    findUsers: [],
    currentPageFindUsers: 1,
    numberOfPagesFindUsers: 0,
}
export default function findUsersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FIND_USERS:
            return {
                ...state,
                findUsers: action.payload.requestResult,
                numberOfPagesFindUsers: action.payload.totalPages
            }
        case SET_CURRENT_PAGE_FIND_USERS:
            return {
                ...state,
                currentPageFindUsers: action.payload,
            }
        default:
            return state
    }
}

export const setFindUsers = (findUsers) => ({
    type: GET_FIND_USERS,
    payload: findUsers
})

export const setCurrentPageFindUsers = (currentPageFindUsers) => ({
    type: SET_CURRENT_PAGE_FIND_USERS,
    payload: currentPageFindUsers
})
