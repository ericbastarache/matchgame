import React from 'react';
import './Tile.css';

const Tile = (props) => {
  return (
    <div>
      {
        props.boardSize.map((size, index) => {
          return <div className="tile" key={index}></div>
        })
      }
    </div>
  );
}

export default Tile;
