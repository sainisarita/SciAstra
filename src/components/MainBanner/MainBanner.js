import React from 'react';
import image from '../../assets/images/Picture1.jpg';
import './MainBanner.css';
const MainBanner = () => {
  return (
    <section className="section main-banner" id="top" data-section="section1">
      <img src={image} alt="Main Banner Image" />

      <div className="video-overlay header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="caption">
                <p>Learn from scientists, research scholars from the top institutes in the world</p>
                <div className="main-button-red">
                  <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
