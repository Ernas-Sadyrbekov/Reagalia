import React from "react";
import FormContact
    from "../Content/Form";
import './Footer.css'

const Footer = () => {

    return (
        <>
            <section className="footer main-section">
                <div className="section__container">
                    <div className="footer__contacts">
                        <div
                            className="footer__left_section">
                            <span className="fs62">Контакты</span>
                            <hr className='line-hr' />
                            <p>regalia@gmail.com</p>
                            <p>г.Бишкек ул.Набережная д.22</p>
                            <p className='footer__left_p_number'>0 705 555 222</p>
                        </div>
                    </div>
                    <div className="footer__form">
                        <FormContact />
                    </div>
                </div>
            </section>
            <section className="copyright main-section">
                <p>Copyright © Regalia Ecommerce Store All Rights Reserved.</p>
            </section>
        </>
    );
};

export default Footer;