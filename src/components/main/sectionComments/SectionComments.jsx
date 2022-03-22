import React, { useState } from "react";
import Comment from "./comment/Comment";
import Modal from "./modal/Modal";
import Carousel from "./carousel/Carousel";
import s from "./SectionComments.module.scss";
import Button from "../../button/Button";
import FormFeedback from "./formFeedback/FormFeedback";

function SectionComments(props) {
  let commentsElements = props.commentsData.map((c) => (
    <Comment user={{ ...c }} />
  ));
  const [modalActive, setModalActive] = useState(false);
  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className={s.top}>
          <h2>Отзывы</h2>
          <Button onClick={() => setModalActive(true)} value="Добавить отзыв" />
        </div>
        <Carousel>{commentsElements}</Carousel>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <FormFeedback addComment={props.addComment} />
      </Modal>
    </section>
  );
}

export default SectionComments;
