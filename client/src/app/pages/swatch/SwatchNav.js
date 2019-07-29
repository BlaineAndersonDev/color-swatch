import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SwatchNav.css';

class SwatchNav extends Component {
  render() {
    return (
    <div id="navContainer">

      <div className="navBox logoBox">
        <Link to={'./'} className="navLink">
          <img
            src="images/logo-symbol.svg"
            alt="Helping Humans Logo"
            className="logoIcon"
          />
        </Link>
      </div>

      <div className="navBox">
        <div className="navTitle">
          <p id="nc1">C</p><p id="nc2">o</p><p id="nc3">l</p><p id="nc4">o</p><p id="nc5">r</p><p id="nc6">-Swatch</p>
        </div>
      </div>

      <div className="navBox"></div>

    </div>
    );
  }
}

export default SwatchNav;
