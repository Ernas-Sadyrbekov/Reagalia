import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./AllProducts.css";
import {
    useTranslation
} from "react-i18next";
const AllProducts = ({ toggleShowModal }) => {
    const {t} = useTranslation();

  return (
    <section className="main-section ">
      <div className="section_all_prod section__container">
        <h2 className="all_prod_title">{t("all_products_assortment")}</h2>
        <div className="slider__main_btn contact_all">
          <button className="blue-button" onClick={toggleShowModal}>
            <a href="#" tabIndex="0">
              <span>{t("header_contact_us")}</span>
              <p></p>
            </a>
          </button>
        </div>
      </div>
      <ProductCard max={1000} toggleShowModal={toggleShowModal} />
    </section>
  );
};

export default AllProducts;
