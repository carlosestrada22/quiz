import React, { Component } from 'react';
import './pregunta.css'
import ModalInicial from '../modal-inicial/modal-inicial.js'
import Resultado from '../results/results.js'
// import ModalInicial from '..'
class Pregunta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Pregunta: "",
            Palabra: "",
            Questions: [{
                Pregunta: "",
                Palabra: ""
            }],
            Actual: {
                Pregunta: "",
                Palabra: ""
            },
            EnCurso: 0

        }
    }
    componentDidMount() {
        this.setState({ Questions: this.props.Preguntas })
        this.setState({ Actual: this.state.Questions.shift() })
        console.log(this.state)
    }
    render() {
        // this.setState({Pregunta: this.props.Pregunta.Pregunta})

        return (
            <div id="pregunta" className="pregunta container">
                {
                    this.state.EnCurso === 2 ? <Resultado $={this.props.$}/> : ""
                }
                <ModalInicial $={this.props.$} Iniciar={Aumentar} referencia={this} />
                <div className="row" id="row-preguntas">
                    <div className="col s12 m12 l12 xl12">
                        <div className="card">
                            <div className="card-image">
                                <img src="images/sample-1.jpg" />
                                <span className="card-title"></span>
                            </div>
                            <div className="card-content">
                                <p>{this.state.Actual.Pregunta}</p>
                            </div>
                            <div className="card-action">
                                <h5 className="center-align">{this.state.Actual.Palabra}</h5>
                            </div>
                            <div className="card-action">
                                <div className="row">
                                    <div className="col s12 m12 l12 xl12">
                                        <IconoRespuesta cadena={"sentiment_very_dissatisfied"} Valor={1} referencia={this} />
                                        <IconoRespuesta cadena={"sentiment_dissatisfied"} Valor={2} referencia={this} />
                                        <IconoRespuesta cadena={"sentiment_neutral"} Valor={3} referencia={this} />
                                        <IconoRespuesta cadena={"sentiment_satisfied"} Valor={4} referencia={this} />
                                        <IconoRespuesta cadena={"sentiment_very_satisfied"} Valor={5} referencia={this} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const IconoRespuesta = ({ cadena, Valor, referencia }) => {
    return (
        <div onClick={() => Aumentar(referencia, Valor)} className="col s2">
            <a className="waves-effect waves-light btn btn-large btn-responder">
                <i className="material-icons large">{cadena.toString()}</i>
            </a>
        </div>
    )
}

const Aumentar = (ref, Valor) => {
    console.log(ref.state.Actual, Valor)
    if (ref.state.Questions.length) {
        console.log(ref.state)
        ref.setState({ Actual: ref.state.Questions.shift() })
    } else {
        console.log("final", ref)
        document.querySelector("#row-preguntas").classList.add("hide")
        ref.setState({ EnCurso: 2 })
    }
}
export default Pregunta