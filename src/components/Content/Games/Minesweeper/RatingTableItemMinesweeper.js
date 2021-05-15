import React from 'react'

const RatingTableItemMinesweeper = (props) => {
    return (
        <div className='table_item'>
            <p>{props.place}</p>
            <p>{props.username}</p>
            <p>{props.maxScore}</p>
        </div>
    )
}

export default RatingTableItemMinesweeper