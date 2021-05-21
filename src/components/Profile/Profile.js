import React, { useState, useEffect } from "react";
import "./Profile.css";
import { useHistory } from "react-router-dom";
import SideProfile from "./SideProfile";
import TabProfile from "./TabComponent";

const Profile = () => {
  // const [toggleState, setToggleState] = useState();

  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };
 

  return (
    <>
      <div className='profile_area'>
        <div className='upper_area'>
          <h1>Profile </h1>
        </div>
        <div className='down_area'>
          <div className='right_area'>
            <SideProfile />
          </div>
          <div className='left_area'>
            <TabProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
