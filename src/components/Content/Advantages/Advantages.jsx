import React from "react";
import "./Advantages.css";
import Png1 from "./advantages1.png";
import Png2 from "./advantages2.png";
import Png3 from "./advantages3.png";

const Advantages = () => {
  const advantages = [
    {
      title: "Логистика",
      p: "Отправка в любой регион",
      img: Png1,
    },
    {
      title: "Поддержка 24/7",
      p: "Прямая связь без бюрократических процедур",
      img: Png2,
    },
    {
      title: "100% Надежность",
      p: "Полный пакет документов",
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
