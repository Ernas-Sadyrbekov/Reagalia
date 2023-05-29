import React from "react";
import "./Popular.css";
import ProductCard from "../ProductCard/ProductCard";
const Popular = () => {
  return (
    <section className="main-section main_section_popular">
      <div className="section_popular section__container">
        <h2>Popular Products</h2>
      </div>
      <div className="popular_cards">
        <ProductCard />
      </div>
      <div className="slider__main_btn">
        <a href="#" tabIndex="0">
          <span>Все Продукты</span>
          <p></p>
        </a>
      </div>
    </section>
  );
};

export default Popular;
