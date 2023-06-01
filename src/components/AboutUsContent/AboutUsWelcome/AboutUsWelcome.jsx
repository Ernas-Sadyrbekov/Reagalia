import React from "react";
import "./AboutUsWelcome.css";
const AboutUsWelcome = () => {
  return (
    <section className="main-section">
      <div className="welcome_section section__container">
        <div className="welcome_left_section ">
          <span>Who Are We</span>
          <h1 className="welcome_title">Welcome To Regalia</h1>
          <hr />
          <p className="welcome_firs_p">
            Regalia is a one stop store solution for all your basic necessities.
            The best part about us is that we deliver our products worldwide.
            Our e-commerce store was launched in the year 2015, since then we
            have been serving our nationality on a wide platform.
          </p>
          <p className="welcome_second_p">
            We had begun with a small idea of serving our own locality, later on
            getting huge popularity and love from people, we began
            international.
          </p>
          <div className="our_vision_mission_section">
            <div className="our_vision">
              <h1>Our Vision</h1>
              <ul>
                <li>To provide excellent products</li>
                <li>100% original and guarantee products</li>
                <li>Serve world wide</li>
                <li>International platform</li>
              </ul>
            </div>
            <div className="our_mission">
              <h1>Our Mission</h1>
              <ul>
                <li>To provide excellent products</li>
                <li>100% original and guarantee products</li>
                <li>Serve world wide</li>
                <li>International platform</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="welcome_right_section">
          <img src="https://regaliae.jhkinfotech.in/wearable-gadgets/images/about-whoarewe-img.png" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsWelcome;
