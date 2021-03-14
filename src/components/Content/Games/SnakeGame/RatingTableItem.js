import React from 'react'

const RatingTableItem = (props) => {
    return (
        <div className='table_item'>
            <p>{props.place}</p>
            <p>{props.username}</p>
            <p>{props.maxScore}</p>
            <p>{props.lastScore}</p>
            {/*<img src={API_URL + 'uploads/' + props.userAvatar}/>*/}
        </div>
    )
}

export default RatingTableItem