import React, { Component } from 'react';

class ModalInicial extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        let $ = this.props.$

        $('#modal-inicio').modal();
        $(document).ready(function () {
            $('#modal-inicio').modal('open');
        });
    }
    render() {
        return (
            <div>
                {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}
                <div id="modal-inicio" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4>Acerca del estudio</h4>
                        <p>!Muchas gracias por participar en este estudio!</p>
                        <p>Queremos conocer la carga emotiva de algunas palabras en tres dimensiones:</p>
                        <ul>
                            <li>Placentera - No placentera (positiva vs negativa)</li>
                            <li>Reactiva - No reactiva (gran estado de alerta o actividad vs bajo estado de alerta o actividad)</li>
                            <li>Dominante - sumisa (tiene mucho control o influencia vs poco control o influencia)</li>
                        </ul>
                        <p>Para lo cual te pedimos que selecciones la figura que represente tu percepcion de la palabra</p>
                        <p>Al final te daremos retroalimentación indicativa de tus respuestas en relación al bloque de palabras que evaluaste</p>
                        <p></p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">No estoy de acuerdo</a>
                        <a href="#!" onClick={() => this.props.Iniciar(this.props.referencia, 0)} className="modal-action modal-close waves-effect waves-green btn-flat ">De acuerdo</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default ModalInicial