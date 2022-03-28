import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const rerenderEntireTree = (store) => {
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};

rerenderEntireTree(store);

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
