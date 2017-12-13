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
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Disagree</a>
                        <a href="#!" onClick={() => this.props.Iniciar(this.props.referencia, 0)} className="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default ModalInicial