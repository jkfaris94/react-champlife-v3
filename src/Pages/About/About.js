import React from "react";
import "./About.css";
import WomenBodybuilder from "../../Images/young-woman-posing-and-showing-muscles-in-gym-about.png";
// import Overview from "../../Component/MultiComponents/Overview";
import JohnnyOverview from "../../Component/MultiComponents/JohnnyOverview";
import MemberStories from "../../Component/MultiComponents/MemberStories";
import Certifications from "../../Component/MultiComponents/Certifications";
import OurAwards from "../../Component/MultiComponents/OurAwards";

const About = () => {
  return (
    <>
      <div className="about-us-container">
        <div className="about-us-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="about-us-header-col-image">
                  <img src={WomenBodybuilder} alt="Bodybuilder__Image" />
                  <div className="about-us-header-col-image-centered">
                    <h1>Champ</h1>
                    <h1>Life</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="about-us-header-right-div-title">
                  <h4>About</h4>
                  <h2>CHAMPION LIFESTYLE LLC</h2>
                </div>

                <div className="about-us-header-right-div-text">
                  <p>
                    At Champion Lifestyle, coaching is practical and personal. 
                    We focus on movement quality, smart programming, and habits 
                    that fit real life—so you can get stronger, move better, and 
                    stay consistent. Corrective strategies and longevity-minded 
                    training are baked in to keep you progressing, injury-aware, and confident.
                  </p>

                  <p>
                    Choose what fits: in-home sessions, in-gym training in Pasadena or 
                    Glendale, or virtual coaching with live form checks and instant cues. 
                    You’ll get customized workouts, progress tracking, and coach accountability from day one.
                  </p>

                  <p>
                    Being a champion isn’t about a stage or a scoreboard, it’s a mindset you practice daily. 
                    You don’t need to be actively competing to become one; you build it through consistent 
                    choices: showing up, moving well, eating with intent, prioritizing recovery, and keeping 
                    promises to yourself. My coaching gives you the structure and accountability to turn those 
                    choices into habits, so the champion you want to be shows up in everyday life, at work, at 
                    home, and in how you feel in your own body.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-container-div-gray">
        <JohnnyOverview />
      </div>

      <div className="about-container-div-image">
        <MemberStories />
      </div>

      <div className="about-container-div-gray">
        <Certifications />
      </div>
    </>
  );
};

export default About;
