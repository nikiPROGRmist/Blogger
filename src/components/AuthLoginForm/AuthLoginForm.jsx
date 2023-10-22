import React from "react";
import style from "./authLoginForm.module.scss";

export const AuthLoginForm = () => {
  return (
    <>
      <div className={style.login_icone}>
        <div className={style.auto__menu}>
          <div className={style.login__input}>
            <div className={style.input__title}>Добро пожаловать</div>
            <div className={style.div__Auto}>
              <input type="text" placeholder="Логин" />
            </div>
            <div className={style.div__Auto}>
              <input type="text" placeholder="Пароль" />
            </div>
            <button className={style.auto__btn} type="button">
              Войти
            </button>
            <h6>
              <a href="">нет аккаунта? Авторизация</a>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};
