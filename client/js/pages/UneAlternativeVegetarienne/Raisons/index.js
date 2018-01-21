import React from 'react';

class Raisons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    render() {
        return (
            <div>
                <div onClick={() => this.setState({modal: true})} className="tile is-child box partie">
                    <p className="title">Raisons</p>
                </div>
                <div className={`modal ${this.state.modal ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content animated fadeIn">
                        <button className="close is-large" aria-label="close" onClick={() => this.setState({modal: false})}>
                            <img src="/images/close.png"/>
                        </button>                        <div className="content-modal">
                            <h1 className="has-text-centered" style={{color: "#4a4a4a"}}>Raisons</h1>
                            <div className="columns" style={{marginTop: 15}}>
                                <div className="column">
                                    <img src="/images/reasons.jpeg"/>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        Il existe plusieurs raisons:
                                        <ul>
                                            <li>Allergies</li>
                                            <li>Religion ou mode de vie (végétariens)</li>
                                            <li>Lutte contre la souffrance animale</li>
                                        </ul>
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

export default Raisons;