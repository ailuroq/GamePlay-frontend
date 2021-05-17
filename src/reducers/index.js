import {combineReducers} from "redux";
import auth from "./auth";
import message from "./message";
import profile from "./profile";
import snakeGame from "./snake-game";
import userReducer from "./user";
import findUsersReducer from "./findUsersReducer";
import minesweeperReducer from "./control";
import minesweeperGameReducer from "./minesweeperGameReducer";
import invitationReducer from "./invitationsReducer";

export default combineReducers({
    auth,
    message,
    profile,
    snakeGame,
    userReducer,
    findUsersReducer,
    minesweeperReducer,
    minesweeperGameReducer,
    invitationReducer
});
