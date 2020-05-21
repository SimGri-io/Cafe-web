import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck-pale">
      <Fade delay={500}>
        <div className="footer-container">
          <div className="footer-logo">Coffee Addict</div>
          <p className="footer-logo-sub">Family cafe since 1991</p>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
