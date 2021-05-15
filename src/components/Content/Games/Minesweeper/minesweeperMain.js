import React, {useEffect} from 'react';
import {
    SettingsContainer,
    StatusContainer,
    BoardContainer
} from './containers';
import {Wrapper, Title} from './minesweeperMainStyle';
import '../Minesweeper/Minesweeper.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {resetMinesweeperGameInfo} from "../../../../actions/minesweeperGame";
import {restartGame} from "../../../../reducers/control";

const MinesweeperMain = () => {

    const dispatch = useDispatch()

    const handleReset = () => {
        dispatch(resetMinesweeperGameInfo())
    }

    useEffect( () => {
        dispatch(restartGame());
    }, [dispatch])

    return (
        <div>
            <div className='additional-links'>
                <ul>
                    <li>
                        <Link to='minesweeper/rating'>Global rating</Link>
                    </li>
                    <li>
                        <Link onClick={handleReset}>Reset your result</Link>
                    </li>
                </ul>
            </div>
            <div className="minesweeperMain">
                <Wrapper>
                    <Title>Сапёр</Title>
                    <SettingsContainer/>
                    <StatusContainer/>
                    <BoardContainer/>
                </Wrapper>
            </div>
        </div>
    );
};

export default MinesweeperMain;