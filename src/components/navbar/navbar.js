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
                <nav className="blue darken-3">
                    <div className="nav-wrapper">
                        <div className="show-on-medium-and-up">
                            <Sidenav $={this.props.$} PerfilFb={this.props.PerfilFb}/>
                        </div>
                        <a href="#!" className="brand-logo center">RAPEM</a>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Navbar