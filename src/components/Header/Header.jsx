import React from "react";
import "./Header.css";
const Header = () => {
  function runOnScroll() {
    const header = document.getElementsByTagName("header")[0];
    const logo1 = document.getElementsByClassName("logo_first_childe")[0];
    const logo2 = document.getElementsByClassName("logo_last_childe")[0];
    logo1.style.fontSize = "25px";
    logo2.style.fontSize = "10.5px";
    header.style.height = "62px";
  }
  window.addEventListener("scroll", runOnScroll);

  return (
    <header>
      <div className="header_container">
        <div className="logo">
          <span className="logo_first_childe">Regalia</span>
          <span className="logo_last_childe">Ecommerse Store</span>
        </div>
        <ul className="navigation">
          <li>
            {" "}
            <a href="#"> Главная</a>{" "}
          </li>
          <li>Контакты</li>
          <li>Наши товары</li>
          <li>Cвязаться</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
