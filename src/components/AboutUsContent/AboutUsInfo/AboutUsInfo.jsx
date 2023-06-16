import React from "react";
import img1 from "./Screenshot 2023-06-01 172737.png";
import img2 from "./Screenshot 2023-06-01 172848.png";
import img3 from "./Screenshot 2023-06-01 172909.png";
import img4 from "./Screenshot 2023-06-01 172945.png";
import "./AboutUsInfo.css";
const AboutUsInfo = () => {
  const card = [
    {
      img: img1,
      num: "789",
      title: "SATISFIED CLIENTS",
    },
    {
      img: img2,
      num: "04",
      title: "OFFICES",
    },
    {
      img: img3,
      num: "540",
      title: "PRODUCTS",
    },
    {
      img: img4,
      num: "56",
      title: "STAFF",
    },
  ];
  return (
    <section className="main_info_section main-section">
      <div className="info_section section__container">
        {card.map((item) => (
          <div className="info_card" key={item.title}>
            <img src={item.img} />
            <span>{item.num}</span>
            <h5>{item.title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsInfo;
