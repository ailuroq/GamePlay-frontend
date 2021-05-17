import React from 'react'
import SnakeGame from "./SnakeGame";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSnakeGameInfo, resetSnakeGameInfo} from "../../../../actions/snake-game";
import {Link} from "react-router-dom";

const SnakeGameEnvironment = () => {

    const {user: currentUser} = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSnakeGameInfo(currentUser.id))
    }, [dispatch, currentUser.id])

    const {snakeGameInfo} = useSelector(state => state.snakeGame)

    const handleReset = () => {
        dispatch(resetSnakeGameInfo())
        window.location.reload()
    }
    return (
        <div className='snakeGameEnv'>
            <div className='additional-links'>
                <ul>
                    <li>
                        <Link to='snake-game/rating'>Global rating</Link>
                    </li>
                    <li>
                        <Link onClick={handleReset}>Reset your result</Link>
                    </li>
                    <li>
                        <Link to='snake-game/inviteFriendsSnake'>Invite Friends</Link>
                    </li>
                </ul>
            </div>
            {
                !isNaN(snakeGameInfo.maxScore) &&
                <SnakeGame
                    maxScore={snakeGameInfo.maxScore}
                    lastScore={snakeGameInfo.lastScore}/>
            }
        </div>
    )
}

export default SnakeGameEnvironment