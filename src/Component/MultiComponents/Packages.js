import React, { useState } from "react";
import "./MultiComponents.css";
import useFunction from "../../Hooks/useFunction";

const Packages = () => {
const [isSessions, setIsSessions] = useState(true); // true = 1-on-1 Sessions, false = Custom Program
  const { sessionPackages, coachingPackages, handleContactPage, calculateTotal, loading } = useFunction();

  if (loading) {
    return (
      <div className="section">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading your training options...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="section">
        <div className="common-header-vartical-div-title">
          <div className="middle-vertical-line-div">
            <div className="middle-vertical-line"></div>
          </div>
          <h4>Start The Process</h4>
          <h2>VIEW TRAINING PACKAGES</h2>
        </div>

        {/* Dynamic Toggle Buttons */}
        <div className="mt-4 dynamic-button">
          <button
            onClick={() => setIsSessions(true)}
            className={isSessions ? "active" : ""}
          >
            1-on-1 Sessions
          </button>
          <button
            // onClick={() => setIsSessions(false)} commented out until completed
            className={!isSessions ? "active" : ""}
          >
            Custom Program (coming soon)
          </button>
        </div>

        {/* 1-on-1 Sessions View */}
        {isSessions ? (
          <div className="row mt-4 mb-4">
            {sessionPackages.map((sessionType) => {
                // Find the 24-pack (or largest package if no 24-pack exists)
                const twentyFourPack = sessionType.packages.find(pkg => pkg.name.includes('24')) || 
                                    sessionType.packages.reduce((largest, pkg) => 
                                        pkg.sessions > largest.sessions ? pkg : largest
                                    );
                
                return (
                <div
                    className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4"
                    key={sessionType.id}
                >
                    <div className="choose-plan-card session-card">
                    {/* Session Type Header */}
                    <div className="session-header">
                        <div className="session-icon">
                        {sessionType.type === 'in-home' && '🏠'}
                        {sessionType.type === 'in-gym' && '🏋️'}
                        {sessionType.type === 'virtual' && '💻'}
                        </div>
                        <h3>{sessionType.title}</h3>
                        <p className="session-description">{sessionType.description}</p>
                    </div>

                    {/* Highlighted 24-Pack Price */}
                    <div className="price-highlight">
                        {/* <div className="price-badge">Best Value</div> */}
                        <h1 className="highlight-price">{twentyFourPack.pricePerSession}</h1>
                        <p className="highlight-subtitle">per session</p>
                        <p className="highlight-package">{twentyFourPack.name}</p>
                    </div>

                    {/* Package Pricing Table */}
                    <div className="package-pricing-table">
                        <table className="pricing-table">
                        <thead>
                            <tr>
                            <th>Package</th>
                            <th>Price per Session</th>
                            <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sessionType.packages.map((pkg, index) => {
                            // Calculate total price on the fly
                            const totalPrice = calculateTotal(pkg.sessions, pkg.pricePerSession);
                            return (
                                <tr 
                                key={index}
                                className={pkg.name.includes('24') ? 'highlight-row' : ''}
                                >
                                <td>{pkg.name}</td>
                                <td>{pkg.pricePerSession}</td>
                                <td>{totalPrice}</td>
                                </tr>
                            );
                            })}
                        </tbody>
                        </table>
                    </div>

                    {/* Description Section - Using 'more' field */}
                    <div className="description-section">
                        <h6 className="details-title">Details</h6>
                        <p className="session-details">{sessionType.more}</p>
                    </div>

                    {/* Single Contact Button */}
                    <div className="common-button-design text-center mt-4">
                        <button 
                        onClick={() => handleContactPage(sessionType.type, null, 'pricing2')}
                        >
                        Get Started - {sessionType.title}
                        </button>
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
        ) : (
          /* Custom Program Coaching View */
          <div className="row mt-4 mb-4">
            {coachingPackages.map((coachingPlan) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4"
                key={coachingPlan.id}
              >
                <div className="choose-plan-card coaching-card">
                  <div className="coaching-header">
                    <h3>{coachingPlan.title}</h3>
                    <h6>{coachingPlan.subtitle || "Custom Program Coaching"}</h6>
                  </div>
                  
                  <h1>${coachingPlan.price}</h1>
                  <h6>per {coachingPlan.category}</h6>
                  
                  <div className="features-section">
                    <h6 style={{ margin: "2.5rem auto 0rem auto", padding: "0rem" }}>
                      Program Includes
                    </h6>
                    <span style={{ margin: "0rem auto 1rem auto", padding: "0rem", display: 'block', fontSize: '0.8rem' }}>
                      ------------------------
                    </span>
                    <div className="feature-list">
                      <ul>
                        {coachingPlan.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Single Contact Button */}
                  <div className="common-button-design text-center mt-4">
                    <button 
                      onClick={() => handleContactPage('coaching', coachingPlan.title, 'pricing2')}
                    >
                      Start {coachingPlan.title}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Packages;