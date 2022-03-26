import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state, {
  addComment,
  updateNewCommentText,
  updateNewCommentName,
  subscribe,
  addMessage
} from "./redux/state";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App
      state={state}
      addComment={addComment}
      addMessage={addMessage}
      updateNewCommentText={updateNewCommentText}
      updateNewCommentName={updateNewCommentName}
    />,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

serviceWorker.unregister();
