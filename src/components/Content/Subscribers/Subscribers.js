import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {setCurrentPage} from "../../../reducers/profile";
import {createPages} from "../Friends/createPages";
import Subscriber from "./Subscriber/Subscriber";
import {getSubscribers} from "../../../actions/subscribers";

const Subscribers = () => {

    const {user: currentUser} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const subscribers = useSelector(state => state.profile.subscribers)
    const currentPage = useSelector(state => state.profile.currentPage)
    const perPage = useSelector(state => state.profile.perPage)
    const numberOfPages = useSelector(state => state.profile.numberOfPages)
    const {username} = useParams()
    const pages = []
    createPages(pages, numberOfPages, currentPage)


    useEffect(() => {
        dispatch(getSubscribers(username, currentPage, perPage))
    }, [dispatch, currentPage, subscribers, username, perPage])

    return (
        <div>
            <div>
                {subscribers.map(subscriber =>
                    <Subscriber subscriber={subscriber} key={subscriber.id}/>
                )
                }
            </div>
            <div className="pages">
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPage === page ? "current-page" : "page"}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>
        </div>
    )
}

export default Subscribers;