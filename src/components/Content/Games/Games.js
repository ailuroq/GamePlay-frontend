import React from 'react'

import "./Games.css";
import {NavLink} from "react-router-dom";


const Games = () => {

    const itemData = [
        {
            img: 'https://s1.mzstatic.com/us/r30/Purple3/v4/07/4e/86/074e86e2-aa80-0e44-49ad-808c8eab7830/mzl.xxtsfuco.png',
            title: 'Сапёр',
            path: 'minesweeper'
        },
        {
            img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/ea/eb/a9/eaeba9b3-4d1e-e056-0107-5edabb89a861/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/1200x1200.jpg',
            title: 'Змейка',
            path: 'snakeGame'
        },
        {
            img: 'https://media.rawg.io/media/resize/1280/-/screenshots/4b9/4b964d9ccaa6f2851a0dbd5fbc014826.jpg',
            title: '2048',
            path: '2048'
        },
    ];

    return (

        <div className="gamesBody">
            <div className="child-page-listing">
                <h2>Our games</h2>
                <div className="grid-container">
                    {
                        itemData.map((item, index) => {
                                return (
                                    <article id="3685" className="location-listing" key={index}>
                                        <NavLink className="location-title" to={"/" + item.path}>{item.title} </NavLink>
                                        <div className="location-image">
                                            <NavLink to={"/" + item.path}>
                                                <img width="300" height="169"
                                                     src={item.img}
                                                     alt={item.title}
                                                     className="gamesImage"
                                                /> </NavLink>
                                        </div>
                                    </article>
                                )
                            }
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Games