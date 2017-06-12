import React from 'react';
import './Tile.css';

const Tile = (props) => {
  return (
    <div>
      {
        props.boardSize.map(size => {
          return <div className="tile"></div>
        })
      }
    </div>
  );
}

export default Tile;
