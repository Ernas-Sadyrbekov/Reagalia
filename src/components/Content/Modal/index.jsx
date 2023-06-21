import React from "react";
import Form
  from "../Form";
import './Modal.css'
import {
  useTranslation
} from "react-i18next";

const Modal = ({ show, onCloseButtonClick }) => {
  const {t} = useTranslation();

  if (!show) {
    return null;
  }

  return (
      <div className="modal-wrapper">
        <div className="modal">
          <Form />
          <div className="body">
            {t("modal_body_text")}
          </div>
          <div className="footer">
            <button onClick={onCloseButtonClick}>{t("modal_close_text")}</button>
          </div>
        </div>
      </div>
  );
};

export default Modal;
