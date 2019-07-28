import React, { Component } from 'react';
import './SwatchHome.css';
import axios from 'axios';

class SwatchHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      swatches: [],
    };
  };

  // Async/Await Function: Runs upon Component load. It runs our 'getSwatches' function to display all the current swatches.
  async componentDidMount() {
    try {
      this.timer = setTimeout(() => {}, 1000);
      await this.getSwatches();
    } catch (error) {
      console.log(error)
    }
  }

  // Async/Await Function: Retreives all 'swatches' from our API.
  getSwatches = async () => {
    await axios.get(`/api/1.0/swatches`)
    .catch(error => {
      console.warn(error);
    })
    .then(response => {
      this.setState({
        swatches: response.data.results
      })
    })
  };

  render() {
    let swatchDisplay;
    if (this.state.swatches.length >= 1) {
      swatchDisplay = (
        <div id="homeBox">
          <p>{this.state.swatches[0].hex1}</p>
        </div> // End Display
      )
    } else {
      // Failure to load Swatches from API will offer a button in rare cases.
      swatchDisplay = (
        <div className="homeBox">
          <button
            className="homeText"
            onClick={this.getSwatches}>
            Get Swatches From API?
          </button>
        </div>
      )
    }
    return (
      <div id="homeContainer">
        <h1 className="homeBox homeHeader">Hello World!</h1>
        <p className="homeBox homeText">This is the SwatchHome page.</p>
        {swatchDisplay}
      </div>
    );
  }
};

export default SwatchHome;
