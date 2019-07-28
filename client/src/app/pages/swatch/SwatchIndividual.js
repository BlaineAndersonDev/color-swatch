import React, { Component } from 'react';
import './SwatchIndividual.css';

class SwatchIndividual extends Component {

  handleSwatchSelection = async () => {
    this.props.handleSwatchSelection(this.props.swatch.swatchId)
  };

  render() {
    let hexStyle3 = {
      background: this.props.swatch.hex3
    }

    return (
      <div id="swatchIndvContainer">
        <div onClick={this.handleSwatchSelection} className="swatchIndvColorDisplay" style={hexStyle3}>
        </div>
        <div className="swatchIndvColorTextContainer">
          <p className="swatchIndvColorText">{this.props.swatch.hex3}</p>
        </div>
      </div>
    );
  }
};

export default SwatchIndividual;
