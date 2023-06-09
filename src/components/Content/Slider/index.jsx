import React, { useEffect, useState } from "react";
import "./Slider.css";
import { useTranslation } from "react-i18next";

const Slider = ({ toggleShowModal }) => {
  let [slideIndex, setSlideIndex] = useState("0");

  useEffect(() => {
    showSlides();
    const sliderInterval = setInterval(showSlides, 3000);

    return () => clearInterval(sliderInterval);
  }, []);

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slider__image");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
      slides[i].style.visibility = "hidden";
      slides[i].style.transform = "translate(30px, 0px)";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = "1";
    slides[slideIndex - 1].style.visibility = "visible";
    slides[slideIndex - 1].style.transform = "translate(0px, 0px)";
    // setTimeout(showSlides, 4000); // Change image every 2 seconds
  }
  const { t } = useTranslation();
  return (
    <section className="slider main-section">
      <div className="section__container">
        <div className="slider__left-text">
          <span>ALTAIR</span>
        </div>
        <div className="slider__main">
          <p className="slider__main_discount">{t("slider_stock")}</p>
          <h1 className="slider__main_h1">
            {t("slider_electronic")}
            <br />
            {t("slider_technic")}
          </h1>
          <p className="slider__main_description">{t("slider_devices")} </p>
          <p className="slider__main_price">{t("slider_sending")} </p>
          <div className="slider__main_btn">
            <button
              className="blue-button text_slider"
              onClick={toggleShowModal}
            >
              <a href="#" tabIndex="0">
                <span>{t("header_contact_us")} </span>
                <p></p>
              </a>
            </button>
          </div>
        </div>
        <div className="slider__images">
          <div className="slider__image slider__image1"></div>
          <div className="slider__image slider__image2"></div>
          <div className="slider__image slider__image3"></div>
          <div className="slider__image slider__image4"></div>
        </div>
      </div>
      <div className="slider__social">
        <a href="#">Whatsapp</a>
        <a href="#">Facebook</a>
        <a href="#">Telegram</a>
      </div>
    </section>
  );
};

export default Slider;
