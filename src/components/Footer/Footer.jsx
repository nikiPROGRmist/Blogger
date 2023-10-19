import React from "react";
import style from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={style.footer__icone}>
      <div className={style.footer__left}>
        <div className={style.footer__title}>KRECHUN NIKITA</div>
        <div className={style.footer__text}>
          Fullstack Developer (ReactJS, NodeJS) / UI Designer.
        </div>
      </div>
    </div>
  );
};
