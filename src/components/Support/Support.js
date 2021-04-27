import React from 'react';
import './Support.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from "@material-ui/core/Button";
import CheckIcon from '@material-ui/icons/Check';
import SocialTiles from '../Support/Social_tiles';

const Support = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="contactInfo">
                        <div>
                            <h2>Contact Info</h2>
                            <ul className="info">
                                <li>
                                    <span><LocationOnIcon className="Con_Icon"/></span>
                                    <span>
                                        Hp Gas Agency <br />
                                    Bhopal, M.P. <br />
                                    India
                                </span>
                                </li>

                                <li>
                                    <span>
                                        <EmailIcon className="Con_Icon" />
                                    </span>
                                    <span>nickkubde21@gmail.com</span>
                                </li>

                                <li>
                                    <span>
                                        <CallIcon className="Con_Icon" />
                                    </span>
                                    <span>+91 882741901</span>
                                </li>
                            </ul>
                        </div>
                        <ul className="social">
                            {/* <li><a href="#"><FacebookIcon /></a></li>
                            <li><a href="#"><WhatsAppIcon /></a></li>
                            <li><a href="#"><InstagramIcon /></a></li>
                            <li><a href="#"><TwitterIcon /></a></li> */}
                        <SocialTiles />
                        </ul>
                    </div>
                    <div className="contactForm">
                        <h2>Send Message</h2>
                        <div className="formBox">
                            <div className="inputBox w50">
                                <input type="text" required />
                                <span>First Name</span>
                            </div>

                            <div className="inputBox w50">
                                <input type="text" required />
                                <span>Last Name</span>
                            </div>

                            <div className="inputBox w50">
                                <input type="text" required />
                                <span>Email Address</span>
                            </div>

                            <div className="inputBox w50">
                                <input type="text" required />
                                <span>Mobile Number</span>
                            </div>

                            <div className="inputBox w100">
                                <textarea required></textarea>
                                <span>Write Your Message Here</span>
                            </div>

                            <div className="inputBox w100">
                                <Button variant='contained' color='disable'>
                                    <CheckIcon /> Save
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Support;