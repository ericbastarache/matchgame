import React from 'react';
import './Tile.css';

const Tile = (props) => {
  return (
    <div className="tile">{props.tilenumber}</div>
  );
}

export default Tile;
