import React from 'react'
import styles from './TypingRace.module.css'
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logotype}>
                    <p>TypingRace</p>
                </div>
                <div className={styles.menu_block}>
                    <ul className={styles.menu}>
                        <li><Link>Races</Link></li>
                        <li><Link>Rating</Link></li>
                        <li><Link>About game</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.content}>
                <div>
                    <p><Link>Info</Link></p>
                </div>
                <div>
                    <p><Link>Quick race</Link></p>
                </div>
                <div>
                    <p><Link to="/typing-race/races">Choose race</Link></p>
                </div>
            </div>
        </div>
    )
}

export default MainPage