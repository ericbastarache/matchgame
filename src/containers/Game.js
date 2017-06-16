import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Board from '../components/Board/Board';
import { newGame, getActiveTile, setActiveTile, gameOver, incrementScore } from '../actions';

class Game extends Component {
  constructor () {
    super ();
    this.boardsize = 9;
  }

  componentWillMount () {
    this.setClickable();
  }

  componentDidUpdate () {
    this.startGame();
    this.checkClicked();
  }

  checkClicked () {
    this.props.getActiveTile();
  }

  setClickable () {
    //this.props.setActiveTile();
  }

  startGame = () => {
    console.log(this.props);
    if(this.props.game.lost) return false;
    clearInterval(this.tileInterval);
    this.tileInterval = setInterval(() => {
      this.props.setActiveTile(this.props.tilenumber);
    }, 2000);
  }

  render () {
    return (
      <div>
        <button className="start-button" onClick={this.startGame}>Start Game!</button>
        <h1 className="text-center">Score: { this.props.game.score }</h1>
        <h3 className="text-center">High Score: { this.props.game.highScore }</h3>
        <Board />
      </div>
    )
  }
}

const mapStateToProps = (props) => {
  return props;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setActiveTile,
    getActiveTile,
    newGame,
    gameOver,
    incrementScore
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
