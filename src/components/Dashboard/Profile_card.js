import React from "react";
import "./Profilecard.css"
import Profile from './img/profile.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const ProfileCard = () => {
  return (
    <>
<div className="profile-card">
  <div className="card-header">
    <div className="pic">
      <img src={Profile}  alt="Card_image" />
    </div>
    <div className="name">Nick Kubde</div>
    <div className="desc">Developer &amp; Designer</div>
    <div className="sm">
      <a href="#" className="facebook"><FacebookIcon /></a>
      <a href="#" className="Whatsapp"><WhatsAppIcon /></a>
      <a href="#" className="Instagram"><InstagramIcon /></a>
      <a href="#" className="Tweet"><TwitterIcon /></a>
      <a href="#" className="Linkdin"><LinkedInIcon /></a>
    </div>
    <a href="#" className="contact-btn">Contact Me</a>
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

