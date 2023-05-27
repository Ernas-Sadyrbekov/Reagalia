import React, {useState} from "react";
import './Slider.css';

const Index = () => {
  useState()
  return (
    <section className="slider">
      <div className="container">
        <div className="slider__left-text">
          <span>SmartDevice</span>
        </div>
        <div className="slider__main">
          <p className="slider__main_discount">Скидка 25% Дискаунт</p>
          <h1 className="slider__main_h1">Смарт<br/>Девайсы</h1>
          <p className="slider__main_description">Уникальная коллекция 2023 года с большой скидкой.</p>
          <p className="slider__main_price">от $399.00</p>
          <div className="slider__main_btn">
            <a href="#" tabIndex="0">
              <span>Связаться</span>
              <p></p>
            </a>
          </div>
        </div>
        <div className="slider__images">
          <div className="slider__images_img"></div>
        </div>
      </div>
      <div className='slider__social'>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
      </div>
    </section>
  )
}

export default Index;
