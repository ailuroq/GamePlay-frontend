import {
    GET_MINESWEEPER_RATING_TABLE_PAGE,
    RESET_MINESWEEPER_GAME_SCORE,
    SEND_MINESWEEPER_GAME_OVER_INFO,

} from "./types";
import {API_URL} from "../constants/urlConstants";
import axios from "axios";
import authHeader from "../services/auth-header";

const _sendMinesweeperGameOverInfo = (gameOverInfo) => ({
    type: SEND_MINESWEEPER_GAME_OVER_INFO,
    payload: gameOverInfo
})

export const sendMinesweeperGameOverInfo = (maxScore) => {
    return (dispatch) => {
        return axios
            .post(API_URL + 'minesweeper/minesweeperResult',{maxScore}, {headers: authHeader()})
            .then(result => {
                dispatch(_sendMinesweeperGameOverInfo(result.data))
            })
    }
}

const _resetMineSweeperGameScore = (resetGameInfo) => ({
    type: RESET_MINESWEEPER_GAME_SCORE,
    payload: resetGameInfo
})

export const resetMinesweeperGameInfo = () => {
    return (dispatch) => {
        return axios
            .post(API_URL + 'minesweeper/minesweeperResult', {maxScore:0}, {headers: authHeader()})
            .then(result => {
                dispatch(_resetMineSweeperGameScore(result.data))
            })
    }
}

const _getMinesweeperRatingTablePage = (ratingTablePageInfo) => ({
    type: GET_MINESWEEPER_RATING_TABLE_PAGE,
    payload: ratingTablePageInfo
})

export const getMineSweeperRatingTablePage = (page) => {
    return (dispatch) => {
        return axios
            .get(API_URL + `minesweeper/minesweeperRating?page=${page}`)
            .then(result => {
                dispatch(_getMinesweeperRatingTablePage(result.data))
            })
    }
}