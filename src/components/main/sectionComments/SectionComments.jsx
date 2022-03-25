import React, { useState } from "react";
import Comment from "./comment/Comment";
import Modal from "./modal/Modal";
import Carousel from "./carousel/Carousel";
import s from "./SectionComments.module.scss";
import Button from "../../button/Button";
import FormFeedback from "./formFeedback/FormFeedback";
import plus from "./../../../image/plus.png";
import Message from "./Message/Message";

function SectionComments(props) {
  let commentsElements = props.commentsData.map((c, index) => (
    <Comment key={index} user={{ ...c }} />
  ));
  const [modalActive, setModalActive] = useState(false);
  const [messageActive, setMessageActive] = useState(false);
  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className={s.top}>
          <h2>Отзывы</h2>
          <Button
            onClick={() => setModalActive(true)}
            img={<img src={plus} alt="" />}
            value="Добавить отзыв"
          />
        </div>
        <Carousel>{commentsElements}</Carousel>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <FormFeedback
          addComment={props.addComment}
          newCommentText={props.newCommentText}
          newCommentName={props.newCommentName}
          updateNewCommentText={props.updateNewCommentText}
          updateNewCommentName={props.updateNewCommentName}
          setModalActive={setModalActive}
          setMessageActive={setMessageActive}
        />
      </Modal>
      <Message messageActive={messageActive} />
    </section>
  );
}

export default SectionComments;
