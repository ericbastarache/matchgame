import React, { Component } from 'react';
import Tile from '../Tile/Tile';
import './Board.css';

const Board = (props) => {
  return (
    <div>
      {
        props.boardsize.map((size, index) => {
          return <Tile number={size} key={index} />
        })
      }
    </div>
  )
}

export default Board;
