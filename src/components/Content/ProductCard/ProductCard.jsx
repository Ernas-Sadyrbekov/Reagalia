import React from "react";
import "./ProductCard.css";


const ProductCard = ({ max, item,toggleShowModal }) => {

  const card = [
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-1.png",
      title: "boAt Airdopes 402 - Wireless Earbuds",
      id: 1,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-2.png",
      title: "Apple Watch Nike Series 6 (GPS) 44mm",
      id: 2,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-3.png",
      title: "Mi Smart Band 5 Strap Orange",
      id: 3,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-4.png",
      title: "Samsung Gear VR with Controller",
      id: 4,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-5.png",
      title: "Apple Watch Series 3",
      id: 5,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-6.png",
      title: "Mi Smart Band 3i",
      id: 6,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-7.png",
      title: "Oculus Quest 2 Advanced All-In-One VR Headset",
      id: 7,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-8.png",
      title: "boAt Airdopes 431 - Truly Wireless Earbuds",
      id: 8,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-1.png",
      title: "boAt Airdopes 402 - Wireless Earbuds",
      id: 9,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-2.png",
      title: "Apple Watch Nike Series 6 (GPS) 44mm",
      id: 10,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-3.png",
      title: "Mi Smart Band 5 Strap Orange",
      id: 11,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-4.png",
      title: "Samsung Gear VR with Controller",
      id: 12,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-5.png",
      title: "Apple Watch Series 3",
      id: 13,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-6.png",
      title: "Mi Smart Band 3i",
      id: 14,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-7.png",
      title: "Oculus Quest 2 Advanced All-In-One VR Headset",
      id: 15,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-popular-products-8.png",
      title: "boAt Airdopes 431 - Truly Wireless Earbuds",
      id: 16,
    },
  ];
  return (
    <div className="popular_card_container">

      {card.map((item, index) => {
        if (index <= max) {
          return (
            <div className="popular_card">
              <div className="popular_card_img">
                <div className="slider__main_btn">
              <button className="blue-button" onClick={toggleShowModal}>
                  <a href="#" tabIndex="0">
                    <span>Связаться</span>
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
