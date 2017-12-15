import React, { Component } from 'react';
import './sidenav.css'
class Sidenav extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        // Initialize collapse button

        this.props.$(".button-collapse").sideNav();
        // Initialize collapsible (uncomment the line below if you use the dropdown variation)
        //$('.collapsible').collapsible();
    }
    render() {
        return (
            <div id="sidenav" className="barra-lateral">
                <ul id="slide-out" className="side-nav">
                    <li>
                        <div className="user-view">
                            <a href="#!user">  <img src={getUrlImg(this.props.PerfilFb)} data-reactid=".0.0" /></a>
                        </div>
                    </li>
                    <li>{this.props.PerfilFb.name}</li>
                    <li><div className="divider"></div></li>
                    <li>{this.props.PerfilFb.email}</li>
                </ul>
                <a id="btn-barra-lateral" href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
        )
    }
}
const getUrlImg = (perfil) => {
    return perfil.picture ? perfil.picture.data.url : ""
}
export default Sidenav