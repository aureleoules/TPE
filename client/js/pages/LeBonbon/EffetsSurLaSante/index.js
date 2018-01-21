import React from 'react';

class EffetsSurLaSante extends React.Component {

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
                    <p className="title">Effets sur la santé</p>
                </div>
                <div className={`modal ${this.state.modal ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content fade-in">
                        <button className="close is-large" aria-label="close" onClick={() => this.setState({modal: false})}>
                            <img src="/images/close.png"/>
                        </button>                        <div className="content-modal">
                            <h1 className="has-text-centered">Effets sur la santé</h1>
                            <div className="columns" style={{marginTop: 15}}>
                                <div className="column">
                                    <img src="/images/healthy.jpeg"/>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        <b>Effets</b> de la gélatine de porc sur la santé:
                                        <ul>
                                            <li>Riche en collagène → prévient de nombreuses maladies</li>
                                            <li>Régule le taux de cholestérol dans le sang</li>
                                            <li>Peut faire perdre du poids</li>
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

export default EffetsSurLaSante;