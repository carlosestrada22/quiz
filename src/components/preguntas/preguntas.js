import React, { Component } from 'react';
import Pregunta from '../pregunta/pregunta.js'
import './preguntas.css'

class Preguntas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Actual: {
                Pregunta: "",
                Palabra: ""
            },
            Questions: []
        }
    }
    componentDidMount() {
        this.props.axios.get(`http://${window.location.hostname}:3008/questions`)
            .then(res => {
                this.setState({Questions: res.data})
                // console.log(this.state.Questions)
            })
    }
    render() {
        return (
            <div id="preguntas" className="preguntas">
                <Pregunta Preguntas={this.state.Questions} $={this.props.$} cambiarVista={this.props.cambiarVista} />
            </div>
        )
    }
}

export default Preguntas