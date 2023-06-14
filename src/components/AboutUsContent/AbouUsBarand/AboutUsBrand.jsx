import React from "react";
import "./AboutUsBrand.css";
import logoImg from "./img/our-clients-popular-brands-logo6.png";
const AboutUsBrand = () => {
  const logo = [
    {
      img: "http://localhost:3000/static/media/samsung.f260eca0d3ff73f1f1da.png",
      brand: "qwe1"
    },
    {
      img: "http://localhost:3000/static/media/our-clients-popular-brands-logo6.png",
      brand: "qwe2"
    },
    {
      img: "http://localhost:3000/static/media/our-clients-popular-brands-logo6.png",
      brand: "qwe3"
    },
    {
      img: "http://localhost:3000/static/media/our-clients-popular-brands-logo6.png",
      brand: "qwe4"
    },
    {
      img: "http://localhost:3000/static/media/our-clients-popular-brands-logo6.png",
      brand: "qwe5"
    },
    {
      img: "http://localhost:3000/static/media/our-clients-popular-brands-logo6.png",
      brand: "qwe6"
    },
  ];
  return (
    <section className="main_brand_section main-section">
      <div className="brand_section section__container">
        <h3>Our Clients Popular Brands</h3>
        <hr />
        <div className="brand_section_logo">
          {logo.map((item) => (
            <div className="logo_brand" key={item.brand}>
              <img src={logoImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsBrand;
