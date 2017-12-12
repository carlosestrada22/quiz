import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar/navbar.js';
import Preloader from './components/preloader/preloader.js'
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/js/cards.js';
import 'materialize-css/js/animation.js';
import 'materialize-css/js/dropdown.js';
import 'materialize-css/js/sideNav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Preloader /> */}
        <Navbar />
      </div>
    );
  }
}

export default App;
