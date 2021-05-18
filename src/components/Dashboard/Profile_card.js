import React, {useContext} from "react";
import "./Profilecard.css"
import Profile from '../Images/profile.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {firstName,phone,email} from "./Dashboard"


const ProfileCard = (props) => {

  const fname = useContext(firstName);
  const mobNo = useContext(phone);
  const e_mail = useContext(email);
  return (
    <>
<div className="profile-card">
  <div className="card-header">
    <div className="pic">
      <img src={Profile}  alt="Profile_image" />
    </div>
    <div className="name">{fname}</div>
    <div className="pc_details">
    <div className="desc">Developer &amp; Designer</div>
    <br/>
    <div className="desc">{e_mail}</div>
    <br/>
    <div className="desc">+91 {mobNo}</div>
    <br/>
    <div className="desc">City- Bhopal</div>
    </div>
    <a href="#" className="contact-btn">Contact Me</a>
    <div className="sm">
      <a href="#" className="facebook"><FacebookIcon /></a>
      <a href="#" className="Whatsapp"><WhatsAppIcon /></a>
      <a href="#" className="Instagram"><InstagramIcon /></a>
      <a href="#" className="Tweet"><TwitterIcon /></a>
      <a href="#" className="Linkdin"><LinkedInIcon /></a>
    </div>
  </div>
  <div className="card-footer">
    <div className="numbers">
      <div className="item">
        <span>120</span>
        Posts
      </div>
      <div className="border" />
      <div className="item">
        <span>127</span>
        Following
      </div>
      <div className="border" />
      <div className="item">
        <span>120K</span>
        Followers
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default ProfileCard;

