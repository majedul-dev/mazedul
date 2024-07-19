import React from "react";
import SocialLinks from "../constants/socials";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <div className="footer-contacts">
          <p>Email: mazedul.contact@gmail.com</p>
          <p>Whatsapp: +880 1779888301</p>
          <p>Phone: +880 1643629820</p>
        </div>
        <h4>
          &copy;{new Date().getFullYear()} majedul islam. <span>WebDev</span>{" "}
          all rights reserved
        </h4>
      </div>
    </footer>
  );
};

export default Footer;