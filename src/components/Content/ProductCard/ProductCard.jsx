import React from "react";
import "./ProductCard.css";
import products1img from "./img/homepage-v7-popular-products-1.png"
import products2img from "./img/homepage-v7-popular-products-2.png"
import products3img from "./img/homepage-v7-popular-products-3.png"
import products4img from "./img/homepage-v7-popular-products-4.png"
import products5img from "./img/homepage-v7-popular-products-5.png"
import products6img from "./img/homepage-v7-popular-products-6.png"
import products7img from "./img/homepage-v7-popular-products-7.png"
import products8img from "./img/homepage-v7-popular-products-8.png"
import {
  useTranslation
} from "react-i18next";

const ProductCard = ({ max, toggleShowModal }) => {
  const {t} = useTranslation();

  const card = [
    {
      img: products1img,
      title: "boAt Airdopes 402 - Wireless Earbuds",
      id: 1,
    },
    {
      img: products2img,
      title: "Apple Watch Nike Series 6 (GPS) 44mm",
      id: 2,
    },
    {
      img: products3img,
      title: "Mi Smart Band 5 Strap Orange",
      id: 3,
    },
    {
      img: products4img,
      title: "Samsung Gear VR with Controller",
      id: 4,
    },
    {
      img: products5img,
      title: "Apple Watch Series 3",
      id: 5,
    },
    {
      img: products6img,
      title: "Mi Smart Band 3i",
      id: 6,
    },
    {
      img: products7img,
      title: "Oculus Quest 2 Advanced All-In-One VR Headset",
      id: 7,
    },
    {
      img: products8img,
      title: "boAt Airdopes 431 - Truly Wireless Earbuds",
      id: 8,
    },
    {
      img: products1img,
      title: "boAt Airdopes 402 - Wireless Earbuds2",
      id: 9,
    },
    {
      img: products2img,
      title: "Apple Watch Nike Series 6 (GPS) 44mm2",
      id: 10,
    },
    {
      img: products3img,
      title: "Mi Smart Band 5 Strap Orange2",
      id: 11,
    },
    {
      img: products4img,
      title: "Samsung Gear VR with Controller2",
      id: 12,
    },
    {
      img: products5img,
      title: "Apple Watch Series 32",
      id: 13,
    },
    {
      img: products6img,
      title: "Mi Smart Band 3i2",
      id: 14,
    },
    {
      img: products7img,
      title: "Oculus Quest 2 Advanced All-In-One VR Headset2",
      id: 15,
    },
    {
      img: products8img,
      title: "boAt Airdopes 431 - Truly Wireless Earbuds2",
      id: 16,
    },
  ];
  return (
    <div className="popular_card_container">
      {card.map((item, index) => {
        if (index <= max) {
          return (
            <div className="popular_card" key={item.title}>
              <div className="popular_card_img">
                <div className="slider__main_btn">
                  <button className="blue-button" onClick={toggleShowModal}>
                    <a href="#" tabIndex="0">
                      <span>{t("header_contact_us")}</span>
                      <p></p>
                    </a>
                  </button>
                </div>
                <source />
                <img src={item.img} className="img_static" />
                <img src={item.img} className="hover_img" />
              </div>

              <span>{item.title}</span>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProductCard;
