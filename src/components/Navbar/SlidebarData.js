import React from 'react';
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as VscIcons from "react-icons/vsc";
import * as IoIcons from "react-icons/io5";
import * as BsIcons from "react-icons/bs";
import Profile from '../Profile/Profile';

const SidebarData = [
    {
        title: 'Dashboard',
        path: './',
        icon:<RiIcons.RiDashboardLine size={25} />,
        cName: 'nav-item'
    },  
    {
        title: 'Profile',
        path: '../Profile/Profile',
        icon:<AiIcons.AiOutlineUser size={25} />,
        cName: 'nav-item'
    },
    {
        title: 'Assignments',
        path: '/Assignments',
        icon:<MdIcons.MdAssignment size={25} />,
        cName: 'nav-item'
    },
    {
        title: 'Time Table',
        path: '/Timetable',
        icon:<RiIcons.RiTableLine size={25} />,
        cName: 'nav-item'
    },
    {
        title: 'Result',
        path: '/Result',
        icon:<VscIcons.VscGraph size={25} />,
        cName: 'nav-item'
    },
    {
        title: 'Calender',
        path: '/Calender',
        icon:<VscIcons.VscCalendar size={25} />,
        cName: 'nav-item'
    },
    {
        title: 'Fees',
        path: '/Fees',
        icon:<IoIcons.IoCashOutline size={25} />,
        cName: 'nav-item'
    },
    {
        title: 'Support',
        path: '/Support',
        icon:<IoIcons.IoCallOutline size={25} />,
        cName: 'nav-item'
    },
    {
        title: 'About Us',
        path: '/AboutUs',
        icon:<VscIcons.VscHeart size={25} />,
        cName: 'nav-item'
    },
    {
        title: 'Settings',
        path: '/Settings',
        icon:<IoIcons.IoSettingsOutline size={25} />,
        cName: 'nav-item'
    },
]

export default SidebarData;