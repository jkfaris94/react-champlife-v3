import React from "react";
import "./MultiComponents.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import victory from "../../Images/victory.jpg";
import headshot from "../../Images/HeadShot.png";
import family1 from "../../Images/family_maternity_shoot-scaled.png"
import useFunction from "../../Hooks/useFunction";

const JohnnyDetails = () => {
  const { handleAboutPage } = useFunction(); //link to about me 

  return (
    <>
      <div className="section">
        <div className="row row-edit">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="common-header-right-div-title">
              <h4>In Depth</h4>
              <h2>WITH JOHNNY</h2>
            </div>

            <div className="common-header-right-div-text">
              <h3>My Journey</h3>
              <p>
                Hi, I’m Johnny Faris — a dedicated husband, proud father of two, 
                and a personal trainer with a lifelong passion for fitness, martial 
                arts, and helping people unlock their potential. My roots are in professional 
                MMA, where I competed as a 145 lb California Amateur State Champion before 
                stepping into the professional ranks. Competing taught me discipline, resilience, 
                and how to perform under pressure. After the birth of my first child, I chose to 
                step away from fighting to focus fully on my clients and building a better life for my family.
              </p>

              <h3>From the Cage to Coaching</h3>
              <p>
                My career has taken me across the globe, with training experiences in Thailand and Brazil that 
                shaped my philosophy as a coach. Since 2015, I’ve been helping clients transform their lives 
                through structured training, nutrition, and recovery strategies. I began my professional coaching 
                journey at Equinox, where I spent five years training clients of all backgrounds — from busy professionals 
                to high-level athletes. Along the way, I’ve continued to earn respected certifications that keep my methods 
                current and evidence-based.
              </p>

              <h3>Areas of Expertise</h3>

              <p>
                I specialize in weight management, functional strength, and sports performance. Early in my career I 
                became one of the first trainers certified by Speed of Sport, a leading performance system used by 
                elite athletes worldwide. Their methodology focuses on speed, agility, and explosive power — training 
                the body to move more efficiently in real-world and competitive settings. This foundation allows me to 
                design programs that not only help everyday clients look and feel better but also prepare athletes to 
                compete at their highest level.
              </p>

              <p>
                My background in MMA also gave me firsthand experience with the discipline of weight cutting and body 
                transformation, and I now apply that knowledge to help clients achieve their goals in a safe and sustainable 
                way. Corrective exercise and movement quality are key parts of my coaching, ensuring that training delivers 
                results while protecting against injury.
              </p>

              <h3>Training Philosophy</h3>
              <p>
                At the core of my philosophy is the belief that fitness should enhance your life, not complicate it. 
                Training with me is more than workouts — it’s about building habits that last, improving resilience, 
                and creating a lifestyle where you feel stronger, more capable, and more confident every day. Whether 
                your goal is to lose weight, build muscle, perform like an athlete, or simply feel better in your own 
                skin, I’ll design a program that balances what you want with what your body needs.
              </p>

            </div>

            <div className="common-button-design">
              <button onClick={handleAboutPage}>Read More</button>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="strong-team-slider-div">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                emulateTouch
                dynamicHeight={false}
                swipeScrollTolerance={50}
                centerSlidePercentage={30}
                showIndicators
              >
                <div className="strong-team-slider-image-div">
                  <img
                    src={victory}
                    alt="victory_image"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
                <div className="strong-team-slider-image-div">
                  <img
                    src={headshot}
                    alt="headshot_image"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
                <div className="strong-team-slider-image-div">
                  <img
                    src={family1}
                    alt="family1_image"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JohnnyDetails;


//SEO:
// Johnny Faris is a dedicated husband, father of two, and personal trainer with a background in professional MMA. 
// One of the first certified Speed of Sport affiliates, he specializes in sports performance, functional strength, 
// and weight management — helping clients train, recover, and live like champions.