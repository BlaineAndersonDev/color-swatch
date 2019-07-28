import React, { Component } from 'react';
import './SwatchHome.css';
import axios from 'axios';
import SwatchList from './SwatchList.js';
import SwatchSidebar from './SwatchSidebar.js';

class SwatchHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      blank: null,
    };
  };

  render() {
    let listDisplay = (
      <div id="SwatchHomeListContainer">
        <SwatchList />
      </div> // End Display
    )

    let sidebarDisplay = (
      <div id="SwatchHomeSidebarContainer">
        <SwatchSidebar />
      </div> // End Display
    )

    return (
      <div id="swatchHomeContainer">
        {sidebarDisplay}
        {listDisplay}
      </div>
    );
  }
};

export default SwatchHome;
