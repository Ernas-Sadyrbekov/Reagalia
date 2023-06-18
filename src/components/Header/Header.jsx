import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IconButton, MenuItem, Tooltip } from "@mui/material";
import i18next from "i18next";
import IconsSocial from "../Content/IconsSocial";
import { useTranslation } from "react-i18next";
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
  };
  // const languages = [
  //   {
  //     code: "en",
  //     country_code: "gb",
  //     name: "English",
  //   },
  //   {
  //     code: "ru",
  //     country_code: "ru",
  //     name: "Русский",
  //   },
  // ];
  // const { t } = useTranslation();

  // const currentLanguageCode = "ru" || "en";
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <header>
      <section className="main-section header__section">
        <div className="section__container">
          <div className="header_container">
            <Link to="/" className="logo">
              <span className="logo_first_childe">ALTAIR</span>
              <span className="logo_last_childe">ELECTRONIC FZE</span>
            </Link>
            {/* {languages.map(({ code, name, country_code }) => (
              <Tooltip title={name} arrow placement="left">
                <MenuItem
                  key={code}
                  style={{
                    backgroundColor:
                      currentLanguageCode === code ? "#D8D8D8" : "#F8F8F8",
                    border:
                      currentLanguageCode === code
                        ? "1px solid #989898"
                        : "#F8F8F8",
                  }}
                >
                  <IconButton
                    // className={classNames("dropdown-item")}
                    onClick={() => {
                      i18next.changeLanguage(code);
                    }}
                  >
                    <div
                      className={`flag-icon flag-icon-${country_code}`}
                      style={{
                        opacity: currentLanguageCode === code ? 1 : 0.3,
                        width: "3rem",
                        height: "2rem",
                      }}
                    ></div>
                  </IconButton>
                </MenuItem>
              </Tooltip>
            ))} */}
            <button
              style={{ color: "white" }}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            <button
              style={{ color: "white" }}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
            <ul className="navigation">
              <li className="fw400" onClick={scrollToTop}>
                {" "}
                <Link to="/">{t("header_home")}</Link>{" "}
              </li>
              <li onClick={scrollToTop}>
                {" "}
                <Link to="/all_products">{t("header_our_products")}</Link>
              </li>
              <li className="fw400" onClick={scrollToTop}>
                {" "}
                <Link to="/about_us">{t("header_about_us")}</Link>
              </li>
              <li>
                <a href="#scroll-to-contacts">{t("header_contacts")} </a>
              </li>
              <li className="fw400" onClick={toggleShowModal}>
                {t("heder_contact_us")}
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
                        <li
                          onClick={(e) => {
                            scrollToTop();
                            closeMenu();
                          }}
                        >
                          <Link to="/"> Главная</Link>
                        </li>
                        <li
                          onClick={(e) => {
                            scrollToTop();
                            closeMenu();
                          }}
                        >
                          <Link to="/about_us"> О нас</Link>
                        </li>
                        <li
                          onClick={(e) => {
                            scrollToTop();
                            closeMenu();
                          }}
                        >
                          <a href="#scroll-to-contacts">Контакты</a>
                        </li>
                        <li
                          onClick={(e) => {
                            scrollToTop();
                            closeMenu();
                          }}
                        >
                          <Link to="/all_products">Наши товары</Link>
                        </li>
                        <li
                          onClick={(e) => {
                            toggleShowModal(e);
                            closeMenu();
                          }}
                        >
                          Cвязаться
                        </li>
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
