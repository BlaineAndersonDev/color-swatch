import React, { Component } from 'react';
import './SwatchDetail.css';

class SwatchDetail extends Component {

  handleSwatchClear = async () => {
    this.props.handleSwatchClear()
  };

  render() {
    let hexStyle1 = {
      background: this.props.swatch.hex1
    };
    let hexStyle2 = {
      background: this.props.swatch.hex2
    };
    let hexStyle3 = {
      background: this.props.swatch.hex3
    };
    let hexStyle4 = {
      background: this.props.swatch.hex4
    };
    let hexStyle5 = {
      background: this.props.swatch.hex5
    };

    return (
      <div id="swatchDetailContainer">

          <div className="swatchDetailSelectionDisplay" style={hexStyle3}>
          </div>
          <div className="swatchDetailColorTextContainer">
            <p className="swatchDetailColorText">{this.props.swatch.hex3}</p>
          </div>

          <div id="swatchPaginationContainer">
            <div className="swatchPaginationButton" onClick={this.handleSwatchClear}>Clear Selection</div>
          </div>
      </div>
    );
  }
};

export default SwatchDetail;
