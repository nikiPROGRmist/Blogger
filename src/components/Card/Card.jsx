import React from "react";
import style from "./card.module.scss";

export const Card = () => {
  return (
    <div className={style.card__icon}>
      <div className={style.card__item}>
        <div className={style.img__icone}>
          <img src="../../assets/img/item1.jpg" alt="" />
        </div>
      </div>
      <div className={style.card__item}></div>
    </div>
  );
};
