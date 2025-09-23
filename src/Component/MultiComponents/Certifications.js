import React from "react";
import "./MultiComponents.css";
import Slider from "react-slick";
import useFunction from "../../Hooks/useFunction";

const Certifications = () => {
  const { certificationsData, loading, error } = useFunction(); // Changed from certificationData to certificationsData

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Show loading state
  if (loading) {
    return (
      <div className="section">
        <div className="common-header-vartical-div-title">
          <div className="middle-vertical-line-div">
            <div className="middle-vertical-line"></div>
          </div>
          <h4>Expertise</h4>
          <h2>CERTIFICATIONS</h2>
        </div>

        <div className="certification-card">
          <div className="no-data-message text-center">
            <p>Loading certifications...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="section">
        <div className="common-header-vartical-div-title">
          <div className="middle-vertical-line-div">
            <div className="middle-vertical-line"></div>
          </div>
          <h4>Expertise</h4>
          <h2>OUR CERTIFICATIONS</h2>
        </div>

        <div className="certification-card">
          <div className="no-data-message text-center">
            <p className="error-message">Error loading certifications. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  // Show no data state
  if (!certificationsData || certificationsData.length === 0) {
    return (
      <div className="section">
        <div className="common-header-vartical-div-title">
          <div className="middle-vertical-line-div">
            <div className="middle-vertical-line"></div>
          </div>
          <h4>Expertise</h4>
          <h2>OUR CERTIFICATIONS</h2>
        </div>

        <div className="certification-card">
          <div className="no-data-message text-center">
            <p>No certifications available at this time.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="common-header-vartical-div-title">
        <div className="middle-vertical-line-div">
          <div className="middle-vertical-line"></div>
        </div>
        <h4>Expertise</h4>
        <h2>OUR CERTIFICATIONS</h2>
      </div>

      <div className="certification-card">
        <Slider {...settings}>
          {certificationsData.map((item) => (
            <div className="certification-card-item text-center" key={item.id}>
              <div className="certification-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title || "certification"} 
                  className="certification-image"
                  onError={(e) => {
                    e.target.src = "/assets/images/placeholder-cert.png"; // fallback image
                  }}
                />
              </div>
              <div className="certification-info">
                <h5 className="certification-title">{item.title}</h5>
                <p className="certification-issuer">{item.issuer}</p>
                <p className="certification-date">{item.date}</p>
                {item.description && item.description.trim() !== "" && (
                  <p className="certification-description">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Certifications;