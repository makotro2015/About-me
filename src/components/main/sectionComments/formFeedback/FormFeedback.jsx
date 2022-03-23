import React from "react";
import s from "./FormFeedback.module.scss";
import Button from "./../../../button/Button";
import info from "./../../../../image/Info Square.png";
import plus from "./../../../../image/plus.png";
import exit from "./../../../../image/exit.png";

function FormFeedback(props) {
  const newUserName = React.createRef();
  const newCommentText = React.createRef();

  const addComment = (e) => {
    e.preventDefault();
    const userName = newUserName.current.value;
    const commentText = newCommentText.current.value;
    props.addComment(userName, commentText);
    newUserName.current.value = "";
    newCommentText.current.value = "";
  };

  return (
    <form className={s.form}>
      <div className={s.top}>
        <h3>Отзыв</h3>
        <img src={exit} alt="Выход" />
      </div>

      <label className={s.labelName} for="name">
        Как вас зовут?
      </label>
      <div className={s.nameAva}>
        <input
          id="name"
          type="text"
          className={s.inputName}
          placeholder="Имя Фамилия"
          ref={newUserName}
        />
        <Button img={<img src={plus} alt="" />} value="Загрузить фото" />
      </div>
      <label className={s.labelLike} for="like">
        Все ли вам понравилось?
      </label>
      <textarea
        id="like"
        placeholder="Напишите пару слов о вашем опыте..."
        ref={newCommentText}
      />
      <div className={s.bottom}>
        <Button
          className={s.btn}
          onClick={addComment}
          value="Отправить отзыв"
        />
        <img className={s.infoIcon} src={info} alt="Значок информации" />
        <p className={s.infoText}>
          Все отзывы проходят модерацию в течение 2 часов
        </p>
      </div>
    </form>
  );
}

export default FormFeedback;
