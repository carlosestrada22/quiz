import React, { Component } from 'react';

class Resultado extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        let $ = this.props.$

        $('#modal-result').modal();
        $(document).ready(function () {
            $('#modal-result').modal('open');
        });

        console.log("resultado")

    }
    render() {
        return (
            <div>
                <div id="modal-result" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4>Resultado</h4>
                        <h5>{this.props.Indicador}</h5>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat purple lighten-3">Ok</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Resultado