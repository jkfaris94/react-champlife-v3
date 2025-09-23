import React from "react";
import "./MultiComponents.css";
import WorkoutImage from "../../Images/couple-doing-push-ups-with-kettlebells.jpg";
import useFunction from "../../Hooks/useFunction";
const WorkOutShedule = () => {
  const { handleContactPage } = useFunction();

  return (
    <>
      <div className="section">
        <div className="row row-edit">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4">
            <div className="common-header-right-div-title">
              <h4>General</h4>
              <h2>TRAINING HOURS</h2>
            </div>

            <div className="common-header-right-image-div">
              <img src={WorkoutImage} alt="workout_image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4">
            <div className="workout-shedule-list-div">
              <ul>
                <li>
                  <span>Monday</span>
                </li>

                <li>
                  <span>07:00 AM - 9:00 PM</span>
                </li>
              </ul>

              <ul>
                <li>
                  <span>Tuesday</span>
                </li>

                <li>
                  <span>07:00 AM - 9:00 PM</span>
                </li>
              </ul>

              <ul>
                <li>
                  <span>Wednesday</span>
                </li>

                <li>
                  <span>07:00 AM - 9:00 PM</span>
                </li>
              </ul>

              <ul>
                <li>
                  <span>Thursday</span>
                </li>

                <li>
                  <span>07:00 AM - 9:00 PM</span>
                </li>
              </ul>

              <ul>
                <li>
                  <span>Friday</span>
                </li>

                <li>
                  <span>07:00 AM - 9:00 PM</span>
                </li>
              </ul>

              <ul>
                <li>
                  <span>Saturday</span>
                </li>

                <li>
                  <span>07:00 AM - 9:00 PM</span>
                </li>
              </ul>

              <ul>
                <li>
                  <span>Sunday</span>
                </li>

                <li>
                  <span>Rest Day</span>
                </li>
              </ul>
            </div>

            <div className="common-button-design mt-4">
              <button onClick={handleContactPage}>Complimentary Fitness Evaluation</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkOutShedule;
