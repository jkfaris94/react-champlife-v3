import React from "react";
import "./MultiComponents.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import victory from "../../Images/victory.jpg";
import headshot from "../../Images/HeadShot.png";
import family1 from "../../Images/family_maternity_shoot-scaled.png"
import useFunction from "../../Hooks/useFunction";

const JohnnyOverview = () => {
  const { handleAboutPage } = useFunction(); //link to about me 

  return (
    <>
      <div className="section">
        <div className="row row-edit">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="common-header-right-div-title">
              <h4>Your Guide to Lasting Results</h4>
              <h2>MEET JOHNNY</h2>
            </div>

            <div className="common-header-right-div-text">
              <p>
                Hi, I’m Johnny Faris, a dedicated husband, proud father of two, 
                and a passionate personal trainer with a background in professional MMA. 
                My journey in fitness and martial arts has taken me across the globe, 
                with training experiences in Thailand and Brazil that shaped the way I coach today. 
                These experiences allow me to blend proven techniques from different disciplines into 
                practical, results-driven programs for my clients.
              </p>

              <p>
                Since 2015, I’ve been helping people transform their health through personalized 
                training, nutrition, and recovery strategies. I specialize in weight management, 
                functional strength, and injury prevention, drawing from both my MMA career and 
                years of coaching at Equinox. My philosophy is simple: build habits that last, 
                train with purpose, and create a lifestyle where you feel strong, resilient, 
                and capable inside and outside the gym.
              </p>
            </div>

            <div className="common-button-design">
              <button onClick={handleAboutPage}>Read More</button>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="strong-team-slider-div">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                emulateTouch
                dynamicHeight={false}
                swipeScrollTolerance={50}
                centerSlidePercentage={30}
                showIndicators
              >
                <div className="strong-team-slider-image-div">
                  <img
                    src={victory}
                    alt="victory_image"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
                <div className="strong-team-slider-image-div">
                  <img
                    src={headshot}
                    alt="headshot_image"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
                <div className="strong-team-slider-image-div">
                  <img
                    src={family1}
                    alt="family1_image"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JohnnyOverview;
