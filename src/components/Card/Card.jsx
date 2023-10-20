import React from "react";
import style from "./card.module.scss";
// import MyFoto from "../../assets/img/item1.jpg";
// import MyFoto2 from "../../assets/img/item2.jpg";
import cards from "../../Cardes.json";

export const Card = () => {
  const setTextLength = (item) => {
    return item.length > 50 ? <>{item.slice(0, 170)} ...</> : item;
  };

  return (
    <div className={style.card__icon}>
      {cards.map((item) => {
        return (
          <div className={style.card__item}>
            <div className={style.card__img}>
              <img src={item.img} alt="" />
            </div>
            <div className={style.card__title}>{item.title}</div>
            <div className={style.card__text}>{setTextLength(item.text)}</div>
            <div className={style.card__menu}>
              <div className={style.icone__menu}>
                <div className={style.liked}>
                  <svg
                    enable-background="new 0 0 50 50"
                    height="25px"
                    version="1.1"
                    viewBox="0 0 50 50"
                    width="25px"
                  >
                    <rect fill="none" height="50" width="50" />
                    <path
                      d="M35,8  c-4.176,0-7.851,2.136-10,5.373C22.851,10.136,19.176,8,15,8C8.373,8,3,13.373,3,20c0,14,16,21,22,26c6-5,22-12,22-26  C47,13.373,41.627,8,35,8z"
                      fill="#fff"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div className={style.coment}>
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    height="25px"
                    width="25px"
                    fill="#fff"
                  >
                    <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z" />
                  </svg>
                </div>
              </div>
              <div className={style.card__avatar}>
                <div className={style.svg__icone}>
                  <svg height="20px" fill="#fff" version="1.1" width="20px" viewBox="0 0 16 16">
                    <path d="M12,9H8H4c-2.209,0-4,1.791-4,4v3h16v-3C16,10.791,14.209,9,12,9z" />
                    <path d="M12,5V4c0-2.209-1.791-4-4-4S4,1.791,4,4v1c0,2.209,1.791,4,4,4S12,7.209,12,5z" />
                  </svg>
                </div>
                <span>No name</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
