import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { wordToGuess: '', inputValue: '', guess: '', nbTry: 0 };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.addWordToGuess = this.addWordToGuess.bind(this);
    this.updateInputGuessValue = this.updateInputGuessValue.bind(this);
    this.guessWord = this.guessWord.bind(this);
  }

  updateInputValue(e) {
    this.setState({
      wordToGuess: e.target.value,
      inputValue: e.target.value
    });
  }

  addWordToGuess(e) {
    e.preventDefault();
    this.setState({
      inputValue: ''
    });
  }

  updateInputGuessValue(e) {
    this.setState({
      guess: e.target.value
    });
  }

  guessWord(e) {
    e.preventDefault();
    console.log(this.state.guess + ' ' + this.state.wordToGuess);

    if (this.state.guess === this.state.wordToGuess) {
      console.log("C'est bon gg");
      this.setState({
        nbTry: 0
      });
    } else {
      {
        // Modifier le state en fonction du state
        this.setState(state => ({ nbTry: state.nbTry + 1 }));
        console.log('Nope essaie encore. Essai n° ' + this.state.nbTry);
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="wordToGuess">
          <form onSubmit={this.addWordToGuess}>
            <input
              type="text"
              placeholder="Enter a word to guess"
              onChange={this.updateInputValue}
              ref="wordToGuess"
              value={this.state.inputValue}
            />
            <button onClick={this.addWordToGuess}>Add</button>
          </form>
        </div>
        <div className="guessing">
          <form onSubmit={this.guessWord}>
            <input
              type="text"
              placeholder="Try to guess !"
              onChange={this.updateInputGuessValue}
            />
            <button onClick={this.guessWord}>Try</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
