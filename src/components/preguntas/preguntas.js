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
            },
            Questions: []
        }
    }
    componentDidMount() {
        this.props.axios.get(`http://${window.location.hostname}:3008/questions`)
            .then(res => {
                // console.log(res)
                this.setState({Questions: res.data})

                console.log(this.state.Questions)
            })
    }
    render() {
        return (
            <div id="preguntas" className="preguntas">
                <Pregunta Preguntas={this.state.Questions} Avanzar={() => Avanzar(this)} $={this.props.$} cambiarVista={this.props.cambiarVista} />
            </div>
        )
    }
}

const Avanzar = (ref) => {
    // console.log(Index, Questions.length)
    if (Index < ref.state.Questions.length - 1)
        Index++

    // this.setState({Actual : Questions[Index]})
    ActualPregunta = ref.state.Questions[Index]
    // console.log("AVANZANDO ALV", ActualPregunta)
}

export default Preguntas