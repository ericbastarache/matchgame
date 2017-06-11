import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <h1 className="text-center">{props.headerText}</h1>
  )
}

export default Header;
