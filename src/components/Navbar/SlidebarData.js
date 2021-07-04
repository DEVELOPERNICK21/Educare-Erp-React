import React from 'react';
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as VscIcons from "react-icons/vsc";
import * as IoIcons from "react-icons/io5";
import Dashboard from '../Dashboard/Dashboard';
import AboutUs from '../About Us/AboutUs';
import Fee from '../Fees/Fee';
import Acedmics from '../Assignment/Assignment';
import Calender from '../Calender/Calendar';
import Profile from '../Profile/Profile';
import Result from '../Result/Result';
import Settings from '../Settings/Settings';
import Support from '../Support/Support';
import Calenders from '../Calender/Calendar';
import TodoMaterial from '../Todo/ToDo_Material';
import Keep from '../Keep/keep';

import * as BsIcons from "react-icons/bs";

const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon:<RiIcons.RiDashboardLine size={25} />,
        cName: 'nav-item',
        page: {Dashboard}
    },  
    {
        title: 'Profile',
        path: '/profile',
        icon:<AiIcons.AiOutlineUser size={25} />,
        cName: 'nav-item',
        page: {Profile}
    },
    {
        title: 'Academics',
        path: '/acedmics',
        icon:<MdIcons.MdAssignment size={25} />,
        cName: 'nav-item',
        page: {Acedmics}
    },
    {
        title: 'Time Table',
        path: '/calender',
        icon:<RiIcons.RiTableLine size={25} />,
        cName: 'nav-item',
        page: {Calenders}
    },
    {
        title: 'Result',
        path: '/Result',
        icon:<VscIcons.VscGraph size={25} />,
        cName: 'nav-item',
        page: {Result}
    },
    {
        title: 'Keep',
        path: '/keep',
        icon:<FaIcons.FaRegStickyNote size={25} />,
        cName: 'nav-item',
        page: {Keep}
    },
    {
        title: 'ToDo',
        path: '/todo',
        icon:<FaIcons.FaTasks size={25} />,
        cName: 'nav-item',
        page: {TodoMaterial}
    },
    // {
    //     title: 'Calender',
    //     path: '/Calender',
    //     icon:<VscIcons.VscCalendar size={25} />,
    //     cName: 'nav-item',
    //     page: {Calender}
    // },
    {
        title: 'Fee',
        path: '/fee',
        icon:<IoIcons.IoCashOutline size={25} />,
        cName: 'nav-item',
        page: {Fee}
    },
    {
        title: 'Support',
        path: '/Support',
        icon:<IoIcons.IoCallOutline size={25} />,
        cName: 'nav-item',
        page: {Support}
    },
    {
        title: 'About Us',
        path: '/aboutus',
        icon:<VscIcons.VscHeart size={25} />,
        cName: 'nav-item',
        page: {AboutUs}
    },
    // {
    //     title: 'Settings',
    //     path: '/Settings',
    //     icon:<IoIcons.IoSettingsOutline size={25} />,
    //     cName: 'nav-item',
    //     page: {Settings}
    // },
]

export default SidebarData;