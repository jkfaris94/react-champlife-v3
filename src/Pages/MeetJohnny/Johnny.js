import React from "react";
import "./Johnny.css";
import JohnnyBelt from "../../Images/champion-belt-fist.png";
import WhyPersonalTraining from "../../Component/MultiComponents/WhyPersonalTraining";
import JohnnyDetails from "../../Component/MultiComponents/JohnnyDetails";
import Certifications from "../../Component/MultiComponents/Certifications";

const Johnny = () => {
  return (
    <>
      <div className="trainers-container">
        <div className="trainers-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="trainers-header-col-image">
                  <img src={JohnnyBelt} alt="johnny_belt_Image" />
                  <div className="trainers-header-col-image-centered">
                    <h1>coach</h1>
                    <h1>johnny</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="trainers-header-right-div-title">
                  <h4>Expert Trainer</h4>
                  <h2>Johnny Faris</h2>
                </div>

                <div className="trainers-header-right-div-text">
                  <p>
                    Champion Lifestyle training is built around one simple belief: 
                    your fitness journey should be as unique as you are. My programs 
                    are tailored to your goals, your body, and your lifestyle, whether 
                    you want to transform your physique, boost performance, or improve overall health.
                  </p>

                  <p>
                    With a focus on strength, conditioning, flexibility, and recovery, I 
                    design programs that deliver results and keep you moving forward. My 
                    mission is not only to help you train harder but to help you build 
                    the mindset and daily habits that turn temporary progress into lifelong change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trainers-container-div-gray">
        <JohnnyDetails />
      </div>
                    {/* TODO: create collage of images */}
      <div className="trainer-container-div-image">
        <Certifications />
      </div>

      <div className="trainer-container-div-image">
        <WhyPersonalTraining />
      </div>
    </>
  );
};

export default Johnny;
