import React from "react";
import "./MultiComponents.css";
import useFunction from "../../Hooks/useFunction";

const InspireQuotes = () => {
  const { inspireQuotesData } = useFunction();

  // Shuffle and grab 3 random quotes
  const randomQuotes = [...inspireQuotesData]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="section">
      <div className="row row-edit">
        {randomQuotes.map((item) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12 mt-4"
            key={item.id}
          >
            <div className="achievment-card">
              <p className="quote">“{item.quote}”</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InspireQuotes;