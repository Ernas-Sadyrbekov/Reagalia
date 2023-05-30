import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  function runOnScroll() {
    const header = document.getElementsByTagName("header")[0];
    const logo1 = document.getElementsByClassName("logo_first_childe")[0];
    const logo2 = document.getElementsByClassName("logo_last_childe")[0];
    logo1.style.fontSize = "25px";
    logo2.style.fontSize = "10.5px";
    header.style.height = "70px";
  }
  window.addEventListener("scroll", runOnScroll);

  return (
    <header>
      <div className="header_container ">
        <div className="logo">
          <span className="logo_first_childe">Regalia</span>
          <span className="logo_last_childe">Ecommerse Store</span>
        </div>
        <ul className="navigation">
          <li>
            {" "}
            <Link to="/"> Главная</Link>{" "}
          </li>
          <li>Контакты</li>
          <li>
            {" "}
            <Link to="/all_products">Наши товары</Link>
          </li>
          <li>Cвязаться</li>
        </ul>

        <div class="menu-wrap">
          <input type="checkbox" class="toggler" />
          <div class="hamburger">
            <div></div>
          </div>
          <div class="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <Link to="/"> Главная</Link>
                  </li>
                  <li>Контакты</li>
                  <li>
                    <Link to="/all_products">Наши товары</Link>
                  </li>
                  <li>Cвязаться</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
