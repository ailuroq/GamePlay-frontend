import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MIN_WIDTH, MIN_HEIGHT, MIN_MINES } from '../../minesweeperConstants';
import { Settings } from '../../minesweeperComponents';
import {hideSettings, restartGame, setGame} from "../../../../../../reducers/control";

const SettingsContainer = () => {
    const dispatch = useDispatch();
    const enableSettings = useSelector(state => state.minesweeperReducer.enableSettings);

    const [width, setWidth] = useState(MIN_WIDTH);
    const [height, setHeight] = useState(MIN_HEIGHT);
    const [mineCount, setMineCount] = useState(MIN_MINES);

    useEffect(() => {
        const maxMineCount = (width - 1) * (height - 1);

        if (mineCount > maxMineCount) {
            setMineCount(maxMineCount)
        }
    }, [width, height, mineCount]);

    const onChangeWidth = useCallback((e) => {
        setWidth(parseInt(e.target.value));
    }, []);

    const onChangeHeight = useCallback((e) => {
        setHeight(parseInt(e.target.value));
    }, []);

    const onChangeMines = useCallback((e) => {
        setMineCount(parseInt(e.target.value));
    }, []);

    const onClickSet = useCallback(() => {
        dispatch(setGame(width, height, mineCount));
        dispatch(restartGame());
        dispatch(hideSettings());
    }, [width, height, mineCount]);

    return (
        <>
            {enableSettings &&
            <Settings
                width={width}
                height={height}
                mineCount={mineCount}
                maxMineCount={(width - 1) * (height - 1)}
                onChangeWidth={onChangeWidth}
                onChangeHeight={onChangeHeight}
                onChangeMines={onChangeMines}
                onClickSet={onClickSet}
            />}
        </>
    );
};

export default SettingsContainer;