import React from "react";
import MainProfile from "./img/profile.jpg";

const SideProfile = () => {
  return (
    <>
      <div className='profile_Image'>
        <img
          src={MainProfile}
          width='200px'
          height='200px'
          alt='Profile-image'
        />
      </div>
      <div className='profileName'>
        <h3>Nick Kubde</h3>
        <br/>
        <small>Super Admin</small>
      </div>
      <button className='lg-btn'>Upload </button>
    </>
  );
};

export default SideProfile;
