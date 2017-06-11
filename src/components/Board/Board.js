import React, { Component } from 'react';
import Tile from '../Tile/Tile';
import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-2">
            <div className="row">
              <Tile />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Board;
