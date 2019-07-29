import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
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
          <span id="nc1">C</span><span id="nc2">o</span><span id="nc3">l</span><span id="nc4">o</span><span id="nc5">r</span><span id="nc6">-Swatch</span>
        </div>
      </div>

      <div className="navBox"></div>

    </div>
    );
  }
}

export default Nav;
