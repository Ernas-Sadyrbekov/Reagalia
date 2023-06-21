import React from "react";
import FormContact
    from "../Content/Form";
import './Footer.css'
import IconsSocial
    from "../Content/IconsSocial";
import {
    Link
} from "react-router-dom";
import {
    useTranslation
} from "react-i18next";

const Footer = ({toggleShowModal}) => {
    const {t} = useTranslation();

    return (
        <>
            <section className="footer main-section" id='scroll-to-contacts'>
                <div className="section__container">
                    <div className="footer__contacts">
                        <div
                            className="footer__left_section">
                            <span className="fs62">{t("footer_left_section")}</span>
                            <hr className='line-hr' />
                            <p>altairelec.fze@gmail.com</p>
                            <p>P.O Box 16910, Dubai U.A.E</p>
                            <p className='footer__left_p_number'>+971554870201</p>
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
                        <p className="footer__name">ALTAIR</p>
                        <p className="footer__about">ELECTRONIC FZE</p>
                        <p className='footer__description'>{t("carousel_title")}</p>
                        <IconsSocial/>
                    </div>

                    <div className="footer__anchors">
                        <p>{t("footer_anchors")}</p>
                        <p>
                                {" "}
                                <Link to="/"><b>> </b>  {t("header_home")}</Link>{" "}
                        </p>
                        <p>
                            {" "}
                            <Link to="/all_products"><b>> </b>  {t("header_our_products")}</Link>
                        </p>
                        <p>
                            {" "}
                            <Link to="/about_us"><b>> </b>  {t("header_about_us")}</Link>
                        </p>
                        <p>
                            <a href="#scroll-to-contacts"><b>> </b> {t("header_contacts")}</a>
                        </p>
                        <p>
                        <a className='fw400' onClick={toggleShowModal}><b>> </b>  {t("heder_contact_us")}</a>
                        </p>
                    </div>
                </div>
            </section>

            <section className="copyright main-section">
                <span>{t("footer_copyright")} © </span><p>ALTAIR ELECTRONIC FZE.</p>
            </section>
        </>
    );
};

export default Footer;