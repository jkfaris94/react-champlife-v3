import React from "react";
import "./Footer.css";
import "../MultiComponents/MultiComponents.css";
import logo from "../../Images/champion-lifestyle-no-background.png";
import { Link } from "react-router-dom";
import useFunction from "../../Hooks/useFunction";

const Footer = () => {
  const { handleHomePage } = useFunction();
  return (
    <>
      <div className="footer-container-div-bg-image">
        <div className="section">
          <div className="row row-edit-start">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 ">
              <div className="footer-container-div-logo">
                <img src={logo} alt="logo_image" />
                <p>
                  Eat • Sleep • Train like a champion. 
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 ">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 footer-links-div">
                  <h4>Quick Links</h4>
                  <Link
                    to="/"
                    className="footer-links"
                    onClick={handleHomePage}
                  >
                    <p>
                      {" "}
                      <i className="fa-solid fa-caret-right"></i>
                    </p>
                    <p>Classes Details</p>
                  </Link>
                  <Link
                    to="/"
                    className="footer-links"
                    onClick={handleHomePage}
                  >
                    <p>
                      {" "}
                      <i className="fa-solid fa-caret-right"></i>
                    </p>
                    <p>Trainer Profiles</p>
                  </Link>
                  <Link
                    to="/"
                    className="footer-links"
                    onClick={handleHomePage}
                  >
                    <p>
                      {" "}
                      <i className="fa-solid fa-caret-right"></i>
                    </p>{" "}
                    <p>F.A.Q</p>
                  </Link>
                </div>

                {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 footer-links-div">
                  <h4>Public Sources</h4>
                  <Link
                    to="/"
                    className="footer-links"
                    onClick={handleHomePage}
                  >
                    <p>
                      {" "}
                      <i className="fa-solid fa-caret-right"></i>
                    </p>
                    <p>Accessibility</p>
                  </Link>
                  <Link
                    to="/"
                    className="footer-links"
                    onClick={handleHomePage}
                  >
                    <p>
                      {" "}
                      <i className="fa-solid fa-caret-right"></i>
                    </p>
                    <p>Privacy Policy</p>
                  </Link>
                  <Link
                    to="/"
                    className="footer-links"
                    onClick={handleHomePage}
                  >
                    <p>
                      {" "}
                      <i className="fa-solid fa-caret-right"></i>
                    </p>
                    <p>Site Search</p>
                  </Link>
                </div> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 ">
              <div className="common-header-right-div-title">
                <h4>Reach Out</h4>
                <h2>Champion Lifestyle LLC</h2>
              </div>

              <div className="footer-adress-container">
                {/* <div className="footer-adress-div">
                  <p>
                    <i className="fa-solid fa-phone"></i>
                  </p>
                  <p>Phone - +1 253-906-5208</p>
                </div> */}

                <div className="footer-adress-div">
                  <p>
                    <i className="fa-regular fa-envelope"></i>
                  </p>
                  <p>Email - Johnny@ChampLife.fit</p>
                </div>

                <div className="footer-adress-div">
                  <p>
                    <i className="fa-solid fa-location-dot"></i>
                  </p>
                  <p>Address - 117 W Bellevue Dr, Pasadena, CA 91105</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy-write-div">
        <p>
          Copyright <span>©</span> 2025 Champion Lifestyle LLC {""}
        </p>
      </div>
    </>
  );
};

export default Footer;
