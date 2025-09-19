import React from "react";
import "./MultiComponents.css";
import useFunction from "../../Hooks/useFunction";

const TrainingEnvironment = () => {
  const { trainingEnvironmentData, handleClassesPage } = useFunction();

  return (
    <>
      <div className="section">
        <div className="common-header-vartical-div-title">
          <div className="middle-vertical-line-div">
            <div className="middle-vertical-line"></div>
          </div>
          <h4>Decide Your</h4>
          <h2>TRAINING ENVIORNMENT</h2>
        </div>

        <div className="row row-edit">
          {trainingEnvironmentData.map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={item.id}>
              <div className="pro-selected-card">
                <img src={item.img} alt="enviornment_image" />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="common-button-design text-center">
          <button onClick={handleClassesPage}>More Classes</button>
        </div>
      </div>
    </>
  );
};

export default TrainingEnvironment;
