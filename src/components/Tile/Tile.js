import React from 'react';
import './Tile.css';

const Tile = (props) => {
  return (
    <div className="col-md-4 no-pad">
      <div className="tile" onClick={props.handleClick}>
        {
          props.tilenumber
        }
      </div>
    </div>
  );
}

export default Tile;
