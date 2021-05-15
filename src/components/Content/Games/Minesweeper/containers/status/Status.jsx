import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GAME } from '../../minesweeperConstants';
import { Status } from '../../minesweeperComponents';
import {restartGame, showSettings, updateElapsedTime} from "../../../../../../reducers/control";
import {sendMinesweeperGameOverInfo} from "../../../../../../actions/minesweeperGame";

const StatusContainer = () => {
    const dispatch = useDispatch();
    const enableSettings = useSelector(state => state.minesweeperReducer.enableSettings);
    const gameState = useSelector(state => state.minesweeperReducer.gameState);
    const enableTimer = useSelector(state => state.minesweeperReducer.enableTimer);
    const elapsedTime = useSelector(state => state.minesweeperReducer.elapsedTime);
    const mineCount = useSelector(state => state.minesweeperReducer.mineCount);
    const flagCount = useSelector(state => state.minesweeperReducer.flagCount);

    useEffect(() => {
        let gameTimer;

        if (enableTimer) {
            gameTimer = setInterval(() => {
                dispatch(updateElapsedTime());
            }, 1000);
        }

        return () => {
            clearInterval(gameTimer);
        };
    }, [enableTimer]);

    const getResultEmoji = useCallback((gameState) => {
        switch (gameState) {
            case GAME.WIN:
                dispatch(sendMinesweeperGameOverInfo(elapsedTime))
                return '😎';
            case GAME.LOSE:
                return '😢';
            default:
                return '😄';
        }
    }, [gameState]);

    const onClickRestart = useCallback(() => {
        dispatch(restartGame());
    }, []);

    const onClickSettings = useCallback(() => {
        dispatch(showSettings());
    }, []);

    return (
        <>
            {!enableSettings &&
            <Status
                leftMineCount={mineCount - flagCount}
                mineCount={mineCount}
                resultEmoji={getResultEmoji(gameState)}
                enableSettings={gameState !== GAME.RUN}
                elapsedTime={elapsedTime.toString().padStart(3, '0')}
                onClickRestart={onClickRestart}
                onClickSettings={onClickSettings}
            />}
        </>
    );
};

export default StatusContainer;