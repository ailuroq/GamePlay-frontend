import React from 'react'

const  GameOver = (props) => {
    return (
        <div
            id='GameBoard'
            style={{
                width: props.width,
                height: props.height,
                borderWidth: props.width / 50,
            }}>
            <div id='GameOver' style={{ fontSize: props.width / 15 }}>
                <div id='GameOverText'>GAME OVER</div>
                <div>Your score: {props.score}</div>
                <div>
                    {props.newHighScore ? 'New high' : 'High '} score:{' '}
                    {props.highScore}
                </div>
                <div id='PressSpaceText'>Press Space to restart</div>
            </div>
        </div>
    )
}

export default GameOver