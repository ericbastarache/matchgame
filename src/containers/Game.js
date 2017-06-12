import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from '../components/Board/Board';
import Tile from '../components/Tile/Tile';

class Game extends Component {
  constructor () {
    super ();
    this.boardsize = 5;
  }

  componentWillMount () {
    this.setClickable();
  }

  componentDidUpdate () {
    this.checkClicked();
  }
}

mapStateToProps = (props) => {
  return props;
}

export default connect(mapStateToProps)(Game);
