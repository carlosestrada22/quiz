import React, { Component } from 'react';
import Pregunta from '../pregunta/pregunta.js'
import './preguntas.css'

let Questions = [
    {
        Id: 0,
        Pregunta: "Para ti ¿Qué tan importante es la palabra?",
        Palabra: "Quebradita"
    },
    {
        Id: 1,
        Pregunta: "Para ti ¿Qué tan fiable es la palabra?",
        Palabra: "Quesadilla"
    },
    {
        Id: 2,
        Pregunta: "Para ti ¿Qué tan mala es la palabra?",
        Palabra: "Mouse"
    },
    {
        Id: 3,
        Pregunta: "Para ti ¿Qué tan buena es la palabra?",
        Palabra: "Bocina"
    },
    {
        Id: 4,
        Pregunta: "Para ti ¿Qué tan terrible es la palabra?",
        Palabra: "Sandía"
    },
    {
        Id: 5,
        Pregunta: "Para ti ¿Qué tan amenazante es la palabra?",
        Palabra: "Taco"
    },
]
let ActualPregunta = Questions[0]
let Index = 0

class Preguntas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Actual: {
                Pregunta: "",
                Palabra: ""
            }
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div id="preguntas" className="preguntas">
                {
                    Questions.map(x => {
                        console.log(x)
                    })
                }
                <Pregunta Preguntas={Questions} Avanzar={Avanzar} $={this.props.$} cambiarVista={this.props.cambiarVista}/>
            </div>
        )
    }
}

const Avanzar = () => {
    console.log(Index, Questions.length)
    if (Index < Questions.length - 1)
        Index++

    // this.setState({Actual : Questions[Index]})
    ActualPregunta = Questions[Index]
    console.log("AVANZANDO ALV", ActualPregunta)
}

export default Preguntas