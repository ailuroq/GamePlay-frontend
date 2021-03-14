import {
    GET_RATING_TABLE_PAGE,
    GET_SNAKE_GAME_INFO,
    RESET_SNAKE_GAME_SCORE,
    SEND_GAME_OVER_INFO
} from "../actions/types";

const initialState = {
    snakeGameInfo: {},
    ratingTableInfo:{}
}

export default function snakeGame(state = initialState, action) {
    switch (action.type) {
        case GET_SNAKE_GAME_INFO:
            return {
                ...state,
                snakeGameInfo: action.payload
            }
        case SEND_GAME_OVER_INFO:
            return {
                ...state,
                snakeGameInfo: action.payload
            }
        case RESET_SNAKE_GAME_SCORE:
            return {
                ...state,
                snakeGameInfo: action.payload
            }
        case GET_RATING_TABLE_PAGE:
            return {
                ...state,
                ratingTableInfo: action.payload
            }
        default:
            return state
    }
}