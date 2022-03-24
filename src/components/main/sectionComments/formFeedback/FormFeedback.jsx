import React, { useState, useEffect } from "react";
import s from "./FormFeedback.module.scss";
import Button from "./../../../button/Button";
import info from "./../../../../image/Info Square.png";
import plus from "./../../../../image/plus.png";
import exit from "./../../../../image/exit.png";

const useValidation = (value, validations) => {
  const [minLength, setMinLength] = useState(true);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      if (validation === "isEmpty") {
        console.log(value.length);
        value.length < 3 ? setMinLength(true) : setMinLength(false);
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (minLength) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [minLength]);

  return {
    isEmpty: minLength,
    inputValid,
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

function FormFeedback(props) {
  const newUserName = React.createRef();
  const newCommentText = React.createRef();

  const inputText = useInput("", { isEmpty: true });
  const textareaText = useInput("", { isEmpty: true });

  const addComment = (e) => {
    e.preventDefault();
    const userName = newUserName.current.value;
    const commentText = newCommentText.current.value;
    props.addComment(userName, commentText);
    newUserName.current.value = "";
    newCommentText.current.value = "";
  };

  return (
    <form className={s.form} onSubmit={addComment}>
      <div className={s.top}>
        <h3>Отзыв</h3>
        <img src={exit} alt="Выход" />
      </div>

      <label className={s.labelName} htmlFor="name">
        Как вас зовут?
      </label>
      {inputText.isDirty && inputText.isEmpty && (
        <span className={s.warning}>Минимальное количество символов 3</span>
      )}
      <div className={s.nameAva}>
        <input
          id="name"
          name="inputText"
          type="text"
          value={inputText.value}
          onChange={(e) => inputText.onChange(e)}
          onBlur={(e) => inputText.onBlur(e)}
          className={s.inputName}
          placeholder="Имя Фамилия"
          // autoFocus
          ref={newUserName}
        />
        <Button
          type="file"
          img={<img src={plus} alt="" />}
          value="Загрузить фото"
          disabled={!inputText.inputValid || !textareaText.inputValid}
        />
      </div>
      <label className={s.labelLike} htmlFor="like">
        Все ли вам понравилось?
      </label>
      {textareaText.isDirty && textareaText.isEmpty && (
        <span className={s.warning}>Минимальное количество символов 3</span>
      )}
      <textarea
        id="like"
        name="textareaText"
        value={textareaText.value}
        onChange={(e) => textareaText.onChange(e)}
        onBlur={(e) => textareaText.onBlur(e)}
        placeholder="Напишите пару слов о вашем опыте..."
        ref={newCommentText}
      />
      <div className={s.bottom}>
        <Button
          disabled={!inputText.inputValid || !textareaText.inputValid}
          className={s.btn}
          type="submit"
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
