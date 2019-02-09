import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from './components/Jumbotron';
import GameCard from './components/GameCard';
import fruits from "./fruits.json";

class App extends Component {

  state = {
    userScore: 0,
    topScore: 0,
    fruits,
    selectedFruits: [],
    message: "Let‘s play!"
  }

  selectFruit = (id) => {
    let selectedFruits = this.state.selectedFruits;
    if (selectedFruits.includes(id)) {
      let newScore = 0;
      this.setState({
        userScore: newScore,
        message: "Sorry, try again.",
        selectedFruits: []
      });
    } else {
      selectedFruits.push(id);
      let newScore = this.state.userScore + 1;
      const newTopScore = () => (newScore > this.state.topScore) ? this.state.topScore + 1 : this.state.topScore;
      this.setState({
        userScore: newScore,
        message: "Good!",
        topScore: newTopScore()
      });
    };
  };

  shuffleFruit = () => {
    let fruitArray = this.state.fruits;
    function shuffle(array) {
      var i = 0,
        j = 0,
        temp = null
      for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      };
    }
    shuffle(fruitArray);
    this.setState({
      fruits: fruitArray
    });
  };

  handleClick = (id) => {
    this.selectFruit(id);
    this.shuffleFruit();
  }

  render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
          userScore={this.state.userScore}
          topScore={this.state.topScore}
        />
      <Jumbotron />
        <div className="container">
          <div className="row">
              {this.state.fruits.map(fruit => (
                  <GameCard
                    key={fruit.id}
                    id={fruit.id}
                    name={fruit.name}
                    image={fruit.image}
                    select={this.handleClick}
                  />
              ))}
          </div>
        </div>
      </div>
    );
  }
};

export default App;
