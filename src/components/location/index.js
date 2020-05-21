/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Location = () => {
  return (
    <div className="location-wrapper">
      <h1 className="contacts-title">Contacts</h1>
      <div className="map-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.5575752199595!2d-0.1283069418765233!3d51.5111033949089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cdb8ee1971%3A0xdcaccd8f0959f3ed!2sHalf%20A%20Sixpence!5e0!3m2!1sen!2slt!4v1589973129760!5m2!1sen!2slt"
          width="70%"
          height="450px"
          frameBorder="0"
          allowFullScreen=""
        ></iframe>
        <ul className="list-items-loc">
          <li className="list-items">Coffee Addict</li>
          <li className="list-items">Family Cafe</li>
          <li className="list-items">
            Address: Covent Garden, London WC2N 4AU
          </li>
          <li className="list-items">United Kingdom</li>
          <li className="list-items">Mob: +44 333 243 124 XX</li>
        </ul>
      </div>
    </div>
  );
};

export default Location;
