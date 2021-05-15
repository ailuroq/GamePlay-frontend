import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Board } from '../../minesweeperComponents';

const BoardContainer = () => {
    const enableSettings = useSelector(state => state.minesweeperReducer.enableSettings);
    const width = useSelector(state => state.minesweeperReducer.width);
    const height = useSelector(state => state.minesweeperReducer.height);

    const onRightClickBoard = useCallback((e) => {
        e.preventDefault();
    }, []);

    return (
        <>
            {!enableSettings &&
            <Board
                width={width}
                height={height}
                onRightClickBoard={onRightClickBoard}
            />}
        </>
    );
};

export default BoardContainer;