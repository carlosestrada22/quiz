import React, { Component } from 'react';
// import logo from './logo.svg';
import $ from 'jquery'
import Navbar from './components/navbar/navbar.js';
// import Preloader from './components/preloader/preloader.js'
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
        <Navbar $={$} reRender={""} Axios={axios} PerfilFb={this.state.PerfilFb} />
        <Controlador name={this.state.PerfilFb.name} referencia={this} User={this.state.PerfilFb}/>
        <div id="login-btn" className={isLoggedIn(this)}>
          <FacebookLogin
            appId="127302757926876"
            autoLoad={true}
            fields="name,email,picture"
            ref={this}
            callback={(res) => responseFacebook(res, this)} />
        </div>
      </div>
    );
  }
}
const isLoggedIn = (ref) => {
  return ref.state.PerfilFb.name ? "hide" : "show"
}
const responseFacebook = (response, referencia) => {
  referencia.setState({ PerfilFb: response })
}

const Controlador = ({ name, referencia, User }) => {
  if (name) {
    return <Preguntas $={$} cambiarVista={referencia.CambiarVista} axios={axios} User={User}/>;
  }
  return <div></div>
}
export default App;
