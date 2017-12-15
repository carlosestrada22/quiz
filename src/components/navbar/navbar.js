import React, { Component } from 'react';
import Sidenav from '../sidenav/sidenav.js';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div id="navbar" className="navbar ">
                <ul id="dropdown1" className="dropdown-content">
                    {/* <li><a href="#!" onClick={this.props.reRender}>Reiniciar</a></li>
                    <li><a href="#!" onClick={() => nuevaVentana(this.props.Axios)}>facebook</a></li>
                    <li className="divider"></li>
                    <li><a href="#!" onClick={() => loguear(this.props.Axios)}>Axios</a></li> */}
                </ul>
                <nav className="blue darken-3">
                    <div className="nav-wrapper">
                        <div className="show-on-medium-and-up">
                            <Sidenav $={this.props.$} PerfilFb={this.props.PerfilFb}/>
                        </div>
                        <a href="#!" className="brand-logo center">RAPEM</a>
                        {/* <ul className="right ">
                            <li>
                                <a className="dropdown-button" href="#!" data-activates="dropdown1">
                                    <i className="material-icons right">more_vert</i>
                                </a>
                            </li>
                        </ul> */}
                    </div>
                </nav>
            </div>

        )
    }
}
const loguear = (axios) => {
    axios.get(`http://${window.location.hostname}:3000/test`, {withCredentials: true})
        .then(res => {
            // console.log(res)
        });
}

const nuevaVentana = (axios) => {
    axios.get(`http://${window.location.hostname}:3000/auth/facebook`, {withCredentials: true})
        .then(res => {
            // console.log(res)
        });
}
export default Navbar