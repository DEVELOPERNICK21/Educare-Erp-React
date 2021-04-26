import React from 'react';
import './Profile.css'
import MainProfile from './img/profile.jpg'

const Profile = () => {
    return (
        <>
            <div className="profile_area">
                <div className="upper_area">
                    <h1>Profile Setting</h1>

                </div>
                <div className="down_area">
                    <div className="right_area">
                        <h2>Profile</h2>
                        <img src={MainProfile} width="250px" height="250px" alt="Profile-image" />
                        <div className="profileName">
                            <h2>Nick Kubde</h2>
                            <small>Super Admin</small>
                        </div>
                    </div>
                    <div className="left_area">
                    <h2>Basic Info</h2>
                    <h2>Personal Info</h2>
                    <h2>Qualification Info</h2>
                        <h2>Acedmic Info</h2>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;