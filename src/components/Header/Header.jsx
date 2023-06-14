import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import IconsSocial from "../Content/IconsSocial";
const Header = ({ toggleShowModal }) => {

  function runOnScroll() {
    const header = document.getElementsByTagName("header")[0];
    const logo1 = document.getElementsByClassName("logo_first_childe")[0];
    const logo2 = document.getElementsByClassName("logo_last_childe")[0];
    logo1.style.fontSize = "25px";
    logo2.style.fontSize = "10.5px";
    header.style.height = "60px";
  }
  window.addEventListener("scroll", runOnScroll);

  const togglerRef = React.useRef(null);
  function closeMenu() {
    togglerRef.current.click();
  }

  let scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <header>
      <section className="main-section header__section">
        <div className="section__container">
          <div className="header_container">
            <Link to="/" className="logo">
              <span className="logo_first_childe">ALTAIR</span>
              <span className="logo_last_childe">ELECTRONIC FZE</span>
            </Link>
            <ul className="navigation">
              <li
                className="fw400"
                onClick={scrollToTop}
              >
                {" "}
                <Link to="/">Главная</Link>{" "}
              </li>
              <li
                onClick={scrollToTop}
              >
                {" "}
                <Link to="/all_products">Наши товары</Link>
              </li>
              <li
                className="fw400"
                onClick={scrollToTop}
              >
                {" "}
                <Link to="/about_us">О нас</Link>
              </li>
              <li>
                <a href="#scroll-to-contacts">Контакты</a>
              </li>
              <li className="fw400" onClick={toggleShowModal}>
                Cвязаться
              </li>
            </ul>

            <div className="header__contacts">
              <p>+971554870201</p>
              <IconsSocial />
            </div>

            <div className="menu-wrap">
              <input ref={togglerRef} type="checkbox" className="toggler" />
              <div className="hamburger">
                <div></div>
              </div>
              <div className="menu">
                <div>
                  <div>
                    <div>
                      <ul>
                        <li onClick={(e) => {
                          scrollToTop();
                          closeMenu();
                        }}>
                          <Link to="/"> Главная</Link>
                        </li>
                        <li onClick={(e) => {
                          scrollToTop();
                          closeMenu();
                        }}>
                          <Link to="/about_us"> О нас</Link>
                        </li>
                        <li onClick={(e) => {
                          scrollToTop();
                          closeMenu();
                        }}>
                          <a href="#scroll-to-contacts">Контакты</a>
                        </li>
                        <li onClick={(e) => {
                          scrollToTop();
                          closeMenu();
                        }}>
                          <Link to="/all_products">Наши товары</Link>
                        </li>
                        <li onClick={(e) => {
                          toggleShowModal(e);
                          closeMenu();
                        }}>Cвязаться</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
