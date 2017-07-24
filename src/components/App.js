import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { word: '' };
  }

  setWord(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <form onSubmit={this.setWord}>
        <input
          type="text"
          placeholder="Enter a new word"
          onChange={this.setWord}
        />
        <button type="button" onClick={this.setWord}>
          Add
        </button>
      </form>
    );
  }
}

export default App;
