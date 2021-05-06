import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarData from './SlidebarData';
import { IconContext } from 'react-icons';
import { Redirect } from "react-router-dom";
import './Navbar.css';

import {motion} from 'framer-motion'

const Navbar = () => {

  function toggleSidebar()
  {
    const sideBar = document.querySelector(".navbar");

    sideBar.classList.toggle("active");
  }


  const svgVariants = {
    hidden: {rotate: -180},
    visible: {
      rotate:0,
      transition:{duration:1}
    }
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#ff9f43' }}>
        <nav className='navbar'  id='nav-toggle'>
          <ul className='navbar-nav'>
            <li className='logo'>
              <a href='#' className='nav-link'>
                <span className='link-text logo-text'>NICK</span>
                <div class="close">
                <svg aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="angle-double-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
                  <g>
                    <path
                      fill="currentColor"
                      d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                      class="fa-secondary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                      class="fa-primary"
                    ></path>
                  </g>
                </svg>
                </div>
              </a>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} className="nav-link">
                    {item.icon} <Redirect to={item.page} />
                    <span className="link-text">{item.title}</span>
                  </Link>
                </li>
              );
            })}

            <li class="nav-item" id="themeButton">
              <a href="#" class="nav-link">


                <motion.svg

                variants={svgVariants}
                initial="hidden"
                animate="visible"
                  width="54px" height="54px"
                  class="theme-icon"
                  id="darkIcon"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="EDUCARE"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 762.85 405.83"
                  class="svg-inline--fa fa-sunglasses fa-w-18 fa-7x"
                >
                  <g class="fa-group">
                    <path
                      fill="currentColor"
                      d="M241.81,361l12,46.78C128.13,441.93-1.8,342.16.13,211.44-6.36,29.62,239.38-61.15,353.74,76c-28.33,25.41-114.32,102.62-144,129.26l-28-28,105.79-95C190.18,14.39,44.78,91.4,48.4,211.44,46.93,311.08,146.05,387.12,241.81,361Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M703.48,354.81C623,442.62,460,428.8,395.39,329.69a224.07,224.07,0,0,0,24.16-54.11c38.16,95,180.06,121.21,249.79,45.09Z"
                      class="fa-primary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M751.32,144,705.79,160a152.39,152.39,0,0,0-10.58-23.5l42.21-23.42A195.26,195.26,0,0,1,751.32,144Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M762.85,211.44H714.58a155,155,0,0,0-2.15-25.76l47.6-8.06A202.57,202.57,0,0,1,762.85,211.44Z"
                      class="fa-primary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M759.72,247.08A197.59,197.59,0,0,1,751.3,279l-45.53-16.09a151.92,151.92,0,0,0,6.43-24.31Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M737.94,308.87a196.48,196.48,0,0,1-14.73,23l-38.83-28.66a156.91,156.91,0,0,0,11.22-17.55Z"
                      class="fa-primary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M560.43,8.69V57a154.49,154.49,0,0,0-154.8,154.48,201.16,201.16,0,0,1-39.06,119.64l-38.85-28.65a153.79,153.79,0,0,0,29.63-91C357.34,99.34,448.35,8.5,560.43,8.69Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M601.56,13.88l5.65,1.21,7.68,52.2-9.58-2.05L601.1,29.81,582.72,60.39l-9.58-2Zm-16.21,29.8L610.19,49l-1.88,8.77-24.84-5.33Z"
                      class="fa-primary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M648.32,28.83l7.84,4.6L631.7,75.09l-7.84-4.6ZM641.25,48l14.49,8.51a4.38,4.38,0,0,0,2.47.64,4.5,4.5,0,0,0,2.43-.89,7.63,7.63,0,0,0,2-2.26,7.24,7.24,0,0,0,1-2.87,4.49,4.49,0,0,0-.41-2.55,4.4,4.4,0,0,0-1.79-1.87L647,38.22l4.44-7.56,15.12,8.87a13.5,13.5,0,0,1,5.13,5.1,12.11,12.11,0,0,1,1.47,6.73,16.54,16.54,0,0,1-2.41,7.39,16.46,16.46,0,0,1-5.27,5.7,12.12,12.12,0,0,1-6.61,2,13.48,13.48,0,0,1-6.94-2l-15.12-8.87Zm5.08,11.41L655.49,63l-.14,26-9.5-5.58Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M700.38,63.3l5.82,7-37.1,30.89-5.82-7ZM672.12,91.11l18.59,22.32L684,119,665.38,96.72Zm15-12.54,16.26,19.52-6.74,5.61L680.44,84.18Zm15.31-12.74,18.59,22.32-6.73,5.61L695.75,71.43Z"
                      class="fa-primary"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M257,356.55l8.2-3.92,20.82,43.56-8.21,3.92Zm21.17,33.67,10.45-5q4.05-1.94,5.33-4.94a7.67,7.67,0,0,0-.42-6.57l-6.12-12.83a7.71,7.71,0,0,0-4.85-4.45q-3.15-.88-7.2,1.05l-10.45,5-3.78-7.91,10.28-4.91a23.81,23.81,0,0,1,10.17-2.61,14.34,14.34,0,0,1,8.41,2.53,18.53,18.53,0,0,1,6,7.49l5.9,12.34a18.56,18.56,0,0,1,2,9.13,14.67,14.67,0,0,1-3.19,8.23,23.19,23.19,0,0,1-8.54,6.47L282,398.13Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M334.59,366.61a14.06,14.06,0,0,1-8.58-.31,21.16,21.16,0,0,1-8.19-5.62l-21.24-22.32,6.6-6.28,21.39,22.5a8.88,8.88,0,0,0,6.05,3.13,8.33,8.33,0,0,0,6.13-2.66,8.47,8.47,0,0,0,3-6,8.82,8.82,0,0,0-2.81-6.22l-21.4-22.49,6.59-6.27,21.24,22.33a21,21,0,0,1,5.19,8.46,14.17,14.17,0,0,1-.14,8.62,22.65,22.65,0,0,1-13.83,13.15Z"
                      class="fa-primary"
                    ></path>
                  </g>
                </motion.svg>
                <span class="link-text">EDUCARE</span>
              </a>
            </li>

          </ul>

        </nav>
      </IconContext.Provider>
    </>
  );

}

export default Navbar;

