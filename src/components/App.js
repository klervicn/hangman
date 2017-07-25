import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { word: '' };
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(e) {
    this.setState({
      word: e.target.value
    });
  }

  addWord(e) {
    e.preventDefault();
    console.log('Saved word is ' + this.state.word);
  }

  render() {
    return (
      <form onSubmit={this.addWord}>
        <input
          type="text"
          placeholder="Enter a new word"
          onChange={this.updateInputValue}
        />
        <button type="button" onClick={this.addWord}>
          Add
        </button>
      </form>
    );
  }
}

export default App;
