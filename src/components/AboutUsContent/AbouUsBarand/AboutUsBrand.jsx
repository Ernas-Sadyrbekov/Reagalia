import React from "react";
import "./AboutUsBrand.css";
const AboutUsBrand = () => {
  const logo = [
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/our-clients-popular-brands-logo6.png",
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/our-clients-popular-brands-logo6.png",
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/our-clients-popular-brands-logo6.png",
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/our-clients-popular-brands-logo6.png",
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/our-clients-popular-brands-logo6.png",
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/our-clients-popular-brands-logo6.png",
    },
  ];
  return (
    <section className="main_brand_section main-section">
      <div className="brand_section section__container">
        <h3>Our Clients Popular Brands</h3>
        <hr />
        <div className="brand_section_logo">
          {logo.map((item) => (
            <div className="logo_brand">
              <img src={item.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsBrand;
