import React, { Component } from 'react';
import './pregunta.css'
import ModalInicial from '../modal-inicial/modal-inicial.js'
import Resultado from '../results/results.js'

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
            Bandera: false,
            Respuestas: [],
            Indicador: ""

        }
    }
    componentDidMount() {
        this.setState({ Questions: this.props.Preguntas })
        this.setState({ Actual: this.state.Questions.shift() })
        // console.log(this.props.$)    
        this.props.$('.tooltipped').tooltip({ delay: 50 });

    }
    render() {
        return (
            <div id="pregunta" className="pregunta container">
                {
                    this.state.EnCurso === 2 ? <Resultado $={this.props.$} Indicador={this.state.Indicador}/> : ""
                }
                <ModalInicial $={this.props.$} Iniciar={Begin} referencia={this} flag={this.state.Bandera} />
                <div className="row" id="row-preguntas">
                    <div className="col s12 m12 l12 xl12">
                        <div className="card">
                            <div className="card-image">
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
        <a id={`responder-${Valor}`}
            onClick={() => Aumentar(referencia, Valor)}
            className="waves-effect waves-light btn btn-large btn-responder tooltipped"
            data-position="bottom" data-delay="50" data-tooltip={getTooltip(Valor)}>
            <i className="material-icons large">{cadena.toString()}</i>
        </a>
    )
}
const getTooltip = valor => {
    switch (valor) {
        default:
            return ""
            break;
        case 1:
            return "Muy poca"
            break;
        case 2:
            return "Poca"
            break;
        case 3:
            return "neutral"
            break;
        case 4:
            return "Mucha"
            break;
        case 5:
            return "Demasiada"
            break;
    }
}
const Begin = (ref, valor) => {
    Aumentar(ref, valor)
    ref.setState({ Questions: ref.props.Preguntas, Bandera: true })
    ref.props.$('#responder-1')[0].click()
}
const Aumentar = (ref, Valor) => {
    if (ref.state.Questions.length) {
        if (ref.state.Actual.Pregunta) {
            ref.state.Questions[0].Respuesta = Valor
        }
        ref.setState({
            Actual: ref.state.Questions.shift(),
            Respuestas: ref.state.Respuestas.concat(ref.state.Questions[0])
        })
    } else {
        if (ref.state.Bandera) {
            document.querySelector("#row-preguntas").classList.add("hide")
            ref.setState({ EnCurso: 2 })
            responder(ref)
        }
    }
}

const responder = (ref) => {
    ref.props.axios.post(`${window.location.protocol}//${window.location.hostname}:3008/answers`, {
        Respuestas: ref.state.Respuestas,
        User: ref.props.User
    }).then(res => {
        ref.setState({Indicador: res.data.toString()})
        console.log(res)
    })
}
export default Pregunta