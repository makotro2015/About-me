import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App(props) {
  return (
    <div className="app">
      <Header authorInfo={props.state.authorInfo} />
      <Main state={props.state} dispatch={props.dispatch} />
      <Footer />
    </div>
  );
}

export default App;
