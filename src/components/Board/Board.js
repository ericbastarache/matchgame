import React from 'react';
import Tile from '../Tile/Tile';
import '../Tile/Tile.css';
import './Board.css';

const Board = (props) => {
  let tileArr = [1,2,3,4,5,6,7,8,9];
  return (
    <div className="container">
      {
        tileArr.map(n => {
          return <Tile key={n} tilenumber={n} handleClick={(e) => console.log(e.target.innerHTML)}/>
        })
      }
    </div>
  );
}

export default Board;
