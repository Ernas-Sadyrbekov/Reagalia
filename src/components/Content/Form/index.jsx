import React, { useEffect, useRef, useState } from "react";
import "./Form.css";
import emailjs from "emailjs-com";
import {
  useTranslation
} from "react-i18next";

const FormContact = () => {
  const {t} = useTranslation();

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
      t("form_error_name")
  );
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState(t("form_error_phone"));
  const [adressDirty, setAdressDirty] = useState(false);
  const [adressError, setAdressError] = useState(t("form_error_address"));
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState(
      t("form_error_email")
  );
  const [commentDirty, setCommentDirty] = useState(false);
  const [commentError, setCommentError] = useState(t("form_error_comment"));
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
      setNameError(t("form_error_name_uncorrected"));
    } else {
      setNameError("");
    }
  };

  useEffect(() => {
      let countOfNumbersInValue = 0;
      let countOfSignsInValue = 0;
      let countOfIncorrectedSimbols = 0;
      let lengthOfNumber = phone.length;

      for (let i = 0; i < lengthOfNumber; i++) {
        if(!(isNaN(+phone[i]))) {
          countOfNumbersInValue++;
        }

        if(phone[i] === "+" || phone[i] === "(" || phone[i] === ")" || phone[i] === "-" || phone[i] === ' ') {
          countOfSignsInValue++;
        }

        if(lengthOfNumber && isNaN(+phone[i]) && !( phone[i] === "+" || phone[i] === "(" || phone[i] === ")" || phone[i] === "-" || phone[i] === ' ' )) {
          countOfIncorrectedSimbols++;
          console.log(countOfIncorrectedSimbols);
        }
      }

      if (countOfIncorrectedSimbols >= 1) {
        setPhoneError();
      } else if (countOfNumbersInValue < 7 && lengthOfNumber < 20) {
        setPhoneError(t("form_error_phone_uncorrected_symbol"));
      } else {
        setPhoneError("");
      }
  }, [phone]);

  const phoneHandler = (e) => {
    setPhoneError('');
    setPhone(e.target.value);
  };

  // const phoneHandler = (e) => {
  //   setPhoneError('');
  //
  //   setPhone(e.target.value);
  //   let countOfNumbersInValue = 0;
  //   let countOfSignsInValue = 0;
  //   let countOfIncorrectedSimbols = 0;
  //   let lengthOfNumber = phone.length;
  //
  //   for (let i = 0; i < lengthOfNumber; i++) {
  //     if(!(isNaN(+phone[i]))) {
  //       countOfNumbersInValue++;
  //     }
  //
  //     if(phone[i] === "+" || phone[i] === "(" || phone[i] === ")" || phone[i] === "-" || phone[i] === ' ') {
  //       countOfSignsInValue++;
  //     }
  //
  //     if(lengthOfNumber && isNaN(+phone[i]) && !( phone[i] === "+" || phone[i] === "(" || phone[i] === ")" || phone[i] === "-" || phone[i] === ' ' )) {
  //       countOfIncorrectedSimbols++;
  //       console.log(countOfIncorrectedSimbols);
  //     }
  //   }
  //
  //   if (countOfIncorrectedSimbols >= 1) {
  //     setPhoneError("Ввели некорректный символ в поле телефона!");
  //   } else if (countOfNumbersInValue < 7 && lengthOfNumber < 20) {
  //     setPhoneError("Некорректный номер телефона!");
  //   } else {
  //     setPhoneError("");
  //   }
  // };

  const userAdress = (e) => {
    setAdress(e.target.value);
    if (e.target.value.length < 5) {
      setAdressError(t("form_error_address_uncorrected"));
    } else {
      setAdressError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError(t("form_error_email_uncorrected"));
    } else {
      setEmailError("");
    }
  };

  const commentHandler = (e) => {
    setComment(e.target.value);

    if (e.target.value.length < 1) {
      setCommentError(t("form_error_comment_uncorrected"));
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
        <p className="fs62">{t("form_header")}</p>
        <hr className="line-hr" />
      </div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="form-buy__row">
          <div>
            <label htmlFor="name">{t("form_value_name")}: *</label>
            <input
              type="text"
              id="name"
              name="name"
              onBlur={(e) => blureHandler(e)}
              onChange={(e) => nameHandler(e)}
            />
          </div>
          <div>
            <label htmlFor="phone">{t("form_value_phone")}: *</label>
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
            <label htmlFor="email">E-mail: *</label>
            <input
              type="email"
              id="email"
              name="email"
              onBlur={(e) => blureHandler(e)}
              onChange={(e) => emailHandler(e)}
            />
          </div>
          <div>
            <label htmlFor="address">{t("form_value_address")}: *</label>
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
            <label htmlFor="comment">{t("form_value_comment")}: *</label>
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
            onClick={() => alert("Заказ отправлен!")}
          >
            <a tabIndex="0">
              <span>{t("form_value_order")}</span>
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
