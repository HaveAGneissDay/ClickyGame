import React, { Component } from 'react';
import './App.css';
import imageHolder from './Components/images.js'
import Display from './Components/display.js'

//import from game js
//import from logic js

class App extends Component {
        constructor(props) {
          super(props);
          this.state = {
            score: 0,
            highScore: 0,
            message: "",
          }
          this.handleIncrement = this.handleIncrement.bind(this);
        }
  handleIncrement = () => {
 this.setState({
   score: this.state.counter + 1,
 })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game</h1>
          <div className="Message"></div>
          <div className="message"> Message<Display value={this.state.message} /> </div>
          <div className="highScore"> High Score: <Display value={this.state.highScore} /> </div>
          <div className="score"> Score:<Display value={this.state.score} /> </div>
        </header>
        <div className="jumbotron"> <h2>Clicky Game</h2> <p>Click on an image to earn points, but don't click on any more than once!</p></div>
  
         <div className="imageHolder"> {imageHolder}</div>

      </div>
    );
  }
}

export default App;
