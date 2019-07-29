import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SwatchHome from './pages/swatch/SwatchHome.js';
import Nav from './pages/Nav.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="appContainer">

          <div id="appNavigation">
            <Nav />
          </div>

          <div id="appBody">
            <Route exact path='/' component={SwatchHome}/>
          </div>

        </div>
      </Router>

    );
  }
}

export default App;
