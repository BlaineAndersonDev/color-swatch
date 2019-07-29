import React, { Component } from 'react';
import './SwatchDetail.css';

class SwatchDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedSwatchStyle: null,
      selectedSwatchHex: null
    };
  };

  async componentDidMount() {
    try {
      await this.generateHexStyle(this.props.swatch.hex3);
    } catch (error) {
      console.log(error)
    };
  };

  generateHexStyle = async (hex) => {
    let hexCurrentStyle = { background: hex };
    await this.setState({
      selectedSwatchStyle: hexCurrentStyle,
      selectedSwatchHex: hex
    })
  };

  handleSwatchClear = async () => {
    this.props.handleSwatchClear()
  };

  handleSwatchSelection = async (event, hex) => {
    this.generateHexStyle(hex)
  };

  render() {
    let hexStyle1 = { background: this.props.swatch.hex1 };
    let hexStyle2 = { background: this.props.swatch.hex2 };
    let hexStyle3 = { background: this.props.swatch.hex3 };
    let hexStyle4 = { background: this.props.swatch.hex4 };
    let hexStyle5 = { background: this.props.swatch.hex5 };

    return (
      <div id="swatchDetailContainer">
        <div id="swatchDetailCurrentlySelectedContainer">
          <div id="swatchDetailSelectedColorDisplay" style={this.state.selectedSwatchStyle}></div>
          <div id="swatchDetailSelectedTextContainer">
            <p id="swatchDetailSelectedText">{this.state.selectedSwatchHex}</p>
          </div>
        </div>

        <div id="swatchDetailOptionsContainer">
          <div className="swatchDetailOptionsBox">
            <div onClick={(event) => this.handleSwatchSelection(event, this.props.swatch.hex1)} className="swatchDetailOptionColorDisplay" style={hexStyle1}></div>
            <div className="swatchDetailOptionTextContainer">
              <p className="swatchDetailOptionText">{this.props.swatch.hex1}</p>
            </div>
          </div>
          <div className="swatchDetailOptionsBox">
            <div onClick={(event) => this.handleSwatchSelection(event, this.props.swatch.hex2)} className="swatchDetailOptionColorDisplay" style={hexStyle2}></div>
            <div className="swatchDetailOptionTextContainer">
              <p className="swatchDetailOptionText">{this.props.swatch.hex2}</p>
            </div>
          </div>
          <div className="swatchDetailOptionsBox">
            <div onClick={(event) => this.handleSwatchSelection(event, this.props.swatch.hex3)} className="swatchDetailOptionColorDisplay" style={hexStyle3}></div>
            <div className="swatchDetailOptionTextContainer">
              <p className="swatchDetailOptionText">{this.props.swatch.hex3}</p>
            </div>
          </div>
          <div className="swatchDetailOptionsBox">
            <div onClick={(event) => this.handleSwatchSelection(event, this.props.swatch.hex4)} className="swatchDetailOptionColorDisplay" style={hexStyle4}></div>
            <div className="swatchDetailOptionTextContainer">
              <p className="swatchDetailOptionText">{this.props.swatch.hex4}</p>
            </div>
          </div>
          <div className="swatchDetailOptionsBox">
            <div onClick={(event) => this.handleSwatchSelection(event, this.props.swatch.hex5)} className="swatchDetailOptionColorDisplay" style={hexStyle5}></div>
            <div className="swatchDetailOptionTextContainer">
              <p className="swatchDetailOptionText">{this.props.swatch.hex5}</p>
            </div>
          </div>
        </div>

        <div id="swatchDetailClearContainer">
          <div id="swatchDetailClearButton" onClick={this.handleSwatchClear}>Clear Selection</div>
        </div>
      </div>
    );
  }
};

export default SwatchDetail;
