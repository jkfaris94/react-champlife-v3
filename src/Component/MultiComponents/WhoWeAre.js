import React from "react";
import "./MultiComponents.css";
import $ from "jquery";
import useFunction from "../../Hooks/useFunction";

const WhoWeAre = () => {
  const { handleAboutPage } = useFunction();

  // Video Play jquery function
  $(document).ready(function () {
    $(".vid-wrap .thumbnail-img").click(function () {
      var id = $(this).parent().attr("id");
      var idVideo = $(this).attr("data-video");

      playVideo(id, idVideo);
    });

    $(".vid-wrap .btn-play").click(function () {
      var id = $(this).parent().attr("id");
      var idVideo = $(this).prev().attr("data-video");
      playVideo(id, idVideo);
    });

    $(".btn-close").click(function (e) {
      $(this).hide();
      $(this).parent().find("iframe").hide().attr("src", "");
      $(this).parent().find("img").show();
      e.preventDefault();
    });
  });

  function playVideo(id, idVideo) {
    var $videoContainer = $("#" + id);  // ← Fixed: different variable name
    $videoContainer.find("img").hide();
    $videoContainer.find("iframe").show().attr("src", idVideo);
    $videoContainer.find(".btn-close").show();
  }

  return (
    <>
      <div className="section">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="common-header-right-div-title">
              <h4>Overview TODO:</h4>
              <h2>OUR STORY TODO:</h2>
            </div>

            <div className="vid-wrap" id="vid-1">
              <img
                className="thumbnail-img"
                src="https://a.catand.us/fitfactory/wp-content/uploads/sites/17/elementor/thumbs/fit-couple-lifting-barbells-in-the-gym-ZACL9S6-pf2edecoyh1gqpqd8tfeypgrv157mcugpw8njtimiw.jpg"
                data-video="https://www.youtube.com/embed/6jrhrNcEYpA?si=4J9W5ZV2Ck3LB0hB"
                alt="images"
              />

              <iframe id="embed-vid-1" className="vid-first" title="vid-1"></iframe>
              <p className="btn-close">
                <i className="fa fa-times"></i>
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="common-header-right-div-title">
              <h4>About The Champion Lifestyle</h4>
              <h2>WHO WE ARE</h2>
            </div>

            <div className="common-header-right-div-text">
              <p>
                At Champion Lifestyle, we believe fitness is more than just workouts, it’s a lifestyle. 
                True transformation comes from aligning how you eat, train, and recover with your 
                long-term vision for yourself. It’s not about extremes or chasing trends, but about 
                creating balance and building a foundation you can actually enjoy and sustain.
              </p>

              <p>
                Success isn’t about quick fixes, it’s about building habits that align with your goals and desires. 
                Whether you’re looking to lose weight, build muscle, or improve overall health, the key is consistency 
                and sustainability. Champlife is here to guide you in making the right choices, turning small steps into 
                natural habits that lead to lasting results. Your journey starts now. Let’s make it happen.
              </p>
            </div>

            <div className="common-button-design">
              <button onClick={handleAboutPage}>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
