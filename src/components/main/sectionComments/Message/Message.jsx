import React from "react";
import s from "./Message.module.scss";

function Message(props) {
  const keys = Object.keys(props.currentMessage.src);
  return (
    <div
      className={props.messageActive ? s.message + " " + s.active : s.message}
      style={props.currentMessage.style}
    >
      <img src={props.currentMessage.src[keys[0]]} alt={props.currentMessage.alt} />
      <h4>{props.currentMessage.title}</h4>
      <p>{props.currentMessage.text}</p>
    </div>
  );
}

export default Message;
