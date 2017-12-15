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
        <Navbar $={$} reRender={""} Axios={axios} PerfilFb={this.state.PerfilFb} />
        <Controlador name={this.state.PerfilFb.name} referencia={this} />
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
  // console.log(ref.state.PerfilFb.name, "*********");
  return ref.state.PerfilFb.name ? "hide" : "show"
}
const responseFacebook = (response, referencia) => {
  referencia.setState({ PerfilFb: response })
  // console.log(referencia.state.PerfilFb, "logeado");
  // console.log(FacebookLogin)
}

const Controlador = ({ name, referencia }) => {
  const isLoggedIn = name;
  // console.log(props, referencia)
  if (name) {
    return <Preguntas $={$} cambiarVista={referencia.CambiarVista} axios={axios}/>;
  }
  return <div></div>
  // return <FacebookLogin
  //   appId="127302757926876"
  //   autoLoad={true}
  //   fields="name,email,picture"
  //   // onClick={componentClicked}
  //   ref={referencia}
  //   callback={(res) => responseFacebook(res, referencia)} />
}
export default App;
