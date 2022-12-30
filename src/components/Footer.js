import React from "react";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <>
      <footer>
        <div id="footContainter">
          <div id="footIconContainer">
            <SocialIcon id="socialIcons" url="mailto:tbrown034@gmail.com" />
            <SocialIcon
              id="socialIcons"
              url="https://www.linkedin.com/in/trevorabrown/"/>
            <SocialIcon id="socialIcons" url="https://twitter.com/tbrownOKC" />
            <SocialIcon id="socialIcons" url="https://github.com/tbrown034" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
