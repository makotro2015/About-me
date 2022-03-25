import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state, { addComment, updateNewCommentText, updateNewCommentName, clearInput } from "./redux/state";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addComment={addComment} updateNewCommentText={updateNewCommentText} updateNewCommentName={updateNewCommentName} clearInput={clearInput}/>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);

serviceWorker.unregister();
