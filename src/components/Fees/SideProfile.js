import React from "react";
import MainProfile from "./img/profile.jpg";
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FeeProfile = () => {
  return (
    <>
  <div className="side_card-header">
    <div className="side_pic">
      <img src={MainProfile} alt="side_profile_image"  />
    </div>
    <div className="side_profile_name">John Doe</div>
    <div className="side_profile_desc">Developer &amp; Designer</div>
    <div className="side_profile_sm">
    <a href="#" className="facebook"><FacebookIcon /></a>
      <a href="#" className="Whatsapp"><WhatsAppIcon /></a>
      <a href="#" className="Instagram"><InstagramIcon /></a>
      <a href="#" className="Tweet"><TwitterIcon /></a>
      <a href="#" className="Linkdin"><LinkedInIcon /></a>

    </div>
    <a href="#" className="side_profile_contact-btn">
      Contact Me
    </a>
  </div>
  <div className="side_profile_card-footer">
    <div className="side_profile_numbers">
      <div className="side_profile_item">
        <span>120</span>
        Posts
      </div>
      <div className="side_profile_border" />
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

    
    </>
  );
};

export default FeeProfile;
