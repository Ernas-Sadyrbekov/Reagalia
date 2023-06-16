import React from "react";
import "./AboutUsStoreFirst.css";
import aboutImg from "./img/happycustomer-and-ourstore-img1.jpg"

const AboutUsStoreFirst = ({toggleShowModal}) => {
  return (
    <section className="main-section">
      <div className="section__container section_store_first">
        <div className="about_us_left">
          <h1>Happy Customer Provide Fashionable and Qualifed Products</h1>
          <hr />
          <p className="about_us_left_p1">
            A totally new paradigm is being followed after the big corona virus
            pandemic! Pandemic has changed the way we think and pursue things
            around us! The working mechanism of each industry has witnessed
            hefty changes post pandemic.
          </p>
          <p className="about_us_left_p2">
            With advent of e-commerce, shopping experience has become very easy
            going and smooth. Even there are several payment options available
            on e-commerce stores for customers to make easy payments. One needs
            to keep their e-commerce stores up to date for attracting and
            satisfying customer needs.
          </p>
          <div className="slider__main_btn">
            <button className="blue-button" onClick={toggleShowModal} >
              <a href="#" tabIndex="0">
                <span>Связаться</span>
                <p></p>
              </a>
            </button>
          </div>
        </div>
        <div className="about_us_right">
          <div className="about_us_right_img">
            <img src={aboutImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsStoreFirst;
