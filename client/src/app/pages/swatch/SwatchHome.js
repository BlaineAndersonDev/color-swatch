import React, { Component } from 'react';
import './SwatchHome.css';
import axios from 'axios';
import SwatchIndividual from './SwatchIndividual.js';
import SwatchSidebar from './SwatchSidebar.js';

class SwatchHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      swatches: [],
    };
  };

  // Async/Await Function: Runs upon Component load. It runs our 'getSwatches' function to display all the current swatches.
  async componentDidMount() {
    try {
      this.timer = setTimeout(() => {}, 1000);
      await this.getSwatches();
    } catch (error) {
      console.log(error)
    }
  }

  // Async/Await Function: Retreives all 'swatches' from our API.
  getSwatches = async () => {
    await axios.get(`/api/1.0/swatches`)
    .catch(error => {
      console.warn(error);
    })
    .then(response => {
      this.setState({
        swatches: response.data.results
      })
    })
  };

  render() {
    let swatchDisplay;
    if (this.state.swatches.length >= 1) {
      swatchDisplay = (
        <div id="SwatchHomeBoxContainer">
          {this.state.swatches.map((swatch, index) =>
            <SwatchIndividual
              key={index}
              swatch={swatch}
            />
          )}
        </div> // End Display
      )
    };

      let sidebarDisplay = (
        <div id="SwatchHomeSidebarContainer">
          <SwatchSidebar />
        </div> // End Display
      )

    return (
      <div id="swatchHomeContainer">
        {sidebarDisplay}
        {swatchDisplay}
      </div>
    );
  }
};

export default SwatchHome;
