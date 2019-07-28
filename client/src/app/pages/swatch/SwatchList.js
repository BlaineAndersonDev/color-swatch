import React, { Component } from 'react';
import './SwatchList.css';
import axios from 'axios';
import SwatchIndividual from './SwatchIndividual.js';

class SwatchList extends Component {
  constructor(props){
    super(props);
    this.state = {
      swatches: [],
      topSwatchId: 1,
      bottomSwatchId: 12
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
    await axios.get(`/api/1.0/swatches/test`, {
      params: {
        newTopSwatchId: top,
        newBottomSwatchId: bottom
      }
    })
    .catch(error => {
      console.warn(error);
    })
    .then(response => {
      this.setState({
        swatches: response.data.results,
        topSwatchId: top,
        bottomSwatchId: bottom
      })
    })
  };

  // Async/Await Function: Retreives all 'swatches' from our API.
  page = async (event, previous) => {
    if (previous === true) { //previous
      const newTopSwatchId = this.state.topSwatchId - 12;
      const newBottomSwatchId = this.state.bottomSwatchId - 12;
      this.getSwatches(newTopSwatchId, newBottomSwatchId, previous);
    } else { //next
      const newTopSwatchId = this.state.topSwatchId + 12;
      const newBottomSwatchId = this.state.bottomSwatchId + 12;
      this.getSwatches(newTopSwatchId, newBottomSwatchId, previous);
    };
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

    let swatchPagination;
    if (this.state.topSwatchId === 1 || this.state.topSwatchId === 0) {
      swatchPagination = (
        <div id="SwatchPaginationContainer">
          <button onClick={(event) => this.page(event, false)}>Next </button>
        </div>
      ) // End Display
    } else if (this.state.bottomSwatchId >= 24) {
      swatchPagination = (
        <div id="SwatchPaginationContainer">
          <button onClick={(event) => this.page(event, true)}>Previous </button>
        </div>
      ) // End Display
    }

    return (
      <div id="swatchListContainer">
        {swatchDisplay}
        {swatchPagination}
      </div>
    );
  }
};

export default SwatchList;
