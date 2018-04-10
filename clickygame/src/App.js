import React, { Component } from 'react';
import './App.css';
import Display from './Components/display.js';
import ImageHolder from './Components/imageHolder.js';
import images from './Components/data.JSON';

//import _ from 'lodash';


class App extends Component {
        constructor(props) {
          super(props);
          this.state = {
            images,
            score: 0,
            highScore: 0,
            message: "",
          }
          // this.handleIncrement = this.handleIncrement.bind(this);
          // this.generateimages =this.generateimages.bind(this);
        }

//   handleIncrement = () => {
//  this.setState({
//    score: this.state.score + 1,
//  })
//  }

  imageClick = event => {
    const currentImage = event.target.alt;
    const ImageHasBeenClicked =
      this.setState ({hasClicked : true});

    //if you click on an image that has already been selected, the game is reset and cards reordered
    if (ImageHasBeenClicked) {
      this.setState({
        fish: this.state.images.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        score: 0
      });
      this.setState({
        message : "You lose. Play again?",
      })
    } else {
  this.setState(
    {
      images: this.state.images.sort(function (a, b) {
        return 0.5 - Math.random();
      }),
      clickedImages: this.state.clicked = true
    })
    this.setState({
      score: this.state.score + 1
    })
    }
  }

//if you click on an available image, your score is increased and cards reordered


   // generateimages = () =>  {
  // images.map((image) => (
  //   <ImageHolder
  //     key={this.images.id}
  //     hasClick={this.images.clicked}
  //     id={this.images.id}
  //     name={this.images.name}
  //     image={this.images.imageLink}
  //   />
  // ))
//}


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
            <div key={images.id}>
              <ImageHolder
              key={images.id}
                hasClick={images.clicked}
                id={imagess.id}
                name={images.name}
                image={images.imageLink}
              />
            </div> 
            )
          }) */}

        <div className="wrapper">
        {this.state.images.map(images => (
          <ImageHolder
            key = {images.id}
            hasClick = {this.images.clicked}
            id = {images.id}
            name = {images.name}
            image = {images.imageLink} 
            />
          ))}
          </div>
            </div>
    );
  }
}

export default App;
