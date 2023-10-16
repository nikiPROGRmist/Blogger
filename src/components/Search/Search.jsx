import React from "react";
import style from "./search.module.scss";

export const Search = () => {
  return (
    <>
      <form className={style.search__icone}>
        <input className={style.serch__input} type="text" placeholder="Поиск" />
        <button className={style.search__btn} type="sumbit">
          Найти ответ
        </button>
      </form>
    </>
  );
};
