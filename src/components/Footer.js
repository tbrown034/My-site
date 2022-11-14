import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
    return (
        <>
        <footer>
            <div id="footContainter">
                <div id="footIconContainer">
                <SocialIcon url="mailto:tbrown034@gmail.com" />
                <SocialIcon url="https://github.com/tbrown034" />
                <SocialIcon url="https://www.linkedin.com/in/trevorabrown/" />
                <SocialIcon url="https://twitter.com/tbrownOKC" />
                <SocialIcon url="https://www.facebook.com/profile.php?id=6814723" />
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer