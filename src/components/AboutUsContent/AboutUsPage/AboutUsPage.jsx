import React from "react";
import "./AboutUsPage.css";
import { Link } from "react-router-dom";
const AboutUsPage = () => {
  return (
    <section className="main_page_section">
      <div className="page_section ">
        <div>
          <h1>О Нас</h1>
          <div className="bread_crambs">
            <Link to="/">
              <span> Главная</span>
            </Link>
            <span> /</span>
            <span> О Нас</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
