import React from "react";
import success from "./../../../../image/success.png";
import s from "./Message.module.scss";

function Message(props) {
  return (
    <div
      className={props.messageActive ? s.message + " " + s.active : s.message}
    >
      <img src={success} alt="Успешно" />
      <h4>Успешно!</h4>
      <p>Спасибо за отзыв о нашей компании :)</p>
    </div>
  );
}

export default Message;
