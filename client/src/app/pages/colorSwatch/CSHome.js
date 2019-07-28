import React, { Component } from 'react';
import './CSHome.css';

class Home extends Component {
  render() {
    return (
      // I tend to put the entire 'Component' into a single 'Container'. This allows me to control everything within the container easily.
      <div id="homeContainer">
        <h1 className="homeBox homeHeader">Hello World!</h1>
        <p className="homeBox homeText">This is the CSHome page.</p>
      </div>
    );
  }
}

export default Home;
