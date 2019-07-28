import React, { Component } from 'react';
import './SwatchSidebar.css';

class SwatchSidebar extends Component {
  render() {
    return (
      <div id="swatchSidebarContainer">
        <div id="swatchSidebarRandomContainer">
          <div className="sidebarRandom">Random Color</div>
        </div>
        <div id="swatchSidebarColorsContainer">
          <div className="sidebarColor sbcRed">Red</div>
          <div className="sidebarColor sbcOrange">Orange</div>
          <div className="sidebarColor sbcYellow">Yellow</div>
          <div className="sidebarColor sbcGreen">Green</div>
          <div className="sidebarColor sbcBlue">Blue</div>
          <div className="sidebarColor sbcPurple">Purple</div>
          <div className="sidebarColor sbcBrown">Brown</div>
          <div className="sidebarColor sbcGray">Gray</div>
        </div>
      </div>
    );
  }
};

export default SwatchSidebar;
