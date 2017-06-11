import React, { Component } from 'react';
import Header from './components/Header/Header';
import Board from './components/Board/Board';

class App extends Component {
  render() {
    return (
      <div>
        <Header headerText="Match Game"/>
        <Board />
      </div>
    );
  }
}

export default App;
