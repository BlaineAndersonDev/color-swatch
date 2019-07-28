import React, { Component } from 'react';
import './SwatchIndividual.css';

class SwatchIndividual extends Component {
  render() {
    return (
      <div id="homeContainer">
        <button className="homeBox">
          <div>{this.props.swatch.hex1}</div>
          <div>{this.props.swatch.hex2}</div>
          <div>{this.props.swatch.hex3}</div>
          <div>{this.props.swatch.hex4}</div>
          <div>{this.props.swatch.hex5}</div>
        </button>
      </div>
    );
  }
};

export default SwatchIndividual;
