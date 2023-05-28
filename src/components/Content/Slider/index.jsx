import React, {
  useEffect,
  useState
} from "react";
import './Slider.css';

const Index = () => {
  let [slideIndex, setSlideIndex] = useState('0');

  useEffect(() => {
    showSlides();
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
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.opacity = "1";
    slides[slideIndex-1].style.visibility = "visible";
    slides[slideIndex-1].style.transform = "translate(0px, 0px)";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }

  return (
    <section className="slider main-section">
      <div className="section__container">
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
          <div className="slider__image slider__image1"></div>
          <div className="slider__image slider__image2"></div>
          <div className="slider__image slider__image3"></div>
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
