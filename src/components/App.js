import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { wordToGuess: '' };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.addWordToGuess = this.addWordToGuess.bind(this);
  }

  updateInputValue(e) {
    this.setState({
      wordToGuess: e.target.value
    });
  }

  addWordToGuess(e) {
    e.preventDefault();
    this.refs.wordToGuess.reset();
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
            />
            <button type="button" onClick={this.addWordToGuess}>
              Add
            </button>
          </form>
        </div>
        <div className="guessing">
          <form>
            <input type="text" placeholder="Try to guess !" />
            <button />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
