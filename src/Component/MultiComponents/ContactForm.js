import React, { useState } from "react";
import "./MultiComponents.css";
import "../../Component/Footer/Footer.css";
import { Link } from "react-router-dom";
import { db } from "../../Firebase/Firebase.initialization"; // Adjust path if firebase.js is in a different folder (e.g., src/firebase.js)
import { collection, addDoc } from "firebase/firestore";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      setSubmitStatus("success");
      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <>
      <div className="section">
        <div className="row row-edit">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4">
            <div>
              <div className="common-header-right-div-title">
                <h4>Find Me</h4>
                <h2>START WORKING OUT</h2>
              </div>

              <div className="footer-adress-container">
                <div className="footer-adress-div">
                  <p>
                    <i className="fa-solid fa-phone"></i>
                  </p>
                  <p>Phone - +1 253-906-5208</p>
                </div>

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

            <div className="contact-form-social-div">
              <div className="common-header-right-div-title">
                <h4>Find Me</h4>
                <h2>ON THE SOCIALS</h2>
              </div>

              <div className="footer-adress-container">
                <div className="contact-form-icon-div">
                  <Link to="/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4">
            <div className="contact-form-div">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <br />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>

                <button type="submit">Submit</button>
                {submitStatus === "success" && <p style={{ color: "green" }}>Message sent successfully!</p>}
                {submitStatus === "error" && <p style={{ color: "red" }}>Error sending message. Please try again.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;