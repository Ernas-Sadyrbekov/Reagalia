import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./AllProducts.css";
const AllProducts = ({ toggleShowModal }) => {
  return (
    <section className="main-section ">
      <div className="section_popular">
        <h2 className="all_prod_title">Ассортимент</h2>
        <div className="slider__main_btn contact_all">
          <button className="blue-button" onClick={toggleShowModal}>
            <a href="#" tabIndex="0">
              <span>Связаться</span>
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
