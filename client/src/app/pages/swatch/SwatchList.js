import React, { Component } from 'react';
import './SwatchList.css';
import axios from 'axios';
import SwatchIndividual from './SwatchIndividual.js';

class SwatchList extends Component {
  constructor(props){
    super(props);
    this.state = {
      swatches: [],
      topSwatchId: 13,
      bottomSwatchId: 24
    };
  };

  // Async/Await Function: Runs upon Component load. It runs our 'getSwatches' function to display all the current swatches.
  async componentDidMount() {
    try {
      this.timer = setTimeout(() => {}, 1000);
      await this.getSwatches(this.state.topSwatchId, this.state.bottomSwatchId, true);
    } catch (error) {
      console.log(error)
    }
  }

  // Async/Await Function: Retreives all 'swatches' from our API.
  getSwatches = async (top, bottom, previous) => {
    if (previous === true) {
      await axios.get(`/api/1.0/swatches/previous`, {
        params: {
          topSwatchId: top,
          bottomSwatchId: bottom
        }
      })
      .catch(error => {
        console.warn(error);
      })
      .then(response => {
        this.setState({
          swatches: response.data.results
        })
      })
    } else {
      await axios.get(`/api/1.0/swatches/forward`, {
        params: {
          topSwatchId: top,
          bottomSwatchId: bottom
        }
      })
      .catch(error => {
        console.warn(error);
      })
      .then(response => {
        this.setState({
          swatches: response.data.results
        })
      })
    };
  };

  // Async/Await Function: Retreives all 'swatches' from our API.
  page = async (event, previous) => {
    if (previous) { // User pressed "Previous"
      this.getSwatches(this.state.topSwatchId, this.state.bottomSwatchId, previous);
    } else {
      this.getSwatches(this.state.topSwatchId, this.state.bottomSwatchId, previous);
    }
  };

  render() {
    let swatchDisplay;
    if (this.state.swatches.length >= 1) {
      swatchDisplay = (
        <div id="SwatchListBoxContainer">
          {this.state.swatches.map((swatch, index) =>
            <SwatchIndividual
              key={index}
              swatch={swatch}
            />
          )}
        </div> // End Display
      )
    };

    return (
      <div id="swatchHomeContainer">
        {swatchDisplay}

        <button onClick={(event) => this.page(event, true)}>Previous </button>
        <button onClick={(event) => this.page(event, false)}>Next </button>

      </div>
    );
  }
};

export default SwatchList;
