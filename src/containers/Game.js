import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board/Board';
import Tile from '../components/Tile/Tile';

class Game extends Component {
  constructor () {
    super ();
  }

  componentWillMount () {
    this.setClickable();
  }

  componentDidUpdate () {
    this.checkClicked();
  }
}

mapStateToProps = (props) => {
  
}

export default Game;
