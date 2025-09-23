import React from "react";
import "./Review.css";
import Bodybuilder from "../../Images/handsome-brutal-bodybuilder-posing-with-dumbells.png";
import Certifications from "../../Component/MultiComponents/Certifications";
import ReviewStories from "../../Component/MultiComponents/ReviewStories";

const Review = () => {
  return (
    <>
      <div className="review-container">
        <div className="review-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="review-header-col-image">
                  <img src={Bodybuilder} alt="Bodybuilder__Image" />
                  <div className="review-header-col-image-centered">
                    <h1>Champion</h1>
                    <h1>Reviews</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="review-header-right-div-title">
                  <h4>Testimonials</h4>
                  <h2>WHAT CLIENTS SAY</h2>
                </div>

                <div className="review-header-right-div-text">
                  <p>
                    Every champion has a story. These reviews come from clients who 
                    decided to invest in themselves and trust the process. From strength 
                    gains to lasting lifestyle changes, their results are proof that with 
                    the right guidance, you can achieve more than you imagined.
                  </p>

                  <p>
                    Champion Lifestyle is about more than workouts, it’s about creating 
                    balance between training, nutrition, and recovery so you can look, 
                    feel, and perform like a champion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="review-container-div-gray">
        <ReviewStories />
      </div>

      <div className="review-container-div-image">
        <Certifications />
      </div>
    </>
  );
};

export default Review;
