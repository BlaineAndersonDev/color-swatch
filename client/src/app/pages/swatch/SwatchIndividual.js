import React, { Component } from 'react';
import './SwatchIndividual.css';

class SwatchIndividual extends Component {
  render() {
    let hexStyle3 = {
      background: this.props.swatch.hex3
    }


    return (
      <div id="swatchIndvContainer">

          <div className="swatchIndvColorDisplay" style={hexStyle3}>
          </div>
          <div className="swatchIndvColorTextContainer">
            <p className="swatchIndvColorText">Cinque Terre</p>
          </div>

      </div>
    );
  }
};

export default SwatchIndividual;
