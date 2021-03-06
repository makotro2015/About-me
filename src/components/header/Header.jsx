import React from "react";
import avatar from "../../image/author.JPG";
import logo from "../../image/ilink.png";
import s from "./Header.module.scss";
import Button from "../button/Button";

function Header(props) {
  return (
    <header>
      <div className={s.authorInfo}>
        <div className={s.wrapperAvatar}><img className={s.avatar} src={avatar} alt="Фотография" /></div>
        <p className={s.authorName}>{props.authorInfo.fullName}</p>
      </div>
      <img className={s.logo} src={logo} alt="Логотип академии iLink" />
      <Button value="Панель управления" />
    </header>
  );
}

export default Header;
