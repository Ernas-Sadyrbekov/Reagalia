import React from "react";
import './Collection.css';

const Collection = () => {
  return (
      <section className="main-section collection collection-green">
        <div className="section__container">
            <span>
              UP TO 40% <br />
              DISCOUNT
            </span>
            <h2>
                AIRDOPES<br/>
                COLLECTION
            </h2>
            <div className="slider__main_btn">
                <a href="#" tabIndex="0">
                    <span>Связаться</span>
                    <p></p>
                </a>
            </div>
        </div>
        <div>
          <img src="./img/airdopes-collection-img.png" alt=""/>
            <img src="/homepage-v7-slide1-right-img.png" alt="Logo"/>
        </div>
      </section>
  );
};

export default Collection;
