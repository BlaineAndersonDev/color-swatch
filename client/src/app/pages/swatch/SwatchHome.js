import React, { Component } from 'react';
import './SwatchHome.css';
import axios from 'axios';
import SwatchList from './SwatchList.js';
import SwatchSidebar from './SwatchSidebar.js';
import SwatchDetail from './SwatchDetail.js';

class SwatchHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      blank: null,
      detailViewToggled: false,
      detailViewSelectedSwatch: null,
      category: null
    };
  };

  handleCategorySelection = async (event, category) => {
    await this.setState({
      category: category
    })
  };

  handleSwatchSelection = async (swatchId) => {
    await this.getSwatchDetail(swatchId)
  };

  handleSwatchClear = async () => {
    await this.setState({
      detailViewToggled: false,
      detailViewSelectedSwatch: null
    })
  };

  // Async/Await Function: Retreives all 'swatches' from our API.
  getSwatchDetail = async (swatchId) => {
    await axios.get(`/api/1.0/swatches/${swatchId}`, null)
    .catch(error => {
      console.warn(error);
    })
    .then(response => {
      this.setState({
        detailViewToggled: true,
        detailViewSelectedSwatch: response.data.results
      })
    })
  };

  render() {
    let viewDisplay;
    if (this.state.detailViewToggled === true) {
      viewDisplay = ( //Detail View should be displayed
          <SwatchDetail
            swatch={this.state.detailViewSelectedSwatch}
            handleSwatchClear={this.handleSwatchClear}
          />
      ) // End Display
    } else { //List View should be displayed
      viewDisplay = (
        <div id="SwatchHomeListContainer">
          <SwatchList
            handleSwatchSelection={this.handleSwatchSelection}
            category={this.state.category}
          />
        </div> // End Display
      )
    }

    let sidebarDisplay = (
      <div id="SwatchHomeSidebarContainer">
        <SwatchSidebar
          handleCategorySelection={this.handleCategorySelection}
        />
      </div> // End Display
    )

    return (
      <div id="swatchHomeContainer">
        {sidebarDisplay}
        {viewDisplay}
      </div>
    );
  }
};

export default SwatchHome;
