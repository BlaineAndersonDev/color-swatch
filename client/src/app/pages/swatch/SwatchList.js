import React, { Component } from 'react';
import './SwatchList.css';
import SwatchIndividual from './SwatchIndividual.js';

class SwatchList extends Component {
  render() {
    let listDisplay;
    if (this.props.swatches.length >= 1) {
      listDisplay = (
        <div id="SwatchListBoxContainer">
          {this.props.swatches.map((swatch, index) =>
            <SwatchIndividual
              key={index}
              swatch={swatch}
              handleSwatchSelection={this.props.handleSwatchSelection}
            />
          )}
        </div> // End Display
      )
    };

    let swatchPagination;
    if (this.props.topSwatchId === 1 || this.props.topSwatchId === 0) {
      swatchPagination = (
        <div id="swatchPaginationContainer">
          <div className="swatchPaginationButton" onClick={(event) => this.props.page(event, false)}>Next </div>
        </div>
      ) // End Display
    } else if (this.props.bottomSwatchId >= 24) {
      swatchPagination = (
        <div id="swatchPaginationContainer">
          <div className="swatchPaginationButton" onClick={(event) => this.props.page(event, true)}>Previous </div>
        </div>
      ) // End Display
    };

    return (
      <div id="swatchListContainer">
        {listDisplay}
        {swatchPagination}
      </div>
    );
  }
};

export default SwatchList;
