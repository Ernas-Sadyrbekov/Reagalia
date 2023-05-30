import React from "react";
import Form
  from "../Form";
import './Modal.css'

const Modal = ({ show, onCloseButtonClick }) => {
  if (!show) {
    return null;
  }

  return (
      <div className="modal-wrapper">
        <div className="modal">
          <Form />
          <div className="body">
            Нажмите на кнопку чтобы закрыть модальное окно заказа.
          </div>
          <div className="footer">
            <button onClick={onCloseButtonClick}>Закрыть окно</button>
          </div>
        </div>
      </div>
  );
};

export default Modal;
