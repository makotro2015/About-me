import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';


function App(props) {
  return (  
    <div className='app'>
    <Header authorInfo={props.state.authorInfo} />
    <Main state={props.state} addComment={props.addComment} updateNewCommentText={props.updateNewCommentText} updateNewCommentName={props.updateNewCommentName} clearInput={props.clearInput}/>
    <Footer />
    </div>
  );
}

export default App;
