import React from "react";

const Mission = () => {
  return (
    <div className="back-brown">
      <h1 className="mission-text">Our Mission</h1>
      <div className="center-wrapper">
        <div className="mission-wrapper">
          <div className="mission-item">
            <div className="mission mission-outer">
              <div className="mission mission-inner">
                <div className="square-bck-one">
                  <i className="seed fas fa-seedling fa-3x"></i>
                </div>
                <ul className="mission-list">
                  <li>Grow Organic</li>
                  <li>Brew Organic</li>
                  <li>Taste Organic</li>
                  <li>Share Organic</li>
                  <li>Sell Organic</li>
                  <li>Coffee Beans</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mission-item">
            <div className="mission mission-outer">
              <div className="mission mission-inner">
                <div className="square-bck-two">
                  <i className="mug fas fa-mug-hot fa-3x"></i>
                </div>
                <ul className="mission-list">
                  <li>hipster ipsum</li>
                  <li>mlkshk iPhone 3 wolf</li>
                  <li>Green juice</li>
                  <li>gluten-free</li>
                  <li>bicycle rights</li>
                  <li>artisan readymade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
