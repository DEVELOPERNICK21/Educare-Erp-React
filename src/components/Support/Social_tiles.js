import React from 'react'
import './Social_tiles.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialTiles = () => 
{
    return(
    <>
		<div className="down-social">
            <ul className="ul">
                <li className="li">
                    <a href="https://www.facebook.com/NICKGAMECHANGER">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><FacebookIcon /></span>
                    </a>
                </li>
    
                <li className="li">
                    <a href="https://wa.me/8827411901">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><WhatsAppIcon /></span>
                    </a>
                </li>
    
                <li className="li">
                    <a href="https://www.instagram.com/__limitless________/?hl=en">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><InstagramIcon /></span>
                    </a>
                </li>
    
                <li className="li">
                    <a href="https://www.linkedin.com/in/nick-kubde-510a49192/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><LinkedInIcon /></span>
                    </a>
                </li>
    
                <li className="li">
                    <a href="https://twitter.com/KubdeNick">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><TwitterIcon /></span>
                    </a>
                </li>
            </ul>
        </div>
    </>
    );
}

export default SocialTiles;