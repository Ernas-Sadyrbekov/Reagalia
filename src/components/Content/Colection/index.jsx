import React from "react";
import './Collection.css';
import airdopes from './img/airdopes-collection-img.png';
import latestSmartwatch from './img/latest-smartwatch-collection-img.png';
import smartBand from './img/smart-band-collection-img.png';
import vrGlasses from './img/best-collection-vr-glasses-img.png';

const Collection = () => {
  return (
      <>
          <section className="main-section collection collection-green">
              <div className="section__container">
                  <div className="collection__text">
                      <div>
                          <p>
                              ДО 40% <br />
                              СКИДКА
                          </p>
                          <h2>
                              AIRDOPES<br/>
                              COLLECTION
                          </h2>
                          <div className="slider__main_btn">
                              <a href="#" tabIndex="0">
                                  <span>заказать</span>
                                  <p></p>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="collection__img">
                      <img src={airdopes} alt="airdopes"/>
                  </div>
              </div>
          </section>

          <section className="main-section collection collection-black">
              <div className="section__container">
                  <div className="collection__text">
                      <div>
                          <p>
                              ДО 33% <br />
                              СКИДКА
                          </p>
                          <h2>
                              СМАРТЧАСЫ<br/>
                              COLLECTION
                          </h2>
                          <div className="slider__main_btn">
                              <a href="#" tabIndex="0">
                                  <span>заказать</span>
                                  <p></p>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="collection__img">
                      <img src={latestSmartwatch} alt="latest Smart watch"/>
                  </div>
              </div>
          </section>

          <section className="main-section collection collection-green">
              <div className="section__container">
                  <div className="collection__text">
                      <div>
                          <p>
                              ДО 41% <br />
                              СКИДКА
                          </p>
                          <h2>
                              SMARTBAND<br/>
                              COLLECTION
                          </h2>
                          <div className="slider__main_btn">
                              <a href="#" tabIndex="0">
                                  <span>заказать</span>
                                  <p></p>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="collection__img">
                      <img src={smartBand} alt="airdopes"/>
                  </div>
              </div>
          </section>

          <section className="main-section collection collection-black">
              <div className="section__container">
                  <div className="collection__text">
                      <div>
                          <p>
                              ДО 65% <br />
                              СКИДКА
                          </p>
                          <h2>
                              VR-ОЧКИ<br/>
                              COLLECTION
                          </h2>
                          <div className="slider__main_btn">
                              <a href="#" tabIndex="0">
                                  <span>заказать</span>
                                  <p></p>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="collection__img">
                      <img src={vrGlasses} alt="vr Glasses"/>
                  </div>
              </div>
          </section>
      </>

  );
};

export default Collection;
