import React from "react";
import "./Popular.css";
import ProductCard from "../ProductCard/ProductCard";
import { NavLink } from "react-router-dom";
const Popular = ({toggleShowModal}) => {



  return (
    <section className="main-section main_section_popular">
      <div className="section_popular section__container">
        <h2>Ассортимент</h2>


        <div className="popular_cards">
          <ProductCard max={7} toggleShowModal={toggleShowModal} />
        </div>
        <div className="slider__main_btn" onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}>
          <NavLink to="/all_products">
            <span>Дальше</span>
            <p></p>
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default Popular;
