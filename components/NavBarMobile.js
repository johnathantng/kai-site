import React, { useState, useEffect } from 'react';

import BehanceIcon from '../static/icons/behance-black.png';
import LinkedInIcon from '../static/icons/linkedin-black.png';
import MailIcon from '../static/icons/mail-black.png';


function NavBarMobile() {
    return (
        <div className="navbar-mobile-container shadow">
            <div className="navbar-mobile-icons">
                <img src={BehanceIcon} className="social-media-icon" />
                <img src={LinkedInIcon} className="social-media-icon" />
                <img src={MailIcon} className="social-media-icon" />
            </div>
        </div>
    );
}

export default NavBarMobile;