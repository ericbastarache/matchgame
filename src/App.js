import React, { Component } from 'react';
import Header from './components/Header/Header';
import Game from './containers/Game';

class App extends Component {
  render() {
    return (
      <div>
        <Header headerText="Match Game"/>
        <Game />
      </div>
    );
  }
}

export default App;
