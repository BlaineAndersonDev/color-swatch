import React, { Component } from 'react';
import './SwatchIndividual.css';

class SwatchIndividual extends Component {
  render() {
    return (
      <div id="homeContainer">
        <p className="homeBox homeText">This is the SwatchIndividual page.</p>
        <div>{this.props.swatch.id}</div>
        <div>{this.props.swatch.category}</div>
        <div>{this.props.swatch.hex1}</div>
        <div>{this.props.swatch.hex2}</div>
        <div>{this.props.swatch.hex3}</div>
        <div>{this.props.swatch.hex4}</div>
        <div>{this.props.swatch.hex5}</div>
      </div>
    );
  }
};

export default SwatchIndividual;
