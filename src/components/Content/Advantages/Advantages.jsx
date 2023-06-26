import React from "react";
import "./Advantages.css";
import Png1 from "./advantages1.png";
import Png2 from "./advantages2.png";
import Png3 from "./advantages3.png";
import {
  useTranslation
} from "react-i18next";


const Advantages = () => {
  const {t} = useTranslation();

  const advantages = [
    {
      title: t("advantages_title1"),
      p: t("advantages_p1"),
      img: Png1,
    },
    {
      title: t("advantages_title2"),
      p: t("advantages_p3"),
      img: Png2,
    },
    {
      title: t("advantages_title3"),
      p: t("advantages_p3"),
      img: Png3,
    },
  ];
  return (
    <section className="main-section">
      <div className="advantages_container section__container">
        {advantages.map((item) => (
          <div className="advantages_content" key={item.title}>
            <img src={item.img} />
            <div>
              <h6>{item.title}</h6>
              <span>{item.p}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
