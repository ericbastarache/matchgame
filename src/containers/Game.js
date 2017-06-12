import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

  checkClicked = () => {

  }

  setClickable () {

  }

  render () {
    return (
      <div>
        <h1 className="text-right">Score: { this.props.game.score }</h1>
        <h3 className="text-right">High Score: { this.props.game.highScore }</h3>
      </div>
    )
  }
}

mapStateToProps = (props) => {
  return props;
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setActiveTile,
    newGame,
    gameOver,
    incrementScore
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
