import React from "react";
import "./AboutUsStoreSecond.css";
import aboutUsStoreImg from "./img/happycustomer-and-ourstore-img2.jpg";

const AboutUsStoreSecond = ({toggleShowModal}) => {
  return (
    <section className="main-section">
      <div className="section__container section_store_second">
        <div className="about_us_left_second">
          <h1>Our Store Expect Restless Amazing Support</h1>
          <hr />
          <p className="about_us_left_p1">
            E-Commerce stores do not offer direct contact to the customers. Here
            there is no personal interaction with the customers.
          </p>
          <p className="about_us_left_p2">
            Unlike malls and shops, there are no salesmen to recommend the
            customers the right product based on their personal preferences. You
            can experience class A shopping experience with us.
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
          <img src={aboutUsStoreImg} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsStoreSecond;
