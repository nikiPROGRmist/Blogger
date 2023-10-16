import React, { useState } from "react";
import style from "./Header.module.scss";
import { Light } from "../Light/Light";

export const Header = () => {
  const [registration, setRegistration] = useState(true);

  return (
    <header>
      <div className={style.header__left}>
        <div className={style.logo}>
          <svg
            height="30px"
            width="30px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 441.6 441.6"
            fill="#fff"
          >
            <path
              d="M220.8,0.4C99.2,0.4,0,99.6,0,221.2s99.2,220,220.8,220S441.6,342,441.6,220.4S342.4,0.4,220.8,0.4z
	 M424.8,206l-40,1.6c-1.6-15.2-4.8-30.4-10.4-44l36.8-16C418.4,165.2,423.2,185.2,424.8,206z M404.8,132.4l-36.8,16
	c-6.4-13.6-15.2-26.4-25.6-37.6L371.2,82C384.8,97.2,396,114,404.8,132.4z M284,306c15.2-11.2,26.4-25.6,34.4-43.2l40,13.6
	c-10.4,26.4-28.8,48.8-51.2,64.8L284,306z M293.6,350c-19.2,11.2-40.8,17.6-64.8,18.4V326c15.2-0.8,28.8-5.6,41.6-12L293.6,350z
	 M316.8,177.2c-7.2-16-19.2-30.4-32.8-40.8l22.4-36c21.6,16,39.2,36.8,50.4,62.4L316.8,177.2z M323.2,247.6
	c2.4-8.8,3.2-17.6,3.2-26.4c0-9.6-1.6-20-4-28.8l40-14.4c4,13.6,6.4,28,6.4,43.2c0,13.6-2.4,27.2-5.6,40L323.2,247.6z M360,70.8
	l-28.8,28.8c-11.2-10.4-24-19.2-37.6-25.6l16-36.8C328,46,344.8,57.2,360,70.8z M228.8,16.4C252,17.2,274.4,22,295.2,30l-16,36.8
	c-16-5.6-32.8-9.6-49.6-10.4v-40H228.8z M228.8,73.2c23.2,1.6,45.6,8,64.8,18.4l-22.4,36c-12.8-6.4-26.4-11.2-41.6-12V73.2H228.8z
	 M212.8,16.4v40.8c-17.6,0.8-34.4,4.8-49.6,10.4l-16-36.8C167.2,22,189.6,17.2,212.8,16.4z M119.2,250l-40,14.4
	c-4-13.6-6.4-28-6.4-43.2c0-13.6,2.4-27.2,5.6-40l40,13.6c-2.4,8.8-3.2,17.6-3.2,26.4C115.2,230.8,116,240.4,119.2,250z
	 M124.8,265.2c7.2,16,19.2,30.4,32.8,40.8l-22.4,36c-21.6-16-39.2-36.8-50.4-62.4L124.8,265.2z M123.2,179.6l-40-13.6
	c10.4-26.4,28.8-48.8,51.2-64.8l22.4,36C142.4,147.6,131.2,162,123.2,179.6z M148,91.6c19.2-11.2,40.8-17.6,64.8-18.4v42.4
	c-15.2,0.8-28.8,5.6-41.6,12L148,91.6z M132,36.4l16,36.8c-14.4,7.2-28,16.8-40,28l-28.8-28C94.4,58.8,112.8,46,132,36.4z M68,85.2
	l28.8,28C85.6,126,76,140.4,69.6,156.4L32,142C40.8,121.2,53.6,102,68,85.2z M26.4,157.2L64,171.6c-4.8,15.2-7.2,31.2-8,48l-40,1.6
	C16,198,20,176.4,26.4,157.2z M16.8,236.4l40-1.6c1.6,15.2,4.8,30.4,10.4,44l-36.8,16C23.2,276.4,18.4,256.4,16.8,236.4z M36.8,310
	l36.8-16c6.4,13.6,15.2,26.4,25.6,37.6l-28.8,28.8C56.8,345.2,45.6,328.4,36.8,310z M81.6,370.8l28.8-28.8
	c11.2,10.4,24,19.2,37.6,25.6l-16,36.8C113.6,396.4,96.8,384.4,81.6,370.8z M212.8,425.2c-23.2-0.8-45.6-5.6-66.4-13.6l16-36.8
	c16,5.6,32.8,9.6,49.6,10.4v40H212.8z M212.8,369.2c-23.2-1.6-45.6-8-64.8-18.4l22.4-36c12.8,6.4,26.4,11.2,41.6,12v42.4H212.8z
	 M131.2,221.2c0-49.6,40-89.6,89.6-89.6s89.6,40,89.6,89.6s-40,89.6-89.6,89.6S131.2,270.8,131.2,221.2z M228.8,425.2v-40.8
	c17.6-0.8,34.4-4.8,49.6-10.4l16,36.8C274.4,419.6,252,424.4,228.8,425.2z M309.6,405.2l-16-36.8c14.4-7.2,28-16.8,40-28l28.8,28
	C347.2,383.6,328.8,395.6,309.6,405.2z M373.6,357.2l-28.8-28C356,316.4,365.6,302,372,286l37.6,14.4
	C400.8,321.2,388,340.4,373.6,357.2z M377.6,270.8c4.8-15.2,7.2-31.2,8-48l40-1.6c0,22.4-4,43.2-10.4,63.2L377.6,270.8z"
            />
          </svg>
        </div>
        <h1>CHRISTMAS.NA</h1>
      </div>
      <div className={style.header__right}>
        {registration ? (
          <>
            <div className={style.button__click}>Войти</div>
            <div className={style.button__click}>Зарегистрироваться</div>
          </>
        ) : (
          <div className={style.button__click}>Написать статью</div>
        )}
        <div className={style.button__click}>Мой профиль</div>
        <Light />
      </div>
    </header>
  );
};
