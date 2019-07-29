import React, { Component } from 'react';
import './SwatchSidebar.css';

class SwatchSidebar extends Component {

  handleCategory = async (event, category) => {
    this.props.handleCategorySelection(event, category)
  };

  render() {
    return (
      <div id="swatchSidebarContainer">
        <div id="swatchSidebarRandomContainer">
          <div className="sidebarRandom">Random Color</div>
        </div>
        <div id="swatchSidebarColorsContainer">
          <div onClick={(event) => this.handleCategory(event, 'red')} className="sidebarColor sbcRed">Red</div>
          <div onClick={(event) => this.handleCategory(event, 'orange')} className="sidebarColor sbcOrange">Orange</div>
          <div onClick={(event) => this.handleCategory(event, 'yellow')} className="sidebarColor sbcYellow">Yellow</div>
          <div onClick={(event) => this.handleCategory(event, 'green')} className="sidebarColor sbcGreen">Green</div>
          <div onClick={(event) => this.handleCategory(event, 'blue')} className="sidebarColor sbcBlue">Blue</div>
          <div onClick={(event) => this.handleCategory(event, 'purple')} className="sidebarColor sbcPurple">Purple</div>
          <div onClick={(event) => this.handleCategory(event, 'brown')} className="sidebarColor sbcBrown">Brown</div>
          <div onClick={(event) => this.handleCategory(event, 'gray')} className="sidebarColor sbcGray">Gray</div>
        </div>
      </div>
    );
  }
};

export default SwatchSidebar;
