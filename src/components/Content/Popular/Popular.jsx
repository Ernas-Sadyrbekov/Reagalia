import React from "react";
import "./Popular.css";
import ProductCard from "../ProductCard/ProductCard";
import { NavLink } from "react-router-dom";
import {
  useTranslation
} from "react-i18next";

const Popular = ({toggleShowModal}) => {
  const {t} = useTranslation();

  return (
    <section className="main-section main_section_popular">
      <div className="section_popular section__container">
        <h2>{t("popular_title")}</h2>


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
            <span>{t("popular_title")}</span>
            <p></p>
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default Popular;
