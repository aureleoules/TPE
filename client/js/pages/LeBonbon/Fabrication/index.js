import React from 'react';

class Fabrication extends React.Component {

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
                    <p className="title">Fabrication</p>
                </div>
                <div className={`modal ${this.state.modal ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content fade-in">
                        <button className="close is-large" aria-label="close" onClick={() => this.setState({modal: false})}>
                            <img src="images/close.png"/>
                        </button>                        <div className="content-modal">
                            <h1 className="has-text-centered">Fabrication</h1>
                            <div className="columns" style={{marginTop: 15}}>
                                <div className="column">
                                    <iframe src="https://player.vimeo.com/video/180163754" width="480" height="270" frameBorder={0} allowFullScreen></iframe>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        <b>Trois étapes</b> de la <b>fabrication</b> de la gélatine de porc:
                                        <ul>
                                            <li>Matière première pré-traitée pour préparer l’extraction du collagène</li>
                                            <li>Produit obtenu passe dans des bains d’eau chaude et solutions acides pour transformer le collagène en gélatine</li>
                                            <li>Gélatine filtrée, stérilisée, séchée puis broyée</li>
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

export default Fabrication;