import React from "react";
import "./Home.css";
import Victory from "../../Images/victory-bg-removed.png";
import { Link } from "react-router-dom";
import WhyPersonalTraining from "../../Component/MultiComponents/WhyPersonalTraining";
import TrainingEnvironment from "../../Component/MultiComponents/TrainingEnviorment";
import InspireQuotes from "../../Component/MultiComponents/InspireQuotes";
import JohnnyOverview from "../../Component/MultiComponents/JohnnyOverview";
import WhatClintsSay from "../../Component/MultiComponents/WhatClintsSay";
import Packages from "../../Component/MultiComponents/Packages";
import useFunction from "../../Hooks/useFunction";
import WhatIsChampLife from "../../Component/MultiComponents/WhatIsChampLife";

const Home = () => {
  const { handleContactPage } = useFunction();
  return (
    <>
      <div className="home-container">
        <div className="banner-div">
          <div className="section">
            <div className="row home-row-edit">
              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                <div className="header-vartical-icon">
                  <div className="vertical-line"></div>
                  <div>
                    <Link to="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                  <div className="vertical-line"></div>
                </div>
              </div>
              <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12 text-center">
                <div className="header-col-image">
                  <img src={Victory} alt="Victory__Image" />
                  <div className="header-col-image-centered">
                    <h1>Eat | Sleep | Train</h1>
                    <h1>Like a Champion</h1>
                    <button onClick={handleContactPage}>Start Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="home-container-div-gray">
        <WhatIsChampLife />
      </div>

      <div className="home-container-div-image1">
        <WhyPersonalTraining />
      </div>

      <div className="home-container-div-gray">
        <TrainingEnvironment />
      </div>

      <div className="home-container-div-image2">
        <InspireQuotes />
      </div>

      <div className="home-container-div-gray">
        <JohnnyOverview />
      </div>

      <div className="home-container-div-image3">
        <WhatClintsSay />
      </div>

      <div className="home-container-div-gray">
        <Packages />
      </div>
    </>
  );
};

export default Home;
