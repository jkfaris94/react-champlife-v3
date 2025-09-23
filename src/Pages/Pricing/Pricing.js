import React from "react";
import "./Pricing.css";
import Bodybuilder from "../../Images/muscular-bodybuilder-guy-doing-exercises-with-dumb.png";
import Packages from "../../Component/MultiComponents/Packages";
import InspireQuotes from "../../Component/MultiComponents/InspireQuotes";

const Pricing = () => {
  return (
    <>
      <div className="pricing-container">
        <div className="pricing-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="pricing-header-col-image">
                  <img src={Bodybuilder} alt="Bodybuilder__Image" />
                  <div className="pricing-header-col-image-centered">
                    <h1>Train Like A</h1>
                    <h1>Champion</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="pricing-header-right-div-title">
                  <h4>Start Now</h4>
                  <h2>PRICING PACKAGES</h2>
                </div>

                <div className="pricing-header-right-div-text">
                  <p>
                    Your goals deserve more than a cookie cutter workout. With Champion 
                    Lifestyle personal training every plan is built around you, your schedule, 
                    your body and your vision. This is not about quick fixes, it is about 
                    creating a program that makes sense for your life and sets you up for long term success.
                  </p>

                  <p>
                    I will provide the structure, accountability and expert coaching you need to stay 
                    consistent and see results. Every program is custom built to combine what you want 
                    with what your body truly needs, creating a balanced approach that supports your 
                    goals while protecting your long term health. Whether your focus is strength, fat loss, 
                    performance or overall wellness, I will guide you through the process so you can train 
                    with confidence and build lasting habits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-container-div-gray">
        <Packages />
      </div>

      <div className="pricing-container-div-image">
        <InspireQuotes />
      </div>
    </>
  );
};

export default Pricing;
