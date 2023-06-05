import React, { useEffect, useRef, useState } from "react";
import "./Form.css";
import emailjs from "emailjs-com";

const FormContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    // e.preventDefault();
    // const formData = new FormData(e.target);
    // // api.login(formData.get('email'), formData.get('phone'), formData.get('email'), formData.get('address'), formData.get('comment'));
    // console.log(formData.get('name'), formData.get('phone'), formData.get('email'), formData.get('address'), formData.get('comment'));
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_xchfztq", form.current, "pylx-Dm8SX08NFNUM")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState(
    "Поле имени не может быть пустым!"
  );
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState("Добавьте номер телефона!");
  const [adressDirty, setAdressDirty] = useState(false);
  const [adressError, setAdressError] = useState("Добавьте адрес!");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    "Почтовый адрес не может быть пустым!"
  );
  const [commentDirty, setCommentDirty] = useState(false);
  const [commentError, setCommentError] = useState("Добавьте комментарий!");
  const [send, setSend] = useState("");
  const [formValid, SetFormValid] = useState(false);

  useEffect(() => {
    if (nameError || adressError || phoneError || emailError || commentError) {
      SetFormValid(false);
    } else {
      SetFormValid(true);
    }
  }, [nameError, adressError, phoneError, emailError, commentError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameError("Некорректное имя!");
    } else {
      setNameError("");
    }
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (!re.test(String(e.target.value))) {
      setPhoneError("Некорректный номер телефона!");
    } else {
      setPhoneError("");
    }
  };

  const userAdress = (e) => {
    setAdress(e.target.value);
    if (e.target.value.length < 5) {
      setAdressError("Некорректный адрес!");
    } else {
      setAdressError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email!");
    } else {
      setEmailError("");
    }
  };

  const commentHandler = (e) => {
    setComment(e.target.value);

    if (e.target.value.length < 1) {
      setCommentError("Некорректный комментарий!");
    } else {
      setCommentError("");
    }
  };

  const blureHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      case "address":
        setAdressDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "comment":
        setCommentDirty(true);
        break;
    }
  };
  return (
    <div className="form-buy">
      <div>
        <p className="fs62">Оформление заказа онлайн</p>
        <hr className="line-hr" />
      </div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="form-buy__row">
          <div>
            <label htmlFor="name">Ваше имя: *</label>
            <input
              type="text"
              id="name"
              name="name"
              onBlur={(e) => blureHandler(e)}
              onChange={(e) => nameHandler(e)}
            />
          </div>
          <div>
            <label htmlFor="phone">Телефон: *</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              onBlur={(e) => blureHandler(e)}
              onChange={(e) => phoneHandler(e)}
            />
          </div>
        </div>
        <div className="form-buy__row">
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              onBlur={(e) => blureHandler(e)}
              onChange={(e) => emailHandler(e)}
            />
          </div>
          <div>
            <label htmlFor="address">Адрес:</label>
            <input
              type="address"
              id="address"
              name="address"
              onBlur={(e) => blureHandler(e)}
              onChange={(e) => userAdress(e)}
            />
          </div>
        </div>
        <div className="form-buy__row form-buy__row-comment">
          <div>
            <label htmlFor="comment">Комментарии к заказу:</label>
            <input
              type="comment"
              id="comment"
              name="comment"
              onBlur={(e) => blureHandler(e)}
              onChange={(e) => commentHandler(e)}
            />
          </div>
          <br />
        </div>
        <div className="slider__main_btn">
          <button
            disabled={!formValid}
            onClick={() => alert("Заказ отправлкен!")}
          >
            <a tabIndex="0">
              <span>Оформить заказ</span>
              <p></p>
            </a>
          </button>
        </div>

        {nameDirty && nameError && (
          <div
            style={{
              color: "red",
              fontSize: "0.8rem",
            }}
          >
            {nameError}
          </div>
        )}
        {phoneDirty && phoneError && (
          <div
            style={{
              color: "red",
              fontSize: "0.8rem",
            }}
          >
            {phoneError}
          </div>
        )}
        {adressDirty && adressError && (
          <div
            style={{
              color: "red",
              fontSize: "0.8rem",
            }}
          >
            {adressError}
          </div>
        )}
        {emailDirty && emailError && (
          <div
            style={{
              color: "red",
              fontSize: "0.8rem",
            }}
          >
            {emailError}
          </div>
        )}
        {commentDirty && commentError && (
          <div
            style={{
              color: "red",
              fontSize: "0.8rem",
            }}
          >
            {commentError}
          </div>
        )}
      </form>
    </div>
  );
};

export default FormContact;
