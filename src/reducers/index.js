import {combineReducers} from "redux";
import auth from "./auth";
import message from "./message";
import profile from "./profile";
import snakeGame from "./snake-game";
import userReducer from "./user";
import findUsersReducer from "./findUsersReducer";

export default combineReducers({
    auth,
    message,
    profile,
    snakeGame,
    userReducer,
    findUsersReducer
});
