import React from "react";
import "./Main.scss";
import SectionComments from "./sectionComments/SectionComments";
import SectionWelcome from "./sectionWelcome/SectionWelcome";

function Main(props) {
  return (
    <main>
      <SectionWelcome authorInfo={props.state.authorInfo} />
      <SectionComments
        commentsData={props.state.commentsData}
        newCommentText={props.state.newCommentText}
        newCommentName={props.state.newCommentName}
        currentMessage={props.state.currentMessage}
        addComment={props.addComment}
        updateNewCommentText={props.updateNewCommentText}
        updateNewCommentName={props.updateNewCommentName}
        addMessage={props.addMessage}
      />
    </main>
  );
}

export default Main;
