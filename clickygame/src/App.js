import React, { Component } from 'react';
import './App.css';
import Display from './Components/display.js';
import ImageHolder from './Components/imageHolder.js';
import images from './Components/data.JSON';
import image1 from './Components/images/BobaFett.png';
import _ from 'lodash';


class App extends Component {
        constructor(props) {
          super(props);
          this.state = {
            images,
            score: 0,
            highScore: 0,
            message: "",
          }
          this.handleIncrement = this.handleIncrement.bind(this);
          // this.generateimages =this.generateimages.bind(this);
        }

  handleIncrement = () => {
 this.setState({
   score: this.state.score + 1,
 })
 }

   // generateimages = () =>  {
  // images.map((image) => (
  //   <ImageHolder
  //     key={this.image.id}
  //     hasClick={this.image.clicked}
  //     id={this.image.id}
  //     name={this.image.name}
  //     image={this.image.imageLink}
  //   />
  // ))
//}

  randomShuffle() {
    return Math.random()
  }
  render() 
  {
    //console.log(images);
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
        {/* {
          _.map(this.state.images.data, (image) => {
            return (
            <div key={image.id}>
              <ImageHolder
              key={image.id}
                hasClick={image.clicked}
                id={image.id}
                name={image.name}
                image={image.imageLink}
              />
            </div> 
            )
          }) */}
        {}
        <ImageHolder 
        name = {image1}
        />
        {/* {this.state.images.map((image) => (
          <ImageHolder
            key = {image.id}
            hasClick = {this.image.clicked}
            id = {image.id}
            name = {image.name}
            image = {image.imageLink} 
            />
          ))} */}
            </div>
    );
  }
}

export default App;
