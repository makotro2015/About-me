import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state, { addComment } from "./redux/state";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addComment={addComment} />,
    document.getElementById("root")
  );
};

renderEntireTree(state);

serviceWorker.unregister();
