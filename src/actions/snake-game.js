import {GET_RATING_TABLE_PAGE, GET_SNAKE_GAME_INFO, RESET_SNAKE_GAME_SCORE, SEND_GAME_OVER_INFO} from "./types";
import {API_URL} from "../constants/urlConstants";
import axios from "axios";
import authHeader from "../services/auth-header";

const _getSnakeGameInfo = (snakeGameInfo) => ({
    type: GET_SNAKE_GAME_INFO,
    payload: snakeGameInfo
})

export const getSnakeGameInfo = (userId) => {
    return (dispatch) => {
        return axios
            .get(API_URL + 'snake-game/user/' + userId, {headers: authHeader()})
            .then(result => {
                dispatch(_getSnakeGameInfo(result.data))
            })
    }
}

const _sendSnakeGameOverInfo = (gameOverInfo) => ({
        type: SEND_GAME_OVER_INFO,
        payload: gameOverInfo
})

export const sendSnakeGameOverInfo = (maxScore, lastScore) => {
    return (dispatch) => {
        return axios
            .post(API_URL + 'snake-game/result',{maxScore, lastScore}, {headers: authHeader()})
            .then(result => {
                dispatch(_sendSnakeGameOverInfo(result.data))
            })
    }
}

const _resetSnakeGameScore = (resetGameInfo) => ({
    type: RESET_SNAKE_GAME_SCORE,
    payload: resetGameInfo
})

export const resetSnakeGameInfo = () => {
    return (dispatch) => {
        return axios
            .post(API_URL + 'snake-game/result', {maxScore:0, lastScore:0}, {headers: authHeader()})
            .then(result => {
                dispatch(_resetSnakeGameScore(result.data))
            })
    }
}

const _getRatingTablePage = (ratingTablePageInfo) => ({
    type: GET_RATING_TABLE_PAGE,
    payload: ratingTablePageInfo
})

export const getRatingTablePage = (page) => {
    return (dispatch) => {
        return axios
            .get(API_URL + `snake-game/rating?page=${page}`)
            .then(result => {
                dispatch(_getRatingTablePage(result.data))
            })
    }
}