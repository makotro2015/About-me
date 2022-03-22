import React from "react";
import s from "./SectionWelcome.module.scss";
import pet from "./../../../image/pet.png";
import gender from "./../../../image/female.png";

function SectionWelcome(props) {
  const keys = Object.keys(props.authorInfo.avatar);
  return (
    <section className={s.section}>
      <h1>Добро пожаловать в академию!</h1>
      <div className={s.wrapper}>
        <div className={s.wrapperImg}>
          <img src={props.authorInfo.avatar[keys[0]]} alt="Фотография автора" />
        </div>
        <div className={s.authorInfo}>
          <div className={s.nameYear}>
            <h3>{props.authorInfo.fullName}</h3>
            <span>{props.authorInfo.birthday}</span>
          </div>
          <div className={s.townGenderYear}>
            <span>
              <b>Город:</b> {props.authorInfo.town}
            </span>
            <div className={s.gender}>
              <span>
                <b>Пол:</b> {props.authorInfo.gender}
              </span>{" "}
              <img src={gender} alt="Гендерный знак женщины" />{" "}
            </div>
            <span>
              <b>Возраст:</b> {props.authorInfo.age}
            </span>
          </div>
          <p className={s.aboutSelf}>
            <b>О себе:</b> {props.authorInfo.aboutSelf}
          </p>
          <p className={s.ps}>
            <i>WTF: {props.authorInfo.ps}</i>
          </p>
          <p className={s.pet}>
            <img src={pet} alt="Миска с едой" />
            <b>Домашнее животное:</b> {props.authorInfo.pet}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionWelcome;
