import React from 'react';

class Protocole extends React.Component {

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
                    <p className="title">Protocole</p>
                </div>
                <div className={`modal ${this.state.modal ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content fade-in">
                        <button className="close is-large" aria-label="close" onClick={() => this.setState({modal: false})}>
                            <img src="images/close.png"/>
                        </button>
                        <div className="content-modal">
                            <h1 className="has-text-centered">Protocole</h1>
                            <div className="columns" style={{marginTop: 15}}>
                                <div className="column">
                                    <img src="images/protocole.jpg"/>
                                </div>
                                <div className="column">
                                    <div className="content" style={{maxHeight: "535px", overflowY: "scroll"}}>
                                        Protocole de préparation d'un arôme à la banane:
                                        <ul>
                                            <li>Chauffer de l’eau dans un bécher à 90°C</li>
                                            <li>Introduire avec précaution 10 mL d’acide acétique dans un tube à essai</li>
                                            <li>Verser 10 mL d’alcool isoamylique</li>
                                            <li>Ajouter quelques gouttes d’acide sulfurique</li>
                                            <li>Fermer le tube et le laisser réfrigérer</li>
                                            <li>Placer le tube à essai dans de l’eau chaude pendant 15 minutes</li>
                                            <li>Verser le contenu du tube dans un verre à pied rempli d’eau salée saturée</li>
                                            <li>Récupérer le liquide qui surnage avec un ampoule à décanter</li>
                                        </ul>
                                        Protocole de préparation d'un bonbon:
                                        <ul>
                                            <li>Verser 15 cL d’un jus de raisin / banane écrasée et eau dans une casserole avec 2g d’agar-agar</li>
                                            <li>Attendre ébulition</li>
                                            <li>Verse 80g de sucre</li>
                                            <li>Arrêter la cuisson lorsque le mélange monte</li>
                                            <li>Laisser refroidir</li>
                                            <li>Verse dans des moules</li>
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

export default Protocole;