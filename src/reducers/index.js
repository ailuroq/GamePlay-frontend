import {combineReducers} from "redux";
import auth from "./auth";
import message from "./message";
import profile from "./profile";
import snakeGame from "./snake-game";
import userReducer from "./user";

export default combineReducers({
    auth,
    message,
    profile,
    snakeGame,
    userReducer
});
