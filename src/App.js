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
import FacebookLogin from 'react-facebook-login';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      PerfilFb: {}
    }
  }

  render() {
    return (
      <div className="App">
        {/* <Preloader /> */}
        <Navbar $={$} reRender={""} Axios={axios} PerfilFb={this.state.PerfilFb}/>
        <Preguntas $={$} cambiarVista={this.CambiarVista} />
        <FacebookLogin
          appId="127302757926876"
          autoLoad={true}
          fields="name,email,picture"
          // onClick={componentClicked}
          ref={this}
          callback={(res) => responseFacebook(res, this)} />
      </div>
    );
  }
}

const responseFacebook = (response, referencia) => {
  referencia.setState({ PerfilFb: response })
  console.log(referencia.state.PerfilFb);
}
export default App;
