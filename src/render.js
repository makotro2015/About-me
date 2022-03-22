import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addComment } from "./redux/state";

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addComment={addComment} />,
    document.getElementById("root")
  );
};
