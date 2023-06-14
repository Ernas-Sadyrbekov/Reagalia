import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import iphone from './img/iPhone-14-PNG-Transparent.png';
import macbook from './img/MBP-M2_HERO_-F-01.png';
import samsung from './img/samsung.png';
import xiaomi from './img/xiaomi-mi11.png';

import "./Carousel.css";

const Carousel = () => {
  const card = [
    {
      img: iphone,
      title: "IPhone",
      id: 1,
    },
    {
      img: macbook,
      title: "MacBook",
      id: 2,
    },
    {
      img: samsung,
      title: "Samsung",
      id: 3,
    },
    {
      img: xiaomi,
      title: "Xiaomi mi ",
      id: 4,
    },
  ];

  return (
    <section className="carousel_section main-section">
      <div className="section__container">
        <div className="left_section">
          <h2>ALTAIR</h2>

          <hr />

          <p>
            Мы имеем отличную репутацию на протяжении более 20 лет в продажах электронной и бытовой техники от мировых брендов. Для получения актуального прайс-листа, позвоните по номеру телефона либо можете написать в месседжеры whatsapp, telegram.
          </p>
        </div>
        <div className="right_section">
          <div className="carousel_content">
            {card.map((item, index) => (
              <div className="card" key={item.title}>
                <div className="card_img">
                  <img src={item.img} className="img_static" />
                  <img src={item.img} className="hover_img" />
                </div>

                <span>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    —{"     "}
                  </span>
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
