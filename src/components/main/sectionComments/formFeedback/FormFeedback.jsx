import React from "react";
import { useState, useEffect } from "react";
import s from "./FormFeedback.module.scss";
import Button from "./../../../button/Button";
import info from "./../../../../image/Info Square.png";
import plus from "./../../../../image/plus.png";
import exit from "./../../../../image/exit.png";
import {
  updateNewCommentTextActionCreator,
  updateNewCommentNameActionCreator,
  addMessageActionCreator,
  addCommentActionCreator,
} from "./../../../../redux/state.js";

const useValidation = (value, validations) => {
  const [minLength, setMinLength] = useState(true);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      if (validation === "isEmpty") {
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

  const onCommentTextChange = (e) => {
    const text = newCommentText.current.value;
    props.dispatch(updateNewCommentTextActionCreator(text));
    textareaText.onChange(e);
  };

  const onCommentNameChange = (e) => {
    const text = newUserName.current.value;
    props.dispatch(updateNewCommentNameActionCreator(text));
    inputText.onChange(e);
  };

  const addComment = (e) => {
    e.preventDefault();
    props.setModalActive(false);
    props.setMessageActive(true);
    props.dispatch(addMessageActionCreator());
    props.dispatch(addCommentActionCreator());
    setTimeout(() => props.setMessageActive(false), 5000);
  };

  return (
    <form className={s.form}>
      <div className={s.top}>
        <h3>??????????</h3>
        <img
          src={exit}
          alt="??????????"
          onClick={() => props.setModalActive(false)}
        />
      </div>

      <label className={s.labelName} htmlFor="name">
        ?????? ?????? ???????????
      </label>
      {inputText.isDirty && inputText.isEmpty && (
        <span className={s.warning}>?????????????????????? ???????????????????? ???????????????? 3</span>
      )}
      <div className={s.nameAva}>
        <input
          id="name"
          name="inputText"
          type="text"
          value={props.newCommentName}
          onChange={onCommentNameChange}
          onBlur={(e) => inputText.onBlur(e)}
          className={s.inputName}
          placeholder="?????? ??????????????"
          ref={newUserName}
        />
        <Button
          type="file"
          img={<img src={plus} alt="" />}
          value="?????????????????? ????????"
          disabled={!inputText.inputValid || !textareaText.inputValid}
        />
      </div>
      <label className={s.labelLike} htmlFor="like">
        ?????? ???? ?????? ???????????????????????
      </label>
      {textareaText.isDirty && textareaText.isEmpty && (
        <span className={s.warning}>?????????????????????? ???????????????????? ???????????????? 3</span>
      )}
      <textarea
        id="like"
        name="textareaText"
        value={props.newCommentText}
        onChange={onCommentTextChange}
        onBlur={(e) => textareaText.onBlur(e)}
        placeholder="???????????????? ???????? ???????? ?? ?????????? ??????????..."
        ref={newCommentText}
      />
      <div className={s.bottom}>
        <Button
          className={s.btn}
          type="submit"
          value="?????????????????? ??????????"
          onClick={addComment}
        />
        <div className={s.info}>
          <img className={s.infoIcon} src={info} alt="???????????? ????????????????????" />
          <p className={s.infoText}>
            ?????? ???????????? ???????????????? ?????????????????? ?? ?????????????? 2 ??????????
          </p>
        </div>
      </div>
    </form>
  );
}

export default FormFeedback;
