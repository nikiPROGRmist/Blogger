import React from "react";
import style from "./profile.module.scss";

export const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.profile__avatar}>
        <div className={style.avatar}>
          <svg width="150px" height="150px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title />
            <circle cx="12" cy="8" fill="#464646" r="4" />
            <path
              d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z"
              fill="#464646"
            />
          </svg>
        </div>
        <div className={style.title}>No name</div>
        <div className={style.title}>Санкт-Петербург, Россия</div>
        <button className={style.profile__btn}>Редактировать</button>
      </div>
      <div className={style.profile__information}>
        <div className={style.ptof__info}>
          <span>Полное имя</span>
        </div>
        <div className={style.ptof__info}>
          <span>Полное имя</span>
        </div>
        <div className={style.ptof__info}>
          <span>Полное имя</span>
        </div>
        <div className={style.ptof__info}>
          <span>Полное имя</span>
        </div>
      </div>
    </div>
  );
};
