import React, { useState } from "react";
import { Link, NavLink,Route,Switch } from "react-router-dom";
import Acedmics from "../Assignment/Assignment"
import Profile from "../Profile/Profile";
import SignUp from "../SignUp/SignUp";
import "./Header.css";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import profileImg from "./img/profile.jpg";

const Header = () => {
  const time = new Date().toLocaleTimeString();

  const [curTime, setCurTime] = useState(time);

  const Uptime = () => {
    const ntime = new Date().toLocaleTimeString();
    setCurTime(ntime);
  };
  setInterval(Uptime, 1000);

  return (
    <>
      <div className='main-content'>
        <header>
          <h2>Dashboard</h2>
          <div className='search-wrapper'>
            <span className='las la-search'></span>
            <input type='search' placeholder='Search' />
          </div>

          <div className='user-wrapper'>
            <div className='notification_dropDown'>
                          <NotificationsActiveIcon />
            <div className="vr">&nbsp;</div>
            <div className="vr2">&nbsp;</div>
              <div className='link_content_notification'>
                <small>Your MST 2 Marks had been Updated</small>
                <small>Your MST 2 Marks had been Updated</small>
                <small>Test is on 24-April-2021</small>
                <small>Your MST 1 Marks had been Updated</small>
                <small>Your MST 2 Marks had been Updated</small>
              </div>
            </div>
            <div className='current-time'>

              <h3>{curTime}</h3>

            </div>
            <div className='hidden_dropDown'>
            {/* <div className="vr2">&nbsp;</div> */}
              <div className="vr3"></div>
              <a href={"./profile"}>
                <img
                  src={profileImg}
                  width='50px'
                  height='50px'
                  alt='Profile-image'
                />
              </a>

              <div className='link_content'>
                {/* <a className='link' href={Acedmics}>
                  Home
                </a> */}

                <a className='link' href={Profile}>
                  Profile
                </a>
                <a className='link' href={Profile}>
                  Acedmic
                </a>
                <Link to={'/signup'}>
                  LogOut
                  </Link>
              </div>
            </div>
            <div className='headerName'>
              <Link to={'/profile'}>
                <h4>Nick Kubde</h4>
                </Link>
                <small>Super Admin</small>
            </div>

          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
