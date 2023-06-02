import React from "react";
import './Collection.css';
import airdopes from './img/airdopes-collection-img.png';
import latestSmartwatch from './img/latest-smartwatch-collection-img.png';
import smartBand from './img/smart-band-collection-img.png';
import vrGlasses from './img/best-collection-vr-glasses-img.png';
import jbl from './img/jbl.webp';

const Collection = ({toggleShowModal}) => {
    return (
        <>
            <section className="main-section collection collection-green">
                <div className="section__container">
                    <div className="collection__text">
                        <div>
                            <p>
                                САМЫЕ <br />
                                ЛУЧШИЕ ЦЕНЫ
                            </p>
                            <h2>
                                В ДУБАИ<br />
                            </h2>
                            <div className="slider__main_btn">
                                <button className="blue-button" onClick={toggleShowModal}>
                                    <a href="#" tabIndex="0">
                                        <span>заказать</span>
                                        <p></p>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="collection__img">
                        <img src={airdopes} alt="airdopes"/>
                    </div>
                </div>
            </section>

            <section className="main-section collection">
                <div className="section__container">
                    <div className="collection__img">
                        <img src={latestSmartwatch} alt="latest Smart watch"/>
                    </div>
                    <div className="collection__text">
                        <div>
                            <p>
                                ГАРАНТИЯ <br />
                                НА ВЕСЬ ТОВАР
                            </p>
                            {/*<h2>*/}
                            {/*    МИРОВОЙ<br />*/}
                            {/*    СИТУАЦИИ*/}
                            {/*</h2>*/}
                            <div className="slider__main_btn">
                                <button className="blue-button" onClick={toggleShowModal}>
                                    <a href="#" tabIndex="0">
                                        <span>заказать</span>
                                        <p></p>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main-section collection collection-green">
                <div className="section__container">
                    <div className="collection__text">
                        <div>
                            <p>
                                ЛЮБОЙ<br />
                                ОБЪЕМ
                            </p>
                            <h2>
                                И ВСЕ<br />
                                РЕГИОНЫ
                            </h2>
                            <div className="slider__main_btn">
                                <button className="blue-button" onClick={toggleShowModal}>
                                    <a href="#" tabIndex="0">
                                        <span>заказать</span>
                                        <p></p>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="collection__img">
                        <img src={smartBand} alt="airdopes"/>
                    </div>
                </div>
            </section><section className="main-section collection collection-black">
            <div className="section__container">
                <div className="collection__img">
                    <img src={jbl} alt="vr Glasses"/>
                </div>
                <div className="collection__text">
                    <div>
                        <p>
                            АДАПТАЦИЯ<br />
                            В РАМКАХ
                        </p>
                        <h2>
                            МИРОВОЙ<br />
                            СИТУАЦИИ
                        </h2>
                        <div className="slider__main_btn">
                            <button className="blue-button" onClick={toggleShowModal}>
                                <a href="#" tabIndex="0">
                                    <span>заказать</span>
                                    <p></p>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    );
};

export default Collection;