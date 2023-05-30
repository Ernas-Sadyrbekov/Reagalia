import React from "react";
import FormContact
  from "../Content/Form";

const Footer = () => {

  return (
      <section className="footer main-section">
        <div className="section__container">
          <div className="footer__contacts"></div>
          <div className="footer__form">
            <FormContact />
          </div>
        </div>
      </section>
  );
};

export default Footer;
