import React from "react";
import "./Advantages.css";
import Png1 from "./advantages1.png";
import Png2 from "./advantages2.png";
import Png3 from "./advantages3.png";

const Advantages = () => {
  const advantages = [
    {
      title: "Free Shipping & Return",
      p: "Instant access to perfect support",
      img: Png1,
    },
    {
      title: "Customer Support 24/7",
      p: "Free shipping on orders over $99",
      img: Png2,
    },
    {
      title: "100% Secure Payment",
      p: "We ensure secure payment!",
      img: Png3,
    },
  ];
  return (
    <section className="main-section">
      <div className="advantages_container section__container">
        {advantages.map((item) => (
          <div className="advantages_content">
            <img src={item.img} />
            <div>
              <h6>{item.title}</h6>
              <span>{item.p}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
