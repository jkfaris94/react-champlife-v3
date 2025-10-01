import React from "react";
import "./MultiComponents.css";
import useFunction from "../../Hooks/useFunction";
import LogoIcon from "../../Images/logo-bg-removed.png"

const WhatIsChampLife = () => {
  const { handleAboutPage } = useFunction();


  return (
    <>
      <div className="section">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">

            <div className="vid-wrap" id="vid-1">
              <img src={LogoIcon} alt="logo-no-bg" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="common-header-right-div-title">
              <h4>What Is The</h4>
              <h2>CHAMPION LIFESTYLE</h2>
            </div>

            <div className="common-header-right-div-text">
              <p>
                At Champion Lifestyle, we believe fitness is more than just workouts, it’s a lifestyle. 
                True transformation comes from aligning how you eat, train, and recover with your 
                long-term vision for yourself. It’s not about extremes or chasing trends, but about 
                creating balance and building a foundation you can actually enjoy and sustain.
              </p>

              <p>
                Success isn’t about quick fixes, it’s about building habits that align with your goals and desires. 
                Whether you’re looking to lose weight, build muscle, or improve overall health, the key is consistency 
                and sustainability. Champlife is here to guide you in making the right choices, turning small steps into 
                natural habits that lead to lasting results. Your journey starts now. Let’s make it happen.
              </p>
            </div>

            <div className="common-button-design">
              <button onClick={handleAboutPage}>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsChampLife;
