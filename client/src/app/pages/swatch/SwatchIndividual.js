import React, { Component } from 'react';
import './SwatchIndividual.css';

class SwatchIndividual extends Component {
  render() {
    let hexStyle1 = {
      background: this.props.swatch.hex1
    }


    return (
      <div id="swatchIndvContainer">

          <div className="swatchIndvColorDisplay" style={hexStyle1}>
          </div>
          <div className="swatchIndvColorTextContainer">
            <p className="swatchIndvColorText">Cinque Terre</p>
          </div>

      </div>
    );
  }
};

export default SwatchIndividual;
