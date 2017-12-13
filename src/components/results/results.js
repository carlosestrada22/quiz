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
    }
    render() {
        return (
            <div>
                {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal-result">Modal</a> */}
                <div id="modal-result" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4>Resultado</h4>
                        <p>Este es tu resultado</p>
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