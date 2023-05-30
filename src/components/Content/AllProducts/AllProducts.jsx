import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./AllProducts.css";
const AllProducts = () => {
  return (
    <section className="main-section ">
      <div className="section_popular">
        <h2 className="all_prod_title">Все Продукты</h2>
        <ProductCard max={1000} />
      </div>
    </section>
  );
};

export default AllProducts;
