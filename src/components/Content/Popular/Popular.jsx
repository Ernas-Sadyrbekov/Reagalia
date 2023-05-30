import React from "react";
import "./Popular.css";
import ProductCard from "../ProductCard/ProductCard";
import { NavLink } from "react-router-dom";
const Popular = () => {
  return (
    <section className="main-section main_section_popular">
      <div className="section_popular section__container">
        <h2>Popular Products</h2>

        <div className="popular_cards">
          <ProductCard max={7} />
        </div>
        <div className="slider__main_btn">
          <NavLink to="/all_products">
            <span>Все Продукты</span>
            <p></p>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Popular;
