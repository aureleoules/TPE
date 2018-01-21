import React from 'react';

class Composition extends React.Component {

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
                    <p className="title">Composition</p>
                </div>
                <div className={`modal ${this.state.modal ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content animated fadeIn">
                        <button className="close is-large" aria-label="close" onClick={() => this.setState({modal: false})}><span className="fa fa-close"></span></button>
                        <div className="content-modal">
                            <h1 className="has-text-centered">Composition du bonbon</h1>
                            <div className="columns" style={{marginTop: 15}}>
                                <div className="column">
                                    <img src="/images/sugar.jpeg"/>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        Le bonbon est <b>composé</b> de
                                        <ul>
                                            <li>saccarose</li>
                                            <li>sirop de glucose</li>
                                            <li>additifs</li>
                                            <li>acide citrique</li>
                                            <li>arômes</li>
                                            <li>gélifiant</li>
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

export default Composition;