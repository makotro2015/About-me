import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state, { addComment } from "./redux/state";

export const renderEntireTree = () => {
  ReactDOM.render(
    <App state={state} addComment={addComment} />,
    document.getElementById("root")
  );
};
