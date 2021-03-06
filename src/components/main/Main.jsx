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
        dispatch={props.dispatch}
      />
    </main>
  );
}

export default Main;
