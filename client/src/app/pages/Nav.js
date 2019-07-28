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

      <div className="navBox"></div>

      <div className="navBox"></div>

    </div>
    );
  }
}

export default Nav;
