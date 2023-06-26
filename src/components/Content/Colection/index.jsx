import React from "react";
import './Collection.css';
import airdopes from './img/airdopes-collection-img.png';
import latestSmartwatch from './img/latest-smartwatch-collection-img.png';
import smartBand from './img/smart-band-collection-img.png';
import vrGlasses from './img/best-collection-vr-glasses-img.png';
import jbl from './img/jbl.webp';
import {
    useTranslation
} from "react-i18next";

const Collection = ({toggleShowModal}) => {
    const {t} = useTranslation();

    return (
        <>
            <section className="main-section collection collection-green">
                <div className="section__container">
                    <div className="collection__text">
                        <div>
                            <p>
                                {t("collection_title_h1")}
                            </p>
                            <h2>
                                {t("collection_title_p1")}
                            </h2>
                            <div className="slider__main_btn">
                                <button className="blue-button" onClick={toggleShowModal}>
                                    <a href="#" tabIndex="0">
                                        <span>{t("collection_buy_now")}</span>
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

            <section className="main-section collection collection-black">
                <div className="section__container">
                    <div className="collection__img">
                        <img src={latestSmartwatch} alt="latest Smart watch"/>
                    </div>
                    <div className="collection__text">
                        <div>
                            <p>
                                {t("collection_title_h2")}
                            </p>
                            {/*<h2>*/}
                            {/*    МИРОВОЙ<br />*/}
                            {/*    СИТУАЦИИ*/}
                            {/*</h2>*/}
                            <div className="slider__main_btn">
                                <button className="blue-button" onClick={toggleShowModal}>
                                    <a href="#" tabIndex="0">
                                        <span>{t("collection_buy_now")}</span>
                                        <p></p>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main-section collection collection-green ">
                <div className="section__container">
                    <div className="collection__text">
                        <div>
                            <p>
                                {t("collection_title_h3")}
                            </p>
                            <h2>
                                {t("collection_title_p3")}
                            </h2>
                            <div className="slider__main_btn">
                                <button className="blue-button" onClick={toggleShowModal}>
                                    <a href="#" tabIndex="0">
                                        <span>{t("collection_buy_now")}</span>
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
            </section>

            <section className="main-section collection collection-black">
            <div className="section__container">
                <div className="collection__img">
                    <img src={jbl} alt="vr Glasses"/>
                </div>
                <div className="collection__text">
                    <div>
                        <p>
                            {t("collection_title_h4")}
                        </p>
                        <h2>
                            {t("collection_title_p4")}
                        </h2>
                        <div className="slider__main_btn">
                            <button className="blue-button" onClick={toggleShowModal}>
                                <a href="#" tabIndex="0">
                                    <span>{t("collection_buy_now")}</span>
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