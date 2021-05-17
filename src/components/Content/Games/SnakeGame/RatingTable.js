import Pagination from '@material-ui/lab/Pagination'
import {useEffect, useState} from "react";
import {getRatingTablePage} from "../../../../actions/snake-game";
import {useDispatch, useSelector} from "react-redux";
import RatingTableItem from "./RatingTableItem";

const RatingTable = () => {
    const [page, setPage] = useState(1)
    const handlePageChange = (event, value) => {
        setPage(value)
    }

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getRatingTablePage(page))
    }, [page, dispatch])

    const {ratingTableInfo} = useSelector(state => state.snakeGame)

    return (
        <div>
            <div className='table'>
                <h1>Snake game rating</h1>
                <div className='table_header'>
                    <div>№</div>
                    <div>Username</div>
                    <div>High score</div>
                    <div>Last score</div>
                </div>
                <div>
                    {ratingTableInfo.data && ratingTableInfo.data.map((item,index)=>{
                        let place
                        if (page<=1) {
                            place = (index + 1)
                        }
                        else {
                            place = (index+1)+8*(page-1)
                        }
                        return (
                            <div>
                                <RatingTableItem
                                    key={index}
                                    place={place}
                                    maxScore={item.maxScore}
                                    lastScore={item.lastScore}
                                    username={item.user.username}
                                    userAvatar={item.user.avatarName}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='pagination'>
                <Pagination
                    count={ratingTableInfo.numberOfPages}
                    page={page}
                    onChange={handlePageChange}
                    justify="center"
                />
            </div>
        </div>
    )
}

export default RatingTable