import React from "react";
import style from "./intro.module.scss";

export const Intro = () => {
  return (
    <div className={style.intro}>
      <div className={style.intro__left}>
        <h1> driver.ru</h1>
      </div>
      <div className={style.intro__right}>
        <div className={style.intro__text}>— ОНЛАЙН СЕРВИС ДЛЯ ПОИСКА ИНФОРМАЦИИ.</div>
        <div className={style.intro__text}>
          ПРОСТОЙ И БЫСТРЫЙ СПОСОБ ПОДЕЛИТЬСЯ ПОЛЕЗНЫМ ОПЫТОМ.
        </div>
        <div className={style.intro__text}>Человеческие ответы на автомобильные вопросы.</div>
        <button className={style.into__btn}>
          Написать статью
          <a className="arrow-3" href="#link">
            <svg
              className="arrow-3-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 32 32"
              fill="#fff"
            >
              <g
                fill="#fff"
                stroke="#337AB7"
                stroke-width="1.5"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              >
                <circle className="arrow-3-iconcircle" cx="16" cy="16" r="15.12"></circle>
                <path
                  className="arrow-3-icon--arrow"
                  d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                ></path>
              </g>
            </svg>
          </a>
        </button>
      </div>
    </div>
  );
};
