import {
    GET_MINESWEEPER_GAME_INFO,
    GET_MINESWEEPER_RATING_TABLE_PAGE,
    RESET_MINESWEEPER_GAME_SCORE,
    SEND_MINESWEEPER_GAME_OVER_INFO

} from "../actions/types";

const initialState = {
    minesweeperGameInfo: {},
    ratingTableInfo:{}
}

export default function minesweeperGameReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MINESWEEPER_GAME_INFO:
            return {
                ...state,
                minesweeperGameInfo: action.payload
            }
        case SEND_MINESWEEPER_GAME_OVER_INFO:
            return {
                ...state,
                minesweeperGameInfo: action.payload
            }
        case RESET_MINESWEEPER_GAME_SCORE:
            return {
                ...state,
                minesweeperGameInfo: action.payload
            }
        case GET_MINESWEEPER_RATING_TABLE_PAGE:
            return {
                ...state,
                ratingTableInfo: action.payload
            }
        default:
            return state
    }
}