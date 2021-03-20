import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from './App.module.css'
import "./App.module.css";
import {clearMessage} from "./actions/message";

import {history} from "./helpers/history";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

const App = () => {
    const [showScroll, setShowScroll] = useState(false)
    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    window.addEventListener('scroll', checkScrollTop)
    return (
        <div className={styles.main_wrapper}>
            <Header/>
            <div className={styles.top_scroll} onClick={scrollTop}
            style={{height:2000, display:showScroll ? 'flex': 'none'}}
            >
                <p>Up ↑</p>
            </div>
            <Content/>
        </div>

    );
};

export default App;
