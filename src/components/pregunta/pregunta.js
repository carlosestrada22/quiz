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
            EnCurso: 0,
            Bandera: false

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
                    this.state.EnCurso === 2 ? <Resultado $={this.props.$} /> : ""
                }
                <ModalInicial $={this.props.$} Iniciar={Aumentar} referencia={this} flag={this.state.Bandera} />
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
                                    <div className="col s12 m12 l12 xl12 botones-responder">
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
        <a onClick={() => Aumentar(referencia, Valor)} className="waves-effect waves-light btn btn-large btn-responder">
            <i className="material-icons large">{cadena.toString()}</i>
        </a>
    )
}
const Begin = (ref, valor) => {
    Aumentar(ref, valor)
}
const Aumentar = (ref, Valor) => {
    if (ref.state.Questions.length) {
        ref.setState({ Actual: ref.state.Questions.shift() })
    } else {
        if (ref.state.Bandera) {
            document.querySelector("#row-preguntas").classList.add("hide")
            ref.setState({ EnCurso: 2 })
        }
    }
}
export default Pregunta