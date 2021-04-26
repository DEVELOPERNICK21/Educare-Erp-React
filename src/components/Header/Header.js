import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Profile from '../Profile/Profile';
import './Header.css'
import profileImg from './img/profile.jpg'


const Header = () => {

    const time = new Date().toLocaleTimeString();

    const [curTime, setCurTime] = useState(time);

    const Uptime = () => {
        const ntime = new Date().toLocaleTimeString();
        setCurTime(ntime);
    }
    setInterval(Uptime, 1000);

    return (
        <>
            <div className="main-content">
                <header>
                    <h2>
                        Dashboard
                    </h2>
                    <div className="search-wrapper" >
                        <span className="las la-search" ></span>
                        <input type="search" placeholder="Search" />
                    </div>


                    <div className="user-wrapper">
                        <div className="current-time">
                            <h3>{curTime}</h3>
                        </div>
                        <a href={Profile}>
                            <img src={profileImg} width="50px" height="50px" alt="Profile-image" />
                        </a>
                        <Link to={Profile}>
                            <div className="headerName">
                                <h4>Nick Kubde</h4>
                                <small>Super Admin</small>
                            </div>
                        </Link>
                    </div>
                </header>
            </div>
        </>
    );

}

export default Header;