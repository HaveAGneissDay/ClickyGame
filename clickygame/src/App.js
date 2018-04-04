import React, { Component } from 'react';
import './App.css';
import imageHolder from './Components/images.js'

//import from game js
//import from logic js

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1>
          <div className="Message"></div>
          <div className="score"></div>
          <div className="topScore"></div>
        </header>
        <div className="jumbotron"> <h2>Clicky Game</h2> <p>Click on an image to earn points, but don't click on any more than once!</p></div>
         <div className="imageHolder"> {imageHolder}</div>
      </div>
    );
  }
}

export default App;
