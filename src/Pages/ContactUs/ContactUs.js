import React from "react";
import "./ContactUs.css";
import Bodybuilder from "../../Images/rear-three-quarter-view-of-beautiful-bodybuilder.png";
import ContactForm from "../../Component/MultiComponents/ContactForm";
import ContactGoogleMap from "../../Component/MultiComponents/ContactGoogleMap";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-container">
        <div className="contact-us-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="contact-us-header-col-image">
                  <img src={Bodybuilder} alt="Bodybuilder__Image" />
                  <div className="contact-us-header-col-image-centered">
                    <h1>Challenge</h1>
                    <h1>Yourself</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="contact-us-header-right-div-title">
                  <h4>Contact</h4>
                  <h2>GET IN TOUCH</h2>
                </div>

                <div className="contact-us-header-right-div-text">
                  <p>
                    Have a question about coaching, pricing, or which plan fits your goals 
                    I am here to help. Tell me what you want to achieve and a little about 
                    your training history so I can point you in the right direction.
                  </p>

                  <p>
                    I create custom programs that balance what you want with what your body 
                    needs. Whether you are focused on strength, fat loss, performance, or 
                    rebuilding after an injury, we will build a plan that fits your life.
                  </p>

                  <p>
                    Ready to get started Contact me today and let’s build your program
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-us-container-div-gray">
        <ContactForm />
      </div>

      <div>
        <ContactGoogleMap />
      </div>
    </>
  );
};

export default ContactUs;
