import React, { Component } from 'react';
// import logo from './logo.svg';
import $ from 'jquery'
import Navbar from './components/navbar/navbar.js';
import Sidenav from './components/sidenav/sidenav.js';
import Preloader from './components/preloader/preloader.js'
import Preguntas from './components/preguntas/preguntas.js'
import axios from 'axios'
import './App.css';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/js/cards.js';
import 'materialize-css/js/animation.js';
import 'materialize-css/js/dropdown.js';
import 'materialize-css/js/sideNav.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Vista: 1
    }
  }
  CambiarVista(view) {
    console.log(this)
    this.setState({ Vista: view })
  }
  render() {
    return (
      <div className="App">
        {/* <Preloader /> */}
        <Navbar $={$} reRender={""} Axios={axios}/>
        <Preguntas $={$} cambiarVista={this.CambiarVista} />
      </div>
    );
  }
}

export default App;
