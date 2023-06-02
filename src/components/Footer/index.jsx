import React from "react";
import FormContact
    from "../Content/Form";
import './Footer.css'
import IconsSocial
    from "../Content/IconsSocial";
import {
    Link
} from "react-router-dom";

const Footer = ({toggleShowModal}) => {

    return (
        <>
            <section className="footer main-section" id='scroll-to-contacts'>
                <div className="section__container">
                    <div className="footer__contacts">
                        <div
                            className="footer__left_section">
                            <span className="fs62">Контакты</span>
                            <hr className='line-hr' />
                            <p>regalia@gmail.com</p>
                            <p>г.Бишкек ул.Набережная д.22</p>
                            <p className='footer__left_p_number'>0 705 555 222</p>
                            <IconsSocial/>
                        </div>
                    </div>
                    <div className="footer__form">
                        <FormContact />
                    </div>
                </div>
            </section>
            <section className='footer__map'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.3831436546407!2d55.04038021495747!3d24.987093683994292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f11180d90f33b%3A0x1637fc7b1eb17f9!2sJEBEL%20ALI!5e0!3m2!1sru!2skz!4v1585490401319!5m2!1sru!2skz"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"></iframe>
            </section>

            <section className="footer__navigation main-section">
                <div className="section__container">
                    <div className="logo">
                        <span className="footer__name">ALTAIR</span>
                        <span className="footer__about">ELECTRONIC FZE</span>
                    </div>

                    <div className="navigation">
                        <a className='fw400'>
                            {" "}
                            <Link to="/">Главная</Link>{" "}
                        </a>
                        <a>
                            {" "}
                            <Link to="/all_products">Наши товары</Link>
                        </a>
                        <a className='fw400'>
                            {" "}
                            <Link to="/about_us">О нас</Link>
                        </a>
                        <a href="#scroll-to-contacts">Контакты</a>
                        <a className='fw400' onClick={toggleShowModal}>Cвязаться</a>
                    </div>

                    <div className="header__contacts">
                        <IconsSocial/>
                    </div>
                </div>
            </section>

            <section className="copyright main-section">
                <span>Все права защищены © </span><p>ALTAIR ELECTRONIC FZE.</p>
            </section>
        </>
    );
};

export default Footer;