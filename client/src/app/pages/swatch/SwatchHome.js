import React, { Component } from 'react';
import './SwatchHome.css';
import axios from 'axios';
import SwatchList from './SwatchList.js';
import SwatchSidebar from './SwatchSidebar.js';
import SwatchDetail from './SwatchDetail.js';
import SwatchNav from './SwatchNav.js';

class SwatchHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      detailViewToggled: false,
      detailViewSelectedSwatch: null,
      category: null,
      swatches: [],
      topSwatchId: 1,
      bottomSwatchId: 12
    };
  };

  // Async/Await Function: Runs upon Component load. It runs our 'getAllSwatches' function to display all the current swatches.
  async componentDidMount() {
    if (this.category) {
      try {
        await this.handleCategorySelection(this.specificSwatchCategory);
      } catch (error) { console.log(error) }
    } else {
      try {
        this.timer = setTimeout(() => {}, 1000);
        await this.getAllSwatches(this.state.topSwatchId, this.state.bottomSwatchId, true);
      } catch (error) { console.log(error) }
    };
  };

  handleSwatchClear = async () => {
    await this.setState({
      detailViewToggled: false,
      detailViewSelectedSwatch: null
    })
  };

  // Async/Await Function: Retreives all 'swatches' from our API.
  handleSwatchSelection = async (swatchId) => {
    await axios.get(`/api/1.0/swatches/${swatchId}`, null)
    .catch(error => {
      console.warn(error);
    })
    .then(response => {
      this.setState({
        detailViewToggled: false,
        detailViewSelectedSwatch: null
      })
      this.setState({
        detailViewToggled: true,
        detailViewSelectedSwatch: response.data.results
      })
    })
  };

  // Async/Await Function: Retreives all 'swatches' from our API.
  getAllSwatches = async (top, bottom, previous) => {
    await axios.get(`/api/1.0/swatches/paginate`, {
      params: {
        newTopSwatchId: top,
        newBottomSwatchId: bottom
      }
    })
    .catch(error => {
      console.warn(error);
    })
    .then(response => {
      this.setState({
        swatches: response.data.results,
        topSwatchId: top,
        bottomSwatchId: bottom,
        detailViewToggled: false,
        detailViewSelectedSwatch: null
      })
    })
  };

  // Async/Await Function: Retreives all specific colored 'swatches' from our API.
  handleCategorySelection = async (event, category) => {
    await axios.get(`/api/1.0/swatches/category`, {
      params: {
        category: category
      }
    })
    .catch(error => {
      console.warn(error);
    })
    .then(response => {
      this.setState({
        swatches: response.data.results,
        topSwatchId: 1,
        bottomSwatchId: 12,
        categoryIsSelected: true,
        detailViewToggled: false,
        detailViewSelectedSwatch: null
      })
    })
  };

  // Async/Await Function: Retreives all 'swatches' from our API.
  page = async (event, previous) => {
    if (previous === true) { //previous
      const newTopSwatchId = this.state.topSwatchId - 12;
      const newBottomSwatchId = this.state.bottomSwatchId - 12;
      this.getAllSwatches(newTopSwatchId, newBottomSwatchId, previous);
    } else { //next
      const newTopSwatchId = this.state.topSwatchId + 12;
      const newBottomSwatchId = this.state.bottomSwatchId + 12;
      this.getAllSwatches(newTopSwatchId, newBottomSwatchId, previous);
    };
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
            swatches={this.state.swatches}
            topSwatchId={this.state.topSwatchId}
            bottomSwatchId={this.state.bottomSwatchId}
            page={this.page}
            category={this.category}
          />
        </div> // End Display
      )
    }

    let sidebarDisplay = (
      <div id="SwatchHomeSidebarContainer">
        <SwatchSidebar
          handleCategorySelection={this.handleCategorySelection}
          getAllSwatches={this.getAllSwatches}
          handleSwatchSelection={this.handleSwatchSelection}
        />
      </div> // End Display
    )

    return (
      <div id="swatchDisplayContainer">
        <SwatchNav />
        <div id="swatchHomeContainer">
          {sidebarDisplay}
          {viewDisplay}
        </div>
      </div>
    );
  }
};

export default SwatchHome;
