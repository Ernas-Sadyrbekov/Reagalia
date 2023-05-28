import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Carousel.css";

const Carousel = () => {
  const card = [
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-categories-1.png",
      title: "Redmi Watch GPS",
      id: 1,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-categories-2.png",
      title: "Redmi Watch GPS",
      id: 2,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-categories-3.png",
      title: "Redmi Watch GPS",
      id: 3,
    },
    {
      img: "https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-categories-4.png",
      title: "Redmi Watch GPS",
      id: 4,
    },
  ];
  return (
    <section className="carousel_section">
      <div className="left_section">
        <h2>Categories</h2>

        <hr />

        <p>
          we have wide range of watch collection to present to our customers. We
          have gigantic range of smart watches, smart phones, bands and many
          other watches.
        </p>

        <button className="prev_btn">
          <img src="https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-categories-wrap-prev.png" />
        </button>
        <button className="next_btn">
          <img src="https://regaliae.jhkinfotech.in/wearable-gadgets/images/homepage-v7-categories-wrap-next.png" />
        </button>
      </div>
      <div className="right_section">
        <div className="carousel_content">
          {card.map((item) => (
            <div className="card">
              <div className="card_img">
                <img src={item.img} />
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
    </section>
  );
};

export default Carousel;
